"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function PricingPackageSection() {
  const [currency, setCurrency] = useState<"IDR" | "USD">("IDR");

  return (
    <section id="paket-harga" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header - Ringan, Bersih, dan Humanis */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-medium tracking-wider text-sky-600 uppercase mb-2">
            Model Kerja Sama &amp; Estimasi Investasi
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
            Transparansi Biaya dengan Standar Rekayasa Industri
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Metodologi pengembangan terstruktur dengan tahapan analisis, desain UI/UX, audit keamanan, dan jaminan kepemilikan penuh atas seluruh source code.
          </p>

          {/* Segmented Control - Modern & Ringan (Bukan Blok Biru Pekat) */}
          <div className="mt-8 inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200/80 text-xs sm:text-sm font-medium">
            <button
              type="button"
              onClick={() => setCurrency("IDR")}
              className={`px-5 py-2 rounded-lg transition-all cursor-pointer ${
                currency === "IDR"
                  ? "bg-white text-slate-900 shadow-xs font-semibold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Pasar Indonesia (IDR)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`px-5 py-2 rounded-lg transition-all cursor-pointer ${
                currency === "USD"
                  ? "bg-white text-slate-900 shadow-xs font-semibold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Offshore &amp; Global (USD)
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TAB 1: PASAR INDONESIA (IDR)                             */}
        {/* ======================================================== */}
        {currency === "IDR" && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* 1. Paket UMKM & Profil Bisnis */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-xs">
              <div>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mb-1.5">
                  Skala Bisnis &amp; UMKM
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  Website Profil Usaha Profesional
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  Representasi digital kredibel untuk UMKM, toko, maupun kantor layanan agar resmi terindeks di mesin pencari Google dan terhubung langsung ke WhatsApp.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-100">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Estimasi Investasi</span>
                  <div className="text-2xl font-semibold text-slate-900 tracking-tight mt-0.5">
                    Rp 750.000 <span className="text-xs font-normal text-slate-500">– 1.500.000</span>
                  </div>
                  <span className="text-xs text-slate-500 font-normal mt-1.5 block">Waktu pengerjaan: 2 – 3 minggu</span>
                  <span className="inline-flex items-center text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-md px-2 py-0.5 mt-2">
                    Penawaran kemitraan rilis perdana
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-medium text-slate-700 mb-2">Tahapan &amp; cakupan pengerjaan:</p>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Domain web resmi (.com / .my.id) dan cloud hosting aktif 1 tahun</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Desain adaptif berkecepatan tinggi untuk ponsel dan komputer</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Integrasi tombol pesanan WhatsApp dan titik lokasi Google Maps</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Konfigurasi indeks Google Search Console dan SEO pencarian lokal</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Garansi pemeliharaan teknis pasca rilis dan panduan operasional mandiri</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20ingin%20konsultasi%20Paket%20Website%20Profil%20Usaha%20Profesional.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 font-medium text-xs sm:text-[13px] transition-colors"
                >
                  Konsultasi Paket Ini
                </a>
              </div>
            </div>

            {/* 2. Paket Transaksi & Operasional Toko (Featured) */}
            <div className="rounded-2xl border border-sky-300 bg-gradient-to-b from-sky-50/30 via-white to-white p-7 flex flex-col justify-between relative shadow-sm ring-1 ring-sky-100">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-medium tracking-wider uppercase shadow-2xs">
                Paling Sering Dipilih
              </span>

              <div>
                <span className="text-[11px] font-medium text-sky-600 uppercase tracking-wider block mb-1.5">
                  Katalog &amp; Sistem Transaksi
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  Aplikasi Kasir &amp; Toko Online
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  Arsitektur transaksi terpadu: katalog inventaris produk dinamis, pencatatan kasir (POS), kalkulasi ongkos kirim kurir, dan pembayaran digital otomatis.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-200/80">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Estimasi Investasi</span>
                  <div className="text-2xl font-semibold text-slate-900 tracking-tight mt-0.5">
                    Rp 2.500.000 <span className="text-xs font-normal text-slate-500">– 5.500.000</span>
                  </div>
                  <span className="text-xs text-slate-500 font-normal mt-1.5 block">Waktu pengerjaan: 4 – 6 minggu</span>
                  <span className="inline-flex items-center text-[11px] font-medium text-sky-700 bg-sky-50 border border-sky-200/60 rounded-md px-2 py-0.5 mt-2">
                    Termasuk simulasi pengujian transaksi
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-medium text-slate-700 mb-2">Tahapan &amp; cakupan pengerjaan:</p>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Seluruh cakupan paket profil usaha disertakan</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Dashboard manajemen katalog produk, varian harga, dan stok barang</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Integrasi gerbang pembayaran resmi (QRIS, Virtual Account, Transfer Bank)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Kalkulasi tarif ekspedisi otomatis untuk seluruh kota di Indonesia</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Laporan ringkasan omzet berkala dan cadangan data database harian</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20ingin%20konsultasi%20sistem%20toko%20online%20/%20aplikasi%20kasir.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-[13px] transition-colors shadow-xs"
                >
                  Konsultasi Paket Ini
                </a>
              </div>
            </div>

            {/* 3. Paket Enterprise & Custom */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-xs">
              <div>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mb-1.5">
                  Skala Korporasi &amp; Industri
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  Sistem ERP &amp; Aplikasi Mobile
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  Pengembangan perangkat lunak kustom berskala penuh, aplikasi mobile iOS &amp; Android (Flutter / React Native), dan sinkronisasi operasional multi-cabang.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-100">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Model Anggaran</span>
                  <div className="text-2xl font-semibold text-slate-900 tracking-tight mt-0.5">
                    Mulai Rp 8.000.000
                  </div>
                  <span className="text-xs text-slate-500 font-normal mt-1.5 block">Waktu pengerjaan: 2 – 4 bulan (Agile Sprint)</span>
                  <span className="inline-flex items-center text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 rounded-md px-2 py-0.5 mt-2">
                    RAB transparan sesuai spesifikasi teknis
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-medium text-slate-700 mb-2">Tahapan &amp; cakupan pengerjaan:</p>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>100% hak milik source code diserahkan (tanpa biaya lisensi tahunan)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Aplikasi mobile Android &amp; iOS (Flutter / React Native)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Integrasi data terpusat antar kantor cabang dan pergudangan</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Audit celah keamanan sistem dan enkripsi data sesuai standar industri</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Kontrak kerja sama resmi (SPK), perjanjian kerahasiaan (NDA), dan faktur pajak</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20kami%20ingin%20mendiskusikan%20kebutuhan%20Sistem%20ERP%20/%20Aplikasi%20Enterprise.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 font-medium text-xs sm:text-[13px] transition-colors"
                >
                  Ajukan Diskusi RAB
                </a>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: OFFSHORE & GLOBAL (USD)                           */}
        {/* ======================================================== */}
        {currency === "USD" && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* 1. Dedicated Developer */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-xs">
              <div>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mb-1.5">
                  Staff Augmentation
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  Dedicated Fullstack Developer
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  Embed dedicated senior Indonesian developers directly into your sprint cycle. High velocity, clean code standards, and fluent English sync.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-100">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Standard Hourly Rate</span>
                  <div className="text-2xl font-semibold text-slate-900 tracking-tight mt-0.5">
                    $18 – $25 <span className="text-xs font-normal text-slate-500">/ hour</span>
                  </div>
                  <span className="text-xs text-slate-500 font-normal mt-1.5 block">Monthly engagement model</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-medium text-slate-700 mb-2">Scope of engagement:</p>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Modern engineering stack: Next.js, React, Node.js, TypeScript, Flutter</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Daily agile standups, GitHub pull requests, and Slack/Jira coordination</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Overlapping working hours with US, European, or Australian timezones</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Complete intellectual property assignment and bilateral NDA compliance</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Bahari%20Tech%20Solution,%20I'm%20interested%20in%20hiring%20a%20dedicated%20offshore%20developer.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 font-medium text-xs sm:text-[13px] transition-colors"
                >
                  Discuss Developer Hire
                </a>
              </div>
            </div>

            {/* 2. Fixed-Scope MVP (Featured) */}
            <div className="rounded-2xl border border-sky-300 bg-gradient-to-b from-sky-50/30 via-white to-white p-7 flex flex-col justify-between relative shadow-sm ring-1 ring-sky-100">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-medium tracking-wider uppercase shadow-2xs">
                Startup Favorite
              </span>

              <div>
                <span className="text-[11px] font-medium text-sky-600 uppercase tracking-wider block mb-1.5">
                  Rapid Product Launch
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  Fixed-Scope Product MVP
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  Turn your product concept or wireframe into a production-grade web or mobile application with clearly defined deliverables and milestones.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-200/80">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Fixed Project Scope</span>
                  <div className="text-2xl font-semibold text-slate-900 tracking-tight mt-0.5">
                    $799 – $1,999 <span className="text-xs font-normal text-slate-500">USD</span>
                  </div>
                  <span className="text-xs text-slate-500 font-normal mt-1.5 block">Timeline: 4 – 6 weeks structured delivery</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-medium text-slate-700 mb-2">Scope of engagement:</p>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Interactive UI/UX design paired with a production-grade fullstack codebase</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Global checkout integrations (Stripe, PayPal, or regional gateways)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Cloud deployment on AWS or Vercel with high-availability infrastructure</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>100% repository transfer and 30-day complimentary post-launch support</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Bahari%20Tech%20Solution,%20I'd%20like%20to%20discuss%20a%20Fixed-Scope%20MVP%20software%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-[13px] transition-colors shadow-xs"
                >
                  Schedule Discovery Call
                </a>
              </div>
            </div>

            {/* 3. Engineering Team */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-xs">
              <div>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mb-1.5">
                  Long-Term Retainer
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  Autonomous Engineering Pod
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  A self-directed technical pod comprising senior developers, software architects, and QA engineers acting as your complete remote engineering wing.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-100">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Engagement Model</span>
                  <div className="text-2xl font-semibold text-slate-900 tracking-tight mt-0.5">
                    Monthly Retainer
                  </div>
                  <span className="text-xs text-slate-500 font-normal mt-1.5 block">Sprint cycles: 2 – 4 months roadmap</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-medium text-slate-700 mb-2">Scope of engagement:</p>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Continuous sprint execution, system architecture, and automated test suites</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>OWASP cybersecurity compliance and routine code vulnerability audits</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Multi-region database replication, backups, and failover design</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>Commercial SLA guarantees and regular architectural consultations</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Bahari%20Tech%20Solution,%20we%20want%20to%20discuss%20an%20Offshore%20Engineering%20Pod%20retainer.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 font-medium text-xs sm:text-[13px] transition-colors"
                >
                  Request Technical Deck
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Minimal Footer Reassurance */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          <div>
            <strong className="text-slate-700 font-medium">Jaminan Keamanan Kemitraan:</strong> Konsultasi awal 100% gratis, skema pembayaran bertahap (DP aman &amp; pelunasan setelah disetujui), serta 100% penyerahan hak milik source code tanpa biaya lisensi tersembunyi.
          </div>
          <Link
            href="/kontak"
            className="text-sky-600 hover:text-sky-700 font-medium shrink-0"
          >
            Konsultasi Rencana Anggaran Biaya (RAB) →
          </Link>
        </div>

      </div>
    </section>
  );
}
