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

// 6 Nilai Inti Korporat: B - A - H - A - R - I (Terinspirasi Filosofi Nilai Unggul)
const coreValues = [
  {
    letter: "B",
    title: "Build with Quality",
    subtitle: "Kualitas Rekayasa Kode",
    desc: "Menerapkan standar Clean Architecture, modularitas kode yang rapi, dan pengujian berkala agar setiap software bebas bug serta mudah dikembangkan di masa depan.",
  },
  {
    letter: "A",
    title: "Agile & Adaptive",
    subtitle: "Fleksibilitas Alur Kerja",
    desc: "Bekerja secara adaptif terhadap dinamika kebutuhan bisnis Anda melalui sprint rilis bertahap, demo kemajuan berkala, dan penyesuaian fitur yang transparan.",
  },
  {
    letter: "H",
    title: "Honest & Transparent",
    subtitle: "Kejujuran Teknis & Biaya",
    desc: "Keterbukaan total dalam estimasi waktu, rekomendasi arsitektur terbaik, dan Rencana Anggaran Biaya (RAB) resmi tanpa biaya tersembunyi.",
  },
  {
    letter: "A",
    title: "Action-Oriented",
    subtitle: "Solusi Berdampak Riil",
    desc: "Fokus pada penyelesaian masalah operasional yang nyata. Setiap solusi diarahkan untuk memotong beban kerja manual dan meningkatkan efisiensi bisnis.",
  },
  {
    letter: "R",
    title: "Reliable Systems",
    subtitle: "Infrastruktur Andal 99.98%",
    desc: "Arsitektur cloud server elastis berkinerja tinggi dengan pemantauan 24/7, failover otomatis, dan pencadangan data terenkripsi standar industri.",
  },
  {
    letter: "I",
    title: "Integrity & Security",
    subtitle: "Integritas & Keamanan",
    desc: "Menjaga kerahasiaan bisnis melalui NDA resmi, kepatuhan UU Pelindungan Data Pribadi (PDP), serta penyerahan 100% hak cipta source code tanpa lock-in.",
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
  { value: "100%", label: "Kepemilikan Source Code", desc: "Bebas Vendor Lock-in" },
  { value: "4.9 / 5", label: "Indeks Kepuasan Klien", desc: "Kemitraan Jangka Panjang" },
];

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20pembuatan%20software%20dan%20sistem%20digital.`;

  return (
    <div className="bg-white select-none">
      
      {/* 1. HEADER HALAMAN / BREADCRUMB ELEGAN */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05} className="space-y-2">
            
            {/* Navigasi Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
              <Link href="/" className="hover:text-[#1482C2] transition-colors">
                Beranda
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#1482C2]">Tentang Kami</span>
            </nav>

            <div className="flex items-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                PROFIL PERUSAHAAN &amp; REKAYASA TEKNOLOGI
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#112252] tracking-tight leading-tight max-w-4xl">
              Membangun Fondasi Digital Andal untuk Akselerasi Bisnis Anda
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              {siteConfig.name} adalah Software House dan Enterprise Technology Consultant yang berfokus pada rekayasa perangkat lunak presisi, keandalan arsitektur modern, serta kepemilikan kode sumber 100% tanpa vendor lock-in.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CERITA PERUSAHAAN, FILOSOFI KERJA & FOTO TIM REKAYASA */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Kolom Kiri: Narasi Profil & Filosofi Rekayasa (7 Kolom) */}
            <ScrollReveal direction="up" delay={0.05} className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-5 bg-[#1482C2]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                  FILOSOFI &amp; LATAR BELAKANG
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112252] tracking-tight leading-tight">
                Rekayasa Perangkat Lunak Tepat Guna Tanpa Pemborosan
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-semibold">{siteConfig.name}</strong> didirikan untuk menjawab tantangan nyata dalam adopsi teknologi: banyak institusi dan pelaku usaha merasa pengembangan software seringkali rumit, mahal, tidak sesuai alur operasional, atau terbelenggu keterikatan vendor sepihak.
                </p>
                <p>
                  Kami memegang teguh prinsip <em>&ldquo;Engineering Precision, Measurable Business Impact&rdquo;</em>. Artinya, kami tidak sekadar menulis baris kode, melainkan merancang sistem digital yang menyederhanakan birokrasi kerja manual, mempercepat pengambilan keputusan manajemen, dan secara nyata mendorong pertumbuhan omset bisnis Anda.
                </p>
                <p>
                  Dengan metodologi Agile yang transparan, tim software engineer kami mendampingi Anda di setiap fase: mulai dari riset arsitektur awal (*discovery*), desain antarmuka prototipe di Figma, sprint rekayasa kode Clean Architecture, audit keamanan standar OWASP, hingga serah terima repositori penuh dan pelatihan tim pengguna.
                </p>
              </div>

              {/* Tagline Komitmen */}
              <div className="pt-2">
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-white border border-slate-200 text-[#1482C2] flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#112252]">
                      Komitmen 100% Hak Milik Source Code Mandiri
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Setiap sistem yang dibangun diserahkan penuh secara mandiri beserta dokumentasi teknis, tanpa ketergantungan sepihak, dan dilindungi NDA resmi.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Kolom Kanan: Foto Tim Autentik & Kartu Informasi (5 Kolom) */}
            <ScrollReveal direction="up" delay={0.1} className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-2xs">
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src="/images/about/engineering-team.jpg"
                    alt="Tim Rekayasa Perangkat Lunak Bahari Tech Solution"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-bold leading-tight">
                      Tim Rekayasa Perangkat Lunak {siteConfig.name}
                    </p>
                    <p className="text-[10px] text-blue-200 mt-0.5">
                      Kolaborasi Berorientasi Mutu &amp; Kepatuhan Standar Industri
                    </p>
                  </div>
                </div>

                {/* 2x2 Mini Statistik Cepat */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                    <div className="text-base sm:text-lg font-extrabold text-[#112252]">50+</div>
                    <div className="text-[10px] text-slate-500 font-medium">Sistem Digital Rilis</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                    <div className="text-base sm:text-lg font-extrabold text-[#1482C2]">99.98%</div>
                    <div className="text-[10px] text-slate-500 font-medium">SLA Uptime Cloud</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. VISI & MISI PERUSAHAAN (DUAL CARD SEJAJAR & SEIMBANG) */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1.5 mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                ARAH STRATEGIS KORPORASI
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112252] tracking-tight leading-tight">
              Visi &amp; Misi Bahari Tech Solution
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Prinsip panduan yang mendasari setiap keputusan arsitektur dan komitmen kemitraan kami.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* Kartu Visi */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-0.5 w-4 bg-[#1482C2]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                      VISI PERUSAHAAN
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#112252] leading-snug">
                    Menjadi Mitra Rekayasa Teknologi Terpercaya &amp; Berdaya Saing Global
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Mewujudkan ekosistem transformasi digital terdepan di Indonesia yang diakui atas keunggulan arsitektur perangkat lunak, kepatuhan ketat terhadap keamanan data, serta integritas kemitraan jangka panjang yang memberdayakan mitra bisnis.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="text-[#1482C2] font-bold">✓</span>
                  <span>Skalabilitas Sistem · Kedaulatan Data Mandiri · Standar Enterprise</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Kartu Misi */}
            <ScrollReveal direction="up" delay={0.15} className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-0.5 w-4 bg-[#1482C2]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                      MISI PERUSAHAAN
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#112252] leading-snug">
                    Empat Pilar Eksekusi Solusi Tepat Guna
                  </h3>

                  <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1482C2] mt-1.5 shrink-0" />
                      <span><strong>Rekayasa Berkualitas:</strong> Membangun aplikasi web, mobile, dan sistem ERP dengan performa tinggi, bebas lag, dan arsitektur modular.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1482C2] mt-1.5 shrink-0" />
                      <span><strong>Transparansi Penuh:</strong> Menjunjung tinggi transparansi dalam penetapan Rencana Anggaran Biaya (RAB) resmi tanpa biaya tersembunyi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1482C2] mt-1.5 shrink-0" />
                      <span><strong>Keamanan &amp; Kepatuhan:</strong> Menerapkan standar audit keamanan kode OWASP dan perlindungan data bisnis sesuai UU PDP.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1482C2] mt-1.5 shrink-0" />
                      <span><strong>Pemberdayaan Klien:</strong> Menyerahkan 100% hak cipta source code serta memberikan pelatihan dan dokumentasi komprehensif.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="text-[#1482C2] font-bold">✓</span>
                  <span>Bebas Vendor Lock-in · Garansi Bebas Bug · Dukungan SLA Resmi</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 4. NILAI-NILAI INTI KORPORAT: B - A - H - A - R - I */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1.5 mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                CORE VALUES PERUSAHAAN
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112252] tracking-tight leading-tight">
              Filosofi Nilai Inti: B · A · H · A · R · I
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Enam prinsip integritas kerja yang memandu tim engineering kami dalam memberikan standar layanan prima.
            </p>
          </ScrollReveal>

          {/* 6 Kolom Nilai Inti */}
          <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {coreValues.map((val, idx) => (
              <ScrollStaggerItem key={idx}>
                <div className="p-5 sm:p-6 rounded-xl border border-slate-200 bg-white hover:border-[#1482C2] hover:shadow-xs transition-all duration-200 flex flex-col justify-between h-full group">
                  <div>
                    {/* Inisial Huruf Besar Khas Bumitekno dengan Desain Modern */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl sm:text-3xl font-black text-[#1482C2] tracking-tight group-hover:scale-105 transition-transform">
                        {val.letter}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#112252] group-hover:text-[#1482C2] transition-colors leading-snug">
                      {val.title}
                    </h3>
                    
                    <p className="text-[11px] font-semibold text-[#1482C2] mt-0.5 mb-2">
                      {val.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>

        </div>
      </section>

      {/* 5. STANDAR MUTU & TATA KELOLA LEGALITAS RESMI */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1.5 mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                KEPASTIAN HUKUM &amp; TATA KELOLA
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112252] tracking-tight leading-tight">
              Standar Legalitas &amp; Perlindungan Klien
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Jaminan formal bahwa setiap proyek dan investasi teknologi Anda terlindungi secara hukum dan profesional.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {legalPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#1482C2] hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-9 w-9 rounded-lg bg-blue-50 border border-blue-200 text-[#1482C2] flex items-center justify-center mb-3">
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <h3 className="text-sm sm:text-[15px] font-bold text-[#112252] leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. METRIK PENCAPAIAN PERUSAHAAN */}
      <section className="py-6 sm:py-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {companyStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-3 sm:gap-3.5"
                >
                  <div className="text-xl sm:text-2xl font-black text-[#112252] tracking-tight shrink-0">
                    {stat.value}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-[12.5px] font-bold text-[#1482C2] leading-tight truncate">
                      {stat.label}
                    </div>
                    <div className="text-[10px] sm:text-[10.5px] text-slate-500 leading-tight truncate mt-0.5">
                      {stat.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. AJAKAN KONSULTASI LANGSUNG (CLOSING BANNER SEJAJAR & BERSIH) */}
      <section className="py-8 sm:py-10 lg:py-12 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
              
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-5 bg-[#1482C2]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1482C2]">
                    MULAI DISKUSI TEKNOLOGI
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#112252] tracking-tight leading-tight">
                  Siap Membangun Sistem Digital Berkualitas Bersama Kami?
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  Diskusikan rancangan arsitektur software, estimasi waktu pengerjaan, dan Rencana Anggaran Biaya (RAB) transparan langsung bersama tim software engineer Bahari Tech.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link href="/kontak" className="w-full sm:w-auto">
                  <span className="w-full sm:w-auto h-11 sm:h-12 px-6 rounded-lg bg-[#112252] hover:bg-[#1482C2] text-white text-xs sm:text-sm font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer">
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
                  <span className="w-full sm:w-auto h-11 sm:h-12 px-5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-2xs cursor-pointer">
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
