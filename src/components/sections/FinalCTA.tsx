"use client";

import { useLang } from "@/i18n/hook";

export function FinalCTA() {
  const { t } = useLang();

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#060A14] border-t border-border/20 scroll-mt-20 overflow-hidden">
      {/* Background network */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-accent/[0.03] blur-[130px] pointer-events-none" />
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]" viewBox="0 0 800 500" fill="none">
        <circle cx="100" cy="80" r="3" fill="#00B4FF" />
        <circle cx="700" cy="100" r="2.5" fill="#00B4FF" />
        <circle cx="180" cy="380" r="2" fill="#06D6A0" />
        <circle cx="620" cy="400" r="3" fill="#00B4FF" />
        <circle cx="400" cy="40" r="2" fill="#06D6A0" />
        <circle cx="50" cy="250" r="2.5" fill="#00B4FF" />
        <circle cx="750" cy="280" r="2" fill="#06D6A0" />
        <circle cx="300" cy="450" r="2" fill="#00B4FF" />
        <circle cx="500" cy="460" r="2.5" fill="#06D6A0" />
        <line x1="100" y1="80" x2="400" y2="40" stroke="#00B4FF" strokeWidth="0.5" />
        <line x1="400" y1="40" x2="700" y2="100" stroke="#00B4FF" strokeWidth="0.5" />
        <line x1="180" y1="380" x2="620" y2="400" stroke="#06D6A0" strokeWidth="0.5" />
        <line x1="50" y1="250" x2="100" y2="80" stroke="#00B4FF" strokeWidth="0.5" />
        <line x1="700" y1="100" x2="750" y2="280" stroke="#06D6A0" strokeWidth="0.5" />
        <line x1="300" y1="450" x2="500" y2="460" stroke="#00B4FF" strokeWidth="0.3" />
      </svg>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
          {t.cta.titleA} <span className="text-accent">{t.cta.titleB}</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed">{t.cta.subtitle}</p>

        <div className="mt-10">
          <a
            href={t.ctaWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-medium rounded-lg bg-accent text-primary hover:bg-accent-light shadow-[0_0_25px_rgba(0,180,255,0.25)] hover:shadow-[0_0_35px_rgba(0,180,255,0.4)] transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            {t.cta.button}
          </a>
        </div>

        {/* Contact strip */}
        <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-5 sm:gap-8 px-6 py-4 rounded-xl border border-border/20 bg-surface-card/30 backdrop-blur-sm">
          <a href={`https://${t.cta.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.732-3.558" /></svg>
            {t.cta.website}
          </a>
          <div className="hidden sm:block w-px h-4 bg-border/30" />
          <a href={t.ctaWhatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            WhatsApp: {t.cta.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
