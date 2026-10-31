"use client";

import * as React from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ValueItem {
  label: string;
  value: string;
  subtext: string;
  badge?: string;
  href?: string;
}

const valueItems: ValueItem[] = [
  {
    label: "Harga Mulai",
    value: "2 Jutaan",
    subtext: "Transparan & Tanpa Biaya Tersembunyi",
    badge: "Terjangkau",
    href: "#paket-harga",
  },
  {
    label: "Dipercaya Lebih Dari",
    value: "750+ Klien",
    subtext: "UMKM, Korporasi, & Instansi Resmi",
    badge: "Teruji",
    href: "/portofolio",
  },
  {
    label: "Gratis Domain Hosting",
    value: "1 Tahun",
    subtext: "Termasuk Domain .com / .id & Cloud NVMe",
    badge: "Spesial",
    href: "#paket-harga",
  },
  {
    label: "Tersedia Layanan",
    value: "Website Custom",
    subtext: "Bukan Template, 100% Hak Milik Source Code",
    badge: "Full Custom",
    href: "/layanan",
  },
];

export function TrustValueBar() {
  return (
    <section
      aria-label="Keunggulan Nilai & Penawaran Spesial Bahari Tech Solution"
      className="relative bg-gradient-to-r from-[#172554] via-[#233876] to-[#0f3d63] text-white border-y border-sky-400/20 py-8 sm:py-9 lg:py-10 overflow-hidden select-none"
    >
      {/* Ambient Brand Accent Lighting (Pure CSS, No AI assets) */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-32 bg-sky-500/15 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-32 bg-[#00D09C]/10 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={0.05}>
          {/* Grid 4 Kolom di Desktop, 2 Kolom di Mobile & Tablet */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/15">
            {valueItems.map((item, idx) => {
              const content = (
                <div className="flex flex-col items-center text-center px-3 sm:px-4 lg:px-6 group cursor-pointer transition-transform duration-200 hover:-translate-y-0.5">
                  {/* Label Atas: Ukuran Pas & Kontras Nyaman */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-xs sm:text-[13px] font-medium text-sky-200/90 tracking-wide">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="hidden sm:inline-block text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-white/10 text-sky-200 border border-white/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Nilai Utama: Bold, Jelas & Berwibawa */}
                  <div className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white tracking-tight leading-tight group-hover:text-sky-300 transition-colors">
                    {item.value}
                  </div>

                  {/* Keterangan Pendukung / Subtext */}
                  <div className="mt-1 text-[11px] sm:text-xs text-sky-100/75 leading-relaxed max-w-[220px]">
                    {item.subtext}
                  </div>
                </div>
              );

              return item.href ? (
                <Link
                  key={idx}
                  href={item.href}
                  className="block focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-xl"
                  title={`${item.label}: ${item.value}`}
                >
                  {content}
                </Link>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

