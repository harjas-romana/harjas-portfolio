import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Layout, Mic2, ArrowUpRight } from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

const customEase = [0.76, 0, 0.24, 1];

const getIcon = (org) => {
  if (org.includes("Stats")) return <Users size={48} strokeWidth={1.5} />;
  if (org.includes("Linux")) return <Layout size={32} strokeWidth={1.5} />;
  return <Mic2 size={32} strokeWidth={1.5} />;
};

export default function Leadership() {
  const sectionRef = useRef(null);
  
  // Hardware-accelerated parallax for the Bento Sandwich
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // THE PHYSICS ENGINE: Independent scroll speeds for every layer
  const yTextBackground = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const yTextForeground = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  
  // Asymmetrical Bento scrolling: Left box moves slow, Top right moves fast, Bottom right lags
  const yBentoMain = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const yBentoTopRight = useTransform(scrollYProgress, [0, 1], ["-15%", "10%"]);
  const yBentoBottomRight = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);

  return (
    <section ref={sectionRef} className="relative w-full mx-auto px-4 sm:px-6 lg:px-12 py-32 lg:py-48 transition-colors duration-500 overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="mb-16 lg:mb-32 flex items-center gap-4 relative z-30 overflow-hidden max-w-[1600px] mx-auto">
        <motion.span 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary"
        >
          [06]
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "120%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: customEase }}
            className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase"
          >
            LEADERSHIP & OPS
          </motion.h2>
        </div>
      </div>

      {/* THE BENTO SANDWICH ENVIRONMENT */}
      <div className="relative w-full max-w-[1600px] mx-auto min-h-[80vh] flex items-center justify-center py-12">
        
        {/* LAYER 1: BACKGROUND SOLID TEXT (z-0) */}
        <motion.div 
          style={{ y: yTextBackground }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
          <h1 className="font-space text-[22vw] font-black text-arctic-primary dark:text-dark-primary opacity-[0.03] dark:opacity-[0.05] leading-[0.8] tracking-tighter m-0 text-center uppercase">
            CULTURE
          </h1>
          <h1 className="font-space text-[22vw] font-black text-arctic-primary dark:text-dark-primary opacity-[0.03] dark:opacity-[0.05] leading-[0.8] tracking-tighter m-0 text-center uppercase">
            SYSTEMS
          </h1>
        </motion.div>

        {/* LAYER 2: THE PARALLAX BENTO GRID (z-10) */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          
          {/* BENTO CELL 1: Massive Anchor (President / Stats-O-Locked) */}
          <motion.div 
            style={{ y: yBentoMain }}
            className="lg:col-span-2 lg:row-span-2 group relative bg-arctic-surface dark:bg-dark-surface p-8 lg:p-16 flex flex-col justify-between overflow-hidden border border-arctic-border dark:border-dark-border min-h-[400px] lg:min-h-[600px]"
          >
            {/* Hover Glitch/Fill Effect */}
            <div className="absolute inset-0 bg-arctic-accent origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 z-0"></div>

            <div className="flex justify-between items-start relative z-10 transition-colors duration-500 group-hover:text-white">
              <div className="bg-arctic-primary/5 dark:bg-dark-primary/10 group-hover:bg-white/20 p-4 rounded-none transition-colors duration-500">
                {getIcon(leadershipData[0].organization)}
              </div>
              <ArrowUpRight size={40} className="opacity-0 -translate-x-4 translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>

            <div className="relative z-10 transition-colors duration-500 group-hover:text-white mt-12">
              <span className="font-jet text-xs md:text-sm font-bold uppercase tracking-widest block mb-4 opacity-70 group-hover:opacity-100">
                {leadershipData[0].organization}
              </span>
              <h3 className="font-space text-4xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
                {leadershipData[0].title}
              </h3>
              
              <div className="flex flex-col gap-4 max-w-2xl">
                {leadershipData[0].bullets.map((b, i) => (
                  <p key={i} className="font-jet text-sm md:text-base font-medium opacity-80 leading-relaxed flex gap-4">
                    <span className="text-arctic-accent group-hover:text-white font-black">&gt;</span> {b}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BENTO CELL 2: Top Right (Design Lead / Linux) */}
          <motion.div 
            style={{ y: yBentoTopRight }}
            className="lg:col-span-1 lg:row-span-1 group relative bg-arctic-primary dark:bg-dark-primary p-8 lg:p-10 flex flex-col justify-between overflow-hidden min-h-[300px]"
          >
            {/* Background swap on hover to expose the accent color */}
            <div className="absolute inset-0 bg-arctic-accent origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 z-0"></div>

            <div className="flex justify-between items-start relative z-10 text-arctic-surface dark:text-dark-bg transition-colors duration-500 group-hover:text-white">
              <span className="font-jet text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1">
                Visual Architecture
              </span>
              {getIcon(leadershipData[1].organization)}
            </div>

            <div className="relative z-10 mt-8 text-arctic-surface dark:text-dark-bg transition-colors duration-500 group-hover:text-white">
              <h3 className="font-space text-2xl lg:text-3xl font-black leading-tight tracking-tighter uppercase mb-2">
                {leadershipData[1].title.split('//')[0]}
              </h3>
              <p className="font-jet text-xs font-bold opacity-70 uppercase tracking-widest mb-6">
                {leadershipData[1].organization}
              </p>
              
              {/* Injecting the Description Bullets */}
              <div className="flex flex-col gap-3">
                {leadershipData[1].bullets.map((b, i) => (
                  <p key={i} className="font-jet text-xs font-medium opacity-90 leading-relaxed flex gap-3">
                    <span className="opacity-50 font-black">&gt;</span> {b}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BENTO CELL 3: Bottom Right (PR / English Lit) */}
          <motion.div 
            style={{ y: yBentoBottomRight }}
            className="lg:col-span-1 lg:row-span-1 group relative bg-arctic-surface dark:bg-dark-surface p-8 lg:p-10 flex flex-col justify-between overflow-hidden border border-arctic-border dark:border-dark-border min-h-[300px]"
          >
            {/* Accent underline that expands into full fill */}
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-arctic-accent origin-bottom transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:h-full z-0"></div>

            <div className="flex justify-between items-start relative z-10 text-arctic-primary dark:text-dark-primary transition-colors duration-500 group-hover:text-white">
               {getIcon(leadershipData[2].organization)}
            </div>

            <div className="relative z-10 mt-8 text-arctic-primary dark:text-dark-primary transition-colors duration-500 group-hover:text-white">
              <h3 className="font-space text-2xl lg:text-3xl font-black leading-tight tracking-tighter uppercase mb-2">
                {leadershipData[2].title.split('//')[0]}
              </h3>
              <p className="font-jet text-xs font-bold opacity-70 uppercase tracking-widest mb-6">
                {leadershipData[2].organization}
              </p>

              {/* Injecting the Description Bullets */}
              <div className="flex flex-col gap-3">
                {leadershipData[2].bullets.map((b, i) => (
                  <p key={i} className="font-jet text-xs font-medium opacity-90 leading-relaxed flex gap-3">
                    <span className="text-arctic-accent group-hover:text-white font-black">&gt;</span> {b}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* LAYER 3: FOREGROUND OUTLINED TEXT (z-20) */}
        {/* Pointer-events-none ensures it doesn't block the Bento hover effects */}
        <motion.div 
          style={{ y: yTextForeground }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 opacity-30 dark:opacity-40 mix-blend-difference"
        >
          <h1 
            className="font-space text-[22vw] font-black leading-[0.8] tracking-tighter m-0 text-center uppercase text-transparent"
            style={{ WebkitTextStroke: "1px var(--text-primary)" }}
          >
            CULTURE
          </h1>
          <h1 
            className="font-space text-[22vw] font-black leading-[0.8] tracking-tighter m-0 text-center uppercase text-transparent"
            style={{ WebkitTextStroke: "1px var(--text-primary)" }}
          >
            SYSTEMS
          </h1>
        </motion.div>

      </div>
    </section>
  );
}