"use client";

import React from "react";
import { Menu } from "lucide-react";
import { AdminUser } from "@/types/admin";

interface AdminHeaderProps {
  onToggleMobileMenu: () => void;
  currentUser?: AdminUser | null;
  title?: string;
}

export function AdminHeader({
  onToggleMobileMenu,
}: AdminHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-slate-100/80">
      {/* Left: Mobile Menu */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#233876] transition-colors cursor-pointer"
          title="Buka Menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
