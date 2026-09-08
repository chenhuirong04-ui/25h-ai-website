-- ============================================================
-- 25H AI — Supabase Schema (YouTube-based video management)
-- Run this SQL in Supabase Dashboard → SQL Editor
-- ============================================================

-- ============================================================
-- 1. ADMIN USERS TABLE
-- ============================================================
-- Only users listed here have admin write access.
-- Add admin user IDs via: INSERT INTO admin_users (user_id) VALUES ('<uuid>');
-- User UUIDs come from Supabase Dashboard → Authentication → Users

CREATE TABLE IF NOT EXISTS admin_users (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Only existing admins can view the admin list (bootstrap the first admin via SQL Editor)
CREATE POLICY "Admins can view admin list" ON admin_users
  FOR SELECT USING (auth.uid() IN (SELECT user_id FROM admin_users));

-- ============================================================
-- 2. ADMIN CHECK FUNCTION
-- ============================================================

CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM admin_users WHERE user_id = auth.uid()
  );
$$;

-- ============================================================
-- 3. VIDEOS TABLE
-- ============================================================

CREATE TABLE IF NOT EXISTS videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_zh TEXT NOT NULL DEFAULT '',
  title_en TEXT NOT NULL DEFAULT '',
  description_zh TEXT DEFAULT '',
  description_en TEXT DEFAULT '',
  youtube_url TEXT DEFAULT '',
  youtube_video_id TEXT DEFAULT '',
  cover_url TEXT DEFAULT '',
  sort_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER videos_updated_at
  BEFORE UPDATE ON videos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Indexes
CREATE INDEX idx_videos_youtube_id
  ON videos (youtube_video_id)
  WHERE youtube_video_id != '';

CREATE INDEX idx_videos_sort
  ON videos (sort_order)
  WHERE is_published = true;

-- Enable RLS
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

-- Public: read published videos only (anonymous + any logged-in user)
CREATE POLICY "Public read published" ON videos
  FOR SELECT USING (is_published = true);

-- Admin: full SELECT (can see drafts)
CREATE POLICY "Admin select all" ON videos
  FOR SELECT USING (is_admin());

-- Admin: INSERT
CREATE POLICY "Admin insert" ON videos
  FOR INSERT WITH CHECK (is_admin());

-- Admin: UPDATE
CREATE POLICY "Admin update" ON videos
  FOR UPDATE USING (is_admin());

-- Admin: DELETE
CREATE POLICY "Admin delete" ON videos
  FOR DELETE USING (is_admin());

-- ============================================================
-- 4. STORAGE — "media" BUCKET
-- ============================================================
-- Create "media" bucket in Supabase Dashboard → Storage
-- Used ONLY for cover images and site assets (NOT video files)
-- Videos are hosted on YouTube.

-- Public: read media files
CREATE POLICY "Public read media" ON storage.objects
  FOR SELECT USING (bucket_id = 'media');

-- Admin only: upload
CREATE POLICY "Admin upload media" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'media' AND is_admin());

-- Admin only: update
CREATE POLICY "Admin update media" ON storage.objects
  FOR UPDATE USING (bucket_id = 'media' AND is_admin());

-- Admin only: delete
CREATE POLICY "Admin delete media" ON storage.objects
  FOR DELETE USING (bucket_id = 'media' AND is_admin());

-- ============================================================
-- 5. BOOTSTRAP FIRST ADMIN
-- ============================================================
-- After creating the first user via Supabase Dashboard → Authentication,
-- run the following in SQL Editor (replace <UUID> with the user's UUID):
--
--   INSERT INTO admin_users (user_id) VALUES ('<UUID>');
--
-- This must be done manually for the first admin because no admin
-- exists yet to authorize the insert via the application.
