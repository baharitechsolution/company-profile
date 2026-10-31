import { HeroSection } from "@/components/sections/hero-section";
import { WelcomeSection } from "@/components/sections/welcome-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PricingPackageSection } from "@/components/sections/pricing-package-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { FaqSection } from "@/components/sections/faq-section";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Bahari Tech Solution - Jasa Pembuatan Web & Aplikasi",
  },
  description:
    "Software House Indonesia resmi CV. Jasa pembuatan website murah profesional, aplikasi Android iOS, toko online & sistem ERP untuk UMKM hingga korporasi.",
  keywords: [
    // --- BRAND & SINGKATAN ---
    "Bahari Tech Solution",
    "CV. Bahari Tech Solution",
    "Bahari Tech",
    "Baharitech",
    "baharitech",

    // --- KATA KUNCI RAKYAT & PENCARIAN UMKM (HIGH SEARCH INTENT) ---
    "Bikin Webset di Tegal",
    "Bikin Website Murah di Tegal",
    "Jasa Pembuatan Website Tegal Murah",
    "Jasa Bikin Web Slawi",
    "Jasa Bikin Web Brebes",
    "Jasa Pembuatan Website Pemalang",
    "Jasa Bikin Website Pekalongan",
    "Jasa Buat Web Cirebon",
    "Jasa Bikin Aplikasi Kasir Toko",
    "Jasa Bikin Toko Online Murah",
    "Biaya Bikin Website UMKM",
    "Jasa Buat Program Kasir Murah",
    "Software House Tegal Murah",
    "Jasa Bikin Website Purwokerto",
    "Jasa Bikin Website Cilacap",
    "Jasa Pembuatan Aplikasi Semarang",

    // --- ENTERPRISE & GLOBAL OFFSHORE ---
    "Software House Indonesia",
    "Jasa Pembuatan Aplikasi Android iOS",
    "Jasa Pembuatan Sistem ERP",
    "Jasa Pembuatan Website Enterprise",
    "Hire Offshore Developers Indonesia",
    "Offshore Software Development Company",
    "Custom Web Application Development Indonesia",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Top Processing Banner Slider */}
      <HeroSection />

      {/* 2. Welcome & Company Overview Section */}
      <WelcomeSection />

      {/* 3. Katalog Layanan Solusi */}
      <ServicesSection />

      {/* 4. Paket Solusi & Estimasi Investasi (IDR & USD) */}
      <PricingPackageSection />

      {/* 5. Keunggulan Rekayasa & Standar Mutu */}
      <WhyUsSection />

      {/* 6. Studi Kasus & Portofolio */}
      <PortfolioSection />

      {/* 7. Tanya Jawab Umum (FAQ) & Schema.org FAQPage SEO */}
      <FaqSection />
    </>
  );
}
