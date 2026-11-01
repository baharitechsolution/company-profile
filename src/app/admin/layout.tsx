import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | Bahari Tech Solution",
  description: "Portal administrasi internal dan manajemen prospek CV. Bahari Tech Solution.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#EBF4FA] text-slate-800 antialiased selection:bg-[#1482C2] selection:text-white font-sans">
      {children}
    </div>
  );
}
