"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart2,
  Inbox,
  Users,
  Briefcase,
  Layers,
  Globe,
  LogOut,
  ChevronRight,
  Shield,
} from "lucide-react";
import { logoutAdminAction, getAdminSessionAction } from "@/actions/auth.action";
import { AdminUser } from "@/types/admin";
import { ConfirmModal } from "@/components/ui/confirm-modal";

interface AdminSidebarProps {
  onCloseMobile?: () => void;
  currentUser?: AdminUser | null;
}

export function AdminSidebar({ onCloseMobile, currentUser: initialUser }: AdminSidebarProps) {
  const pathname = usePathname();
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(initialUser || null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      getAdminSessionAction().then((user) => {
        if (user) setCurrentUser(user);
      });
    }
  }, [currentUser]);

  const handleLogout = async () => {
    await logoutAdminAction();
    setIsLogoutModalOpen(false);
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = "/admin/login";
  };

  const navLinks = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: BarChart2,
      active: pathname === "/admin",
    },
    {
      label: "Manajemen Leads",
      href: "/admin/leads",
      icon: Inbox,
      active: pathname === "/admin/leads",
    },
    {
      label: "Manajemen User",
      href: "/admin/users",
      icon: Users,
      active: pathname === "/admin/users",
    },
  ];

  const externalLinks = [
    {
      label: "Katalog Layanan",
      href: "/layanan",
      icon: Layers,
    },
    {
      label: "Portofolio Proyek",
      href: "/portofolio",
      icon: Briefcase,
    },
    {
      label: "Website Utama",
      href: "/#beranda",
      icon: Globe,
    },
  ];

  return (
    <>
      <aside className="w-64 lg:w-72 h-full flex flex-col justify-between p-5 relative overflow-hidden select-none bg-gradient-to-b from-[#1E62A6] via-[#1482C2] to-[#233876] text-white shadow-2xl">
        {/* Decorative organic background curves */}
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-48 h-48 bg-[#233876]/40 rounded-full blur-xl pointer-events-none" />
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-15 pointer-events-none"
          viewBox="0 0 288 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60C50 90 100 20 160 50C220 80 260 30 288 60V180H0V60Z"
            fill="white"
          />
        </svg>

        {/* Top Part: User Profile & Nav Links */}
        <div className="relative z-10 space-y-6">
          {/* User Profile Card */}
          <div className="flex items-center gap-3.5 px-2 pt-2">
            <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/50 backdrop-blur-md flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-sky-950/20 shrink-0">
              {currentUser?.full_name?.charAt(0) || "B"}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-extrabold text-sm text-white truncate tracking-tight">
                {currentUser?.full_name || "Admin Bahari Tech"}
              </h3>
              <p className="text-[11px] text-sky-100/80 truncate font-medium">
                {currentUser?.email || "admin@baharitech.com"}
              </p>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-1.5 pt-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onCloseMobile}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all group ${
                    item.active
                      ? "bg-white text-[#233876] shadow-lg shadow-sky-950/15"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon
                      className={`w-4 h-4 ${
                        item.active ? "text-[#1482C2]" : "text-white/80 group-hover:text-white"
                      }`}
                    />
                    <span className="tracking-wide">{item.label}</span>
                  </div>
                  {!item.active && (
                    <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-80 transition-opacity" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Part: Brand Info & Logout */}
        <div className="relative z-10 pt-4 border-t border-white/15 space-y-3">
          <div className="flex items-center justify-between px-2 text-[11px] text-sky-100/70">
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <Shield className="w-3.5 h-3.5 text-sky-300" />
              <span>CV. Bahari Tech</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/15 text-[10px] font-bold text-white">
              v1.0
            </span>
          </div>

          <button
            onClick={() => setIsLogoutModalOpen(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-rose-500/20 text-white hover:text-rose-200 border border-white/20 hover:border-rose-300/30 text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            <LogOut className="w-4 h-4" />
            <span>Keluar</span>
          </button>
        </div>
      </aside>

      {/* Pop Up Validasi Konfirmasi Keluar (Reusable Partial Component) */}
      <ConfirmModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
        variant="logout"
        title="Konfirmasi Keluar"
        description="Apakah Anda yakin ingin keluar dari halaman admin? Anda harus login kembali untuk mengakses halaman admin."
        confirmText="Ya, Keluar"
        cancelText="Batal"
      />
    </>
  );
}
