import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Konsultasi Proyek Software & Estimasi RAB Resmi | ${siteConfig.name}`,
  description:
    "Konsultasikan kebutuhan pembuatan software, aplikasi mobile, web enterprise, atau sistem ERP Anda bersama tim engineer Bahari Tech Solution. Dapatkan konsultasi arsitek gratis dan estimasi RAB transparan.",
  keywords: [
    "Konsultasi Pembuatan Software Gratis",
    "Biaya Pembuatan Aplikasi Mobile",
    "Estimasi Harga Bikin Web Perusahaan",
    "Jasa Bikin Software Kantor",
    "Kontak Software House Jakarta",
    "Software House Tegal WhatsApp",
    "Jasa Bikin Web Tegal Murah Profesional",
    "Konsultan IT Kota Tegal & Slawi",
    "Vendor Pembuatan Software Kabupaten Tegal",
    "Hire Software Developer Indonesia",
    "Konsultan IT Terpercaya",
    "Nomor WhatsApp Software House",
  ],
  alternates: {
    canonical: "/kontak",
  },
  openGraph: {
    title: `Hubungi Kami - Konsultasi Solusi Software Gratis | ${siteConfig.name}`,
    description:
      "Hubungi konsultan teknologi kami untuk mendiskusikan roadmap transformasi digital dan pembuatan software kustom Anda.",
    url: `${siteConfig.url}/kontak`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1482C2] block mb-2">
            KONSULTASI & DISKUSI
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#112252]">
            Wujudkan Transformasi Sistem Digital Anda
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Kirimkan rincian kebutuhan Anda melalui formulir terenkripsi di bawah atau hubungi tim konsultan kami via WhatsApp resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs">
            <h2 className="text-xl font-bold text-[#112252] mb-1">
              Formulir Permintaan Konsultasi
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Data Anda aman dan diproses langsung oleh tim rekayasa perangkat lunak kami.
            </p>
            <ContactForm />
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8">
              <h3 className="text-base font-bold text-[#112252] mb-6 uppercase tracking-wider">
                Kontak Resmi Kantor
              </h3>

              <div className="space-y-5 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="rounded-lg bg-[#EAF5FC] p-2.5 text-[#1482C2] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400">
                      Alamat Kantor
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="rounded-lg bg-[#EAF5FC] p-2.5 text-[#1482C2] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400">
                      Email Korespondensi
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#1482C2]"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="rounded-lg bg-[#EAF5FC] p-2.5 text-[#1482C2] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400">
                      Telepon / WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#1482C2]"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="rounded-lg bg-[#EAF5FC] p-2.5 text-[#1482C2] shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400">
                      Jam Kerja Operasional
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {siteConfig.contact.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call */}
            <div className="rounded-2xl border border-slate-200 bg-[#EAF5FC] p-6">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="h-5 w-5 text-[#1482C2]" />
                <h4 className="text-sm font-bold text-[#112252]">
                  Diskusi Cepat via WhatsApp
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ingin konsultasi langsung dengan Project Lead tanpa menunggu? Hubungi nomor WhatsApp resmi kami sekarang.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech,%20saya%20ingin%20konsultasi%20langsung`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#1482C2] px-4 py-3 text-xs font-bold text-white hover:bg-[#0E6496] transition-colors"
              >
                Mulai Chat WhatsApp Resmi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
