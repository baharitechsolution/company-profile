"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface RegionGroup {
  id: string;
  name: string;
  badge: string;
  description: string;
  cities: { name: string; popular?: boolean }[];
  highlight: string;
}

const regions: RegionGroup[] = [
  {
    id: "pantura",
    name: "Pantura Barat & Karesidenan Pekalongan",
    badge: "Basis Kantor & Tatap Muka",
    description: "Wilayah basis operasional kami. Melayani pertemuan tatap muka langsung, survei kantor/toko, dan pendampingan implementasi di lokasi.",
    highlight: "Konsultasi tatap muka langsung di kantor kami (Tegal) atau tim teknis kami siap berkunjung ke lokasi usaha Anda.",
    cities: [
      { name: "Kota Tegal", popular: true },
      { name: "Kabupaten Tegal (Slawi)", popular: true },
      { name: "Adiwerna", popular: true },
      { name: "Kramat", popular: true },
      { name: "Brebes", popular: true },
      { name: "Bumiayu", popular: true },
      { name: "Ketanggungan" },
      { name: "Tanjung Brebes" },
      { name: "Pemalang", popular: true },
      { name: "Comal" },
      { name: "Randudongkal" },
      { name: "Kota Pekalongan", popular: true },
      { name: "Kabupaten Pekalongan (Kajen)", popular: true },
      { name: "Kedungwuni" },
      { name: "Batang", popular: true },
    ],
  },
  {
    id: "jateng-diy",
    name: "Jawa Tengah & D.I. Yogyakarta",
    badge: "Kemitraan Regional",
    description: "Jaringan mitra strategis untuk digitalisasi UMKM, distributor, fasilitas kesehatan, dan perusahaan industri di koridor Jawa Tengah & DIY.",
    highlight: "Pendampingan sistem secara berkala dengan SLA keandalan tinggi dan garansi kontrak legal sah.",
    cities: [
      { name: "Semarang", popular: true },
      { name: "Solo / Surakarta", popular: true },
      { name: "Yogyakarta", popular: true },
      { name: "Sleman" },
      { name: "Bantul" },
      { name: "Purwokerto", popular: true },
      { name: "Banyumas", popular: true },
      { name: "Cilacap", popular: true },
      { name: "Kebumen" },
      { name: "Purbalingga" },
      { name: "Kudus", popular: true },
      { name: "Jepara", popular: true },
      { name: "Pati" },
      { name: "Magelang", popular: true },
      { name: "Salatiga", popular: true },
      { name: "Klaten" },
      { name: "Sukoharjo" },
      { name: "Wonogiri" },
    ],
  },
  {
    id: "megapolitan",
    name: "Jabodetabek & Kota Besar Jawa",
    badge: "Enterprise & Startup",
    description: "Pengembangan web application skalabel, infrastruktur cloud modern, dan aplikasi mobile untuk korporasi dan bisnis berkembang.",
    highlight: "Kolaborasi agile terstruktur via Google Meet/Zoom, pelaporan sprint berkala, dan kepatuhan NDA penuh.",
    cities: [
      { name: "Jakarta Selatan", popular: true },
      { name: "Jakarta Pusat", popular: true },
      { name: "Jakarta Barat", popular: true },
      { name: "Jakarta Timur" },
      { name: "Jakarta Utara" },
      { name: "Tangerang & Tangsel", popular: true },
      { name: "Bekasi", popular: true },
      { name: "Depok", popular: true },
      { name: "Bogor", popular: true },
      { name: "Bandung", popular: true },
      { name: "Cirebon", popular: true },
      { name: "Tasikmalaya" },
      { name: "Surabaya", popular: true },
      { name: "Malang", popular: true },
      { name: "Sidoarjo", popular: true },
      { name: "Gresik" },
    ],
  },
  {
    id: "luar-jawa",
    name: "Luar Jawa & Kawasan Strategis",
    badge: "Distribusi Nasional",
    description: "Membantu perusahaan logistik, perkebunan, perdagangan, dan manufaktur lintas pulau melakukan sentralisasi sistem digital.",
    highlight: "Infrastruktur cloud modern berkinerja tinggi yang stabil diakses dari berbagai penjuru tanah air.",
    cities: [
      { name: "Medan", popular: true },
      { name: "Palembang", popular: true },
      { name: "Batam", popular: true },
      { name: "Pekanbaru" },
      { name: "Bandar Lampung" },
      { name: "Denpasar Bali", popular: true },
      { name: "Balikpapan", popular: true },
      { name: "Samarinda", popular: true },
      { name: "Banjarmasin" },
      { name: "Pontianak" },
      { name: "Makassar", popular: true },
      { name: "Manado" },
      { name: "Mataram Lombok" },
      { name: "Jayapura" },
    ],
  },
  {
    id: "global",
    name: "Klien Global & Mitra Offshore",
    badge: "International Reach",
    description: "Layanan staff augmentation dan fixed-scope software engineering untuk startup dan korporasi internasional dengan keunggulan efisiensi biaya.",
    highlight: "Standar kode modern (Next.js, TypeScript, Flutter), komunikasi bahasa Inggris profesional, dan penghematan biaya hingga 70%.",
    cities: [
      { name: "Singapura", popular: true },
      { name: "Malaysia (Kuala Lumpur)", popular: true },
      { name: "Australia (Sydney, Melbourne)", popular: true },
      { name: "Amerika Serikat (California, NY)", popular: true },
      { name: "Inggris (London)", popular: true },
      { name: "Jerman (Berlin)", popular: true },
      { name: "Uni Emirat Arab (Dubai)", popular: true },
    ],
  },
];

export function GeoCoverageSection() {
  const [activeTab, setActiveTab] = useState<string>("pantura");

  const currentRegion = regions.find((r) => r.id === activeTab) || regions[0];

  return (
    <section id="jangkauan-layanan" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest text-[#1482C2] uppercase mb-2">
            Wilayah Operasional &amp; Jangkauan Layanan
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#233876] tracking-tight">
            Melayani Klien dari Tingkat Daerah hingga Internasional
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Berpusat di Tegal, Jawa Tengah. Kami mendampingi proyek mulai dari kebutuhan UMKM lokal hingga sistem korporasi berskala nasional dan mancanegara.
          </p>

          {/* Simple Tab Control */}
          <div className="mt-8 flex flex-wrap justify-center gap-1.5 p-1 rounded-lg bg-white border border-slate-200">
            {regions.map((reg) => {
              const isActive = activeTab === reg.id;
              return (
                <button
                  key={reg.id}
                  onClick={() => setActiveTab(reg.id)}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#233876] text-white shadow-xs font-semibold"
                      : "text-slate-600 hover:text-[#233876]"
                  }`}
                >
                  {reg.name.split("&")[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Region Card */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold text-[#1482C2] tracking-wider uppercase block mb-1">
                {currentRegion.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#233876]">
                {currentRegion.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
                {currentRegion.description}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20ingin%20konsultasi%20layanan%20software%20untuk%20wilayah%20${encodeURIComponent(currentRegion.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2.5 px-5 rounded-lg bg-[#233876] hover:bg-[#1482C2] text-white text-xs font-semibold transition-colors"
              >
                Konsultasi Wilayah Ini
              </a>
            </div>
          </div>

          {/* Service Highlight */}
          <div className="my-6 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-[#233876]">Standar Kerja Sama:</strong> {currentRegion.highlight}
          </div>

          {/* Clean City Pills */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Daftar Area Terlayani ({currentRegion.cities.length} Wilayah):
            </p>
            <div className="flex flex-wrap gap-2">
              {currentRegion.cities.map((city, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                    city.popular
                      ? "bg-slate-100 text-[#233876] font-semibold border border-slate-300"
                      : "bg-slate-50 text-slate-600 border border-slate-200"
                  }`}
                >
                  {city.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Simple Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-xs text-slate-600">
          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <h4 className="font-bold text-sm text-[#233876] mb-1.5">
              Konsultasi Tatap Muka &amp; Daring
            </h4>
            <p className="leading-relaxed">
              Tatap muka langsung untuk kawasan Tegal, Brebes, Slawi, Pemalang, dan sekitarnya. Sesi daring terstruktur via video call untuk seluruh kota lain dan internasional.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <h4 className="font-bold text-sm text-[#233876] mb-1.5">
              Perjanjian SPK &amp; Faktur Pajak
            </h4>
            <p className="leading-relaxed">
              Setiap proyek dilindungi dokumen SPK resmi berbadan hukum CV, non-disclosure agreement (NDA), termin pembayaran bertahap, dan faktur pajak sah.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200">
            <h4 className="font-bold text-sm text-[#233876] mb-1.5">
              100% Hak Milik Source Code
            </h4>
            <p className="leading-relaxed">
              Seluruh source code dan aset digital diserahkan penuh kepada Anda tanpa biaya sewa lisensi tahunan tersembunyi (zero vendor lock-in).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
