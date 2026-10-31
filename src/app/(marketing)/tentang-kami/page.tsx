import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  Code2,
  FileCheck2,
  CheckCircle2,
  Building2,
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
import { WhatsAppIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: `Tentang Kami - Profil Perusahaan & Legalitas Resmi | ${siteConfig.name}`,
  description:
    "Mengenal CV. Bahari Tech Solution: Software House dan Enterprise Technology Consultant berbadan hukum resmi di Indonesia. Nilai B.A.H.A.R.I, legalitas SK Kemenkumham, dan 100% hak cipta source code.",
  keywords: [
    "Profil Bahari Tech Solution",
    "CV Bahari Tech Solution",
    "Software House Resmi Berbadan Hukum",
    "Vendor IT Terdaftar Kemenkumham RI",
    "Software House Tegal",
    "Software House Jawa Tengah",
    "Perusahaan IT Terpercaya Indonesia",
    "Konsultan Teknologi Enterprise",
    "Rekayasa Perangkat Lunak Indonesia",
    "Vendor Software Anti Lock-in",
  ],
  alternates: {
    canonical: "/tentang-kami",
  },
  openGraph: {
    title: `Tentang Kami - Profil & Legalitas Resmi | ${siteConfig.name}`,
    description:
      "Profil lengkap software house resmi dengan dedikasi rekayasa bersih, transparansi teknis, dan kepemilikan source code 100%.",
    url: `${siteConfig.url}/tentang-kami`,
    siteName: siteConfig.legalName,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/kantor/kantor_thumbnail_square.png",
        width: 800,
        height: 800,
        alt: `${siteConfig.name} - Gedung Kantor Pusat Resmi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Tentang Kami - Profil & Legalitas Resmi | ${siteConfig.name}`,
    description:
      "Profil lengkap software house resmi dengan dedikasi rekayasa bersih, transparansi teknis, dan kepemilikan source code 100%.",
    images: ["/images/kantor/kantor_thumbnail_square.png"],
  },
};

// 6 Nilai Inti Resmi: B · A · H · A · R · I (Sesuai Piagam Korporat Bahari Tech Solution)
const coreValues = [
  {
    letter: "B",
    index: "01",
    title: "BERKUALITAS",
    desc: "Memberikan hasil kerja terbaik melalui standar rekayasa kode yang tinggi, stabil, dan berkelanjutan.",
    pillar: "Standar Mutu Tinggi",
    icon: Star,
  },
  {
    letter: "A",
    index: "02",
    title: "AMANAH",
    desc: "Menjaga kepercayaan klien melalui integritas kerja, transparansi alur biaya, dan keamanan data.",
    pillar: "Integritas & Privasi",
    icon: Handshake,
  },
  {
    letter: "H",
    index: "03",
    title: "HANDAL",
    desc: "Menghadirkan arsitektur teknologi yang tangguh, tepat guna, minim latensi, dan siap diandalkan.",
    pillar: "Stabilitas Produksi",
    icon: Settings2,
  },
  {
    letter: "A",
    index: "04",
    title: "ADAPTIF",
    desc: "Terus berkembang mengikuti dinamika teknologi global dan kebutuhan pengguna masa kini.",
    pillar: "Evolusi Teknologi",
    icon: TrendingUp,
  },
  {
    letter: "R",
    index: "05",
    title: "RESPONSIF",
    desc: "Merespons setiap kebutuhan dan kendala teknis secara cepat, komunikatif, dan berorientasi solusi.",
    pillar: "Komunikasi Solutif",
    icon: MessageSquare,
  },
  {
    letter: "I",
    index: "06",
    title: "INOVATIF",
    desc: "Menciptakan gagasan dan solusi kreatif bernilai ekonomis yang memberikan dampak nyata bagi bisnis.",
    pillar: "Dampak Nyata",
    icon: Lightbulb,
  },
];

// 4 Pilar Kepatuhan Legal & Standar Tata Kelola
const legalPillars = [
  {
    icon: Building2,
    title: "Legalitas Usaha Resmi",
    desc: "Beroperasi sah sebagai persekutuan komanditer (CV) terdaftar di Kemenkumham RI dengan NIB dan Izin Usaha Pemrograman Komputer.",
    badge: "Kemenkumham RI",
  },
  {
    icon: ShieldCheck,
    title: "Perjanjian Kerahasiaan (NDA)",
    desc: "Perlindungan data sensitif dan kerahasiaan alur bisnis mitra dijamin secara hukum formal melalui dokumen Non-Disclosure Agreement.",
    badge: "Kerahasiaan Terjamin",
  },
  {
    icon: Code2,
    title: "100% Hak Milik Source Code",
    desc: "Seluruh aset kode sumber, basis data, dan IP diserahkan utuh kepada klien tanpa royalti berkala atau keterikatan vendor sepihak.",
    badge: "Bebas Vendor Lock-in",
  },
  {
    icon: FileCheck2,
    title: "Tata Kelola Keuangan Formal",
    desc: "Kelengkapan faktur resmi, invoice bertahap berbasis milestone rilis, serta rekening bank badan usaha untuk kepatuhan audit perusahaan.",
    badge: "Faktur & Pajak Sah",
  },
];

// Metrik Keunggulan Kunci (Konsisten dengan Beranda)
const companyStats = [
  {
    value: "50+",
    label: "Solusi Digital Rilis",
    description: "Web application, portal enterprise, sistem ERP, dan aplikasi mobile teruji produksi.",
  },
  {
    value: "99.98%",
    label: "Rata-Rata SLA Uptime",
    description: "Infrastruktur cloud berstandar AWS & GCP dengan arsitektur failover otomatis.",
  },
  {
    value: "40+",
    label: "Klien & Institusi Mitra",
    description: "Kemitraan strategis lintas industri korporat & instansi bisnis di Indonesia.",
  },
  {
    value: "4.9 / 5",
    label: "Skor Kepuasan Klien",
    description: "Retensi kemitraan tinggi berbasis ketepatan timeline & SLA garansi pasca rilis.",
  },
];

export default function AboutPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20pembuatan%20software%20dan%20sistem%20digital.`;

  // Schema.org AboutPage & BreadcrumbList Data Terstruktur untuk Google SEO Rich Snippets
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteConfig.url}/tentang-kami#webpage`,
        url: `${siteConfig.url}/tentang-kami`,
        name: `Tentang Kami - Profil Perusahaan & Nilai Inti | ${siteConfig.name}`,
        description:
          "Profil resmi, visi misi, nilai-nilai inti BAHARI, dan standar legalitas CV. Bahari Tech Solution sebagai Software House dan Enterprise Technology Consultant terpercaya di Indonesia.",
        inLanguage: "id-ID",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${siteConfig.url}/#website`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/tentang-kami#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tentang Kami",
            item: `${siteConfig.url}/tentang-kami`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-white select-none">
      {/* Schema.org Data Terstruktur untuk Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      
      {/* 1. OVERVIEW PROFIL PERUSAHAAN (KONSISTEN DENGAN WELCOME-SECTION BERANDA) */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-slate-200 overflow-hidden relative select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Baris Atas: Narasi Profil Korporat (Kiri) & Foto Gedung Kantor Autentik (Kanan) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Kolom Kiri: Narasi Profil Perusahaan & Jaminan Enterprise */}
            <ScrollReveal direction="up" delay={0.05} className="lg:col-span-7 flex flex-col justify-between space-y-4">
              
              <div className="space-y-3">
                {/* Breadcrumb Navigasi Minimalis */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-1">
                  <Link href="/" className="hover:text-[#1482C2] transition-colors">
                    Beranda
                  </Link>
                  <span className="text-slate-300">/</span>
                  <span className="text-[#1482C2]">Tentang Kami</span>
                </div>

                {/* Eyebrow Label Korporat Bersih */}
                <div className="flex items-center gap-2.5">
                  <span className="h-0.5 w-6 bg-[#1482C2]" aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                    Profil Perusahaan · CV. Bahari Tech Solution
                  </span>
                </div>

                {/* Headline Utama Berwibawa */}
                <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#233876] leading-tight tracking-tight">
                  Membangun Fondasi Sistem Digital Presisi Tanpa Keterikatan Vendor
                </h1>

                {/* Manifesto Pull-Quote Beraksen Garis Kiri */}
                <div className="border-l-2 border-[#1482C2] pl-3.5 sm:pl-4 py-0.5">
                  <p className="text-xs sm:text-sm font-medium text-[#233876] italic leading-relaxed">
                    &ldquo;Kami meyakini bahwa teknologi enterprise semestinya mempercepat akselerasi bisnis Anda, bukan menambah kerumitan operasional baru atau menyandera kedaulatan hak cipta kode Anda.&rdquo;
                  </p>
                </div>

                {/* Deskripsi Naratif: 1 Paragraf Padat & Substantif */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong className="font-bold text-[#233876]">{siteConfig.name}</strong> adalah software house dan konsultan teknologi berbadan hukum resmi yang berpusat di Tegal, Jawa Tengah, melayani transformasi digital untuk korporasi, institusi pemerintahan, dan pelaku usaha di seluruh Indonesia. Setiap solusi dikembangkan dengan metodologi Clean Architecture, sprint berkala yang transparan, dan jaminan penyerahan 100% hak milik source code.
                </p>
              </div>

              {/* 3 Jaminan Kunci Inline Bersih (Bebas Kotak-Kotak AI) */}
              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0" />
                  <span className="font-medium text-slate-700">Badan Usaha Sah (CV)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0" />
                  <span className="font-medium text-slate-700">100% Hak Milik IP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0" />
                  <span className="font-medium text-slate-700">Clean Architecture</span>
                </div>
              </div>

            </ScrollReveal>

            {/* Kolom Kanan: Visual Autentik Gedung Kantor Resmi (Sejajar Presisi & Mewah) */}
            <ScrollReveal direction="up" delay={0.15} className="lg:col-span-5 flex items-stretch">
              <div className="relative w-full h-[260px] sm:h-[300px] lg:h-full min-h-[280px] lg:min-h-[340px] rounded-2xl overflow-hidden shadow-[0_12px_30px_-8px_rgba(17,34,82,0.12)] border border-slate-200 bg-slate-100 group">
                <Image
                  src="/images/kantor/kantor_bts_utama.png"
                  alt="Gedung Kantor dan Pusat Operasional Rekayasa CV. Bahari Tech Solution"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </ScrollReveal>

          </div>

          {/* Baris Bawah: Metrik Sederhana, Lega & Enak di Mata (Tanpa Box Abu Tebal) */}
          <ScrollReveal direction="up" delay={0.25} className="mt-10 pt-8 border-t border-slate-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {companyStats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold text-[#233876] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 2. ARAH STRATEGIS: VISI & MISI KORPORASI (DUAL CARD KOMPAK BERSTANDAR EKSEKUTIF) */}
      <section className="py-7 sm:py-9 lg:py-10 bg-[#F8FAFC] border-b border-slate-200/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1.5 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                Arah Strategis Korporasi
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#233876] tracking-tight leading-tight">
              Visi &amp; Misi Bahari Tech Solution
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              Komitmen fundamental kami dalam memberikan dampak teknologi nyata yang memperkuat daya saing mitra bisnis di tingkat nasional.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Kartu Visi */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="h-full p-5 sm:p-6 lg:p-7 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between relative overflow-hidden group hover:border-[#1482C2] hover:shadow-md transition-all duration-300 border-t-2 border-t-[#1482C2]/60 hover:border-t-[#1482C2]">
                <div className="space-y-3 sm:space-y-4">
                  {/* Header Label & Icon Target */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#1482C2]">
                      VISI PERUSAHAAN
                    </span>
                    <Target className="h-4.5 w-4.5 text-slate-400 group-hover:text-[#1482C2] transition-colors" />
                  </div>

                  {/* Headline Utama Visi Resmi */}
                  <h3 className="text-base sm:text-lg font-bold text-[#233876] leading-snug group-hover:text-[#1482C2] transition-colors">
                    Menjadi Mitra Rekayasa Teknologi Terpercaya di Indonesia
                  </h3>

                  {/* Penjabaran Visi */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Memberdayakan pertumbuhan bisnis dan institusi pemerintahan melalui adopsi sistem digital yang tepat sasaran, tangguh, dan bernilai ekonomis tinggi.
                  </p>

                  {/* 3 Pilar Nilai Visi */}
                  <div className="pt-2 flex flex-wrap gap-2 text-xs">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1482C2]" />
                      Tepat Sasaran
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      Tangguh &amp; Skalabel
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#233876]" />
                      Bernilai Ekonomis
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="text-[#1482C2] font-bold">✓</span>
                  <span>Mitra Terpercaya Korporat &amp; Institusi Pemerintahan</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Kartu Misi */}
            <ScrollReveal direction="up" delay={0.15} className="h-full">
              <div className="h-full p-5 sm:p-6 lg:p-7 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between relative overflow-hidden group hover:border-[#1482C2] hover:shadow-md transition-all duration-300 border-t-2 border-t-[#1482C2]/60 hover:border-t-[#1482C2]">
                <div className="space-y-3 sm:space-y-4">
                  {/* Header Label & Icon Misi */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#1482C2]">
                      MISI PERUSAHAAN
                    </span>
                    <Compass className="h-4.5 w-4.5 text-slate-400 group-hover:text-[#1482C2] transition-colors" />
                  </div>

                  {/* Headline Utama Misi */}
                  <h3 className="text-base sm:text-lg font-bold text-[#233876] leading-snug group-hover:text-[#1482C2] transition-colors">
                    4 Komitmen Mutu &amp; Presisi Eksekusi
                  </h3>

                  {/* 4 Poin Misi Resmi */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0 mt-0.5" />
                      <span>Menghadirkan produk digital berstandar tinggi yang stabil, aman, dan mudah digunakan.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0 mt-0.5" />
                      <span>Menjamin ketepatan waktu pengerjaan melalui alur sprint Agile yang transparan.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0 mt-0.5" />
                      <span>Mengadopsi teknologi modern dan Clean Architecture yang siap berevolusi jangka panjang.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#1482C2] shrink-0 mt-0.5" />
                      <span>Memberikan pendampingan teknis purnajual yang responsif dengan jaminan SLA garansi.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="text-[#1482C2] font-bold">✓</span>
                  <span>Standar Tinggi · Disiplin Sprint · Garansi Purnajual SLA</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 3. NILAI-NILAI INTI KORPORAT: B · A · H · A · R · I (SLEEK CARDS SESUAI WHY-US-SECTION) */}
      <section className="py-7 sm:py-9 lg:py-10 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1.5 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                Filosofi &amp; Core Values Korporat
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#233876] tracking-tight leading-tight">
              Budaya Kerja &amp; Nilai Inti: B &bull; A &bull; H &bull; A &bull; R &bull; I
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              Mengambil inspirasi dari filosofi samudra—ketangguhan dalam mengarungi dinamika teknologi—enam pilar ini menjadi pedoman teguh setiap insinyur kami dalam menghadirkan karya rekayasa terbaik.
            </p>
          </ScrollReveal>

          {/* 6 Kartu Nilai Inti: Ramping, Elegan, Bebas Clutter AI */}
          <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <ScrollStaggerItem key={idx}>
                  <div className="group relative flex flex-col justify-between h-full rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs hover:border-[#1482C2] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border-t-2 border-t-[#1482C2]/60 hover:border-t-[#1482C2]">
                    <div>
                      {/* Baris Atas: Huruf Akronim B.A.H.A.R.I & Ikon */}
                      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="h-7 w-7 rounded-lg bg-[#EAF5FC] text-[#1482C2] font-bold text-sm flex items-center justify-center font-mono">
                            {val.letter}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-slate-400 tracking-wider">
                            {val.index}
                          </span>
                        </div>

                        <Icon className="h-4 w-4 text-slate-400 group-hover:text-[#1482C2] transition-colors duration-200" />
                      </div>

                      {/* Judul Nilai Korporat */}
                      <h3 className="text-sm sm:text-[15px] font-bold text-[#233876] mb-1.5 group-hover:text-[#1482C2] transition-colors leading-snug">
                        {val.title}
                      </h3>

                      {/* Deskripsi */}
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>

                    {/* Pilar Fokus Bawah */}
                    <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                      <span>Prinsip #{val.index}</span>
                      <span className="text-[#1482C2] font-semibold">{val.pillar}</span>
                    </div>
                  </div>
                </ScrollStaggerItem>
              );
            })}
          </ScrollStagger>

        </div>
      </section>

      {/* 4. STANDAR MUTU & TATA KELOLA LEGALITAS RESMI */}
      <section className="py-7 sm:py-9 lg:py-10 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1.5 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                Kepastian Hukum &amp; Tata Kelola
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#233876] tracking-tight leading-tight">
              Standar Legalitas &amp; Perlindungan Klien
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              Jaminan formal bahwa setiap proyek dan investasi teknologi Anda terlindungi secara hukum, administratif, dan profesional.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
            {legalPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between h-full rounded-xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-2xs hover:border-[#1482C2] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border-t-2 border-t-[#1482C2]/60 hover:border-t-[#1482C2]"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100">
                      <span className="text-[11px] font-mono font-bold text-[#1482C2] tracking-wider uppercase">
                        {item.badge}
                      </span>
                      <Icon className="h-4 w-4 text-slate-400 group-hover:text-[#1482C2] transition-colors" />
                    </div>

                    <h3 className="text-sm sm:text-[15px] font-bold text-[#233876] mb-1.5 group-hover:text-[#1482C2] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
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
      <section className="py-7 sm:py-9 lg:py-11 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8 rounded-2xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-8">
              
              <div className="max-w-2xl space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-5 bg-[#1482C2]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                    Mulai Diskusi Teknologi
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#233876] tracking-tight leading-tight">
                  Siap Membangun Sistem Digital Berkualitas Bersama Kami?
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  Diskusikan rancangan arsitektur software, estimasi waktu pengerjaan, dan Rencana Anggaran Biaya (RAB) transparan langsung bersama software engineer Bahari Tech Solution.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <Link href="/kontak" className="w-full sm:w-auto">
                  <span className="w-full sm:w-auto h-11 px-6 rounded-lg bg-[#233876] hover:bg-[#1482C2] text-white text-xs sm:text-sm font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-xs cursor-pointer">
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
                    <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366] shrink-0" />
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
