"use client";

import { Section } from "@/components/ui/Section";
import { useLang } from "@/i18n/hook";

const statusColors: Record<string, { dot: string; text: string; bg: string }> = {
  green: { dot: "bg-green-400", text: "text-green-400", bg: "bg-green-400/10" },
  blue: { dot: "bg-accent", text: "text-accent", bg: "bg-accent/10" },
  orange: { dot: "bg-orange-400", text: "text-orange-400", bg: "bg-orange-400/10" },
  red: { dot: "bg-red-400", text: "text-red-400", bg: "bg-red-400/10" },
};

function IndustryCard({ item, featured }: { item: any; featured?: boolean }) {
  return (
    <div
      className={`rounded-2xl border border-border/30 bg-surface-card/40 overflow-hidden hover:border-accent/25 hover:shadow-[0_0_25px_rgba(0,180,255,0.06)] transition-all duration-300 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-border/20 bg-accent/[0.02]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`font-semibold text-white ${featured ? "text-lg" : "text-base"}`}>
              {item.name}
            </h3>
            <p className="text-xs text-muted mt-0.5">{item.desc}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
            <span className="text-[9px] text-accent font-medium uppercase tracking-wider">Live</span>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="px-5 py-4">
        <div className="grid grid-cols-3 gap-2">
          {item.metrics.map((m: any, i: number) => (
            <div key={i} className="bg-primary/60 rounded-lg p-2.5 border border-border/20">
              <p className="text-[9px] text-muted-dark uppercase tracking-wider">{m.label}</p>
              <p className={`text-base font-bold mt-0.5 ${m.alert ? "text-red-400" : "text-text"}`}>
                {m.value}
              </p>
              {m.alert && (
                <span className="inline-flex items-center gap-0.5 text-[8px] text-red-400 mt-0.5">
                  <span className="w-1 h-1 rounded-full bg-red-400 animate-pulse-dot" />
                  !
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Status Row */}
      <div className="px-5 pb-4">
        <div className="space-y-1.5">
          {item.statuses.map((s: any, i: number) => {
            const c = statusColors[s.color] || statusColors.blue;
            return (
              <div key={i} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                  <span className="text-[11px] text-muted">{s.label}</span>
                </div>
                <span className={`text-[11px] font-medium ${c.text} ${c.bg} px-1.5 py-0.5 rounded`}>
                  {s.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Industries() {
  const { t } = useLang();
  const ind = t.industries;

  return (
    <Section id="industries" variant="elevated">
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-4">{ind.tag}</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl">
          {ind.titleA} <span className="text-accent">{ind.titleB}</span>
        </h2>
        <p className="mt-4 text-lg text-muted max-w-2xl">{ind.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ind.items.map((item: any, i: number) => (
          <IndustryCard key={i} item={item} featured={i === 0} />
        ))}
      </div>
    </Section>
  );
}
