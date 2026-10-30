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
    default: `${siteConfig.name} - Software House & Jasa Pembuatan Aplikasi Enterprise Indonesia`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Software House Indonesia",
    "Konsultan IT Jakarta",
    "Jasa Pembuatan Website",
    "Jasa Pembuatan Sistem ERP",
    "Jasa Pembuatan Aplikasi Android iOS",
    "Pengembangan Software Kustom",
    "Perusahaan IT Indonesia",
    "Bahari Tech Solution",
    "Cloud Architecture DevOps Indonesia",
    "Sistem Informasi Manajemen",
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
        url: "/images/logo/Logo.png",
        width: 1640,
        height: 580,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Enterprise Software Engineering`,
    description: siteConfig.description,
    images: ["/images/logo/Logo.png"],
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
    "geo.region": "ID-JK",
    "geo.placename": "Jakarta",
    "geo.position": "-6.2088;106.8456",
    "ICBM": "-6.2088, 106.8456",
    "content-language": "id",
    "distribution": "global",
    "rating": "general",
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
