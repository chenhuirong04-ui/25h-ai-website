"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
import {
  getAllVideos,
  createVideo,
  updateVideo,
  togglePublish,
  deleteVideo,
} from "@/app/actions/videos";

interface Video {
  id: string;
  title_zh: string;
  title_en: string;
  description_zh: string;
  description_en: string;
  video_url: string;
  cover_url: string;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export default function AdminDashboard() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Video | null>(null);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const fetchVideos = useCallback(async () => {
    try {
      const data = await getAllVideos();
      setVideos(data as Video[]);
    } catch {
      setError("Failed to load videos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getSupabase().auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/admin/login");
      } else {
        fetchVideos();
      }
    });
  }, [router, fetchVideos]);

  async function handleLogout() {
    await getSupabase().auth.signOut();
    router.push("/admin/login");
  }

  function openCreate() {
    setEditing(null);
    setShowForm(true);
    setError("");
  }

  function openEdit(video: Video) {
    setEditing(video);
    setShowForm(true);
    setError("");
  }

  function handleAction(action: () => Promise<void>) {
    startTransition(async () => {
      try {
        await action();
        fetchVideos();
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Action failed");
      }
    });
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-muted">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Top Bar */}
      <div className="border-b border-border/30 bg-surface/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">
            <span className="text-accent">25H</span> Admin — Our Work
          </h1>
          <div className="flex items-center gap-3">
            <a href="/" className="text-xs text-muted hover:text-accent transition-colors">
              ← Back to Site
            </a>
            <button
              onClick={handleLogout}
              className="text-xs text-muted-dark hover:text-red-400 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Error */}
        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400 flex items-center justify-between">
            <span>{error}</span>
            <button onClick={() => setError("")} className="text-red-400 hover:text-red-300">✕</button>
          </div>
        )}

        {/* Actions bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted">
              {videos.length} video{videos.length !== 1 ? "s" : ""} ·{" "}
              {videos.filter((v) => v.is_published).length} published
            </span>
          </div>
          <button
            onClick={openCreate}
            className="px-4 py-2 rounded-lg bg-accent text-primary text-sm font-medium hover:bg-accent-light transition-colors shadow-[0_0_12px_rgba(0,180,255,0.2)]"
          >
            + New Video
          </button>
        </div>

        {/* Video List */}
        {videos.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border/30 rounded-2xl">
            <p className="text-muted text-sm">No videos yet. Click &quot;+ New Video&quot; to add one.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/30 bg-surface-card/40 hover:border-border-light/40 transition-colors"
              >
                {/* Cover thumbnail */}
                <div className="w-24 h-16 rounded-lg bg-primary/60 border border-border/20 overflow-hidden shrink-0 flex items-center justify-center">
                  {video.cover_url ? (
                    <img src={video.cover_url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-6 h-6 text-muted-dark" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-white truncate">
                      {video.title_zh || video.title_en || "Untitled"}
                    </h3>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                        video.is_published
                          ? "bg-green-400/10 text-green-400"
                          : "bg-orange-400/10 text-orange-400"
                      }`}
                    >
                      {video.is_published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-0.5 truncate">
                    {video.title_en || "No English title"}
                  </p>
                  <p className="text-[10px] text-muted-dark mt-0.5">
                    Order: {video.sort_order} · Updated: {new Date(video.updated_at).toLocaleDateString()}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => openEdit(video)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border/30 text-muted hover:text-white hover:border-accent/30 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleAction(() => togglePublish(video.id))}
                    disabled={isPending}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      video.is_published
                        ? "border-orange-500/20 text-orange-400 hover:bg-orange-500/10"
                        : "border-green-500/20 text-green-400 hover:bg-green-500/10"
                    } disabled:opacity-50`}
                  >
                    {video.is_published ? "Unpublish" : "Publish"}
                  </button>
                  <button
                    onClick={() => {
                      if (confirm("Delete this video? This cannot be undone.")) {
                        handleAction(() => deleteVideo(video.id));
                      }
                    }}
                    disabled={isPending}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create/Edit Form Modal */}
      {showForm && (
        <VideoForm
          video={editing}
          onClose={() => setShowForm(false)}
          onSaved={() => {
            setShowForm(false);
            fetchVideos();
          }}
        />
      )}
    </div>
  );
}

function VideoForm({
  video,
  onClose,
  onSaved,
}: {
  video: Video | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [coverPreview, setCoverPreview] = useState(video?.cover_url || "");
  const isEdit = !!video;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      if (isEdit && video) {
        await updateVideo(video.id, formData);
      } else {
        await createVideo(formData);
      }
      onSaved();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  function handleCoverChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setCoverPreview(URL.createObjectURL(file));
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border/40 bg-surface p-6 md:p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            {isEdit ? "Edit Video" : "New Video"}
          </h2>
          <button onClick={onClose} className="text-muted hover:text-white transition-colors text-lg">✕</button>
        </div>

        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Cover */}
          <div>
            <label className="block text-xs font-medium text-muted-dark mb-1.5">Cover Image</label>
            {coverPreview && (
              <img src={coverPreview} alt="Preview" className="mb-2 w-40 h-24 rounded-lg object-cover border border-border/30" />
            )}
            <input type="file" name="cover" accept="image/*" onChange={handleCoverChange} className="text-sm text-muted file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-accent/10 file:text-accent hover:file:bg-accent/20" />
          </div>

          {/* Video */}
          <div>
            <label className="block text-xs font-medium text-muted-dark mb-1.5">Video File</label>
            <input type="file" name="video" accept="video/*" className="text-sm text-muted file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-accent/10 file:text-accent hover:file:bg-accent/20" />
            {video?.video_url && <p className="text-[10px] text-muted-dark mt-1">Current: uploaded. Upload new to replace.</p>}
          </div>

          {/* Titles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">Title (中文)</label>
              <input name="title_zh" defaultValue={video?.title_zh} className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">Title (English)</label>
              <input name="title_en" defaultValue={video?.title_en} className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50" />
            </div>
          </div>

          {/* Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">Description (中文)</label>
              <textarea name="description_zh" defaultValue={video?.description_zh} rows={2} className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50 resize-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">Description (English)</label>
              <textarea name="description_en" defaultValue={video?.description_en} rows={2} className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50 resize-none" />
            </div>
          </div>

          {/* Sort + Published */}
          <div className="flex items-center gap-6">
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">Sort Order</label>
              <input name="sort_order" type="number" defaultValue={video?.sort_order ?? 0} className="w-24 px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50" />
            </div>
            <label className="flex items-center gap-2 mt-5 cursor-pointer">
              <input name="is_published" type="checkbox" defaultChecked={video?.is_published} value="true" className="w-4 h-4 rounded accent-accent" />
              <span className="text-sm text-text">Published</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/20">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-sm font-medium border border-border/30 text-muted hover:text-white transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={saving} className="px-6 py-2 rounded-lg bg-accent text-primary text-sm font-medium hover:bg-accent-light transition-colors disabled:opacity-50 shadow-[0_0_12px_rgba(0,180,255,0.2)]">
              {saving ? "Saving..." : isEdit ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
