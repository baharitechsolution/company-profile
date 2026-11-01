"use client";

import React, { useState } from "react";
import { Loader2, Inbox, ChevronLeft, ChevronRight } from "lucide-react";

export interface TableColumn<T> {
  key: string;
  header: React.ReactNode;
  render?: (item: T, index: number) => React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  headerClassName?: string;
}

export interface AdminDataTableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor: (item: T, index: number) => string | number;
  isLoading?: boolean;
  loadingMessage?: string;
  emptyMessage?: string;
  emptySubMessage?: string;
  emptyIcon?: React.ReactNode;
  onRowClick?: (item: T) => void;
  className?: string;
  pageSize?: number;
  showPagination?: boolean;
}

// 1. Primitive Compound Components untuk fleksibilitas maksimal
export function AdminTableContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm ${className}`}
    >
      <div className="overflow-x-auto">{children}</div>
    </div>
  );
}

export function AdminTableHeader({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-slate-50/70 border-b border-slate-100 text-slate-400 uppercase text-[10px] tracking-wider font-bold">
      {children}
    </thead>
  );
}

export function AdminTableHeaderCell({
  children,
  align = "left",
  className = "",
}: {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}) {
  const alignClass =
    align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left";
  return (
    <th className={`py-4 px-5 font-bold ${alignClass} ${className}`}>{children}</th>
  );
}

export function AdminTableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-slate-100 text-xs">{children}</tbody>;
}

export function AdminTableRow({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <tr
      onClick={onClick}
      className={`hover:bg-slate-50/80 transition-colors ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </tr>
  );
}

export function AdminTableCell({
  children,
  align = "left",
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const alignClass =
    align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left";
  return (
    <td onClick={onClick} className={`py-4 px-5 ${alignClass} ${className}`}>
      {children}
    </td>
  );
}

export function AdminTableLoading({
  colSpan,
  message = "Memuat data...",
}: {
  colSpan?: number;
  message?: string;
}) {
  return (
    <tr>
      <td colSpan={colSpan || 10} className="py-20 text-center text-xs text-slate-400">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <Loader2 className="w-6 h-6 animate-spin text-[#1482C2]" />
          <span className="font-medium">{message}</span>
        </div>
      </td>
    </tr>
  );
}

export function AdminTableEmpty({
  colSpan,
  message = "Tidak ada data yang ditemukan.",
  subMessage,
  icon,
}: {
  colSpan?: number;
  message?: string;
  subMessage?: string;
  icon?: React.ReactNode;
}) {
  return (
    <tr>
      <td colSpan={colSpan || 10} className="py-16 text-center text-slate-400">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mb-1">
            {icon || <Inbox className="w-6 h-6" />}
          </div>
          <p className="text-xs font-bold text-[#233876]">{message}</p>
          {subMessage && (
            <p className="text-[11px] text-slate-400 max-w-sm">{subMessage}</p>
          )}
        </div>
      </td>
    </tr>
  );
}

// 2. Reusable Pagination Footer Component
export function AdminTablePagination({
  currentPage,
  totalPages,
  totalItems,
  startIndex,
  endIndex,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
}) {
  // Generate page numbers with smart ellipsis
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="px-5 py-3.5 border-t border-slate-100 bg-[#FBFDFF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs select-none">
      {/* Keterangan Data */}
      <div className="text-slate-500 font-medium">
        Menampilkan{" "}
        <span className="font-bold text-[#233876]">{totalItems > 0 ? startIndex + 1 : 0}</span>
        {" - "}
        <span className="font-bold text-[#233876]">{endIndex}</span> dari{" "}
        <span className="font-bold text-[#233876]">{totalItems}</span> total data
      </div>

      {/* Kontrol Navigasi Halaman */}
      <div className="flex items-center gap-1.5">
        {/* Tombol Sebelumnya */}
        <button
          type="button"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-[#233876] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
          title="Halaman Sebelumnya"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Nomor Halaman */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((p, idx) => {
            if (p === "...") {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="px-2 py-1 text-slate-400 font-bold text-xs"
                >
                  ...
                </span>
              );
            }

            const pageNum = p as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                type="button"
                onClick={() => onPageChange(pageNum)}
                className={`min-w-8 h-8 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                  isActive
                    ? "bg-[#233876] text-white shadow-xs scale-105"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-[#233876]"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {/* Tombol Berikutnya */}
        <button
          type="button"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-[#233876] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
          title="Halaman Berikutnya"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

// 3. High-Level Data Table Component (Data-Driven Template dengan Pagination)
export function AdminDataTable<T>({
  columns,
  data,
  keyExtractor,
  isLoading = false,
  loadingMessage = "Memuat data tabel...",
  emptyMessage = "Tidak ada data yang ditemukan.",
  emptySubMessage = "Coba ubah kata kunci pencarian atau sesuaikan filter.",
  emptyIcon,
  onRowClick,
  className = "",
  pageSize = 10,
  showPagination = true,
}: AdminDataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when data or filter changes
  const totalItems = data.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // Sync / clamp page if out of bounds (React 19 pattern without useEffect)
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages);
  }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div
      className={`bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <AdminTableHeader>
            <tr>
              {columns.map((col) => (
                <AdminTableHeaderCell
                  key={col.key}
                  align={col.align}
                  className={col.headerClassName}
                >
                  {col.header}
                </AdminTableHeaderCell>
              ))}
            </tr>
          </AdminTableHeader>

          <AdminTableBody>
            {isLoading ? (
              <AdminTableLoading colSpan={columns.length} message={loadingMessage} />
            ) : data.length === 0 ? (
              <AdminTableEmpty
                colSpan={columns.length}
                message={emptyMessage}
                subMessage={emptySubMessage}
                icon={emptyIcon}
              />
            ) : (
              paginatedData.map((item, index) => (
                <AdminTableRow
                  key={keyExtractor(item, startIndex + index)}
                  onClick={onRowClick ? () => onRowClick(item) : undefined}
                  className={onRowClick ? "cursor-pointer group" : ""}
                >
                  {columns.map((col) => {
                    const content = col.render
                      ? col.render(item, startIndex + index)
                      : ((item as Record<string, unknown>)[col.key] as React.ReactNode);

                    return (
                      <AdminTableCell
                        key={col.key}
                        align={col.align}
                        className={col.className}
                      >
                        {content}
                      </AdminTableCell>
                    );
                  })}
                </AdminTableRow>
              ))
            )}
          </AdminTableBody>
        </table>
      </div>

      {/* Pagination Footer */}
      {showPagination && !isLoading && data.length > 0 && (
        <AdminTablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          startIndex={startIndex}
          endIndex={endIndex}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}
