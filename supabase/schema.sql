-- ==============================================================================
-- BAHARI TECH SOLUTION - SUPABASE DATABASE INITIAL SCHEMA
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TABLE: PROFILES (ADMIN & INTERNAL USERS)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'ADMIN' CHECK (role IN ('SUPER_ADMIN', 'ADMIN')),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. TABLE: LEADS (MESSAGES / CONSULTATION REQUESTS FROM PUBLIC WEBSITE)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT,
    service TEXT NOT NULL,
    budget TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'CONTACTED', 'IN_DISCUSSION', 'DEAL', 'REJECTED', 'ARCHIVED')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. TABLE: FAQS (FREQUENTLY ASKED QUESTIONS)
CREATE TABLE IF NOT EXISTS public.faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category TEXT NOT NULL DEFAULT 'workflow' CHECK (category IN ('workflow', 'security', 'warranty', 'tech')),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- Leads Policies:
CREATE POLICY "Public can insert leads"
    ON public.leads
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
    ON public.leads
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated users can update leads"
    ON public.leads
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Authenticated users can delete leads"
    ON public.leads
    FOR DELETE
    TO authenticated
    USING (true);

-- Profiles Policies:
CREATE POLICY "Authenticated users can view profiles"
    ON public.profiles
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Users can update own profile"
    ON public.profiles
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- FAQs Policies:
CREATE POLICY "Public can view published faqs"
    ON public.faqs
    FOR SELECT
    TO anon, authenticated
    USING (is_published = true);

CREATE POLICY "Authenticated users can view all faqs"
    ON public.faqs
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated users can insert faqs"
    ON public.faqs
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Authenticated users can update faqs"
    ON public.faqs
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Authenticated users can delete faqs"
    ON public.faqs
    FOR DELETE
    TO authenticated
    USING (true);

-- 6. AUTOMATIC TRIGGER FOR NEW AUTH USERS -> PROFILES
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (
        new.id,
        new.email,
        COALESCE(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
        COALESCE(new.raw_user_meta_data->>'role', 'ADMIN')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 7. INITIAL SEED DATA FOR FAQS
INSERT INTO public.faqs (category, question, answer, order_index, is_published)
VALUES 
('workflow', 'Apakah Bahari Tech Solution melayani pembuatan website dan aplikasi di Tegal dan sekitarnya?', 'Ya, kantor operasional kami berada di Kecamatan Kramat, Kabupaten Tegal. Kami melayani jasa pembuatan website profil, toko online, aplikasi mobile Android & iOS, dan sistem ERP untuk UMKM maupun perusahaan di Kota Tegal, Slawi, Brebes, Pemalang, Pekalongan, hingga seluruh Indonesia baik secara tatap muka (onsite) di kantor kami maupun secara daring.', 1, true),
('workflow', 'Berapa lama estimasi waktu pengerjaan sebuah software atau aplikasi?', 'Website profil atau landing page interaktif rata-rata berkisar 2–4 minggu. Aplikasi mobile (MVP) atau modul software kustom skala menengah rata-rata membutuhkan 6–10 minggu. Sedangkan sistem Enterprise ERP multi-cabang terintegrasi umumnya memerlukan 3–5 bulan dengan metodologi Agile bertahap.', 2, true),
('workflow', 'Bagaimana tahapan alur kerja pembuatan software di Bahari Tech?', 'Kami menerapkan 5 tahapan transparan: (1) Discovery & Analisis Kebutuhan Teknis, (2) Desain UI/UX & Prototipe Interaktif di Figma, (3) Sprint Rekayasa Kode (Clean Architecture & Agile Development), (4) QA, UAT & OWASP Security Audit, dan (5) Deployment Live Server, serah terima source code, serta pelatihan tim pengguna.', 3, true),
('security', 'Apakah klien mendapatkan hak milik penuh atas Source Code (IP)?', 'Ya, 100% hak cipta intelektual (Intellectual Property) dan seluruh source code menjadi milik penuh klien setelah pelunasan proyek. Kami menyerahkan repositori kode rapi (Git), dokumentasi arsitektur, dan tanpa sistem keterikatan tertutup (vendor lock-in).', 4, true),
('security', 'Bagaimana Bahari Tech Solution menjamin keamanan data dan kerahasiaan bisnis?', 'Kerahasiaan bisnis Anda dilindungi secara hukum melalui Non-Disclosure Agreement (NDA) resmi bermaterai sebelum proyek dimulai. Sisi teknis menerapkan standar OWASP Top 10, enkripsi SSL/TLS 256-bit, dan kepatuhan regulasi UU Perlindungan Data Pribadi (PDP).', 5, true),
('warranty', 'Apakah ada garansi pemeliharaan (maintenance) setelah aplikasi selesai?', 'Tentu. Setiap proyek kami sertai Garansi Bebas Bug (Free Bug Fixes) dan masa pemeliharaan resmi paska-rilis selama 3 hingga 6 bulan. Kami juga menyediakan opsi SLA kontrak tahunan untuk monitoring server 24/7 dan pembaruan berkala.', 6, true),
('warranty', 'Apakah server, cloud hosting, dan domain dibantu pengaturannya?', 'Kami membantu konsultasi, arsitektur, dan deployment cloud server terbaik (AWS, GCP, DigitalOcean, atau server lokal). Akun cloud dan domain 100% didaftarkan atas nama perusahaan klien demi kepemilikan aset digital yang independen.', 7, true),
('tech', 'Teknologi (Tech Stack) apa yang digunakan untuk membangun sistem?', 'Kami menggunakan stack modern berkinerja tinggi: Next.js, React, TypeScript, Node.js, Go/Python, PostgreSQL, Redis, Docker, serta cloud AWS & GCP. Untuk mobile, kami memakai React Native & Flutter (lintas platform hemat) atau native Kotlin/Swift.', 8, true),
('tech', 'Bisakah software baru diintegrasikan dengan API atau sistem lama?', 'Sangat bisa. Kami berpengalaman mengintegrasikan payment gateway resmi (Midtrans, Xendit), kurir logistik, WhatsApp Business API, sistem akuntansi, database ERP lawas, maupun perangkat keras IoT via REST API, GraphQL, atau Webhook real-time.', 9, true)
ON CONFLICT DO NOTHING;
