"use client";

import * as React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Star,
  Gauge,
  CheckCircle2,
  Lock,
  Layers,
  TrendingUp,
  Globe,
  Code2,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                        OFFICIAL BRAND SVG ICONS                            */
/* -------------------------------------------------------------------------- */

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

function DatabaseNodeLogo({ className = "h-5 w-5 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Database Node">
      <rect width="24" height="24" rx="5" fill="#1482C2" />
      <ellipse cx="12" cy="7" rx="5.5" ry="2.2" stroke="white" strokeWidth="1.5" />
      <path d="M6.5 7v4c0 1.2 2.46 2.2 5.5 2.2s5.5-1 5.5-2.2V7" stroke="white" strokeWidth="1.5" />
      <path d="M6.5 11v4c0 1.2 2.46 2.2 5.5 2.2s5.5-1 5.5-2.2V11" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                  SLIDE 0 (WEB): WEB APPLICATION & PORTAL                   */
/* -------------------------------------------------------------------------- */

function SlideWebVisual() {
  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] mx-auto select-none pt-6 sm:pt-8 pb-0 px-2">
      {/* 1. ELEMEN GEOMETRIS LENGKAP TANPA BOKS (MENYATU LANGSUNG DENGAN BANNER) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-[360px] pointer-events-none -z-10"
      >
        <svg
          viewBox="0 0 480 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
        >
          {/* Piringan Lingkaran Cyan di Belakang Kepala/Bahu Kanan */}
          <circle cx="310" cy="135" r="125" fill="#0EB8D8" />
          {/* Kapsul Pil Vertikal Ocean Blue di Kiri */}
          <rect x="75" y="75" width="90" height="210" rx="45" fill="#1482C2" />
          {/* Busur Geometris Dasar Navy (Disatukan Penuh Solid Lebar Menopang Model) */}
          <path d="M 110 360 A 130 130 0 0 1 370 360 Z" fill="#112252" />
        </svg>
      </div>

      {/* 2. Kapsul Core Web Vitals (Kiri Atas) */}
      <div className="absolute top-4 sm:top-5 -left-1 sm:left-1 lg:left-2 z-20 bg-white/95 backdrop-blur-xs rounded-full border border-slate-200/90 pl-2.5 pr-4 py-1.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <Gauge className="h-4 w-4 text-emerald-600" />
        </div>
        <div>
          <span className="block text-[7.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
            Core Web Vitals
          </span>
          <span className="block text-[11px] font-black text-[#112252] leading-tight mt-0.5">
            Skor 98/100 Hijau
          </span>
        </div>
      </div>

      {/* 3. Kartu Load Speed & SEO (Kanan Atas) */}
      <div className="absolute top-3 sm:top-4 -right-1 sm:right-1 lg:right-2 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 px-3 py-2 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] min-w-[135px]">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="h-5 w-5 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center">
            <Globe className="h-3 w-3" />
          </div>
          <div>
            <span className="block text-xs font-black text-[#112252] leading-none">0.6 Detik</span>
            <span className="block text-[7.5px] font-bold text-slate-400 uppercase mt-0.5">Waktu Muat</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-bold text-[#1482C2]">SEO Maksimal</span>
          <span className="font-semibold text-slate-600">Next.js SSR</span>
        </div>
      </div>

      {/* 4. Balon Notifikasi Web Lead (Kiri Bawah - Posisi Nyaman) */}
      <div className="absolute top-[66%] -left-2 sm:left-0 lg:left-1 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 p-2.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] max-w-[155px] sm:max-w-[170px]">
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">— Web Architect —</span>
          <span className="text-[7.5px] text-slate-400">10:45 WIB</span>
        </div>
        <div className="bg-[#EAF5FC] rounded-lg px-2 py-1 text-[9px] sm:text-[9.5px] font-bold text-[#112252] leading-snug">
          &ldquo;Arsitektur Web App Siap Skala Enterprise!&rdquo;
        </div>
        <div className="flex items-center gap-1 text-[7.5px] text-emerald-600 font-semibold mt-1">
          <CheckCircle2 className="h-2.5 w-2.5" /> 100% Responsif & Cepat
        </div>
      </div>

      {/* 5. Kartu Integrasi API & Pembayaran (Kanan Tengah) */}
      <div className="absolute top-[48%] -right-1 sm:right-0 lg:right-1 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 p-2.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] max-w-[145px] sm:max-w-[155px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-7 w-7 rounded-xl bg-blue-50 text-[#1482C2] flex items-center justify-center shrink-0">
            <Code2 className="h-4 w-4 text-[#1482C2]" />
          </div>
          <div>
            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              Integrasi API
            </span>
            <span className="block text-xs sm:text-[13px] font-black text-[#112252] leading-tight">
              Payment & Data
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[8px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-semibold text-[#1482C2]">REST & GraphQL</span>
          <span className="font-bold text-slate-700">Seamless</span>
        </div>
      </div>

      {/* 6. Model Arsitek Web Wanita (Pegang Laptop, Berdiri Alami Menyatu dengan Busur Geometris) */}
      <div
        className="relative z-10 mx-auto flex items-end justify-center h-[300px] sm:h-[335px] lg:h-[355px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/model-web-cutout.png"
          alt="Arsitek Web Application dan Portal Enterprise Bahari Tech Solution"
          width={768}
          height={1101}
          priority
          quality={95}
          className="block w-auto h-full max-h-[300px] sm:max-h-[335px] lg:max-h-[355px] object-contain select-none pointer-events-none"
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
    <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] mx-auto select-none pt-6 sm:pt-8 pb-0 px-2">
      {/* 1. ELEMEN GEOMETRIS LENGKAP TANPA BOKS (MENYATU LANGSUNG DENGAN BANNER) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-[360px] pointer-events-none -z-10"
      >
        <svg
          viewBox="0 0 480 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
        >
          {/* Lingkaran Ocean Blue di Kiri */}
          <circle cx="170" cy="135" r="125" fill="#1482C2" />
          {/* Kapsul Pil Vertikal Navy di Kanan */}
          <rect x="315" y="75" width="90" height="210" rx="45" fill="#112252" />
          {/* Busur Geometris Dasar Cyan (Disatukan Penuh Solid Lebar Menopang Model) */}
          <path d="M 110 360 A 130 130 0 0 1 370 360 Z" fill="#0EB8D8" />
        </svg>
      </div>

      {/* 2. Kapsul Node ERP (Kiri Atas) */}
      <div className="absolute top-4 sm:top-5 -left-1 sm:left-1 lg:left-2 z-20 bg-white/95 backdrop-blur-xs rounded-full border border-slate-200/90 pl-2.5 pr-4 py-1.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] flex items-center gap-2.5">
        <DatabaseNodeLogo />
        <div>
          <span className="block text-[7.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
            Sistem ERP Multi-Cabang
          </span>
          <span className="block text-[11px] font-black text-[#112252] leading-tight mt-0.5">
            10+ Cabang Terhubung
          </span>
        </div>
      </div>

      {/* 3. Kartu Transaksi ERP (Kanan Atas) */}
      <div className="absolute top-3 sm:top-4 -right-1 sm:right-1 lg:right-2 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 px-3 py-2 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] min-w-[135px]">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="h-5 w-5 rounded-lg bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center">
            <Layers className="h-3 w-3" />
          </div>
          <div>
            <span className="block text-xs font-black text-[#112252] leading-none">100k+</span>
            <span className="block text-[7.5px] font-bold text-slate-400 uppercase mt-0.5">Trx / Hari</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="text-emerald-700 font-bold">
            Sinkron Real-Time
          </span>
          <span className="font-semibold text-slate-600">SLA 99.98%</span>
        </div>
      </div>

      {/* 4. Balon Chat Arsitek (Kiri Bawah - Posisi Nyaman) */}
      <div className="absolute top-[66%] -left-2 sm:left-0 lg:left-1 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 p-2.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] max-w-[155px] sm:max-w-[170px]">
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">— Arsitek Sistem —</span>
          <span className="text-[7.5px] text-slate-400">09:15 WIB</span>
        </div>
        <div className="bg-[#EAF5FC] rounded-lg px-2 py-1 text-[9px] sm:text-[9.5px] font-bold text-[#112252] leading-snug">
          &ldquo;Modul ERP Multi-Cabang Siap Live & Sinkron!&rdquo;
        </div>
        <div className="flex items-center gap-1 text-[7.5px] text-[#1482C2] font-semibold mt-1">
          <CheckCircle2 className="h-2.5 w-2.5" /> Arsitektur Terverifikasi
        </div>
      </div>

      {/* 5. Kartu Efisiensi Alur Kerja (Kanan Tengah) */}
      <div className="absolute top-[48%] -right-1 sm:right-0 lg:right-1 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 p-2.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] max-w-[145px] sm:max-w-[155px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-7 w-7 rounded-xl bg-blue-50 text-[#1482C2] flex items-center justify-center shrink-0">
            <TrendingUp className="h-4 w-4 text-[#1482C2]" />
          </div>
          <div>
            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              Alur Otomatis
            </span>
            <span className="block text-xs sm:text-[13px] font-black text-[#112252] leading-tight">
              Hemat 4.5 Jam
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[8px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-semibold text-[#1482C2]">Efisiensi Alur</span>
          <span className="font-bold text-slate-700">+78%</span>
        </div>
      </div>

      {/* 6. Model Karakter Utama (Konsultan ERP) */}
      <div
        className="relative z-10 mx-auto flex items-end justify-center h-[300px] sm:h-[335px] lg:h-[355px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/tech-model-cutout.png"
          alt="Konsultan Software Kustom dan ERP Enterprise Bahari Tech Solution"
          width={850}
          height={1100}
          priority
          quality={95}
          className="block w-auto h-full max-h-[300px] sm:max-h-[335px] lg:max-h-[355px] object-contain select-none pointer-events-none"
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
    <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] mx-auto select-none pt-6 sm:pt-8 pb-0 px-2">
      {/* 1. ELEMEN GEOMETRIS LENGKAP TANPA BOKS (MENYATU LANGSUNG DENGAN BANNER) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-[360px] pointer-events-none -z-10"
      >
        <svg
          viewBox="0 0 480 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
        >
          {/* Lingkaran Cyan Besar di Tengah/Kanan */}
          <circle cx="270" cy="135" r="130" fill="#0EB8D8" />
          {/* Kapsul Pil Vertikal Ocean Blue di Kiri */}
          <rect x="65" y="85" width="90" height="210" rx="45" fill="#1482C2" />
          {/* Busur Geometris Dasar Navy (Disatukan Penuh Solid Lebar Menopang Model) */}
          <path d="M 115 360 A 125 125 0 0 1 365 360 Z" fill="#112252" />
        </svg>
      </div>

      {/* 2. DUAL STORE LOGO PILL (Kiri Atas) */}
      <div className="absolute top-4 sm:top-5 -left-1 sm:left-1 lg:left-2 z-20 bg-white/95 backdrop-blur-xs rounded-full border border-slate-200/90 pl-2.5 pr-4 py-1.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] flex items-center gap-2.5">
        <div className="flex items-center gap-1.5">
          <GooglePlayLogo />
          <AppStoreLogo />
        </div>
        <div className="border-l border-slate-200 pl-2">
          <span className="block text-[7.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
            Rilis Store Resmi
          </span>
          <span className="block text-[11px] font-black text-[#112252] leading-tight mt-0.5">
            Play Store & App Store
          </span>
        </div>
      </div>

      {/* 3. Rating & Ulasan Resmi (Kanan Atas) */}
      <div className="absolute top-3 sm:top-4 -right-1 sm:right-1 lg:right-2 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 px-3 py-2 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] min-w-[135px]">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-2.5 w-2.5 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-[10px] font-black text-[#112252]">4.9 / 5</span>
        </div>
        <div className="flex items-center justify-between text-[8px] text-slate-500 pt-0.5 border-t border-slate-100">
          <span className="font-bold text-[#1482C2]">50k+ Download</span>
          <span>2.8k Ulasan</span>
        </div>
      </div>

      {/* 4. Notifikasi Mobile App Store (Kiri Bawah - Posisi Nyaman) */}
      <div className="absolute top-[66%] -left-2 sm:left-0 lg:left-1 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 p-2.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] max-w-[155px] sm:max-w-[170px]">
        <div className="flex items-center justify-between gap-1 mb-1">
          <div className="flex items-center gap-1.5">
            <AppStoreLogo className="h-3.5 w-3.5" />
            <span className="text-[8.5px] font-bold text-[#112252]">Store Approval</span>
          </div>
          <span className="text-[7.5px] text-slate-400">Baru saja</span>
        </div>
        <div className="bg-[#EAF5FC] rounded-lg px-2 py-1 text-[9px] sm:text-[9.5px] font-bold text-[#112252] leading-snug">
          &ldquo;Aplikasi Sukses Terverifikasi & Live di Store!&rdquo;
        </div>
        <div className="flex items-center gap-1 text-[7.5px] text-emerald-600 font-semibold mt-1">
          <CheckCircle2 className="h-2.5 w-2.5" /> Siap Digunakan Pengguna
        </div>
      </div>

      {/* 5. PERFORMA 60 FPS (Kanan Tengah) */}
      <div className="absolute top-[48%] -right-1 sm:right-0 lg:right-1 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 p-2.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] max-w-[145px] sm:max-w-[155px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-7 w-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Gauge className="h-4 w-4 text-emerald-600" />
          </div>
          <div>
            <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none">
              Performa Aplikasi
            </span>
            <span className="block text-xs sm:text-[13px] font-black text-[#112252] leading-tight">
              60 FPS Native
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[8px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-semibold text-emerald-600">Ultra-Smooth</span>
          <span>Zero Lag</span>
        </div>
      </div>

      {/* 6. Model Karakter Wanita Smartphone */}
      <div
        className="relative z-10 mx-auto flex items-end justify-center h-[300px] sm:h-[335px] lg:h-[355px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/model-female-cutout.png"
          alt="Product Specialist Aplikasi Mobile Android iOS Bahari Tech Solution"
          width={637}
          height={1140}
          priority
          quality={95}
          className="block w-auto h-full max-h-[300px] sm:max-h-[335px] lg:max-h-[355px] object-contain select-none pointer-events-none"
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
    <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] mx-auto select-none pt-6 sm:pt-8 pb-0 px-2">
      {/* 1. ELEMEN GEOMETRIS LENGKAP TANPA BOKS (MENYATU LANGSUNG DENGAN BANNER) */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] h-[360px] pointer-events-none -z-10"
      >
        <svg
          viewBox="0 0 480 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
          className="w-full h-full"
        >
          {/* Lingkaran Ocean Blue di Kanan */}
          <circle cx="310" cy="135" r="125" fill="#1482C2" />
          {/* Kapsul Pil Vertikal Cyan di Kiri */}
          <rect x="75" y="75" width="90" height="210" rx="45" fill="#0EB8D8" />
          {/* Busur Geometris Dasar Navy (Disatukan Penuh Solid Lebar Menopang Model) */}
          <path d="M 110 360 A 130 130 0 0 1 370 360 Z" fill="#112252" />
        </svg>
      </div>

      {/* 2. Kapsul Audit Keamanan OWASP (Kiri Atas) */}
      <div className="absolute top-4 sm:top-5 -left-1 sm:left-1 lg:left-2 z-20 bg-white/95 backdrop-blur-xs rounded-full border border-slate-200/90 pl-2.5 pr-4 py-1.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] flex items-center gap-2.5">
        <div className="h-6 w-6 rounded-full bg-cyan-50 text-[#0EB8D8] flex items-center justify-center shrink-0">
          <ShieldCheck className="h-4 w-4 text-[#0EB8D8]" />
        </div>
        <div>
          <span className="block text-[7.5px] font-bold text-slate-400 uppercase tracking-wider leading-none">
            Audit Keamanan OWASP
          </span>
          <span className="block text-[11px] font-black text-[#112252] leading-tight mt-0.5">
            Skor 100/100 Lolos
          </span>
        </div>
      </div>

      {/* 3. Kartu SLA Cloud Server Uptime (Kanan Atas) */}
      <div className="absolute top-3 sm:top-4 -right-1 sm:right-1 lg:right-2 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 px-3 py-2 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] min-w-[135px]">
        <div className="flex items-center gap-1.5 mb-1">
          <CloudServerLogo />
          <div>
            <span className="block text-xs font-black text-[#112252] leading-none">99.99%</span>
            <span className="block text-[7.5px] font-bold text-slate-400 uppercase mt-0.5">SLA Uptime Cloud</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="font-bold text-[#0EB8D8]">Zero Downtime</span>
          <span className="font-semibold text-slate-600">AWS & GCP</span>
        </div>
      </div>

      {/* 4. Balon Notifikasi DevOps (Kiri Bawah - Posisi Nyaman) */}
      <div className="absolute top-[66%] -left-2 sm:left-0 lg:left-1 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 p-2.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] max-w-[155px] sm:max-w-[170px]">
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">— DevOps Lead —</span>
          <span className="text-[7.5px] text-slate-400">00:00 WIB</span>
        </div>
        <div className="bg-[#EAF5FC] rounded-lg px-2 py-1 text-[9px] sm:text-[9.5px] font-bold text-[#112252] leading-snug">
          &ldquo;Auto-Backup Harian & SSL 256-Bit Aktif!&rdquo;
        </div>
        <div className="flex items-center gap-1 text-[7.5px] text-emerald-600 font-semibold mt-1">
          <Lock className="h-2.5 w-2.5" /> Proteksi Siber 24/7
        </div>
      </div>

      {/* 5. Kartu Penghematan Biaya Cloud (Kanan Tengah) */}
      <div className="absolute top-[48%] -right-1 sm:right-0 lg:right-1 z-20 bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/90 p-2.5 shadow-[0_8px_20px_-4px_rgba(17,34,82,0.08)] max-w-[145px] sm:max-w-[155px]">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Biaya Server</span>
          <span className="text-[8px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full">
            Hemat 42%
          </span>
        </div>
        <div className="text-xs sm:text-[13px] font-black text-[#112252]">
          Optimasi Cloud
        </div>
        <div className="flex items-center justify-between text-[8px] text-slate-500 pt-1 border-t border-slate-100 mt-1">
          <span className="font-semibold text-[#0EB8D8]">Resource Ringan</span>
          <span>Anti-DDoS</span>
        </div>
      </div>

      {/* 6. Model Karakter Pria Lead Thumbs Up */}
      <div
        className="relative z-10 mx-auto flex items-end justify-center h-[300px] sm:h-[335px] lg:h-[355px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/model-lead-cutout.png"
          alt="Lead Cloud DevOps dan Cybersecurity Bahari Tech Solution"
          width={850}
          height={1100}
          priority
          quality={95}
          className="block w-auto h-full max-h-[300px] sm:max-h-[335px] lg:max-h-[355px] object-contain select-none pointer-events-none"
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
