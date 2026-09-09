"use client";

import { useState } from "react";
import { useLang } from "@/i18n/hook";
import { useContactModal } from "@/context/ContactModalContext";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function WeChatQR() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-32 h-32 rounded-lg bg-primary/60 border border-border/20 flex items-center justify-center">
        <svg className="w-8 h-8 text-muted-dark" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5h3.75l1.5 4.5-2.25 1.5a11.25 11.25 0 005.25 5.25l1.5-2.25 4.5 1.5v3.75a1.5 1.5 0 01-1.5 1.5C9.615 20.25 3.75 14.385 3.75 6a1.5 1.5 0 011.5-1.5z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-32 rounded-lg overflow-hidden border border-border/20 shadow-lg shadow-black/20 bg-white">
      {/* Full source image shown as-is (object-contain), no crop/redraw — decorative border/shadow only */}
      <img
        src="/images/contact/wechat-qr.png"
        alt="WeChat QR"
        className="w-full h-auto block object-contain"
        onError={() => setError(true)}
      />
    </div>
  );
}

export function ContactModal() {
  const { t } = useLang();
  const { isOpen, close } = useContactModal();
  const c = t.contactModal;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4"
      onClick={close}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-border/40 bg-surface p-6 md:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white">{c.title}</h2>
          <button onClick={close} className="text-muted hover:text-white transition-colors text-lg">✕</button>
        </div>

        <div className="space-y-4">
          {/* International — WhatsApp */}
          <div className="rounded-xl border border-border/30 bg-surface-card/40 p-4">
            <p className="text-xs font-medium text-accent uppercase tracking-wider mb-3">{c.international}</p>
            <a
              href={t.ctaWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-white group-hover:text-accent transition-colors">{c.whatsapp}</p>
                <p className="text-xs text-muted">+971 58 556 6809</p>
              </div>
            </a>
          </div>

          {/* China — WeChat */}
          <div className="rounded-xl border border-border/30 bg-surface-card/40 p-4">
            <p className="text-xs font-medium text-accent uppercase tracking-wider mb-3">{c.china}</p>
            <div className="flex flex-col items-center text-center gap-3">
              <WeChatQR />
              <div>
                <p className="text-sm font-medium text-white">{c.wechat}</p>
                <p className="text-xs text-muted font-mono">{c.wechatIdLabel}Dubai260666</p>
                <p className="text-[11px] text-muted-dark mt-1">{c.wechatHint}</p>
              </div>
            </div>
          </div>

          <a
            href={`https://${t.cta.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs text-muted hover:text-accent transition-colors pt-2"
          >
            {t.cta.website}
          </a>
        </div>
      </div>
    </div>
  );
}
