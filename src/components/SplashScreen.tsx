"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black-deep flex flex-col items-center justify-center"
          >
            {/* Diamond icon */}
            <motion.svg
              className="w-12 h-12 text-gold mb-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5z" />
            </motion.svg>

            {/* Brand text */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-gold-gradient">BARBERO</span>
              <br />
              <span className="text-white-soft">MILLONARIO</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
