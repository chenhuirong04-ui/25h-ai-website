"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/i18n/hook";

export function Footer() {
  const { t } = useLang();
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

  const navLinks = [
    { label: t.footer.navCapabilities, href: "#capabilities" },
    { label: t.footer.navProcess, href: "#how" },
    { label: t.footer.navIndustries, href: "#industries" },
    { label: t.footer.navAI, href: "#ai" },
  ];

  return (
    <footer className="bg-[#040810] border-t border-border/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main grid — compact */}
        <div className="py-8 md:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight">
              <span className="text-accent">25H</span>{" "}
              <span className="text-white">AI</span>
            </Link>
            <p className="mt-2 text-xs leading-relaxed text-muted max-w-[260px]">
              {t.footer.desc}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-wider uppercase text-muted-dark mb-3">
              {t.footer.nav}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-muted hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-wider uppercase text-muted-dark mb-3">
              {t.footer.contact}
            </h3>
            <div className="space-y-2.5">
              <a
                href={`https://${t.footer.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.732-3.558" />
                </svg>
                {t.footer.website}
              </a>
              <a
                href={t.ctaWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                WhatsApp: {t.footer.whatsapp}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar — minimal */}
        <div className="border-t border-border/10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-muted-dark">
            &copy; {new Date().getFullYear()} 25H AI. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-[10px] text-muted-dark hover:text-muted transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="text-[10px] text-muted-dark hover:text-muted transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
