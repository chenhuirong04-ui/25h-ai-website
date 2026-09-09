"use client";

import { LanguageProvider } from "@/i18n/context";
import { ContactModalProvider } from "@/context/ContactModalContext";
import { ContactModal } from "@/components/ContactModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ContactModalProvider>
        {children}
        <ContactModal />
      </ContactModalProvider>
    </LanguageProvider>
  );
}
