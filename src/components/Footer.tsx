"use client";

import { useLanguage } from "@/hooks/useLanguage";
import translations, { t } from "@/config/translations";
import { siteConfig, getWhatsAppUrl } from "@/config/site.config";

export default function Footer() {
  const { lang } = useLanguage();
  const { footer } = translations;

  const quickLinks = [
    { label: translations.nav.about, href: "#about" },
    { label: translations.nav.services, href: "#services" },
    { label: translations.nav.gallery, href: "#gallery" },
    { label: translations.nav.testimonials, href: "#testimonials" },
    { label: translations.nav.faq, href: "#faq" },
  ];

  return (
    <footer className="bg-black-deep border-t border-black-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-gold-gradient text-xl font-bold tracking-wider mb-3 font-[family-name:var(--font-heading)]">
              BARBERO MILLONARIO
            </h3>
            <p className="text-white-muted text-sm leading-relaxed mb-4">
              {t(footer.tagline, lang)}
            </p>
            <a
              href={getWhatsAppUrl(undefined, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block px-5 py-2.5 rounded-sm text-xs uppercase tracking-wider"
            >
              {t(translations.nav.book, lang)}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white-soft text-sm font-bold uppercase tracking-wider mb-4">
              {t(footer.quickLinks, lang)}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white-muted text-sm hover:text-gold transition-colors"
                  >
                    {t(link.label, lang)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white-soft text-sm font-bold uppercase tracking-wider mb-4">
              {t(footer.contact, lang)}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={getWhatsAppUrl(undefined, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-muted text-sm hover:text-gold transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="text-white-muted text-sm">
                Medellin, Colombia
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white-soft text-sm font-bold uppercase tracking-wider mb-4">
              {t(footer.followUs, lang)}
            </h4>
            <div className="flex gap-4">
              {/* TikTok */}
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-black-border flex items-center justify-center text-white-muted hover:text-gold hover:border-gold/40 transition-all"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-black-border flex items-center justify-center text-white-muted hover:text-gold hover:border-gold/40 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-black-border flex items-center justify-center text-white-muted hover:text-gold hover:border-gold/40 transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white-muted/60">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.businessName}. {t(footer.rights, lang)}.
          </p>
          <p>{t(footer.madeWith, lang)} &#10084;</p>
        </div>
      </div>
    </footer>
  );
}
