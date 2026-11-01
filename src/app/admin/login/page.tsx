"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { loginAdminAction } from "@/actions/auth.action";
import {
  Mail,
  Lock,
  ArrowRight,
  Loader2,
  AlertCircle,
  Eye,
  EyeOff,
  Shield,
  LockKeyhole,
} from "lucide-react";

export default function AdminLoginPage() {
  // State form kosong & bersih tanpa bocoran kredensial
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMessage("Harap masukkan email dan kata sandi akun resmi Anda.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await loginAdminAction({ email, password });
      if (!res.success) {
        setErrorMessage(res.message);
        setIsLoading(false);
        return;
      }

      // Hard redirect ke /admin agar sesi baru langsung aktif secara bersih
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.href = "/admin";
    } catch {
      setErrorMessage("Terjadi kegagalan jaringan saat menghubungi server keamanan.");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 bg-[#EBF4FA] font-sans overflow-hidden select-none">
      {/* Decorative organic background curves & glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#1482C2]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-[#233876]/10 rounded-full blur-3xl pointer-events-none" />
      <svg
        className="absolute bottom-0 left-0 right-0 w-full opacity-10 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,192L60,186.7C120,181,240,171,360,186.7C480,203,600,245,720,234.7C840,224,960,160,1080,144C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="#1482C2"
        />
      </svg>

      <div className="w-full max-w-md relative z-10">
        {/* Floating White Card */}
        <div className="bg-white rounded-[32px] sm:rounded-[36px] shadow-2xl shadow-[#233876]/10 border border-sky-100 p-6 sm:p-9">
          {/* Brand & Security Header */}
          <div className="text-center mb-7">
            {/* Logo Resmi Bahari Tech di atas Portal Admin */}
            <div className="flex justify-center mb-4">
              <Image
                src="/images/logo/Logo.png"
                alt="CV. Bahari Tech Solution"
                width={190}
                height={55}
                priority
                className="h-11 sm:h-12 w-auto object-contain drop-shadow-xs"
              />
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#233876] tracking-tight">
              Portal <span className="text-[#1482C2]">Admin</span>
            </h1>
          </div>

          {/* Error Alert Box */}
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span className="font-semibold">{errorMessage}</span>
            </div>
          )}

          {/* Secure Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-[#233876] mb-1.5">
                Email Akun Resmi
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@baharitech.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1482C2] focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-[#233876] mb-1.5">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1482C2] focus:bg-white transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#233876] p-1 transition-colors cursor-pointer"
                  title={showPassword ? "Sembunyikan sandi" : "Tampilkan sandi"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-gradient-to-r from-[#1482C2] to-[#233876] hover:from-[#0E6496] hover:to-[#1a2d61] text-white font-bold text-xs sm:text-sm shadow-lg shadow-sky-900/15 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memverifikasi Akses...</span>
                </>
              ) : (
                <>
                  <span>Masuk</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Return to website */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#1482C2] transition-colors"
          >
            <span>Kembali ke Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
