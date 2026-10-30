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
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                        OFFICIAL BRAND SVG ICONS                            */
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

function GooglePlayLogo({ className = "h-4.5 w-4.5 shrink-0" }: { className?: string }) {
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

function AppStoreLogo({ className = "h-4.5 w-4.5 shrink-0" }: { className?: string }) {
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

function CloudServerLogo({ className = "h-5 w-5 shrink-0" }: { className?: string }) {
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

function PaymentGatewayLogo({ className = "h-6 w-6 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Payment Gateway">
      <rect width="24" height="24" rx="6" fill="#112252" />
      <path d="M6 10h12M6 14h5" stroke="#0EB8D8" strokeWidth="2" strokeLinecap="round" />
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                  SLIDE 0 (WEB): WEB APPLICATION & PORTAL                   */
/* -------------------------------------------------------------------------- */

function SlideWebVisual() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px] xl:max-w-[600px] mx-auto select-none pt-4 sm:pt-6 pb-0 px-1 sm:px-2">
      {/* 1. Geometris Stage Menopang Model */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[540px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
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

      {/* 2. KARTU SELLING: Google Search Ranking #1 (Bebas Halangan dari Kepala Model) */}
      <div className="absolute top-0 sm:top-1 lg:top-2 -left-2 sm:-left-6 lg:-left-12 xl:-left-16 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] max-w-[165px] sm:max-w-[180px]">
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <GoogleLogoG className="h-3.5 w-3.5" />
            <span className="text-[9.5px] font-bold text-slate-800">Google Search</span>
          </div>
          <span className="text-[8px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/70">
            Rank #1
          </span>
        </div>
        <div className="text-left space-y-0.5">
          <span className="block text-[8px] text-emerald-600 font-mono truncate">
            https://bisnis-anda.com
          </span>
          <span className="block text-[11px] font-extrabold text-[#112252] leading-tight truncate">
            Solusi No. 1 di Google
          </span>
          <span className="block text-[8px] text-slate-500">
            SEO Terindeks Maksimal
          </span>
        </div>
      </div>

      {/* 3. KARTU SELLING: Kecepatan Muat Sub-Detik (< 0.6 Detik) & Skor Hijau */}
      <div className="absolute top-0 sm:top-1 lg:top-2 -right-2 sm:-right-6 lg:-right-12 xl:-right-16 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] min-w-[130px] sm:min-w-[140px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center">
            <Globe className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </div>
          <div>
            <span className="block text-[12px] sm:text-[13px] font-black text-[#112252] leading-none">0.6 Detik</span>
            <span className="block text-[7.5px] sm:text-[8px] font-bold text-slate-400 uppercase mt-0.5">Waktu Muat Kilat</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-bold text-emerald-600">Core Web Vitals</span>
          <span className="font-semibold text-slate-700">Skor 99 Hijau</span>
        </div>
      </div>

      {/* 4. KARTU SELLING: Visual Chart Kenaikan Traffic & Calon Pelanggan */}
      <div className="absolute top-[66%] sm:top-[68%] lg:top-[70%] -left-3 sm:-left-8 lg:-left-14 xl:-left-18 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] min-w-[155px] sm:min-w-[170px]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] sm:text-[8.5px] font-bold text-slate-400 uppercase tracking-wider">
            Trafik Pengunjung
          </span>
          <span className="text-[8px] sm:text-[8.5px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
            +240% Naik
          </span>
        </div>
        {/* Visual Mini Trend Chart Kenaikan */}
        <div className="py-0.5">
          <svg viewBox="0 0 120 22" className="w-full h-4 sm:h-5 overflow-visible">
            <defs>
              <linearGradient id="webTrafficGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0,18 Q 30,16 55,10 T 90,5 T 120,2 L 120,22 L 0,22 Z" fill="url(#webTrafficGrad)" />
            <path d="M 0,18 Q 30,16 55,10 T 90,5 T 120,2" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-semibold text-slate-700">Next.js 16 SSR</span>
          <span className="text-emerald-600 font-bold">Siap Konversi</span>
        </div>
      </div>

      {/* 5. KARTU SELLING: Otomatisasi Pembayaran (Payment Gateway QRIS) */}
      <div className="absolute top-[48%] sm:top-[50%] lg:top-[52%] -right-3 sm:-right-8 lg:-right-14 xl:-right-18 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-2.5 sm:p-3 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] max-w-[150px] sm:max-w-[160px]">
        <div className="flex items-center gap-2 mb-1.5">
          <PaymentGatewayLogo className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />
          <div>
            <span className="block text-[7.5px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              Payment Gateway
            </span>
            <span className="block text-[11.5px] sm:text-[12px] font-black text-[#112252] leading-tight mt-0.5">
              QRIS &amp; Transfer
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1.5 border-t border-slate-100">
          <span className="font-semibold text-emerald-600">Otomatisasi 24/7</span>
          <span className="font-bold text-slate-700">Tanpa Admin</span>
        </div>
      </div>

      {/* 6. Model Arsitek Web Wanita */}
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
/*                   SLIDE 1: ENTERPRISE ERP & SOFTWARE                       */
/* -------------------------------------------------------------------------- */

function Slide1EnterpriseVisual() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px] xl:max-w-[600px] mx-auto select-none pt-4 sm:pt-6 pb-0 px-1 sm:px-2">
      {/* 1. Geometris Stage Menopang Model */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[540px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
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

      {/* 2. KARTU SELLING: 100% Hak Milik Source Code (Bebas Biaya Lisensi Bulanan) */}
      <div className="absolute top-0 sm:top-1 lg:top-2 -left-2 sm:-left-6 lg:-left-12 xl:-left-16 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] flex items-center gap-2 sm:gap-2.5 max-w-[175px] sm:max-w-[190px]">
        <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
        </div>
        <div>
          <span className="block text-[7.5px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">
            Bebas Vendor Lock-In
          </span>
          <span className="block text-[11px] sm:text-[12px] font-black text-[#112252] leading-tight mt-0.5 whitespace-nowrap">
            100% Hak Milik Kode
          </span>
        </div>
      </div>

      {/* 3. KARTU SELLING: Multi-Cabang Terhubung Real-Time */}
      <div className="absolute top-0 sm:top-1 lg:top-2 -right-2 sm:-right-6 lg:-right-12 xl:-right-16 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] min-w-[130px] sm:min-w-[140px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center">
            <Layers className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </div>
          <div>
            <span className="block text-[12px] sm:text-[13px] font-black text-[#112252] leading-none">10+ Cabang</span>
            <span className="block text-[7.5px] sm:text-[8px] font-bold text-slate-400 uppercase mt-0.5">Stok &amp; Kas Terpusat</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="text-emerald-700 font-bold">Sinkron &lt; 0.05s</span>
          <span className="font-semibold text-slate-600">SLA 99.98%</span>
        </div>
      </div>

      {/* 4. KARTU SELLING: Pangkas 4.5 Jam Kerja Manual / Hari */}
      <div className="absolute top-[66%] sm:top-[68%] lg:top-[70%] -left-3 sm:-left-8 lg:-left-14 xl:-left-18 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] min-w-[155px] sm:min-w-[170px]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] sm:text-[8.5px] font-bold text-slate-400 uppercase tracking-wider">
            Efisiensi Operasional
          </span>
          <span className="text-[8px] sm:text-[8.5px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
            +78% Cepat
          </span>
        </div>
        <div className="text-left space-y-0.5 py-0.5">
          <span className="block text-[11px] sm:text-[11.5px] font-extrabold text-[#112252] leading-tight">
            Pangkas 4.5 Jam / Hari
          </span>
          <span className="block text-[7.5px] sm:text-[8px] text-slate-500">
            Laporan Stok Otomatis
          </span>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100 mt-1">
          <span className="font-semibold text-[#1482C2]">Zero Human Error</span>
          <span className="text-emerald-600 font-bold">100% Akurat</span>
        </div>
      </div>

      {/* 5. KARTU SELLING: Hemat Biaya Lisensi Ratusan Juta */}
      <div className="absolute top-[48%] sm:top-[50%] lg:top-[52%] -right-3 sm:-right-8 lg:-right-14 xl:-right-18 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-2.5 sm:p-3 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] max-w-[150px] sm:max-w-[160px]">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-xl bg-blue-50 text-[#1482C2] flex items-center justify-center shrink-0">
            <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#1482C2]" />
          </div>
          <div>
            <span className="block text-[7.5px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              Efisiensi Anggaran
            </span>
            <span className="block text-[11.5px] sm:text-[12.5px] font-black text-[#112252] leading-tight mt-0.5">
              Hemat Ratusan Juta
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-semibold text-emerald-600">Tanpa Biaya User</span>
          <span className="font-bold text-slate-700">Milik Anda</span>
        </div>
      </div>

      {/* 6. Model Karakter Utama (Konsultan ERP) */}
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
/*                     SLIDE 2: MOBILE APPS (ANDROID & IOS)                   */
/* -------------------------------------------------------------------------- */

function Slide2MobileVisual() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px] xl:max-w-[600px] mx-auto select-none pt-4 sm:pt-6 pb-0 px-1 sm:px-2">
      {/* 1. Geometris Stage Menopang Model */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[540px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
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

      {/* 2. KARTU SELLING: Dual Store Approval (100% Siap Tayang - Posisi Jauh di Luar Kepala Model) */}
      <div className="absolute top-0 sm:top-1 lg:top-2 -left-2 sm:-left-6 lg:-left-12 xl:-left-16 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] flex items-center gap-2 sm:gap-2.5 max-w-[175px] sm:max-w-[190px]">
        <div className="flex items-center gap-1.5 shrink-0">
          <GooglePlayLogo />
          <AppStoreLogo />
        </div>
        <div className="border-l border-slate-200 pl-1.5 sm:pl-2">
          <span className="block text-[7.5px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">
            Siap Rilis Resmi
          </span>
          <span className="block text-[11px] sm:text-[12px] font-black text-[#112252] leading-tight mt-0.5 whitespace-nowrap">
            100% Lolos Kurasi
          </span>
        </div>
      </div>

      {/* 3. KARTU SELLING: Rating Tinggi 4.9 Bintang (50k+ Pengguna Ritel) */}
      <div className="absolute top-0 sm:top-1 lg:top-2 -right-2 sm:-right-6 lg:-right-12 xl:-right-16 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] min-w-[130px] sm:min-w-[140px]">
        <div className="flex items-center justify-between gap-1 mb-1">
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-[10.5px] sm:text-[11px] font-black text-[#112252]">4.9 / 5</span>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-bold text-[#1482C2]">50k+ Pengguna</span>
          <span className="text-emerald-600 font-semibold">Ulasan Positif</span>
        </div>
      </div>

      {/* 4. KARTU SELLING: Offline-First Mode (Transaksi Tetap Jalan Walau Tanpa Sinyal) */}
      <div className="absolute top-[66%] sm:top-[68%] lg:top-[70%] -left-3 sm:-left-8 lg:-left-14 xl:-left-18 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] min-w-[155px] sm:min-w-[170px]">
        <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
          <span className="text-[8px] sm:text-[8.5px] font-bold text-slate-400 uppercase tracking-wider font-mono">
            Fitur Lapangan
          </span>
          <span className="text-[7.5px] sm:text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
            Offline-Ready
          </span>
        </div>
        <div className="text-left space-y-0.5">
          <span className="block text-[10.5px] sm:text-[11px] font-extrabold text-[#112252] leading-tight">
            Transaksi Tetap Jalan
          </span>
          <span className="block text-[7.5px] sm:text-[8px] text-slate-500">
            Bisa Order Walau Sinyal Mati
          </span>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100 mt-1">
          <span className="font-semibold text-[#1482C2]">Auto-Sync Otomatis</span>
          <span className="text-emerald-600 font-bold">Anti-Hilang Data</span>
        </div>
      </div>

      {/* 5. KARTU SELLING: 60 FPS Native Ultra-Smooth Bebas Lemot */}
      <div className="absolute top-[48%] sm:top-[50%] lg:top-[52%] -right-3 sm:-right-8 lg:-right-14 xl:-right-18 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-2.5 sm:p-3 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] max-w-[150px] sm:max-w-[160px]">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Gauge className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
          </div>
          <div>
            <span className="block text-[7.5px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              Performa Aplikasi
            </span>
            <span className="block text-[11.5px] sm:text-[12.5px] font-black text-[#112252] leading-tight mt-0.5">
              60 FPS Native
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-semibold text-emerald-600">Bebas Lemot</span>
          <span className="font-bold text-slate-700">Hemat Baterai</span>
        </div>
      </div>

      {/* 6. Model Karakter Wanita Smartphone */}
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
/*                 SLIDE 3: CLOUD DEVOPS & CYBERSECURITY                      */
/* -------------------------------------------------------------------------- */

function Slide3CloudVisual() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px] xl:max-w-[600px] mx-auto select-none pt-4 sm:pt-6 pb-0 px-1 sm:px-2">
      {/* 1. Geometris Stage Menopang Model */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[540px] h-[340px] sm:h-[390px] lg:h-[440px] pointer-events-none -z-10"
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

      {/* 2. KARTU SELLING: 99.99% Uptime (Server Anti-Down - Luar Perimeter Kepala) */}
      <div className="absolute top-0 sm:top-1 lg:top-2 -left-2 sm:-left-6 lg:-left-12 xl:-left-16 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] flex items-center gap-2 sm:gap-2.5 max-w-[175px] sm:max-w-[190px]">
        <CloudServerLogo className="h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0" />
        <div className="border-l border-slate-200 pl-1.5 sm:pl-2">
          <span className="block text-[7.5px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">
            Jaminan Server Andal
          </span>
          <span className="block text-[11px] sm:text-[12px] font-black text-[#112252] leading-tight mt-0.5 whitespace-nowrap">
            99.99% SLA Uptime
          </span>
        </div>
      </div>

      {/* 3. KARTU SELLING: Pangkas Biaya Server 42% (Cost Down) */}
      <div className="absolute top-0 sm:top-1 lg:top-2 -right-2 sm:-right-6 lg:-right-12 xl:-right-16 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] min-w-[130px] sm:min-w-[140px]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[7.5px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-wider">
            Efisiensi Cloud
          </span>
          <span className="text-[7.5px] sm:text-[8px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/70 font-mono">
            Hemat 42%
          </span>
        </div>
        <div className="text-[11.5px] sm:text-[12.5px] font-black text-[#112252] leading-tight">
          Pangkas Biaya Server
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100 mt-1">
          <span className="font-semibold text-[#1482C2]">Auto-Scaling</span>
          <span className="font-semibold text-slate-700">AWS &amp; GCP</span>
        </div>
      </div>

      {/* 4. KARTU SELLING: Proteksi Anti-DDoS & Lolos Audit OWASP (Data Aman dari Hacker) */}
      <div className="absolute top-[66%] sm:top-[68%] lg:top-[70%] -left-3 sm:-left-8 lg:-left-14 xl:-left-18 z-20 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 p-2 sm:p-2.5 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] min-w-[155px] sm:min-w-[170px]">
        <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-100">
          <span className="text-[8px] sm:text-[8.5px] font-bold text-slate-400 uppercase tracking-wider font-mono">
            Keamanan Siber
          </span>
          <span className="text-[7.5px] sm:text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
            Lolos OWASP
          </span>
        </div>
        <div className="text-left space-y-0.5 py-0.5">
          <span className="block text-[11px] sm:text-[11.5px] font-extrabold text-[#112252] leading-tight">
            Proteksi Anti-DDoS 24/7
          </span>
          <span className="block text-[7.5px] sm:text-[8px] text-slate-500">
            Enkripsi Standar Perbankan
          </span>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100 mt-1">
          <span className="font-semibold text-[#0EB8D8]">Firewall Aktif</span>
          <span className="text-emerald-600 font-bold">Data Aman</span>
        </div>
      </div>

      {/* 5. KARTU SELLING: Auto-Backup Harian (Garansi Zero Data Loss) */}
      <div className="absolute top-[48%] sm:top-[50%] lg:top-[52%] -right-3 sm:-right-8 lg:-right-14 xl:-right-18 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-2.5 sm:p-3 shadow-[0_12px_28px_-6px_rgba(17,34,82,0.12)] max-w-[150px] sm:max-w-[160px]">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-xl bg-cyan-50 text-[#0EB8D8] flex items-center justify-center shrink-0">
            <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0EB8D8]" />
          </div>
          <div>
            <span className="block text-[7.5px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              Cadangan Data
            </span>
            <span className="block text-[11.5px] sm:text-[12.5px] font-black text-[#112252] leading-tight mt-0.5">
              Auto-Backup Harian
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-semibold text-[#0EB8D8]">Multi-Region</span>
          <span className="font-bold text-slate-700">Zero Loss</span>
        </div>
      </div>

      {/* 6. Model Karakter Pria Lead Thumbs Up */}
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
