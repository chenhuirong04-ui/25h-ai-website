-- ============================================================
-- 25H AI — Migration 002: video section + position mapping
-- Run this SQL in Supabase Dashboard → SQL Editor
-- Additive only: does not drop/rebuild the videos table,
-- does not touch existing rows' data other than backfilling
-- the two new columns with safe defaults.
-- ============================================================

-- 1. New columns (idempotent)
ALTER TABLE videos ADD COLUMN IF NOT EXISTS section TEXT NOT NULL DEFAULT 'our_work';
ALTER TABLE videos ADD COLUMN IF NOT EXISTS position INTEGER NOT NULL DEFAULT 0;

-- 2. Restrict section to the known frontend placement values
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'videos_section_check'
  ) THEN
    ALTER TABLE videos ADD CONSTRAINT videos_section_check
      CHECK (section IN ('our_work', 'ops', 'workforceos', 'furniflow', 'chanya', 'other'));
  END IF;
END $$;

-- 3. Index for the public read path (filter by section + published, order by position)
CREATE INDEX IF NOT EXISTS idx_videos_section_position
  ON videos (section, position)
  WHERE is_published = true;
