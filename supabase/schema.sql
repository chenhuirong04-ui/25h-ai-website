-- 25H AI Videos Table
-- Run this SQL in Supabase Dashboard → SQL Editor

CREATE TABLE IF NOT EXISTS videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_zh TEXT NOT NULL DEFAULT '',
  title_en TEXT NOT NULL DEFAULT '',
  description_zh TEXT DEFAULT '',
  description_en TEXT DEFAULT '',
  video_url TEXT DEFAULT '',
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

-- Enable RLS
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

-- Public: read published videos only
CREATE POLICY "Public read published" ON videos
  FOR SELECT USING (is_published = true);

-- Authenticated: full access
CREATE POLICY "Admin full access" ON videos
  FOR ALL USING (auth.role() = 'authenticated');

-- Storage bucket: create "media" bucket in Supabase Dashboard → Storage
-- Then add these policies:

-- Public: read media files
CREATE POLICY "Public read media" ON storage.objects
  FOR SELECT USING (bucket_id = 'media');

-- Authenticated: upload media files
CREATE POLICY "Admin upload media" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');

-- Authenticated: delete media files
CREATE POLICY "Admin delete media" ON storage.objects
  FOR DELETE USING (bucket_id = 'media' AND auth.role() = 'authenticated');
