import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Hanya proses rute admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return await updateSession(request);
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
  ],
};

