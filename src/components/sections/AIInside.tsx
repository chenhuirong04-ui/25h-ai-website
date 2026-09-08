"use client";

import { Section } from "@/components/ui/Section";
import { useLang } from "@/i18n/hook";

export function AIInside() {
  const { t } = useLang();
  const ai = t.aiInside;

  const capColors = [
    "bg-accent/15 border-accent/25 text-accent",
    "bg-tech/15 border-tech/25 text-tech",
    "bg-orange-500/15 border-orange-500/25 text-orange-400",
    "bg-accent/15 border-accent/25 text-accent",
  ];

  const eventStatus = ["bg-green-400", "bg-accent", "bg-orange-400", "bg-tech"];

  return (
    <Section id="ai">
      <div className="mb-12">
        <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-4">{ai.tag}</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          {ai.titleA} <span className="text-accent">{ai.titleB}</span>
        </h2>
        <p className="mt-4 text-lg text-muted max-w-2xl">{ai.subtitle}</p>
      </div>

      <div className="rounded-2xl border border-border/30 bg-surface-card overflow-hidden shadow-[0_0_50px_rgba(0,180,255,0.04)]">
        {/* AI Agent Layer Header */}
        <div className="flex items-center gap-3 px-5 md:px-6 py-4 bg-accent/[0.04] border-b border-accent/15">
          <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center border border-accent/25">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{ai.layer}</p>
            <p className="text-[10px] text-muted-dark">{ai.layerSub}</p>
          </div>
          <span className="ml-auto text-[11px] text-accent font-medium bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
            {ai.active}
          </span>
        </div>

        {/* Pipeline */}
        <div className="p-5 md:p-6">
          <p className="text-[10px] text-muted-dark uppercase tracking-wider mb-3">{ai.pipeline}</p>
          <div className="flex flex-wrap items-center gap-2">
            {ai.nodes.map((node, i) => (
              <div key={i} className="flex items-center">
                <div className="relative px-3 py-2.5 rounded-lg bg-surface border border-border/40 text-xs md:text-sm font-medium text-text whitespace-nowrap hover:border-accent/30 transition-colors group">
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                  {node}
                </div>
                {i < ai.nodes.length - 1 && (
                  <svg className="w-4 h-4 text-accent/25 mx-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-accent/30 via-tech/20 to-accent/30" />
        </div>

        {/* Caps + Events */}
        <div className="border-t border-border/20 grid grid-cols-1 md:grid-cols-2">
          <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-border/20">
            <p className="text-[10px] text-muted-dark uppercase tracking-wider mb-3">{ai.capsTitle}</p>
            <div className="grid grid-cols-2 gap-2">
              {ai.caps.map((cap, i) => (
                <div key={i} className={`p-3 rounded-lg border ${capColors[i]}`}>
                  <p className="text-xs font-semibold">{cap.label}</p>
                  <p className="text-[10px] mt-1 opacity-70">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 md:p-6">
            <p className="text-[10px] text-muted-dark uppercase tracking-wider mb-3">{ai.liveTitle}</p>
            <div className="space-y-2.5">
              {ai.events.map((event, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-primary/40 border border-border/20">
                  <span className="text-sm">{event.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-text truncate">{event.text}</p>
                    <p className="text-[9px] text-muted-dark">{event.time}</p>
                  </div>
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${eventStatus[i]}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
