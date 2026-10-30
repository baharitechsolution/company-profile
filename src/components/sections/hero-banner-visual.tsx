"use client";

import * as React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Star,
  Gauge,
  Layers,
  TrendingUp,
  Globe,
  Bell,
  Lock,
  FileSpreadsheet,
  Cpu,
  CheckCircle2,
  Zap,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                 REAL RECOGNIZABLE BRAND & SYSTEM VECTOR SVGS               */
/* -------------------------------------------------------------------------- */

function GoogleLogoG({ className = "h-3.5 w-3.5 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-label="Google">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

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

function QrisBadge({ className = "h-4.5 w-auto shrink-0" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-1 bg-[#EE2737] text-white px-1.5 py-0.5 rounded font-black text-[8px] tracking-wider leading-none select-none ${className}`}
    >
      <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm9-2h3v3h-3v-3zm4 0h3v3h-3v-3zm-4 4h3v3h-3v-3zm4 0h3v3h-3v-3z" />
      </svg>
      <span>QRIS</span>
    </div>
  );
}

function NextjsLogo({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" aria-label="Next.js">
      <circle cx="90" cy="90" r="90" fill="#000" />
      <path
        d="M149.5 163.5L78.6 70.8V146H63.6V34H78.6L149.5 127.2V34H164.5V163.5H149.5Z"
        fill="white"
      />
      <rect x="115.5" y="34" width="15" height="112" fill="#FFF" />
    </svg>
  );
}

function PostgresLogo({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" aria-label="PostgreSQL">
      <path
        fill="#336791"
        d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm0 18c7.7 0 14.8 2.2 21 6.1-2.4 2-5.4 3.7-8.8 4.9-3.8-2.6-8.3-4-13.2-4-9.8 0-18.3 5.9-22 14.3-1.6 3.6-2.5 7.6-2.5 11.7 0 3.3.6 6.5 1.7 9.4-4.8 3.5-8.2 8.7-9.5 14.7-1.3 6.1-.2 12.3 2.8 17.6 3.1 5.3 8 9.3 13.9 11.2 5.9 2 12.3 1.7 18.1-.8 6.7-2.9 11.9-8.4 14.4-15.3 1.6-4.4 2.1-9.2 1.5-13.9 4.8-1.5 8.9-4.8 11.6-9.2 2.7-4.4 3.7-9.7 2.8-14.8-.9-5.1-3.6-9.7-7.7-12.8 6.3 6.6 9.8 15.3 9.8 24.5 0 9.8-4 19-11 25.8-7 6.8-16.5 10.6-26.4 10.6-8.3 0-16.3-2.7-22.9-7.7-6.5-5-10.9-12-12.3-20-1.4-7.9.3-16 4.7-22.7 4.5-6.7 11.2-11.4 18.9-13.2C54.1 23.9 58.9 22 64 22z"
      />
    </svg>
  );
}

function CloudflareLogo({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Cloudflare">
      <path
        d="M18.2 11.1c-.4-2.8-2.8-5-5.7-5-2.2 0-4.1 1.3-5.1 3.2C6.9 9.1 6.4 9 6 9c-2.8 0-5 2.2-5 5s2.2 5 5 5h12.5c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-3.8-4.4z"
        fill="#F38020"
      />
    </svg>
  );
}

function DockerLogo({ className = "h-4 w-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#2496ED" aria-label="Docker">
      <path d="M13 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm12 3h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm-3 0h2v2H1zm20.8 1.5c-.3-.2-1.3-.3-2.4.3-.2-.7-.7-1.4-1.3-1.8l-.6-.4-.4.6c-.6 1-.7 2.2-.2 3.3.4.9 1.1 1.5 2 1.8-1 .3-3 .4-4.9.4H1c-.3 1.9.4 3.8 1.9 5.1 1.9 1.6 4.6 2.3 7.8 2.3 6.8 0 11.2-3.3 12.3-8.8.1-.5.1-.9.1-1.4 0-.5-.1-1-.3-1.4z" />
    </svg>
  );
}

function FaceIdIcon({ className = "h-3.5 w-3.5 shrink-0" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1482C2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Face ID"
    >
      <path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2M9 10h.01M15 10h.01M10 15a3.5 3.5 0 0 0 4 0" />
    </svg>
  );
}

function CloudServerLogo({ className = "h-4.5 w-4.5 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Cloud Server">
      <rect width="24" height="24" rx="5" fill="#112252" />
      <path
        d="M7 16a3.5 3.5 0 0 1-.8-6.9A4.5 4.5 0 0 1 15 7.5 4 4 0 0 1 17 16H7z"
        stroke="#0EB8D8"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*      SLIDE 0 (WEB): WEB APPLICATION & ENTERPRISE PORTAL (NEXT.JS)          */
/* -------------------------------------------------------------------------- */

function SlideWebVisual() {
  return (
    <div className="relative w-full max-w-[430px] sm:max-w-[460px] lg:max-w-[480px] xl:max-w-[500px] mx-auto select-none pt-3 sm:pt-4 pb-0 px-1 sm:px-2">
      {/* 1. Geometris Stage Backdrop */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
      >
        <svg
          viewBox="0 0 540 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
        >
          <circle cx="350" cy="165" r="150" fill="#0EB8D8" />
          <rect x="80" y="90" width="105" height="260" rx="52" fill="#1482C2" />
          <path d="M 125 440 A 145 145 0 0 1 415 440 Z" fill="#112252" />
        </svg>
      </div>

      {/* 2. Google Search Snippet Card: Ranking #1 (Kiri Atas - Jauh di Atas Layar Laptop) */}
      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 lg:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] max-w-[160px] sm:max-w-[172px]">
        <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <GoogleLogoG className="h-3.5 w-3.5" />
            <span className="text-[9px] font-bold text-slate-800">Google Search</span>
          </div>
          <span className="text-[7.5px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/70">
            Rank #1
          </span>
        </div>
        <div className="text-left space-y-0.5">
          <span className="block text-[7.5px] text-emerald-600 font-mono truncate">
            https://bisnis-anda.com
          </span>
          <span className="block text-[11px] font-extrabold text-[#112252] leading-tight truncate">
            Solusi No. 1 di Google
          </span>
          <span className="block text-[7.5px] text-slate-500">
            SEO Organik Lolos Kurasi
          </span>
        </div>
      </div>

      {/* 3. Core Web Vitals Speed Gauge (Kanan Atas) */}
      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 lg:right-3 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 px-3 py-2 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] min-w-[125px] sm:min-w-[135px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-5 w-5 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0">
            <Globe className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="block text-[12px] font-black text-[#112252] leading-none">0.6 Detik</span>
            <span className="block text-[7.5px] font-bold text-slate-400 uppercase mt-0.5">Waktu Muat Kilat</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-bold text-emerald-600">Core Web Vitals</span>
          <span className="font-semibold text-slate-700">Skor 99 Hijau</span>
        </div>
      </div>

      {/* 4. Bank-Grade SSL HTTPS Pill (Kiri Tengah Atas - 45px di Atas Layar Laptop) */}
      <div className="hidden sm:flex absolute top-[22%] sm:top-[24%] left-1 sm:left-2 lg:left-3 z-20 items-center gap-1.5 bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 px-2.5 py-1 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.1)]">
        <Lock className="h-3 w-3 text-emerald-600" />
        <span className="text-[8.5px] font-bold text-slate-700">HTTPS SSL A+ Grade • Bebas Celah</span>
      </div>

      {/* 5. Payment Gateway QRIS Otomatisasi (Kanan Tengah - Sisi Lengan Kanan) */}
      <div className="absolute top-[32%] sm:top-[34%] right-0 sm:right-1 lg:right-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-2.5 sm:p-3 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] max-w-[148px] sm:max-w-[158px]">
        <div className="flex items-center gap-1.5 mb-1.5">
          <QrisBadge />
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">
            Auto-Payment
          </span>
        </div>
        <div className="text-left space-y-0.5">
          <span className="block text-[11px] font-extrabold text-[#112252] leading-tight">
            Order Masuk 24/7
          </span>
          <span className="block text-[7.5px] text-slate-500">
            QRIS &amp; Transfer Otomatis
          </span>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1.5 border-t border-slate-100 mt-1">
          <span className="text-emerald-600 font-bold">Tanpa Admin Manual</span>
        </div>
      </div>

      {/* 6. Mini Trend Chart Kenaikan Trafik +240% (Dipindah ke Kanan Bawah - Sisi Kanan 100% Bebas dari Layar Laptop!) */}
      <div className="absolute top-[56%] sm:top-[58%] right-0 sm:right-1 lg:right-2 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] min-w-[150px] sm:min-w-[165px]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">
            Trafik Calon Pembeli
          </span>
          <span className="text-[8px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
            +240% Naik
          </span>
        </div>
        <div className="py-0.5">
          <svg viewBox="0 0 120 20" className="w-full h-4 overflow-visible">
            <defs>
              <linearGradient id="webTrafficGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0,16 Q 30,14 55,9 T 90,4 T 120,2 L 120,20 L 0,20 Z" fill="url(#webTrafficGrad)" />
            <path d="M 0,16 Q 30,14 55,9 T 90,4 T 120,2" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-semibold text-slate-700">Next.js 16 SSR</span>
          <span className="text-emerald-600 font-bold">Siap Konversi</span>
        </div>
      </div>

      {/* 7. Next.js 16 Enterprise Stack Pill (Kiri Bawah - Jauh di Bawah Dasar Laptop, Samping Rok/Jas) */}
      <div className="hidden sm:flex absolute top-[82%] sm:top-[84%] left-1 sm:left-2 lg:left-3 z-20 items-center gap-2 bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 px-3 py-1.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.1)]">
        <NextjsLogo className="h-3.5 w-3.5" />
        <span className="text-[8.5px] font-bold text-slate-700">Next.js 16 SSR Enterprise Engine</span>
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
/*       SLIDE 1: ENTERPRISE ERP & CUSTOM SOFTWARE (ARSITEKTUR KUSTOM)        */
/* -------------------------------------------------------------------------- */

function Slide1EnterpriseVisual() {
  return (
    <div className="relative w-full max-w-[430px] sm:max-w-[460px] lg:max-w-[480px] xl:max-w-[500px] mx-auto select-none pt-3 sm:pt-4 pb-0 px-1 sm:px-2">
      {/* 1. Geometris Stage Backdrop */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
      >
        <svg
          viewBox="0 0 540 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
        >
          <circle cx="190" cy="165" r="150" fill="#1482C2" />
          <rect x="355" y="90" width="105" height="260" rx="52" fill="#112252" />
          <path d="M 125 440 A 145 145 0 0 1 415 440 Z" fill="#0EB8D8" />
        </svg>
      </div>

      {/* 2. 100% Hak Milik Source Code (Kiri Atas) */}
      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 lg:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] flex items-center gap-2 max-w-[168px] sm:max-w-[180px]">
        <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
        </div>
        <div>
          <span className="block text-[7.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
            Bebas Vendor Lock-In
          </span>
          <span className="block text-[11px] sm:text-[12px] font-black text-[#112252] leading-tight mt-0.5 whitespace-nowrap">
            100% Hak Milik Kode
          </span>
        </div>
      </div>

      {/* 3. Multi-Cabang Terhubung Real-Time (Kanan Atas) */}
      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 lg:right-3 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 px-3 py-2 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] min-w-[125px] sm:min-w-[135px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-5 w-5 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0">
            <Layers className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="block text-[12px] font-black text-[#112252] leading-none">10+ Cabang</span>
            <span className="block text-[7.5px] font-bold text-slate-400 uppercase mt-0.5">Stok &amp; Kas Terpusat</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="text-emerald-700 font-bold">Sinkron &lt; 0.05s</span>
          <span className="font-semibold text-slate-600">SLA 99.98%</span>
        </div>
      </div>

      {/* 4. Multi-Role Permission Pill (Kanan Tengah Atas) */}
      <div className="hidden sm:flex absolute top-[30%] sm:top-[32%] right-0 sm:right-1 lg:right-2 z-20 items-center gap-1.5 bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 px-2.5 py-1 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.1)]">
        <CheckCircle2 className="h-3 w-3 text-[#1482C2]" />
        <span className="text-[8.5px] font-bold text-slate-700">Akses Role: Kasir, Gudang, Direksi</span>
      </div>

      {/* 5. Pangkas 4.5 Jam Kerja Manual / Hari (Kiri Tengah - Siku Tangan) */}
      <div className="absolute top-[54%] sm:top-[56%] left-0 sm:left-1 lg:left-2 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] min-w-[150px] sm:min-w-[165px]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">
            Efisiensi Operasional
          </span>
          <span className="text-[8px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
            +78% Cepat
          </span>
        </div>
        <div className="text-left space-y-0.5 py-0.5">
          <span className="block text-[11px] font-extrabold text-[#112252] leading-tight">
            Pangkas 4.5 Jam / Hari
          </span>
          <span className="block text-[7.5px] text-slate-500">
            Laporan Stok &amp; Pajak Otomatis
          </span>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100 mt-1">
          <span className="font-semibold text-[#1482C2]">Zero Human Error</span>
          <span className="text-emerald-600 font-bold">100% Akurat</span>
        </div>
      </div>

      {/* 6. PostgreSQL Engine & Hemat Lisensi Ratusan Juta (Kanan Bawah) */}
      <div className="absolute top-[58%] sm:top-[60%] right-0 sm:right-1 lg:right-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-2.5 sm:p-3 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] max-w-[150px] sm:max-w-[160px]">
        <div className="flex items-center gap-1.5 mb-1.5">
          <PostgresLogo className="h-4 w-4" />
          <span className="text-[8px] font-black text-[#336791] uppercase tracking-wider">
            PostgreSQL DB
          </span>
        </div>
        <div className="text-left space-y-0.5">
          <span className="block text-[11.5px] font-black text-[#112252] leading-tight">
            Hemat Ratusan Juta
          </span>
          <span className="block text-[7.5px] text-slate-500">
            Bebas Biaya User SAP/Odoo
          </span>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1.5 border-t border-slate-100 mt-1">
          <span className="font-semibold text-emerald-600">Unlimited User</span>
          <span className="font-bold text-slate-700">Milik Anda</span>
        </div>
      </div>

      {/* 7. WhatsApp Invoice Automation Pill (Kiri Bawah) */}
      <div className="hidden sm:flex absolute top-[80%] left-1 sm:left-2 lg:left-3 z-20 items-center gap-1.5 bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 px-2.5 py-1 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.1)]">
        <FileSpreadsheet className="h-3 w-3 text-emerald-600" />
        <span className="text-[8.5px] font-bold text-slate-700">1 Klik Export Excel &amp; PDF</span>
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
          alt="Konsultan Software Kustom dan ERP Enterprise Bahari Tech Solution"
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
/*      SLIDE 2: APLIKASI MOBILE (ANDROID & IOS) - KAYA BENTUK & BENEFIT      */
/* -------------------------------------------------------------------------- */

function Slide2MobileVisual() {
  return (
    <div className="relative w-full max-w-[430px] sm:max-w-[460px] lg:max-w-[480px] xl:max-w-[500px] mx-auto select-none pt-3 sm:pt-4 pb-0 px-1 sm:px-2">
      {/* 1. Geometris Stage Backdrop */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
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
          <path d="M 125 440 A 145 145 0 0 1 415 440 Z" fill="#112252" />
        </svg>
      </div>

      {/* 2. Dual Store Official Approval Badge (Kiri Atas) */}
      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 lg:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] flex items-center gap-2 max-w-[168px] sm:max-w-[180px]">
        <div className="flex items-center gap-1.5 shrink-0">
          <GooglePlayLogo />
          <AppStoreLogo />
        </div>
        <div className="border-l border-slate-200 pl-1.5 sm:pl-2">
          <span className="block text-[7.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
            Siap Rilis Resmi
          </span>
          <span className="block text-[11px] sm:text-[12px] font-black text-[#112252] leading-tight mt-0.5 whitespace-nowrap">
            100% Lolos Kurasi
          </span>
        </div>
      </div>

      {/* 3. Rating Bintang & Download Terverifikasi (Kanan Atas) */}
      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 lg:right-3 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 px-3 py-2 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] min-w-[125px] sm:min-w-[135px]">
        <div className="flex items-center justify-between gap-1 mb-1">
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-[10.5px] font-black text-[#112252]">4.9 / 5</span>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-bold text-[#1482C2]">50k+ Pengguna</span>
          <span className="text-emerald-600 font-semibold">Ulasan Positif</span>
        </div>
      </div>

      {/* 4. Live iOS Push Notification Toast (Kanan Tengah Atas - Bentuk Unik Toast Notifikasi Penjualan) */}
      <div className="absolute top-[26%] sm:top-[28%] right-0 sm:right-1 lg:right-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.14)] max-w-[160px] sm:max-w-[172px]">
        <div className="flex items-center justify-between mb-1 pb-1 border-b border-slate-100">
          <div className="flex items-center gap-1">
            <Bell className="h-3 w-3 text-[#1482C2]" />
            <span className="text-[8px] font-extrabold text-[#112252]">Pesanan Masuk</span>
          </div>
          <span className="text-[7px] text-slate-400 font-mono">Baru saja</span>
        </div>
        <div className="text-left space-y-0.5">
          <span className="block text-[10.5px] font-black text-emerald-600 leading-tight">
            + Rp 850.000 (Lunas)
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            <QrisBadge className="scale-85 origin-left" />
            <span className="text-[7px] text-slate-500 font-medium truncate">Auto-Push Notif</span>
          </div>
        </div>
      </div>

      {/* 5. Biometric Face ID & Keamanan Kilat Pill (Kiri Tengah) */}
      <div className="hidden sm:flex absolute top-[38%] left-1 sm:left-2 lg:left-3 z-20 items-center gap-1.5 bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 px-2.5 py-1 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.1)]">
        <FaceIdIcon />
        <span className="text-[8.5px] font-bold text-slate-700">Login Face ID &amp; Biometrik</span>
      </div>

      {/* 6. Fitur Lapangan: Offline-Ready Mode (Kiri Bawah - Bawah Smartphone) */}
      <div className="absolute top-[64%] sm:top-[66%] left-0 sm:left-1 lg:left-2 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] min-w-[150px] sm:min-w-[165px]">
        <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider font-mono">
            Fitur Lapangan
          </span>
          <span className="text-[7.5px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
            Offline-Ready
          </span>
        </div>
        <div className="text-left space-y-0.5">
          <span className="block text-[10.5px] font-extrabold text-[#112252] leading-tight">
            Transaksi Tetap Jalan
          </span>
          <span className="block text-[7.5px] text-slate-500">
            Bisa Order Walau Sinyal Mati
          </span>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100 mt-1">
          <span className="font-semibold text-[#1482C2]">Auto-Sync Otomatis</span>
          <span className="text-emerald-600 font-bold">Anti-Hilang Data</span>
        </div>
      </div>

      {/* 7. Performa 60 FPS Native Ultra-Smooth Pill (Kanan Bawah) */}
      <div className="absolute top-[58%] sm:top-[60%] right-0 sm:right-1 lg:right-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-2.5 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] max-w-[145px] sm:max-w-[155px]">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="h-5 w-5 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Gauge className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="block text-[11.5px] font-black text-[#112252] leading-tight">
              60 FPS Native
            </span>
            <span className="block text-[7px] font-bold text-slate-400 uppercase">
              Bebas Lemot &bull; Irit Baterai
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="text-emerald-600 font-bold">APK Ramping 14MB</span>
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
/*      SLIDE 3: CLOUD DEVOPS & CYBERSECURITY (SERVER ANDAL & AMAN)          */
/* -------------------------------------------------------------------------- */

function Slide3CloudVisual() {
  return (
    <div className="relative w-full max-w-[430px] sm:max-w-[460px] lg:max-w-[480px] xl:max-w-[500px] mx-auto select-none pt-3 sm:pt-4 pb-0 px-1 sm:px-2">
      {/* 1. Geometris Stage Backdrop */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
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
          <path d="M 125 440 A 145 145 0 0 1 415 440 Z" fill="#112252" />
        </svg>
      </div>

      {/* 2. 99.99% SLA Uptime Server Anti-Down (Kiri Atas) */}
      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 lg:left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] flex items-center gap-2 max-w-[168px] sm:max-w-[180px]">
        <CloudServerLogo className="h-4.5 w-4.5 shrink-0" />
        <div className="border-l border-slate-200 pl-1.5 sm:pl-2">
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              Ping 22ms Normal
            </span>
          </div>
          <span className="block text-[11px] sm:text-[12px] font-black text-[#112252] leading-tight mt-0.5 whitespace-nowrap">
            99.99% SLA Uptime
          </span>
        </div>
      </div>

      {/* 3. Pangkas Biaya Server 42% (Kanan Atas) */}
      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 lg:right-3 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 px-3 py-2 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] min-w-[125px] sm:min-w-[135px]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-wider">
            Efisiensi Cloud
          </span>
          <span className="text-[7.5px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/70 font-mono">
            Hemat 42%
          </span>
        </div>
        <div className="text-[11.5px] font-black text-[#112252] leading-tight">
          Pangkas Biaya Server
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100 mt-1">
          <span className="font-semibold text-[#1482C2]">Auto-Scaling</span>
          <span className="font-semibold text-slate-700">AWS &amp; GCP</span>
        </div>
      </div>

      {/* 4. Cloudflare DDoS Protection Pill (Kanan Tengah Atas) */}
      <div className="hidden sm:flex absolute top-[28%] right-0 sm:right-1 lg:right-2 z-20 items-center gap-1.5 bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 px-2.5 py-1 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.1)]">
        <CloudflareLogo className="h-3.5 w-3.5" />
        <span className="text-[8.5px] font-bold text-slate-700">Cloudflare DDoS Active</span>
      </div>

      {/* 5. Keamanan Siber Lolos Audit OWASP (Kiri Bawah - Kolom Luas) */}
      <div className="absolute top-[60%] sm:top-[62%] left-0 sm:left-1 lg:left-2 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] min-w-[150px] sm:min-w-[165px]">
        <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider font-mono">
            Keamanan Siber
          </span>
          <span className="text-[7.5px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
            Lolos OWASP
          </span>
        </div>
        <div className="text-left space-y-0.5 py-0.5">
          <span className="block text-[11px] font-extrabold text-[#112252] leading-tight">
            Proteksi Anti-DDoS 24/7
          </span>
          <span className="block text-[7.5px] text-slate-500">
            Enkripsi Standar Perbankan
          </span>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100 mt-1">
          <span className="font-semibold text-[#0EB8D8]">Firewall Aktif</span>
          <span className="text-emerald-600 font-bold">Data Aman</span>
        </div>
      </div>

      {/* 6. Cadangan Data Auto-Backup Harian (Kanan Tengah Bawah) */}
      <div className="absolute top-[44%] sm:top-[46%] right-0 sm:right-1 lg:right-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-2.5 shadow-[0_10px_25px_-5px_rgba(17,34,82,0.12)] max-w-[145px] sm:max-w-[155px]">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="h-5 w-5 rounded-lg bg-cyan-50 text-[#0EB8D8] flex items-center justify-center shrink-0">
            <ShieldCheck className="h-3.5 w-3.5 text-[#0EB8D8]" />
          </div>
          <div>
            <span className="block text-[7px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              Cadangan Data
            </span>
            <span className="block text-[11px] font-black text-[#112252] leading-tight mt-0.5">
              Auto-Backup Harian
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-semibold text-[#0EB8D8]">Multi-Region</span>
          <span className="font-bold text-slate-700">Zero Loss</span>
        </div>
      </div>

      {/* 7. Docker & CI/CD Pipeline Pill (Kanan Bawah) */}
      <div className="hidden sm:flex absolute top-[66%] sm:top-[68%] right-0 sm:right-1 lg:right-2 z-20 items-center gap-1.5 bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 px-2.5 py-1 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.1)]">
        <DockerLogo className="h-3.5 w-3.5" />
        <span className="text-[8.5px] font-bold text-slate-700">Docker CI/CD Zero Downtime</span>
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
/*                     MAIN EXPORT: HERO BANNER VISUAL                        */
/* -------------------------------------------------------------------------- */

interface HeroBannerVisualProps {
  slideIndex?: number;
  visualType?: "mobile" | "enterprise" | "web" | "cloud";
}

export function HeroBannerVisual({ slideIndex = 0, visualType }: HeroBannerVisualProps) {
  if (visualType) {
    if (visualType === "mobile") return <Slide2MobileVisual />;
    if (visualType === "enterprise") return <Slide1EnterpriseVisual />;
    if (visualType === "web") return <SlideWebVisual />;
    if (visualType === "cloud") return <Slide3CloudVisual />;
  }

  const normalizedIndex = slideIndex % 4;

  if (normalizedIndex === 0) {
    return <Slide2MobileVisual />;
  }
  if (normalizedIndex === 1) {
    return <Slide1EnterpriseVisual />;
  }
  if (normalizedIndex === 2) {
    return <SlideWebVisual />;
  }
  return <Slide3CloudVisual />;
}
