"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Monitor,
  Smartphone,
  Layers,
  Server,
  Code2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DropdownServiceItem {
  title: string;
  desc: string;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const dropdownServices: DropdownServiceItem[] = [
  {
    title: "Website & Web App",
    desc: "Website profil, web app, & portal modern",
    href: "/layanan#web-development",
    icon: Monitor,
  },
  {
    title: "Aplikasi Mobile",
    desc: "Aplikasi Android & iOS performa tinggi",
    href: "/layanan#mobile-app-development",
    icon: Smartphone,
  },
  {
    title: "Sistem ERP & Bisnis",
    desc: "Digitalisasi stok, cabang, & keuangan",
    href: "/layanan#enterprise-system-erp",
    icon: Layers,
  },
  {
    title: "Cloud & Infrastruktur",
    desc: "Server andal, aman, & uptime 99.98%",
    href: "/layanan#cloud-devops-infrastructure",
    icon: Server,
  },
];

const customService = {
  title: "Pesanan Khusus",
  desc: "Custom website & sistem digital bisnis",
  href: "/kontak?layanan=Pesanan+Khusus",
  icon: Code2,
};

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setIsServicesOpen(false);
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside & escape key
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const isServicesActive = pathname.startsWith("/layanan");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 bg-white border-b",
        isScrolled ? "border-slate-200 shadow-2xs" : "border-slate-100"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand Logo: Kompak & Tajam */}
        <Link
          href="/"
          className="flex items-center group py-1"
          aria-label={siteConfig.name}
        >
          <Image
            src="/images/logo/Logo.png"
            alt={siteConfig.name}
            width={160}
            height={46}
            priority
            quality={100}
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-0.5">
          {mainNav.map((item) => {
            if (item.href === "/layanan") {
              return (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/layanan"
                    className={cn(
                      "px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors inline-flex items-center gap-1.5 group",
                      isServicesActive || isServicesOpen
                        ? "text-[#1482C2] bg-[#EAF5FC]"
                        : "text-slate-700 hover:text-[#1482C2] hover:bg-slate-50"
                    )}
                    aria-expanded={isServicesOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        isServicesOpen
                          ? "rotate-180 text-[#1482C2]"
                          : "text-slate-400 group-hover:text-[#1482C2]"
                      )}
                    />
                  </Link>

                  {/* Dropdown Menu Korporat Bersih (Bebas Klise AI & Bebas Ikon Bintang) */}
                  {isServicesOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in-0 zoom-in-95 duration-150"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-[340px] p-2 bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(17,34,82,0.16)] select-none">
                        <div className="space-y-1">
                          {dropdownServices.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={idx}
                                href={service.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                              >
                                {/* Wadah Ikon Elegan & Bersih (Gaya Stripe/Linear - Bukan Kotak Balon AI) */}
                                <div className="h-9 w-9 rounded-lg bg-slate-100 text-slate-700 group-hover/item:bg-[#1482C2] group-hover/item:text-white transition-all duration-150 flex items-center justify-center shrink-0">
                                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                                </div>

                                {/* Judul Ringkas & Deskripsi Alami */}
                                <div className="min-w-0 flex-1">
                                  <div className="text-[13px] font-bold text-[#112252] group-hover/item:text-[#1482C2] transition-colors leading-tight">
                                    {service.title}
                                  </div>
                                  <div className="text-[11px] text-slate-500 leading-snug mt-0.5 truncate">
                                    {service.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}

                          {/* Kartu Khusus: Pesanan Khusus (Ikon Code2 Rekayasa Software, Bebas Ikon Bintang AI) */}
                          <Link
                            href={customService.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 hover:bg-[#EAF5FC] border border-slate-200/90 hover:border-[#1482C2]/40 transition-all group/custom mt-1.5"
                          >
                            <div className="h-9 w-9 rounded-lg bg-[#112252] group-hover/custom:bg-[#1482C2] text-white flex items-center justify-center shrink-0 shadow-2xs transition-colors duration-150">
                              <Code2 className="h-4.5 w-4.5" strokeWidth={2} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-[13px] font-bold text-[#112252] group-hover/custom:text-[#1482C2] transition-colors leading-tight">
                                {customService.title}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-snug mt-0.5 truncate">
                                {customService.desc}
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-400 group-hover/custom:text-[#1482C2] group-hover/custom:translate-x-0.5 transition-all ml-auto shrink-0" />
                          </Link>
                        </div>

                        {/* Footer Bawah Bersih: Tautan Katalog */}
                        <div className="pt-2 mt-1.5 border-t border-slate-100 flex items-center justify-center px-2">
                          <Link
                            href="/layanan"
                            onClick={() => setIsServicesOpen(false)}
                            className="text-[11px] font-bold text-[#1482C2] hover:text-[#112252] transition-colors flex items-center gap-1.5 py-0.5"
                          >
                            <span>Lihat Seluruh Katalog Layanan</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-colors",
                  isActive
                    ? "text-[#1482C2] bg-[#EAF5FC]"
                    : "text-slate-700 hover:text-[#1482C2] hover:bg-slate-50"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/kontak">
            <Button
              size="sm"
              variant="primary"
              className="h-9 px-4 gap-1.5 text-xs font-bold"
            >
              <span>Konsultasi Proyek</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-5">
          <div className="flex flex-col space-y-1">
            {mainNav.map((item) => {
              if (item.href === "/layanan") {
                return (
                  <div key={item.href} className="space-y-1">
                    <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
                      <Link
                        href="/layanan"
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex-1",
                          isServicesActive && "text-[#1482C2] font-bold"
                        )}
                      >
                        {item.title}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setIsMobileServicesOpen(!isMobileServicesOpen)
                        }
                        className="p-1 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-200/60"
                        aria-label="Toggle sub layanan"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isMobileServicesOpen &&
                              "rotate-180 text-[#1482C2]"
                          )}
                        />
                      </button>
                    </div>

                    {/* Sub-menu Mobile Terbuka */}
                    {isMobileServicesOpen && (
                      <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-[#1482C2]/30 ml-3.5 my-1">
                        {dropdownServices.map((service, sIdx) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={sIdx}
                              href={service.href}
                              onClick={() => {
                                setIsOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                            >
                              <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                                <Icon className="h-4 w-4" strokeWidth={1.75} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-bold text-[#112252] truncate">
                                  {service.title}
                                </div>
                                <div className="text-[10px] text-slate-500 truncate">
                                  {service.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}

                        {/* Pesanan Khusus di Mobile (Code2 Icon) */}
                        <Link
                          href={customService.href}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200 transition-colors mt-1"
                        >
                          <div className="h-8 w-8 rounded-lg bg-[#112252] text-white flex items-center justify-center shrink-0">
                            <Code2 className="h-4 w-4" strokeWidth={2} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-bold text-[#112252] truncate">
                              {customService.title}
                            </div>
                            <div className="text-[10px] text-slate-600 truncate">
                              {customService.desc}
                            </div>
                          </div>
                          <ArrowRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-[#EAF5FC] text-[#1482C2]"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/kontak"
                onClick={() => setIsOpen(false)}
                className="w-full block"
              >
                <Button
                  className="w-full gap-2 h-10 text-xs font-bold"
                  variant="primary"
                >
                  <span>Konsultasi Proyek</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
