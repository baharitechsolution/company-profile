"use client";

import * as React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ConsultationCtaBanner() {
  const messageGusti = encodeURIComponent(
    "Halo Mas Gusti (Bahari Tech Solution), saya ingin konsultasi rencana pembuatan website/software untuk bisnis saya."
  );

  const messageAjeng = encodeURIComponent(
    "Halo Mbak Ajeng (Bahari Tech Solution), saya ingin diskusi estimasi biaya & timeline proyek aplikasi/sistem."
  );

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          {/* Kartu Banner Konsultasi Utama Berwarna Solid Navy #233876 Resmi Bahari Tech (Tanpa Gradasi) */}
          <div className="relative rounded-3xl bg-[#233876] text-white pt-6 px-6 sm:pt-8 sm:px-8 lg:pt-8 lg:px-10 lg:pb-0 shadow-lg border border-[#1a2b58] overflow-hidden">

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
              
              {/* Kolom Kiri: Foto Tim Konsultan (Rata Bawah Presisi) */}
              <div className="lg:col-span-4 flex items-end justify-center lg:justify-start -mb-1 lg:mb-0">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none h-[220px] sm:h-[260px] lg:h-[290px] xl:h-[310px] flex items-end">
                  <Image
                    src="/images/about/cta-consultant-team.png"
                    alt="Tim Konsultan Bahari Tech Solution"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                    priority
                    className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                  />
                  
                  {/* Badge Mini Live Support Floating */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white px-3 py-1 rounded-full flex items-center gap-2 shadow-sm border border-slate-200">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 tracking-tight">
                      Konsultan Siap Membantu
                    </span>
                  </div>
                </div>
              </div>

              {/* Kolom Tengah: Teks Ajakan Konsultasi Ramah & Profesional */}
              <div className="lg:col-span-5 text-center lg:text-left space-y-3 pb-6 sm:pb-8 lg:pb-8 lg:pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-sky-200 tracking-wide uppercase">
                  <span>Konsultasi Proyek 100% Gratis</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[34px] font-bold text-white tracking-tight leading-tight">
                  Konsultasi Gratis Sekarang
                </h2>

                <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Tim Bahari Tech Solution siap mendengarkan rencana sistem Anda, membantu memetakan arsitektur teknologi, dan menyusun estimasi anggaran secara transparan tanpa ikatan.
                </p>

                <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-sky-200 font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Respons WhatsApp &lt; 15 Menit
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Estimasi RAB &amp; Mockup Awal
                  </span>
                </div>
              </div>

              {/* Kolom Kanan: 2 Tombol WhatsApp Konsultan Resmi */}
              <div className="lg:col-span-3 flex flex-col gap-3 w-full max-w-xs mx-auto lg:max-w-none pb-6 sm:pb-8 lg:pb-8">
                
                {/* Tombol Konsultan 1: Solid Emerald WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${messageGusti}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-[#00D09C] hover:bg-[#00B789] text-slate-950 font-bold text-xs sm:text-sm tracking-tight shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  aria-label="Chat WhatsApp CS Gusti"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 text-slate-950 shrink-0" />
                  <span>Chat CS Gusti</span>
                </a>

                {/* Tombol Konsultan 2: Solid Border Button */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${messageAjeng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-tight border border-white/30 shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  aria-label="Chat WhatsApp CS Ajeng"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 text-white shrink-0" />
                  <span>Chat CS Ajeng</span>
                </a>

                <p className="text-[11px] text-center text-slate-300 tracking-tight pt-0.5">
                  Senin – Jumat: 07:30 – 16:30 WIB
                </p>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
