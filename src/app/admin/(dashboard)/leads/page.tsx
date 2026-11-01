"use client";

import React, { useState, useEffect } from "react";
import {
  getLeadsAction,
  updateLeadStatusAction,
  deleteLeadAction,
} from "@/actions/leads.action";
import { Lead, LeadStatus } from "@/types/admin";
import { ConfirmModal } from "@/components/ui/confirm-modal";
import {
  Search,
  Filter,
  MessageSquare,
  Building,
  Phone,
  Mail,
  Trash2,
  X,
  Send,
  Loader2,
  CheckCircle,
  ExternalLink,
  Edit3,
} from "lucide-react";

const STATUS_OPTIONS: { label: string; value: LeadStatus | "ALL" }[] = [
  { label: "Semua", value: "ALL" },
  { label: "Baru", value: "NEW" },
  { label: "Dihubungi", value: "CONTACTED" },
  { label: "Diskusi", value: "IN_DISCUSSION" },
  { label: "Deal (Closing)", value: "DEAL" },
  { label: "Ditolak", value: "REJECTED" },
  { label: "Arsip", value: "ARCHIVED" },
];

export default function LeadsManagementPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<LeadStatus | "ALL">("ALL");

  // State Modal Detail
  const [activeLead, setActiveLead] = useState<Lead | null>(null);
  const [modalNotes, setModalNotes] = useState("");
  const [modalStatus, setModalStatus] = useState<LeadStatus>("NEW");
  const [isUpdating, setIsUpdating] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [leadToDelete, setLeadToDelete] = useState<string | null>(null);

  const loadLeads = async () => {
    setLoading(true);
    try {
      const data = await getLeadsAction({
        status: selectedStatus,
        search: search.trim() || undefined,
      });
      setLeads(data);
    } catch (err) {
      console.error("Gagal mengambil daftar leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    getLeadsAction({
      status: selectedStatus,
    }).then((data) => {
      if (!ignore) {
        setLeads(data);
        setLoading(false);
      }
    });
    return () => {
      ignore = true;
    };
  }, [selectedStatus]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loadLeads();
  };

  const openLeadDetail = (lead: Lead) => {
    setActiveLead(lead);
    setModalStatus(lead.status);
    setModalNotes(lead.notes || "");
    setFeedbackMessage(null);
  };

  const handleUpdateStatusAndNotes = async () => {
    if (!activeLead) return;
    setIsUpdating(true);
    setFeedbackMessage(null);

    const res = await updateLeadStatusAction(activeLead.id, modalStatus, modalNotes);
    setIsUpdating(false);

    if (res.success && res.data) {
      setFeedbackMessage("Data prospek berhasil diperbarui.");
      setActiveLead(res.data);
      setLeads((prev) =>
        prev.map((l) => (l.id === res.data!.id ? res.data! : l))
      );
    } else {
      setFeedbackMessage(res.message || "Gagal memperbarui status.");
    }
  };

  const handleDeleteLead = async (id: string) => {
    const res = await deleteLeadAction(id);
    if (res.success) {
      setLeads((prev) => prev.filter((l) => l.id !== id));
      if (activeLead?.id === id) {
        setActiveLead(null);
      }
    } else {
      alert("Gagal menghapus: " + res.message);
    }
  };

  const formatWhatsAppUrl = (phone: string, name: string, service: string) => {
    let cleanPhone = phone.replace(/[^0-9]/g, "");
    if (cleanPhone.startsWith("0")) {
      cleanPhone = "62" + cleanPhone.slice(1);
    }
    const text = encodeURIComponent(
      `Halo Bapak/Ibu ${name}, terima kasih telah menghubungi CV. Bahari Tech Solution terkait kebutuhan "${service}". Kapan waktu yang tepat bagi kami untuk menjadwalkan sesi diskusi teknis?`
    );
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "NEW":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 border border-amber-200">
            BARU
          </span>
        );
      case "IN_DISCUSSION":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-sky-50 text-[#1482C2] border border-sky-200">
            DISKUSI
          </span>
        );
      case "DEAL":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
            DEAL
          </span>
        );
      case "CONTACTED":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-600 border border-indigo-200">
            DIHUBUNGI
          </span>
        );
      case "REJECTED":
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-200">
            DITOLAK
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-[#233876] tracking-tight">
            Manajemen Leads & Permohonan Proyek
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Daftar permohonan konsultasi masuk dari calon klien Bahari Tech Solution.
          </p>
        </div>
        <div className="text-xs font-bold px-3.5 py-2 rounded-2xl bg-white border border-slate-200 text-[#233876] shadow-sm self-start sm:self-auto flex items-center gap-2">
          <span className="text-slate-400">Total Prospek:</span>
          <span className="text-[#1482C2] font-black">{leads.length}</span>
        </div>
      </div>

      {/* Filter and Search Box */}
      <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm space-y-4">
        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="flex gap-2.5">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari berdasarkan nama, perusahaan, email, atau telepon..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1482C2] focus:bg-white transition-all"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-2xl bg-[#1482C2] hover:bg-[#0E6496] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-md shadow-sky-500/15"
          >
            Cari
          </button>
        </form>

        {/* Status Filter Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 text-[11px] font-bold flex items-center gap-1 mr-1.5">
            <Filter className="w-3.5 h-3.5 text-[#1482C2]" />
            <span>Status:</span>
          </span>
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelectedStatus(opt.value)}
              className={`px-3.5 py-1.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedStatus === opt.value
                  ? "bg-[#233876] text-white shadow-md shadow-navy/20"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
        {loading ? (
          <div className="py-20 text-center text-xs text-slate-400 flex flex-col items-center justify-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#1482C2]" />
            <span>Memuat data prospek...</span>
          </div>
        ) : leads.length === 0 ? (
          <div className="py-20 text-center text-xs text-slate-400">
            Tidak ada prospek yang sesuai dengan kriteria pencarian ini.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/70 border-b border-slate-100 text-slate-400 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-4 px-5 font-bold">Klien & Kontak</th>
                  <th className="py-4 px-5 font-bold">Layanan & Budget</th>
                  <th className="py-4 px-5 font-bold">Pesan Klien</th>
                  <th className="py-4 px-5 font-bold">Status</th>
                  <th className="py-4 px-5 font-bold">Waktu Masuk</th>
                  <th className="py-4 px-5 font-bold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                    onClick={() => openLeadDetail(lead)}
                  >
                    {/* Klien */}
                    <td className="py-4 px-5 min-w-[220px]">
                      <div className="font-bold text-[#233876] text-sm group-hover:text-[#1482C2] transition-colors">
                        {lead.name}
                      </div>
                      {lead.company && (
                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <Building className="w-3 h-3 text-slate-400" />
                          <span>{lead.company}</span>
                        </div>
                      )}
                      <div className="text-[11px] text-slate-400 flex items-center gap-3 mt-1">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3 text-slate-400" />
                          {lead.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3 text-slate-400" />
                          {lead.phone}
                        </span>
                      </div>
                    </td>

                    {/* Layanan & Budget */}
                    <td className="py-4 px-5 min-w-[180px]">
                      <div className="font-bold text-slate-700">
                        {lead.service}
                      </div>
                      {lead.budget && (
                        <div className="text-[11px] text-[#1482C2] font-extrabold mt-0.5">
                          {lead.budget}
                        </div>
                      )}
                    </td>

                    {/* Pesan */}
                    <td className="py-4 px-5 max-w-xs">
                      <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                        {lead.message}
                      </p>
                      {lead.notes && (
                        <div className="mt-1 text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 inline-block truncate max-w-xs font-medium">
                          Catatan: {lead.notes}
                        </div>
                      )}
                    </td>

                    {/* Status */}
                    <td className="py-4 px-5 whitespace-nowrap">
                      {getStatusBadge(lead.status)}
                    </td>

                    {/* Waktu Masuk */}
                    <td className="py-4 px-5 text-slate-400 text-[11px] whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>

                    {/* Aksi */}
                    <td
                      className="py-4 px-5 text-right whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => openLeadDetail(lead)}
                          className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-[#1482C2] text-[#1482C2] hover:text-white font-bold text-xs transition-all shadow-sm cursor-pointer"
                        >
                          Detail
                        </button>
                        <button
                          onClick={() => setLeadToDelete(lead.id)}
                          className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Hapus Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Detail Prospek */}
      {activeLead && (
        <div className="fixed inset-0 z-50 bg-[#233876]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-100 rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setActiveLead(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 p-2 rounded-2xl hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="text-[11px] font-extrabold text-[#1482C2] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Detail Permohonan Konsultasi Prospek</span>
              </div>
              <h2 className="text-xl font-black text-[#233876]">
                {activeLead.name}
              </h2>
              {activeLead.company && (
                <p className="text-slate-500 text-xs mt-0.5">
                  Perusahaan / Instansi: <span className="text-[#233876] font-bold">{activeLead.company}</span>
                </p>
              )}
            </div>

            {/* Quick Contact Buttons (WhatsApp, Mail, Call) */}
            <div className="flex flex-wrap gap-2.5 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <a
                href={formatWhatsAppUrl(activeLead.phone, activeLead.name, activeLead.service)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Follow-up WhatsApp</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href={`mailto:${activeLead.email}?subject=${encodeURIComponent(`Penawaran Solusi Digital - CV. Bahari Tech Solution`)}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#1482C2]" />
                <span>Kirim Email</span>
              </a>

              <a
                href={`tel:${activeLead.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>{activeLead.phone}</span>
              </a>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Layanan yang Diminati
                </span>
                <div className="text-sm font-bold text-[#233876] mt-1">
                  {activeLead.service}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  Estimasi Anggaran / Budget
                </span>
                <div className="text-sm font-extrabold text-[#1482C2] mt-1">
                  {activeLead.budget || "Fleksibel / Belum ditentukan"}
                </div>
              </div>
            </div>

            {/* Message Box */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#233876] mb-2">
                Pesan / Keterangan Klien:
              </label>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
                {activeLead.message}
              </div>
            </div>

            {/* Status & Notes Update */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#233876]">
                <Edit3 className="w-4 h-4 text-[#1482C2]" />
                <span>Perbarui Status & Catatan Tindak Lanjut</span>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                  Status Prospek:
                </label>
                <select
                  value={modalStatus}
                  onChange={(e) => setModalStatus(e.target.value as LeadStatus)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-bold text-[#233876] focus:outline-none focus:border-[#1482C2]"
                >
                  <option value="NEW">Baru (Belum direspon)</option>
                  <option value="CONTACTED">Dihubungi (Sudah dikontak WA/Email)</option>
                  <option value="IN_DISCUSSION">Diskusi (Review scope & negosiasi)</option>
                  <option value="DEAL">Deal (Proyek resmi disepakati)</option>
                  <option value="REJECTED">Ditolak / Batal</option>
                  <option value="ARCHIVED">Arsip</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                  Catatan Internal Tim:
                </label>
                <textarea
                  rows={3}
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  placeholder="Tuliskan catatan tindak lanjut..."
                  className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-[#1482C2]"
                />
              </div>

              {feedbackMessage && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex items-center gap-2 font-medium">
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => setLeadToDelete(activeLead.id)}
                  className="text-xs font-bold text-rose-500 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Hapus Lead</span>
                </button>

                <button
                  type="button"
                  disabled={isUpdating}
                  onClick={handleUpdateStatusAndNotes}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#1482C2] hover:bg-[#0E6496] text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isUpdating ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <span>Simpan Perubahan</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pop Up Validasi Hapus Prospek (Reusable Partial Component) */}
      <ConfirmModal
        isOpen={!!leadToDelete}
        onClose={() => setLeadToDelete(null)}
        onConfirm={async () => {
          if (leadToDelete) {
            await handleDeleteLead(leadToDelete);
            setLeadToDelete(null);
          }
        }}
        variant="danger"
        title="Hapus Data Prospek"
        description="Apakah Anda yakin ingin menghapus data permohonan konsultasi ini secara permanen? Data yang telah dihapus tidak dapat dipulihkan kembali."
        confirmText="Ya, Hapus Data"
        cancelText="Batal"
      />
    </div>
  );
}
