import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SkillsTicker from './SkillsTicker';
import { arsenalData } from '../data/portfolioData';

// --- THE GLOSSARY ROW COMPONENT ---
const ArsenalRow = ({ category, index }) => {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-t border-border-strong py-16 md:py-24 flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 w-full"
    >
      {/* Category Index & Name */}
      <div className="w-full lg:w-1/3 flex flex-col">
        <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase font-bold mb-6">
          {num} //
        </span>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-text-primary group-hover:text-accent transition-colors duration-500 leading-none">
          {category.name}
        </h3>
      </div>

      {/* The Tech Primitives (Continuous Typography Flow) */}
      <div className="w-full lg:w-2/3 flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-4 pt-2 md:pt-4">
        {category.tech.map((tech, i) => (
          <React.Fragment key={i}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.05) }}
              className="text-2xl md:text-3xl lg:text-4xl font-mono text-text-muted group-hover:text-text-primary transition-colors duration-500 lowercase tracking-tight"
            >
              {tech}
            </motion.span>

            {/* The Brutalist Separator */}
            {i !== category.tech.length - 1 && (
              <span className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-border-strong opacity-50 group-hover:text-accent transition-colors duration-500 select-none">
                /
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

    </motion.div>
  );
};

// --- MAIN WRAPPER ---
export default function Arsenal() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background Parallax
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={containerRef} id="arsenal" className="bg-bg-base relative overflow-hidden pt-32 md:pt-48 flex flex-col">

      {/* --- BACKGROUND TYPOGRAPHY (PARALLAX) --- */}
      <motion.div
        style={{ x: xTransform }}
        className="absolute top-[10%] left-0 w-[200vw] text-[18vw] font-sans font-bold tracking-tighter text-border-subtle opacity-30 leading-none select-none pointer-events-none z-0 mix-blend-multiply"
      >
        TOOLING & PRIMITIVES
      </motion.div>

      <div className="max-w-[100rem] mx-auto relative z-10 px-6 md:px-12 lg:px-24 w-full">

        {/* --- EDITORIAL HEADER --- */}
        <div className="mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <p className="font-mono text-sm tracking-[0.2em] text-text-muted uppercase font-bold">
              Engineering Stack
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-[9rem] font-sans font-bold tracking-tighter leading-[0.9] text-text-primary mb-8"
          >
            The <br />
            <span className="text-text-muted opacity-80">Arsenal.</span>
          </motion.h2>
        </div>

        {/* --- THE GLOSSARY LIST --- */}
        <div className="w-full border-b border-border-strong mb-32 md:mb-48">
          {arsenalData.map((category, idx) => (
            <ArsenalRow key={idx} category={category} index={idx} />
          ))}
        </div>

      </div>

      {/* --- THE INFINITE TICKER --- */}
      {/* We let this touch the edges of the screen for maximum impact */}
      <div className="w-full relative z-20">
        <SkillsTicker />
      </div>

    </section>
  );
}