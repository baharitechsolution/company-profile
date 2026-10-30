import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  Code2,
  FileCheck2,
  CheckCircle2,
  Building,
  Star,
  Handshake,
  Settings2,
  TrendingUp,
  MessageSquare,
  Lightbulb,
  Target,
  Compass,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: `Tentang Kami - Profil Perusahaan, Visi & Nilai Inti | ${siteConfig.name}`,
  description:
    "Mengenal lebih dekat CV. Bahari Tech Solution: Software House dan Enterprise Technology Consultant terpercaya di Indonesia dengan komitmen rekayasa presisi, transparansi teknis, dan kepemilikan source code 100%.",
  alternates: {
    canonical: "/tentang-kami",
  },
};

// 6 Nilai Inti Resmi: B · A · H · A · R · I (Sesuai Piagam Korporat Bahari Tech Solution)
const coreValues = [
  {
    letter: "B",
    index: "01",
    title: "BERKUALITAS",
    desc: "Memberikan hasil kerja terbaik melalui standar yang tinggi dan berkelanjutan.",
    pillar: "Standar Tinggi & Berkelanjutan",
    icon: Star,
  },
  {
    letter: "A",
    index: "02",
    title: "AMANAH",
    desc: "Menjaga kepercayaan melalui integritas, tanggung jawab, dan keamanan data.",
    pillar: "Integritas & Keamanan Data",
    icon: Handshake,
  },
  {
    letter: "H",
    index: "03",
    title: "HANDAL",
    desc: "Menghadirkan solusi teknologi yang stabil, tepat guna, dan dapat diandalkan.",
    pillar: "Stabilitas & Tepat Guna",
    icon: Settings2,
  },
  {
    letter: "A",
    index: "04",
    title: "ADAPTIF",
    desc: "Terus belajar dan berkembang mengikuti perubahan teknologi serta kebutuhan pengguna.",
    pillar: "Evolusi & Berkelanjutan",
    icon: TrendingUp,
  },
  {
    letter: "R",
    index: "05",
    title: "RESPONSIF",
    desc: "Merespons kebutuhan dan kendala secara cepat, komunikatif, dan solutif.",
    pillar: "Cepat, Komunikatif & Solutif",
    icon: MessageSquare,
  },
  {
    letter: "I",
    index: "06",
    title: "INOVATIF",
    desc: "Menciptakan ide dan solusi kreatif yang memberikan manfaat nyata bagi pengguna.",
    pillar: "Ide Kreatif & Manfaat Nyata",
    icon: Lightbulb,
  },
];

// 4 Pilar Kepatuhan Legal & Standar Tata Kelola
const legalPillars = [
  {
    icon: Building,
    title: "Legalitas Usaha Resmi",
    desc: "Beroperasi secara legal sebagai persekutuan komanditer (CV) terdaftar di Kemenkumham RI dengan NIB dan Izin Usaha Aktivitas Pemrograman Komputer.",
  },
  {
    icon: ShieldCheck,
    title: "Perjanjian Kerahasiaan (NDA)",
    desc: "Perlindungan data sensitif dan kerahasiaan alur bisnis mitra dijamin secara hukum formal melalui dokumen Non-Disclosure Agreement sebelum pengerjaan.",
  },
  {
    icon: Code2,
    title: "100% Hak Milik Source Code",
    desc: "Seluruh aset kode sumber, basis data, dan hak kekayaan intelektual (IP) diserahkan penuh kepada klien tanpa biaya lisensi berkala atau keterikatan vendor.",
  },
  {
    icon: FileCheck2,
    title: "Tata Kelola Keuangan Formal",
    desc: "Kelengkapan faktur resmi, invoice bertahap berbasis pencapaian milestone, dan rekening bank berbadan usaha untuk kepatuhan audit perusahaan Anda.",
  },
];

// Metrik Keunggulan Kunci
const companyStats = [
  { value: "50+", label: "Sistem & Aplikasi Rilis", desc: "Enterprise, Web & Mobile" },
  { value: "99.98%", label: "SLA Uptime Cloud", desc: "Infrastruktur Skalabel" },
  { value: "100%", label: "Kepemilikan Source Code", desc: "Bebas Vendor Lock-in (NDA)" },
  { value: "4.9 / 5", label: "Indeks Kepuasan Klien", desc: "Kemitraan Jangka Panjang" },
];

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20pembuatan%20software%20dan%20sistem%20digital.`;

  return (
    <div className="bg-white select-none">
      
      {/* 1. EXECUTIVE OVERVIEW & FILOSOFI REKAYASA (KONSISTEN DENGAN BERANDA) */}
      <section className="py-6 sm:py-8 lg:py-9 bg-white border-b border-slate-200 overflow-hidden relative select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Baris Atas: Narasi Profil Korporat (Kiri) & Foto Tim Engineering Autentik (Kanan) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Kolom Kiri: Breadcrumb, Kicker, Headline & Narasi Profil */}
            <ScrollReveal direction="up" delay={0.05} className="lg:col-span-6 space-y-2.5 sm:space-y-3">
              
              {/* Breadcrumb Navigasi */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Link href="/" className="hover:text-[#1482C2] transition-colors">
                  Beranda
                </Link>
                <span className="text-slate-300">/</span>
                <span className="text-[#1482C2]">Tentang Kami</span>
              </nav>

              {/* Eyebrow Label Korporat Bersih */}
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#1482C2]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                  PROFIL PERUSAHAAN &amp; REKAYASA TEKNOLOGI
                </span>
              </div>

              {/* Headline Utama Berwibawa */}
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#112252] leading-tight tracking-tight">
                Menghadirkan Solusi Teknologi Presisi &amp; Berdampak Bisnis Nyata
              </h1>

              {/* Deskripsi Naratif Padat & Substantif */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>{siteConfig.name}</strong> adalah Software House dan Enterprise Technology Consultant yang berfokus pada rekayasa perangkat lunak presisi, keandalan arsitektur modern, serta kepemilikan source code 100% tanpa keterikatan vendor (*zero vendor lock-in*).
                </p>
                <p>
                  Didukung oleh software engineer berpengalaman, kami menerapkan Clean Architecture dan Agile terukur dalam setiap siklus: mulai dari analisis kebutuhan (*discovery*), desain Figma, audit keamanan OWASP, hingga rilis produksi bergaransi.
                </p>
              </div>

              {/* 3 Komitmen Layanan Utama (Rapi, Sejajar, & Profesional) */}
              <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>100% Hak Milik IP</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Perjanjian NDA Resmi</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#1482C2]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#1482C2] shrink-0" />
                  <span>Clean Architecture</span>
                </div>
              </div>

            </ScrollReveal>

            {/* Kolom Kanan: Model Representatif Rekayasa Perangkat Lunak Bahari Tech Solution */}
            <ScrollReveal direction="up" delay={0.15} className="lg:col-span-6">
              <div className="relative mx-auto max-w-[500px] lg:max-w-none">
                
                {/* Bingkai Foto Lead Consultant & Engineering Bersih & Autentik */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_24px_-6px_rgba(17,34,82,0.12)] border border-slate-200/90 bg-slate-900 group">
                  <Image
                    src="/images/about/model-consultant.jpg"
                    alt="Konsultan Rekayasa Perangkat Lunak CV. Bahari Tech Solution di Workspace Modern"
                    width={1920}
                    height={1080}
                    priority
                    className="w-full h-[230px] sm:h-[260px] lg:h-[285px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#1482C2]/90 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-white mb-1">
                      Lead Consultant &amp; System Architect
                    </div>
                    <p className="text-xs sm:text-sm font-bold leading-tight">
                      Konsultan Rekayasa Teknologi &amp; Solusi Enterprise
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">
                      {siteConfig.name} &bull; Standar Rekayasa Presisi &amp; Kedaulatan Kode 100%
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>

          {/* Baris Bawah: 4 Pilar Metrik Pencapaian Sejajar Sempurna Kanan-Kiri */}
          <ScrollReveal direction="up" delay={0.25} className="mt-5 pt-4 border-t border-slate-200/80">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
              {companyStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="px-3.5 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-[#1482C2] hover:shadow-2xs transition-all flex items-center gap-2.5 sm:gap-3"
                >
                  <div className="text-lg sm:text-xl font-black text-[#112252] tracking-tight shrink-0">
                    {stat.value}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11.5px] sm:text-xs font-bold text-[#1482C2] leading-tight truncate">
                      {stat.label}
                    </div>
                    <div className="text-[9.5px] sm:text-[10px] text-slate-500 leading-tight truncate mt-0.5">
                      {stat.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 2. ARAH STRATEGIS: VISI & MISI KORPORASI (DUAL CARD KOMPAK) */}
      <section className="py-6 sm:py-8 lg:py-9 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1 mb-5 sm:mb-6">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                ARAH STRATEGIS KORPORASI
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#112252] tracking-tight leading-tight">
              Visi &amp; Misi Bahari Tech Solution
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Kartu Visi */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="h-full p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between relative overflow-hidden group hover:border-[#1482C2]/60 hover:shadow-xs transition-all duration-300">
                <div className="space-y-3 sm:space-y-4">
                  {/* Header Label & Icon Target */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-0.5 w-4 bg-[#1482C2]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                        VISI PERUSAHAAN
                      </span>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0">
                      <Target className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Headline Utama Visi Resmi */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#112252] leading-snug">
                    Menjadi Mitra Teknologi Terpercaya di Indonesia
                  </h3>

                  {/* Penjabaran Visi Sesuai Dokumen Resmi */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Memberdayakan pertumbuhan bisnis dan institusi pemerintahan melalui adopsi sistem digital yang tepat sasaran, tangguh, dan bernilai ekonomis.
                  </p>

                  {/* 3 Pilar Nilai Visi */}
                  <div className="pt-1 flex flex-wrap gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1482C2]" />
                      Tepat Sasaran
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      Tangguh
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      Bernilai Ekonomis
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="text-[#1482C2] font-bold">✓</span>
                  <span>Mitra Terpercaya Bisnis &amp; Institusi Pemerintahan</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Kartu Misi */}
            <ScrollReveal direction="up" delay={0.15} className="h-full">
              <div className="h-full p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between relative overflow-hidden group hover:border-[#1482C2]/60 hover:shadow-xs transition-all duration-300">
                <div className="space-y-3 sm:space-y-4">
                  {/* Header Label & Icon Misi */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-0.5 w-4 bg-[#1482C2]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                        MISI PERUSAHAAN
                      </span>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Compass className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Headline Utama Misi */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#112252] leading-snug">
                    4 Pilar Komitmen &amp; Mutu Eksekusi
                  </h3>

                  {/* 4 Poin Misi Resmi dengan Checkmark Hijau */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Menghadirkan produk digital berstandar tinggi yang stabil, aman, dan ramah pengguna.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Menjamin ketepatan waktu pengerjaan melalui manajemen proyek yang disiplin dan transparan.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Mengadopsi arsitektur modern dan inovasi teknologi terkini secara berkelanjutan.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Memberikan pendampingan purnajual yang responsif, solutif, dan berorientasi pada kepuasan mitra.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Standar Tinggi · Disiplin Waktu · Layanan Purnajual Responsif</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. NILAI-NILAI INTI KORPORAT: B · A · H · A · R · I (GRID RESMI KORPORASI) */}
      <section className="py-6 sm:py-8 lg:py-9 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1 mb-5 sm:mb-6">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                CORE VALUES PERUSAHAAN
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#112252] tracking-tight leading-tight">
              Budaya Kerja &amp; Nilai Inti: B · A · H · A · R · I
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Enam prinsip fundamental yang memandu setiap insinyur teknologi Bahari Tech Solution dalam memberikan solusi digital terbaik.
            </p>
          </ScrollReveal>

          {/* 6 Kartu Nilai Inti Presisi (Sesuai Piagam Resmi Perusahaan) */}
          <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <ScrollStaggerItem key={idx}>
                  <div className="p-4 sm:p-5 rounded-xl border border-slate-200/90 bg-white hover:border-[#1482C2] hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full group border-t-2 border-t-[#1482C2]/50 hover:border-t-[#1482C2]">
                    <div>
                      {/* Baris Atas: Huruf Akronim B.A.H.A.R.I & Ikon Nilai Terkait */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="h-8.5 w-8.5 rounded-lg bg-[#EAF5FC] border border-[#1482C2]/30 text-[#1482C2] font-black text-base flex items-center justify-center group-hover:bg-[#1482C2] group-hover:text-white transition-colors shadow-2xs">
                            {val.letter}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded">
                            {val.index}
                          </span>
                        </div>

                        <div className="h-8 w-8 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-500 group-hover:text-[#1482C2] group-hover:bg-[#EAF5FC] group-hover:border-[#1482C2]/30 flex items-center justify-center transition-colors">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </div>
                      </div>

                      {/* Judul Nilai Korporat Resmi */}
                      <h3 className="text-sm sm:text-base font-extrabold text-[#112252] group-hover:text-[#1482C2] transition-colors tracking-tight leading-snug">
                        {val.title}
                      </h3>

                      {/* Deskripsi Resmi */}
                      <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>

                    {/* Indikator Pilar di Bagian Bawah */}
                    <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10.5px] font-semibold text-slate-400">
                      <span className="text-[#1482C2] font-bold">Prinsip #{val.index}</span>
                      <span className="text-slate-500">{val.pillar}</span>
                    </div>
                  </div>
                </ScrollStaggerItem>
              );
            })}
          </ScrollStagger>

        </div>
      </section>

      {/* 4. STANDAR MUTU & TATA KELOLA LEGALITAS RESMI */}
      <section className="py-6 sm:py-8 lg:py-9 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1 mb-5 sm:mb-6">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                KEPASTIAN HUKUM &amp; TATA KELOLA
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#112252] tracking-tight leading-tight">
              Standar Legalitas &amp; Perlindungan Klien
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Jaminan formal bahwa setiap proyek dan investasi teknologi Anda terlindungi secara hukum dan profesional.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {legalPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#1482C2] hover:shadow-2xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200 text-[#1482C2] flex items-center justify-center mb-2.5">
                      <Icon className="h-4 w-4" />
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-[#112252] leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. AJAKAN KONSULTASI LANGSUNG (CLOSING BANNER SEJAJAR & BERSIH) */}
      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8">
              
              <div className="max-w-2xl space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-5 bg-[#1482C2]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                    MULAI DISKUSI TEKNOLOGI
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#112252] tracking-tight leading-tight">
                  Siap Membangun Sistem Digital Berkualitas Bersama Kami?
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  Diskusikan rancangan arsitektur software, estimasi waktu pengerjaan, dan Rencana Anggaran Biaya (RAB) transparan langsung bersama tim software engineer Bahari Tech.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link href="/kontak" className="w-full sm:w-auto">
                  <span className="w-full sm:w-auto h-11 px-6 rounded-lg bg-[#112252] hover:bg-[#1482C2] text-white text-xs sm:text-sm font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer">
                    <span>Ajukan Konsultasi &amp; RAB</span>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <span className="w-full sm:w-auto h-11 px-5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-2xs cursor-pointer">
                    <Image
                      src="/images/Icon/icon whatsapp.png"
                      alt="WhatsApp"
                      width={18}
                      height={18}
                      className="h-4 w-4 object-contain"
                    />
                    <span>Chat Tim Engineer</span>
                  </span>
                </Link>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
