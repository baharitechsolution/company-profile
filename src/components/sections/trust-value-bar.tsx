"use client";

import * as React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ValueMetric {
  label: string;
  value: string;
  href: string;
}

const valueMetrics: ValueMetric[] = [
  {
    label: "Harga Mulai",
    value: "2 Jutaan",
    href: "#paket-harga",
  },
  {
    label: "Dipercaya Lebih Dari",
    value: "750+ Klien",
    href: "/portofolio",
  },
  {
    label: "Gratis Domain Hosting",
    value: "1 Tahun",
    href: "#paket-harga",
  },
  {
    label: "Tersedia Layanan",
    value: "Website Custom",
    href: "/layanan",
  },
];

export function TrustValueBar() {
  return (
    <section
      aria-label="Keunggulan Nilai & Penawaran Spesial CV. Bahari Tech Solution"
      className="bg-[#233876] border-y border-[#1b2b5d] py-7 sm:py-8 lg:py-9 select-none relative z-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.05}>
          {/* Grid 4 Kolom Tipografi Murni (100% Solid Warna Brand Bahari Tech, Bebas Template AI, Bebas Icon Pasaran) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-7 gap-x-4 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/15">
            {valueMetrics.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group flex flex-col items-center justify-center text-center px-3 sm:px-6 py-1 focus:outline-none focus:ring-2 focus:ring-sky-400/50 rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
                title={`${item.label}: ${item.value}`}
              >
                {/* Label Atas: Tipis, Rapi & Elegan */}
                <span className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide mb-1 group-hover:text-sky-200 transition-colors">
                  {item.label}
                </span>

                {/* Nilai Utama: Bold, Mantap & Jelas Sesuai Identitas Asli */}
                <span className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-tight group-hover:text-sky-300 transition-colors">
                  {item.value}
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
