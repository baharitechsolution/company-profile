"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ShieldCheck, Clock, ArrowRight, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/icons";

interface UnifiedCtaBannerProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  whatsappMessage?: string;
  consultantRole?: string;
  consultantName?: string;
  topics?: string[];
  className?: string;
}

export function UnifiedCtaBanner({
  eyebrow = "KONSULTASI RESMI · CV. BAHARI TECH SOLUTION",
  title = "Mulai Konsultasi & Wujudkan Solusi Digital Bisnis Anda",
  description = "Diskusikan rencana pembuatan aplikasi web, sistem enterprise ERP, maupun aplikasi mobile bersama konsultan resmi kami. Kami siap mendampingi Anda memetakan kebutuhan teknis, arsitektur sistem, dan estimasi Rencana Anggaran Biaya (RAB) secara transparan tanpa ikatan kontrak awal.",
  whatsappMessage = "Halo Tim Konsultan Bahari Tech Solution, saya ingin konsultasi mengenai rencana pembuatan website / aplikasi / software untuk bisnis kami.",
  consultantRole = "Admin Konsultan Resmi",
  consultantName = siteConfig.legalName,
  topics = ["Website Bisnis", "Aplikasi Mobile", "Sistem ERP", "Cloud Server"],
  className = "",
}: UnifiedCtaBannerProps) {
  const encodedWhatsapp = encodeURIComponent(whatsappMessage);

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80 select-none overflow-hidden ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.05}>
          {/* Card Wadah Konsultasi Terstruktur */}
          <div className="relative rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-6 sm:p-10 lg:p-12 shadow-xs overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-bl from-[#0EB8D8]/10 via-[#1482C2]/5 to-transparent blur-3xl -z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-[#1482C2]/5 via-[#0EB8D8]/5 to-transparent blur-3xl -z-10"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Kolom Kiri (7 Kolom): Narasi Kemitraan & Jaminan Nilai Resmi */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Eyebrow Resmi Bahari Tech */}
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-5 bg-[#1482C2]" aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                    {eyebrow}
                  </span>
                </div>

                {/* Headline Utama */}
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900 leading-tight tracking-tight">
                  {title}
                </h2>

                {/* Deskripsi */}
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {description}
                </p>

                {/* 3 Jaminan Utama Berstandar Mutu */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <Clock className="h-4 w-4 text-[#1482C2] shrink-0" aria-hidden="true" />
                    <span>Respons &lt; 15 Menit</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>Estimasi RAB 100% Gratis</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                    <ShieldCheck className="h-4 w-4 text-[#1482C2] shrink-0" aria-hidden="true" />
                    <span>Kerahasiaan Ide (NDA)</span>
                  </div>
                </div>

                <div className="pt-1 text-[11px] text-slate-500">
                  <span>Operasional: {siteConfig.contact.hours} · Konsultasi Daring &amp; Tatap Muka di Kantor Tegal</span>
                </div>

              </div>

              {/* Kolom Kanan (5 Kolom): Card Konsultan dengan Gambar cta.webp Eksklusif */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:border-[#1482C2]/50 hover:shadow-sm transition-all duration-300 overflow-hidden space-y-4">
                  
                  {/* Visual Header: Foto cta.webp Berbentuk Banner Kartu Premium */}
                  <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs group">
                    <Image
                      src="/cta.webp"
                      alt="Konsultan Rekayasa Perangkat Lunak CV. Bahari Tech Solution"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      priority={false}
                    />
                    {/* Gradient Overlay & Badge Status Online */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs border border-white/20 text-white text-[10px] font-semibold">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Konsultan Siap Diskusi</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h3 className="text-sm sm:text-base font-bold leading-tight drop-shadow-xs">
                        {consultantRole}
                      </h3>
                      <p className="text-[11px] text-slate-200 mt-0.5 drop-shadow-xs">
                        {consultantName}
                      </p>
                    </div>
                  </div>

                  {/* Keterangan Singkat Konsultasi */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Siap melayani konsultasi kebutuhan website, sistem ERP, maupun aplikasi Android &amp; iOS secara langsung 1-on-1 tanpa perantara.
                  </p>

                  {/* Topik Konsultasi */}
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    {topics.map((topic, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Aksi Utama: Chat WhatsApp & Formulir */}
                  <div className="pt-1 space-y-2.5">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedWhatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-xs"
                      aria-label="Konsultasi langsung via WhatsApp dengan Admin Bahari Tech Solution"
                    >
                      <WhatsAppIcon className="h-4.5 w-4.5 text-white shrink-0" />
                      <span>Chat WhatsApp Admin</span>
                    </a>

                    <div className="text-center">
                      <Link
                        href="/bantuan#konsultasi"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1482C2] hover:text-[#0E6496] transition-colors"
                      >
                        <span>Atau ajukan formulir diskusi proyek resmi</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
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
