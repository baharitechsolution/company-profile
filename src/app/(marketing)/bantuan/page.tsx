import { FaqSection } from "@/components/sections/faq-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { UnifiedCtaBanner } from "@/components/sections/unified-cta-banner";
import { WhatsAppIcon } from "@/components/shared/icons";
import { getPublishedFaqs } from "@/lib/faqs";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pusat Bantuan & Konsultasi Proyek",
  description:
    "Pusat bantuan resmi CV. Bahari Tech Solution. Temukan jawaban seputar layanan, biaya, garansi, atau diskusikan kebutuhan software dan aplikasi Anda bersama tim engineer kami.",
  keywords: [
    "Pusat Bantuan Bahari Tech Solution",
    "FAQ Jasa Pembuatan Website",
    "FAQ Pembuatan Aplikasi Android iOS",
    "Konsultasi Pembuatan Software Gratis",
    "Biaya Pembuatan Aplikasi Mobile",
    "Estimasi Harga Bikin Web Perusahaan",
    "Jasa Bikin Software Kantor",
    "Kontak Software House Jakarta",
    "Software House Tegal WhatsApp",
    "Jasa Bikin Web Tegal Murah Profesional",
    "Konsultan IT Kota Tegal & Slawi",
    "Vendor Pembuatan Software Kabupaten Tegal",
    "Hire Software Developer Indonesia",
    "Konsultan IT Terpercaya",
  ],
  alternates: {
    canonical: "/bantuan",
  },
  openGraph: {
    title: `Pusat Bantuan & Konsultasi | ${siteConfig.name}`,
    description:
      "Temukan panduan FAQ lengkap dan konsultasikan rancangan sistem digital bisnis Anda bersama tim konsultan resmi kami.",
    url: `${siteConfig.url}/bantuan`,
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
};

export default async function HelpAndContactPage() {
  const faqs = await getPublishedFaqs();

  return (
    <div className="bg-white">
      {/* Standar Breadcrumb Navigasi Seragam */}
      <Breadcrumbs items={[{ title: "Bantuan & FAQ" }]} />

      {/* 1. Header Halaman Bantuan */}
      <div className="pt-10 pb-4 bg-white">
        <ScrollReveal
          direction="up"
          delay={0.05}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="h-0.5 w-5 bg-[#1482C2]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1482C2]">
              PUSAT BANTUAN &amp; FAQ
            </span>
            <span className="h-0.5 w-5 bg-[#1482C2]" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#233876]">
            Ada yang Bisa Kami Bantu?
          </h1>
        </ScrollReveal>
      </div>

      {/* 2. SECTION 1: FAQ LENGKAP */}
      <section id="faq" className="scroll-mt-20">
        <FaqSection
          initialFaqs={faqs}
          showHeader={false}
          bgColor="bg-white"
          bordered={false}
          showOuterBorders={false}
        />
      </section>

      {/* 3. SECTION 2: KONSULTASI & DISKUSI */}
      <section
        id="konsultasi"
        className="py-12 sm:py-16 bg-[#F8FAFC] border-y border-slate-200/80 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#1482C2]">
                KONSULTASI &amp; DISKUSI
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#233876]">
              Wujudkan Transformasi Sistem Digital Anda
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Sampaikan kebutuhan sistem Anda melalui kanal resmi kami. Tim engineer siap membantu memetakan ruang lingkup, timeline, dan estimasi anggaran tanpa komitmen awal.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Kartu Kontak Resmi */}
            <ScrollReveal direction="up" delay={0.1} className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
              <h3 className="text-sm font-bold text-[#233876] uppercase tracking-wider mb-6">
                Kontak Resmi Kantor
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="rounded-lg bg-[#EAF5FC] p-2.5 text-[#1482C2] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 mb-0.5">
                      Alamat Kantor
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="rounded-lg bg-[#EAF5FC] p-2.5 text-[#1482C2] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 mb-0.5">
                      Email Korespondensi
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#1482C2] break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="rounded-lg bg-[#EAF5FC] p-2.5 text-[#1482C2] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 mb-0.5">
                      Telepon / WhatsApp
                    </span>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#1482C2]"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="rounded-lg bg-[#EAF5FC] p-2.5 text-[#1482C2] shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 mb-0.5">
                      Jam Kerja Operasional
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {siteConfig.contact.hours}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Kartu Aksi WhatsApp */}
            <ScrollReveal direction="up" delay={0.15} className="lg:col-span-5 rounded-2xl bg-[#0E6496] p-6 sm:p-8 flex flex-col justify-between text-white shadow-xs">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold leading-snug">
                    Diskusi Cepat via WhatsApp
                  </h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Terhubung langsung dengan Project Lead tanpa menunggu balasan email. Konsultasi awal gratis, respons cepat pada jam kerja.
                </p>
              </div>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech,%20saya%20ingin%20konsultasi%20langsung`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#233876] hover:bg-slate-100 transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                <span>Mulai Chat WhatsApp Resmi</span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section CTA Konsultasi Langsung */}
      <UnifiedCtaBanner
        eyebrow="KONSULTASI TEKNIS LANGSUNG"
        title="Masih Punya Pertanyaan atau Butuh Konsultasi Teknis Khusus?"
        description="Tim engineer dan analis sistem kami siap membantu menjawab pertanyaan Anda, memetakan spesifikasi teknis proyek, serta memberikan kalkulasi Rencana Anggaran Biaya (RAB) resmi secara transparan."
        whatsappMessage="Halo Tim Engineer Bahari Tech Solution, saya membutuhkan bantuan informasi dan konsultasi mengenai kebutuhan proyek software kami."
        consultationLink="#konsultasi"
        consultationButtonText="Hubungi Kantor Kami"
        whatsappButtonText="Chat Tim Engineer"
      />
    </div>
  );
}
