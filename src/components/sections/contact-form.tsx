"use client";

import * as React from "react";
import { useTransition } from "react";
import { submitContactAction } from "@/actions/contact.action";
import { servicesData } from "@/config/services";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string;
    fieldErrors?: Record<string, string[]>;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      serviceInterest: String(formData.get("serviceInterest") || ""),
      message: String(formData.get("message") || "").trim(),
      _security_honeypot: String(formData.get("_security_honeypot") || ""),
    };

    startTransition(async () => {
      const response = await submitContactAction(payload);
      if (response.success) {
        setStatus({
          type: "success",
          message: response.message,
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: response.message,
          fieldErrors: response.errors,
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field: Tersembunyi dari manusia, menjebak bot spam otomatis */}
      <input
        type="text"
        name="_security_honeypot"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      {status.type === "success" && (
        <div className="flex items-start gap-3 rounded-lg bg-[#EAF5FC] p-4 text-[#112252] border border-[#1482C2]">
          <CheckCircle2 className="h-5 w-5 text-[#1482C2] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-semibold">{status.message}</p>
        </div>
      )}

      {status.type === "error" && (
        <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4 text-red-800 border border-red-200">
          <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-semibold">{status.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold text-slate-800 mb-1.5"
          >
            Nama Lengkap *
          </label>
          <Input
            id="fullName"
            name="fullName"
            required
            maxLength={80}
            placeholder="Contoh: Hendra Wijaya"
            className="border-slate-300 focus-visible:border-[#1482C2] focus-visible:ring-0"
          />
          {status.fieldErrors?.fullName && (
            <p className="text-xs text-red-600 mt-1">
              {status.fieldErrors.fullName[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold text-slate-800 mb-1.5"
          >
            Alamat Email Perusahaan / Pribadi *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            maxLength={100}
            placeholder="hendra@perusahaan.com"
            className="border-slate-300 focus-visible:border-[#1482C2] focus-visible:ring-0"
          />
          {status.fieldErrors?.email && (
            <p className="text-xs text-red-600 mt-1">
              {status.fieldErrors.email[0]}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold text-slate-800 mb-1.5"
          >
            Nomor WhatsApp / Telepon *
          </label>
          <Input
            id="phone"
            name="phone"
            required
            maxLength={20}
            placeholder="081234567890"
            className="border-slate-300 focus-visible:border-[#1482C2] focus-visible:ring-0"
          />
          {status.fieldErrors?.phone && (
            <p className="text-xs text-red-600 mt-1">
              {status.fieldErrors.phone[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-xs font-bold text-slate-800 mb-1.5"
          >
            Nama Instansi / Perusahaan
          </label>
          <Input
            id="company"
            name="company"
            maxLength={100}
            placeholder="PT Samudera Logistik Indonesia"
            className="border-slate-300 focus-visible:border-[#1482C2] focus-visible:ring-0"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="serviceInterest"
          className="block text-xs font-bold text-slate-800 mb-1.5"
        >
          Kebutuhan Solusi Software *
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          required
          defaultValue=""
          className="flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-900 transition-colors focus-visible:border-[#1482C2] focus-visible:outline-none"
        >
          <option value="" disabled>
            -- Pilih Kategori Layanan --
          </option>
          {servicesData.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Sistem Khusus / Kustom Lainnya">
            Sistem Khusus / Kustom Lainnya
          </option>
        </select>
        {status.fieldErrors?.serviceInterest && (
          <p className="text-xs text-red-600 mt-1">
            {status.fieldErrors.serviceInterest[0]}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold text-slate-800 mb-1.5"
        >
          Deskripsi Kebutuhan Proyek *
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={2000}
          placeholder="Jelaskan gambaran sistem atau aplikasi yang ingin Anda bangun, kendala operasional saat ini, atau perkiraan timeline pengerjaan..."
          className="border-slate-300 focus-visible:border-[#1482C2] focus-visible:ring-0 text-xs sm:text-sm"
        />
        {status.fieldErrors?.message && (
          <p className="text-xs text-red-600 mt-1">
            {status.fieldErrors.message[0]}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        variant="primary"
        className="w-full gap-2 h-12 text-sm font-bold"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Memverifikasi & Mengirim...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Kirim Pengajuan Konsultasi</span>
          </>
        )}
      </Button>

      <p className="text-[11px] text-center text-slate-500 pt-1">
        Sistem dilengkapi enkripsi SSL 256-bit dan sanitasi input otomatis. Informasi Anda dijamin kerahasiaannya.
      </p>
    </form>
  );
}
