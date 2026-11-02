"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/icons";

export interface UnifiedCtaBannerProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  whatsappMessage?: string;
  consultationLink?: string;
  consultationButtonText?: string;
  whatsappButtonText?: string;
  imageAlt?: string;
  className?: string;
}

export function UnifiedCtaBanner({
  eyebrow = "Mulai Diskusi Teknologi",
  title = "Siap Membangun Sistem Digital Berkualitas Bersama Kami?",
  description = "Diskusikan rancangan arsitektur software, estimasi waktu pengerjaan, dan Rencana Anggaran Biaya (RAB) transparan langsung bersama software engineer Bahari Tech Solution.",
  whatsappMessage = "Halo Bahari Tech Solution, saya ingin konsultasi mengenai kebutuhan pembuatan software dan sistem digital.",
  consultationLink = "/kontak",
  consultationButtonText = "Ajukan Konsultasi & RAB",
  whatsappButtonText = "Chat Tim Engineer",
  imageAlt = "Konsultan Rekayasa Perangkat Lunak CV. Bahari Tech Solution",
  className = "",
}: UnifiedCtaBannerProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className={`py-10 sm:py-14 lg:py-16 bg-white border-t border-slate-100 select-none overflow-hidden ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.05}>
          <div className="relative rounded-3xl bg-slate-50/80 border border-slate-200/90 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xs">
            {/* Ambient background glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-bl from-[#0EB8D8]/10 via-[#1482C2]/5 to-transparent blur-3xl -z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-[#1482C2]/5 via-[#0EB8D8]/5 to-transparent blur-3xl -z-10"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Kolom Kiri: Teks CTA dan Tombol Aksi di Bawah Deskripsi */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-0.5 w-5 bg-[#1482C2]" aria-hidden="true" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                      {eyebrow}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#233876] tracking-tight leading-tight">
                    {title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                    {description}
                  </p>
                </div>

                {/* Tombol Aksi di Bawah Deskripsi Sesuai Desain Halaman Tentang Kami */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link href={consultationLink} className="w-full sm:w-auto">
                    <span className="w-full sm:w-auto h-11 px-6 rounded-lg bg-[#233876] hover:bg-[#1482C2] text-white text-xs sm:text-sm font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer">
                      <span>{consultationButtonText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    aria-label={`${whatsappButtonText} via WhatsApp`}
                  >
                    <span className="w-full sm:w-auto h-11 px-5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-2xs cursor-pointer">
                      <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366] shrink-0" />
                      <span>{whatsappButtonText}</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Kolom Kanan: Foto cta.webp dengan background shape geometris modern khas Bahari Tech & kartu informasi statis elegan */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px] h-[340px] sm:h-[380px] lg:h-[400px] flex justify-center items-center">
                  
                  {/* Background Shape Geometris Elegan (Senada dengan Brand & Hero) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0"
                  >
                    <svg
                      viewBox="0 0 420 400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                      className="w-full h-full opacity-90"
                    >
                      <circle cx="210" cy="200" r="145" fill="#EAF5FC" />
                      <circle cx="160" cy="180" r="115" fill="#1482C2" fillOpacity="0.12" />
                      <rect x="230" y="80" width="130" height="240" rx="65" fill="#0EB8D8" fillOpacity="0.15" />
                      <path d="M 80 370 A 130 130 0 0 1 340 370 Z" fill="#233876" fillOpacity="0.08" />
                    </svg>
                  </div>

                  {/* Card 1: Kiri Atas - Respons Cepat */}
                  <div className="absolute top-4 left-0 sm:-left-2 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                    <div className="h-6 w-6 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0">
                      <Clock className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[#233876] leading-none">
                        Respons &lt; 15 Menit
                      </span>
                      <span className="block text-[9px] font-medium text-emerald-600 mt-0.5">
                        Konsultasi Cepat &amp; Tanggap
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Kanan Atas - Konsultan Siap Diskusi */}
                  <div className="absolute top-10 right-0 sm:-right-2 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                    <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[#233876] leading-none">
                        Konsultan Siap
                      </span>
                      <span className="block text-[9px] font-medium text-slate-500 mt-0.5">
                        Diskusi 1-on-1 Langsung
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Kiri Bawah - Estimasi RAB Gratis */}
                  <div className="absolute bottom-6 left-0 sm:-left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                    <div className="h-6 w-6 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[#233876] leading-none">
                        Estimasi RAB 100% Gratis
                      </span>
                      <span className="block text-[9px] font-medium text-slate-500 mt-0.5">
                        Tanpa Komitmen Awal
                      </span>
                    </div>
                  </div>

                  {/* Card 4: Kanan Bawah - Jaminan NDA */}
                  <div className="absolute bottom-3 right-0 sm:-right-2 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                    <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-[#233876] leading-none">
                        Perjanjian NDA Resmi
                      </span>
                      <span className="block text-[9px] font-medium text-emerald-600 mt-0.5">
                        Kerahasiaan Ide Terjamin
                      </span>
                    </div>
                  </div>

                  {/* Foto Cutout Model Utama (Statis Elegan di Atas Shape) */}
                  <div className="relative z-10 w-full h-full flex items-end justify-center">
                    <Image
                      src="/cta.webp"
                      alt={imageAlt}
                      width={432}
                      height={578}
                      sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                      className="block w-auto h-full max-h-[300px] sm:max-h-[340px] lg:max-h-[370px] object-contain select-none pointer-events-none drop-shadow-xl"
                      priority={false}
                    />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
