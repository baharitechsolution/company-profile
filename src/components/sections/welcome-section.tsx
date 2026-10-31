"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CorporateMetric {
  value: string;
  label: string;
}

const corporateMetrics: CorporateMetric[] = [
  {
    value: "50+",
    label: "Solusi Digital Rilis",
  },
  {
    value: "99.98%",
    label: "Rata-Rata SLA Uptime",
  },
  {
    value: "40+",
    label: "Klien & Institusi Mitra",
  },
  {
    value: "4.9 / 5",
    label: "Skor Kepuasan Klien",
  },
];

export function WelcomeSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white border-b border-slate-100 overflow-hidden relative select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Baris Atas: Narasi Profil Korporat (Kiri) & Foto Gedung Kantor Autentik (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Kolom Kiri: Narasi Profil Perusahaan Bersih & Manusiawi */}
          <ScrollReveal direction="up" delay={0.05} className="lg:col-span-7 space-y-4">
            
            {/* Eyebrow Label Korporat Bersih */}
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                Profil Perusahaan · CV. Bahari Tech Solution
              </span>
            </div>

            {/* Headline Utama Berwibawa */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-slate-900 leading-tight tracking-tight">
              Mitra Rekayasa Perangkat Lunak &amp; Transformasi Sistem Digital Enterprise
            </h2>

            {/* Deskripsi Naratif: 1 Paragraf Padat, Ringan & Nyaman Dibaca */}
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              <strong className="font-semibold text-slate-900">{siteConfig.name}</strong> adalah software house dan konsultan teknologi berbadan hukum resmi yang berpusat di Tegal, Jawa Tengah. Kami mendampingi korporasi, institusi, dan pelaku usaha dalam rekayasa aplikasi web, sistem enterprise ERP, dan aplikasi mobile dengan arsitektur modern serta jaminan kepemilikan source code 100%.
            </p>

            {/* 3 Jaminan Utama Inline Bersih (Tanpa Kotak-Kotak Bertumpuk) */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0" />
                <span className="font-medium text-slate-700">Badan Usaha Sah (CV)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0" />
                <span className="font-medium text-slate-700">100% Hak Milik IP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0" />
                <span className="font-medium text-slate-700">Clean Architecture</span>
              </div>
            </div>

            {/* Link Aksi Halus */}
            <div className="pt-2">
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-600 hover:text-sky-700 transition-colors group"
              >
                <span>Pelajari legalitas dan profil kami selengkapnya</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </ScrollReveal>

          {/* Kolom Kanan: Visual Autentik Gedung Kantor Resmi */}
          <ScrollReveal direction="up" delay={0.15} className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100 group">
              <Image
                src="/images/kantor/kantor_bts_utama.png"
                alt="Gedung Kantor dan Pusat Operasional Rekayasa CV. Bahari Tech Solution"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </ScrollReveal>

        </div>

        {/* Baris Bawah: Metrik Sederhana, Lega & Enak di Mata (Tanpa Box Abu Tebal & Tanpa Paragraf Esai) */}
        <ScrollReveal direction="up" delay={0.25} className="mt-10 pt-8 border-t border-slate-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {corporateMetrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
