"use client";

import { useContext } from "react";
import { LangContext } from "./context";
import { translations } from "./translations";

export function useLang() {
  const { lang, toggle } = useContext(LangContext);
  const t = translations[lang];
  return { lang, toggle, t };
}
