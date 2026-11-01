import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`bg-slate-50 border-b border-slate-200/80 py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 select-none ${className}`}
    >
      <div className="mx-auto max-w-7xl flex items-center gap-1.5 flex-wrap">
        <Link
          href="/"
          className="hover:text-[#1482C2] transition-colors"
        >
          Beranda
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="text-[#233876] font-semibold truncate">
                  {item.title}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#1482C2] transition-colors truncate"
                >
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
