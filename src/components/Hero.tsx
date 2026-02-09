"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import translations, { t } from "@/config/translations";
import { siteConfig, getWhatsAppUrl } from "@/config/site.config";

/** Parse a stat string like "300K+" or "5,000+" into { num, suffix } */
function parseStat(value: string): { num: number; suffix: string } {
  const match = value.match(/^([\d,]+(?:\.\d+)?)\s*(.*)$/);
  if (!match) return { num: 0, suffix: value };
  const raw = match[1].replace(/,/g, "");
  return { num: parseFloat(raw), suffix: match[2] };
}

function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("0");
  const hasAnimated = useRef(false);
  const motionVal = useMotionValue(0);

  const { num, suffix } = parseStat(value);
  const isDecimal = !Number.isInteger(num);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(motionVal, num, {
        duration: 1.8,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (isDecimal) {
            setDisplayed(latest.toFixed(1));
          } else {
            // Format with commas for numbers >= 1000
            const rounded = Math.round(latest);
            setDisplayed(
              rounded >= 1000
                ? rounded.toLocaleString("en-US")
                : rounded.toString()
            );
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, motionVal, num, isDecimal]);

  return (
    <span ref={ref} className="text-gold font-bold text-lg sm:text-xl">
      {displayed}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-deep via-black-deep to-black-card" />

      {/* Subtle radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Diamond icon */}
          <div className="flex justify-center mb-6">
            <svg
              className="w-8 h-8 text-gold"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5z" />
            </svg>
          </div>

          {/* Brand name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4">
            <span className="text-gold-gradient">BARBERO</span>
            <br />
            <span className="text-white-soft">MILLONARIO</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white-muted tracking-wide mb-2 max-w-2xl mx-auto">
            {t(translations.hero.tagline, lang)}
          </p>

          {/* Subtitle */}
          <p className="text-gold text-sm sm:text-base uppercase tracking-[0.3em] mb-10">
            {t(translations.hero.subtitle, lang)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA */}
          <a
            href={getWhatsAppUrl(undefined, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-4 rounded-sm text-base sm:text-lg uppercase tracking-wider w-full sm:w-auto text-center"
          >
            {t(translations.hero.cta, lang)}
          </a>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="px-8 py-4 rounded-sm text-base sm:text-lg uppercase tracking-wider border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300 w-full sm:w-auto text-center"
          >
            {t(translations.hero.ctaSecondary, lang)}
          </a>
        </motion.div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm sm:text-base"
        >
          {[
            { label: "TikTok", value: siteConfig.stats.tiktok },
            { label: "Instagram", value: siteConfig.stats.instagram },
            { label: "YouTube", value: siteConfig.stats.youtube },
            {
              label: t(translations.hero.statsClients, lang),
              value: siteConfig.stats.clients,
            },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <AnimatedStat value={stat.value} />
              <span className="text-white-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-deep to-transparent" />
    </section>
  );
}
