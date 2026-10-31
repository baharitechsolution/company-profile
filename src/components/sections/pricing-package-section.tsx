"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function PricingPackageSection() {
  const [currency, setCurrency] = useState<"IDR" | "USD">("IDR");

  return (
    <section id="paket-harga" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-[#1482C2] uppercase mb-2">
            Estimasi Investasi &amp; Model Kerja Sama
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#233876] tracking-tight">
            Transparansi Biaya untuk Setiap Skala Kebutuhan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Skema pengerjaan terukur dengan penyerahan aset digital utuh, tanpa biaya sewa tersembunyi, dan garansi pasca rilis.
          </p>

          {/* Simple Tab Control */}
          <div className="mt-8 inline-flex rounded-lg border border-slate-200 p-1 bg-slate-50 text-xs sm:text-sm font-medium">
            <button
              onClick={() => setCurrency("IDR")}
              className={`px-5 py-2 rounded-md transition-all ${
                currency === "IDR"
                  ? "bg-[#233876] text-white shadow-xs font-semibold"
                  : "text-slate-600 hover:text-[#233876]"
              }`}
            >
              Pasar Indonesia (IDR)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-5 py-2 rounded-md transition-all ${
                currency === "USD"
                  ? "bg-[#233876] text-white shadow-xs font-semibold"
                  : "text-slate-600 hover:text-[#233876]"
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
            <div className="rounded-xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Skala Bisnis Pemula &amp; UMKM
                </span>
                <h3 className="text-lg font-bold text-[#233876]">
                  Profil Usaha &amp; Web Bisnis
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Solusi digital untuk UMKM, toko, maupun kantor layanan yang membutuhkan kehadiran online resmi agar mudah ditemukan di pencarian Google.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-100">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Estimasi Investasi</span>
                  <div className="text-2xl font-bold text-[#233876] mt-0.5">
                    Rp 1.500.000 <span className="text-xs font-normal text-slate-500">– 3.500.000</span>
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">Waktu pengerjaan: 3 – 7 hari kerja</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-semibold text-slate-700 mb-2">Cakupan pengerjaan:</p>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Domain (.com / .id) dan cloud hosting aktif 1 tahun</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Tata letak responsif untuk akses ponsel pintar dan komputer</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Integrasi tombol pesan WhatsApp dan lokasi Google Maps</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Optimasi dasar agar bisnis terindeks di mesin pencari Google</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Garansi pemeliharaan pasca rilis dan panduan operasional</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20ingin%20konsultasi%20pembuatan%20website%20profil%20usaha%20UMKM.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-[#233876] text-slate-800 hover:text-white font-semibold text-xs transition-colors"
                >
                  Konsultasi Paket Ini
                </a>
              </div>
            </div>

            {/* 2. Paket Transaksi & Operasional Toko (Accent) */}
            <div className="rounded-xl border-2 border-[#1482C2] bg-slate-50/50 p-7 flex flex-col justify-between relative shadow-xs">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#1482C2] text-white text-[10px] font-bold tracking-wider uppercase">
                Paling Sering Dipilih
              </span>

              <div>
                <span className="text-[11px] font-semibold text-[#1482C2] uppercase tracking-wider block mb-1">
                  Katalog &amp; Sistem Transaksi
                </span>
                <h3 className="text-lg font-bold text-[#233876]">
                  Aplikasi Kasir &amp; Toko Online
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Sistem inventaris produk dinamis, pencatatan transaksi kasir, kalkulasi ongkos kirim, dan otomasi penerimaan pembayaran digital.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-200">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Estimasi Investasi</span>
                  <div className="text-2xl font-bold text-[#233876] mt-0.5">
                    Rp 4.500.000 <span className="text-xs font-normal text-slate-500">– 9.500.000</span>
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">Waktu pengerjaan: 10 – 20 hari kerja</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-semibold text-slate-700 mb-2">Cakupan pengerjaan:</p>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Seluruh cakupan paket profil usaha disertakan</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Dashboard manajemen katalog produk, harga, dan stok barang</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Integrasi pembayaran otomatis (QRIS, Virtual Account, &amp; Transfer)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Kalkulasi tarif kurir ekspedisi otomatis untuk seluruh Indonesia</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Laporan rekap omzet transaksi dan cadangan data otomatis</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20ingin%20konsultasi%20sistem%20toko%20online%20/%20aplikasi%20kasir.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-lg bg-[#1482C2] hover:bg-[#0E6496] text-white font-semibold text-xs transition-colors"
                >
                  Konsultasi Paket Ini
                </a>
              </div>
            </div>

            {/* 3. Paket Enterprise & Custom */}
            <div className="rounded-xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Skala Korporasi &amp; Industri
                </span>
                <h3 className="text-lg font-bold text-[#233876]">
                  Sistem ERP &amp; Aplikasi Mobile
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Arsitektur perangkat lunak kustom, aplikasi mobile Android &amp; iOS terintegrasi, serta sinkronisasi operasional multi-cabang.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-100">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Estimasi Investasi</span>
                  <div className="text-2xl font-bold text-[#233876] mt-0.5">
                    Mulai Rp 15.000.000
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">Sesuai ruang lingkup spesifikasi teknis</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-semibold text-slate-700 mb-2">Cakupan pengerjaan:</p>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>100% hak milik source code diserahkan (tanpa biaya lisensi tahunan)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Aplikasi mobile Android &amp; iOS (Flutter / React Native)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Integrasi data antar kantor cabang dan pergudangan terpadu</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Standar keamanan kode industri dan audit celah sistem berlapis</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Kontrak kerja sama resmi (SPK), perjanjian kerahasiaan (NDA), dan faktur pajak</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20kami%20ingin%20mendiskusikan%20kebutuhan%20Sistem%20ERP%20/%20Aplikasi%20Enterprise.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-[#233876] text-slate-800 hover:text-white font-semibold text-xs transition-colors"
                >
                  Ajukan Diskusi Teknis
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
            <div className="rounded-xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Staff Augmentation
                </span>
                <h3 className="text-lg font-bold text-[#233876]">
                  Dedicated Fullstack Developer
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Directly embed senior Indonesian engineers into your sprint. Fluent English communication, high velocity, and timezone flexibility.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-100">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Standard Hourly Rate</span>
                  <div className="text-2xl font-bold text-[#233876] mt-0.5">
                    $20 – $28 <span className="text-xs font-normal text-slate-500">/ hour</span>
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">Full-time or part-time monthly arrangement</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-semibold text-slate-700 mb-2">Scope of engagement:</p>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Modern engineering stack: Next.js, React, Node.js, TypeScript, Flutter</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Daily agile standups, GitHub pull request workflows, and Jira/Slack sync</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Overlapping operational hours with US, European, or Australian timezones</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Complete intellectual property assignment and bilateral NDA compliance</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Bahari%20Tech%20Solution,%20I'm%20interested%20in%20hiring%20a%20dedicated%20offshore%20developer.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-[#233876] text-slate-800 hover:text-white font-semibold text-xs transition-colors"
                >
                  Discuss Developer Hire
                </a>
              </div>
            </div>

            {/* 2. Fixed-Scope MVP (Accent) */}
            <div className="rounded-xl border-2 border-[#1482C2] bg-slate-50/50 p-7 flex flex-col justify-between relative shadow-xs">
              <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#1482C2] text-white text-[10px] font-bold tracking-wider uppercase">
                Startup Favorite
              </span>

              <div>
                <span className="text-[11px] font-semibold text-[#1482C2] uppercase tracking-wider block mb-1">
                  Rapid Product Launch
                </span>
                <h3 className="text-lg font-bold text-[#233876]">
                  Fixed-Scope Product MVP
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Turn your product concept or wireframe into a production-grade web or mobile application in 2 to 4 weeks with predictable deliverables.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-200">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Fixed Project Scope</span>
                  <div className="text-2xl font-bold text-[#233876] mt-0.5">
                    $999 – $2,999 <span className="text-xs font-normal text-slate-500">USD</span>
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">Timeline: 2 – 4 weeks delivery guarantee</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-semibold text-slate-700 mb-2">Scope of engagement:</p>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Interactive UI/UX design paired with a production-grade fullstack codebase</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Global checkout integrations (Stripe, PayPal, or regional gateways)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Cloud deployment on AWS or Vercel with high-availability infrastructure</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>100% repository transfer and 30-day complimentary post-launch support</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Bahari%20Tech%20Solution,%20I'd%20like%20to%20discuss%20a%20Fixed-Scope%20MVP%20software%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-lg bg-[#1482C2] hover:bg-[#0E6496] text-white font-semibold text-xs transition-colors"
                >
                  Schedule Discovery Call
                </a>
              </div>
            </div>

            {/* 3. Engineering Team */}
            <div className="rounded-xl border border-slate-200 bg-white p-7 flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Long-Term Retainer
                </span>
                <h3 className="text-lg font-bold text-[#233876]">
                  Autonomous Engineering Pod
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  A self-directed technical pod comprising senior developers, software architects, and QA engineers acting as your complete remote engineering wing.
                </p>

                <div className="my-6 pt-5 pb-5 border-y border-slate-100">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Engagement Model</span>
                  <div className="text-2xl font-bold text-[#233876] mt-0.5">
                    Monthly Retainer
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">Customized to your technical roadmap</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <p className="font-semibold text-slate-700 mb-2">Scope of engagement:</p>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Continuous sprint execution, system architecture, and automated test suites</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>OWASP cybersecurity compliance and routine code vulnerability audits</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Multi-region database replication, backups, and failover design</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1482C2] font-bold">—</span>
                    <span>Commercial SLA guarantees and regular architectural consultations</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Bahari%20Tech%20Solution,%20we%20want%20to%20discuss%20an%20Offshore%20Engineering%20Pod%20retainer.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-[#233876] text-slate-800 hover:text-white font-semibold text-xs transition-colors"
                >
                  Request Technical Deck
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Minimal Footer Reassurance */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-600">
          <div>
            <strong className="text-slate-700">Prinsip Kerja Sama:</strong> Termin pembayaran bertahap sesuai progres (milestone), 100% penyerahan source code tanpa biaya royalti tahunan, dan pendampingan garansi resmi.
          </div>
          <Link
            href="/kontak"
            className="text-[#1482C2] hover:text-[#233876] font-semibold shrink-0"
          >
            Konsultasi Rencana Anggaran Biaya (RAB) →
          </Link>
        </div>

      </div>
    </section>
  );
}
