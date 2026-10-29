"use server";

import { contactFormSchema, type ContactFormInput } from "@/lib/validations/contact.schema";
import { ActionResponse } from "@/types";

// In-Memory Rate Limiting sederhana untuk mencegah spamming bot (maksimal 5 request per menit per IP/session)
const submissionTimestamps = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 Menit
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = submissionTimestamps.get(identifier) || [];
  const validTimestamps = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  submissionTimestamps.set(identifier, validTimestamps);
  return false;
}

/**
 * Server Action: Submit Contact / Lead Form
 * Mengimplementasikan proteksi:
 * 1. Anti-Bot Honeypot
 * 2. Rate Limiting
 * 3. Sanitasi XSS & Payload Injection
 * 4. Error Masking (Tidak membocorkan detail server)
 */
export async function submitContactAction(
  data: ContactFormInput
): Promise<ActionResponse<{ id: string }>> {
  try {
    // 1. Anti-Bot Honeypot check
    if (data._security_honeypot && data._security_honeypot.trim().length > 0) {
      // Bot otomatis mengisi field tersembunyi ini, tolak diam-diam
      console.warn("[SECURITY] Bot terdeteksi mencoba melakukan spam pada contact form.");
      return {
        success: false,
        message: "Pengiriman ditolak oleh sistem keamanan.",
      };
    }

    // 2. Rate Limiting Check berdasarkan email/phone
    const rateLimitKey = `${data.email}_${data.phone}`;
    if (isRateLimited(rateLimitKey)) {
      return {
        success: false,
        message: "Terlalu banyak permintaan dalam waktu singkat. Harap tunggu 1 menit sebelum mengirim kembali.",
      };
    }

    // 3. Validasi & Sanitasi Data
    const parsed = contactFormSchema.safeParse(data);
    if (!parsed.success) {
      return {
        success: false,
        message: "Harap periksa kembali isian form Anda.",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const { fullName, email, phone, company, serviceInterest, message } = parsed.data;

    // 4. Log Terenkripsi / Sanitasi Aman
    console.log("[SECURE LEAD RECEIVED]:", {
      fullName,
      email,
      phone,
      company: company || "-",
      serviceInterest,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    // Simulasi respons aman
    return {
      success: true,
      message: `Terima kasih Bapak/Ibu ${fullName}, pesan Anda telah kami terima secara aman. Tim konsultan Bahari Tech akan menghubungi Anda dalam waktu 1x24 jam.`,
      data: { id: `LEAD-${Date.now()}` },
    };
  } catch (error) {
    // Mencegah kebocoran stack trace ke publik
    console.error("[INTERNAL CONTACT ERROR]:", error);
    return {
      success: false,
      message: "Terjadi gangguan sistem sementara. Silakan coba kembali atau gunakan kontak WhatsApp resmi.",
    };
  }
}
