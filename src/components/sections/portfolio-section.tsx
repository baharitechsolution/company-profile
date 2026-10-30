"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2 } from "lucide-react";
import { portfolioData } from "@/config/portfolio";
import { Button } from "@/components/ui/button";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/scroll-reveal";

export function PortfolioSection() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white border-b border-slate-200 select-none overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header Ringkas & Konsisten */}
        <ScrollReveal direction="up" delay={0.05} className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-6 gap-3">
          <div className="max-w-xl space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                REKAM JEJAK &amp; STUDI KASUS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#233876] tracking-tight leading-tight">
              Portofolio Proyek Terkini
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Kumpulan solusi digital dan sistem perangkat lunak yang telah kami rancang dan implementasikan untuk berbagai mitra korporasi.
            </p>
          </div>
          <div>
            <Link href="/portofolio">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs font-bold h-9 px-4 border-slate-300 text-slate-700 bg-white hover:bg-[#1482C2] hover:text-white hover:border-[#1482C2] transition-colors shadow-2xs"
              >
                <span>Semua Proyek</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        {/* Portfolio Cards Grid: Elegan, Bersih & Nyaman di Mata */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {portfolioData.slice(0, 6).map((item) => (
            <ScrollStaggerItem key={item.id}>
              <div className="group flex flex-col justify-between h-full rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs hover:border-[#1482C2] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div>
                  {/* Meta Bar: Kategori & Tahun Rilis */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#EAF5FC] text-[#1482C2] text-[11px] font-semibold tracking-wide">
                      {item.category}
                    </span>
                    <span className="font-mono text-[11px] font-medium text-slate-400">
                      Tahun {item.year}
                    </span>
                  </div>

                  {/* Judul Proyek */}
                  <h3 className="text-base sm:text-[17px] font-bold text-[#233876] group-hover:text-[#1482C2] transition-colors leading-snug mt-3 mb-1.5">
                    {item.title}
                  </h3>

                  {/* Mitra Klien */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2.5 font-medium">
                    <Building2 className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span>Mitra: <strong className="text-slate-700 font-semibold">{item.client}</strong></span>
                  </div>

                  {/* Ringkasan Solusi */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                </div>

                {/* Footer Kartu: Tech Stack Chips & Link */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {item.techStack.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span className="rounded bg-slate-50 border border-slate-200/80 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
                        +{item.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    href="/portofolio"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1482C2] hover:text-[#0E6496] group-hover:translate-x-0.5 transition-all shrink-0"
                    aria-label={`Detail proyek ${item.title}`}
                  >
                    <span>Detail</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
}
