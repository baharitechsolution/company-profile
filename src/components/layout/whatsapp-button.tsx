"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

function WhatsAppIcon({ className = "h-4.5 w-4.5" }: { className?: string }) {
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
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-40 select-none">
      <Link
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi langsung via WhatsApp dengan Konsultan Bahari Tech Solution"
        className="group flex items-center gap-2.5 sm:gap-3.5 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
      >
        {/* Balon Pesan 1 Baris: Lebih Lega, Jelas, & Mengundang Interaksi */}
        <div className="bg-white/95 backdrop-blur-xs px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-[0_10px_28px_rgba(0,0,0,0.1)] border border-slate-150 transition-all duration-300 group-hover:shadow-[0_14px_35px_rgba(0,0,0,0.15)] group-hover:border-sky-300">
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Live Green Online Dot */}
            <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>

            {/* Teks Undangan Utama */}
            <span className="text-[13px] sm:text-[15px] font-bold text-slate-800 tracking-tight whitespace-nowrap">
              Konsultasi disini Yuk
            </span>

            {/* Emoji Lambaian Interaktif */}
            <span className="text-base sm:text-lg inline-block transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
              👋
            </span>
          </div>
        </div>

        {/* 3D Pop-Out Avatar Berukuran Lebih Besar & Tegas */}
        <div className="relative shrink-0 w-20 h-23 sm:w-24 sm:h-28 lg:w-26 lg:h-30">
          {/* Visual Karakter Pop-Out Transparan dengan Bayangan Kedalaman 3D */}
          <div className="relative w-full h-full drop-shadow-[0_12px_24px_rgba(14,116,144,0.32)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_16px_32px_rgba(14,116,144,0.45)]">
            <Image
              src="/images/cs/popout-avatar.png"
              alt="Konsultan CS Bahari Tech Solution"
              fill
              sizes="(max-width: 640px) 90px, (max-width: 1024px) 110px, 120px"
              priority
              className="object-contain object-bottom"
            />
          </div>

          {/* Badge WhatsApp Resmi Lebih Besar & Proporsional */}
          <span
            className="absolute bottom-1 right-0.5 sm:bottom-1.5 sm:right-1 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 rounded-full bg-[#25D366] text-white flex items-center justify-center border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-300"
            aria-hidden="true"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-4.5 lg:w-4.5 text-white" />
          </span>
        </div>
      </Link>
    </div>
  );
}
