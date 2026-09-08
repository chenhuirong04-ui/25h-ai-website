"use client";

import { Section } from "@/components/ui/Section";
import { useLang } from "@/i18n/hook";

const icons = [
  <svg key="s" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  <svg key="r" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>,
  <svg key="d" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>,
  <svg key="a" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
  <svg key="i" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
  <svg key="c" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" /></svg>,
];

export function Transform() {
  const { t } = useLang();

  return (
    <Section id="how" variant="deep">
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-wider uppercase text-accent mb-4">{t.process.tag}</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{t.process.title}</h2>
        <p className="mt-4 text-lg text-muted max-w-2xl">{t.process.subtitle}</p>
      </div>

      <div className="hidden md:block relative">
        <div className="absolute top-[28px] left-[6%] right-[6%] h-px bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40" />
        <div className="absolute top-[27px] left-[6%] right-[6%] h-[2px] overflow-hidden">
          <div className="w-8 h-full bg-accent/60 rounded-full" style={{ animation: "slide-flow 4s linear infinite" }} />
        </div>

        <div className="grid grid-cols-6 gap-4">
          {t.process.steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto w-14 h-14 rounded-xl bg-surface border border-accent/25 flex items-center justify-center mb-4 shadow-[0_0_18px_rgba(0,180,255,0.1)] text-accent relative">
                {icons[i]}
                {i === 3 && <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent animate-pulse-dot" />}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{step.label}</h3>
              <p className="text-[11px] text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden space-y-1">
        {t.process.steps.map((step, i) => (
          <div key={i}>
            <div className="flex items-start gap-4 py-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-surface border border-accent/25 flex items-center justify-center shadow-[0_0_10px_rgba(0,180,255,0.08)] text-accent">
                {icons[i]}
              </div>
              <div className="pt-1">
                <h3 className="text-sm font-semibold text-white">{step.label}</h3>
                <p className="text-xs text-muted mt-0.5">{step.desc}</p>
              </div>
            </div>
            {i < t.process.steps.length - 1 && <div className="ml-5 h-px bg-accent/10" />}
          </div>
        ))}
      </div>
    </Section>
  );
}
