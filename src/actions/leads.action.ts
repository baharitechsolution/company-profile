"use server";

import { createClient } from "@/lib/supabase/server";
import { Lead, LeadStatus, LeadsStats } from "@/types/admin";
import { ActionResponse } from "@/types";

// In-Memory store untuk initial data / fallback demo mode
let demoLeadsStore: Lead[] = [
  {
    id: "lead-1",
    name: "Budi Santoso",
    email: "budi@ptmajumapan.co.id",
    phone: "081234567890",
    company: "PT. Maju Mapan Sejahtera",
    service: "Sistem ERP Enterprise",
    budget: "Rp 25.000.000 - Rp 50.000.000",
    message: "Halo Bahari Tech, kami membutuhkan sistem pencatatan inventori dan pergudangan multi-cabang terintegrasi kasir POS.",
    status: "NEW",
    notes: "Klien potensial, segera jadwalkan meeting teknis via Zoom.",
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "lead-2",
    name: "Siti Rahmawati",
    email: "siti@kedaikopi.com",
    phone: "082198765432",
    company: "Kedai Kopi Bahari Slawi",
    service: "Aplikasi Mobile Android iOS",
    budget: "Rp 10.000.000 - Rp 25.000.000",
    message: "Kami butuh aplikasi loyalty point dan pemesanan online untuk pelanggan setia kedai kopi kami di 3 cabang Tegal & Slawi.",
    status: "IN_DISCUSSION",
    notes: "Sudah dikirimkan proposal penawaran tahap 1.",
    created_at: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "lead-3",
    name: "Hendro Wijaya",
    email: "hendro@wijayagroup.com",
    phone: "085712345678",
    company: "Wijaya Group Real Estate",
    service: "Website Korporat & Branding",
    budget: "Rp 5.000.000 - Rp 15.000.000",
    message: "Ingin redesain company profile korporat agar terlihat modern dan elegan dengan optimasi SEO Google nomor 1.",
    status: "DEAL",
    notes: "DP 50% sudah diterima, tahap wireframing & prototyping sedang berjalan.",
    created_at: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "lead-4",
    name: "Ahmad Fauzi",
    email: "fauzi@koperasiberkah.id",
    phone: "081987654321",
    company: "Koperasi Simpan Pinjam Berkah",
    service: "Sistem Informasi & Pembukuan",
    budget: "Rp 15.000.000 - Rp 30.000.000",
    message: "Ingin migrasi dari excel manual ke sistem pembukuan web internal yang aman.",
    status: "CONTACTED",
    notes: "Kontak awal via WhatsApp telah direspon, menanti konfirmasi jadwal demo.",
    created_at: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
  },
];

export async function getLeadsAction(params?: {
  status?: string;
  search?: string;
}): Promise<Lead[]> {
  try {
    const supabase = await createClient();

    if (supabase) {
      let query = supabase.from("leads").select("*").order("created_at", { ascending: false });

      if (params?.status && params.status !== "ALL") {
        query = query.eq("status", params.status);
      }

      if (params?.search) {
        query = query.or(
          `name.ilike.%${params.search}%,email.ilike.%${params.search}%,company.ilike.%${params.search}%,phone.ilike.%${params.search}%`
        );
      }

      const { data, error } = await query;
      if (!error && data) {
        return data as Lead[];
      }
    }

    // Fallback store
    let results = [...demoLeadsStore];

    if (params?.status && params.status !== "ALL") {
      results = results.filter((lead) => lead.status === params.status);
    }

    if (params?.search) {
      const q = params.search.toLowerCase();
      results = results.filter(
        (lead) =>
          lead.name.toLowerCase().includes(q) ||
          lead.email.toLowerCase().includes(q) ||
          (lead.company && lead.company.toLowerCase().includes(q)) ||
          lead.phone.includes(q)
      );
    }

    return results;
  } catch (err) {
    console.error("Gagal mengambil leads:", err);
    return demoLeadsStore;
  }
}

export async function getLeadsStatsAction(): Promise<LeadsStats> {
  const allLeads = await getLeadsAction({ status: "ALL" });

  const totalLeads = allLeads.length;
  const newLeads = allLeads.filter((l) => l.status === "NEW").length;
  const inDiscussionLeads = allLeads.filter((l) => l.status === "IN_DISCUSSION" || l.status === "CONTACTED").length;
  const dealLeads = allLeads.filter((l) => l.status === "DEAL").length;
  const conversionRate = totalLeads > 0 ? Math.round((dealLeads / totalLeads) * 100) : 0;

  return {
    totalLeads,
    newLeads,
    inDiscussionLeads,
    dealLeads,
    conversionRate,
  };
}

export async function updateLeadStatusAction(
  id: string,
  status: LeadStatus,
  notes?: string
): Promise<ActionResponse<Lead>> {
  try {
    const supabase = await createClient();

    if (supabase) {
      const updatePayload: Record<string, unknown> = {
        status,
        updated_at: new Date().toISOString(),
      };
      if (notes !== undefined) {
        updatePayload.notes = notes;
      }

      const { data, error } = await supabase
        .from("leads")
        .update(updatePayload)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        return {
          success: false,
          message: error.message || "Gagal memperbarui status prospek.",
        };
      }

      return {
        success: true,
        message: "Status prospek berhasil diperbarui.",
        data: data as Lead,
      };
    }

    // Fallback store
    const index = demoLeadsStore.findIndex((l) => l.id === id);
    if (index === -1) {
      return { success: false, message: "Prospek tidak ditemukan." };
    }

    demoLeadsStore[index] = {
      ...demoLeadsStore[index],
      status,
      notes: notes !== undefined ? notes : demoLeadsStore[index].notes,
      updated_at: new Date().toISOString(),
    };

    return {
      success: true,
      message: "Status prospek berhasil diperbarui.",
      data: demoLeadsStore[index],
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Terjadi kesalahan.",
    };
  }
}

export async function deleteLeadAction(id: string): Promise<ActionResponse<null>> {
  try {
    const supabase = await createClient();

    if (supabase) {
      const { error } = await supabase.from("leads").delete().eq("id", id);
      if (error) {
        return { success: false, message: error.message };
      }
    }

    demoLeadsStore = demoLeadsStore.filter((l) => l.id !== id);

    return {
      success: true,
      message: "Prospek berhasil dihapus.",
      data: null,
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Gagal menghapus.",
    };
  }
}

export async function createLeadFromPublicAction(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}): Promise<ActionResponse<{ id: string }>> {
  try {
    const supabase = await createClient();

    if (supabase) {
      const { data: inserted, error } = await supabase
        .from("leads")
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || null,
          service: data.service,
          budget: data.budget || null,
          message: data.message,
          status: "NEW",
        })
        .select("id")
        .single();

      if (!error && inserted) {
        return {
          success: true,
          message: "Permintaan Anda telah kami terima.",
          data: { id: inserted.id },
        };
      }
    }

    // Fallback store
    const newId = "lead-" + Date.now();
    demoLeadsStore.unshift({
      id: newId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || null,
      service: data.service,
      budget: data.budget || null,
      message: data.message,
      status: "NEW",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    return {
      success: true,
      message: "Permintaan Anda telah kami terima.",
      data: { id: newId },
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Gagal menyimpan pesan.",
    };
  }
}

