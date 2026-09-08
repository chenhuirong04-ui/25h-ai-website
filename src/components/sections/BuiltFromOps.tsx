"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { useLang } from "@/i18n/hook";
import { getPublicVideos } from "@/app/actions/videos";

interface Video {
  id: string;
  title_zh: string;
  title_en: string;
  description_zh: string;
  description_en: string;
  youtube_url: string;
  youtube_video_id: string;
  cover_url: string;
}

function VideoCard({ video, lang, onPlay }: { video: Video; lang: string; onPlay: () => void }) {
  const title = lang === "zh" ? video.title_zh : video.title_en;
  const desc = lang === "zh" ? video.description_zh : video.description_en;
  const thumb = video.cover_url || (video.youtube_video_id ? `https://img.youtube.com/vi/${video.youtube_video_id}/mqdefault.jpg` : null);

  return (
    <div className="rounded-2xl border border-border/30 bg-surface-card/40 overflow-hidden group hover:border-accent/20 transition-all">
      <div className="relative aspect-video bg-gradient-to-br from-surface-light to-primary border-b border-border/20 overflow-hidden cursor-pointer" onClick={onPlay}>
        {thumb ? (
          <img src={thumb} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #00B4FF 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(0,180,255,0.2)]">
            <svg className="w-6 h-6 text-accent ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">{title}</h3>
        {desc && <p className="mt-1.5 text-sm text-muted leading-relaxed">{desc}</p>}
      </div>
    </div>
  );
}

function YouTubeModal({ videoId, title, onClose }: { videoId: string; title: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 backdrop-blur-md p-4" onClick={onClose}>
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-white truncate pr-4">{title}</h3>
          <button onClick={onClose} className="text-muted hover:text-white transition-colors text-xl shrink-0">✕</button>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden border border-border/30 bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export function BuiltFromOps() {
  const { t, lang } = useLang();
  const b = t.built;
  const [videos, setVideos] = useState<Video[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState<Video | null>(null);

  useEffect(() => {
    getPublicVideos("our_work").then((data) => {
      setVideos(data as Video[]);
      setLoaded(true);
    });
  }, []);

  return (
    <Section>
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-4">{b.tag}</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl">
          {b.titleA} <span className="text-accent">{b.titleB}</span>
        </h2>
        <p className="mt-4 text-lg text-muted max-w-2xl">{b.subtitle}</p>
      </div>

      {loaded && videos.length > 0 ? (
        <>
          {/* Featured first video */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 rounded-2xl border border-border/30 bg-surface-card/40 overflow-hidden">
              <div className="md:col-span-3">
                <VideoCard video={videos[0]} lang={lang} onPlay={() => setPlaying(videos[0])} />
              </div>
              <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{b.featured.tag}</span>
                <h3 className="mt-3 text-2xl font-bold text-white">{b.featured.name}</h3>
                <p className="mt-3 text-muted leading-relaxed">{b.featured.desc}</p>
              </div>
            </div>
          </div>
          {videos.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.slice(1).map((video) => (
                <VideoCard key={video.id} video={video} lang={lang} onPlay={() => setPlaying(video)} />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 rounded-2xl border border-border/30 bg-surface-card/40 overflow-hidden">
              <div className="md:col-span-3 relative aspect-video bg-gradient-to-br from-surface-light to-primary flex items-center justify-center">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #00B4FF 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shadow-[0_0_20px_rgba(0,180,255,0.15)]">
                  <svg className="w-6 h-6 text-accent ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <span className="absolute bottom-3 left-3 text-[10px] text-muted-dark bg-primary/60 px-2 py-0.5 rounded">{b.play}</span>
              </div>
              <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{b.featured.tag}</span>
                <h3 className="mt-3 text-2xl font-bold text-white">{b.featured.name}</h3>
                <p className="mt-3 text-muted leading-relaxed">{b.featured.desc}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {b.systems.map((sys: { tag: string; name: string; desc: string }, i: number) => (
              <div key={i} className="rounded-2xl border border-border/30 bg-surface-card/40 overflow-hidden group hover:border-accent/20 transition-all">
                <div className="relative aspect-video bg-gradient-to-br from-surface-light to-primary flex items-center justify-center">
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #00B4FF 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center group-hover:bg-accent/25 transition-all">
                    <svg className="w-5 h-5 text-accent ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-medium text-accent uppercase tracking-wider">{sys.tag}</span>
                  <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-accent transition-colors">{sys.name}</h3>
                  <p className="mt-1 text-sm text-muted">{sys.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center rounded-2xl border border-dashed border-border/25 py-6">
            <p className="text-sm text-muted-dark">{b.more}</p>
          </div>
        </>
      )}

      {playing && playing.youtube_video_id && (
        <YouTubeModal
          videoId={playing.youtube_video_id}
          title={lang === "zh" ? playing.title_zh : playing.title_en}
          onClose={() => setPlaying(null)}
        />
      )}
    </Section>
  );
}
