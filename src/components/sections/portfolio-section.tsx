"use client";

import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
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
              Kumpulan solusi digital dan perangkat lunak yang telah kami rancang untuk berbagai mitra korporasi.
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

        {/* Portfolio Cards Grid Efisien dengan Efek Stagger */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {portfolioData.slice(0, 6).map((item) => (
            <ScrollStaggerItem key={item.id}>
              <div className="group flex flex-col justify-between h-full rounded-xl border border-slate-200 bg-white p-5 shadow-2xs hover:border-[#1482C2] hover:shadow-xs transition-all duration-200 hover:-translate-y-1">
                <div>
                  {/* Architectural System Window Preview Bar (Tampilan Produk Rekayasa Nyata) */}
                  <div className="relative mb-4 rounded-xl bg-slate-900 border border-slate-800 p-3.5 overflow-hidden shadow-2xs group-hover:border-[#1482C2]/50 transition-colors">
                    {/* Header: OS Window Controls & Route */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                        <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                        <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                        <span className="ml-1 text-slate-400 text-[9.5px] truncate max-w-[130px]">
                          /{item.slug}
                        </span>
                      </div>
                      <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-1.5 py-0.5 rounded">
                        ● Production
                      </span>
                    </div>

                    {/* Body: High-tech System Metric Preview */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white font-bold truncate max-w-[190px]">
                          {item.client}
                        </span>
                        <span className="text-slate-400 font-mono text-[10px]">
                          {item.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                        <span className="text-[#0EB8D8] font-bold">{item.category}</span>
                        <span>·</span>
                        <span className="text-slate-300">Clean Architecture</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#1482C2] font-bold uppercase tracking-wider mb-1.5">
                    <Building2 className="h-3 w-3" />
                    <span>{item.category}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#233876] group-hover:text-[#1482C2] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[10px] font-semibold text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
}
