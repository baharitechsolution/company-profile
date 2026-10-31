import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/shared/json-ld";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Bahari Tech Solution - Software House Indonesia",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // --- BRAND & IDENTITY ---
    "CV. Bahari Tech Solution",
    "Bahari Tech Solution",
    "Bahari Tech",
    "Baharitech",
    "baharitech",
    "baharitechsolution",
    "Bahari Tech Tegal",
    "Software House Indonesia",
    "Perusahaan IT Indonesia",
    "Konsultan IT Terpercaya",
    
    // --- NON-IT & PROBLEM-SOLVING (Kueri Pemilik Bisnis & Manajemen Awam) ---
    "Jasa Bikin Aplikasi Kasir",
    "Jasa Buat Program Kantor",
    "Jasa Bikin Website Perusahaan",
    "Biaya Pembuatan Aplikasi Mobile",
    "Bikin Aplikasi Android Toko Online",
    "Bikin Sistem Stok Barang Gudang",
    "Jasa Digitalisasi Usaha & UMKM",
    "Jasa Pembuatan Sistem Pembukuan Otomatis",
    "Vendor IT Terpercaya Berbadan Hukum",
    "Jasa Bikin Web Profil Perusahaan Murah Profesional",
    
    // --- ENTERPRISE & TECHNICAL (Kueri CTO, Tech Lead & Procurement) ---
    "Custom Software Engineering Company Indonesia",
    "Jasa Pembuatan Sistem ERP Multi Cabang",
    "Jasa Pembuatan Aplikasi Mobile Android iOS",
    "Fullstack Next.js Enterprise Web Agency",
    "Flutter & React Native Mobile App Developers",
    "Cloud DevOps Architecture AWS GCP",
    "OWASP Cybersecurity Audit & Penetration Testing",
    "Microservices Architecture & REST API Integration",
    "Software House Clean Architecture & Zero Vendor Lock-in",
    "Dedicated Software Developers Outsourcing Indonesia",
    
    // --- REGIONAL & GEO LOCAL INTENT (Kota Tegal, Kabupaten Tegal & Seluruh Indonesia) ---
    "Software House Tegal",
    "Software House Kota Tegal",
    "Software House Kabupaten Tegal",
    "Software House Slawi",
    "Software House Brebes",
    "Software House Pemalang",
    "Software House Pekalongan",
    "Software House Purwokerto",
    "Software House Cirebon",
    "Software House Cilacap Banyumas",
    "Software House Jawa Tengah",
    "Jasa Pembuatan Website Tegal",
    "Jasa Pembuatan Aplikasi Tegal",
    "Jasa Bikin Web Tegal Brebes Slawi",
    "Jasa Bikin Aplikasi Kasir Tegal",
    "Jasa Pembuatan Toko Online Tegal",
    "Konsultan IT Tegal Jawa Tengah",
    "Vendor Software Tegal Pantura",
    "Software House Jakarta Selatan",
    "Software House Jakarta Pusat",
    "Software House Jabodetabek",
    "Software House Surabaya",
    "Software House Bandung",
    "Software House Semarang",
    "Software House Solo Surakarta",
    "Software House Yogyakarta",
    "Software House Malang",
    "Software House Medan",
    "Software House Palembang",
    "Software House Batam",
    "Software House Denpasar Bali",
    "Software House Balikpapan Samarinda",
    "Software House Makassar",
    "Jasa Pembuatan Aplikasi Seluruh Indonesia",
    
    // --- INTERNATIONAL & OFFSHORE ---
    "Top Software House in Indonesia",
    "Offshore Software Development Company Jakarta",
    "Custom Web Application Development Southeast Asia",
    "Hire Software Engineering Team Indonesia",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "7KyDW6UWwyCZYeRg7Jfwfx28nLcs6fJ423tMQVQAfsY",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: `${siteConfig.name} - Enterprise Software Engineering & Digital Transformation`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/kantor/kantor_thumbnail_square.png",
        width: 800,
        height: 800,
        alt: `${siteConfig.name} - Kantor Pusat & Software House Resmi`,
      },
      {
        url: "/images/kantor/kantor_bts_utama.png",
        width: 1536,
        height: 1024,
        alt: `${siteConfig.name} - Kantor Pusat & Software House Resmi`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Enterprise Software Engineering`,
    description: siteConfig.description,
    images: ["/images/kantor/kantor_thumbnail_square.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // GEO Targeting & Regional SEO Tags (Membantu Google Maps, Google AI, dan pencarian lokal Indonesia)
  other: {
    "geo.region": "ID-JT",
    "geo.placename": "Kabupaten Tegal, Jawa Tengah",
    "geo.position": "-6.8624;109.1865",
    "ICBM": "-6.8624, 109.1865",
    "content-language": "id",
    "distribution": "global",
    "rating": "general",
    "thumbnail": `${siteConfig.url}/images/kantor/kantor_thumbnail_square.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakartaSans.variable} scroll-smooth antialiased`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#1482C2] selection:text-white">
        {children}
      </body>
    </html>
  );
}
