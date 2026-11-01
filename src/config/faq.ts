import { FaqItem, FaqCategoryOption } from "@/types/faq";

export const faqCategories: FaqCategoryOption[] = [
  { id: "all", label: "Semua" },
  { id: "workflow", label: "Alur & Biaya" },
  { id: "security", label: "Source Code & Legal" },
  { id: "warranty", label: "Garansi & Server" },
  { id: "tech", label: "Teknologi & Fitur" },
];

export const faqCategoryOptions = faqCategories;

export const initialFaqData: FaqItem[] = [
  {
    id: "faq-tegal",
    category: "workflow",
    question: "Apakah Bahari Tech Solution melayani pembuatan website dan aplikasi di Tegal dan sekitarnya?",
    answer:
      "Ya, kantor operasional kami berada di Kecamatan Kramat, Kabupaten Tegal. Kami melayani jasa pembuatan website profil, toko online, aplikasi mobile Android & iOS, dan sistem ERP untuk UMKM maupun perusahaan di Kota Tegal, Slawi, Brebes, Pemalang, Pekalongan, hingga seluruh Indonesia baik secara tatap muka (onsite) di kantor kami maupun secara daring.",
    order_index: 1,
    is_published: true,
  },
  {
    id: "faq-1",
    category: "workflow",
    question: "Berapa lama estimasi waktu pengerjaan sebuah software atau aplikasi?",
    answer:
      "Website profil atau landing page interaktif rata-rata berkisar 2–4 minggu. Aplikasi mobile (MVP) atau modul software kustom skala menengah rata-rata membutuhkan 6–10 minggu. Sedangkan sistem Enterprise ERP multi-cabang terintegrasi umumnya memerlukan 3–5 bulan dengan metodologi Agile bertahap.",
    order_index: 2,
    is_published: true,
  },
  {
    id: "faq-2",
    category: "workflow",
    question: "Bagaimana tahapan alur kerja pembuatan software di Bahari Tech?",
    answer:
      "Kami menerapkan 5 tahapan transparan: (1) Discovery & Analisis Kebutuhan Teknis, (2) Desain UI/UX & Prototipe Interaktif di Figma, (3) Sprint Rekayasa Kode (Clean Architecture & Agile Development), (4) QA, UAT & OWASP Security Audit, dan (5) Deployment Live Server, serah terima source code, serta pelatihan tim pengguna.",
    order_index: 3,
    is_published: true,
  },
  {
    id: "faq-3",
    category: "workflow",
    question: "Berapa estimasi biaya jasa pembuatan aplikasi atau software kustom?",
    answer:
      "Investasi disesuaikan secara transparan berdasarkan ruang lingkup fitur (Scope of Work), arsitektur teknologi, dan integrasi API pihak ketiga. Kami memberikan konsultasi awal dan Rencana Anggaran Biaya (RAB) resmi tanpa biaya tersembunyi.",
    order_index: 4,
    is_published: true,
  },
  {
    id: "faq-4",
    category: "workflow",
    question: "Bagaimana skema pembayaran (termin) proyek di Bahari Tech Solution?",
    answer:
      "Pembayaran dibagi ke dalam beberapa termin berbasis pencapaian milestone resmi (contoh: DP 30%, Milestone Desain & Sprint Inti 30%, Milestone UAT 30%, dan Pelunasan Handover 10%), sehingga menjamin keamanan anggaran dan kepastian progres Anda.",
    order_index: 5,
    is_published: true,
  },
  {
    id: "faq-5",
    category: "security",
    question: "Apakah klien mendapatkan hak milik penuh atas Source Code (IP)?",
    answer:
      "Ya, 100% hak cipta intelektual (Intellectual Property) dan seluruh source code menjadi milik penuh klien setelah pelunasan proyek. Kami menyerahkan repositori kode rapi (Git), dokumentasi arsitektur, dan tanpa sistem keterikatan tertutup (vendor lock-in).",
    order_index: 6,
    is_published: true,
  },
  {
    id: "faq-6",
    category: "security",
    question: "Bagaimana Bahari Tech Solution menjamin keamanan data dan kerahasiaan bisnis?",
    answer:
      "Kerahasiaan bisnis Anda dilindungi secara hukum melalui Non-Disclosure Agreement (NDA) resmi bermaterai sebelum proyek dimulai. Sisi teknis menerapkan standar OWASP Top 10, enkripsi SSL/TLS 256-bit, dan kepatuhan regulasi UU Perlindungan Data Pribadi (PDP).",
    order_index: 7,
    is_published: true,
  },
  {
    id: "faq-7",
    category: "security",
    question: "Apakah Bahari Tech Solution entitas legal resmi yang menerbitkan Faktur Pajak?",
    answer:
      "Ya, kami beroperasi di bawah badan usaha legal resmi di Indonesia (lengkap dengan NIB, NPWP Perusahaan, rekening bank atas nama perusahaan), dan siap menerbitkan Invoice resmi, Surat Perjanjian Kerjasama (SPK), serta Faktur Pajak (PPN) untuk kebutuhan korporasi maupun instansi.",
    order_index: 8,
    is_published: true,
  },
  {
    id: "faq-8",
    category: "security",
    question: "Bagaimana jika ada pergantian tim developer internal klien di masa depan?",
    answer:
      "Seluruh kode dibangun dengan Clean Code, dokumentasi inline, dan panduan arsitektur (README & System Manual). Tim teknis baru Anda dapat melanjutkan pemeliharaan secara mandiri tanpa ketergantungan sepihak.",
    order_index: 9,
    is_published: true,
  },
  {
    id: "faq-9",
    category: "warranty",
    question: "Apakah ada garansi pemeliharaan (maintenance) setelah aplikasi selesai?",
    answer:
      "Tentu. Setiap proyek kami sertai Garansi Bebas Bug (Free Bug Fixes) dan masa pemeliharaan resmi paska-rilis selama 3 hingga 6 bulan. Kami juga menyediakan opsi SLA kontrak tahunan untuk monitoring server 24/7 dan pembaruan berkala.",
    order_index: 10,
    is_published: true,
  },
  {
    id: "faq-10",
    category: "warranty",
    question: "Apakah server, cloud hosting, dan domain dibantu pengaturannya?",
    answer:
      "Kami membantu konsultasi, arsitektur, dan deployment cloud server terbaik (AWS, GCP, DigitalOcean, atau server lokal). Akun cloud dan domain 100% didaftarkan atas nama perusahaan klien demi kepemilikan aset digital yang independen.",
    order_index: 11,
    is_published: true,
  },
  {
    id: "faq-11",
    category: "warranty",
    question: "Bagaimana penanganan jika server mengalami kendala darurat (downtime)?",
    answer:
      "Klien dengan paket SLA Maintenance mendapatkan dukungan respon cepat tim DevOps standby 24/7, failover otomatis, auto-backup database harian, serta konfigurasi proteksi firewall mitigasi DDoS.",
    order_index: 12,
    is_published: true,
  },
  {
    id: "faq-12",
    category: "warranty",
    question: "Apakah staf kami diberikan pelatihan (training) penggunaan sistem?",
    answer:
      "Ya, setiap serah terima mencakup sesi pelatihan komprehensif bagi administrator dan staf operasional (online maupun offline), dilengkapi rekaman video panduan dan buku manual penggunaan sistem (User Manual Book).",
    order_index: 13,
    is_published: true,
  },
  {
    id: "faq-13",
    category: "tech",
    question: "Teknologi (Tech Stack) apa yang digunakan untuk membangun sistem?",
    answer:
      "Kami menggunakan stack modern berkinerja tinggi: Next.js, React, TypeScript, Node.js, Go/Python, PostgreSQL, Redis, Docker, serta cloud AWS & GCP. Untuk mobile, kami memakai React Native & Flutter (lintas platform hemat) atau native Kotlin/Swift.",
    order_index: 14,
    is_published: true,
  },
  {
    id: "faq-14",
    category: "tech",
    question: "Bisakah software baru diintegrasikan dengan API atau sistem lama?",
    answer:
      "Sangat bisa. Kami berpengalaman mengintegrasikan payment gateway resmi (Midtrans, Xendit), kurir logistik, WhatsApp Business API, sistem akuntansi, database ERP lawas, maupun perangkat keras IoT via REST API, GraphQL, atau Webhook real-time.",
    order_index: 15,
    is_published: true,
  },
  {
    id: "faq-15",
    category: "tech",
    question: "Apakah Bahari Tech membantu proses upload rilis di Play Store & App Store?",
    answer:
      "Ya, kami mendampingi penuh mulai dari persiapan aset store, konfigurasi kebijakan privasi, kepatuhan pedoman Google Play & Apple App Store, hingga aplikasi terverifikasi dan sukses tayang live siap diunduh pengguna.",
    order_index: 16,
    is_published: true,
  },
  {
    id: "faq-16",
    category: "tech",
    question: "Bagaimana jika ada kebutuhan penambahan fitur baru di tengah pengerjaan?",
    answer:
      "Kami menerapkan metodologi Agile yang adaptif. Penambahan fitur baru akan dihitung dampak estimasi waktu dan biayanya melalui dokumen Change Request (CR) / Addendum resmi yang disepakati bersama secara transparan sebelum dieksekusi.",
    order_index: 17,
    is_published: true,
  },
];
