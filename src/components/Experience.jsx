import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experienceData } from '../data/portfolioData';

// --- AWWWARDS TEXT REVEAL COMPONENT ---
const ScrollRevealText = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"]
  });

  const words = children.split(" ");

  return (
    <p ref={containerRef} className="text-xl md:text-3xl lg:text-4xl leading-[1.4] font-sans font-medium text-text-primary flex flex-wrap gap-x-2 md:gap-x-3">
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

// --- NARRATIVE CHAPTER COMPONENT ---
const NarrativeChapter = ({ chapter, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`w-full flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} py-24 md:py-40 relative z-10`}>
      <div className={`w-full md:w-3/4 lg:w-2/3 flex flex-col ${isEven ? 'md:text-right' : 'md:text-left'}`}>

        {/* Phase Indicator */}
        <div className={`flex items-center gap-4 mb-8 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
          <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase font-bold">
            {chapter.phase}
          </span>
          <div className="w-12 h-[1px] bg-border-strong hidden md:block" />
        </div>

        {/* Massive Subheading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter text-text-primary leading-[1.1] mb-12"
        >
          {chapter.heading}
        </motion.h3>

        {/* Scroll-Revealed Narrative */}
        <div className="w-full">
          <ScrollRevealText>
            {chapter.detail}
          </ScrollRevealText>
        </div>
      </div>
    </div>
  );
};

// --- DYNAMIC EXPERIENCE BLOCK ---
// This isolates the physics for each individual job experience
const ExperienceBlock = ({ data, isFirst }) => {
  const blockRef = useRef(null);

  // Track scroll specifically for this block
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"]
  });

  // Parallax the massive background text
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={blockRef} className={`relative w-full py-32 md:py-48 overflow-hidden ${!isFirst ? 'border-t border-border-subtle' : ''}`}>

      {/* --- BACKGROUND TYPOGRAPHY (PARALLAX) --- */}
      <motion.div
        style={{ x: xTransform }}
        className="absolute top-[20%] left-0 w-[200vw] text-[20vw] font-sans font-bold tracking-tighter text-border-subtle opacity-50 leading-none select-none pointer-events-none z-0 mix-blend-multiply"
      >
        {data.company.toUpperCase()}
      </motion.div>

      <div className="max-w-[100rem] mx-auto relative z-10 px-6 md:px-12 lg:px-24">
        {/* --- EDITORIAL HEADER --- */}
        <div className="mb-32 md:mb-64">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-2 h-2 rounded-full bg-accent" />
            <p className="font-mono text-sm tracking-[0.2em] text-text-muted uppercase">
              {isFirst ? "The Trajectory" : "Continued Evolution"}
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-sans font-bold tracking-tighter leading-[0.9] text-text-primary mb-12 uppercase"
          >
            {data.company.split(' ')[0]} <br />
            <span className="text-text-muted">{data.company.split(' ').slice(1).join(' ')}</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 font-mono text-sm tracking-[0.1em] text-text-primary border-t border-border-subtle pt-8 max-w-3xl">
            <div>
              <span className="text-text-muted block mb-2 text-xs">Role</span>
              <span className="font-bold">{data.role}</span>
            </div>
            <div>
              <span className="text-text-muted block mb-2 text-xs">Timeline</span>
              <span className="font-bold">{data.timeline}</span>
            </div>
            <div>
              <span className="text-text-muted block mb-2 text-xs">Location</span>
              <span className="font-bold">{data.location}</span>
            </div>
          </div>
        </div>

        {/* --- THE NARRATIVE FLOW --- */}
        <div className="w-full">
          {data.narrative.map((chapter, idx) => (
            <NarrativeChapter key={idx} chapter={chapter} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN WRAPPER ---
export default function Experience() {
  return (
    <section id="experience" className="bg-bg-base relative">
      {experienceData.map((exp, index) => (
        <ExperienceBlock
          key={index}
          data={exp}
          isFirst={index === 0}
        />
      ))}
    </section>
  );
}