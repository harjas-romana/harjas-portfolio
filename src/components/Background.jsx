import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Background() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const noiseOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.04, 0.02]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none transition-colors duration-1000 dark:bg-[#0a0a0a] bg-[#ffffff]">
      {/* Faint grid pattern */}
      <div className="absolute inset-0 bg-grid" />

      {/* Radial gradient glow */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_30%,_rgba(0,217,255,0.04)_0%,_transparent_50%)] bg-[radial-gradient(circle_at_50%_30%,_rgba(0,0,0,0.02)_0%,_transparent_50%)]"
      />

      {/* SVG Noise texture */}
      <motion.svg
        style={{ scale, opacity: noiseOpacity }}
        className="absolute inset-0 w-full h-full mix-blend-difference"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </motion.svg>

      {/* Scanline sweep */}
      <div
        className="absolute left-0 right-0 h-[1px] dark:bg-white/[0.02] bg-black/[0.02] pointer-events-none"
        style={{ animation: "scanline 8s linear infinite" }}
      />
    </div>
  );
}
