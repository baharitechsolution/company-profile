export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "IN_DISCUSSION"
  | "DEAL"
  | "REJECTED"
  | "ARCHIVED";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string | null;
  service: string;
  budget?: string | null;
  message: string;
  status: LeadStatus;
  notes?: string | null;
  created_at: string;
  updated_at: string;
}

export type AdminRole = "SUPER_ADMIN" | "ADMIN";

export interface AdminUser {
  id: string;
  email: string;
  full_name: string;
  role: AdminRole;
  avatar_url?: string | null;
  created_at: string;
}

export interface LeadsStats {
  totalLeads: number;
  newLeads: number;
  inDiscussionLeads: number;
  dealLeads: number;
  conversionRate: number;
}

