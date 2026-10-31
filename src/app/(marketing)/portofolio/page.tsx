import { portfolioData } from "@/config/portfolio";
import { siteConfig } from "@/config/site";
import { Building2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
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
    siteName: siteConfig.legalName,
    locale: "id_ID",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <div className="py-12 md:py-18 bg-white select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-0.5 w-6 bg-[#1482C2]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
              REKAM JEJAK &amp; HASIL KERJA
            </span>
            <span className="h-0.5 w-6 bg-[#1482C2]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#233876]">
            Studi Kasus &amp; Implementasi Sistem Enterprise
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Daftar solusi perangkat lunak strategis yang telah kami rancang, bangun, dan deploy ke lingkungan produksi untuk berbagai sektor bisnis di Indonesia.
          </p>
        </div>

        {/* Portfolio Grid: Bersih, Rapi & Elegan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:border-[#1482C2] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <div>
                {/* Meta Bar: Kategori & Tahun Rilis */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#EAF5FC] text-[#1482C2] text-[11px] font-semibold tracking-wide">
                    {project.category}
                  </span>
                  <span className="font-mono text-[11px] font-medium text-slate-400">
                    Tahun {project.year}
                  </span>
                </div>

                {/* Mitra Klien */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
                  <Building2 className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span>Mitra: <strong className="text-slate-700 font-semibold">{project.client}</strong></span>
                </div>

                {/* Judul Proyek */}
                <h2 className="text-lg font-bold text-[#233876] group-hover:text-[#1482C2] transition-colors leading-snug mb-2">
                  {project.title}
                </h2>

                {/* Ringkasan Solusi */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Footer Kartu: Tech Stack Chips & Link */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-slate-50 border border-slate-200/80 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#1482C2] hover:text-[#0E6496] group-hover:translate-x-0.5 transition-all shrink-0"
                  aria-label={`Konsultasi proyek serupa ${project.title}`}
                >
                  <span>Konsultasi</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
