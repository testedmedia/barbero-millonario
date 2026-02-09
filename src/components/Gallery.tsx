"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import translations, { t } from "@/config/translations";
import { siteConfig } from "@/config/site.config";

export default function Gallery() {
  const { lang } = useLanguage();
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleImageError = (id: number) => {
    setFailedImages((prev) => new Set(prev).add(id));
  };

  // Only images that loaded successfully are navigable in the lightbox
  const loadedItems = siteConfig.gallery.filter(
    (item) => !failedImages.has(item.id)
  );

  const openLightbox = (galleryId: number) => {
    const idx = loadedItems.findIndex((item) => item.id === galleryId);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % loadedItems.length);
  }, [lightboxIndex, loadedItems.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + loadedItems.length) % loadedItems.length
    );
  }, [lightboxIndex, loadedItems.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const currentItem =
    lightboxIndex !== null ? loadedItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-black-deep">
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
            {t(translations.gallery.title, lang)}
          </h2>
          <p className="text-gold text-lg uppercase tracking-wider">
            {t(translations.gallery.subtitle, lang)}
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {siteConfig.gallery.map((item, i) => {
            const heights = [
              "aspect-[3/4]",
              "aspect-square",
              "aspect-[4/5]",
              "aspect-[3/4]",
              "aspect-square",
              "aspect-[5/6]",
            ];
            const heightClass = heights[i % heights.length];
            const showPlaceholder = failedImages.has(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className={`${heightClass} break-inside-avoid rounded-sm overflow-hidden border border-black-border group relative ${showPlaceholder ? "gallery-placeholder" : ""}`}
                onClick={() => !showPlaceholder && openLightbox(item.id)}
                style={{ cursor: showPlaceholder ? "default" : "pointer" }}
              >
                {showPlaceholder ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white-muted/30 group-hover:text-white-muted/50 transition-colors">
                    <svg
                      className="w-10 h-10 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={0.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                    <span className="text-[10px] text-center px-2">
                      {item.alt}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                    onError={() => handleImageError(item.id)}
                  />
                )}

                {/* Gold hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black-deep/95" />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white-muted hover:text-gold transition-colors p-2 cursor-pointer"
              aria-label="Close lightbox"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous arrow */}
            {loadedItems.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white-muted hover:text-gold transition-colors p-2 cursor-pointer"
                aria-label="Previous image"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Next arrow */}
            {loadedItems.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white-muted hover:text-gold transition-colors p-2 cursor-pointer"
                aria-label="Next image"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              key={currentItem.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white-muted text-sm">
              {lightboxIndex !== null ? lightboxIndex + 1 : 0} /{" "}
              {loadedItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
