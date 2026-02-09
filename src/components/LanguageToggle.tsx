"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-black-border hover:border-gold/50 transition-all duration-300 text-sm"
      aria-label="Toggle language"
    >
      <span className={lang === "es" ? "text-gold font-bold" : "text-white-muted"}>
        ES
      </span>
      <span className="text-black-border">/</span>
      <span className={lang === "en" ? "text-gold font-bold" : "text-white-muted"}>
        EN
      </span>
    </button>
  );
}
