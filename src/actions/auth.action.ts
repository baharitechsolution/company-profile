"use server";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { AdminUser, AdminRole } from "@/types/admin";
import { ActionResponse } from "@/types";

// In-Memory store untuk mode fallback / demo jika kredensial Supabase belum terpasang
let demoUsersStore: AdminUser[] = [
  {
    id: "demo-admin-1",
    email: "admin@baharitech.com",
    full_name: "Arya Maulana (Lead Engineer)",
    role: "SUPER_ADMIN",
    created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "demo-admin-2",
    email: "ops@baharitech.com",
    full_name: "Customer Operations Desk",
    role: "ADMIN",
    created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export async function loginAdminAction(formData: {
  email: string;
  password?: string;
}): Promise<ActionResponse<{ user: AdminUser }>> {
  try {
    const supabase = await createClient();

    // 1. Jika Supabase terkonfigurasi di env
    if (supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password || "",
      });

      if (error || !data.user) {
        return {
          success: false,
          message: error?.message || "Email atau kata sandi tidak valid.",
        };
      }

      // Ambil profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", data.user.id)
        .single();

      const userObj: AdminUser = {
        id: data.user.id,
        email: data.user.email || "",
        full_name: profile?.full_name || data.user.user_metadata?.full_name || "Admin Bahari",
        role: (profile?.role as AdminRole) || "ADMIN",
        avatar_url: profile?.avatar_url || null,
        created_at: data.user.created_at,
      };

      return {
        success: true,
        message: "Berhasil masuk ke dashboard admin.",
        data: { user: userObj },
      };
    }

    // 2. Fallback Mode (Demo / Siap Pakai sebelum input API Key Supabase)
    const normalizedEmail = formData.email.trim().toLowerCase();
    const existing = demoUsersStore.find(
      (u) => u.email.toLowerCase() === normalizedEmail
    );

    // Default password demo: admin123 atau boleh apa saja jika format email benar
    if (formData.password && formData.password.length < 4) {
      return {
        success: false,
        message: "Kata sandi minimal 4 karakter.",
      };
    }

    const cookieStore = await cookies();
    const activeUser = existing || {
      id: "demo-admin-" + Date.now(),
      email: normalizedEmail,
      full_name: normalizedEmail.split("@")[0].toUpperCase() + " (Admin)",
      role: "ADMIN" as AdminRole,
      created_at: new Date().toISOString(),
    };

    if (!existing) {
      demoUsersStore.push(activeUser);
    }

    cookieStore.set("bahari_demo_admin", JSON.stringify(activeUser), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 hari
      path: "/",
    });

    return {
      success: true,
      message: "Berhasil masuk ke dashboard admin (Mode Siap Pakai).",
      data: { user: activeUser },
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal memproses autentikasi.";
    return {
      success: false,
      message: errorMsg,
    };
  }
}

export async function logoutAdminAction(): Promise<ActionResponse<null>> {
  try {
    const supabase = await createClient();
    if (supabase) {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.warn("[AUTH] Supabase signOut warning:", err);
      }
    }

    const cookieStore = await cookies();
    const allCookies = cookieStore.getAll();
    for (const c of allCookies) {
      if (
        c.name.startsWith("sb-") ||
        c.name.includes("auth-token") ||
        c.name.includes("supabase") ||
        c.name === "bahari_demo_admin"
      ) {
        cookieStore.delete(c.name);
      }
    }

    return {
      success: true,
      message: "Berhasil keluar dari sistem.",
      data: null,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Gagal logout.";
    return {
      success: false,
      message: errorMsg,
    };
  }
}

export async function getAdminSessionAction(): Promise<AdminUser | null> {
  const supabase = await createClient();
  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    return {
      id: user.id,
      email: user.email || "",
      full_name: profile?.full_name || user.user_metadata?.full_name || "Admin Bahari",
      role: (profile?.role as AdminRole) || "ADMIN",
      avatar_url: profile?.avatar_url || null,
      created_at: user.created_at,
    };
  }

  const cookieStore = await cookies();
  const demoCookie = cookieStore.get("bahari_demo_admin")?.value;
  if (demoCookie) {
    try {
      return JSON.parse(demoCookie) as AdminUser;
    } catch {
      return null;
    }
  }

  return null;
}

export async function getAdminUsersAction(): Promise<AdminUser[]> {
  const supabase = await createClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      return data as AdminUser[];
    }
  }

  return demoUsersStore;
}

export async function createAdminUserAction(data: {
  email: string;
  full_name: string;
  role: AdminRole;
  password?: string;
}): Promise<ActionResponse<AdminUser>> {
  try {
    const supabase = await createClient();

    if (supabase) {
      // Create user di auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password || "BahariSecure2026!",
        options: {
          data: {
            full_name: data.full_name,
            role: data.role,
          },
        },
      });

      if (authError || !authData.user) {
        return {
          success: false,
          message: authError?.message || "Gagal membuat user admin baru di Supabase.",
        };
      }

      const newUser: AdminUser = {
        id: authData.user.id,
        email: data.email,
        full_name: data.full_name,
        role: data.role,
        created_at: new Date().toISOString(),
      };

      return {
        success: true,
        message: "Akun admin baru berhasil didaftarkan.",
        data: newUser,
      };
    }

    // Demo store
    const newUser: AdminUser = {
      id: "demo-user-" + Date.now(),
      email: data.email,
      full_name: data.full_name,
      role: data.role,
      created_at: new Date().toISOString(),
    };

    demoUsersStore = [newUser, ...demoUsersStore];

    return {
      success: true,
      message: "Akun admin baru berhasil ditambahkan.",
      data: newUser,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Terjadi kesalahan.";
    return {
      success: false,
      message: errorMsg,
    };
  }
}

export async function deleteAdminUserAction(userId: string): Promise<ActionResponse<null>> {
  try {
    const supabase = await createClient();
    if (supabase) {
      await supabase.from("profiles").delete().eq("id", userId);
    }

    demoUsersStore = demoUsersStore.filter((u) => u.id !== userId);
    return {
      success: true,
      message: "Pengguna berhasil dihapus.",
      data: null,
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Gagal menghapus user.",
    };
  }
}

