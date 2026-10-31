"use client";

import { ShieldCheck, GitBranch, Server, CalendarCheck2 } from "lucide-react";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/scroll-reveal";

const pillars = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Keamanan Siber Berlapis",
    description:
      "Audit keamanan kode ketat dari celah injeksi SQL, XSS, dan kebocoran data dengan enkripsi sensitif serta sanitasi input berlapis.",
    points: [
      "OWASP Top 10",
      "AES-256 Enkripsi",
      "Kepatuhan PDP",
    ],
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Kepemilikan Source Code Penuh",
    description:
      "Kendali penuh atas aset digital bisnis Anda tanpa sistem keterikatan sepihak (zero vendor lock-in) untuk kebebasan jangka panjang.",
    points: [
      "100% Hak Milik IP",
      "Git & Dokumen Rapi",
      "Bebas Lock-in",
    ],
  },
  {
    number: "03",
    icon: Server,
    title: "Infrastruktur Skalabel 99.98%",
    description:
      "Arsitektur cloud modern berkinerja tinggi dengan failover otomatis, pemantauan performa server, dan backup harian terenkripsi.",
    points: [
      "SLA Uptime 99.98%",
      "Backup Harian",
      "Mitigasi Anti-DDoS",
    ],
  },
  {
    number: "04",
    icon: CalendarCheck2,
    title: "Alur Kerja Agile Terjadwal",
    description:
      "Setiap tahap pengerjaan terukur dengan sprint rilis berkala, sesi demo fitur transparan, serta skema termin pembayaran resmi yang adil.",
    points: [
      "Sprint Terjadwal",
      "Demo Fitur Rutin",
      "Termin Milestone",
    ],
  },
];

export function WhyUsSection() {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-[#F8FAFC] border-y border-slate-200/90 select-none overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi Berwibawa & Kompak */}
        <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto mb-5 sm:mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-2">
            <span className="h-0.5 w-5 bg-[#1482C2]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#1482C2]">
              Standar Mutu Rekayasa Perangkat Lunak
            </span>
            <span className="h-0.5 w-5 bg-[#1482C2]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900 tracking-tight leading-tight">
            Fondasi Rekayasa untuk Hasil Skala Enterprise
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Kami menerapkan tata kelola kode berstandar tinggi yang mengutamakan stabilitas sistem, transparansi kepemilikan aset, dan keamanan data jangka panjang.
          </p>
        </ScrollReveal>

        {/* Grid 4 Pilar Rekayasa: Kartu Ramping, Elegan & Bebas dari Icon AI Template */}
        <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollStaggerItem key={idx}>
                <div className="group relative flex flex-col justify-between h-full rounded-xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all duration-300 hover:-translate-y-0.5">
                  <div>
                    {/* Header Kartu Minimalis Editorial: Nomor & Ikon Halus (Tanpa Kotak Warna AI) */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#1482C2]">
                        {item.number}
                      </span>

                      <Icon className="h-4 w-4 text-slate-400 group-hover:text-[#1482C2] transition-colors duration-200" />
                    </div>

                    {/* Judul & Deskripsi Substantif Kompak */}
                    <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Spesifikasi Standar Mutu dalam Bentuk Tag Rapi (Bukan Deretan Checklist Bulat Hijau) */}
                  <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex flex-wrap gap-1">
                    {item.points.map((point, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] sm:text-[10.5px] font-semibold text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/80 group-hover:border-[#1482C2]/30 transition-colors"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>

      </div>
    </section>
  );
}
