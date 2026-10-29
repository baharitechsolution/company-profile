import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Web Application & Portal",
    shortDesc:
      "Pengembangan aplikasi web modern, cepat, SEO-friendly, dan scalable dengan arsitektur Next.js & React terkini.",
    fullDesc:
      "Kami merancang dan membangun platform web kelas enterprise, dashboard analitik, e-commerce, hingga SaaS. Fokus kami adalah performa tinggi, keamanan berstandar industri, dan pengalaman pengguna (UI/UX) yang intuitif.",
    iconName: "Globe",
    features: [
      "Arsitektur Next.js & Server Side Rendering (SSR)",
      "Desain Responsif & Mobile-First",
      "Optimasi SEO & Core Web Vitals 95+",
      "Integrasi Payment Gateway & Third-party API",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "mobile-dev",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc:
      "Solusi aplikasi mobile iOS dan Android yang powerful, responsif, dan memberikan user experience kelas dunia.",
    fullDesc:
      "Mulai dari aplikasi B2B operasional lapangan hingga aplikasi consumer dengan jutaan pengguna, tim engineer kami menggunakan Flutter dan React Native untuk efisiensi biaya dan performa native.",
    iconName: "Smartphone",
    features: [
      "Cross-Platform (iOS & Android) dari satu codebase",
      "Integrasi Notifikasi Push & Geolocation",
      "Offline Mode & Sinkronisasi Data Cerdas",
      "Keamanan Data & Biometric Authentication",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "enterprise-sys",
    slug: "enterprise-system-erp",
    title: "Enterprise ERP & Custom Software",
    shortDesc:
      "Digitalisasi proses bisnis internal perusahaan dengan sistem ERP, CRM, dan inventory management terintegrasi.",
    fullDesc:
      "Tinggalkan pencatatan manual. Kami membangun sistem operasional yang disesuaikan persis dengan alur kerja perusahaan Anda—mulai dari manajemen stok, keuangan, HRIS, hingga rantai pasok (supply chain).",
    iconName: "Boxes",
    features: [
      "Modul Kustom (HRIS, Finance, Inventory, Purchasing)",
      "Role-Based Access Control (RBAC) ketat",
      "Laporan Real-Time & Export Multi-format",
      "Audit Trail & Log Aktivitas Lengkap",
    ],
    technologies: ["PostgreSQL", "Next.js", "Docker", "Prisma", "Redis"],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops-infrastructure",
    title: "Cloud & DevOps Architecture",
    shortDesc:
      "Modernisasi infrastruktur server cloud, CI/CD pipeline otomatis, dan jaminan keamanan data tingkat tinggi.",
    fullDesc:
      "Kami membantu bisnis Anda bermigrasi ke cloud (AWS, Google Cloud, Azure), menerapkan arsitektur microservices atau serverless, serta otomatisasi deployment agar tim pengembang Anda dapat merilis fitur lebih cepat tanpa downtime.",
    iconName: "CloudCog",
    features: [
      "Setup Containerization (Docker & Kubernetes)",
      "Automated CI/CD Pipeline (GitHub Actions)",
      "High Availability & Auto-scaling",
      "Monitoring 24/7 & Disaster Recovery",
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Linux"],
  },
  {
    id: "ai-automation",
    slug: "ai-data-automation",
    title: "AI & Smart Automation",
    shortDesc:
      "Otomatisasi proses bisnis dan integrasi kecerdasan buatan (AI) untuk efisiensi operasional maksimal.",
    fullDesc:
      "Integrasi LLM/AI untuk asisten pelanggan pintar, analisis data prediktif, OCR ekstraksi dokumen, hingga integrasi bot otomatis WhatsApp yang mempercepat layanan pelanggan Anda.",
    iconName: "Cpu",
    features: [
      "Custom AI Assistant & Smart Chatbot",
      "Otomatisasi Dokumen & OCR Scanner",
      "Integrasi WhatsApp Business API",
      "Analisis Prediktif Data Penjualan",
    ],
    technologies: ["Python", "OpenAI / Gemini API", "LangChain", "FastAPI"],
  },
  {
    id: "it-consulting",
    slug: "it-consulting-audit",
    title: "IT Strategic Consulting & Audit",
    shortDesc:
      "Pendampingan strategi teknologi, audit arsitektur kode, dan perencanaan roadmap transformasi digital.",
    fullDesc:
      "Konsultasikan kebutuhan teknis bisnis Anda bersama arsitek perangkat lunak senior kami untuk memilih stack teknologi yang tepat, hemat biaya jangka panjang, dan siap scale-up.",
    iconName: "ShieldCheck",
    features: [
      "Software Architecture & Code Audit",
      "Perencanaan Roadmap Transformasi Digital",
      "Penetration Testing & Security Assessment",
      "Estimasi Biaya Infrastruktur (Cost Optimization)",
    ],
    technologies: ["TOGAF", "OWASP", "Clean Architecture", "Scrum"],
  },
];

