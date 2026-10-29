import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Halo Bahari Tech Solution, saya ingin konsultasi kebutuhan pembuatan software/aplikasi."
  );

  return (
    <Link
      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-white shadow-md hover:bg-[#20ba59] transition-all hover:scale-105 focus:outline-none cursor-pointer"
    >
      <Image
        src="/images/Icon/icon whatsapp.png"
        alt="WhatsApp Bahari Tech"
        width={24}
        height={24}
        className="h-5 w-5 object-contain"
      />
      <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
        WhatsApp Konsultan
      </span>
    </Link>
  );
}