"use client";

import * as React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Layers,
  Gauge,
  CheckCircle2,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                 REAL RECOGNIZABLE BRAND & SYSTEM VECTOR SVGS               */
/* -------------------------------------------------------------------------- */

function GooglePlayLogo({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 466 512" fill="none" aria-label="Google Play Store">
      <path
        fill="#EA4335"
        d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z"
      />
      <path
        fill="#FBBC04"
        d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z"
      />
      <path
        fill="#34A853"
        d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z"
      />
      <path
        fill="#4285F4"
        d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z"
      />
    </svg>
  );
}

function AppStoreLogo({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Apple App Store">
      <rect width="24" height="24" rx="5.5" fill="#0071E3" />
      <path
        d="M8 17.5L12 10.5L16 17.5M9.8 14.5H14.2M12 4.5V10.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NextjsLogo({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" aria-label="Next.js">
      <circle cx="90" cy="90" r="90" fill="#000" />
      <path
        d="M149.5 163.5L78.6 70.8V146H63.6V34H78.6L149.5 127.2V34H164.5V163.5H149.5Z"
        fill="url(#paint0_linear_next)"
      />
      <path d="M115.5 34H130.5V114.5H115.5V34Z" fill="white" />
      <defs>
        <linearGradient
          id="paint0_linear_next"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CloudServerLogo({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <div className="h-6 w-6 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0">
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*        SLIDE 0: WEB APPLICATION & SAAS (KOMPOSISI 4-CARDS SEIMBANG)        */
/* -------------------------------------------------------------------------- */

function Slide0WebVisual() {
  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[450px] lg:max-w-[470px] mx-auto select-none pt-2 sm:pt-4 px-1">
      {/* Geometris Stage Backdrop */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
      >
        <svg
          viewBox="0 0 540 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
        >
          <circle cx="270" cy="170" r="150" fill="#1482C2" />
          <rect x="365" y="80" width="100" height="260" rx="50" fill="#0EB8D8" />
          <path d="M 125 440 A 145 145 0 0 1 415 440 Z" fill="#233876" />
        </svg>
      </div>

      {/* CARD 1: Kiri Atas - Kecepatan Kilat */}
      <div className="absolute top-2 left-2 sm:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <Gauge className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">0.6 Detik Kilat</span>
          <span className="block text-[9px] font-medium text-emerald-600 mt-0.5">Core Web Vitals Skor 99</span>
        </div>
      </div>

      {/* CARD 2: Kiri Bawah - 100% Hak Milik IP */}
      <div className="absolute bottom-6 left-2 sm:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <ShieldCheck className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">100% Hak Milik IP</span>
          <span className="block text-[9px] font-medium text-slate-500 mt-0.5">Bebas Vendor Lock-In</span>
        </div>
      </div>

      {/* CARD 3: Kanan Atas/Tengah - Next.js Arsitektur */}
      <div className="absolute top-18 sm:top-22 right-2 sm:right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <NextjsLogo className="h-4.5 w-4.5 shrink-0" />
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">Next.js 16 SSR</span>
          <span className="block text-[9px] font-medium text-slate-500 mt-0.5">Clean Architecture</span>
        </div>
      </div>

      {/* CARD 4: Kanan Bawah - SEO & Mobile-Ready */}
      <div className="absolute bottom-3 right-2 sm:right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0">
          <CheckCircle2 className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">SEO &amp; Mobile-Ready</span>
          <span className="block text-[9px] font-medium text-emerald-600 mt-0.5">Trafik Google Maksimal</span>
        </div>
      </div>

      {/* Model Arsitek Web Wanita */}
      <div
        className="relative z-10 mx-auto flex items-end justify-center h-[330px] sm:h-[385px] lg:h-[435px] xl:h-[465px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/model-web-cutout.png"
          alt="Arsitek Web Application dan Portal Enterprise Bahari Tech Solution"
          width={768}
          height={1101}
          priority
          quality={95}
          className="block w-auto h-full max-h-[330px] sm:max-h-[385px] lg:max-h-[435px] xl:max-h-[465px] object-contain select-none pointer-events-none"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*      SLIDE 1: ENTERPRISE ERP & SOFTWARE (KOMPOSISI 4-CARDS SEIMBANG)       */
/* -------------------------------------------------------------------------- */

function Slide1EnterpriseVisual() {
  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[450px] lg:max-w-[470px] mx-auto select-none pt-2 sm:pt-4 px-1">
      {/* Geometris Stage Backdrop */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
      >
        <svg
          viewBox="0 0 540 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
        >
          <circle cx="190" cy="165" r="150" fill="#1482C2" />
          <rect x="355" y="90" width="105" height="260" rx="52" fill="#233876" />
          <path d="M 125 440 A 145 145 0 0 1 415 440 Z" fill="#0EB8D8" />
        </svg>
      </div>

      {/* CARD 1: Kiri Atas - 100% Hak Milik IP */}
      <div className="absolute top-2 left-2 sm:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <ShieldCheck className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">100% Hak Milik IP</span>
          <span className="block text-[9px] font-medium text-slate-500 mt-0.5">Bebas Vendor Lock-In</span>
        </div>
      </div>

      {/* CARD 2: Kiri Bawah - Audit Finansial & Stok (Posisi Spesifik Permintaan User!) */}
      <div className="absolute bottom-6 left-2 sm:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <CheckCircle2 className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">Audit Finansial &amp; Stok</span>
          <span className="block text-[9px] font-medium text-slate-500 mt-0.5">Akurat Tanpa Selisih</span>
        </div>
      </div>

      {/* CARD 3: Kanan Atas/Tengah - Multi-Cabang Real-Time */}
      <div className="absolute top-18 sm:top-22 right-2 sm:right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0">
          <Layers className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">Multi-Cabang Sync</span>
          <span className="block text-[9px] font-medium text-emerald-600 mt-0.5">Terintegrasi Real-Time</span>
        </div>
      </div>

      {/* CARD 4: Kanan Bawah - Efisiensi Kerja +75% */}
      <div className="absolute bottom-3 right-2 sm:right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <Gauge className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">Efisiensi Kerja +75%</span>
          <span className="block text-[9px] font-medium text-emerald-600 mt-0.5">Automasi Alur Operasional</span>
        </div>
      </div>

      {/* Model Karakter Utama (Konsultan ERP) */}
      <div
        className="relative z-10 mx-auto flex items-end justify-center h-[330px] sm:h-[385px] lg:h-[435px] xl:h-[465px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/tech-model-cutout.png"
          alt="Konsultan Senior Enterprise ERP Bahari Tech Solution"
          width={800}
          height={1080}
          priority
          quality={95}
          className="block w-auto h-full max-h-[330px] sm:max-h-[385px] lg:max-h-[435px] xl:max-h-[465px] object-contain select-none pointer-events-none"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*      SLIDE 2: MOBILE APPLICATION (KOMPOSISI 4-CARDS SEIMBANG)              */
/* -------------------------------------------------------------------------- */

function Slide2MobileVisual() {
  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[450px] lg:max-w-[470px] mx-auto select-none pt-2 sm:pt-4 px-1">
      {/* Geometris Stage Backdrop */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
      >
        <svg
          viewBox="0 0 540 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
        >
          <circle cx="310" cy="165" r="155" fill="#0EB8D8" />
          <rect x="75" y="100" width="105" height="260" rx="52" fill="#1482C2" />
          <path d="M 125 440 A 145 145 0 0 1 415 440 Z" fill="#233876" />
        </svg>
      </div>

      {/* CARD 1: Kiri Atas - App Store & Google Play */}
      <div className="absolute top-2 left-2 sm:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="flex items-center gap-1.5 shrink-0">
          <GooglePlayLogo />
          <AppStoreLogo />
        </div>
        <div className="border-l border-slate-200 pl-2">
          <span className="block text-[11px] font-bold text-[#233876] leading-none">Play & App Store</span>
          <span className="block text-[9px] font-medium text-emerald-600 mt-0.5">100% Lolos Kurasi</span>
        </div>
      </div>

      {/* CARD 2: Kiri Bawah - Offline-First Sync */}
      <div className="absolute bottom-6 left-2 sm:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0">
          <CheckCircle2 className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">Offline-First Sync</span>
          <span className="block text-[9px] font-medium text-slate-500 mt-0.5">Tetap Jalan Tanpa Sinyal</span>
        </div>
      </div>

      {/* CARD 3: Kanan Atas/Tengah - 60 FPS Native */}
      <div className="absolute top-18 sm:top-22 right-2 sm:right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <Gauge className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">60 FPS Native</span>
          <span className="block text-[9px] font-medium text-slate-500 mt-0.5">Ultra-Smooth & Irit Baterai</span>
        </div>
      </div>

      {/* CARD 4: Kanan Bawah - Notifikasi Real-Time */}
      <div className="absolute bottom-3 right-2 sm:right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0">
          <Layers className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">Notifikasi Real-Time</span>
          <span className="block text-[9px] font-medium text-emerald-600 mt-0.5">Push Notification Kilat</span>
        </div>
      </div>

      {/* Model Karakter Wanita Smartphone */}
      <div
        className="relative z-10 mx-auto flex items-end justify-center h-[330px] sm:h-[385px] lg:h-[435px] xl:h-[465px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/model-female-cutout.png"
          alt="Product Specialist Aplikasi Mobile Android iOS Bahari Tech Solution"
          width={637}
          height={1140}
          priority
          quality={95}
          className="block w-auto h-full max-h-[330px] sm:max-h-[385px] lg:max-h-[435px] xl:max-h-[465px] object-contain select-none pointer-events-none"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*      SLIDE 3: CLOUD DEVOPS & SECURITY (KOMPOSISI 4-CARDS SEIMBANG)         */
/* -------------------------------------------------------------------------- */

function Slide3CloudVisual() {
  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[450px] lg:max-w-[470px] mx-auto select-none pt-2 sm:pt-4 px-1">
      {/* Geometris Stage Backdrop */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
      >
        <svg
          viewBox="0 0 540 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
        >
          <circle cx="350" cy="165" r="150" fill="#1482C2" />
          <rect x="80" y="90" width="105" height="260" rx="52" fill="#0EB8D8" />
          <path d="M 125 440 A 145 145 0 0 1 415 440 Z" fill="#233876" />
        </svg>
      </div>

      {/* CARD 1: Kiri Atas - 99.98% SLA Uptime */}
      <div className="absolute top-2 left-2 sm:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <CloudServerLogo />
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">99.98% SLA Uptime</span>
          <span className="block text-[9px] font-medium text-emerald-600 mt-0.5">High Availability Failover</span>
        </div>
      </div>

      {/* CARD 2: Kiri Bawah - Enkripsi AES-256 */}
      <div className="absolute bottom-6 left-2 sm:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <ShieldCheck className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">Enkripsi AES-256</span>
          <span className="block text-[9px] font-medium text-slate-500 mt-0.5">Proteksi Data Berlapis</span>
        </div>
      </div>

      {/* CARD 3: Kanan Atas/Tengah - AWS & Google Cloud */}
      <div className="absolute top-18 sm:top-22 right-2 sm:right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0">
          <Layers className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">AWS &amp; Google Cloud</span>
          <span className="block text-[9px] font-medium text-slate-500 mt-0.5">Infrastruktur Skalabel 24/7</span>
        </div>
      </div>

      {/* CARD 4: Kanan Bawah - Audit OWASP Top 10 */}
      <div className="absolute bottom-3 right-2 sm:right-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-3 py-2 shadow-md flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <ShieldCheck className="h-3.5 w-3.5" />
        </div>
        <div>
          <span className="block text-[11px] font-bold text-[#233876] leading-none">Audit OWASP Top 10</span>
          <span className="block text-[9px] font-medium text-slate-500 mt-0.5">Anti-DDoS &amp; Enkripsi AES</span>
        </div>
      </div>

      {/* Model Karakter Pria Lead Thumbs Up */}
      <div
        className="relative z-10 mx-auto flex items-end justify-center h-[330px] sm:h-[385px] lg:h-[435px] xl:h-[465px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/model-lead-cutout.png"
          alt="Lead Cloud DevOps dan Cybersecurity Bahari Tech Solution"
          width={850}
          height={1100}
          priority
          quality={95}
          className="block w-auto h-full max-h-[330px] sm:max-h-[385px] lg:max-h-[435px] xl:max-h-[465px] object-contain select-none pointer-events-none"
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                       MAIN HERO BANNER VISUAL EXPORT                       */
/* -------------------------------------------------------------------------- */

interface HeroBannerVisualProps {
  visualType: "mobile" | "enterprise" | "web" | "cloud";
  slideIndex?: number;
}

export function HeroBannerVisual({ visualType }: HeroBannerVisualProps) {
  switch (visualType) {
    case "mobile":
      return <Slide2MobileVisual />;
    case "enterprise":
      return <Slide1EnterpriseVisual />;
    case "web":
      return <Slide0WebVisual />;
    case "cloud":
      return <Slide3CloudVisual />;
    default:
      return <Slide0WebVisual />;
  }
}
