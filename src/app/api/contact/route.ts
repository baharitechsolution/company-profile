import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Anti-Bot Honeypot
    if (body._security_honeypot && String(body._security_honeypot).trim().length > 0) {
      console.warn("[SECURITY REST API] Bot detected in honeypot");
      return NextResponse.json(
        {
          success: false,
          message: "Request rejected by security firewall.",
        },
        { status: 400 }
      );
    }

    // 2. Strict Input Validation & XSS Sanitization
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Data input tidak valid.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const validData = parsed.data;

    // 3. Log data yang sudah disanitasi
    console.log("[SECURE REST API /api/contact]:", {
      fullName: validData.fullName,
      email: validData.email,
      phone: validData.phone,
      company: validData.company || "-",
      serviceInterest: validData.serviceInterest,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Permintaan konsultasi berhasil diterima dengan aman.",
        data: {
          id: `LEAD-${Date.now()}`,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[REST API INTERNAL ERROR]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi gangguan sistem internal.",
      },
      { status: 500 }
    );
  }
}
