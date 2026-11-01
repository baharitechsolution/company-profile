"use client";

import React, { useState, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

export interface AdminSearchBarProps {
  placeholder?: string;
  defaultValue?: string;
  paramName?: string;
  onSearch?: (query: string) => void;
  onReset?: () => void;
  className?: string;
  autoFocus?: boolean;
  buttonText?: string;
  resetText?: string;
}

function SearchBarInner({
  placeholder = "Cari data...",
  defaultValue = "",
  paramName = "search",
  onSearch,
  onReset,
  className = "",
  autoFocus = false,
  buttonText = "Cari",
  resetText = "Reset",
}: AdminSearchBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlQuery = searchParams ? searchParams.get(paramName) ?? defaultValue : defaultValue;
  const [prevUrlQuery, setPrevUrlQuery] = useState(urlQuery);
  const [query, setQuery] = useState(urlQuery);

  // Sync state jika URL berubah tanpa cascading effect
  if (prevUrlQuery !== urlQuery) {
    setPrevUrlQuery(urlQuery);
    setQuery(urlQuery);
  }

  const executeSearch = (searchQuery: string) => {
    const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
    const trimmed = searchQuery.trim();

    if (trimmed) {
      params.set(paramName, trimmed);
    } else {
      params.delete(paramName);
    }

    const newQueryString = params.toString();
    const targetUrl = newQueryString ? `${pathname}?${newQueryString}` : pathname;

    router.replace(targetUrl, { scroll: false });
    if (onSearch) {
      onSearch(trimmed);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    executeSearch(query);
  };

  const handleReset = () => {
    setQuery("");
    const params = new URLSearchParams(searchParams ? searchParams.toString() : "");
    params.delete(paramName);

    const newQueryString = params.toString();
    const targetUrl = newQueryString ? `${pathname}?${newQueryString}` : pathname;

    router.replace(targetUrl, { scroll: false });

    if (onReset) {
      onReset();
    }
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <form
      method="GET"
      action={pathname}
      onSubmit={handleSubmit}
      className={`flex items-center gap-2 ${className}`}
    >
      {/* Kolom Input Pencarian */}
      <div className="relative flex-1 min-w-0">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          name={paramName}
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 text-xs sm:text-sm text-[#233876] placeholder-slate-400 font-medium focus:outline-none focus:border-[#1482C2] focus:bg-white focus:ring-2 focus:ring-[#1482C2]/15 transition-all shadow-2xs"
        />
      </div>

      {/* Tombol Cari */}
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#233876] to-[#1482C2] hover:from-[#1E3064] hover:to-[#0E6496] text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-500/15 active:scale-[0.98] transition-all cursor-pointer shrink-0"
      >
        <span>{buttonText}</span>
      </button>

      {/* Tombol Reset */}
      <button
        type="button"
        onClick={handleReset}
        title="Reset Pencarian"
        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 font-bold text-xs sm:text-sm active:scale-[0.98] transition-all cursor-pointer shrink-0"
      >
        <span className="hidden sm:inline">{resetText}</span>
      </button>
    </form>
  );
}

export function AdminSearchBar(props: AdminSearchBarProps) {
  return (
    <Suspense
      fallback={
        <div className={`flex items-center gap-2 ${props.className || ""}`}>
          <div className="relative flex-1 min-w-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              disabled
              placeholder={props.placeholder || "Memuat pencarian..."}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 text-xs sm:text-sm opacity-60"
            />
          </div>
          <button
            disabled
            className="px-4 py-2.5 rounded-2xl bg-[#1482C2] text-white font-bold text-xs sm:text-sm opacity-60"
          >
            Cari
          </button>
        </div>
      }
    >
      <SearchBarInner {...props} />
    </Suspense>
  );
}
