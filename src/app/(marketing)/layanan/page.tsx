import { servicesData } from "@/config/services";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Layanan Rekayasa Perangkat Lunak & Sistem Enterprise | ${siteConfig.name}`,
  description:
    "Katalog lengkap solusi perangkat lunak kustom, web enterprise, mobile application iOS & Android, ERP, dan arsitektur cloud dari Bahari Tech Solution.",
  alternates: {
    canonical: "/layanan",
  },
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1482C2] block mb-2">
            KATALOG LAYANAN TEKNOLOGI
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#112252]">
            Solusi Rekayasa Perangkat Lunak Terintegrasi
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Kami mengkombinasikan arsitektur sistem modern dengan metodologi agile untuk membangun solusi digital yang tangguh, aman, dan siap scale-up.
          </p>
        </div>

        {/* Detailed Services List */}
        <div className="space-y-10">
          {servicesData.map((service, index) => {
            return (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-[#1482C2] tracking-widest uppercase">
                      Layanan #{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#112252]">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="pt-2">
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                        Cakupan Fitur & Solusi Kunci:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-center rounded-xl bg-[#F8FAFC] p-6 sm:p-8 border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                      Teknologi Pendukung
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link href={`/kontak?layanan=${encodeURIComponent(service.title)}`}>
                      <Button variant="primary" className="w-full gap-2">
                        <span>Konsultasikan Kebutuhan Ini</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
