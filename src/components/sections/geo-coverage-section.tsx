"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Navigation, Building, Globe, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface RegionGroup {
  id: string;
  name: string;
  badge: string;
  icon: typeof MapPin;
  description: string;
  cities: { name: string; popular?: boolean }[];
  highlight: string;
}

const regions: RegionGroup[] = [
  {
    id: "pantura",
    name: "Pantura Barat & Karesidenan Pekalongan",
    badge: "Basis Kantor & Tatap Muka",
    icon: MapPin,
    description: "Wilayah basis operasional kami. Melayani pertemuan tatap muka langsung, survei kantor/toko, dan pendampingan implementasi di lokasi.",
    highlight: "Konsultasi tatap muka langsung di kantor kami (Tegal) atau tim kami siap berkunjung ke tempat Anda.",
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
    icon: Navigation,
    description: "Jaringan mitra strategis untuk transformasi digital UMKM, manufaktur, rumah sakit, dan distributor di koridor Jawa Tengah & DIY.",
    highlight: "Pendampingan sistem offline maupun online dengan SLA uptime 99.98% dan garansi kontrak legal sah.",
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
    icon: Building,
    description: "Pengembangan sistem web application skalabel, integrasi cloud, dan mobile apps untuk korporasi dan startup di kota-kota megapolitan.",
    highlight: "Kolaborasi agile online via Google Meet/Zoom, pelaporan sprint mingguan, dan kepatuhan NDA ketat.",
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
    icon: MapPin,
    description: "Membantu perusahaan perkebunan, pertambangan, logistik, dan perdagangan di berbagai pulau di Indonesia melakukan automasi sistem.",
    highlight: "Sistem cloud berstandar failover otomatis yang tetap stabil diakses dari berbagai penjuru tanah air.",
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
    name: "Klien Global & Offshore",
    badge: "International Reach",
    icon: Globe,
    description: "Layanan staff augmentation dan fixed-scope software engineering untuk startup dan bisnis di luar negeri dengan keunggulan efisiensi biaya.",
    highlight: "Hemat hingga 70% biaya rekayasa perangkat lunak dengan standar teknologi Silicon Valley dan bahasa Inggris profesional.",
    cities: [
      { name: "Singapore", popular: true },
      { name: "Malaysia (Kuala Lumpur)", popular: true },
      { name: "Australia (Sydney, Melbourne)", popular: true },
      { name: "United States (California, NY)", popular: true },
      { name: "United Kingdom (London)", popular: true },
      { name: "Germany (Berlin)", popular: true },
      { name: "United Arab Emirates (Dubai)", popular: true },
    ],
  },
];

export function GeoCoverageSection() {
  const [activeTab, setActiveTab] = useState<string>("pantura");

  const currentRegion = regions.find((r) => r.id === activeTab) || regions[0];

  return (
    <section id="jangkauan-layanan" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-slate-200/90 select-none overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#1482C2] text-xs font-bold tracking-wider uppercase mb-3 border border-[#1482C2]/20">
              <MapPin className="w-3.5 h-3.5" />
              Jangkauan Layanan Nasional &amp; Internasional
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#233876] tracking-tight leading-tight">
              Melayani Klien di Seluruh Pelosok Kota hingga Mancanegara
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Dari kebutuhan website UMKM murah di kota-kota kecil hingga sistem enterprise berskala nasional dan mitra teknologi offshore global.
            </p>
          </ScrollReveal>

          {/* Region Tabs */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            {regions.map((reg) => {
              const Icon = reg.icon;
              const isActive = activeTab === reg.id;
              return (
                <button
                  key={reg.id}
                  onClick={() => setActiveTab(reg.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#233876] text-white shadow-sm"
                      : "text-slate-600 hover:text-[#233876] hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{reg.name.split("&")[0].trim()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Region Content Card */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#EAF5FC] text-[#1482C2] text-xs font-bold tracking-wide uppercase mb-2">
                <span>{currentRegion.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#233876]">
                {currentRegion.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {currentRegion.description}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech%20Solution,%20saya%20ingin%20konsultasi%20jasa%20pembuatan%20website%20/%20aplikasi%20untuk%20wilayah%20${encodeURIComponent(currentRegion.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1482C2] hover:bg-[#0E6496] text-white text-xs sm:text-sm font-bold transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi Area Ini</span>
              </a>
            </div>
          </div>

          {/* Highlight Callout */}
          <div className="my-5 p-3.5 sm:p-4 rounded-xl bg-blue-50/70 border border-blue-100/80 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#1482C2] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              <strong>Standar Layanan:</strong> {currentRegion.highlight}
            </p>
          </div>

          {/* City Tags Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Cakupan Wilayah Populer ({currentRegion.cities.length} Kota/Area Terdaftar):
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentRegion.cities.map((city, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    city.popular
                      ? "bg-[#EAF5FC] text-[#233876] border border-[#1482C2]/30 shadow-2xs"
                      : "bg-slate-50 text-slate-600 border border-slate-200/80"
                  }`}
                >
                  <MapPin className={`w-3 h-3 ${city.popular ? "text-[#1482C2]" : "text-slate-400"}`} />
                  <span>{city.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars of Nationwide Service */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8">
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <h5 className="text-sm font-bold text-[#233876] mb-1">
              🤝 Konsultasi Ramah &amp; Fleksibel
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tersedia sesi tatap muka langsung untuk wilayah Pantura (Tegal, Brebes, Slawi, Pemalang) dan sesi online video call (Google Meet/Zoom) terjadwal untuk kota lainnya.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <h5 className="text-sm font-bold text-[#233876] mb-1">
              📑 Kontrak SPK &amp; Faktur Pajak Resmi
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              Setiap proyek diikat dengan perjanjian hukum resmi CV. Bahari Tech Solution, NDA kerahasiaan data, termin milestone transparan, serta faktur pajak sah.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
            <h5 className="text-sm font-bold text-[#233876] mb-1">
              📦 100% Hak Milik Source Code
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              Source code dan hak cipta diserahkan utuh kepada Anda tanpa biaya sewa lisensi tahunan tersembunyi (zero vendor lock-in).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

