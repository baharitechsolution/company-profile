"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { WhatsAppIcon } from "@/components/shared/icons";
import { initialFaqData, faqCategoryOptions } from "@/config/faq";
import { FaqItem } from "@/types/faq";

interface FaqSectionProps {
  initialFaqs?: FaqItem[];
  limit?: number;
  showViewAllButton?: boolean;
  showHeader?: boolean;
  bgColor?: string;
  bordered?: boolean;
  showOuterBorders?: boolean;
}

export function FaqSection({
  initialFaqs = initialFaqData,
  limit,
  showViewAllButton = false,
  showHeader = true,
  bgColor = "bg-[#F8FAFC]",
  bordered = true,
  showOuterBorders = true,
}: FaqSectionProps = {}) {
  const faqs = initialFaqs;
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = React.useMemo(() => {
    let result = faqs;
    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }
    if (limit && limit > 0) {
      result = result.slice(0, limit);
    }
    return result;
  }, [faqs, activeCategory, limit]);

  // Schema.org FAQPage JSON-LD Pertanyaan Lengkap untuk Google SEO Rich Snippet
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const whatsappFaqUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Bahari%20Tech,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20software%20dan%20ada%20pertanyaan%20spesifik.`;

  return (
    <section
      id="faq"
      className={`py-8 sm:py-10 lg:py-12 ${bgColor} ${bordered ? "border-b border-slate-200" : ""} select-none`}
    >
      {/* Schema.org FAQPage Data Terstruktur untuk Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Tengah Standar Industri & Kompak */}
        {showHeader && (
          <ScrollReveal direction="up" delay={0.05} className="text-center max-w-2xl mx-auto space-y-1.5 mb-4 sm:mb-5">
            <div className="inline-flex items-center justify-center gap-2">
              <span className="h-0.5 w-5 bg-[#1482C2]" />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#1482C2]">
                Tanya Jawab &amp; Panduan Kerjasama
              </span>
              <span className="h-0.5 w-5 bg-[#1482C2]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-slate-900 tracking-tight leading-tight">
              Pertanyaan yang Sering Diajukan
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Temukan jawaban transparan seputar estimasi biaya, alur rekayasa, kepemilikan source code 100%, hingga garansi resmi kami.
            </p>
          </ScrollReveal>
        )}

        {/* Tab Kategori Horizontal Simpel & Bersih */}
        <ScrollReveal direction="up" delay={0.1} className="flex flex-wrap items-center justify-center gap-1.5 mb-5 sm:mb-6">
          {faqCategoryOptions.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-2xs"
                    : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Accordion List Terpadu Bergaris Pembatas */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className={`divide-y divide-slate-200/90 ${showOuterBorders ? "border-y border-slate-200/90" : ""}`}>
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div key={faq.id} className="transition-colors">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full py-4 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-hidden group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span
                    className={`text-sm sm:text-[15px] font-medium leading-snug transition-colors ${
                      isOpen ? "text-sky-600" : "text-slate-900 group-hover:text-sky-600"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-0.5 sm:mt-0 ${
                      isOpen
                        ? "bg-slate-900 text-white rotate-180"
                        : "bg-slate-100 text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    <ChevronDown className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </button>

                {/* Konten Jawaban */}
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="pb-4 pt-0.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </ScrollReveal>

        {/* Tombol Lihat Semua Pertanyaan jika dibatasi di Home */}
        {showViewAllButton && (
          <ScrollReveal direction="up" delay={0.18} className="mt-6 text-center">
            <Link
              href="/bantuan#faq"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
            >
              <span>Lihat Seluruh Pertanyaan &amp; Bantuan</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}
