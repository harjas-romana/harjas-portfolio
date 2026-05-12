import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

// --- THE ARCHITECTURAL ROW COMPONENT ---
const ProjectRow = ({ project, index }) => {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-t border-border-strong border-opacity-50 hover:bg-bg-elevated transition-colors duration-500 w-full"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-12 md:py-16 px-4 md:px-8">

        {/* Column 1: Index Number */}
        <div className="lg:w-[10%] flex flex-col justify-start">
          <span className="text-xs md:text-sm font-mono font-bold text-text-muted opacity-50 group-hover:text-accent group-hover:opacity-100 transition-all duration-500 tracking-[0.2em]">
            / {num}
          </span>
        </div>

        {/* Column 2: Massive Title & Links */}
        <div className="lg:w-[45%] flex flex-col justify-between">
          <div>
            <h3 className="text-3xl md:text-5xl lg:text-[3.5rem] font-sans font-bold tracking-tighter text-text-primary leading-[1.05] group-hover:translate-x-4 group-hover:text-accent transition-all duration-500">
              {project.title}
            </h3>
          </div>

          <div className="mt-8 flex gap-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-text-primary hover:text-accent border-b border-border-strong hover:border-accent pb-1 transition-colors"
              >
                Repository ↗
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent border-b border-accent/30 hover:border-accent pb-1 transition-colors"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

        {/* Column 3: The Architecture Brief */}
        <div className="lg:w-[30%]">
          <p className="text-base md:text-lg font-sans font-medium text-text-muted leading-relaxed group-hover:text-text-primary transition-colors duration-500">
            {project.description}
          </p>
        </div>

        {/* Column 4: The Primitives (Tech Stack) */}
        <div className="lg:w-[15%] flex flex-row lg:flex-col flex-wrap gap-2 lg:gap-4 lg:items-end lg:text-right mt-6 lg:mt-0">
          <span className="w-full text-[10px] font-mono tracking-[0.2em] text-text-muted uppercase font-bold hidden lg:block opacity-50 mb-2">
            Primitives //
          </span>
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs font-mono font-bold tracking-widest text-text-primary border border-border-subtle bg-bg-base px-3 py-1 group-hover:border-accent group-hover:text-accent transition-colors duration-500 uppercase"
            >
              {t}
            </span>
          ))}
        </div>

      </div>

      {/* High-Tech Scanline Effect on Hover */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </motion.div>
  );
};

// --- MAIN WRAPPER ---
export default function ProjectsGrid() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background Parallax
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} id="projects" className="bg-bg-base relative overflow-hidden py-32 md:py-48 px-4 md:px-8">

      {/* --- BACKGROUND TYPOGRAPHY (PARALLAX) --- */}
      <motion.div
        style={{ x: xTransform }}
        className="absolute top-[10%] left-0 w-[200vw] text-[18vw] font-sans font-bold tracking-tighter text-border-subtle opacity-30 leading-none select-none pointer-events-none z-0 mix-blend-multiply"
      >
        SYSTEM ARCHITECTURE
      </motion.div>

      <div className="max-w-[100rem] mx-auto relative z-10">

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
              The Arsenal
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-[8rem] font-sans font-bold tracking-tighter leading-[0.9] text-text-primary"
          >
            Core <br />
            <span className="text-text-muted opacity-80">Infrastructure.</span>
          </motion.h2>
        </div>

        {/* --- THE DIRECTORY TABLE --- */}
        <div className="w-full flex flex-col border-b border-border-strong border-opacity-50">
          {projectsData.map((project, idx) => (
            <ProjectRow key={idx} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}