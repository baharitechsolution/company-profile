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

-- 4. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Leads Policies:
-- A. Siapapun (publik pengunjung website) bisa mengirim form konsultasi/leads
CREATE POLICY "Public can insert leads"
    ON public.leads
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- B. Hanya admin yang terautentikasi (authenticated) yang bisa membaca semua leads
CREATE POLICY "Authenticated users can view leads"
    ON public.leads
    FOR SELECT
    TO authenticated
    USING (true);

-- C. Hanya admin yang terautentikasi yang bisa memperbarui status/catatan leads
CREATE POLICY "Authenticated users can update leads"
    ON public.leads
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- D. Hanya admin yang terautentikasi yang bisa menghapus leads
CREATE POLICY "Authenticated users can delete leads"
    ON public.leads
    FOR DELETE
    TO authenticated
    USING (true);

-- Profiles Policies:
-- Admin terautentikasi bisa membaca profile
CREATE POLICY "Authenticated users can view profiles"
    ON public.profiles
    FOR SELECT
    TO authenticated
    USING (true);

-- Admin bisa mengedit profile mereka sendiri
CREATE POLICY "Users can update own profile"
    ON public.profiles
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- 5. AUTOMATIC TRIGGER FOR NEW AUTH USERS -> PROFILES
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

-- 6. DUMMY / SEED DATA FOR LEADS (OPSIONAL UNTUK PENGUJIAN AWAL)
INSERT INTO public.leads (name, email, phone, company, service, budget, message, status)
VALUES 
('Budi Santoso', 'budi@ptmajumapan.co.id', '081234567890', 'PT. Maju Mapan Sejahtera', 'Sistem ERP Enterprise', 'Rp 25.000.000 - Rp 50.000.000', 'Halo Bahari Tech, kami membutuhkan sistem pencatatan inventori dan gudang multi-cabang terintegrasi kasir POS.', 'NEW'),
('Siti Rahmawati', 'siti@kedaikopi.com', '082198765432', 'Kedai Kopi Bahari', 'Aplikasi Mobile Android iOS', 'Rp 10.000.000 - Rp 25.000.000', 'Kami butuh aplikasi loyalty point dan pemesanan online untuk pelanggan setia kedai kopi kami.', 'IN_DISCUSSION'),
('Hendro Wijaya', 'hendro@wijayagroup.com', '085712345678', 'Wijaya Group', 'Website Korporat & Branding', 'Rp 5.000.000 - Rp 15.000.000', 'Ingin redesain company profile korporat agar terlihat modern dan elegan dengan SEO Google nomor 1.', 'DEAL')
ON CONFLICT DO NOTHING;

