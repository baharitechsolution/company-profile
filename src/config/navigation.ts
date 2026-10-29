import { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { title: "Beranda", href: "/" },
  { title: "Tentang Kami", href: "/tentang-kami" },
  { title: "Layanan", href: "/layanan" },
  { title: "Portofolio", href: "/portofolio" },
  { title: "Kontak", href: "/kontak" },
];

export const footerNav = {
  solutions: [
    { title: "Custom Web Application", href: "/layanan" },
    { title: "Mobile App Development", href: "/layanan" },
    { title: "Enterprise ERP & CRM", href: "/layanan" },
    { title: "Cloud & DevOps Architecture", href: "/layanan" },
    { title: "AI & System Automation", href: "/layanan" },
  ],
  company: [
    { title: "Tentang Kami", href: "/tentang-kami" },
    { title: "Portofolio & Studi Kasus", href: "/portofolio" },
    { title: "FAQ (Tanya Jawab)", href: "/#faq" },
    { title: "Karir", href: "/kontak" },
    { title: "Hubungi Kami", href: "/kontak" },
  ],
  legal: [
    { title: "Kebijakan Privasi", href: "#" },
    { title: "Syarat & Ketentuan", href: "#" },
  ],
};

