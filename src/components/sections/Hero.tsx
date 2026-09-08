"use client";

import { Button } from "@/components/ui/Button";
import { useLang } from "@/i18n/hook";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-accent/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-[500px] h-[400px] rounded-full bg-tech/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              <span className="text-xs font-medium text-accent tracking-wide">
                {t.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-white">
              {t.hero.titleA}{" "}
              <span className="text-accent">{t.hero.titleB}</span>
            </h1>

            <p className="mt-6 text-lg text-muted leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={t.ctaWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-medium rounded-lg bg-accent text-primary hover:bg-accent-light shadow-[0_0_20px_rgba(0,180,255,0.25)] hover:shadow-[0_0_30px_rgba(0,180,255,0.4)] transition-all duration-200 px-7 py-3.5 text-base"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                {t.hero.ctaPrimary}
              </a>
              <Button href="#how" variant="outline" size="lg">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="animate-float relative">
              {/* Network decoration */}
              <svg className="absolute -inset-6 md:-inset-10 w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] h-[calc(100%+3rem)] md:h-[calc(100%+5rem)] pointer-events-none" viewBox="0 0 640 480" fill="none">
                <line x1="580" y1="60" x2="635" y2="30" stroke="#00B4FF" strokeWidth="0.5" opacity="0.2" />
                <line x1="590" y1="200" x2="638" y2="185" stroke="#00B4FF" strokeWidth="0.5" opacity="0.15" />
                <line x1="575" y1="360" x2="630" y2="390" stroke="#06D6A0" strokeWidth="0.5" opacity="0.15" />
                <line x1="50" y1="420" x2="10" y2="455" stroke="#00B4FF" strokeWidth="0.5" opacity="0.15" />
                <line x1="60" y1="80" x2="15" y2="50" stroke="#06D6A0" strokeWidth="0.5" opacity="0.12" />
                <circle cx="635" cy="30" r="3" fill="#00B4FF" opacity="0.5" />
                <circle cx="635" cy="30" r="6" fill="#00B4FF" opacity="0.1" />
                <circle cx="638" cy="185" r="2.5" fill="#00B4FF" opacity="0.4" />
                <circle cx="630" cy="390" r="3" fill="#06D6A0" opacity="0.4" />
                <circle cx="630" cy="390" r="6" fill="#06D6A0" opacity="0.1" />
                <circle cx="10" cy="455" r="2.5" fill="#00B4FF" opacity="0.35" />
                <circle cx="15" cy="50" r="2" fill="#06D6A0" opacity="0.3" />
              </svg>

              {/* Browser Window */}
              <div className="rounded-xl border border-border/60 shadow-2xl shadow-accent/[0.06] overflow-hidden bg-surface-card">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-light border-b border-border/40">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="h-6 bg-primary rounded-md border border-border/30 flex items-center px-3 max-w-[280px]">
                      <span className="text-[11px] text-muted-dark font-mono">app.25h.ai/dashboard</span>
                    </div>
                  </div>
                </div>

                <div className="flex bg-primary min-h-[320px] md:min-h-[400px]">
                  <div className="hidden md:flex w-[170px] shrink-0 flex-col gap-1 p-3 border-r border-border/30 bg-surface/40">
                    {t.hero.dashNav.map((item, i) => (
                      <div
                        key={i}
                        className={`h-8 rounded-md px-3 flex items-center text-[11px] font-medium transition-colors ${
                          i === 0 ? "bg-accent/10 text-accent" : "text-muted-dark hover:text-text hover:bg-white/[0.03]"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                    <div className="mt-auto pt-3 border-t border-border/20">
                      <div className="flex items-center gap-2 px-1">
                        <div className="w-6 h-6 rounded-md bg-accent/15 flex items-center justify-center border border-accent/20">
                          <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[10px] text-accent font-medium block">{t.hero.dashAiAgent}</span>
                          <span className="text-[9px] text-muted-dark flex items-center gap-1">
                            {t.hero.dashAiStatus}
                            <span className="w-1 h-1 rounded-full bg-green-400" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-4 md:p-5 space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                      {t.hero.dashMetrics.map((m) => (
                        <div key={m.label} className="bg-surface-card rounded-lg p-3 border border-border/40">
                          <p className="text-[9px] md:text-[10px] text-muted-dark uppercase tracking-wider">{m.label}</p>
                          <p className="text-base md:text-lg font-bold mt-0.5 text-text">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="md:col-span-2 bg-surface-card rounded-lg p-3 border border-border/40">
                        <p className="text-[10px] font-medium text-muted-dark mb-2">{t.hero.dashOpsChart}</p>
                        <div className="flex items-end gap-1.5 h-24 md:h-28">
                          {[35, 58, 42, 75, 50, 88, 65, 80, 55, 72, 48, 82].map((h, i) => (
                            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: i === 7 || i === 11 ? "#00B4FF" : "rgba(0,180,255,0.3)" }} />
                          ))}
                        </div>
                      </div>
                      <div className="bg-surface-card rounded-lg p-3 border border-border/40">
                        <p className="text-[10px] font-medium text-muted-dark mb-2">{t.hero.dashAiTitle}</p>
                        <div className="space-y-2.5">
                          {t.hero.dashAiItems.map((item) => (
                            <div key={item.label}>
                              <div className="flex justify-between text-[9px] text-muted-dark mb-1">
                                <span>{item.label}</span><span>{item.value}</span>
                              </div>
                              <div className="h-1 bg-primary rounded-full overflow-hidden">
                                <div className="h-full bg-accent rounded-full" style={{ width: item.value }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-surface-card rounded-lg p-3 border border-border/40">
                        <p className="text-[10px] font-medium text-muted-dark mb-2">{t.hero.dashTasksTitle}</p>
                        <div className="space-y-2">
                          {t.hero.dashTasks.map((task, i) => (
                            <div key={i} className="flex items-center justify-between gap-2">
                              <span className="text-[10px] text-text truncate">{task.label}</span>
                              <span className={`text-[9px] px-1.5 py-0.5 rounded shrink-0 ${i === 2 ? "bg-highlight/10 text-highlight" : i === 3 ? "bg-accent/10 text-accent" : i === 1 ? "bg-tech/10 text-tech" : "bg-accent/10 text-accent"}`}>
                                {task.tag}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-surface-card rounded-lg p-3 border border-border/40">
                        <p className="text-[10px] font-medium text-muted-dark mb-2">{t.hero.dashWorkflowTitle}</p>
                        <div className="space-y-2">
                          {t.hero.dashWorkflow.map((s, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-accent" : i === 1 ? "bg-tech" : i === 2 ? "bg-green-500" : "bg-highlight"}`} />
                                <span className="text-[10px] text-muted">{s.label}</span>
                              </div>
                              <span className="text-[10px] font-semibold text-text">{s.count}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
