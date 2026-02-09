"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import translations, { t } from "@/config/translations";
import LanguageToggle from "./LanguageToggle";
import { getWhatsAppUrl } from "@/config/site.config";

const navItems = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "gallery", href: "#gallery" },
  { key: "testimonials", href: "#testimonials" },
  { key: "faq", href: "#faq" },
] as const;

export default function Navbar() {
  const { lang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black-deep/90 backdrop-blur-md border-b border-black-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-gold-gradient text-xl font-bold tracking-wider font-[family-name:var(--font-heading)]">
              BARBERO MILLONARIO
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white-muted hover:text-gold text-sm uppercase tracking-wider transition-colors duration-300"
              >
                {t(translations.nav[item.key], lang)}
              </a>
            ))}
            <LanguageToggle />
            <a
              href={getWhatsAppUrl(undefined, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-5 py-2 rounded-sm text-sm uppercase tracking-wider"
            >
              {t(translations.nav.book, lang)}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white-soft p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black-deep border-t border-black-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white-muted hover:text-gold text-base uppercase tracking-wider py-2 transition-colors"
                >
                  {t(translations.nav[item.key], lang)}
                </a>
              ))}
              <a
                href={getWhatsAppUrl(undefined, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-5 py-3 rounded-sm text-sm uppercase tracking-wider text-center mt-2"
              >
                {t(translations.nav.book, lang)}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
