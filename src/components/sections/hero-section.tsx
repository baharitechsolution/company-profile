"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { HeroBannerVisual } from "@/components/sections/hero-banner-visual";

const slides = [
  {
    id: 1,
    visualType: "mobile" as const,
    tag: "APLIKASI MOBILE · ANDROID & IOS",
    headingPart1: "Bangun aplikasi mobile modern, ditemukan oleh",
    headingHighlight: "jutaan pengguna",
    headingPart2: "lintas platform.",
    description:
      "Pengembangan aplikasi mobile native iOS & Android berkinerja 60 FPS, arsitektur hemat daya, dan siap lolos kurasi resmi di App Store & Google Play.",
    primaryCta: { text: "Diskusikan Ide Aplikasi", href: "/kontak" },
    whatsappCta: {
      text: "Chat Tim Mobile App",
      href: `https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech,%20saya%20ingin%20membuat%20aplikasi%20mobile%20Android%20dan%20iOS.`,
    },
    metricLabel: "Kepuasan Klien",
    proofStat: "50+",
    proofLabel: "Aplikasi Sukses Rilis di Store",
    techStack: [
      "Flutter & Swift",
      "Kotlin Android",
      "App Store Kurasi",
      "Offline-First Sync",
      "REST & GraphQL",
    ],
  },
  {
    id: 2,
    visualType: "enterprise" as const,
    tag: "SOFTWARE HOUSE · ENTERPRISE ERP",
    headingPart1: "Kembangkan bisnis dan operasional dengan",
    headingHighlight: "software kustom",
    headingPart2: "yang andal & siap pakai.",
    description:
      "Rekayasa sistem ERP dan software enterprise kustom multi-cabang terintegrasi. Skalabel, bebas lag, dan bergaransi resmi tanpa biaya lisensi berulang.",
    primaryCta: { text: "Mulai Blueprint Sistem", href: "/kontak" },
    whatsappCta: {
      text: "Chat Konsultan ERP",
      href: `https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20software%20kustom%20dan%20ERP.`,
    },
    metricLabel: "Kepuasan Klien",
    proofStat: "100k+",
    proofLabel: "Transaksi Harian Tanpa Lag",
    techStack: [
      "Clean Architecture",
      "PostgreSQL",
      "Multi-Branch Sync",
      "Audit OWASP",
      "Zero Vendor Lock-in",
    ],
  },
  {
    id: 3,
    visualType: "web" as const,
    tag: "APLIKASI WEB · NEXT.JS & ENTERPRISE PORTAL",
    headingPart1: "Bangun aplikasi web modern & cepat,",
    headingHighlight: "skalabilitas tinggi",
    headingPart2: "berstandar enterprise.",
    description:
      "Platform web bisnis dan SaaS berperforma tinggi dengan Next.js. Waktu muat kilat, ramah SEO Google, dan siap menampung ribuan transaksi serentak.",
    primaryCta: { text: "Konsultasi Proyek Web", href: "/kontak" },
    whatsappCta: {
      text: "Chat Arsitek Web",
      href: `https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20Web%20Application%20dan%20Portal%20Enterprise.`,
    },
    metricLabel: "Kepuasan Klien",
    proofStat: "0.6 Detik",
    proofLabel: "Rata-rata Waktu Muat Kilat",
    techStack: [
      "Next.js 16 SSR",
      "TypeScript",
      "Tailwind CSS",
      "SEO Google Lolos",
      "High Concurrency API",
    ],
  },
  {
    id: 4,
    visualType: "cloud" as const,
    tag: "CLOUD DEVOPS · CYBERSECURITY",
    headingPart1: "Modernisasi infrastruktur server,",
    headingHighlight: "siap scale-up",
    headingPart2: "tanpa celah keamanan.",
    description:
      "Arsitektur cloud server elastis berstandar audit OWASP dengan proteksi anti-DDoS 24/7 dan efisiensi biaya server hingga 42% lebih hemat dan stabil.",
    primaryCta: { text: "Jadwalkan Audit Server", href: "/kontak" },
    whatsappCta: {
      text: "Chat Arsitek Cloud",
      href: `https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech,%20saya%20ingin%20konsultasi%20infrastruktur%20cloud%20dan%20keamanan%20server.`,
    },
    metricLabel: "Kepuasan Klien",
    proofStat: "99.99%",
    proofLabel: "SLA Uptime Cloud Server",
    techStack: [
      "AWS & Google Cloud",
      "Anti-DDoS 24/7",
      "Docker / K8s",
      "Auto-Backup Harian",
      "Hemat Biaya 42%",
    ],
  },
];

// Array slide dengan kloning di ujung (Infinite Loop Seamless)
const extendedSlides = [
  slides[slides.length - 1], // Index 0: Kloning Slide Terakhir (Cloud)
  ...slides,                  // Index 1..4: Slide 1 (Mobile), 2 (ERP), 3 (Web), 4 (Cloud)
  slides[0],                  // Index 5: Kloning Slide Pertama (Mobile)
];

export function HeroSection() {
  // Mulai di index 1 (Slide 1 sesungguhnya)
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [enableTransition, setEnableTransition] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);
  const touchStartXRef = React.useRef<number | null>(null);

  // Index slide aktif untuk bullet indikator (0 sampai 3)
  const activeSlide = (currentIndex - 1 + slides.length) % slides.length;

  const handleNext = React.useCallback(() => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = React.useCallback(() => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleSelectBullet = (idx: number) => {
    setEnableTransition(true);
    setCurrentIndex(idx + 1);
  };

  // Auto slide setiap 5.5 detik
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Seamless Infinite Loop Snap Handler saat transisi CSS selesai
  const handleTransitionEnd = () => {
    if (currentIndex >= extendedSlides.length - 1) {
      // Sampai di kloning slide 1 (ujung kanan) -> Langsung snap ke slide 1 asli tanpa animasi
      setEnableTransition(false);
      setCurrentIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    } else if (currentIndex <= 0) {
      // Sampai di kloning slide 4 (ujung kiri) -> Langsung snap ke slide 4 asli tanpa animasi
      setEnableTransition(false);
      setCurrentIndex(slides.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  // Support swipe gesture di layar sentuh mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  return (
    <section
      className="relative overflow-hidden bg-white min-h-[640px] lg:min-h-[calc(100vh-4rem)] lg:max-h-[920px] flex flex-col justify-between border-b border-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_60%,transparent_100%)] -z-10"
      />

      {/* Atmospheric Ambient Radial Lighting Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[5%] w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-[#0EB8D8]/12 via-[#1482C2]/6 to-transparent blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-[#1482C2]/6 via-[#0EB8D8]/4 to-transparent blur-3xl -z-10"
      />

      {/* TRACK SLIDER HORIZONTAL PENUH DENGAN INFINITE FORWARD LOOP */}
      <div className="relative w-full overflow-hidden flex-1 flex items-center py-6 sm:py-8 lg:py-10">
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex w-full items-center ${
            enableTransition
              ? "transition-transform duration-700 ease-in-out"
              : "transition-none"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedSlides.map((slide, idx) => {
            const originalIndex = (idx - 1 + slides.length) % slides.length;
            return (
              <div key={`ext-slide-${idx}`} className="w-full shrink-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    
                    {/* Kolom Kiri: Teks Headline, Deskripsi Profesional & Tombol CTA */}
                    <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6">
                      
                      {/* Eyebrow Editorial Kicker Arsitektural Bersih (Tanpa Kapsul AI) */}
                      <div className="flex items-center gap-2.5">
                        <span className="h-px w-6 bg-[#1482C2]" aria-hidden="true" />
                        <p className="text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#1482C2]">
                          {slide.tag}
                        </p>
                      </div>

                      {/* H1 Headline Bersih & Berwibawa */}
                      <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[48px] font-extrabold text-[#112252] leading-[1.14] tracking-tight">
                        {slide.headingPart1}{" "}
                        <span className="text-[#1482C2]">{slide.headingHighlight}</span>{" "}
                        {slide.headingPart2}
                      </h1>

                      {/* Deskripsi Kalimat Profesional */}
                      <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed max-w-xl">
                        {slide.description}
                      </p>

                      {/* Tombol CTA Aksi Utama */}
                      <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <Link href={slide.primaryCta.href}>
                          <Button
                            size="md"
                            variant="primary"
                            className="w-full sm:w-auto h-12 px-7 gap-2.5 text-xs sm:text-sm font-bold shadow-md shadow-[#1482C2]/15 hover:shadow-lg hover:shadow-[#1482C2]/25 hover:bg-[#0E6496] transition-all"
                          >
                            <span>{slide.primaryCta.text}</span>
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>

                        <Link
                          href={slide.whatsappCta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="md"
                            variant="outline"
                            className="w-full sm:w-auto h-12 px-6 gap-2.5 text-xs sm:text-sm font-bold border-slate-300 bg-white text-slate-800 hover:border-[#25D366] hover:text-[#112252] hover:bg-emerald-50/30 transition-all shadow-2xs"
                          >
                            <Image
                              src="/images/Icon/icon whatsapp.png"
                              alt="WhatsApp"
                              width={18}
                              height={18}
                              className="h-4.5 w-4.5 object-contain shrink-0"
                            />
                            <span>{slide.whatsappCta.text}</span>
                          </Button>
                        </Link>
                      </div>

                      {/* Bar Kepercayaan & Kredibilitas Autentik dengan Tech Stack Strip */}
                      <div className="pt-3 sm:pt-4 space-y-2 border-t border-slate-100">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600">
                          <div className="flex items-center gap-1.5">
                            <span className="text-amber-500 font-bold">★ 4.9 / 5.0</span>
                            <span className="text-slate-400">·</span>
                            <span>{slide.metricLabel}</span>
                          </div>
                          <span className="hidden sm:inline-block text-slate-300">|</span>
                          <div className="text-slate-700 font-medium">
                            <span className="font-extrabold text-[#112252]">{slide.proofStat}</span>{" "}
                            <span className="text-slate-500">{slide.proofLabel}</span>
                          </div>
                          <span className="hidden md:inline-block text-slate-300">|</span>
                          <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                            <ShieldCheck className="h-4 w-4 text-emerald-600" />
                            <span>100% Hak Milik IP</span>
                          </div>
                        </div>

                        {/* Tech Stack List - Tipografi Bersih (Tanpa Kotak Tag AI) */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                          <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                            Stack:
                          </span>
                          {slide.techStack.map((tech, tIdx) => (
                            <React.Fragment key={tIdx}>
                              <span className="text-slate-700 font-medium">{tech}</span>
                              {tIdx < slide.techStack.length - 1 && (
                                <span className="text-slate-300 select-none">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Kolom Kanan: Visual Model Dinamis Khusus Slide Ini */}
                    <div className="lg:col-span-5 flex items-center justify-center pt-2 pb-4 lg:py-0">
                      <HeroBannerVisual slideIndex={originalIndex} visualType={slide.visualType} />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Kontrol Navigasi Slide Bawah: Bullet Indikator Kompak & Minimalis */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-3 sm:py-3.5 border-t border-slate-100 flex items-center justify-between z-10 bg-white/90 backdrop-blur-xs">
        {/* Bullet Indikator Slide & Index Counter */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectBullet(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx
                    ? "w-8 bg-[#1482C2]"
                    : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Pilih Slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-mono font-bold text-slate-400">
            0{activeSlide + 1} <span className="text-slate-300">/</span> 0{slides.length}
          </span>
        </div>
      </div>
    </section>
  );
}
