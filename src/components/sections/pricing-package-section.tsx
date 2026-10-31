"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Building2, Store, Laptop, Globe2, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function PricingPackageSection() {
  const [currency, setCurrency] = useState<"IDR" | "USD">("IDR");

  return (
    <section id="paket-harga" className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/90 select-none overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#1482C2] text-xs font-bold tracking-wider uppercase mb-3 border border-[#1482C2]/20">
              <Sparkles className="w-3.5 h-3.5" />
              Transparansi Biaya &amp; Estimasi Investasi
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#233876] tracking-tight leading-tight">
              Pilihan Solusi Cerdas yang Ramah Anggaran, Bergaransi, &amp; Siap Pakai
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Mulai dari pelaku UMKM dan pemilik toko yang butuh website murah berkualitas, hingga sistem enterprise kustom dan mitra offshore internasional.
            </p>
          </ScrollReveal>

          {/* Currency / Target Switcher */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200/80 shadow-inner">
            <button
              onClick={() => setCurrency("IDR")}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${
                currency === "IDR"
                  ? "bg-[#233876] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#233876]"
              }`}
            >
              <span>🇮🇩</span>
              <span>Pasar Indonesia (Rupiah)</span>
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${
                currency === "USD"
                  ? "bg-[#233876] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#233876]"
              }`}
            >
              <span>🌍</span>
              <span>Global &amp; Offshore (USD)</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TIER CARDS: PASAR INDONESIA (IDR)                        */}
        {/* ======================================================== */}
        {currency === "IDR" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* 1. Paket UMKM & Starter */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:border-[#1482C2] hover:shadow-md transition-all flex flex-col justify-between relative group">
              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold tracking-wide uppercase mb-3">
                  <Store className="w-3 h-3" />
                  Favorit UMKM &amp; Bisnis Baru
                </div>
                <h3 className="text-xl font-bold text-[#233876] group-hover:text-[#1482C2] transition-colors">
                  UMKM &amp; Starter Profile
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Solusi cepat untuk profil usaha, toko, jasa servis, dan UMKM yang ingin resmi tampil di Google &amp; kebanjiran order WhatsApp.
                </p>

                <div className="my-5 pb-5 border-b border-slate-100">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Investasi Mulai</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#233876] mt-0.5">
                    Rp 1,5 Jt <span className="text-xs text-slate-500 font-normal">s/d 3,5 Jt</span>
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                    ⚡ Waktu Jadi Cepat: 3 - 7 Hari Kerja
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Gratis Domain .com / .id</strong> &amp; Cloud Hosting Aktif 1 Tahun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Desain Custom Responsif (Bukan template bajakan yang bikin lambat)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Tombol WhatsApp Direct Chat &amp; Integrasi Google Maps Kantor/Toko</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Optimasi SEO Google Lokal (Mudah dicari orang di kota Anda)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Garansi Perbaikan &amp; Panduan Pengelolaan Gratis</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20tertarik%20dengan%20Paket%20UMKM%20Starter%20Profile%20untuk%20usaha%20saya.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#1482C2] text-slate-700 hover:text-white font-bold text-xs sm:text-sm transition-all shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Pesan Paket Starter</span>
                </a>
              </div>
            </div>

            {/* 2. Paket Bisnis Pro & E-Commerce / POS (HIGHLIGHTED) */}
            <div className="rounded-2xl border-2 border-[#1482C2] bg-white p-6 sm:p-7 shadow-lg relative flex flex-col justify-between scale-[1.02] z-10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1482C2] to-[#233876] text-white px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Paling Diminati (Best Value)
              </div>

              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#EAF5FC] text-[#1482C2] border border-[#1482C2]/30 text-[11px] font-bold tracking-wide uppercase mb-3">
                  <Laptop className="w-3 h-3" />
                  Toko Online &amp; Aplikasi Kasir
                </div>
                <h3 className="text-xl font-bold text-[#233876]">
                  Bisnis Pro &amp; Automasi
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Untuk bisnis yang butuh sistem katalog transaksi, pencatatan kasir toko, sinkronisasi stok, dan pembayaran online otomatis.
                </p>

                <div className="my-5 pb-5 border-b border-slate-100">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Investasi Mulai</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#233876] mt-0.5">
                    Rp 4,5 Jt <span className="text-xs text-slate-500 font-normal">s/d 9,5 Jt</span>
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                    ⚡ Waktu Pengerjaan: 10 - 20 Hari Kerja
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1482C2] shrink-0 mt-0.5" />
                    <span><strong>Semua fitur Paket UMKM Starter</strong> disertakan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1482C2] shrink-0 mt-0.5" />
                    <span>Katalog Produk Tanpa Batas &amp; Dashboard Admin Kasir</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1482C2] shrink-0 mt-0.5" />
                    <span>Integrasi Payment Gateway Otomatis (QRIS, VA Bank, E-Wallet)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1482C2] shrink-0 mt-0.5" />
                    <span>Kalkulator Hitung Ongkos Kirim JNE/J&amp;T/SiCepat se-Indonesia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1482C2] shrink-0 mt-0.5" />
                    <span>Laporan Rekap Penjualan, Laba Rugi, &amp; Backup Database Harian</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20ingin%20konsultasi%20Paket%20Bisnis%20Pro%20/%20Toko%20Online%20Kasir.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#1482C2] to-[#233876] hover:from-[#0E6496] hover:to-[#162A62] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konsultasi Paket Bisnis Pro</span>
                </a>
              </div>
            </div>

            {/* 3. Paket Custom Enterprise & ERP */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:border-[#1482C2] hover:shadow-md transition-all flex flex-col justify-between relative group">
              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 text-[11px] font-bold tracking-wide uppercase mb-3">
                  <Building2 className="w-3 h-3" />
                  Skala Korporat &amp; Industri
                </div>
                <h3 className="text-xl font-bold text-[#233876] group-hover:text-[#1482C2] transition-colors">
                  Enterprise ERP &amp; Mobile App
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Arsitektur modular skala penuh untuk pabrik, distributor multi-cabang, instansi, atau aplikasi mobile iOS &amp; Android teruji.
                </p>

                <div className="my-5 pb-5 border-b border-slate-100">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Investasi Mulai</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#233876] mt-0.5">
                    Rp 15 Jt+ <span className="text-xs text-slate-500 font-normal">Sesuai Kebutuhan</span>
                  </div>
                  <div className="text-[11px] text-purple-700 font-semibold mt-1">
                    ⚡ Skema Termin Sesuai Milestone Demo
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>100% Hak Milik Source Code</strong> (Bebas Biaya Royalti Selamanya)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Aplikasi Mobile Android &amp; iOS (Flutter / React Native)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Sinkronisasi Multi-Cabang &amp; Multi-Gudang Terintegrasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Audit Keamanan Siber OWASP Top 10 &amp; Enkripsi AES-256</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Perjanjian SPK Sah Berbadan Hukum CV, NDA, &amp; Faktur Pajak Resmi</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20kami%20ingin%20mendiskusikan%20kebutuhan%20Sistem%20Enterprise%20ERP%20/%20Aplikasi%20Mobile%20kustom.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#233876] text-slate-700 hover:text-white font-bold text-xs sm:text-sm transition-all shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Diskusi Kebutuhan Enterprise</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TIER CARDS: PASAR INTERNASIONAL / OFFSHORE (USD)         */}
        {/* ======================================================== */}
        {currency === "USD" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* 1. Dedicated Developer */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:border-[#1482C2] hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold tracking-wide uppercase mb-3">
                  <Globe2 className="w-3 h-3" />
                  Staff Augmentation
                </div>
                <h3 className="text-xl font-bold text-[#233876] group-hover:text-[#1482C2] transition-colors">
                  Dedicated Fullstack Dev
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Hire top-tier Indonesian software engineers dedicated to your sprint. High English proficiency &amp; timezone flexibility.
                </p>

                <div className="my-5 pb-5 border-b border-slate-100">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Offshore Rate</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#233876] mt-0.5">
                    $20 - $28 <span className="text-xs text-slate-500 font-normal">/ Hour</span>
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                    ⚡ Save 65% - 75% vs. Local US/EU Devs
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Modern Stack: Next.js, React, Node.js, TypeScript, Flutter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Daily Agile Standups &amp; Jira/Slack/GitHub Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>4+ Hours Timezone Overlap with US, Europe, or Australia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Full IP Assignment &amp; Legally Binding Mutual NDA</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Bahari%20Tech%20Solution,%20I'm%20interested%20in%20hiring%20a%20dedicated%20offshore%20developer.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#1482C2] text-slate-700 hover:text-white font-bold text-xs sm:text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hire Dedicated Dev</span>
                </a>
              </div>
            </div>

            {/* 2. Fixed-Scope MVP (HIGHLIGHTED) */}
            <div className="rounded-2xl border-2 border-[#1482C2] bg-white p-6 sm:p-7 shadow-lg relative flex flex-col justify-between scale-[1.02] z-10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1482C2] to-[#233876] text-white px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Startup Founder Choice
              </div>

              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#EAF5FC] text-[#1482C2] border border-[#1482C2]/30 text-[11px] font-bold tracking-wide uppercase mb-3">
                  <Laptop className="w-3 h-3" />
                  End-to-End MVP Build
                </div>
                <h3 className="text-xl font-bold text-[#233876]">
                  Fixed-Scope Product MVP
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Launch your SaaS, web application, or mobile app from concept to production in 2 to 4 weeks with zero technical debt.
                </p>

                <div className="my-5 pb-5 border-b border-slate-100">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Fixed Project Rate</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#233876] mt-0.5">
                    $999 <span className="text-xs text-slate-500 font-normal">to $2,999 USD</span>
                  </div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                    ⚡ Turnaround: 2 - 4 Weeks Guaranteed
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1482C2] shrink-0 mt-0.5" />
                    <span>Complete UI/UX Design + Clean Fullstack Codebase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1482C2] shrink-0 mt-0.5" />
                    <span>Stripe / PayPal Global Payment Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1482C2] shrink-0 mt-0.5" />
                    <span>Cloud Deployment on AWS / Vercel with 99.98% SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1482C2] shrink-0 mt-0.5" />
                    <span>100% Repository Transfer &amp; Free 30-Day Post-Launch Support</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Bahari%20Tech%20Solution,%20I'd%20like%20to%20discuss%20a%20Fixed-Scope%20MVP%20software%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#1482C2] to-[#233876] hover:from-[#0E6496] hover:to-[#162A62] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book Free Discovery Call</span>
                </a>
              </div>
            </div>

            {/* 3. Dedicated Engineering Pod */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:border-[#1482C2] hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 text-[11px] font-bold tracking-wide uppercase mb-3">
                  <Building2 className="w-3 h-3" />
                  Enterprise Engineering
                </div>
                <h3 className="text-xl font-bold text-[#233876] group-hover:text-[#1482C2] transition-colors">
                  Autonomous Offshore Pod
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  A full-fledged agile team consisting of Senior Fullstack Devs, UI/UX Designer, and QA Specialist operating as your remote IT wing.
                </p>

                <div className="my-5 pb-5 border-b border-slate-100">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Monthly Retainer</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#233876] mt-0.5">
                    Custom <span className="text-xs text-slate-500 font-normal">Flexible Retainer</span>
                  </div>
                  <div className="text-[11px] text-purple-700 font-semibold mt-1">
                    ⚡ High-Velocity Bi-Weekly Releases
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Autonomous Sprint Planning, Architecture, &amp; Execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>OWASP Top 10 Cybersecurity &amp; Penetration Testing Audit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Multi-Region Microservices &amp; High-Availability Failover</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>Commercial Grade SLA &amp; Direct CTO Collaboration</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Bahari%20Tech%20Solution,%20we%20want%20to%20discuss%20an%20Offshore%20Engineering%20Pod%20retainer.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-[#233876] text-slate-700 hover:text-white font-bold text-xs sm:text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Team Deck</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Reassurance Banner */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50/50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-xl bg-[#233876] text-white flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#233876]">
                Jaminan Tanpa Risiko: 100% Hak Milik Source Code &amp; Skema Pembayaran Bertahap
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Bebas biaya lisensi bulanan menjebak, pembayaran terbagi ke termin aman sesuai demo fitur, dan garansi perbaikan pasca rilis.
              </p>
            </div>
          </div>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#233876] hover:bg-[#1482C2] text-white text-xs font-bold transition-all shrink-0 shadow-sm"
          >
            <span>Konsultasi Proyek Gratis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}

