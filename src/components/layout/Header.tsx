"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/i18n/hook";

export function Header() {
  const { t, lang, toggle } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

  const navItems = [
    { label: t.header.navCapabilities, href: "#capabilities" },
    { label: t.header.navProcess, href: "#how" },
    { label: t.header.navIndustries, href: "#industries" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            <span className="text-accent">25H</span>{" "}
            <span className="text-white">AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-dim hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggle}
              className="text-xs font-medium px-2.5 py-1 rounded-md border border-border/40 text-text-dim hover:text-white hover:border-border-light transition-colors"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
            <a
              href={t.ctaWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-accent text-primary hover:bg-accent-light transition-colors shadow-[0_0_15px_rgba(0,180,255,0.2)]"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              {t.header.cta}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="text-xs font-medium px-2 py-1 rounded-md border border-border/40 text-text-dim"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
            <button
              type="button"
              className="p-2 text-text-dim hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-primary/95 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base text-text hover:text-accent transition-colors border-b border-border/20 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={t.ctaWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mb-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg bg-accent text-primary"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              {t.header.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
