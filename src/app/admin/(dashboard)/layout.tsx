"use client";

import React, { useState, useEffect } from "react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { getAdminSessionAction } from "@/actions/auth.action";
import { AdminUser } from "@/types/admin";
import { X } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    getAdminSessionAction().then((user) => {
      if (user) setCurrentUser(user);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#EBF3FA] flex p-2 sm:p-4 lg:p-5 gap-3 sm:gap-4 lg:gap-5 font-sans overflow-hidden">
      {/* Desktop Sidebar (Left side, matching reference image) */}
      <div className="hidden lg:block shrink-0 rounded-[28px] overflow-hidden shadow-xl shadow-sky-900/10">
        <AdminSidebar currentUser={currentUser} />
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-sky-950/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full flex">
          <AdminSidebar
            onCloseMobile={() => setMobileMenuOpen(false)}
            currentUser={currentUser}
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 -right-12 p-2.5 rounded-2xl bg-white shadow-lg text-[#233876]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Floating White Main Container (Matching reference image) */}
      <main className="flex-1 bg-white rounded-[26px] sm:rounded-[32px] shadow-2xl shadow-sky-950/5 border border-sky-100/70 p-4 sm:p-6 lg:p-8 flex flex-col h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] lg:h-[calc(100vh-2.5rem)] overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <AdminHeader
          onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          currentUser={currentUser}
        />
        <div className="flex-1 space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}
