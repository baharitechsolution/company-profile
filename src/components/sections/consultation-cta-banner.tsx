"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ShieldCheck, Clock, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

function WhatsAppIcon({ className = "h-4.5 w-4.5" }: { className?: string }) {
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
    "Halo Mas Gusti (Bahari Tech Solution), saya ingin konsultasi rencana pembuatan arsitektur website / software ERP untuk bisnis saya."
  );

  const messageAjeng = encodeURIComponent(
    "Halo Mbak Ajeng (Bahari Tech Solution), saya ingin diskusi estimasi biaya & timeline proyek aplikasi mobile / sistem."
  );

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80 select-none overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.05}>
          {/* Card Wadah Konsultasi Terstruktur - 100% Solid, Bersih, Sesuai Identitas Website */}
          <div className="rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-10 lg:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Kolom Kiri (7 Kolom): Narasi Kemitraan & Jaminan Nilai Resmi */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Eyebrow Resmi Bahari Tech */}
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-5 bg-[#1482C2]" aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                    KONSULTASI RESMI · CV. BAHARI TECH SOLUTION
                  </span>
                </div>

                {/* Headline Utama: Tegas, Elegan, & Humanis */}
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#233876] tracking-tight leading-tight">
                  Mulai Konsultasi &amp; Wujudkan Solusi Digital Bisnis Anda
                </h2>

                {/* Deskripsi Manusiawi Tanpa Bahasa Template */}
                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-2xl">
                  Diskusikan rencana pembuatan aplikasi web, sistem enterprise ERP, maupun aplikasi mobile bersama tim konsultan rekayasa kami. Kami siap membantu pemetaan kebutuhan teknis, arsitektur sistem, dan estimasi Rencana Anggaran Biaya (RAB) secara transparan tanpa ikatan kontrak awal.
                </p>

                {/* 3 Jaminan Utama Berstandar Mutu (Ikon Lucide Bersih) */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <Clock className="h-4 w-4 text-[#1482C2] shrink-0" aria-hidden="true" />
                    <span>Respons &lt; 15 Menit</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>Estimasi RAB 100% Gratis</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <ShieldCheck className="h-4 w-4 text-[#1482C2] shrink-0" aria-hidden="true" />
                    <span>Kerahasiaan Ide (NDA)</span>
                  </div>
                </div>

                <div className="pt-1 text-[11px] text-slate-400">
                  <span>Operasional Resmi: Senin – Jumat, 07:30 – 16:30 WIB · Melayani Konsultasi Daring &amp; Tatap Muka di Kantor Tegal</span>
                </div>

              </div>

              {/* Kolom Kanan (5 Kolom): Meja Konsultan Interaktif (2 Pilihan Jalur WhatsApp Profesional) */}
              <div className="lg:col-span-5 space-y-3.5">
                
                {/* Kartu Konsultan 1: Mas Gusti (Teknis & ERP) */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${messageGusti}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs hover:border-[#1482C2] hover:shadow-md transition-all duration-200 cursor-pointer"
                  title="Konsultasi Arsitektur Sistem & ERP dengan Mas Gusti"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar Inisial Korporat dengan Status Dot Hijau */}
                      <div className="relative shrink-0">
                        <div className="h-11 w-11 rounded-full bg-[#233876] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-2xs">
                          GP
                        </div>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" aria-hidden="true" />
                      </div>

                      {/* Detail Konsultan */}
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#1482C2] transition-colors">
                            Gusti Pratama
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-50 text-[#1482C2] border border-sky-100">
                            Technical Lead
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Konsultasi ERP, Web Portal &amp; Arsitektur Cloud
                        </p>
                      </div>
                    </div>

                    {/* Tombol Aksi WhatsApp Hijau Solid */}
                    <div className="shrink-0 h-9 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center gap-1.5 text-xs font-bold shadow-2xs transition-transform group-hover:scale-105">
                      <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
                      <span className="hidden sm:inline">Chat</span>
                    </div>
                  </div>
                </a>

                {/* Kartu Konsultan 2: Mbak Ajeng (Estimasi Biaya & Mobile App) */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${messageAjeng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs hover:border-[#1482C2] hover:shadow-md transition-all duration-200 cursor-pointer"
                  title="Konsultasi Estimasi Biaya & Mobile App dengan Mbak Ajeng"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar Inisial Korporat dengan Status Dot Hijau */}
                      <div className="relative shrink-0">
                        <div className="h-11 w-11 rounded-full bg-[#1482C2] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-2xs">
                          AL
                        </div>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white" aria-hidden="true" />
                      </div>

                      {/* Detail Konsultan */}
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#1482C2] transition-colors">
                            Ajeng Lestari
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                            Client Solutions
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Konsultasi Estimasi Biaya, UI/UX &amp; Aplikasi Mobile
                        </p>
                      </div>
                    </div>

                    {/* Tombol Aksi WhatsApp Hijau Solid */}
                    <div className="shrink-0 h-9 px-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center gap-1.5 text-xs font-bold shadow-2xs transition-transform group-hover:scale-105">
                      <WhatsAppIcon className="h-3.5 w-3.5 text-white" />
                      <span className="hidden sm:inline">Chat</span>
                    </div>
                  </div>
                </a>

              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
