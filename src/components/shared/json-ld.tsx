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
          {
            "@type": "Country",
            name: "Indonesia",
          },
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
