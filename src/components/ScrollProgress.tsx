"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(scrollTop / docHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-60 h-[3px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, #D4AF37, #F2D06B, #D4AF37)",
        }}
      />
    </div>
  );
}
