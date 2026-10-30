"use client";

import Image from "next/image";
import { ShieldCheck, Building2, Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface CorporateMetric {
  value: string;
  label: string;
  description: string;
}

const corporateMetrics: CorporateMetric[] = [
  {
    value: "50+",
    label: "Solusi Digital Rilis",
    description: "Web application, portal enterprise, sistem ERP, dan aplikasi mobile teruji produksi.",
  },
  {
    value: "99.98%",
    label: "Rata-Rata SLA Uptime",
    description: "Infrastruktur cloud berstandar AWS & GCP dengan arsitektur failover otomatis.",
  },
  {
    value: "100%",
    label: "Hak Milik Source Code",
    description: "Kode sumber & hak kekayaan intelektual (IP) diserahkan penuh tanpa vendor lock-in.",
  },
  {
    value: "Resmi CV",
    label: "Badan Usaha & SPK Sah",
    description: "Terdaftar Kemenkumham RI, kepatuhan NDA, izin usaha resmi, & faktur pajak.",
  },
];

export function WelcomeSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-slate-200 overflow-hidden relative select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Baris Atas: Narasi Profil Korporat (Kiri) & Foto Gedung Kantor Autentik (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Kolom Kiri: Narasi Profil Perusahaan & Jaminan Enterprise */}
          <ScrollReveal direction="up" delay={0.05} className="lg:col-span-7 space-y-4">
            
            {/* Eyebrow Label Korporat Bersih */}
            <div className="flex items-center gap-2.5">
              <span className="h-0.5 w-6 bg-[#1482C2]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#1482C2]">
                Profil Perusahaan · CV. Bahari Tech Solution
              </span>
            </div>

            {/* Headline Utama Berwibawa */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#112252] leading-tight tracking-tight">
              Mitra Rekayasa Perangkat Lunak &amp; Transformasi Sistem Digital Enterprise
            </h2>

            {/* Deskripsi Naratif Nyata & Padat (Bebas Klise AI) */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="font-bold text-[#112252]">{siteConfig.name}</strong> adalah software house dan konsultan teknologi berbadan hukum resmi yang berfokus pada rancang bangun perangkat lunak kustom—mulai dari sistem enterprise ERP, portal web berskala tinggi, hingga aplikasi mobile iOS &amp; Android.
              </p>
              <p>
                Kami memadukan ketelitian rekayasa <em>clean code</em> dengan kepatuhan tata kelola bisnis. Setiap proyek didukung kontrak kerja sah (SPK), perjanjian kerahasiaan data (NDA), faktur pajak resmi, serta penyerahan hak cipta dan <em>source code</em> penuh tanpa biaya royalti tersembunyi.
              </p>
            </div>

            {/* 3 Pilar Jaminan Enterprise (Matriks Terstruktur, Konsisten & Profesional) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3 hover:bg-white hover:border-[#1482C2]/40 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="h-4 w-4 text-[#1482C2] shrink-0" />
                  <span className="text-xs font-bold text-[#112252]">100% Hak Milik IP</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Source code &amp; aset sistem diserahkan utuh, bebas vendor lock-in.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3 hover:bg-white hover:border-[#1482C2]/40 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="h-4 w-4 text-[#1482C2] shrink-0" />
                  <span className="text-xs font-bold text-[#112252]">Badan Usaha Resmi</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Berbadan hukum CV resmi, dokumen SPK sah, &amp; faktur pajak.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/90 bg-slate-50/70 p-3 hover:bg-white hover:border-[#1482C2]/40 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Code2 className="h-4 w-4 text-[#1482C2] shrink-0" />
                  <span className="text-xs font-bold text-[#112252]">Clean Architecture</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Arsitektur modular, kode terstandarisasi, &amp; garansi pasca rilis.
                </p>
              </div>
            </div>

          </ScrollReveal>

          {/* Kolom Kanan: Visual Autentik Gedung Kantor Resmi (Murni Bersih Tanpa Overlay Badge AI) */}
          <ScrollReveal direction="up" delay={0.15} className="lg:col-span-5">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_30px_-8px_rgba(17,34,82,0.12)] border border-slate-200 bg-slate-100 group">
                <Image
                  src="/images/kantor/kantor_bts.webp"
                  alt="Gedung Kantor dan Pusat Operasional Rekayasa CV. Bahari Tech Solution"
                  width={1920}
                  height={1479}
                  priority
                  className="w-full h-[250px] sm:h-[300px] lg:h-[345px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Baris Bawah: Panel Metrik Korporat Terpadu (Konsisten Satu Warna Brand Tanpa Warna-Warni) */}
        <ScrollReveal direction="up" delay={0.25} className="mt-8 pt-6 border-t border-slate-200">
          <div className="rounded-2xl border border-slate-200/90 bg-linear-to-b from-slate-50/70 to-slate-100/30 p-4 sm:p-5 lg:p-6 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
              {corporateMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="lg:px-5 first:lg:pl-2 last:lg:pr-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#112252] tracking-tight leading-none">
                      {metric.value}
                    </div>
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-2">
                      {metric.label}
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
