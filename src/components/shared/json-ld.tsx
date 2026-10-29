import { siteConfig } from "@/config/site";
import { servicesData } from "@/config/services";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo/Logo.png`,
        image: `${siteConfig.url}/images/logo/Logo.png`,
        description: siteConfig.description,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        priceRange: "$$",
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
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
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
          name: "Katalog Layanan Rekayasa Perangkat Lunak",
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

