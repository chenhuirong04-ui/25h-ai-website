"use client";

import { createContext, useState, useEffect, type ReactNode } from "react";
import type { Lang } from "./translations";

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
}

export const LangContext = createContext<LangContextValue>({
  lang: "zh",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("25h-lang") as Lang | null;
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "zh" ? "en" : "zh";
      localStorage.setItem("25h-lang", next);
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}
