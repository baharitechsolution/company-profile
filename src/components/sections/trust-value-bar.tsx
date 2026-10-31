"use client";

import * as React from "react";
import Link from "next/link";
import { Wallet, Users, Globe, Code2, ArrowRight } from "lucide-react";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/scroll-reveal";

interface MarketingPillar {
  icon: React.ElementType;
  badge: {
    text: string;
    className: string;
  };
  category: string;
  highlight: string;
  title: string;
  description: string;
  actionText: string;
  href: string;
}

const marketingPillars: MarketingPillar[] = [
  {
    icon: Wallet,
    badge: {
      text: "Mulai Terjangkau",
      className: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
    },
    category: "Investasi Awal",
    highlight: "2 Jutaan",
    title: "Harga Mulai Terukur",
    description:
      "Biaya transparan tanpa biaya lisensi tersembunyi. Solusi tepat untuk akselerasi kehadiran digital bisnis & UMKM.",
    actionText: "Lihat Estimasi Paket",
    href: "#paket-harga",
  },
  {
    icon: Users,
    badge: {
      text: "Teruji & Berbadan Hukum",
      className: "bg-sky-50 text-[#1482C2] border-sky-200/70",
    },
    category: "Jejak Rekam",
    highlight: "750+ Klien",
    title: "Dipercaya Lintas Bisnis",
    description:
      "Mitra terpercaya bagi UMKM, instansi, hingga korporasi dalam menghadirkan aplikasi web dan mobile berkualitas.",
    actionText: "Eksplor Portofolio",
    href: "/portofolio",
  },
  {
    icon: Globe,
    badge: {
      text: "Bonus Rilis Perdana",
      className: "bg-amber-50 text-amber-700 border-amber-200/70",
    },
    category: "Infrastruktur Lengkap",
    highlight: "1 Tahun",
    title: "Gratis Domain & Hosting",
    description:
      "Langsung siap online tanpa repot sewa server. Termasuk domain resmi (.com / .id) dan performa cloud SSD NVMe aktif 1 tahun.",
    actionText: "Pelajari Rincian Bonus",
    href: "#paket-harga",
  },
  {
    icon: Code2,
    badge: {
      text: "Clean Architecture",
      className: "bg-slate-100 text-slate-700 border-slate-200",
    },
    category: "Metodologi Rekayasa",
    highlight: "Website Custom",
    title: "Bukan Template Instan",
    description:
      "Source code 100% hak milik Anda. Arsitektur modular yang bebas dikembangkan mandiri tanpa vendor lock-in.",
    actionText: "Konsultasi Kustom",
    href: "/layanan",
  },
];

export function TrustValueBar() {
  return (
    <section
      aria-label="Keunggulan Penawaran Kemitraan Bahari Tech Solution"
      className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFC] border-y border-slate-200/90 select-none overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi Berwibawa & Konsisten dengan Tema Website */}
        <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="h-0.5 w-5 bg-[#1482C2]" aria-hidden="true" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#1482C2]">
              Standar Layanan &amp; Penawaran Kemitraan
            </span>
            <span className="h-0.5 w-5 bg-[#1482C2]" aria-hidden="true" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#233876] tracking-tight leading-tight">
            Keunggulan Bernilai Nyata untuk Bisnis Anda
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Komitmen transparansi biaya, infrastruktur hosting siap pakai, dan jaminan kepemilikan source code 100% tanpa risiko keterikatan sepihak.
          </p>
        </ScrollReveal>

        {/* Grid 4 Kartu Marketing: Elegan, Bersih, & Konsisten Tema (Bebas Icon AI) */}
        <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {marketingPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollStaggerItem key={idx}>
                <Link
                  href={item.href}
                  className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:border-[#1482C2] hover:shadow-md hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1482C2]/40"
                  title={`${item.title}: ${item.highlight}`}
                >
                  <div>
                    {/* Header Kartu: Ikon Lucide Bersih + Badge Status */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                      <div className="h-10 w-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#1482C2] group-hover:bg-[#1482C2] group-hover:text-white transition-colors duration-200 shrink-0">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>

                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.badge.className}`}
                      >
                        {item.badge.text}
                      </span>
                    </div>

                    {/* Kategori Label Kecil */}
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>

                    {/* Highlight Angka / Nilai Utama (Tipografi Tebal & Jelas) */}
                    <div className="text-2xl sm:text-[26px] font-extrabold text-[#233876] tracking-tight leading-tight mb-1.5 group-hover:text-[#1482C2] transition-colors">
                      {item.highlight}
                    </div>

                    {/* Judul Pendukung */}
                    <h3 className="text-sm font-bold text-slate-800 mb-1.5 leading-snug">
                      {item.title}
                    </h3>

                    {/* Deskripsi Marketing Ringkas & Padat */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Kartu: Link Aksi Halus */}
                  <div className="pt-4 mt-4 border-t border-slate-100/80 flex items-center justify-between text-xs font-semibold text-[#1482C2] group-hover:text-[#0E6496] transition-colors">
                    <span>{item.actionText}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </div>
                </Link>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>

      </div>
    </section>
  );
}
