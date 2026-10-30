import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "Organization", "LocalBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: [siteConfig.shortName, "Bahari Tech", "Bahari Tech Solution"],
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo/Logo.png`,
        image: `${siteConfig.url}/images/kantor/kantor_bts_utama.png`,
        description: siteConfig.description,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        priceRange: "$$",
        currenciesAccepted: "IDR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer, QRIS",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address,
          addressLocality: "Jakarta Selatan",
          addressRegion: "DKI Jakarta",
          postalCode: "12190",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -6.2088,
          longitude: 106.8456,
        },
        areaServed: [
          { "@type": "Country", name: "Indonesia" },
          // Wilayah Asal & Basis Maritim
          { "@type": "City", name: "Kota Tegal" },
          { "@type": "AdministrativeArea", name: "Kabupaten Tegal" },
          { "@type": "City", name: "Slawi" },
          { "@type": "AdministrativeArea", name: "Brebes" },
          { "@type": "AdministrativeArea", name: "Pemalang" },
          { "@type": "City", name: "Pekalongan" },
          { "@type": "City", name: "Cirebon" },
          { "@type": "City", name: "Purwokerto" },
          { "@type": "AdministrativeArea", name: "Banyumas" },
          { "@type": "AdministrativeArea", name: "Cilacap" },
          // Jawa Tengah & DIY
          { "@type": "City", name: "Semarang" },
          { "@type": "City", name: "Surakarta" },
          { "@type": "City", name: "Solo" },
          { "@type": "City", name: "Yogyakarta" },
          { "@type": "AdministrativeArea", name: "Kudus" },
          { "@type": "AdministrativeArea", name: "Magelang" },
          // Megapolitan & Jabodetabek
          { "@type": "AdministrativeArea", name: "Jabodetabek" },
          { "@type": "City", name: "Jakarta" },
          { "@type": "City", name: "Jakarta Selatan" },
          { "@type": "City", name: "Jakarta Pusat" },
          { "@type": "City", name: "Jakarta Barat" },
          { "@type": "City", name: "Jakarta Timur" },
          { "@type": "City", name: "Jakarta Utara" },
          { "@type": "City", name: "Bogor" },
          { "@type": "City", name: "Depok" },
          { "@type": "City", name: "Tangerang" },
          { "@type": "City", name: "Tangerang Selatan" },
          { "@type": "City", name: "Bekasi" },
          // Jawa Barat & Jawa Timur
          { "@type": "City", name: "Bandung" },
          { "@type": "City", name: "Surabaya" },
          { "@type": "City", name: "Malang" },
          { "@type": "City", name: "Sidoarjo" },
          { "@type": "City", name: "Gresik" },
          // Luar Jawa (Sumatera, Kalimantan, Sulawesi, Bali, Nusa Tenggara, Papua)
          { "@type": "City", name: "Medan" },
          { "@type": "City", name: "Palembang" },
          { "@type": "City", name: "Pekanbaru" },
          { "@type": "City", name: "Batam" },
          { "@type": "City", name: "Bandar Lampung" },
          { "@type": "City", name: "Denpasar" },
          { "@type": "City", name: "Mataram" },
          { "@type": "City", name: "Balikpapan" },
          { "@type": "City", name: "Samarinda" },
          { "@type": "City", name: "Banjarmasin" },
          { "@type": "City", name: "Pontianak" },
          { "@type": "City", name: "Makassar" },
          { "@type": "City", name: "Manado" },
          { "@type": "City", name: "Jayapura" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "54",
          bestRating: "5",
          worstRating: "1",
        },
        knowsAbout: [
          "Enterprise Software Development",
          "ERP Systems Multi-Cabang",
          "Mobile Application Engineering (iOS & Android)",
          "Web Application & SaaS Architecture (Next.js)",
          "Cloud DevOps & OWASP Cybersecurity",
          "Clean Architecture & Database Engineering",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.phone,
            contactType: "customer support",
            areaServed: "ID",
            availableLanguage: ["Indonesian", "English"],
          },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30",
            closes: "17:30",
          },
        ],
        sameAs: [
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
          siteConfig.socials.github,
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Katalog Layanan Rekayasa Perangkat Lunak & Sistem Enterprise",
          itemListElement: servicesData.map((service, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.shortDesc,
              url: `${siteConfig.url}/layanan#${service.slug}`,
            },
            position: index + 1,
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "id-ID",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#sitelinks`,
        name: "Navigasi Resmi Bahari Tech Solution",
        itemListElement: [
          {
            "@type": "SiteNavigationElement",
            position: 1,
            name: "Tentang Kami",
            description:
              "Profil perusahaan, visi misi, nilai-nilai B.A.H.A.R.I, dan legalitas CV resmi.",
            url: `${siteConfig.url}/tentang-kami`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 2,
            name: "Layanan Solusi",
            description:
              "Katalog layanan rekayasa software: Web App, Mobile App iOS Android, ERP, & Cloud DevOps.",
            url: `${siteConfig.url}/layanan`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 3,
            name: "Portofolio & Studi Kasus",
            description:
              "Rekam jejak dan studi kasus sistem enterprise yang telah sukses dirilis ke produksi.",
            url: `${siteConfig.url}/portofolio`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 4,
            name: "Kontak & Konsultasi",
            description:
              "Hubungi konsultan teknologi untuk konsultasi kebutuhan software dan estimasi RAB resmi.",
            url: `${siteConfig.url}/kontak`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        name: "FAQ Rekayasa Software & Solusi Enterprise Bahari Tech Solution",
        mainEntity: [
          {
            "@type": "Question",
            name: "Berapa lama estimasi waktu pengerjaan sebuah software atau aplikasi di Bahari Tech Solution?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Website profil korporasi atau landing page interaktif rata-rata selesai dalam 2–4 minggu. Aplikasi mobile (MVP) atau modul software kustom skala menengah membutuhkan 6–10 minggu. Sedangkan sistem Enterprise ERP multi-cabang terintegrasi rata-rata memerlukan waktu 3–5 bulan dengan metodologi Agile bertahap.",
            },
          },
          {
            "@type": "Question",
            name: "Apakah klien mendapatkan 100% hak milik penuh atas Source Code?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ya, 100% hak cipta intelektual (Intellectual Property) dan seluruh source code menjadi milik penuh klien setelah pelunasan proyek. CV. Bahari Tech Solution menyerahkan repositori kode rapi (Git), dokumentasi arsitektur, dan tanpa sistem keterikatan tertutup (bebas vendor lock-in).",
            },
          },
          {
            "@type": "Question",
            name: "Berapa estimasi biaya jasa pembuatan aplikasi mobile atau software kustom?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Investasi disesuaikan secara transparan berdasarkan ruang lingkup fitur (Scope of Work), arsitektur teknologi, dan integrasi API. CV. Bahari Tech Solution memberikan sesi konsultasi arsitek gratis dan dokumen Rencana Anggaran Biaya (RAB) resmi bertanda tangan badan usaha sah.",
            },
          },
          {
            "@type": "Question",
            name: "Apakah CV. Bahari Tech Solution berbadan hukum resmi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ya, CV. Bahari Tech Solution adalah software house dan konsultan teknologi berbadan hukum resmi terdaftar di Kemenkumham RI, memiliki NIB resmi, nomor rekening bank atas nama perusahaan, serta menyediakan dokumen SPK sah, perjanjian kerahasiaan (NDA), dan faktur pajak resmi.",
            },
          },
          {
            "@type": "Question",
            name: "Apakah ada garansi pemeliharaan setelah sistem rilis ke produksi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ya, setiap proyek dilindungi garansi bebas bug resmi (Free SLA Bugfix & Maintenance) selama 3 hingga 6 bulan pasca rilis produksi, didukung SLA uptime 99.98% dan tim teknis yang siap siaga.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
