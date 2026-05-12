import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { academicsData } from '../data/portfolioData';

// --- AWWWARDS TEXT REVEAL COMPONENT ---
const ScrollRevealText = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 45%"]
  });

  const words = children.split(" ");

  return (
    <p ref={containerRef} className="text-lg md:text-2xl lg:text-3xl leading-[1.5] font-sans font-medium text-text-primary flex flex-wrap gap-x-2 md:gap-x-3">
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

// --- TIMELINE NODE COMPONENT ---
const AcademicNode = ({ data, index }) => {
  return (
    <div className="relative pl-8 md:pl-16 lg:pl-24 py-16 md:py-24 group">

      {/* Structural Node on the Timeline */}
      <div className="absolute left-[-5px] top-24 w-[10px] h-[10px] rounded-full bg-bg-base border-2 border-border-strong group-hover:border-accent group-hover:bg-accent transition-colors duration-500 z-10" />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

        {/* Left Column: The Massive Stat */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase font-bold mb-4">
            {data.phase}
          </span>
          <div className="flex items-baseline mb-2">
            <span className="text-6xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tighter text-text-primary leading-none group-hover:text-accent transition-colors duration-700">
              {data.stat}
            </span>
            {data.statSub && (
              <span className="text-2xl md:text-4xl font-sans font-medium text-text-muted opacity-60 ml-2">
                {data.statSub}
              </span>
            )}
          </div>
          <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-text-muted font-bold">
            {data.statLabel}
          </span>
          <span className="mt-8 font-mono text-sm font-bold tracking-[0.1em] text-text-primary border border-border-subtle w-max px-4 py-2 bg-bg-elevated shadow-diffuse">
            {data.timeline}
          </span>
        </div>

        {/* Right Column: The Narrative */}
        <div className="w-full lg:w-2/3 flex flex-col pt-2 md:pt-4">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-text-primary leading-[1.1] mb-4"
          >
            {data.title}
          </motion.h3>

          <h4 className="text-lg md:text-xl font-mono text-text-muted uppercase tracking-[0.1em] mb-12 font-bold opacity-80">
            {data.institution}
          </h4>

          {/* <div className="w-full max-w-3xl">
            <ScrollRevealText>
              {data.narrative}
            </ScrollRevealText>
          </div> */}

          {/* {data.link && (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="mt-12 text-xs md:text-sm font-mono uppercase text-text-primary hover:text-accent border-b-2 border-border-strong hover:border-accent pb-1 w-max transition-all duration-300 font-bold tracking-[0.2em] flex items-center gap-2 group/link"
            >
              {data.linkText}
              <span className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300">
                ↗
              </span>
            </motion.a>
          )} */}
        </div>

      </div>
    </div>
  );
};

// --- MAIN WRAPPER ---
export default function AcademicRigor() {
  const containerRef = useRef(null);

  // Track scroll specifically for the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  // Parallax the massive background text
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={containerRef} id="academic" className="bg-bg-base relative overflow-hidden py-32 md:py-48 px-6 md:px-12 lg:px-24">

      {/* --- BACKGROUND TYPOGRAPHY (PARALLAX) --- */}
      <motion.div
        style={{ x: xTransform }}
        className="absolute top-[30%] left-0 w-[200vw] text-[15vw] font-sans font-bold tracking-tighter text-border-subtle opacity-30 leading-none select-none pointer-events-none z-0 mix-blend-multiply"
      >
        ACADEMIC RIGOR
      </motion.div>

      <div className="max-w-[100rem] mx-auto relative z-10">

        {/* --- EDITORIAL HEADER --- */}
        <div className="mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <p className="font-mono text-sm tracking-[0.2em] text-text-muted uppercase">
              The Foundation
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-[9rem] font-sans font-bold tracking-tighter leading-[0.9] text-text-primary mb-8"
          >
            Systematic <br />
            <span className="text-text-muted opacity-80">Rigor.</span>
          </motion.h2>
        </div>

        {/* --- THE TIMELINE FLOW --- */}
        <div className="relative w-full max-w-6xl mx-auto">

          {/* Architectural Line Track (Faint) */}
          <div className="absolute left-0 top-24 bottom-24 w-[1px] bg-border-strong" />

          {/* Animated Cyberpunk Cyan Line (Fills on scroll) */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[0px] top-24 bottom-24 w-[2px] bg-accent origin-top z-10"
          />

          {academicsData.map((data, idx) => (
            <AcademicNode key={data.id} data={data} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}