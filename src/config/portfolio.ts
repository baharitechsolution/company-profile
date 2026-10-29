import { PortfolioItem } from "@/types";

export const portfolioData: PortfolioItem[] = [
  {
    id: "port-1",
    slug: "maritime-logistics-erp",
    title: "Maritime Fleet & Logistic Management System",
    category: "Enterprise / ERP",
    client: "PT Samudera Bahari Nusantara",
    year: "2024",
    summary:
      "Sistem pemantauan armada kapal terpadu dengan integrasi pelacakan GPS real-time, manajemen kru, konsumsi bahan bakar, dan billing digital.",
    thumbnail: "/images/portfolio/maritime-erp.jpg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Redis"],
  },
  {
    id: "port-2",
    slug: "smart-distribution-mobile",
    title: "Smart Distribution & Field Sales App",
    category: "Mobile App",
    client: "PT Graha Distribusi Sentosa",
    year: "2024",
    summary:
      "Aplikasi mobile salesman lapangan dengan kapabilitas offline-first, pencatatan order toko, foto display produk, dan validasi lokasi GPS anti-fake GPS.",
    thumbnail: "/images/portfolio/field-sales.jpg",
    techStack: ["React Native", "Node.js", "SQLite", "Google Maps API"],
  },
  {
    id: "port-3",
    slug: "fintech-payment-portal",
    title: "B2B Payment Gateway & Reconciliation Portal",
    category: "Web Application",
    client: "Nusantara Pay Network",
    year: "2023",
    summary:
      "Dashboard analitik multi-tenant untuk rekonsiliasi transaksi ribuan merchant secara otomatis dengan SLA 99.99%.",
    thumbnail: "/images/portfolio/fintech-portal.jpg",
    techStack: ["Next.js", "React", "Go / Golang", "Kafka", "Docker"],
  },
  {
    id: "port-4",
    slug: "cloud-infrastructure-migration",
    title: "Multi-Region Cloud Infrastructure Migration",
    category: "Cloud & DevOps",
    client: "Aura Digital Media",
    year: "2024",
    summary:
      "Migrasi dari server on-premise ke AWS dengan Kubernetes (EKS), mengurangi biaya server sebesar 42% dan zero-downtime deployment.",
    thumbnail: "/images/portfolio/cloud-migration.jpg",
    techStack: ["AWS", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    id: "port-5",
    slug: "ai-smart-customer-desk",
    title: "Omnichannel AI Customer Helpdesk",
    category: "AI & Automation",
    client: "Retailindo Multi Artha",
    year: "2024",
    summary:
      "Bot layanan pelanggan berbasis LLM yang menangani 80% pertanyaan rutin pelanggan melalui WhatsApp dan Live Chat secara instan.",
    thumbnail: "/images/portfolio/ai-helpdesk.jpg",
    techStack: ["Python", "FastAPI", "OpenAI API", "PostgreSQL", "WhatsApp API"],
  },
  {
    id: "port-6",
    slug: "industrial-iot-monitoring",
    title: "Industrial Cold Storage IoT Monitoring",
    category: "Enterprise / ERP",
    client: "PT Bahari Cold Chain",
    year: "2023",
    summary:
      "Platform dashboard pemantau suhu dan kelembaban ruang pendingin cold storage dengan notifikasi darurat SMS dan WhatsApp real-time.",
    thumbnail: "/images/portfolio/iot-monitoring.jpg",
    techStack: ["Next.js", "MQTT", "TimescaleDB", "Tailwind CSS"],
  },
];

