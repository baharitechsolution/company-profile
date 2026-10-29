"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 bg-white border-b",
        isScrolled
          ? "border-slate-200 shadow-2xs"
          : "border-slate-100"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand Logo: Kompak & Tajam */}
        <Link href="/" className="flex items-center group py-1" aria-label={siteConfig.name}>
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
            <Button size="sm" variant="primary" className="h-9 px-4 gap-1.5 text-xs font-bold">
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
              <Link href="/kontak" onClick={() => setIsOpen(false)} className="w-full block">
                <Button className="w-full gap-2 h-10 text-xs font-bold" variant="primary">
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
