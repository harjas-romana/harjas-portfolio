import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalData, heroData } from '../data/portfolioData';
import ResumePayload from './ResumePayload';

// --- HEAVY KINETIC TYPOGRAPHY REVEAL ---
// We add a slight rotation (skew) to the characters as they slide up to give them physical weight.
function CharReveal({ char, delay, className = "" }) {
  return (
    <span className="inline-block overflow-hidden pb-2 md:pb-4">
      <motion.span
        initial={{ y: "120%", rotate: 5, opacity: 0 }}
        animate={{ y: "0%", rotate: 0, opacity: 1 }}
        transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`inline-block origin-top-left ${className}`}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Cinematic Parallax: Pushes the hero down and fades it as you scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Splitting the name for the two-line massive reveal
  const nameParts = personalData.name.split(' ');
  const line1 = nameParts.slice(0, 2).join(' ');
  const line2 = nameParts.slice(2).join(' ');

  useEffect(() => {
    // Slight delay to ensure the browser paints before triggering heavy animations
    const timer = setTimeout(() => setIsReady(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden px-6 md:px-12 py-12 md:py-16"
    >
      <motion.div
        style={{ opacity: opacityTransform, y: yTransform, scale: scaleTransform }}
        className="w-full h-full flex flex-col justify-center relative z-10"
      >
        {/* --- TOP LEFT: EDITORIAL FIGURE --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isReady ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0"
        >
          <span className="text-[10px] md:text-xs font-mono text-text-muted tracking-[0.2em] uppercase font-bold">
            {heroData.roleBox.figId} — PORTFOLIO V4
          </span>
        </motion.div>

        {/* --- MASSIVE CENTERED TYPOGRAPHY --- */}
        <div className="flex flex-col items-center text-center w-full mt-12 md:mt-0 pt-48">

          <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold tracking-tighter leading-[0.8] uppercase text-text-primary font-sans">
            {isReady &&
              line1.split("").map((char, i) => (
                <CharReveal key={i} char={char} delay={0.1 + i * 0.03} />
              ))}
          </h1>

          <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold tracking-tighter leading-[0.8] uppercase text-text-primary font-sans mt-2 md:mt-4">
            {isReady &&
              line2.split("").map((char, i) => (
                <CharReveal
                  key={i}
                  char={char}
                  delay={0.1 + line1.length * 0.03 + 0.1 + i * 0.03}
                  className={i >= line2.lastIndexOf(" ") + 1 ? "text-accent" : ""}
                />
              ))}
          </h1>

          <ResumePayload />

        </div>
      </motion.div>

      {/* --- EDITORIAL FOOTER (The Grid Line) --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isReady ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full"
      >
        {/* Full width structural border */}
        <div className="w-full h-[1px] bg-border-strong mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-end pb-4">

          {/* Status */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-3 h-3">
              <div className="absolute w-full h-full rounded-full bg-accent animate-ping opacity-40" />
              <div className="relative w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <span className="text-xs md:text-sm font-mono text-text-muted uppercase tracking-widest font-bold">
              {heroData.status}
            </span>
          </div>

          {/* Role (Centered on Desktop) */}
          <div className="md:text-center">
            <span className="text-sm md:text-base font-sans font-bold text-text-primary tracking-tight uppercase block">
              {heroData.roleBox.title}
            </span>
            <span className="text-[10px] md:text-xs font-mono text-text-muted tracking-[0.2em] uppercase font-bold block mt-1">
              {heroData.roleBox.subtitle}
            </span>
          </div>

          {/* Stats (Right Aligned on Desktop) */}
          <div className="md:text-right">
            <span className="text-xs md:text-sm font-mono text-text-primary tracking-[0.1em] uppercase font-bold">
              {personalData.stats}
            </span>
          </div>

        </div>
      </motion.div>

    </section>
  );
}