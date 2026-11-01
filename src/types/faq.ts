export type FaqCategory = "workflow" | "security" | "warranty" | "tech";

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  order_index?: number;
  is_published?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface FaqCategoryOption {
  id: "all" | FaqCategory;
  label: string;
}

