import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { detailedServices } from "@/config/services";
import { siteConfig } from "@/config/site";
import { HeroBannerVisual } from "@/components/sections/hero-banner-visual";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { UnifiedCtaBanner } from "@/components/sections/unified-cta-banner";
import { Button } from "@/components/ui/button";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ui/scroll-reveal";
import { WhatsAppIcon } from "@/components/shared/icons";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";

// Menonaktifkan runtime blocking warning Next.js 16 Partial Prerendering pada dynamic params
export const instant = false;

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(detailedServices).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = detailedServices[slug];

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan",
    };
  }

  return {
    title: `${service.seo.title} | ${siteConfig.name}`,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: {
      canonical: `/layanan/${service.slug}`,
    },
    openGraph: {
      title: `${service.seo.title} | ${siteConfig.name}`,
      description: service.seo.description,
      url: `${siteConfig.url}/layanan/${service.slug}`,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = detailedServices[slug];

  if (!service) {
    notFound();
  }

  const slideIndex =
    service.visualType === "mobile"
      ? 0
      : service.visualType === "enterprise"
      ? 1
      : service.visualType === "web"
      ? 2
      : 3;

  const whatsappMessage = `Halo Tim Konsultan Bahari Tech Solution, saya tertarik untuk konsultasi mengenai ${service.title}. Mohon informasi alur kerja, estimasi anggaran, dan jadwal diskusi teknologinya.`;
  const encodedWhatsapp = encodeURIComponent(whatsappMessage);

  // Schema.org Service & BreadcrumbList JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Layanan",
            item: `${siteConfig.url}/layanan`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `${siteConfig.url}/layanan/${service.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: service.title,
        description: service.seo.description,
        provider: {
          "@type": "Organization",
          name: siteConfig.legalName,
          url: siteConfig.url,
          telephone: siteConfig.contact.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.contact.address,
            addressLocality: "Tegal",
            addressRegion: "Jawa Tengah",
            addressCountry: "ID",
          },
        },
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
        serviceType: service.title,
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* 1. BREADCRUMB STANDAR SERAGAM                                     */}
      {/* ------------------------------------------------------------------ */}
      <Breadcrumbs
        items={[
          { title: "Layanan", href: "/layanan" },
          { title: service.title },
        ]}
      />

      {/* ------------------------------------------------------------------ */}
      {/* 2. HERO SECTION LAYANAN (PRESISI PERSIS DENGAN HERO HOME)          */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-white min-h-[600px] lg:min-h-[calc(100vh-8rem)] lg:max-h-[880px] flex flex-col justify-center border-b border-slate-100 select-none py-8 sm:py-12 lg:py-14">
        {/* Background Architectural Grid Pattern (Persis Hero Home) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_60%,transparent_100%)] -z-10"
        />

        {/* Atmospheric Ambient Radial Lighting Glows (Persis Hero Home) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-[5%] w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-[#0EB8D8]/12 via-[#1482C2]/6 to-transparent blur-3xl -z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-[#1482C2]/6 via-[#0EB8D8]/4 to-transparent blur-3xl -z-10"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Kolom Kiri: Eyebrow, H1, Deskripsi, Tombol CTA & Metrik Hero */}
            <ScrollReveal direction="up" delay={0.05} className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6">
              
              {/* Eyebrow Editorial Kicker Arsitektural Bersih (Persis Hero Home) */}
              <div className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-[#1482C2]" aria-hidden="true" />
                <p className="text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#1482C2]">
                  {service.tag}
                </p>
              </div>

              {/* H1 SEO Standar Industri (Persis Tipografi Hero Home) */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[48px] font-bold text-[#233876] leading-[1.14] tracking-tight">
                {service.heroHeadingBefore}{" "}
                <span className="text-[#1482C2]">{service.heroHighlight}</span>{" "}
                {service.heroHeadingAfter}
              </h1>

              {/* Deskripsi Kalimat Profesional */}
              <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed max-w-xl">
                {service.heroDescription}
              </p>

              {/* Tombol CTA Aksi Utama (Persis Gaya Hero Home) */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="md"
                    variant="primary"
                    className="w-full sm:w-auto h-12 px-7 gap-2.5 text-xs sm:text-sm font-bold shadow-md shadow-[#1482C2]/15 hover:shadow-lg hover:shadow-[#1482C2]/25 hover:bg-[#0E6496] transition-all cursor-pointer"
                  >
                    <span>Konsultasi Layanan Ini</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="md"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-6 gap-2.5 text-xs sm:text-sm font-bold border-slate-300 bg-white text-slate-800 hover:border-[#25D366] hover:text-[#233876] hover:bg-emerald-50/30 transition-all shadow-2xs cursor-pointer"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5 text-[#25D366] shrink-0" />
                    <span>Chat WhatsApp Konsultan</span>
                  </Button>
                </a>
              </div>

              {/* Nilai Keunggulan Dinamis: Persis Format Strip Tipografi Bersih Hero Home */}
              <div className="pt-3 sm:pt-4 border-t border-slate-200/80">
                <div
                  className={`grid ${
                    service.metrics.length === 2
                      ? "grid-cols-2 max-w-sm sm:max-w-md sm:divide-x sm:divide-slate-200/90"
                      : "grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-slate-200/90"
                  }`}
                >
                  {service.metrics.map((metric, mIdx) => (
                    <Link
                      key={mIdx}
                      href={metric.href}
                      className={`group text-left transition-colors ${
                        mIdx === 0
                          ? "px-1 sm:pr-4 sm:pl-0"
                          : "px-1 sm:px-4"
                      }`}
                    >
                      <span className="block text-[11px] font-medium text-slate-500 group-hover:text-[#1482C2] transition-colors leading-tight">
                        {metric.label}
                      </span>
                      <span className="block text-sm sm:text-base font-bold text-[#233876] group-hover:text-[#1482C2] transition-colors mt-0.5 leading-tight">
                        {metric.value}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </ScrollReveal>

            {/* Kolom Kanan: Visual Dinamis Interaktif dari Hero Slider */}
            <ScrollReveal direction="up" delay={0.15} className="lg:col-span-5 flex items-center justify-center pt-2 pb-4 lg:py-0">
              <HeroBannerVisual slideIndex={slideIndex} visualType={service.visualType} />
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. MENGAPA MEMILIH LAYANAN INI? (H2)                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1482C2] block mb-2">
              KEUNGGULAN REKAYASA SISTEM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#233876]">
              Mengapa Memilih {service.title}?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Kami menggabungkan standar arsitektur clean code, keamanan kelas enterprise, dan fleksibilitas tanpa keterikatan lisensi untuk memberikan nilai investasi terbaik bagi bisnis Anda.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {service.whyChoose.map((item, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={0.1 + idx * 0.05}
                className="rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 hover:border-[#1482C2]/40 transition-all shadow-2xs hover:shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#EAF5FC] text-[#1482C2] flex items-center justify-center shrink-0 font-mono font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#233876] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Tech Stack Strip */}
          <ScrollReveal direction="up" delay={0.1} className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-[#1482C2]" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Teknologi yang Digunakan:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. DAFTAR PAKET HARGA & ESTIMASI INVESTASI (H2)                    */}
      {/* ------------------------------------------------------------------ */}
      <section id="paket-harga" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-20 select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1482C2] block mb-2">
              ESTIMASI INVESTASI RESMI
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#233876]">
              Daftar Paket Harga {service.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Biaya transparan tanpa biaya tersembunyi. Didukung skema pembayaran bertahap (termin milestone) yang melindungi keamanan anggaran Anda.
            </p>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {service.pricingPackages.map((pkg, idx) => {
              const isPopular = pkg.isPopular;
              return (
                <ScrollStaggerItem
                  key={idx}
                  className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative transition-all ${
                    isPopular
                      ? "border-2 border-[#1482C2] bg-linear-to-b from-sky-50/40 via-white to-white shadow-md ring-2 ring-[#1482C2]/10"
                      : "border border-slate-200 bg-white hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#1482C2] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                      {pkg.badge || "Paling Sering Dipilih"}
                    </span>
                  )}

                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      {pkg.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#233876]">
                      {pkg.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[36px]">
                      {pkg.description}
                    </p>

                    <div className="my-5 pt-4 pb-4 border-y border-slate-100">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                        Estimasi Investasi
                      </span>
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#233876] tracking-tight mt-0.5">
                        {pkg.price}{" "}
                        {pkg.pricePeriod && (
                          <span className="text-xs font-normal text-slate-500">
                            {pkg.pricePeriod}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        <span>Estimasi Pengerjaan: {pkg.duration}</span>
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-600">
                      <p className="font-bold text-slate-800 mb-1">Cakupan layanan:</p>
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPopular ? "text-[#1482C2]" : "text-emerald-600"
                            }`}
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                        `Halo Bahari Tech Solution, saya tertarik untuk konsultasi ${service.title} - ${pkg.name}. Mohon informasi ketersediaan jadwal tim dan Rencana Anggaran Biaya (RAB) resminya.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant={isPopular ? "primary" : "outline"}
                        className="w-full gap-2 text-xs font-bold h-11 cursor-pointer"
                      >
                        <span>{pkg.ctaText}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  </div>
                </ScrollStaggerItem>
              );
            })}
          </ScrollStagger>

          <ScrollReveal direction="up" delay={0.1} className="mt-10 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center text-xs text-slate-600 flex flex-wrap items-center justify-center gap-2">
            <span>Memerlukan ruang lingkup fitur khusus di luar paket di atas?</span>
            <Link
              href="/bantuan#konsultasi"
              className="font-bold text-[#1482C2] hover:underline inline-flex items-center gap-1"
            >
              <span>Ajukan Rencana Anggaran Biaya (RAB) Custom</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 5. KEUNTUNGAN & HASIL NYATA BAGI BISNIS ANDA (H2 BENEFIT)          */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200/80 select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1482C2] block mb-2">
              DAMPAK NYATA PADA BISNIS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#233876]">
              Keuntungan Menggunakan Layanan Ini
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Kami tidak sekadar membuat kode, melainkan membangun aset teknologi yang memberikan return on investment (ROI) terukur bagi pertumbuhan perusahaan Anda.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={0.1 + idx * 0.05}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-sm transition-all"
              >
                {benefit.metric && (
                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#1482C2] tracking-tight block">
                      {benefit.metric}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-0.5">
                      {benefit.metricLabel}
                    </span>
                  </div>
                )}
                <h3 className="text-base font-bold text-[#233876] mb-2 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Serah Terima Deliverables */}
          <ScrollReveal direction="up" delay={0.15} className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h3 className="text-sm font-bold text-[#233876] uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#1482C2]" />
              <span>Standar Hasil Serah Terima Resmi (Deliverables):</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-700">
              {service.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1482C2] shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 6. CALL TO ACTION (CTA) TERPADU KOMPONEN SERAGAM DENGAN GAMBAR     */}
      {/* ------------------------------------------------------------------ */}
      <UnifiedCtaBanner
        eyebrow={`KONSULTASI RESMI · ${service.tag}`}
        title={`Siap Mewujudkan Proyek ${service.title} Anda?`}
        description={`Diskusikan rancangan arsitektur, fitur yang dibutuhkan, dan jadwal peluncuran bersama tim engineer kami. Dapatkan estimasi Rencana Anggaran Biaya (RAB) resmi secara transparan.`}
        whatsappMessage={whatsappMessage}
        consultationLink="/kontak"
        consultationButtonText="Ajukan Konsultasi & RAB"
        whatsappButtonText="Chat Tim Engineer"
      />
    </div>
  );
}
