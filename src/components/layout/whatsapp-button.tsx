import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Halo Bahari Tech Solution, saya ingin konsultasi kebutuhan pembuatan software/aplikasi."
  );

  return (
    <div className="fixed bottom-8 sm:bottom-10 lg:bottom-12 right-5 sm:right-7 lg:right-8 z-40 flex items-center">
      <Link
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi Langsung via WhatsApp CV. Bahari Tech Solution"
        className="group relative flex items-center justify-center transition-all duration-300 ease-out hover:scale-108 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 rounded-full"
      >
        {/* Subtle Online Pulse Indicator */}
        <span
          className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5 z-10 pointer-events-none"
          aria-hidden="true"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow-xs" />
        </span>

        {/* WhatsApp Official Logo with Crisp Ambient Shadow */}
        <Image
          src="/images/Icon/icon whatsapp.png"
          alt="WhatsApp CV. Bahari Tech Solution"
          width={64}
          height={64}
          priority
          quality={100}
          className="h-12 w-12 sm:h-14 sm:w-14 object-contain filter drop-shadow-[0_6px_16px_rgba(17,34,82,0.16)] group-hover:drop-shadow-[0_10px_22px_rgba(37,211,102,0.45)] transition-all duration-300"
        />

        {/* Floating Tooltip (Hanya Muncul saat Hover di Layar Komputer / Desktop) */}
        <span
          role="tooltip"
          className="pointer-events-none absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 hidden md:inline-flex items-center px-3 py-1.5 rounded-lg bg-[#112252] text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-slate-700/80 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out"
        >
          Konsultasi WhatsApp
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-[#112252]" />
        </span>
      </Link>
    </div>
  );
}
