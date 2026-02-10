"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import translations, { t } from "@/config/translations";
import { siteConfig, getWhatsAppUrl, formatCOP } from "@/config/site.config";

export default function Services() {
  const { lang } = useLanguage();
  const { services: svcTranslations } = translations;

  return (
    <section id="services" className="py-20 sm:py-28 bg-black-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white-soft mb-4">
            {t(svcTranslations.title, lang)}
          </h2>
          <p className="text-gold text-lg uppercase tracking-wider">
            {t(svcTranslations.subtitle, lang)}
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className={`card-luxury rounded-sm overflow-hidden relative ${
                service.featured ? "lg:col-span-1 border-gold/30" : ""
              }`}
            >
              {/* Featured badge */}
              {service.featured && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold to-gold-light text-black-deep text-xs font-bold uppercase tracking-wider text-center py-1.5 z-10">
                  {t(svcTranslations.featured, lang)}
                </div>
              )}

              {/* Card content */}
              <div className={`p-6 sm:p-8 ${service.featured ? "pt-10" : ""}`}>
                {/* Service name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white-soft mb-3 font-[family-name:var(--font-heading)]">
                  {lang === "es" ? service.nameEs : service.nameEn}
                </h3>

                {/* Description */}
                <p className="text-white-muted text-sm mb-6 leading-relaxed">
                  {lang === "es" ? service.descEs : service.descEn}
                </p>

                {/* Price + Duration */}
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <p className="text-gold text-2xl sm:text-3xl font-bold">
                      {formatCOP(service.priceCOP)}
                    </p>
                    <p className="text-white-muted text-xs mt-1">
                      ~${service.priceUSD} USD
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-white-muted text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>
                      {service.duration} {t(svcTranslations.duration, lang)}
                    </span>
                  </div>
                </div>

                {/* Book CTA */}
                <a
                  href={getWhatsAppUrl(
                    lang === "es" ? service.nameEs : service.nameEn,
                    lang
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-sm uppercase tracking-wider text-sm font-bold transition-all duration-300 ${
                    service.featured
                      ? "btn-gold"
                      : "border border-gold/40 text-gold hover:bg-gold/10"
                  }`}
                >
                  {t(svcTranslations.book, lang)}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
