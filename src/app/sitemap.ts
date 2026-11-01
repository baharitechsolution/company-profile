import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/tentang-kami",
    "/layanan",
    "/layanan/website-web-app",
    "/layanan/aplikasi-mobile",
    "/layanan/sistem-erp-bisnis",
    "/layanan/cloud-infrastruktur",
    "/portofolio",
    "/bantuan",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/layanan/") ? 0.9 : 0.8,
  }));

  return staticRoutes;
}

