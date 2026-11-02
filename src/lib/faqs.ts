import { createClient } from "@supabase/supabase-js";
import { cacheLife, cacheTag } from "next/cache";
import { initialFaqData } from "@/config/faq";
import type { FaqItem } from "@/types/faq";

// Cache anon (tanpa cookies) agar halaman marketing tetap bisa diprerender
// dengan data FAQ dari database, bukan data statis.
export async function getPublishedFaqs(): Promise<FaqItem[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("faqs");

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return initialFaqData;
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .eq("is_published", true)
      .order("order_index", { ascending: true })
      .order("created_at", { ascending: true });

    if (!error && data && data.length > 0) {
      return data as FaqItem[];
    }
  } catch (err) {
    console.error("Gagal mengambil data FAQ:", err);
  }

  return initialFaqData;
}
