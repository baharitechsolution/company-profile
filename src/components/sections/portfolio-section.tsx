"use client";

import Link from "next/link";
import { ArrowRight, FolderGit2, Building2 } from "lucide-react";
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
              <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                REKAM JEJAK &amp; STUDI KASUS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#112252] tracking-tight leading-tight">
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
                  {/* Mockup Box Ringkas */}
                  <div className="relative mb-4 flex h-32 w-full items-center justify-center rounded-lg bg-[#F8FAFC] border border-slate-200 p-3">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="mb-1.5 rounded-lg bg-[#EAF5FC] p-2 text-[#1482C2]">
                        <FolderGit2 className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-800 line-clamp-1">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-0.5">
                        {item.client}
                      </span>
                    </div>
                    <span className="absolute top-2.5 right-2.5 rounded bg-white border border-slate-200 px-2 py-0.5 text-[9px] font-bold text-slate-700">
                      {item.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#1482C2] font-bold uppercase tracking-wider mb-1.5">
                    <Building2 className="h-3 w-3" />
                    <span>{item.category}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#112252] group-hover:text-[#1482C2] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
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
