import { z } from "zod";

// Helper untuk membersihkan potensi serangan XSS (Script / HTML Injection)
export function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // Hapus semua tag HTML (<script>, <iframe>, <img>)
    .replace(/[<>"'&]/g, (char) => {
      // Escape HTML entities berbahaya
      switch (char) {
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#x27;";
        case "&":
          return "&amp;";
        default:
          return char;
      }
    })
    .trim();
}

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Nama lengkap minimal 2 karakter" })
    .max(80, { message: "Nama maksimal 80 karakter" })
    .transform(sanitizeInput),
  email: z
    .string()
    .email({ message: "Format email tidak valid" })
    .max(100, { message: "Email terlalu panjang" })
    .transform((val) => val.toLowerCase().trim()),
  phone: z
    .string()
    .min(9, { message: "Nomor WhatsApp/telepon minimal 9 digit" })
    .max(20, { message: "Nomor telepon maksimal 20 digit" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Nomor telepon hanya boleh angka dan simbol +, -, ()" })
    .transform(sanitizeInput),
  company: z
    .string()
    .max(100, { message: "Nama perusahaan maksimal 100 karakter" })
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : "")),
  serviceInterest: z
    .string()
    .min(1, { message: "Harap pilih layanan yang Anda butuhkan" })
    .max(100)
    .transform(sanitizeInput),
  message: z
    .string()
    .min(10, { message: "Deskripsi kebutuhan minimal 10 karakter" })
    .max(2000, { message: "Deskripsi kebutuhan maksimal 2000 karakter" })
    .transform(sanitizeInput),
  // Honeypot field untuk menangkap bot spam otomatis tanpa mengganggu user manusia
  _security_honeypot: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
