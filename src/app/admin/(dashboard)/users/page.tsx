"use client";

import React, { useState, useEffect } from "react";
import {
  getAdminUsersAction,
  createAdminUserAction,
  updateAdminUserAction,
  deleteAdminUserAction,
} from "@/actions/auth.action";
import { AdminUser, AdminRole } from "@/types/admin";
import { ConfirmModal } from "@/components/ui/confirm-modal";
import { AdminSearchBar } from "@/components/admin/admin-search-bar";
import { AdminDataTable, TableColumn } from "@/components/admin/admin-table";
import {
  UserPlus,
  Shield,
  Trash2,
  Mail,
  CheckCircle,
  AlertCircle,
  X,
  Loader2,
  Lock,
  User,
  Edit2,
  ChevronDown,
} from "lucide-react";

export default function UsersManagementPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<AdminRole | "ALL">("ALL");

  // Modal State (Add or Edit)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<AdminRole>("ADMIN");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Delete Confirmation State
  const [userToDelete, setUserToDelete] = useState<AdminUser | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let ignore = false;
    getAdminUsersAction().then((data) => {
      if (!ignore) {
        setUsers(data);
        setLoading(false);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  // Open Create Modal
  const handleOpenCreateModal = () => {
    setEditingUser(null);
    setFullName("");
    setEmail("");
    setPassword("");
    setRole("ADMIN");
    setFeedback(null);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEditModal = (user: AdminUser) => {
    setEditingUser(user);
    setFullName(user.full_name);
    setEmail(user.email);
    setPassword("");
    setRole(user.role);
    setFeedback(null);
    setIsModalOpen(true);
  };

  // Submit Handler (Create or Update)
  const handleSubmitUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    if (editingUser) {
      // Mode Edit
      const res = await updateAdminUserAction(editingUser.id, {
        full_name: fullName.trim(),
        email: email.trim(),
        role,
      });

      setIsSubmitting(false);

      if (res.success && res.data) {
        setFeedback({ type: "success", message: res.message });
        setUsers((prev) =>
          prev.map((u) => (u.id === editingUser.id ? res.data! : u))
        );
        setTimeout(() => {
          setIsModalOpen(false);
          setEditingUser(null);
          setFeedback(null);
        }, 1000);
      } else {
        setFeedback({ type: "error", message: res.message });
      }
    } else {
      // Mode Tambah Baru
      const res = await createAdminUserAction({
        email: email.trim(),
        full_name: fullName.trim(),
        role,
        password: password || undefined,
      });

      setIsSubmitting(false);

      if (res.success && res.data) {
        setFeedback({ type: "success", message: res.message });
        setUsers((prev) => [res.data!, ...prev]);
        setTimeout(() => {
          setIsModalOpen(false);
          setFullName("");
          setEmail("");
          setPassword("");
          setFeedback(null);
        }, 1000);
      } else {
        setFeedback({ type: "error", message: res.message });
      }
    }
  };

  // Confirm Delete
  const confirmDeleteUser = async () => {
    if (!userToDelete) return;

    if (userToDelete.role === "SUPER_ADMIN" && users.filter((u) => u.role === "SUPER_ADMIN").length <= 1) {
      alert("Tidak dapat menghapus satu-satunya Super Admin dalam sistem.");
      setUserToDelete(null);
      return;
    }

    setIsDeleting(true);
    const res = await deleteAdminUserAction(userToDelete.id);
    setIsDeleting(false);

    if (res.success) {
      setUsers((prev) => prev.filter((u) => u.id !== userToDelete.id));
    } else {
      alert("Gagal menghapus user: " + res.message);
    }
    setUserToDelete(null);
  };

  const filteredUsers = users.filter((u) => {
    const matchesRole = selectedRole === "ALL" || u.role === selectedRole;
    if (!searchQuery.trim()) return matchesRole;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      u.full_name.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q);
    return matchesRole && matchesSearch;
  });

  const userColumns: TableColumn<AdminUser>[] = [
    {
      key: "full_name",
      header: "Nama Admin",
      className: "whitespace-nowrap min-w-[200px]",
      render: (user) => (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[#1482C2] font-black text-xs">
            {user.full_name?.charAt(0) || "A"}
          </div>
          <div className="font-bold text-[#233876] text-sm">
            {user.full_name}
          </div>
        </div>
      ),
    },
    {
      key: "email",
      header: "Email Login",
      className: "whitespace-nowrap text-slate-600",
      render: (user) => (
        <div className="flex items-center gap-1.5 font-medium">
          <Mail className="w-3.5 h-3.5 text-slate-400" />
          <span>{user.email}</span>
        </div>
      ),
    },
    {
      key: "role",
      header: "Hak Akses / Role",
      className: "whitespace-nowrap",
      render: (user) =>
        user.role === "SUPER_ADMIN" ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#233876]/10 text-[#233876] border border-[#233876]/20">
            <Shield className="w-3 h-3 text-[#233876]" />
            <span>SUPER ADMIN</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-sky-50 text-[#1482C2] border border-sky-200">
            <User className="w-3 h-3 text-[#1482C2]" />
            <span>ADMIN OPERASIONAL</span>
          </span>
        ),
    },
    {
      key: "created_at",
      header: "Tanggal Dibuat",
      className: "whitespace-nowrap text-slate-400 text-[11px]",
      render: (user) =>
        new Date(user.created_at).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
    },
    {
      key: "actions",
      header: "Aksi",
      align: "right",
      className: "whitespace-nowrap",
      render: (user) => (
        <div className="flex items-center justify-end gap-1">
          {/* Tombol Edit */}
          <button
            onClick={() => handleOpenEditModal(user)}
            className="p-2 rounded-xl bg-blue-50 text-[#1482C2] hover:bg-blue-100 transition-colors cursor-pointer"
            title="Edit Profil & Hak Akses"
          >
            <Edit2 className="w-4 h-4" />
          </button>

          {/* Tombol Hapus */}
          <button
            onClick={() => setUserToDelete(user)}
            className="p-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors cursor-pointer"
            title="Hapus Hak Akses"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-[#233876] tracking-tight">
            Manajemen User
          </h1>
        </div>

        <button
          onClick={handleOpenCreateModal}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#1482C2] hover:bg-[#0E6496] text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-500/20 transition-all cursor-pointer self-start sm:self-auto"
        >
          <UserPlus className="w-4 h-4" />
          <span>Tambah Admin</span>
        </button>
      </div>

      {/* Search Bar Partial & Role Dropdown */}
      <div className="bg-white rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1 max-w-xl">
          <AdminSearchBar
            placeholder="Cari berdasarkan nama atau email admin..."
            paramName="q"
            onSearch={(val) => setSearchQuery(val)}
            onReset={() => setSearchQuery("")}
          />
        </div>

        {/* Dropdown Filter Role */}
        <div className="relative shrink-0">
          <select
            id="userRoleFilter"
            aria-label="Filter Berdasarkan Tingkat Hak Akses"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value as AdminRole | "ALL")}
            className="appearance-none pl-3.5 pr-8 py-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 text-xs font-bold text-[#233876] focus:outline-none focus:border-[#1482C2] focus:ring-2 focus:ring-[#1482C2]/15 cursor-pointer shadow-2xs transition-all"
          >
            <option value="ALL">Semua Hak Akses</option>
            <option value="SUPER_ADMIN">SUPER ADMIN</option>
            <option value="ADMIN">ADMIN OPERASIONAL</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Standardized Admin Data Table */}
      <AdminDataTable
        columns={userColumns}
        data={filteredUsers}
        keyExtractor={(user) => user.id}
        isLoading={loading}
        loadingMessage="Memuat data tim admin..."
        emptyMessage="Tidak ada akun admin yang cocok."
        emptySubMessage="Coba sesuaikan kata kunci pencarian Anda."
      />

      {/* Modal Tambah / Edit Admin */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#233876]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-100 rounded-[32px] w-full max-w-md shadow-2xl p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => !isSubmitting && setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 p-2 rounded-2xl hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <div>
                <h2 className="text-lg font-black text-[#233876]">
                  {editingUser ? "Edit Profil Admin" : "Tambah Admin Baru"}
                </h2>
              </div>
            </div>

            {feedback && (
              <div
                className={`mb-4 p-3 rounded-2xl text-xs flex items-center gap-2 font-medium ${
                  feedback.type === "success"
                    ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                    : "bg-rose-50 border border-rose-200 text-rose-700"
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

            <form onSubmit={handleSubmitUser} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#233876] mb-1.5">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Rian Pratama (DevOps)"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1482C2] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#233876] mb-1.5">
                  Email Akun
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@baharitech.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1482C2] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Password (Only required on Create) */}
              {!editingUser && (
                <div>
                  <label className="block text-xs font-bold text-[#233876] mb-1.5">
                    Kata Sandi Awal
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Minimal 6 karakter"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1482C2] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Role Select */}
              <div>
                <label className="block text-xs font-bold text-[#233876] mb-1.5">
                  Tingkat Hak Akses (Role)
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as AdminRole)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-3.5 py-2.5 text-xs font-bold text-[#233876] focus:outline-none focus:border-[#1482C2]"
                >
                  <option value="ADMIN">ADMIN (Kelola leads, FAQ & follow-up klien)</option>
                  <option value="SUPER_ADMIN">SUPER ADMIN (Akses penuh & kelola user)</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2.5 pt-3">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#1482C2] hover:bg-[#0E6496] text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <span>{editingUser ? "Simpan Perubahan" : "Buat Akun"}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pop Up Validasi Hapus User (Reusable Partial Component) */}
      <ConfirmModal
        isOpen={!!userToDelete}
        onClose={() => setUserToDelete(null)}
        onConfirm={confirmDeleteUser}
        variant="danger"
        title="Hapus Hak Akses Admin"
        description={
          userToDelete
            ? `Apakah Anda yakin ingin menghapus hak akses admin untuk ${userToDelete.full_name} (${userToDelete.email})? Pengguna ini tidak akan bisa login lagi.`
            : "Hapus hak akses akun admin ini?"
        }
        confirmText="Ya, Hapus Akses"
        cancelText="Batal"
        isLoading={isDeleting}
      />
    </div>
  );
}
