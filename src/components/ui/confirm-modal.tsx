"use client";

import React, { useEffect, useState } from "react";
import {
  AlertTriangle,
  Info,
  CheckCircle2,
  LogOut,
  Trash2,
  X,
  Loader2,
} from "lucide-react";

export type ConfirmVariant = "danger" | "warning" | "info" | "success" | "logout";

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title?: string;
  description?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: ConfirmVariant;
  isLoading?: boolean;
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Konfirmasi Tindakan",
  description,
  message,
  confirmText = "Lanjutkan",
  cancelText = "Batal",
  variant = "warning",
  isLoading = false,
}: ConfirmModalProps) {
  const modalDescription = description || message || "Apakah Anda yakin ingin melanjutkan tindakan ini?";
  const [internalLoading, setInternalLoading] = useState(false);

  // Tutup dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isLoading && !internalLoading) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isLoading, internalLoading, onClose]);

  if (!isOpen) return null;

  const handleConfirmClick = async () => {
    try {
      setInternalLoading(true);
      await onConfirm();
    } finally {
      setInternalLoading(false);
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "logout":
        return {
          icon: <LogOut className="w-6 h-6 text-rose-500" />,
          iconBg: "bg-rose-50 border-rose-100",
          confirmBtn:
            "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/20",
          accentColor: "text-rose-600",
        };
      case "danger":
        return {
          icon: <Trash2 className="w-6 h-6 text-rose-500" />,
          iconBg: "bg-rose-50 border-rose-100",
          confirmBtn:
            "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/20",
          accentColor: "text-rose-600",
        };
      case "info":
        return {
          icon: <Info className="w-6 h-6 text-[#1482C2]" />,
          iconBg: "bg-sky-50 border-sky-100",
          confirmBtn:
            "bg-[#1482C2] hover:bg-[#0E6496] text-white shadow-sky-500/20",
          accentColor: "text-[#1482C2]",
        };
      case "success":
        return {
          icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
          iconBg: "bg-emerald-50 border-emerald-100",
          confirmBtn:
            "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20",
          accentColor: "text-emerald-600",
        };
      case "warning":
      default:
        return {
          icon: <AlertTriangle className="w-6 h-6 text-amber-500" />,
          iconBg: "bg-amber-50 border-amber-100",
          confirmBtn:
            "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20",
          accentColor: "text-amber-600",
        };
    }
  };

  const config = getVariantStyles();
  const loadingState = isLoading || internalLoading;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={loadingState ? undefined : onClose}
        className="fixed inset-0 bg-[#233876]/40 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative bg-white border border-slate-100 rounded-[28px] sm:rounded-[32px] w-full max-w-md shadow-2xl p-6 sm:p-7 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={loadingState}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-2xl hover:bg-slate-100 transition-colors disabled:opacity-40"
          title="Tutup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Circular Icon with gentle glow */}
          <div
            className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-4 shadow-sm ${config.iconBg}`}
          >
            {config.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-black text-[#233876] tracking-tight mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 px-2">
            {modalDescription}
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <button
              type="button"
              disabled={loadingState}
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-all disabled:opacity-50 cursor-pointer"
            >
              {cancelText}
            </button>

            <button
              type="button"
              disabled={loadingState}
              onClick={handleConfirmClick}
              className={`w-full py-2.5 px-4 rounded-2xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${config.confirmBtn}`}
            >
              {loadingState ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memproses...</span>
                </>
              ) : (
                <span>{confirmText}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

