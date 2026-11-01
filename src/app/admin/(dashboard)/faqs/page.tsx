"use client";

import React, { useState, useEffect } from "react";
import {
  getFaqsAction,
  createFaqAction,
  updateFaqAction,
  deleteFaqAction,
  toggleFaqPublishAction,
} from "@/actions/faq.action";
import { FaqItem, FaqCategory } from "@/types/faq";
import { faqCategoryOptions } from "@/config/faq";
import { ConfirmModal } from "@/components/ui/confirm-modal";
import { AdminSearchBar } from "@/components/admin/admin-search-bar";
import { AdminDataTable, TableColumn } from "@/components/admin/admin-table";
import {
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  X,
  Loader2,
  FileText,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const categoryLabels: Record<FaqCategory, { label: string; color: string }> = {
  workflow: {
    label: "Alur & Biaya",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  security: {
    label: "Source Code & Legal",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  warranty: {
    label: "Garansi & Server",
    color: "bg-amber-50 text-amber-700 border-amber-200",
  },
  tech: {
    label: "Teknologi & Fitur",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
};

export default function FaqsManagementPage() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");

  // Expanded cards for answer preview
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Modal State (Add / Edit)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FaqItem | null>(null);
  const [formCategory, setFormCategory] = useState<FaqCategory>("workflow");
  const [formQuestion, setFormQuestion] = useState("");
  const [formAnswer, setFormAnswer] = useState("");
  const [formOrder, setFormOrder] = useState<number>(1);
  const [formPublished, setFormPublished] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Delete Confirmation Modal
  const [faqToDelete, setFaqToDelete] = useState<FaqItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let ignore = false;
    getFaqsAction().then((data) => {
      if (!ignore) {
        setFaqs(data);
        setLoading(false);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  // Filtered FAQ items
  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "published"
        ? item.is_published !== false
        : item.is_published === false;

    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesStatus && matchesSearch;
  });

  // Open modal for Create
  const handleOpenCreateModal = () => {
    setEditingFaq(null);
    setFormCategory("workflow");
    setFormQuestion("");
    setFormAnswer("");
    setFormOrder(faqs.length + 1);
    setFormPublished(true);
    setFeedback(null);
    setIsModalOpen(true);
  };

  // Open modal for Edit
  const handleOpenEditModal = (faq: FaqItem) => {
    setEditingFaq(faq);
    setFormCategory(faq.category);
    setFormQuestion(faq.question);
    setFormAnswer(faq.answer);
    setFormOrder(faq.order_index ?? 1);
    setFormPublished(faq.is_published !== false);
    setFeedback(null);
    setIsModalOpen(true);
  };

  // Save (Create or Update)
  const handleSubmitFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formQuestion.trim() || !formAnswer.trim()) {
      setFeedback({ type: "error", message: "Pertanyaan dan jawaban wajib diisi." });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    if (editingFaq) {
      // Update
      const res = await updateFaqAction(editingFaq.id, {
        question: formQuestion.trim(),
        answer: formAnswer.trim(),
        category: formCategory,
        order_index: Number(formOrder) || 1,
        is_published: formPublished,
      });

      setIsSubmitting(false);

      if (res.success && res.data) {
        setFeedback({ type: "success", message: res.message });
        setFaqs((prev) =>
          prev.map((item) => (item.id === editingFaq.id ? res.data! : item))
        );
        setTimeout(() => {
          setIsModalOpen(false);
          setFeedback(null);
        }, 1000);
      } else {
        setFeedback({ type: "error", message: res.message });
      }
    } else {
      // Create
      const res = await createFaqAction({
        question: formQuestion.trim(),
        answer: formAnswer.trim(),
        category: formCategory,
        order_index: Number(formOrder) || 1,
        is_published: formPublished,
      });

      setIsSubmitting(false);

      if (res.success && res.data) {
        setFeedback({ type: "success", message: res.message });
        setFaqs((prev) => [res.data!, ...prev]);
        setTimeout(() => {
          setIsModalOpen(false);
          setFeedback(null);
        }, 1000);
      } else {
        setFeedback({ type: "error", message: res.message });
      }
    }
  };

  // Toggle publish / unpublish
  const handleTogglePublish = async (faq: FaqItem) => {
    const current = faq.is_published !== false;
    const res = await toggleFaqPublishAction(faq.id, current);
    if (res.success && typeof res.data === "boolean") {
      setFaqs((prev) =>
        prev.map((item) =>
          item.id === faq.id ? { ...item, is_published: res.data } : item
        )
      );
    }
  };

  // Confirm delete
  const confirmDeleteFaq = async () => {
    if (!faqToDelete) return;
    setIsDeleting(true);
    const res = await deleteFaqAction(faqToDelete.id);
    setIsDeleting(false);

    if (res.success) {
      setFaqs((prev) => prev.filter((item) => item.id !== faqToDelete.id));
      setFaqToDelete(null);
    }
  };

  const totalCount = faqs.length;
  const publishedCount = faqs.filter((f) => f.is_published !== false).length;
  const draftCount = faqs.filter((f) => f.is_published === false).length;

  const faqColumns: TableColumn<FaqItem>[] = [
    {
      key: "order",
      header: "No",
      className: "w-14 text-center",
      headerClassName: "text-center",
      render: (faq, idx) => (
        <span className="w-7 h-7 rounded-lg bg-[#EBF4FA] text-[#1482C2] text-xs font-black inline-flex items-center justify-center">
          {faq.order_index ?? idx + 1}
        </span>
      ),
    },
    {
      key: "question",
      header: "Pertanyaan & Jawaban FAQ",
      className: "min-w-[280px] max-w-xl",
      render: (faq) => {
        const isExpanded = expandedId === faq.id;
        return (
          <div className="space-y-1.5 py-1">
            <h2
              onClick={() => setExpandedId(isExpanded ? null : faq.id)}
              className="text-xs sm:text-sm font-bold text-[#233876] hover:text-[#1482C2] cursor-pointer transition-colors leading-snug"
            >
              {faq.question}
            </h2>
            <div
              className={`text-xs text-slate-600 leading-relaxed whitespace-pre-line ${
                isExpanded ? "block" : "line-clamp-2"
              }`}
            >
              {faq.answer}
            </div>
            <button
              onClick={() => setExpandedId(isExpanded ? null : faq.id)}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1482C2] hover:underline cursor-pointer"
            >
              {isExpanded ? (
                <>
                  <span>Tutup Detail</span>
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  <span>Lihat Selengkapnya</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        );
      },
    },
    {
      key: "category",
      header: "Kategori Topik",
      className: "whitespace-nowrap",
      render: (faq) => {
        const categoryMeta = categoryLabels[faq.category] || {
          label: faq.category,
          color: "bg-slate-100 text-slate-700 border-slate-200",
        };
        return (
          <span
            className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${categoryMeta.color}`}
          >
            {categoryMeta.label}
          </span>
        );
      },
    },
    {
      key: "status",
      header: "Status",
      className: "whitespace-nowrap",
      render: (faq) => {
        const isPublished = faq.is_published !== false;
        return (
          <button
            onClick={() => handleTogglePublish(faq)}
            title={isPublished ? "Sembunyikan (Ubah ke Draft)" : "Publikasikan FAQ"}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
              isPublished
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isPublished ? "bg-emerald-500" : "bg-slate-400"
              }`}
            />
            <span>{isPublished ? "Tayang" : "Draft"}</span>
          </button>
        );
      },
    },
    {
      key: "actions",
      header: "Aksi",
      align: "right",
      className: "whitespace-nowrap",
      render: (faq) => (
        <div className="flex items-center justify-end gap-1.5">
          <button
            onClick={() => handleOpenEditModal(faq)}
            title="Edit Pertanyaan & Jawaban"
            className="p-2 rounded-xl bg-blue-50 text-[#1482C2] hover:bg-blue-100 transition-colors cursor-pointer"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setFaqToDelete(faq)}
            title="Hapus FAQ"
            className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner / Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-[#233876] tracking-tight">
            Manajemen FAQ
          </h1>
        </div>

        <button
          onClick={handleOpenCreateModal}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#233876] to-[#1482C2] text-white text-xs lg:text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah FAQ</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1482C2] flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-black text-[#233876]">{totalCount}</div>
            <div className="text-[11px] font-medium text-slate-400">Total FAQ</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-black text-emerald-600">{publishedCount}</div>
            <div className="text-[11px] font-medium text-slate-400">FAQ Tayang</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
            <EyeOff className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-black text-slate-600">{draftCount}</div>
            <div className="text-[11px] font-medium text-slate-400">Draft / Tersembunyi</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl font-black text-purple-600">4</div>
            <div className="text-[11px] font-medium text-slate-400">Kategori Topik</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Search Bar Partial */}
        <div className="flex-1 max-w-xl">
          <AdminSearchBar
            placeholder="Cari pertanyaan atau jawaban FAQ..."
            paramName="q"
            onSearch={(val) => setSearchQuery(val)}
            onReset={() => setSearchQuery("")}
          />
        </div>

        {/* Filter Controls (Dropdowns) */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Dropdown Kategori */}
          <div className="relative">
            <select
              id="faqCategoryFilter"
              aria-label="Filter Berdasarkan Kategori"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-3.5 pr-8 py-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 text-xs font-bold text-[#233876] focus:outline-none focus:border-[#1482C2] focus:ring-2 focus:ring-[#1482C2]/15 cursor-pointer shadow-2xs transition-all"
            >
              {faqCategoryOptions.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.id === "all" ? "Semua Kategori" : `Kategori: ${cat.label}`}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Dropdown Status */}
          <div className="relative">
            <select
              id="faqStatusFilter"
              aria-label="Filter Berdasarkan Status Publikasi"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as "all" | "published" | "draft")
              }
              className="appearance-none pl-3.5 pr-8 py-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 text-xs font-bold text-[#233876] focus:outline-none focus:border-[#1482C2] focus:ring-2 focus:ring-[#1482C2]/15 cursor-pointer shadow-2xs transition-all"
            >
              <option value="all">Semua Status</option>
              <option value="published">Status: Tayang</option>
              <option value="draft">Status: Draft</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Standardized Admin Data Table */}
      <AdminDataTable
        columns={faqColumns}
        data={filteredFaqs}
        keyExtractor={(faq) => faq.id}
        isLoading={loading}
        loadingMessage="Memuat data pertanyaan & jawaban FAQ..."
        emptyMessage="Tidak Ada FAQ Ditemukan"
        emptySubMessage="Coba sesuaikan kata kunci pencarian atau ubah filter kategori di atas."
      />

      {/* Add / Edit FAQ Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-sm transition-opacity"
            onClick={() => !isSubmitting && setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 sm:p-7 z-10 max-h-[90vh] overflow-y-auto no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => !isSubmitting && setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#233876]">
                  {editingFaq ? "Edit FAQ" : "Tambah FAQ Baru"}
                </h3>
              </div>
            </div>

            {feedback && (
              <div
                className={`mb-4 p-3 rounded-xl flex items-center gap-2.5 text-xs font-semibold ${
                  feedback.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-rose-50 text-rose-800 border border-rose-200"
                }`}
              >
                {feedback.type === "success" ? (
                  <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                )}
                <span>{feedback.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmitFaq} className="space-y-4">
              {/* Category & Order in row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Kategori Topik
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as FaqCategory)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-[#233876] focus:outline-none focus:border-[#1482C2] focus:bg-white"
                  >
                    <option value="workflow">Alur Kerja & Biaya</option>
                    <option value="security">Source Code, Legal & Keamanan</option>
                    <option value="warranty">Garansi, Server & Maintenance</option>
                    <option value="tech">Teknologi, Fitur & Integrasi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Urutan Tampil (Order Index)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formOrder}
                    onChange={(e) => setFormOrder(parseInt(e.target.value) || 1)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-[#233876] focus:outline-none focus:border-[#1482C2] focus:bg-white"
                  />
                </div>
              </div>

              {/* Question */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Pertanyaan (Question) *
                </label>
                <input
                  type="text"
                  required
                  value={formQuestion}
                  onChange={(e) => setFormQuestion(e.target.value)}
                  placeholder="Contoh: Berapa lama waktu pengerjaan website profil?"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-[#233876] placeholder-slate-400 focus:outline-none focus:border-[#1482C2] focus:bg-white"
                />
              </div>

              {/* Answer */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Jawaban Lengkap (Answer) *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formAnswer}
                  onChange={(e) => setFormAnswer(e.target.value)}
                  placeholder="Tuliskan jawaban yang jelas, transparan, dan profesional bagi calon klien..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-[#233876] placeholder-slate-400 focus:outline-none focus:border-[#1482C2] focus:bg-white leading-relaxed resize-y"
                />
              </div>

              {/* Toggle Publish Checkbox */}
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  id="formPublished"
                  checked={formPublished}
                  onChange={(e) => setFormPublished(e.target.checked)}
                  className="w-4 h-4 text-[#1482C2] rounded border-slate-300 focus:ring-[#1482C2]"
                />
                <label
                  htmlFor="formPublished"
                  className="text-xs font-medium text-slate-700 cursor-pointer select-none"
                >
                  Publikasikan langsung agar tampil di landing page website utama
                </label>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-3">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#233876] text-white text-xs font-semibold shadow-md hover:bg-[#1482C2] transition-colors disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <span>{editingFaq ? "Simpan Perubahan" : "Tambahkan FAQ"}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reusable Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={!!faqToDelete}
        onClose={() => setFaqToDelete(null)}
        onConfirm={confirmDeleteFaq}
        title="Hapus Pertanyaan FAQ?"
        description={`Apakah Anda yakin ingin menghapus pertanyaan "${faqToDelete?.question}"? Tindakan ini tidak dapat dibatalkan.`}
        confirmText="Ya, Hapus FAQ"
        cancelText="Batal"
        variant="danger"
        isLoading={isDeleting}
      />
    </div>
  );
}
