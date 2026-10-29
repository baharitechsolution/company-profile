"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    value: "50+",
    label: "Sistem & Aplikasi Rilis",
    sublabel: "Web, Mobile & ERP Enterprise",
  },
  {
    value: "99.98%",
    label: "SLA Uptime Cloud",
    sublabel: "Infrastruktur AWS & GCP Andal",
  },
  {
    value: "100%",
    label: "Hak Milik Intelektual",
    sublabel: "Source Code Bebas Lock-in (NDA)",
  },
  {
    value: "4.9 / 5",
    label: "Kepuasan Klien",
    sublabel: "Kemitraan Jangka Panjang",
  },
];

export function WelcomeSection() {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-white border-b border-slate-200 overflow-hidden relative select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Baris Atas: Narasi Profil Korporat (Kiri) & Foto Tim Engineering Autentik (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Kolom Kiri: Narasi Profil Perusahaan & Komitmen Layanan */}
          <ScrollReveal direction="up" delay={0.05} className="lg:col-span-6 space-y-2.5 sm:space-y-3">
            
            {/* Eyebrow Label Korporat Bersih */}
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#1482C2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                Tentang {siteConfig.name}
              </span>
            </div>

            {/* Headline Utama Berwibawa & Kompak */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#112252] leading-tight tracking-tight">
              Membangun Solusi Teknologi Nyata untuk Kemajuan Bisnis Indonesia
            </h2>

            {/* Deskripsi Naratif Padat & Berbobot */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Di era digital yang serba cepat, memiliki sistem perangkat lunak yang andal merupakan fondasi utama agar bisnis beroperasi efisien, minim kendala operasional, dan bersaing secara berkelanjutan.
              </p>
              <p>
                <strong>{siteConfig.name}</strong> hadir mendampingi perusahaan, institusi, dan pelaku usaha di Indonesia mengotomatiskan alur kerja manual serta mempercepat pertumbuhan melalui rekayasa software kustom berstandar enterprise.
              </p>
            </div>

            {/* 3 Komitmen Layanan Utama (Rapi, Sejajar, & Profesional) */}
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>100% Hak Milik IP</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span>Garansi Bebas Bug</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#1482C2]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#1482C2] shrink-0" />
                <span>Clean Architecture</span>
              </div>
            </div>

          </ScrollReveal>

          {/* Kolom Kanan: Visual Bersih Tim Rekayasa Perangkat Lunak */}
          <ScrollReveal direction="up" delay={0.15} className="lg:col-span-6">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              
              {/* Bingkai Foto Tim Rekayasa Bersih & Autentik (Proporsi Kompak) */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_-6px_rgba(17,34,82,0.12)] border border-slate-200/90 bg-slate-900 group">
                <Image
                  src="/images/about/engineering-team.jpg"
                  alt="Tim Rekayasa Perangkat Lunak Bahari Tech Solution Berkolaborasi Merancang Arsitektur Sistem"
                  width={1280}
                  height={720}
                  priority
                  className="w-full h-[200px] sm:h-[225px] lg:h-[245px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* Baris Bawah: 4 Pilar Metrik Pencapaian Sejajar Sempurna Kanan-Kiri */}
        <ScrollReveal direction="up" delay={0.25} className="mt-5 pt-4 border-t border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-[#1482C2] hover:shadow-2xs transition-all flex items-center gap-2.5 sm:gap-3"
              >
                <div className="text-lg sm:text-xl font-black text-[#112252] tracking-tight shrink-0">
                  {stat.value}
                </div>
                <div className="min-w-0">
                  <div className="text-[11.5px] sm:text-xs font-bold text-[#1482C2] leading-tight truncate">
                    {stat.label}
                  </div>
                  <div className="text-[9.5px] sm:text-[10px] text-slate-500 leading-tight truncate mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
