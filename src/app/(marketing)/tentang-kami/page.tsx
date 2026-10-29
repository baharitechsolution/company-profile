import { siteConfig } from "@/config/site";
import { Target, Compass, Users, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Tentang Kami - Visi, Misi & Standar Mutu | ${siteConfig.name}`,
  description:
    "Pelajari visi, misi, dan standar mutu yang mendorong Bahari Tech Solution dalam memberikan solusi rekayasa teknologi dan aplikasi enterprise terbaik di Indonesia.",
  alternates: {
    canonical: "/tentang-kami",
  },
};

const values = [
  {
    icon: Target,
    title: "Orientasi Hasil Bisnis Nyata",
    description:
      "Setiap baris kode dan arsitektur yang kami bangun diarahkan untuk memecahkan problem operasional bisnis Anda secara terukur.",
  },
  {
    icon: Compass,
    title: "Transparansi Teknis Total",
    description:
      "Kejujuran dalam estimasi waktu, rekomendasi teknologi terbaik, dan keterbukaan risiko teknis sejak awal perencanaan.",
  },
  {
    icon: Users,
    title: "Kemitraan Jangka Panjang",
    description:
      "Kami memposisikan diri sebagai divisi teknologi strategis perusahaan Anda, bukan sekadar vendor lepas.",
  },
  {
    icon: Award,
    title: "Standar Rekayasa Global",
    description:
      "Penerapan standar Clean Architecture, automated testing, dan dokumentasi sistem yang rapi untuk kemudahan scale-up di masa depan.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1482C2] block mb-2">
            PROFIL PERUSAHAAN
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#112252]">
            Menghadirkan Solusi Teknologi yang Andal, Presisi, dan Berkualitas
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {siteConfig.name} adalah perusahaan rekayasa perangkat lunak yang berfokus pada pengembangan sistem korporat, aplikasi web & mobile modern, serta transformasi digital terintegrasi.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-8">
            <span className="text-xs font-extrabold text-[#1482C2] tracking-widest uppercase block">
              VISI
            </span>
            <h2 className="text-2xl font-bold text-[#112252] mt-2 mb-4">
              Menjadi Mitra Rekayasa Teknologi Terpercaya di Indonesia
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Membangun fondasi digital yang kuat bagi korporasi dan institusi di Indonesia melalui produk perangkat lunak berkinerja tinggi, aman, dan berstandar internasional.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-8">
            <span className="text-xs font-extrabold text-[#1482C2] tracking-widest uppercase block">
              MISI
            </span>
            <h2 className="text-2xl font-bold text-[#112252] mt-2 mb-4">
              Rekayasa Perangkat Lunak Tepat Guna Tanpa Pemborosan
            </h2>
            <ul className="space-y-2 text-sm text-slate-600 leading-relaxed list-disc list-inside">
              <li>Membangun arsitektur perangkat lunak yang scalable dan bebas celah keamanan.</li>
              <li>Membantu klien memilih teknologi efisien yang menekan biaya operasional jangka panjang.</li>
              <li>Memberikan pendampingan teknis dan jaminan SLA sistem secara profesional.</li>
            </ul>
          </div>
        </div>

        {/* Nilai-Nilai Kerja */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1482C2] block mb-2">
              NILAI DASAR KAMI
            </span>
            <h2 className="text-3xl font-extrabold text-[#112252]">
              Prinsip Kerja & Integritas Profesional
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 p-6 bg-white shadow-xs hover:border-[#1482C2] transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#112252] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
