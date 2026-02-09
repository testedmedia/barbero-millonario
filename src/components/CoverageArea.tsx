"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import translations, { t } from "@/config/translations";
import { siteConfig } from "@/config/site.config";

export default function CoverageArea() {
  const { lang } = useLanguage();

  return (
    <section id="coverage" className="py-20 sm:py-28 bg-black-deep">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
            {t(translations.coverage.title, lang)}
          </h2>
          <p className="text-gold text-lg uppercase tracking-wider">
            {t(translations.coverage.subtitle, lang)}
          </p>
        </motion.div>

        {/* Area tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          {siteConfig.coverageAreas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-5 py-2.5 rounded-sm border border-gold/30 text-gold text-sm sm:text-base uppercase tracking-wider hover:bg-gold/10 transition-colors duration-300"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {area}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-white-muted text-sm italic"
        >
          {t(translations.coverage.note, lang)}
        </motion.p>
      </div>
    </section>
  );
}
