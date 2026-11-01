"use server";

import { createClient } from "@/lib/supabase/server";
import { FaqItem, FaqCategory } from "@/types/faq";
import { initialFaqData } from "@/config/faq";
import { ActionResponse } from "@/types";

// In-Memory store untuk fallback demo mode
let demoFaqsStore: FaqItem[] = [...initialFaqData];

export async function getFaqsAction(params?: {
  category?: string;
  onlyPublished?: boolean;
  search?: string;
}): Promise<FaqItem[]> {
  try {
    const supabase = await createClient();

    if (supabase) {
      let query = supabase
        .from("faqs")
        .select("*")
        .order("order_index", { ascending: true })
        .order("created_at", { ascending: true });

      if (params?.onlyPublished) {
        query = query.eq("is_published", true);
      }

      if (params?.category && params.category !== "all") {
        query = query.eq("category", params.category);
      }

      if (params?.search) {
        query = query.or(
          `question.ilike.%${params.search}%,answer.ilike.%${params.search}%`
        );
      }

      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        return data as FaqItem[];
      }
    }

    // Fallback store jika Supabase belum ada tabel faqs atau offline
    let results = [...demoFaqsStore];

    if (params?.onlyPublished) {
      results = results.filter((f) => f.is_published !== false);
    }

    if (params?.category && params.category !== "all") {
      results = results.filter((f) => f.category === params.category);
    }

    if (params?.search) {
      const q = params.search.toLowerCase();
      results = results.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }

    results.sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
    return results;
  } catch (err) {
    console.error("Gagal mengambil data FAQ:", err);
    return demoFaqsStore;
  }
}

export async function createFaqAction(data: {
  question: string;
  answer: string;
  category: FaqCategory;
  order_index?: number;
  is_published?: boolean;
}): Promise<ActionResponse<FaqItem>> {
  try {
    const supabase = await createClient();

    if (supabase) {
      const { data: inserted, error } = await supabase
        .from("faqs")
        .insert({
          question: data.question,
          answer: data.answer,
          category: data.category,
          order_index: data.order_index || 0,
          is_published: data.is_published ?? true,
        })
        .select()
        .single();

      if (!error && inserted) {
        return {
          success: true,
          message: "FAQ baru berhasil ditambahkan.",
          data: inserted as FaqItem,
        };
      }
    }

    // Fallback
    const newFaq: FaqItem = {
      id: "faq-" + Date.now(),
      question: data.question,
      answer: data.answer,
      category: data.category,
      order_index: data.order_index || demoFaqsStore.length + 1,
      is_published: data.is_published ?? true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    demoFaqsStore = [newFaq, ...demoFaqsStore];

    return {
      success: true,
      message: "FAQ baru berhasil ditambahkan.",
      data: newFaq,
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Gagal menambahkan FAQ.",
    };
  }
}

export async function updateFaqAction(
  id: string,
  data: Partial<FaqItem>
): Promise<ActionResponse<FaqItem>> {
  try {
    const supabase = await createClient();

    if (supabase) {
      const updatePayload: Record<string, unknown> = {
        ...data,
        updated_at: new Date().toISOString(),
      };

      const { data: updated, error } = await supabase
        .from("faqs")
        .update(updatePayload)
        .eq("id", id)
        .select()
        .single();

      if (!error && updated) {
        return {
          success: true,
          message: "FAQ berhasil diperbarui.",
          data: updated as FaqItem,
        };
      }
    }

    // Fallback
    const idx = demoFaqsStore.findIndex((f) => f.id === id);
    if (idx === -1) {
      return { success: false, message: "FAQ tidak ditemukan." };
    }

    demoFaqsStore[idx] = {
      ...demoFaqsStore[idx],
      ...data,
      updated_at: new Date().toISOString(),
    };

    return {
      success: true,
      message: "FAQ berhasil diperbarui.",
      data: demoFaqsStore[idx],
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Gagal mengupdate FAQ.",
    };
  }
}

export async function deleteFaqAction(id: string): Promise<ActionResponse<null>> {
  try {
    const supabase = await createClient();

    if (supabase) {
      const { error } = await supabase.from("faqs").delete().eq("id", id);
      if (error) {
        return { success: false, message: error.message };
      }
    }

    demoFaqsStore = demoFaqsStore.filter((f) => f.id !== id);

    return {
      success: true,
      message: "FAQ berhasil dihapus.",
      data: null,
    };
  } catch (err: unknown) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Gagal menghapus FAQ.",
    };
  }
}

export async function toggleFaqPublishAction(
  id: string,
  currentStatus: boolean
): Promise<ActionResponse<boolean>> {
  const newStatus = !currentStatus;
  const res = await updateFaqAction(id, { is_published: newStatus });
  if (res.success) {
    return {
      success: true,
      message: newStatus ? "FAQ berhasil dipublikasikan." : "FAQ disembunyikan (Draft).",
      data: newStatus,
    };
  }
  return {
    success: false,
    message: res.message || "Gagal mengubah status publikasi.",
    data: currentStatus,
  };
}

