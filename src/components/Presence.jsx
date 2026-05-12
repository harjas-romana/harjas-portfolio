import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalData } from '../data/portfolioData';

// --- MAGNETIC FOOTER LINK ---
// Keeping the magnetic physics but sharpening the visual style
function MagneticContactLink({ children, href }) {
  const ref = useRef(null);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-text-muted hover:text-accent transition-colors duration-500 uppercase inline-block text-xs md:text-sm font-mono tracking-[0.2em] relative group font-bold"
    >
      {children}
      <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </motion.a>
  );
}

export default function Presence() {
  const sectionRef = useRef(null);

  // Parallax and Opacity for the massive CTA
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const textScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 1]);

  return (
    <section
      ref={sectionRef}
      id="presence"
      className="relative min-h-screen bg-bg-base flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-border-subtle"
    >
      {/* --- BACKGROUND PARALLAX TEXT --- */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0, 0.3]) }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[30vw] font-sans font-bold text-border-subtle tracking-tighter opacity-20">
          CONNECT
        </span>
      </motion.div>

      <div className="w-full max-w-[100rem] mx-auto relative z-10 flex flex-col items-start">

        {/* Editorial Section Header */}
        <div className="mb-16 md:mb-24 flex items-center gap-4">
          <span className="text-accent font-mono text-sm font-bold tracking-[0.2em]">
            09 // CONTACT
          </span>
        </div>

        {/* --- MASSIVE CALL TO ACTION --- */}
        <motion.a
          href={`mailto:${personalData.email}`}
          style={{ opacity: textOpacity, scale: textScale }}
          className="group relative block w-full text-left"
        >
          <div className="overflow-hidden">
            <h2 className="text-[12vw] md:text-[10vw] font-sans font-bold tracking-tighter leading-[0.85] text-text-primary group-hover:text-accent transition-colors duration-700 uppercase">
              Initialize <br />
              <span className="text-text-muted group-hover:text-accent transition-colors duration-700">Handshake</span>
            </h2>
          </div>

          {/* Magnetic Arrow Indicator */}
          <motion.div
            className="mt-12 w-20 h-20 md:w-32 md:h-32 rounded-full border border-border-strong flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-700"
          >
            <span className="text-3xl md:text-5xl text-text-primary group-hover:text-white transition-colors duration-700">
              ↗
            </span>
          </motion.div>
        </motion.a>
      </div>

      {/* --- EDITORIAL FOOTER (The Handshake Matrix) --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-[100rem] mx-auto mt-24"
      >
        {/* Full width structural border */}
        <div className="w-full h-[1px] bg-border-strong mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">

          {/* Availability Status */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest font-bold">
              Current Node Status
            </span>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-text-primary font-bold uppercase tracking-widest">
                Ready for Handshake
              </span>
            </div>
          </div>

          {/* Social Cluster (Centered) */}
          <div className="flex flex-wrap gap-8 md:justify-center">
            <MagneticContactLink href={`https://${personalData.linkedin}`}>
              LinkedIn
            </MagneticContactLink>
            <MagneticContactLink href={`https://${personalData.github}`}>
              GitHub
            </MagneticContactLink>
            <MagneticContactLink href={`mailto:${personalData.email}`}>
              Direct
            </MagneticContactLink>
          </div>

          {/* System Info (Right Aligned) */}
          <div className="md:text-right flex flex-col gap-1">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest font-bold">
              Engineering Origin
            </span>
            <span className="text-xs md:text-sm font-sans font-bold text-text-primary uppercase tracking-tight">
              Faridkot // Punjab // India
            </span>
          </div>

        </div>
      </motion.div>
    </section>
  );
}