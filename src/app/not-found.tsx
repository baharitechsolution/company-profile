import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-slate-50">
      <div className="h-16 w-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
        <Compass className="h-8 w-8 animate-spin" style={{ animationDuration: "12s" }} />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
        404 - Halaman Tidak Ditemukan
      </h1>
      <p className="mt-4 max-w-md text-sm text-slate-600">
        Halaman yang Anda tuju mungkin sudah dipindahkan, dihapus, atau tautan yang Anda klik keliru.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Beranda</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

