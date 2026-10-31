"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

function WhatsAppIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Halo Bahari Tech Solution, saya ingin konsultasi kebutuhan pembuatan website/software."
  );

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-40 select-none">
      <Link
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi langsung via WhatsApp dengan Konsultan Bahari Tech Solution"
        className="group flex items-center gap-2.5 sm:gap-3 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
      >
        {/* Balon Pesan: Bersih, Rapi & Elegan */}
        <div className="relative bg-white/95 backdrop-blur-xs px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.08)] border border-slate-200/90 transition-all duration-300 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] group-hover:border-sky-300">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">
              Online
            </span>
          </div>

          <div className="text-xs sm:text-[13px] font-semibold text-slate-800 tracking-tight whitespace-nowrap flex items-center gap-1">
            <span>Konsultasi disini Yuk</span>
            <span className="inline-block transition-transform duration-300 group-hover:rotate-12">👋</span>
          </div>

          {/* Ekor Balon Menunjuk ke Arah Avatar */}
          <div className="hidden sm:block absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-slate-200/90 rotate-45 group-hover:border-sky-300 transition-colors" />
        </div>

        {/* Lingkaran Avatar Konsultan CS Gen-Z */}
        <div className="relative shrink-0">
          <div className="relative h-13 w-13 sm:h-15 sm:w-15 rounded-full p-0.5 bg-gradient-to-tr from-[#1482C2] via-sky-400 to-sky-200 shadow-[0_6px_20px_rgba(20,130,194,0.35)] transition-shadow duration-300 group-hover:shadow-[0_8px_24px_rgba(20,130,194,0.5)]">
            <div className="relative h-full w-full rounded-full overflow-hidden bg-white border-2 border-white">
              <Image
                src="/images/cs/consultant-avatar.png"
                alt="Konsultan CS Bahari Tech Solution"
                fill
                sizes="(max-width: 640px) 52px, 60px"
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Badge WhatsApp di Sudut Bawah Kanan Avatar */}
          <span
            className="absolute -bottom-0.5 -right-0.5 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#25D366] text-white flex items-center justify-center border-2 border-white shadow-xs group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          >
            <WhatsAppIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
          </span>
        </div>
      </Link>
    </div>
  );
}
