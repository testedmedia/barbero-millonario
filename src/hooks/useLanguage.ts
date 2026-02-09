"use client";

import { useState, useCallback, useEffect, createContext, useContext } from "react";
import type { Lang } from "@/config/translations";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  toggleLang: () => {},
  setLang: () => {},
});

export function useLanguageProvider() {
  const [lang, setLangState] = useState<Lang>("es");

  // Restore from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("bm-lang");
    if (stored === "en" || stored === "es") {
      setLangState(stored);
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "es" ? "en" : "es";
      localStorage.setItem("bm-lang", next);
      return next;
    });
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("bm-lang", newLang);
  }, []);

  return { lang, toggleLang, setLang };
}

export function useLanguage() {
  return useContext(LanguageContext);
}
