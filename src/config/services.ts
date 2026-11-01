import { ServiceItem } from "@/types";

export interface ServicePricingPackage {
  badge?: string;
  name: string;
  category: string;
  price: string;
  pricePeriod?: string;
  duration: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface ServiceWhyChoose {
  title: string;
  description: string;
}

export interface DetailedService {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  visualType: "web" | "mobile" | "enterprise" | "cloud";
  tag: string;
  heroHighlight: string;
  heroHeadingBefore: string;
  heroHeadingAfter: string;
  heroDescription: string;
  heroProofStat: string;
  heroProofLabel: string;
  metrics: {
    label: string;
    value: string;
    href: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  whyChoose: ServiceWhyChoose[];
  pricingPackages: ServicePricingPackage[];
  benefits: ServiceBenefit[];
  technologies: string[];
  deliverables: string[];
}

export const detailedServices: Record<string, DetailedService> = {
  "website-web-app": {
    id: "web-dev",
    slug: "website-web-app",
    title: "Jasa Pembuatan Website & Web Application",
    shortDesc:
      "Pengembangan aplikasi web modern, cepat, SEO-friendly, dan scalable dengan arsitektur Next.js & React terkini.",
    fullDesc:
      "Kami merancang dan membangun platform web kelas enterprise, dashboard analitik, toko online e-commerce, hingga SaaS. Fokus kami adalah performa tinggi, waktu muat kilat, ramah indeks Google SEO, dan kenyamanan pengguna maksimal.",
    iconName: "Globe",
    visualType: "web",
    tag: "APLIKASI WEB · NEXT.JS & ENTERPRISE PORTAL",
    heroHeadingBefore: "Bangun aplikasi web modern & cepat,",
    heroHighlight: "skalabilitas tinggi",
    heroHeadingAfter: "berstandar enterprise.",
    heroDescription:
      "Solusi rekayasa website profil bisnis, portal SaaS, dan aplikasi web interaktif dengan Next.js. Waktu muat kilat < 1 detik, skor Core Web Vitals 95+, dan siap menampung ribuan transaksi serentak.",
    heroProofStat: "0.6 Detik",
    heroProofLabel: "Rata-rata Waktu Muat Kilat",
    metrics: [
      {
        label: "Harga Mulai",
        value: "750 Ribu",
        href: "#paket-harga",
      },
      {
        label: "Dipercaya Lebih Dari",
        value: "750+ Klien",
        href: "/portofolio",
      },
      {
        label: "Gratis Domain & Hosting",
        value: "1 Tahun",
        href: "#paket-harga",
      },
      {
        label: "Tersedia Layanan",
        value: "Website Custom",
        href: "/layanan",
      },
    ],
    seo: {
      title: "Jasa Pembuatan Website & Web App Profesional",
      description:
        "Jasa pembuatan website profil perusahaan, web application kustom, dan toko online e-commerce dengan Next.js. Cepat, aman, ramah SEO Google, dan 100% hak milik kode.",
      keywords: [
        "Jasa Pembuatan Website Profesional",
        "Jasa Bikin Web Profil Perusahaan",
        "Jasa Pembuatan Web Application Next.js",
        "Jasa Bikin Toko Online E-Commerce",
        "Jasa Pembuatan Website Tegal Murah",
        "Software House Website Indonesia",
        "Web Developer Next.js Indonesia",
        "Jasa Bikin Landing Page Cepat",
      ],
    },
    whyChoose: [
      {
        title: "Arsitektur Next.js Modern & Cepat",
        description:
          "Menggunakan Server-Side Rendering (SSR) dan Partial Prerendering terkini yang menjamin website memuat dalam hitungan milidetik tanpa lag.",
      },
      {
        title: "Optimasi Google SEO & Core Web Vitals",
        description:
          "Struktur kode semantik, kompresi aset otomatis, dan schema JSON-LD terverifikasi yang memudahkan website Anda menduduki halaman utama pencarian Google.",
      },
      {
        title: "100% Kepemilikan Source Code Penuh",
        description:
          "Seluruh kode sumber (source code) dan repositori Git diserahkan seutuhnya tanpa sistem langganan lisensi tertutup (zero vendor lock-in).",
      },
      {
        title: "Keamanan Siber & Enkripsi Data",
        description:
          "Perlindungan keamanan berstandar OWASP Top 10, sertifikat SSL/TLS, sanitasi input formulir, dan mitigasi bot otomatis.",
      },
    ],
    pricingPackages: [
      {
        name: "Website Profil UMKM",
        category: "Skala Bisnis & UMKM",
        price: "Rp 750.000",
        duration: "1 – 2 Minggu",
        description:
          "Representasi digital kredibel untuk UMKM, toko, maupun kantor layanan agar resmi terindeks di Google dan terhubung langsung ke WhatsApp.",
        features: [
          "Gratis domain resmi (.com / .my.id) 1 tahun",
          "Gratis cloud hosting aktif 1 tahun",
          "Desain responsif mobile & desktop",
          "Integrasi tombol WhatsApp & Google Maps",
          "Konfigurasi Google Search Console (SEO)",
          "Garansi bug fixes 3 bulan paska-rilis",
        ],
        ctaText: "Pilih Paket Profil UMKM",
      },
      {
        name: "E-Commerce & Toko Online",
        category: "Katalog & Transaksi",
        price: "Rp 2.500.000",
        duration: "3 – 5 Minggu",
        isPopular: true,
        badge: "Paling Diminati",
        description:
          "Platform penjualan terpadu dengan etalase inventaris produk, keranjang belanja, kalkulasi ongkos kirim kurir, dan pembayaran otomatis.",
        features: [
          "Semua fitur paket profil disertakan",
          "Dashboard manajemen produk & stok barang",
          "Integrasi Payment Gateway resmi (QRIS & VA)",
          "Hitung ongkir ekspedisi otomatis se-Indonesia",
          "Notifikasi order otomatis via WhatsApp / Email",
          "Laporan omzet penjualan & ekspor data",
        ],
        ctaText: "Pilih Paket Toko Online",
      },
      {
        name: "Custom Web App / Portal",
        category: "Skala Enterprise & SaaS",
        price: "Mulai Rp 6.000.000",
        duration: "6 – 10 Minggu",
        description:
          "Aplikasi web interaktif dengan logika bisnis kompleks, sistem keanggotaan/portal klien, dashboard analitik, dan integrasi API pihak ketiga.",
        features: [
          "Arsitektur Fullstack Next.js & PostgreSQL",
          "Sistem Role & Permission (RBAC) ketat",
          "Integrasi REST API, GraphQL & Webhook",
          "Audit keamanan OWASP & load testing",
          "Dokumentasi arsitektur & panduan teknis",
          "Handover repositori kode Git 100% lengkap",
        ],
        ctaText: "Konsultasi Web App Custom",
      },
    ],
    benefits: [
      {
        title: "Peningkatan Konversi Penjualan",
        description:
          "Waktu muat yang kilat dan alur navigasi yang intuitif mencegah calon pembeli berpindah ke kompetitor.",
        metric: "+45%",
        metricLabel: "Rata-Rata Konversi",
      },
      {
        title: "Kredibilitas Brand Terpercaya",
        description:
          "Tampilan profesional meningkatkan rasa percaya calon klien korporat maupun konsumen ritel.",
        metric: "100%",
        metricLabel: "Brand Identity",
      },
      {
        title: "Bebas Biaya Royalti Berulang",
        description:
          "Website milik Anda sepenuhnya tanpa potongan biaya transaksi tersembunyi dari platform sepihak.",
        metric: "0 Rp",
        metricLabel: "Biaya Lisensi",
      },
      {
        title: "Kemudahan Ditemukan di Google",
        description:
          "Fondasi SEO teknis yang solid memastikan halaman layanan dan produk Anda mudah dijangkau pelanggan baru.",
        metric: "Top 5",
        metricLabel: "Pencarian Lokal",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    deliverables: [
      "Source Code Lengkap (Git Repository)",
      "Akses Domain & Cloud Hosting Mandiri",
      "Buku Panduan Pengelolaan (User Manual)",
      "Garansi Pemeliharaan Bug-Free 3-6 Bulan",
    ],
  },
  "aplikasi-mobile": {
    id: "mobile-dev",
    slug: "aplikasi-mobile",
    title: "Jasa Pembuatan Aplikasi Mobile Android & iOS",
    shortDesc:
      "Solusi aplikasi mobile iOS dan Android yang powerful, responsif, hemat daya, dan siap lolos kurasi Google Play & App Store.",
    fullDesc:
      "Kami merancang dan mengembangkan aplikasi mobile berkualitas tinggi menggunakan framework modern Flutter dan React Native serta Native Kotlin/Swift. Menghadirkan performa mulus 60 FPS, sinkronisasi offline cerdas, dan integrasi fitur smartphone mutakhir.",
    iconName: "Smartphone",
    visualType: "mobile",
    tag: "APLIKASI MOBILE · ANDROID & IOS",
    heroHeadingBefore: "Bangun aplikasi mobile modern, ditemukan oleh",
    heroHighlight: "jutaan pengguna",
    heroHeadingAfter: "lintas platform.",
    heroDescription:
      "Pengembangan aplikasi mobile native & cross-platform dengan performa 60 FPS, arsitektur hemat daya, dan pendampingan penuh hingga sukses terbit di Google Play Store & Apple App Store.",
    heroProofStat: "50+",
    heroProofLabel: "Aplikasi Sukses Rilis di Store",
    metrics: [
      {
        label: "Harga Mulai",
        value: "Mulai 8 Jt-an",
        href: "#paket-harga",
      },
      {
        label: "Portofolio Rilis",
        value: "50+ Aplikasi di Store",
        href: "/portofolio",
      },
    ],
    seo: {
      title: "Jasa Pembuatan Aplikasi Mobile Android & iOS",
      description:
        "Jasa bikin aplikasi mobile Android dan iOS profesional menggunakan Flutter & React Native. Performa tinggi, fitur lengkap, dan pendampingan rilis Play Store & App Store.",
      keywords: [
        "Jasa Pembuatan Aplikasi Mobile",
        "Jasa Pembuatan Aplikasi Android iOS",
        "Jasa Bikin Aplikasi HP Murah",
        "Software House Mobile App Indonesia",
        "Flutter Developer Indonesia",
        "React Native Mobile App Development",
        "Jasa Bikin Aplikasi Kasir Android",
        "Upload Play Store dan App Store",
      ],
    },
    whyChoose: [
      {
        title: "Performa Tinggi 60 FPS & Hemat Baterai",
        description:
          "Pengoptimalan kode hingga ke level native memastikan animasi terasa mulus, transisi instan, dan konsumsi daya perangkat sangat efisien.",
      },
      {
        title: "Satu Codebase untuk Android & iOS",
        description:
          "Memangkas waktu dan anggaran hingga 40% menggunakan Flutter / React Native tanpa mengorbankan kualitas dan tampilan spesifik platform.",
      },
      {
        title: "Pendampingan Kurasi Play Store & App Store",
        description:
          "Kami mendampingi proses verifikasi akun developer, kepatuhan kebijakan privasi, hingga aplikasi disetujui dan live siap diunduh.",
      },
      {
        title: "Offline-First & Smart Sync",
        description:
          "Aplikasi tetap dapat digunakan oleh staf lapangan saat sinyal terputus, dan otomatis menyinkronkan data begitu koneksi kembali aktif.",
      },
    ],
    pricingPackages: [
      {
        name: "MVP Mobile Application",
        category: "Startup & Validasi Ide",
        price: "Mulai Rp 8.000.000",
        duration: "4 – 6 Minggu",
        description:
          "Paket peluncuran minimum viable product untuk memvalidasi ide bisnis baru di pasar Android dengan alur pengguna inti yang solid.",
        features: [
          "Pengembangan aplikasi untuk platform Android",
          "Desain UI/UX interaktif berbasis Figma",
          "Autentikasi akun (Login, Register, OTP)",
          "Integrasi REST API backend terpusat",
          "Bantuan publikasi resmi ke Google Play Store",
          "Garansi teknis bebas bug selama 3 bulan",
        ],
        ctaText: "Mulai Konsultasi MVP",
      },
      {
        name: "Cross-Platform Business App",
        category: "Operasional & Customer",
        price: "Mulai Rp 14.000.000",
        duration: "7 – 10 Minggu",
        isPopular: true,
        badge: "Paling Populer",
        description:
          "Aplikasi bisnis multi-platform untuk iOS dan Android sekaligus, dirancang untuk operasional harian atau layanan langsung ke konsumen.",
        features: [
          "Dukungan penuh untuk Android & Apple iOS",
          "Integrasi push notification real-time (FCM)",
          "Geolocation & pelacakan lokasi Google Maps",
          "Integrasi payment gateway QRIS & transfer",
          "Offline mode & sinkronisasi data cerdas",
          "Pendampingan approval Play Store & App Store",
        ],
        ctaText: "Pilih Paket Cross-Platform",
      },
      {
        name: "Enterprise Custom Mobile",
        category: "Korporasi Skala Besar",
        price: "Mulai Rp 25.000.000",
        duration: "10 – 16 Minggu",
        description:
          "Solusi aplikasi mobile tingkat lanjut terhubung ke ERP internal, arsitektur microservices, keamanan biometrik, dan performa tinggi.",
        features: [
          "Arsitektur Clean Architecture modular",
          "Autentikasi biometrik (Fingerprint & FaceID)",
          "Integrasi Bluetooth printer & scanner barcode",
          "Keamanan enkripsi AES-256 data lokal",
          "Dokumentasi API & serah terima source code",
          "SLA dukungan pemeliharaan prioritas",
        ],
        ctaText: "Diskusikan Kebutuhan Enterprise",
      },
    ],
    benefits: [
      {
        title: "Retensi Pelanggan Lebih Tinggi",
        description:
          "Aplikasi yang terpasang di smartphone pelanggan menciptakan jalur komunikasi langsung melalui notifikasi push gratis.",
        metric: "3.2x",
        metricLabel: "Frekuensi Kunjungan",
      },
      {
        title: "Efisiensi Operasional Lapangan",
        description:
          "Staf dan kurir dapat menginput data, foto bukti kerja, dan lokasi GPS secara real-time tanpa kertas manual.",
        metric: "80%",
        metricLabel: "Hemat Waktu Input",
      },
      {
        title: "Akses Offline Kapan Saja",
        description:
          "Bisnis tetap berjalan lancar tanpa terhenti walau berada di area blank spot sinyal internet.",
        metric: "99.9%",
        metricLabel: "Kesiapan Sistem",
      },
      {
        title: "Keamanan Data Sensitif",
        description:
          "Penyimpanan token terenkripsi dan protokol proteksi data pribadi pengguna sesuai standar hukum PDP.",
        metric: "Level A+",
        metricLabel: "Standar Keamanan",
      },
    ],
    technologies: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase", "PostgreSQL"],
    deliverables: [
      "File Build Rilis (.aab untuk Android & .ipa untuk iOS)",
      "Source Code Lengkap Repositori Git",
      "Aset Ikon, Banner & Screenshot Store",
      "Garansi Bebas Bug 3-6 Bulan",
    ],
  },
  "sistem-erp-bisnis": {
    id: "enterprise-sys",
    slug: "sistem-erp-bisnis",
    title: "Jasa Pembuatan Sistem ERP & Software Bisnis",
    shortDesc:
      "Digitalisasi proses bisnis internal perusahaan dengan sistem ERP, CRM, dan inventory management multi-cabang terintegrasi.",
    fullDesc:
      "Tinggalkan pencatatan manual dan spreadsheet yang rentan kesalahan. Kami merekayasa software bisnis kustom yang disesuaikan persis dengan alur kerja operasional perusahaan Anda—mulai dari manajemen stok, akuntansi keuangan, HRIS, hingga rantai pasok tanpa biaya sewa bulanan.",
    iconName: "Boxes",
    visualType: "enterprise",
    tag: "SOFTWARE HOUSE · ENTERPRISE ERP",
    heroHeadingBefore: "Kembangkan bisnis dan operasional dengan",
    heroHighlight: "software kustom",
    heroHeadingAfter: "yang andal & siap pakai.",
    heroDescription:
      "Rekayasa sistem ERP dan software enterprise kustom multi-cabang terintegrasi. Skalabel, bebas lag, dan bergaransi resmi tanpa biaya lisensi per-user berulang.",
    heroProofStat: "100k+",
    heroProofLabel: "Transaksi Harian Tanpa Lag",
    metrics: [
      {
        label: "Harga Mulai",
        value: "750 Ribu",
        href: "#paket-harga",
      },
      {
        label: "Dipercaya Lebih Dari",
        value: "750+ Klien",
        href: "/portofolio",
      },
      {
        label: "Gratis Domain & Hosting",
        value: "1 Tahun",
        href: "#paket-harga",
      },
      {
        label: "Tersedia Layanan",
        value: "Sistem Custom",
        href: "/layanan",
      },
    ],
    seo: {
      title: "Jasa Pembuatan Sistem ERP & Software Bisnis Kustom",
      description:
        "Jasa pembuatan sistem ERP perusahaan, software kasir POS gudang, aplikasi akuntansi, dan inventaris multi-cabang tanpa biaya lisensi bulanan.",
      keywords: [
        "Jasa Pembuatan Sistem ERP",
        "Jasa Bikin Software ERP Perusahaan",
        "Software House ERP Indonesia",
        "Jasa Pembuatan Program Kasir Gudang",
        "Custom Software ERP Multi Cabang",
        "Sistem Inventaris Stok Barang Otomatis",
        "Jasa Bikin Aplikasi Kantor Kustom",
        "Software ERP Tanpa Biaya Lisensi Bulanan",
      ],
    },
    whyChoose: [
      {
        title: "Disesuaikan 100% dengan Alur Kerja Anda",
        description:
          "Bukan software template kaku. Modul dan formula sistem dirancang persis mengikuti Standar Operasional Prosedur (SOP) internal bisnis Anda.",
      },
      {
        title: "Tanpa Biaya Lisensi Per-User (Zero Recurring Fees)",
        description:
          "Sistem adalah aset milik perusahaan Anda sepenuhnya. Anda dapat menambah karyawan atau cabang tanpa kenaikan tagihan software bulanan.",
      },
      {
        title: "Sinkronisasi Data Multi-Cabang Real-Time",
        description:
          "Pusat, gudang logistik, dan seluruh cabang gerai terhubung secara langsung dalam satu basis data terpusat yang akurat.",
      },
      {
        title: "Hak Akses Bertingkat (RBAC) & Audit Trail",
        description:
          "Setiap aktivitas perubahan data tercatat dengan detail siapa yang melakukan, kapan, dan dari mana untuk mencegah kecurangan internal.",
      },
    ],
    pricingPackages: [
      {
        name: "Modul Inventaris & Kasir POS",
        category: "Toko Grosir & Ritel",
        price: "Mulai Rp 5.500.000",
        duration: "3 – 5 Minggu",
        description:
          "Solusi manajemen stok masuk-keluar, pencatatan transaksi kasir harian, cetak struk nota, dan laporan laba-rugi otomatis.",
        features: [
          "Modul kasir cepat (Point of Sale)",
          "Manajemen katalog barang & nomor barcode",
          "Peringatan stok menipis otomatis",
          "Multi-kasir dengan pembatasan hak akses",
          "Laporan omzet penjualan & laba kotor",
          "Pelatihan operasional staf kasir & admin",
        ],
        ctaText: "Konsultasi Modul Kasir",
      },
      {
        name: "Sistem ERP Multi-Cabang",
        category: "Distribusi & Manufaktur",
        price: "Mulai Rp 12.000.000",
        duration: "6 – 10 Minggu",
        isPopular: true,
        badge: "Solusi Pilihan",
        description:
          "Sistem terintegrasi untuk perusahaan berkembang dengan beberapa gerai, gudang terpisah, serta manajemen purchasing dan piutang.",
        features: [
          "Modul Purchasing, Gudang, Sales & Keuangan",
          "Sinkronisasi stok antar-gudang dan cabang",
          "Manajemen utang-piutang & jatuh tempo invoice",
          "Dashboard pemantauan performa cabang real-time",
          "Ekspor laporan akuntansi ke format Excel & PDF",
          "Auto-backup database harian terenkripsi",
        ],
        ctaText: "Pilih Solusi Multi-Cabang",
      },
      {
        name: "Enterprise ERP Custom",
        category: "Korporasi Skala Penuh",
        price: "Mulai Rp 25.000.000",
        duration: "10 – 18 Minggu",
        description:
          "Rekayasa sistem korporat komprehensif mencakup HRIS payroll, integrasi mesin pabrik / IoT, approval berjenjang, dan audit kepatuhan.",
        features: [
          "Pengembangan modul custom tak terbatas",
          "Integrasi sistem perbankan / API pihak ketiga",
          "Alur approval dokumen berjenjang (Multi-level)",
          "Pengujian performa tinggi (High Concurrency)",
          "Serah terima source code dan manual arsitektur",
          "Garansi resmi bebas bug & SLA pemeliharaan",
        ],
        ctaText: "Konsultasi Rencana ERP",
      },
    ],
    benefits: [
      {
        title: "Pencegahan Kebocoran Stok & Fraud",
        description:
          "Pencatatan barcode dan audit trail ketat mengeliminasi selisih stok fisik dan manipulasi nota manual.",
        metric: "99.8%",
        metricLabel: "Akurasi Stok",
      },
      {
        title: "Pengambilan Keputusan Lebih Cepat",
        description:
          "Laporan omzet, produk terlaris, dan arus kas tersedia seketika tanpa menunggu rekap bulanan staf.",
        metric: "Real-Time",
        metricLabel: "Laporan Bisnis",
      },
      {
        title: "Penghematan Biaya Software Jangka Panjang",
        description:
          "Hindari biaya langganan software SaaS luar negeri yang semakin mahal seiring bertambahnya jumlah staf.",
        metric: "Hemat 70%",
        metricLabel: "Biaya 3 Tahun",
      },
      {
        title: "Skalabilitas Bisnis Tanpa Hambatan",
        description:
          "Membuka cabang baru semudah mendaftarkan lokasi baru di sistem tanpa merombak infrastruktur dari awal.",
        metric: "Mudah",
        metricLabel: "Ekspansi Cabang",
      },
    ],
    technologies: ["PostgreSQL", "Next.js", "Docker", "Node.js", "Redis", "TypeScript"],
    deliverables: [
      "100% Source Code & Repositori Git",
      "Server Deployment & Konfigurasi Backup Otomatis",
      "Sesi Pelatihan Staf & Rekaman Video Panduan",
      "Buku Manual Penggunaan Sistem (PDF)",
      "Garansi Bebas Bug Resmi",
    ],
  },
  "cloud-infrastruktur": {
    id: "cloud-devops",
    slug: "cloud-infrastruktur",
    title: "Jasa Cloud Architecture, DevOps & Keamanan Server",
    shortDesc:
      "Modernisasi infrastruktur server cloud, CI/CD pipeline otomatis, dan jaminan keamanan data dengan SLA 99.98%.",
    fullDesc:
      "Kami membantu perusahaan mengonfigurasi dan mengelola infrastruktur cloud server (AWS, Google Cloud, DigitalOcean, maupun server lokal) yang hemat biaya, aman dari serangan siber, dan memiliki ketersediaan tinggi tanpa risiko downtime di jam sibuk.",
    iconName: "CloudCog",
    visualType: "cloud",
    tag: "CLOUD DEVOPS · CYBERSECURITY",
    heroHeadingBefore: "Modernisasi infrastruktur server,",
    heroHighlight: "siap scale-up",
    heroHeadingAfter: "tanpa celah keamanan.",
    heroDescription:
      "Arsitektur cloud server elastis berstandar audit OWASP dengan proteksi anti-DDoS 24/7 dan efisiensi biaya tagihan cloud server hingga 42% lebih stabil.",
    heroProofStat: "99.99%",
    heroProofLabel: "SLA Uptime Cloud Server",
    metrics: [
      {
        label: "Audit & Cloud Mulai",
        value: "Konsultasi RAB",
        href: "#paket-harga",
      },
      {
        label: "Kredibilitas Server",
        value: "SLA 99.99% Uptime",
        href: "/portofolio",
      },
    ],
    seo: {
      title: "Jasa Cloud Architecture, DevOps & Keamanan Server",
      description:
        "Jasa konfigurasi server cloud AWS & GCP, setup CI/CD pipeline otomatis, optimasi biaya hosting, proteksi anti-DDoS, dan audit keamanan server.",
      keywords: [
        "Jasa Cloud DevOps Indonesia",
        "Jasa Setup Server AWS Google Cloud",
        "Konsultan Cloud Architecture",
        "Jasa Migrasi Server Cloud",
        "Optimasi Biaya Server Cloud AWS",
        "Jasa Keamanan Server Anti DDoS",
        "Setup Docker Kubernetes Indonesia",
        "Jasa Maintenance Server 24/7",
      ],
    },
    whyChoose: [
      {
        title: "Efisiensi Biaya Tagihan Cloud hingga 42%",
        description:
          "Kami menganalisis penggunaan sumber daya dan mematikan komponen yang tidak perlu, sehingga Anda hanya membayar apa yang benar-benar digunakan.",
      },
      {
        title: "Jaminan Ketersediaan Tinggi (SLA 99.98%)",
        description:
          "Konfigurasi failover otomatis, load balancing, dan redundansi server memastikan aplikasi Anda tetap hidup meski terjadi gangguan jaringan.",
      },
      {
        title: "Sistem Backup Otomatis & Disaster Recovery",
        description:
          "Pencadangan database harian terenkripsi ke lokasi penyimpanan terpisah, memastikan data bisnis Anda selalu dapat dipulihkan dalam menit.",
      },
      {
        title: "Proteksi Firewall Berlapis & Anti-DDoS",
        description:
          "Mitigasi serangan brute-force, web traffic jahat, dan serangan DDoS menggunakan arsitektur Cloudflare dan Web Application Firewall (WAF).",
      },
    ],
    pricingPackages: [
      {
        name: "Audit & Migrasi Server",
        category: "Optimasi Awal",
        price: "Mulai Rp 2.500.000",
        duration: "1 – 2 Minggu",
        description:
          "Audit keamanan menyeluruh, perapihan konfigurasi server lama, dan migrasi aman tanpa downtime data bisnis Anda.",
        features: [
          "Audit keamanan celah server & open port",
          "Analisis pemborosan tagihan cloud bulanan",
          "Migrasi database dan file aman (Zero Data Loss)",
          "Konfigurasi SSL/TLS enkripsi HTTPS resmi",
          "Pemasangan firewall mitigasi brute-force",
          "Dokumentasi kredensial dan topologi server",
        ],
        ctaText: "Mulai Audit Server",
      },
      {
        name: "Setup CI/CD & Containerisasi",
        category: "Otomatisasi Deployment",
        price: "Mulai Rp 5.000.000",
        duration: "2 – 4 Minggu",
        isPopular: true,
        badge: "Efisiensi Tim IT",
        description:
          "Otomatisasi rilis kode tim developer dari GitHub langsung ke server produksi tanpa perlu upload manual via FTP.",
        features: [
          "Setup Docker Containerization aplikasi",
          "Pipeline CI/CD otomatis via GitHub Actions",
          "Pemisahan environment Staging dan Production",
          "Monitoring performa CPU, RAM & disk 24/7",
          "Notifikasi alert darurat via Telegram / Slack",
          "Auto-restart container saat terjadi error",
        ],
        ctaText: "Pilih Setup CI/CD",
      },
      {
        name: "Managed Cloud & DevOps SLA",
        category: "Pemeliharaan Standby 24/7",
        price: "Mulai Rp 3.500.000",
        pricePeriod: "/ bulan",
        duration: "Kontrak Fleksibel",
        description:
          "Layanan tim DevOps profesional yang mengawasi server Anda 24 jam penuh, pembaruan patch keamanan berkala, dan penanganan insiden darurat.",
        features: [
          "Monitoring uptime server standby 24 jam",
          "Penanganan insiden darurat response time < 30 menit",
          "Pembaruan security patch OS berkala",
          "Verifikasi integritas backup database harian",
          "Laporan performa dan utilisasi server bulanan",
          "Konsultasi arsitektur scale-up berkala",
        ],
        ctaText: "Langganan Managed Cloud",
      },
    ],
    benefits: [
      {
        title: "Server Stabil di Momen Lonjakan Trafik",
        description:
          "Sistem tidak tumbang saat kampanye promosi atau akhir bulan ketika ribuan pengguna mengakses bersamaan.",
        metric: "99.99%",
        metricLabel: "Uptime Terjamin",
      },
      {
        title: "Penghematan Anggaran Server Nyata",
        description:
          "Arsitektur tepat guna mencegah pembelian spesifikasi server berlebihan yang membebani kas perusahaan.",
        metric: "Hingga 42%",
        metricLabel: "Hemat Biaya Cloud",
      },
      {
        title: "Kecepatan Rilis Fitur Baru",
        description:
          "Developer fokus menulis kode tanpa repot urusan server karena proses deployment sudah berjalan otomatis.",
        metric: "5x Lebih Cepat",
        metricLabel: "Siklus Rilis",
      },
      {
        title: "Ketenangan Pikiran (Peace of Mind)",
        description:
          "Data bisnis selalu aman dengan auto-backup dan sistem proteksi siber aktif yang berjaga tanpa henti.",
        metric: "24/7",
        metricLabel: "Proteksi Server",
      },
    ],
    technologies: ["AWS", "Google Cloud", "DigitalOcean", "Docker", "Kubernetes", "Linux", "Cloudflare", "GitHub Actions"],
    deliverables: [
      "Diagram Topologi Arsitektur Cloud Resmi",
      "Akses Akun Cloud Server 100% Milik Klien",
      "Skrip Otomasi Deployment & Konfigurasi Docker",
      "Dokumentasi SOP Pemulihan Bencana (Disaster Recovery)",
    ],
  },
};

export const servicesData: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "website-web-app",
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
    slug: "aplikasi-mobile",
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
    slug: "sistem-erp-bisnis",
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
    slug: "cloud-infrastruktur",
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
    slug: "website-web-app#ai-automation",
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
    slug: "cloud-infrastruktur#it-consulting",
    title: "IT Strategic Consulting & Audit",
    shortDesc:
      "Pendampingan strategi teknologi, audit arsitektur kode, dan perencanaan roadmap transformasi digital.",
    fullDesc:
      "Konsultasikan kebutuhan teknis bisnis Anda bersama arsitek perangkat lunak senior kami untuk memilih stack teknologi yang tepat, hemat biaya jangka panjang, dan siap scale-up.",
    iconName: "ShieldCheck",
    features: [
      "Software Architecture & Code Audit",
      "Perencanaan Roadmap Transformasi Digital",
      "Mitigasi Risiko Keamanan & Kepatuhan PDP",
      "Review Efisiensi Lisensi & Cloud",
    ],
    technologies: ["OWASP", "ISO 27001", "Git", "Microservices", "System Design"],
  },
];
