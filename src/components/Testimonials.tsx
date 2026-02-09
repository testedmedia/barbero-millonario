"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import translations, { t } from "@/config/translations";
import { siteConfig } from "@/config/site.config";

function GoogleLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const starSize = size === "lg" ? "w-5 h-5" : "w-3.5 h-3.5";
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${starSize} ${i < rating ? "text-[#FBBC05]" : "text-black-border"}`}
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
      className="bg-white rounded-lg p-5 sm:p-6 relative flex-1 min-w-0 shadow-md"
    >
      {/* Top row: Google icon + reviewer info */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Avatar circle with initial */}
          <div className="w-10 h-10 rounded-full bg-[#1a73e8] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">
              {(lang === "es" ? testimonial.nameEs : testimonial.nameEn).charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-gray-900 text-sm font-semibold leading-tight">
              {lang === "es" ? testimonial.nameEs : testimonial.nameEn}
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <StarRating rating={testimonial.rating} />
            </div>
          </div>
        </div>
        <GoogleLogo className="w-6 h-6 flex-shrink-0" />
      </div>

      {/* Quote */}
      <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-5">
        {lang === "es" ? testimonial.quoteEs : testimonial.quoteEn}
      </p>

      {/* Bottom: service tag + "Posted on Google" */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-500">
          {lang === "es" ? testimonial.serviceEs : testimonial.serviceEn}
        </span>
        <div className="flex items-center gap-1">
          <GoogleLogo className="w-3.5 h-3.5" />
          <span className="text-[10px] text-gray-400 font-medium">
            {lang === "es" ? "Google Review" : "Google Review"}
          </span>
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
          className="text-center mb-12"
        >
          <div className="gold-line mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white-soft mb-4">
            {t(translations.testimonials.title, lang)}
          </h2>
          <p className="text-gold text-lg uppercase tracking-wider">
            {t(translations.testimonials.subtitle, lang)}
          </p>
        </motion.div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
        >
          {/* Google Reviews aggregate */}
          <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-3 shadow-lg">
            <GoogleLogo className="w-8 h-8" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-gray-900 text-2xl font-bold leading-none">5.0</span>
                <StarRating rating={5} size="lg" />
              </div>
              <span className="text-gray-500 text-xs mt-0.5">
                {lang === "es" ? "Basado en 168 resenas de Google" : "Based on 168 Google reviews"}
              </span>
            </div>
          </div>

          {/* View on Google link */}
          <a
            href="https://www.google.com/maps/place/Barberia+Medellin+%7C+Movil+Barbero+%7C+Barbero+Millonario/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white-muted hover:text-gold transition-colors text-sm group"
          >
            <GoogleLogo className="w-4 h-4" />
            <span className="group-hover:underline">
              {lang === "es" ? "Ver todas las resenas en Google" : "View all reviews on Google"}
            </span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goNext}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black-surface border border-black-border flex items-center justify-center text-white-muted hover:text-gold hover:border-gold/40 transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Desktop: 3 cards */}
          <div className="hidden lg:flex gap-5 px-8">
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
