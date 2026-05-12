import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { leadershipData } from '../data/portfolioData';

// --- OPERATIONAL LOG (The Bullets) ---
const OperationalLog = ({ bullet, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-6 md:gap-8 mb-8 md:mb-12 group"
    >
      {/* High-Tech Bullet Indicator */}
      <div className="flex flex-col items-center mt-2">
        <div className="w-2 h-2 rounded-full bg-border-strong group-hover:bg-accent transition-colors duration-500" />
        <div className="w-[1px] h-full bg-border-subtle group-hover:bg-accent/30 mt-2 transition-colors duration-500" />
      </div>

      {/* Log Text */}
      <p className="text-lg md:text-xl lg:text-2xl font-sans font-medium text-text-muted leading-[1.5] group-hover:text-text-primary transition-colors duration-500">
        {bullet}
      </p>
    </motion.div>
  );
};

// --- THE DOSSIER BLOCK ---
const DossierBlock = ({ role, index, total }) => {
  const containerRef = useRef(null);
  const num = String(index + 1).padStart(2, '0');

  // Track scroll specifically for this leadership block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={containerRef} className="relative w-full border-t border-border-subtle py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* --- LEFT COLUMN: Sticky Metadata --- */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32">

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono font-bold text-accent tracking-[0.2em]">
                {num} // {String(total).padStart(2, '0')}
              </span>
            </div>

            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-sans font-bold text-text-primary tracking-tight leading-snug mb-4"
            >
              {role.organization}
            </motion.h4>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-text-muted font-bold block"
            >
              [ {role.timeline} ]
            </motion.span>

          </div>
        </div>

        {/* --- RIGHT COLUMN: Massive Title & Impact Logs --- */}
        <div className="lg:col-span-8 relative pt-4 lg:pt-0">

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-sans font-bold tracking-tighter text-text-primary leading-[0.9] uppercase mb-16 lg:mb-24"
          >
            {role.title}
          </motion.h3>

          <div className="relative">
            {role.bullets.map((bullet, i) => (
              <OperationalLog key={i} bullet={bullet} index={i} />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

// --- MAIN WRAPPER ---
export default function Leadership() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax Background Text
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={containerRef} id="leadership" className="bg-bg-base relative overflow-hidden py-32 md:py-48 px-6 md:px-12 lg:px-24">

      {/* --- BACKGROUND TYPOGRAPHY (PARALLAX) --- */}
      <motion.div
        style={{ x: xTransform }}
        className="absolute top-[25%] left-0 w-[200vw] text-[18vw] font-sans font-bold tracking-tighter text-border-subtle opacity-30 leading-none select-none pointer-events-none z-0 mix-blend-multiply"
      >
        OPERATIONS
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
              Command & Strategy
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-[9rem] font-sans font-bold tracking-tighter leading-[0.9] text-text-primary"
          >
            Leadership <br />
            <span className="text-text-muted opacity-80">Matrix.</span>
          </motion.h2>
        </div>

        {/* --- THE DOSSIER FLOW --- */}
        <div className="w-full">
          {leadershipData.map((role, idx) => (
            <DossierBlock
              key={idx}
              role={role}
              index={idx}
              total={leadershipData.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}