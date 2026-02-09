"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import translations, { t } from "@/config/translations";
import { siteConfig } from "@/config/site.config";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-gold" : "text-black-border"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { lang } = useLanguage();
  const testimonials = siteConfig.testimonials;
  const total = testimonials.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // How many visible at a time: 3 on desktop, 1 on mobile
  // We handle responsive via CSS (show/hide), but for carousel logic we advance by 1
  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance every 5s unless paused
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, goNext]);

  // Get visible indices (wrap around)
  const getVisibleIndices = (count: number) => {
    const indices: number[] = [];
    for (let i = 0; i < count; i++) {
      indices.push((activeIndex + i) % total);
    }
    return indices;
  };

  const visibleDesktop = getVisibleIndices(3);
  const visibleMobile = [activeIndex];

  const renderCard = (testimonial: (typeof testimonials)[number], i: number) => (
    <motion.div
      key={`${testimonial.id}-${activeIndex}`}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      className="card-luxury rounded-sm p-6 sm:p-8 relative flex-1 min-w-0"
    >
      {/* Gold quote mark */}
      <div className="text-gold/20 text-6xl font-serif absolute top-4 right-6 leading-none">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <p className="text-white-muted text-sm leading-relaxed mb-6 relative z-10">
        {lang === "es" ? testimonial.quoteEs : testimonial.quoteEn}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-black-surface border border-black-border flex items-center justify-center">
          <span className="text-gold text-sm font-bold">
            {(lang === "es" ? testimonial.nameEs : testimonial.nameEn).charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white-soft text-sm font-semibold">
            {lang === "es" ? testimonial.nameEs : testimonial.nameEn}
          </p>
          <p className="text-white-muted text-xs">
            {lang === "es" ? testimonial.serviceEs : testimonial.serviceEn}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-black-card">
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
            {t(translations.testimonials.title, lang)}
          </h2>
          <p className="text-gold text-lg uppercase tracking-wider">
            {t(translations.testimonials.subtitle, lang)}
          </p>
        </motion.div>

        {/* Carousel container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black-surface border border-black-border flex items-center justify-center text-white-muted hover:text-gold hover:border-gold/40 transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goNext}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black-surface border border-black-border flex items-center justify-center text-white-muted hover:text-gold hover:border-gold/40 transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Desktop: 3 cards */}
          <div className="hidden lg:flex gap-6 px-8">
            {visibleDesktop.map((idx, i) => renderCard(testimonials[idx], i))}
          </div>

          {/* Mobile/Tablet: 1 card */}
          <div className="lg:hidden px-8">
            {visibleMobile.map((idx, i) => renderCard(testimonials[idx], i))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "bg-gold w-6"
                  : "bg-black-border hover:bg-white-muted/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
