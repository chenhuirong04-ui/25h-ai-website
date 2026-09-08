"use client";

import { Section } from "@/components/ui/Section";
import { useLang } from "@/i18n/hook";
import type { Translations } from "@/i18n/translations";

function ProcessRedesignVisual({ t }: { t: Translations }) {
  const cap = t.capabilities.items[0];
  return (
    <div className="rounded-xl border border-border/30 bg-primary/60 p-4 md:p-5">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <div>
          <p className="text-[10px] text-red-400 font-medium mb-3 uppercase tracking-wider">{cap.before}</p>
          <div className="relative h-[120px]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 120" fill="none">
              <path d="M20 20 C60 80, 100 0, 140 60" stroke="#EF4444" strokeWidth="1" opacity="0.3" fill="none" />
              <path d="M20 60 C80 10, 60 110, 140 60" stroke="#EF4444" strokeWidth="1" opacity="0.25" fill="none" />
              <path d="M20 100 C50 40, 110 80, 140 30" stroke="#EF4444" strokeWidth="0.8" opacity="0.2" fill="none" />
              {[20, 140].map((x) => [20, 60, 100].map((y) => (<circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#EF4444" opacity="0.4" />))).flat()}
            </svg>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-accent font-medium mb-3 uppercase tracking-wider">{cap.after}</p>
          <div className="flex items-center gap-1 flex-wrap">
            {cap.steps.map((step: string, i: number) => (
              <div key={i} className="flex items-center">
                <div className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20 text-[9px] text-accent font-medium">{step}</div>
                {i < cap.steps.length - 1 && (<svg className="w-3 h-3 text-accent/40 mx-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>)}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-1.5 flex-1 rounded-full bg-accent/15"><div className="h-full w-[72%] rounded-full bg-accent/50" /></div>
            <span className="text-[9px] text-accent">{cap.optimized}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DigitalOpsVisual({ t }: { t: Translations }) {
  const cap = t.capabilities.items[1];
  return (
    <div className="rounded-xl border border-border/30 bg-primary/60 p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        {cap.modules.map((mod: string, i: number) => (
          <div key={i} className="flex items-center">
            <div className={`px-3 py-1.5 rounded-lg border text-[10px] font-medium text-text ${["bg-accent/15 border-accent/25", "bg-tech/15 border-tech/25", "bg-purple-500/15 border-purple-500/25", "bg-accent/15 border-accent/25", "bg-highlight/15 border-highlight/25"][i]}`}>{mod}</div>
            {i < cap.modules.length - 1 && (<svg className="w-3 h-3 text-accent/30 mx-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>)}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-accent/[0.05] border border-accent/10">
        <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-6.364-6.364L4.5 8.257" /></svg>
        <span className="text-[10px] text-accent">{cap.unified}</span>
      </div>
    </div>
  );
}

function AIAutomationVisual({ t }: { t: Translations }) {
  const cap = t.capabilities.items[2];
  const icons = [
    <path key="d" strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />,
    <path key="a" strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
    <path key="t" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    <path key="ap" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.66-1.5 3-4 3s-4-1.34-4-3 1.5-3 4-3 4 1.34 4 3z" />,
    <path key="ac" strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
  ];
  return (
    <div className="rounded-xl border border-border/30 bg-primary/60 p-4 md:p-5">
      <div className="flex items-center gap-1 flex-wrap">
        {cap.steps.map((step: string, i: number) => (
          <div key={i} className="flex items-center">
            <div className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-[10px] font-medium ${i === 1 ? "bg-accent/15 border-accent/30 text-accent" : "bg-surface-card border-border/30 text-text"}`}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">{icons[i]}</svg>
              {step}
            </div>
            {i < cap.steps.length - 1 && (<svg className="w-3 h-3 text-accent/30 mx-1 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>)}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[9px] text-muted-dark">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        {cap.auto}
      </div>
    </div>
  );
}

function IndustrySolutionsVisual({ t }: { t: Translations }) {
  const cap = t.capabilities.items[3];
  const emojis = ["🏗", "📦", "🪑", "⚙", "💼"];
  return (
    <div className="rounded-xl border border-border/30 bg-primary/60 p-4 md:p-5">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {cap.industries.map((ind: string, i: number) => (
          <div key={i} className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg bg-surface-card/50 border border-border/20 hover:border-accent/20 transition-colors">
            <span className="text-base">{emojis[i]}</span>
            <span className="text-[9px] text-text-dim">{ind}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[9px] text-muted-dark">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        {cap.note}
      </div>
    </div>
  );
}

const visuals = [ProcessRedesignVisual, DigitalOpsVisual, AIAutomationVisual, IndustrySolutionsVisual];

export function WhatWeDo() {
  const { t } = useLang();

  return (
    <Section id="capabilities" variant="elevated">
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-4">{t.capabilities.tag}</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-xl">
          {t.capabilities.titleA} <span className="text-accent">{t.capabilities.titleB}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {t.capabilities.items.map((cap, i) => {
          const Visual = visuals[i];
          return (
            <div key={i} className="group rounded-xl border border-border/30 bg-surface-card/40 overflow-hidden hover:border-accent/20 transition-all duration-300">
              <div className="p-4 md:p-5"><Visual t={t} /></div>
              <div className="px-5 pb-5 md:px-6 md:pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-accent/15 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">{cap.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">{cap.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
