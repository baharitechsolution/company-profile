import { portfolioData } from "@/config/portfolio";
import { siteConfig } from "@/config/site";
import { Calendar, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Studi Kasus & Portofolio Proyek Sistem Enterprise | ${siteConfig.name}`,
  description:
    "Rekam jejak implementasi perangkat lunak produksi: sistem ERP, aplikasi mobile iOS & Android, portal enterprise, dan transformasi digital teruji oleh CV. Bahari Tech Solution.",
  keywords: [
    "Portofolio Software House",
    "Studi Kasus Sistem ERP",
    "Contoh Aplikasi Mobile Produksi",
    "Portofolio Web Application Enterprise",
    "Proyek IT Sukses Indonesia",
    "Hasil Kerja Software Developer",
    "Sistem Manajemen Bisnis Terintegrasi",
    "Bahari Tech Solution Portofolio",
  ],
  alternates: {
    canonical: "/portofolio",
  },
  openGraph: {
    title: `Portofolio & Rekam Jejak Sistem Digital | ${siteConfig.name}`,
    description:
      "Lihat implementasi sistem nyata berskala produksi yang dirancang dan dikembangkan oleh CV. Bahari Tech Solution.",
    url: `${siteConfig.url}/portofolio`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <div className="py-16 md:py-24 bg-white select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-0.5 w-6 bg-[#1482C2]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
              REKAM JEJAK &amp; HASIL KERJA
            </span>
            <span className="h-0.5 w-6 bg-[#1482C2]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#233876]">
            Studi Kasus &amp; Implementasi Sistem Enterprise
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Daftar solusi perangkat lunak strategis yang telah kami rancang, bangun, dan deploy ke lingkungan produksi untuk berbagai sektor bisnis di Indonesia.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xs hover:border-[#1482C2] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Architectural System Window Preview Bar (Tampilan Produk Rekayasa Nyata) */}
                <div className="relative mb-5 rounded-xl bg-slate-900 border border-slate-800 p-4 overflow-hidden shadow-2xs group-hover:border-[#1482C2]/50 transition-colors">
                  {/* Header: OS Window Controls & Route */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-1.5 text-slate-400 text-[10px] truncate max-w-[150px]">
                        /{project.slug}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded">
                      ● Live Production
                    </span>
                  </div>

                  {/* Body: High-tech System Metric Preview */}
                  <div className="space-y-1.5 py-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-bold truncate max-w-[210px]">
                        {project.client}
                      </span>
                      <span className="text-slate-400 font-mono text-[10.5px]">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10.5px] text-slate-400 font-mono">
                      <span className="text-[#0EB8D8] font-bold">{project.category}</span>
                      <span>·</span>
                      <span className="text-slate-300">Clean Architecture</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-slate-500 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-[#1482C2]" />
                    <span className="font-medium text-slate-700">Klien: {project.client}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    <span>Tahun Rilis: {project.year}</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-[#233876] group-hover:text-[#1482C2] transition-colors leading-snug">
                  {project.title}
                </h2>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
