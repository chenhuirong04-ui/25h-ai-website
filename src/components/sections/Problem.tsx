"use client";

import { useLang } from "@/i18n/hook";

function ModuleVisual({ type }: { type: string }) {
  switch (type) {
    case "chat":
      return (
        <div className="space-y-1.5">
          <div className="flex gap-1.5"><div className="w-4 h-4 rounded-full bg-green-500/20 shrink-0" /><div className="h-3 w-20 bg-green-500/15 rounded" /></div>
          <div className="flex gap-1.5 justify-end"><div className="h-3 w-16 bg-accent/15 rounded" /><div className="w-4 h-4 rounded-full bg-accent/20 shrink-0" /></div>
          <div className="flex gap-1.5"><div className="w-4 h-4 rounded-full bg-green-500/20 shrink-0" /><div className="h-3 w-14 bg-green-500/15 rounded" /></div>
        </div>
      );
    case "spreadsheet":
      return (
        <div className="space-y-1">
          <div className="flex gap-1"><div className="w-8 h-2.5 bg-accent/20 rounded-sm" /><div className="w-8 h-2.5 bg-accent/15 rounded-sm" /><div className="w-8 h-2.5 bg-accent/10 rounded-sm" /></div>
          <div className="flex gap-1"><div className="w-8 h-2 bg-white/[0.04] rounded-sm" /><div className="w-8 h-2 bg-white/[0.03] rounded-sm" /><div className="w-8 h-2 bg-white/[0.03] rounded-sm" /></div>
          <div className="flex gap-1"><div className="w-8 h-2 bg-white/[0.04] rounded-sm" /><div className="w-8 h-2 bg-white/[0.03] rounded-sm" /><div className="w-8 h-2 bg-red-500/15 rounded-sm" /></div>
          <div className="flex gap-1"><div className="w-8 h-2 bg-white/[0.04] rounded-sm" /><div className="w-8 h-2 bg-white/[0.03] rounded-sm" /><div className="w-8 h-2 bg-white/[0.03] rounded-sm" /></div>
        </div>
      );
    case "email":
      return (
        <div className="space-y-1.5">
          {[1, 2, 3].map((i) => (<div key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" /><div className="h-2 w-full bg-white/[0.04] rounded" /></div>))}
        </div>
      );
    case "document":
      return (
        <div className="space-y-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-1.5">
              <svg className={`w-3 h-3 shrink-0 ${i === 0 ? "text-accent" : "text-text-dim"}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              <div className="h-2 w-16 bg-white/[0.04] rounded" />
            </div>
          ))}
        </div>
      );
    case "crm":
      return (
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (<div key={i} className="flex-1"><div className={`h-6 rounded ${i === 2 ? "bg-purple-500/20" : "bg-white/[0.04]"}`} /><div className="h-1.5 mt-1 bg-white/[0.03] rounded" /></div>))}
        </div>
      );
    case "projects":
      return (
        <div className="space-y-1.5">
          {[{ w: "80%", c: "bg-accent/30" }, { w: "45%", c: "bg-orange-500/25" }, { w: "60%", c: "bg-accent/20" }].map((bar, i) => (
            <div key={i}><div className="h-1.5 rounded-full bg-white/[0.04]"><div className={`h-full rounded-full ${bar.c}`} style={{ width: bar.w }} /></div></div>
          ))}
        </div>
      );
    case "finance":
      return (
        <div className="flex items-end gap-1 h-8">
          {[30, 50, 35, 65, 40, 55, 20].map((h, i) => (<div key={i} className="flex-1 rounded-sm bg-highlight/20" style={{ height: `${h}%` }} />))}
        </div>
      );
    case "hr":
      return (
        <div className="flex gap-1">
          {Array.from({ length: 6 }).map((_, i) => (<div key={i} className={`w-5 h-5 rounded-full ${i < 4 ? "bg-tech/20" : "bg-white/[0.04]"}`} />))}
        </div>
      );
    default: return null;
  }
}

export function Problem() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-[#060A14] border-y border-border/20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-4">{t.problem.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            {t.problem.titleA} <span className="text-accent">{t.problem.titleB}</span>
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">{t.problem.subtitle}</p>
        </div>

        <div className="relative rounded-2xl border border-border/30 bg-primary-light/20 p-4 md:p-8 min-h-[480px] md:min-h-[540px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {t.problem.modules.map((mod, i) => (
              <div key={i} className={`rounded-xl border border-border/30 bg-surface-card/40 overflow-hidden ${i % 2 === 1 ? "md:mt-5" : ""} ${i >= 4 && i % 2 === 0 ? "md:mt-3" : ""}`}>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] border-b border-border/20">
                  <span className={`w-1.5 h-1.5 rounded-full ${i === 2 || i === 7 ? "bg-red-400" : "bg-white/20"}`} />
                  <span className="text-[10px] font-medium text-text-dim">{mod.label}</span>
                </div>
                <div className="p-3">
                  <ModuleVisual type={mod.type} />
                  <p className="text-[9px] text-muted-dark mt-2">{mod.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Error badges */}
          {t.problem.errors.map((err, i) => {
            const positions = [
              { left: "27%", top: "32%" },
              { left: "58%", top: "52%" },
              { left: "35%", top: "75%" },
              { left: "72%", top: "22%" },
            ];
            const colors = i % 2 === 0
              ? "bg-red-500/10 text-red-400 border-red-500/20"
              : "bg-orange-500/10 text-orange-400 border-orange-500/20";
            return (
              <div key={i} className="absolute hidden md:block" style={positions[i]}>
                <span className={`text-[10px] px-2 py-1 rounded-full border whitespace-nowrap ${colors}`}>{err}</span>
              </div>
            );
          })}

          {/* SVG broken lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 540" fill="none">
            {[
              [200, 100, 270, 100], [290, 100, 360, 100], [400, 100, 530, 100], [570, 100, 600, 100],
              [200, 370, 270, 370], [400, 370, 530, 370],
              [100, 200, 100, 280], [100, 300, 100, 340], [500, 200, 500, 260], [500, 290, 500, 340], [700, 200, 700, 340],
            ].map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#EF4444" strokeWidth={i < 4 ? "1" : "0.8"} opacity={i < 4 ? "0.2" : "0.12"} strokeDasharray="4 3" />
            ))}
          </svg>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="px-5 py-2.5 rounded-xl bg-primary/90 border border-red-500/15 shadow-[0_0_40px_rgba(239,68,68,0.06)]">
              <p className="text-xs font-semibold text-white/50 text-center">{t.problem.center}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {t.problem.stats.map((item) => (
            <div key={item.stat} className="border-l-2 border-accent/40 pl-4">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">{item.stat}</p>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
