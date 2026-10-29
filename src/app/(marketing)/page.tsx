import { HeroSection } from "@/components/sections/hero-section";
import { WelcomeSection } from "@/components/sections/welcome-section";
import { ServicesSection } from "@/components/sections/services-section";
import { WhyUsSection } from "@/components/sections/why-us-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { FaqSection } from "@/components/sections/faq-section";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Software House & Jasa Pembuatan Aplikasi Enterprise`,
  description:
    "Software House Indonesia terpercaya untuk pembuatan Web App, Aplikasi Mobile Android & iOS, Sistem Enterprise ERP, Cloud DevOps, serta integrasi automasi cerdas.",
  keywords: [
    "Software House Indonesia",
    "Jasa Pembuatan Aplikasi Android iOS",
    "Jasa Pembuatan Sistem ERP",
    "Jasa Pembuatan Website Enterprise",
    "Konsultan IT Jakarta",
    "Biaya Pembuatan Aplikasi Mobile",
    "Pengembangan Software Kustom",
    "Cloud Architecture DevOps",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Top Processing Banner Slider (Sesuai Gaya Asli Bumitekno) */}
      <HeroSection />

      {/* 2. Welcome & Company Overview Section */}
      <WelcomeSection />

      {/* 3. Katalog Layanan Solusi */}
      <ServicesSection />

      {/* 4. Keunggulan Rekayasa & Standar Mutu */}
      <WhyUsSection />

      {/* 5. Studi Kasus & Portofolio */}
      <PortfolioSection />

      {/* 6. Tanya Jawab Umum (FAQ) & Schema.org FAQPage SEO */}
      <FaqSection />
    </>
  );
}
