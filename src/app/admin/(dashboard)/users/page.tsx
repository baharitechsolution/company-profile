"use client";

import React, { useState, useEffect } from "react";
import {
  getAdminUsersAction,
  createAdminUserAction,
  deleteAdminUserAction,
} from "@/actions/auth.action";
import { AdminUser, AdminRole } from "@/types/admin";
import { ConfirmModal } from "@/components/ui/confirm-modal";
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
} from "lucide-react";

export default function UsersManagementPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<AdminRole>("ADMIN");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [userToDelete, setUserToDelete] = useState<AdminUser | null>(null);

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

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const res = await createAdminUserAction({
      email,
      full_name: fullName,
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
      }, 1200);
    } else {
      setFeedback({ type: "error", message: res.message });
    }
  };

  const confirmDeleteUser = async () => {
    if (!userToDelete) return;

    if (userToDelete.role === "SUPER_ADMIN" && users.filter((u) => u.role === "SUPER_ADMIN").length <= 1) {
      alert("Tidak dapat menghapus satu-satunya Super Admin dalam sistem.");
      setUserToDelete(null);
      return;
    }

    const res = await deleteAdminUserAction(userToDelete.id);
    if (res.success) {
      setUsers((prev) => prev.filter((u) => u.id !== userToDelete.id));
    } else {
      alert("Gagal menghapus user: " + res.message);
    }
    setUserToDelete(null);
  };

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
          onClick={() => {
            setIsModalOpen(true);
            setFeedback(null);
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#1482C2] hover:bg-[#0E6496] text-white font-bold text-xs sm:text-sm shadow-md shadow-sky-500/20 transition-all cursor-pointer self-start sm:self-auto"
        >
          <UserPlus className="w-4 h-4" />
          <span>Tambah Admin</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
        {loading ? (
          <div className="py-20 text-center text-xs text-slate-400 flex flex-col items-center justify-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-[#1482C2]" />
            <span>Memuat data tim admin...</span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/70 border-b border-slate-100 text-slate-400 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-4 px-5 font-bold">Nama Admin</th>
                  <th className="py-4 px-5 font-bold">Email Login</th>
                  <th className="py-4 px-5 font-bold">Hak Akses / Role</th>
                  <th className="py-4 px-5 font-bold">Tanggal Dibuat</th>
                  <th className="py-4 px-5 font-bold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* Nama */}
                    <td className="py-4 px-5 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[#1482C2] font-black text-xs">
                          {user.full_name.charAt(0)}
                        </div>
                        <div className="font-bold text-[#233876] text-sm">
                          {user.full_name}
                        </div>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="py-4 px-5 text-slate-600 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>{user.email}</span>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="py-4 px-5 whitespace-nowrap">
                      {user.role === "SUPER_ADMIN" ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-[#233876]/10 text-[#233876] border border-[#233876]/20">
                          <Shield className="w-3 h-3 text-[#233876]" />
                          <span>SUPER ADMIN</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-sky-50 text-[#1482C2] border border-sky-200">
                          <User className="w-3 h-3 text-[#1482C2]" />
                          <span>ADMIN OPERASIONAL</span>
                        </span>
                      )}
                    </td>

                    {/* Tanggal */}
                    <td className="py-4 px-5 text-slate-400 text-[11px] whitespace-nowrap">
                      {new Date(user.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    {/* Aksi */}
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <button
                        onClick={() => setUserToDelete(user)}
                        className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Hapus Hak Akses"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal Tambah Admin */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#233876]/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-100 rounded-[32px] w-full max-w-md shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 p-2 rounded-2xl hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <h2 className="text-lg font-black text-[#233876]">
                Tambah Admin
              </h2>
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

            <form onSubmit={handleCreateUser} className="space-y-4">
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

              {/* Password */}
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
                  <option value="ADMIN">ADMIN (Kelola leads & follow-up klien)</option>
                  <option value="SUPER_ADMIN">SUPER ADMIN (Akses penuh & kelola user)</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2.5 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-colors"
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
                    <span>Buat Akun</span>
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
      />
    </div>
  );
}
