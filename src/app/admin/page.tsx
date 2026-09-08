"use client";

import { useState, useEffect, useCallback, useTransition } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
import { parseYouTubeId } from "@/lib/youtube";
import { VIDEO_SECTIONS, sectionLabel } from "@/lib/videoSections";
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
  youtube_url: string;
  youtube_video_id: string;
  cover_url: string;
  sort_order: number;
  section: string;
  position: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

type Filter = "all" | "published" | "draft";

export default function AdminDashboard() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Video | null>(null);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [adminEmail, setAdminEmail] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const fetchVideos = useCallback(async () => {
    try {
      const data = await getAllVideos();
      setVideos(data as Video[]);
    } catch {
      setError("视频加载失败");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getSupabase().auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/admin/login");
      } else {
        setAdminEmail(user.email || "");
        fetchVideos();
      }
    });
  }, [router, fetchVideos]);

  async function handleLogout() {
    await getSupabase().auth.signOut();
    router.push("/admin/login");
  }

  function handleAction(action: () => Promise<void>) {
    startTransition(async () => {
      try {
        await action();
        fetchVideos();
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "操作失败");
      }
    });
  }

  const filteredVideos = videos.filter((v) => {
    if (filter === "published") return v.is_published;
    if (filter === "draft") return !v.is_published;
    return true;
  });

  const publishedCount = videos.filter((v) => v.is_published).length;
  const draftCount = videos.length - publishedCount;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-muted">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Independent admin top bar */}
      <div className="border-b border-border/30 bg-surface/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">
            <span className="text-accent">25H AI</span> Admin
          </h1>
          <div className="flex items-center gap-4">
            {adminEmail && (
              <span className="text-xs text-muted-dark hidden sm:inline">{adminEmail}</span>
            )}
            <a href="/" className="text-xs text-muted hover:text-accent transition-colors">查看官网</a>
            <button onClick={handleLogout} className="text-xs text-muted-dark hover:text-red-400 transition-colors">退出登录</button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-white mb-4">成果视频管理</h2>

        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400 flex items-center justify-between">
            <span>{error}</span>
            <button onClick={() => setError("")} className="text-red-400 hover:text-red-300">✕</button>
          </div>
        )}

        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-surface-card/40 border border-border/30">
            {([
              { key: "all", label: `全部视频 (${videos.length})` },
              { key: "published", label: `已发布 (${publishedCount})` },
              { key: "draft", label: `草稿 (${draftCount})` },
            ] as { key: Filter; label: string }[]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  filter === tab.key
                    ? "bg-accent text-primary"
                    : "text-muted hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => { setEditing(null); setShowForm(true); setError(""); }}
            className="px-4 py-2 rounded-lg bg-accent text-primary text-sm font-medium hover:bg-accent-light transition-colors shadow-[0_0_12px_rgba(0,180,255,0.2)]"
          >
            + 新增视频
          </button>
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border/30 rounded-2xl">
            <p className="text-muted text-sm">暂无视频，点击"+ 新增视频"添加。</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredVideos.map((video) => (
              <div key={video.id} className="flex items-center gap-4 p-4 rounded-xl border border-border/30 bg-surface-card/40 hover:border-border-light/40 transition-colors">
                <div className="w-28 h-16 rounded-lg bg-primary/60 border border-border/20 overflow-hidden shrink-0 flex items-center justify-center">
                  {video.youtube_video_id ? (
                    <img src={`https://img.youtube.com/vi/${video.youtube_video_id}/mqdefault.jpg`} alt="" className="w-full h-full object-cover" />
                  ) : video.cover_url ? (
                    <img src={video.cover_url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-6 h-6 text-muted-dark" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-medium text-white truncate">{video.title_zh || "（无中文标题）"}</h3>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium shrink-0 ${video.is_published ? "bg-green-400/10 text-green-400" : "bg-orange-400/10 text-orange-400"}`}>
                      {video.is_published ? "已发布" : "草稿"}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-0.5 truncate">{video.title_en || "（无英文标题）"}</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    {video.youtube_url ? (
                      <a
                        href={video.youtube_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-accent hover:text-accent-light truncate max-w-[220px]"
                      >
                        {video.youtube_url}
                      </a>
                    ) : (
                      <span className="text-[10px] text-muted-dark">无 YouTube 链接</span>
                    )}
                    <span className="text-[10px] text-muted-dark shrink-0">排序: {video.sort_order}</span>
                  </div>
                </div>

                <div className="shrink-0 text-xs text-accent font-medium whitespace-nowrap">
                  {sectionLabel(video.section)} · 第 {video.position} 位
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => { setEditing(video); setShowForm(true); setError(""); }} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-border/30 text-muted hover:text-white hover:border-accent/30 transition-colors">编辑</button>
                  <button onClick={() => handleAction(() => togglePublish(video.id))} disabled={isPending} className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${video.is_published ? "border-orange-500/20 text-orange-400 hover:bg-orange-500/10" : "border-green-500/20 text-green-400 hover:bg-green-500/10"} disabled:opacity-50`}>
                    {video.is_published ? "下架" : "发布"}
                  </button>
                  <button onClick={() => { if (confirm("确认删除该视频？")) handleAction(() => deleteVideo(video.id)); }} disabled={isPending} className="px-3 py-1.5 rounded-lg text-xs font-medium border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50">删除</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showForm && (
        <VideoForm
          video={editing}
          onClose={() => setShowForm(false)}
          onSaved={() => { setShowForm(false); fetchVideos(); }}
        />
      )}
    </div>
  );
}

function VideoForm({ video, onClose, onSaved }: { video: Video | null; onClose: () => void; onSaved: () => void }) {
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [coverPreview, setCoverPreview] = useState(video?.cover_url || "");
  const [ytUrl, setYtUrl] = useState(video?.youtube_url || "");
  const [ytId, setYtId] = useState(video?.youtube_video_id || "");
  const isEdit = !!video;

  function handleYtUrlChange(url: string) {
    setYtUrl(url);
    const id = parseYouTubeId(url);
    setYtId(id);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    formData.set("youtube_url", ytUrl);
    try {
      if (isEdit && video) {
        await updateVideo(video.id, formData);
      } else {
        await createVideo(formData);
      }
      onSaved();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "保存失败");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border/40 bg-surface p-6 md:p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">{isEdit ? "编辑视频" : "新增视频"}</h2>
          <button onClick={onClose} className="text-muted hover:text-white transition-colors text-lg">✕</button>
        </div>

        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* YouTube URL */}
          <div>
            <label className="block text-xs font-medium text-muted-dark mb-1.5">YouTube 链接</label>
            <input
              type="url"
              value={ytUrl}
              onChange={(e) => handleYtUrlChange(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50"
            />
            {ytId && (
              <div className="mt-2 flex items-center gap-3">
                <img src={`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`} alt="Preview" className="w-32 h-20 rounded-lg object-cover border border-border/30" />
                <span className="text-xs text-accent font-mono">ID: {ytId}</span>
              </div>
            )}
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-xs font-medium text-muted-dark mb-1.5">封面图片（选填，留空则使用 YouTube 缩略图）</label>
            {coverPreview && (
              <img src={coverPreview} alt="Preview" className="mb-2 w-40 h-24 rounded-lg object-cover border border-border/30" />
            )}
            <input
              type="file"
              name="cover"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setCoverPreview(URL.createObjectURL(file));
              }}
              className="text-sm text-muted file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-accent/10 file:text-accent hover:file:bg-accent/20"
            />
          </div>

          {/* Titles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">标题（中文）</label>
              <input name="title_zh" defaultValue={video?.title_zh} className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">标题（英文）</label>
              <input name="title_en" defaultValue={video?.title_en} className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50" />
            </div>
          </div>

          {/* Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">描述（中文）</label>
              <textarea name="description_zh" defaultValue={video?.description_zh} rows={2} className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50 resize-none" />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">描述（英文）</label>
              <textarea name="description_en" defaultValue={video?.description_en} rows={2} className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50 resize-none" />
            </div>
          </div>

          {/* Frontend placement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">展示区域</label>
              <select
                name="section"
                defaultValue={video?.section || "our_work"}
                className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50"
              >
                {VIDEO_SECTIONS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">展示顺序（区域内，数字越小越靠前）</label>
              <input name="position" type="number" defaultValue={video?.position ?? 1} className="w-full px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50" />
            </div>
          </div>

          {/* Sort + Published */}
          <div className="flex items-center gap-6">
            <div>
              <label className="block text-xs font-medium text-muted-dark mb-1.5">排序</label>
              <input name="sort_order" type="number" defaultValue={video?.sort_order ?? 0} className="w-24 px-3 py-2 rounded-lg bg-surface-card border border-border/40 text-text text-sm focus:outline-none focus:border-accent/50" />
            </div>
            <label className="flex items-center gap-2 mt-5 cursor-pointer">
              <input name="is_published" type="checkbox" defaultChecked={video?.is_published} value="true" className="w-4 h-4 rounded accent-accent" />
              <span className="text-sm text-text">已发布</span>
            </label>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/20">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-sm font-medium border border-border/30 text-muted hover:text-white transition-colors">取消</button>
            <button type="submit" disabled={saving} className="px-6 py-2 rounded-lg bg-accent text-primary text-sm font-medium hover:bg-accent-light transition-colors disabled:opacity-50 shadow-[0_0_12px_rgba(0,180,255,0.2)]">
              {saving ? "保存中..." : isEdit ? "更新" : "创建"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
