import { portfolioData } from "@/config/portfolio";
import { siteConfig } from "@/config/site";
import { FolderGit2, Calendar, Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Studi Kasus & Portofolio Proyek Klien | ${siteConfig.name}`,
  description:
    "Rekam jejak implementasi perangkat lunak, sistem informasi logistik, ERP maritim, dan transformasi digital yang telah kami selesaikan dengan sukses.",
  alternates: {
    canonical: "/portofolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1482C2] block mb-2">
            REKAM JEJAK & HASIL KERJA
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#112252]">
            Studi Kasus & Implementasi Proyek Klien
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Berikut adalah beberapa proyek strategis yang telah kami kembangkan dan jalankan untuk berbagai sektor industri di Indonesia.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#1482C2] hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="relative mb-5 flex h-48 w-full items-center justify-center rounded-lg bg-[#F8FAFC] border border-slate-200 p-4">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="mb-2 rounded-lg bg-[#EAF5FC] p-3 text-[#1482C2]">
                      <FolderGit2 className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-bold text-slate-800">
                      {project.title}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 rounded bg-white border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
                    {project.category}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-500 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-[#1482C2]" />
                    <span className="font-medium">Klien: {project.client}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#1482C2]" />
                    <span>Tahun: {project.year}</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-[#112252] leading-snug">
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
                    className="rounded bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600"
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
