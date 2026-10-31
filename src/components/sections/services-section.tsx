"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { siteConfig } from "@/config/site";

interface CorporateService {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  metric: string;
  image: string;
  slug: string;
  whatsappMessage: string;
}

const corporateServices: CorporateService[] = [
  {
    id: "erp",
    number: "01",
    category: "Enterprise Systems",
    title: "Enterprise ERP & Custom Core Systems",
    description:
      "Digitalisasi menyeluruh operasional bisnis: integrasi multi-cabang, inventori stok terpusat, keuangan, dan HRIS tanpa ketergantungan biaya lisensi berulang.",
    tags: ["Multi-Cabang", "Stok Terintegrasi", "100% Hak Milik"],
    metric: "Efisiensi Kerja +75%",
    image: "/images/services/service-erp.jpg",
    slug: "enterprise-system-erp",
    whatsappMessage:
      "Halo Tim Bahari Tech Solution, saya ingin konsultasi mengenai implementasi Enterprise ERP & Custom Core Systems untuk digitalisasi operasional bisnis kami. Boleh dibantu informasi alur pengerjaan dan estimasinya? Terima kasih.",
  },
  {
    id: "mobile",
    number: "02",
    category: "Mobile Engineering",
    title: "Pengembangan Aplikasi Mobile (iOS & Android)",
    description:
      "Aplikasi smartphone native & cross-platform berkinerja tinggi untuk operasional armada lapangan maupun jutaan pengguna ritel di Google Play & App Store.",
    tags: ["iOS & Android", "Offline Sync", "60 FPS Native"],
    metric: "Kurasi Store 100%",
    image: "/images/services/service-mobile.jpg",
    slug: "mobile-app-development",
    whatsappMessage:
      "Halo Tim Bahari Tech Solution, saya tertarik untuk konsultasi pengembangan Aplikasi Mobile (iOS & Android) untuk bisnis kami. Boleh dibantu estimasi timeline, arsitektur, dan biayanya? Terima kasih.",
  },
  {
    id: "web",
    number: "03",
    category: "Web & SaaS Platform",
    title: "Aplikasi Web Modern & Portal Enterprise",
    description:
      "Platform web bisnis berkecepatan tinggi dengan Next.js SSR, waktu respon sub-detik, ramah SEO Google, dan siap menampung lonjakan ribuan transaksi serentak.",
    tags: ["Next.js SSR", "Core Web Vitals 95+", "Modular API"],
    metric: "Muat Sub-Detik (< 0.8s)",
    image: "/images/services/service-web.jpg",
    slug: "web-development",
    whatsappMessage:
      "Halo Tim Bahari Tech Solution, saya ingin konsultasi pembuatan Aplikasi Web Modern / Portal Enterprise berbasis Next.js. Boleh dijadwalkan sesi diskusi kebutuhan teknisnya? Terima kasih.",
  },
  {
    id: "cloud-security",
    number: "04",
    category: "Cloud & Cyber Security",
    title: "Infrastruktur Cloud & Keamanan Siber",
    description:
      "Modernisasi arsitektur server cloud elastis 24/7 (AWS & GCP) dengan jaminan SLA Uptime 99.98%, audit keamanan OWASP, serta proteksi anti-DDoS terpadu.",
    tags: ["AWS & Google Cloud", "Audit OWASP", "Hemat Biaya 42%"],
    metric: "SLA Uptime 99.98%",
    image: "/images/services/service-cloud.jpg",
    slug: "cloud-devops-infrastructure",
    whatsappMessage:
      "Halo Tim Bahari Tech Solution, saya ingin berkonsultasi mengenai solusi Infrastruktur Cloud & Keamanan Siber server perusahaan kami. Mohon informasi rekomendasi arsitektur dan penawarannya. Terima kasih.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-white border-b border-slate-200 select-none overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi Berstandar Korporat Global & Web Ekspor (Kompak & Rapi) */}
        <ScrollReveal direction="up" delay={0.05} className="mb-5 sm:mb-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3.5 pb-3.5 border-b border-slate-200">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-5 bg-[#1482C2]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1482C2]">
                  Kapasitas Rekayasa &amp; Solusi Bisnis
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900 leading-tight tracking-tight">
                Solusi Perangkat Lunak untuk Segala Skala Bisnis
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dari digitalisasi operasional multi-cabang hingga infrastruktur cloud dengan keandalan tinggi, kami merekayasa sistem teknologi kustom untuk memacu pertumbuhan bisnis Anda.
              </p>
            </div>

            <div className="shrink-0 self-start lg:self-auto">
              <Link
                href="/layanan"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group shadow-2xs"
              >
                <span>Lihat Seluruh Katalog Layanan</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Pilar Kartu Layanan: Proporsi Ramping & Hemat Ruang Vertikal */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {corporateServices.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-3 sm:p-3.5 shadow-2xs hover:border-[#1482C2] hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div>
                  {/* Header Kartu: Index Nomor & Kategori Editorial Ringkas */}
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-bold text-[#1482C2] tracking-wider">
                        {service.number}
                      </span>
                      <span className="text-slate-300 text-[10px] font-mono">/</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>
                    <Link
                      href={`/layanan#${service.slug}`}
                      className="h-5.5 w-5.5 rounded-full bg-slate-50 group-hover:bg-[#1482C2] text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-300"
                      aria-label={`Detail ${service.title}`}
                    >
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Bingkai Foto Korporat Sinematik Widescreen 16:10 (Lebih Ramping & Hemat Ruang) */}
                  <Link
                    href={`/layanan#${service.slug}`}
                    className="block relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-100 mb-2.5 border border-slate-100"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#233876]/25 via-transparent to-transparent pointer-events-none" />
                  </Link>

                  {/* Konten Judul & Ringkasan Solusi (Terkontrol Rapi) */}
                  <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    <Link href={`/layanan#${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Spesifikasi Teknis & Kapasitas (Chips Rapi & Kompak) */}
                  <div className="flex flex-wrap gap-1 mt-2.5 pt-2 border-t border-slate-100">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] sm:text-[10.5px] font-semibold px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/80 group-hover:border-[#1482C2]/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Kartu: Metrik Kunci & Tautan Konsultasi Langsung ke WhatsApp */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-600 tracking-tight">
                    {service.metric}
                  </span>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                      service.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-600 hover:text-sky-700 group-hover:translate-x-0.5 transition-all"
                    aria-label={`Konsultasi WhatsApp untuk ${service.title}`}
                  >
                    <span>Konsultasi</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
