import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { philosophyData } from '../data/portfolioData';

// --- AWWWARDS TEXT REVEAL COMPONENT ---
// Highlights the manifesto word-by-word as you scroll
const ScrollRevealText = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 45%"] // Triggers exactly as it enters the reading zone
  });

  const words = children.split(" ");

  return (
    <p ref={containerRef} className="text-3xl md:text-5xl lg:text-7xl leading-[1.2] md:leading-[1.1] font-sans font-bold text-text-primary flex flex-wrap gap-x-3 md:gap-x-5 lg:gap-x-6">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

        return (
          <motion.span key={i} style={{ opacity }} className="relative">
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

// --- BRUTALIST MAXIM COMPONENT ---
// Stamps your core engineering principles onto the screen
const MaximStamp = ({ maxim, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-6 md:gap-12 border-t border-border-strong py-8 md:py-12 group"
    >
      <span className="text-sm md:text-xl font-mono font-bold text-text-muted opacity-40 group-hover:text-accent transition-colors duration-500">
        0{index + 1}
      </span>
      <h4 className="text-4xl md:text-6xl lg:text-8xl font-sans font-bold tracking-tighter text-text-primary uppercase group-hover:text-accent transition-colors duration-500">
        {maxim.replace(/[\[\]]/g, '')} {/* Stripping brackets for cleaner typography */}
      </h4>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export default function Philosophy() {
  const containerRef = useRef(null);

  // Track scroll for background parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Moves the massive background text horizontally
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={containerRef} id="philosophy" className="bg-bg-base relative overflow-hidden py-32 md:py-48 px-6 md:px-12 lg:px-24 border-t border-border-subtle">

      {/* --- BACKGROUND TYPOGRAPHY (PARALLAX) --- */}
      <motion.div
        style={{ x: xTransform }}
        className="absolute top-[10%] left-0 w-[200vw] text-[20vw] font-sans font-bold tracking-tighter text-border-subtle opacity-40 leading-none select-none pointer-events-none z-0 mix-blend-multiply"
      >
        ARCHITECTURE
      </motion.div>

      <div className="max-w-[100rem] mx-auto relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <p className="font-mono text-sm tracking-[0.2em] text-text-muted uppercase">
              The Engineering Core
            </p>
          </motion.div>
        </div>

        {/* --- THE MANIFESTO (Scroll Reveal) --- */}
        <div className="w-full max-w-7xl mb-32 md:mb-64">
          <ScrollRevealText>
            {philosophyData.text}
          </ScrollRevealText>
        </div>

        {/* --- THE MAXIMS (Blueprint Stamps) --- */}
        <div className="w-full max-w-5xl ml-auto border-b border-border-strong">
          <div className="mb-12">
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-text-muted uppercase font-bold">
              Guiding Primitives //
            </span>
          </div>

          <div className="flex flex-col">
            {philosophyData.maxims.map((maxim, idx) => (
              <MaximStamp key={idx} maxim={maxim} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}