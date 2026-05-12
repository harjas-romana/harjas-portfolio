import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { achievementsData } from '../data/portfolioData';

// --- THE KINETIC LEDGER ROW ---
const LedgerRow = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-t border-border-strong py-16 md:py-24 flex flex-col md:flex-row gap-8 md:gap-16 w-full hover:bg-bg-elevated transition-colors duration-500 px-4 md:px-8"
    >

      {/* Left Column: The Massive Year Stamp */}
      <div className="md:w-1/4 flex flex-col justify-start">
        <span className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter text-text-primary opacity-20 group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-4 transition-all duration-500">
          {data.year}
        </span>
      </div>

      {/* Right Column: The Impact Narrative */}
      <div className="md:w-3/4 flex flex-col pt-2">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-accent font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
            {data.category}
          </span>
          <div className="w-8 h-[1px] bg-border-strong group-hover:bg-accent transition-colors duration-500" />
        </div>

        <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-text-primary leading-[1.05] mb-8 group-hover:text-text-primary transition-colors duration-500">
          {data.title}
        </h3>

        <p className="text-lg md:text-xl font-sans font-medium text-text-muted leading-relaxed max-w-3xl mb-12">
          {data.description}
        </p>

        {/* Hover-Revealed Link */}
        <div className="overflow-hidden">
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase text-text-primary hover:text-accent font-bold tracking-[0.2em] border-b-2 border-border-strong hover:border-accent pb-1 transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4"
            >
              {data.linkText} ↗
            </a>
          )}
        </div>
      </div>

      {/* High-Tech Scanline Effect on Hover */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </motion.div>
  );
};

// --- MAIN WRAPPER ---
export default function Achievements() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background Parallax
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={containerRef} id="achievements" className="bg-bg-base relative overflow-hidden py-32 md:py-48">

      {/* --- BACKGROUND TYPOGRAPHY (PARALLAX) --- */}
      <motion.div
        style={{ x: xTransform }}
        className="absolute top-[15%] left-0 w-[200vw] text-[18vw] font-sans font-bold tracking-tighter text-border-subtle opacity-30 leading-none select-none pointer-events-none z-0 mix-blend-multiply"
      >
        RECOGNITION
      </motion.div>

      <div className="max-w-[100rem] mx-auto relative z-10 px-4 md:px-8">

        {/* --- EDITORIAL HEADER --- */}
        <div className="mb-24 md:mb-32 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <p className="font-mono text-sm tracking-[0.2em] text-text-muted uppercase font-bold">
              Impact & Accolades
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-[9rem] font-sans font-bold tracking-tighter leading-[0.9] text-text-primary mb-8"
          >
            Global <br />
            <span className="text-text-muted opacity-80">Footprint.</span>
          </motion.h2>
        </div>

        {/* --- THE LEDGER TABLE --- */}
        <div className="w-full flex flex-col border-b border-border-strong border-opacity-50">
          {achievementsData.map((achievement, idx) => (
            <LedgerRow key={idx} data={achievement} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}