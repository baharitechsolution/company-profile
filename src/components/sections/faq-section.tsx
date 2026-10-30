"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WhatsAppIcon } from "@/components/shared/icons";

interface FaqItem {
  id: string;
  category: "workflow" | "security" | "warranty" | "tech";
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "faq-tegal",
    category: "workflow",
    question: "Apakah Bahari Tech Solution melayani pembuatan website dan aplikasi di Tegal dan sekitarnya?",
    answer:
      "Ya, kantor operasional kami berada di Kecamatan Kramat, Kabupaten Tegal. Kami melayani jasa pembuatan website profil, toko online, aplikasi mobile Android & iOS, dan sistem ERP untuk UMKM maupun perusahaan di Kota Tegal, Slawi, Brebes, Pemalang, Pekalongan, hingga seluruh Indonesia baik secara tatap muka (onsite) di kantor kami maupun secara daring.",
  },
  // --- KATEGORI 1: ALUR KERJA & BIAYA ---
  {
    id: "faq-1",
    category: "workflow",
    question: "Berapa lama estimasi waktu pengerjaan sebuah software atau aplikasi?",
    answer:
      "Website profil atau landing page interaktif rata-rata berkisar 2–4 minggu. Aplikasi mobile (MVP) atau modul software kustom skala menengah rata-rata membutuhkan 6–10 minggu. Sedangkan sistem Enterprise ERP multi-cabang terintegrasi umumnya memerlukan 3–5 bulan dengan metodologi Agile bertahap.",
  },
  {
    id: "faq-2",
    category: "workflow",
    question: "Bagaimana tahapan alur kerja pembuatan software di Bahari Tech?",
    answer:
      "Kami menerapkan 5 tahapan transparan: (1) Discovery & Analisis Kebutuhan Teknis, (2) Desain UI/UX & Prototipe Interaktif di Figma, (3) Sprint Rekayasa Kode (Clean Architecture & Agile Development), (4) QA, UAT & OWASP Security Audit, dan (5) Deployment Live Server, serah terima source code, serta pelatihan tim pengguna.",
  },
  {
    id: "faq-3",
    category: "workflow",
    question: "Berapa estimasi biaya jasa pembuatan aplikasi atau software kustom?",
    answer:
      "Investasi disesuaikan secara transparan berdasarkan ruang lingkup fitur (Scope of Work), arsitektur teknologi, dan integrasi API pihak ketiga. Kami memberikan konsultasi awal dan Rencana Anggaran Biaya (RAB) resmi tanpa biaya tersembunyi.",
  },
  {
    id: "faq-4",
    category: "workflow",
    question: "Bagaimana skema pembayaran (termin) proyek di Bahari Tech Solution?",
    answer:
      "Pembayaran dibagi ke dalam beberapa termin berbasis pencapaian milestone resmi (contoh: DP 30%, Milestone Desain & Sprint Inti 30%, Milestone UAT 30%, dan Pelunasan Handover 10%), sehingga menjamin keamanan anggaran dan kepastian progres Anda.",
  },

  // --- KATEGORI 2: SOURCE CODE, LEGAL & KEAMANAN ---
  {
    id: "faq-5",
    category: "security",
    question: "Apakah klien mendapatkan hak milik penuh atas Source Code (IP)?",
    answer:
      "Ya, 100% hak cipta intelektual (Intellectual Property) dan seluruh source code menjadi milik penuh klien setelah pelunasan proyek. Kami menyerahkan repositori kode rapi (Git), dokumentasi arsitektur, dan tanpa sistem keterikatan tertutup (vendor lock-in).",
  },
  {
    id: "faq-6",
    category: "security",
    question: "Bagaimana Bahari Tech Solution menjamin keamanan data dan kerahasiaan bisnis?",
    answer:
      "Kerahasiaan bisnis Anda dilindungi secara hukum melalui Non-Disclosure Agreement (NDA) resmi bermaterai sebelum proyek dimulai. Sisi teknis menerapkan standar OWASP Top 10, enkripsi SSL/TLS 256-bit, dan kepatuhan regulasi UU Perlindungan Data Pribadi (PDP).",
  },
  {
    id: "faq-7",
    category: "security",
    question: "Apakah Bahari Tech Solution entitas legal resmi yang menerbitkan Faktur Pajak?",
    answer:
      "Ya, kami beroperasi di bawah badan usaha legal resmi di Indonesia (lengkap dengan NIB, NPWP Perusahaan, rekening bank atas nama perusahaan), dan siap menerbitkan Invoice resmi, Surat Perjanjian Kerjasama (SPK), serta Faktur Pajak (PPN) untuk kebutuhan korporasi maupun instansi.",
  },
  {
    id: "faq-8",
    category: "security",
    question: "Bagaimana jika ada pergantian tim developer internal klien di masa depan?",
    answer:
      "Seluruh kode dibangun dengan Clean Code, dokumentasi inline, dan panduan arsitektur (README & System Manual). Tim teknis baru Anda dapat melanjutkan pemeliharaan secara mandiri tanpa ketergantungan sepihak.",
  },

  // --- KATEGORI 3: GARANSI, SERVER & MAINTENANCE ---
  {
    id: "faq-9",
    category: "warranty",
    question: "Apakah ada garansi pemeliharaan (maintenance) setelah aplikasi selesai?",
    answer:
      "Tentu. Setiap proyek kami sertai Garansi Bebas Bug (Free Bug Fixes) dan masa pemeliharaan resmi paska-rilis selama 3 hingga 6 bulan. Kami juga menyediakan opsi SLA kontrak tahunan untuk monitoring server 24/7 dan pembaruan berkala.",
  },
  {
    id: "faq-10",
    category: "warranty",
    question: "Apakah server, cloud hosting, dan domain dibantu pengaturannya?",
    answer:
      "Kami membantu konsultasi, arsitektur, dan deployment cloud server terbaik (AWS, GCP, DigitalOcean, atau server lokal). Akun cloud dan domain 100% didaftarkan atas nama perusahaan klien demi kepemilikan aset digital yang independen.",
  },
  {
    id: "faq-11",
    category: "warranty",
    question: "Bagaimana penanganan jika server mengalami kendala darurat (downtime)?",
    answer:
      "Klien dengan paket SLA Maintenance mendapatkan dukungan respon cepat tim DevOps standby 24/7, failover otomatis, auto-backup database harian, serta konfigurasi proteksi firewall mitigasi DDoS.",
  },
  {
    id: "faq-12",
    category: "warranty",
    question: "Apakah staf kami diberikan pelatihan (training) penggunaan sistem?",
    answer:
      "Ya, setiap serah terima mencakup sesi pelatihan komprehensif bagi administrator dan staf operasional (online maupun offline), dilengkapi rekaman video panduan dan buku manual penggunaan sistem (User Manual Book).",
  },

  // --- KATEGORI 4: TEKNOLOGI, FITUR & INTEGRASI ---
  {
    id: "faq-13",
    category: "tech",
    question: "Teknologi (Tech Stack) apa yang digunakan untuk membangun sistem?",
    answer:
      "Kami menggunakan stack modern berkinerja tinggi: Next.js, React, TypeScript, Node.js, Go/Python, PostgreSQL, Redis, Docker, serta cloud AWS & GCP. Untuk mobile, kami memakai React Native & Flutter (lintas platform hemat) atau native Kotlin/Swift.",
  },
  {
    id: "faq-14",
    category: "tech",
    question: "Bisakah software baru diintegrasikan dengan API atau sistem lama?",
    answer:
      "Sangat bisa. Kami berpengalaman mengintegrasikan payment gateway resmi (Midtrans, Xendit), kurir logistik, WhatsApp Business API, sistem akuntansi, database ERP lawas, maupun perangkat keras IoT via REST API, GraphQL, atau Webhook real-time.",
  },
  {
    id: "faq-15",
    category: "tech",
    question: "Apakah Bahari Tech membantu proses upload rilis di Play Store & App Store?",
    answer:
      "Ya, kami mendampingi penuh mulai dari persiapan aset store, konfigurasi kebijakan privasi, kepatuhan pedoman Google Play & Apple App Store, hingga aplikasi terverifikasi dan sukses tayang live siap diunduh pengguna.",
  },
  {
    id: "faq-16",
    category: "tech",
    question: "Bagaimana jika ada kebutuhan penambahan fitur baru di tengah pengerjaan?",
    answer:
      "Kami menerapkan metodologi Agile yang adaptif. Penambahan fitur baru akan dihitung dampak estimasi waktu dan biayanya melalui dokumen Change Request (CR) / Addendum resmi yang disepakati bersama secara transparan sebelum dieksekusi.",
  },
];

const categories = [
  { id: "all", label: "Semua" },
  { id: "workflow", label: "Alur & Biaya" },
  { id: "security", label: "Source Code & Legal" },
  { id: "warranty", label: "Garansi & Server" },
  { id: "tech", label: "Teknologi & Fitur" },
] as const;

export function FaqSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = React.useMemo(() => {
    if (activeCategory === "all") return faqData;
    return faqData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Schema.org FAQPage JSON-LD 16 Pertanyaan Lengkap untuk Google SEO Rich Snippet
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const whatsappFaqUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20software%20dan%20ada%20pertanyaan%20spesifik.`;

  return (
    <section
      id="faq"
      className="py-6 sm:py-8 lg:py-10 bg-[#F8FAFC] border-b border-slate-200 select-none"
    >
      {/* Schema.org FAQPage Data Terstruktur untuk Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Tengah Standar Industri & Kompak */}
        <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1.5 mb-4 sm:mb-5">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-0.5 w-5 bg-[#1482C2]" />
            <span className="text-xs font-bold tracking-wider uppercase text-[#1482C2]">
              Tanya Jawab &amp; Panduan Kerjasama
            </span>
            <span className="h-0.5 w-5 bg-[#1482C2]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#112252] tracking-tight leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Temukan jawaban transparan seputar estimasi biaya, alur rekayasa, kepemilikan source code 100%, hingga garansi resmi kami.
          </p>
        </ScrollReveal>

        {/* Tab Kategori Horizontal Simpel & Bersih */}
        <ScrollReveal direction="up" delay={0.1} className="flex flex-wrap items-center justify-center gap-1.5 mb-5 sm:mb-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#1482C2] text-white shadow-2xs font-bold"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-[#112252] border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Accordion List Terpadu Bergaris Pembatas (Sesuai Standar FAQ Universal) */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="divide-y divide-slate-200/90 border-y border-slate-200/90">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div key={faq.id} className="transition-colors">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-4 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-hidden group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span
                    className={`text-sm sm:text-[15px] font-bold leading-snug transition-colors ${
                      isOpen ? "text-[#1482C2]" : "text-[#112252] group-hover:text-[#1482C2]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-0.5 sm:mt-0 ${
                      isOpen
                        ? "bg-[#1482C2] text-white rotate-180"
                        : "bg-slate-100 text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    <ChevronDown className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </button>

                {/* Konten Jawaban */}
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="pb-4 pt-0.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </ScrollReveal>

        {/* Footer Prompt Bersih & Ramah */}
        <ScrollReveal direction="up" delay={0.2} className="mt-5 sm:mt-6 text-center text-xs text-slate-600 flex flex-wrap items-center justify-center gap-2">
          <span>Masih memiliki pertanyaan spesifik yang belum terjawab?</span>
          <Link
            href={whatsappFaqUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#1482C2] hover:text-[#0E6496] inline-flex items-center gap-1.5 hover:underline"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0" />
            <span>Konsultasikan via WhatsApp Resmi</span>
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}
