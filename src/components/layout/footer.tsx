import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#233876] text-slate-300 border-t border-slate-800 relative z-10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-12 sm:pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Corporate Identity & Legal Stature (4 Cols on LG) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block"
              aria-label={siteConfig.name}
            >
              <Image
                src="/images/logo/logo-white.png"
                alt={siteConfig.name}
                width={170}
                height={48}
                priority
                quality={100}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <div className="space-y-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#0EB8D8]">
                {siteConfig.name}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Software House & Enterprise Technology Consultant. Kami merancang, membangun, dan mengamankan ekosistem aplikasi web, mobile, serta infrastruktur cloud dengan standar rekayasa kelas dunia.
              </p>
            </div>

            {/* Social Connect Icons */}
            <div className="pt-2 flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <Link
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Bahari Tech Solution"
                className="h-8 w-8 rounded-lg bg-[#162A62] border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1482C2] hover:bg-[#1482C2] transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Bahari Tech Solution"
                className="h-8 w-8 rounded-lg bg-[#162A62] border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1482C2] hover:bg-[#1482C2] transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </Link>
              <Link
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Bahari Tech Solution"
                className="h-8 w-8 rounded-lg bg-[#162A62] border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1482C2] hover:bg-[#1482C2] transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Bahari Tech Solution"
                className="h-8 w-8 rounded-lg bg-[#162A62] border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1482C2] hover:bg-[#1482C2] transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Bahari Tech Solution"
                className="h-8 w-8 rounded-lg bg-[#162A62] border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1482C2] hover:bg-[#1482C2] transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                </svg>
              </Link>
              <Link
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Bahari Tech Solution"
                className="h-8 w-8 rounded-lg bg-[#162A62] border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#1482C2] hover:bg-[#1482C2] transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Col 2: Layanan Solusi (2 Cols on LG) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-700/60 inline-block">
              Layanan Solusi
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/layanan#web-development"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Custom Web Application
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#mobile-app-development"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#enterprise-system-erp"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Enterprise ERP &amp; CRM
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#cloud-devops-infrastructure"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Cloud &amp; DevOps Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#ai-data-automation"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  AI &amp; Smart Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#it-consulting-audit"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  IT Strategic Consulting &amp; Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Standar & Jaminan (2 Cols on LG) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-700/60 inline-block">
              Standar &amp; Jaminan
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/#mengapa-kami"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Standar Keamanan OWASP
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  100% Hak Milik Source Code
                </Link>
              </li>
              <li>
                <Link
                  href="/#mengapa-kami"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  SLA Uptime Server 99.98%
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Garansi Bebas Bug Resmi
                </Link>
              </li>
              <li>
                <Link
                  href="/#mengapa-kami"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Arsitektur Bersih &amp; Teruji
                </Link>
              </li>
              <li>
                <Link
                  href="/#mengapa-kami"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Metodologi Agile &amp; Scrum
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Perusahaan (2 Cols on LG) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-700/60 inline-block">
              Perusahaan
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/portofolio"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Portofolio & Studi Kasus
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  FAQ & Panduan Kerjasama
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Karir & Engineering</span>
                  <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-slate-300 hover:text-white transition-colors block"
                >
                  Hubungi Tim Arsitek
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak & Helpdesk Konsultasi (2 Cols on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-slate-700/60 inline-block">
              Kantor & Kontak
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#0EB8D8] shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-[#0EB8D8] shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#0EB8D8] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#0EB8D8] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-xs text-slate-400 text-center md:text-left">
            © {currentYear} {siteConfig.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>

          <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 text-xs text-slate-400">
            <Link href="/kontak" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/kontak" className="hover:text-white transition-colors">
              Syarat &amp; Ketentuan
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/kontak" className="hover:text-white transition-colors">
              Perjanjian Kerahasiaan (NDA)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
