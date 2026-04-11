import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { ArrowUpRight, Globe2, TerminalSquare } from 'lucide-react';

const customEase = [0.76, 0, 0.24, 1];

export default function Footer() {
  const footerRef = useRef(null);
  
  // Hardware-accelerated scroll tracking
  const { scrollYProgress } = useScroll({
    target: footerRef,
    // "start end" = when top of footer hits bottom of viewport
    // "end end" = when bottom of footer hits bottom of viewport
    offset: ["start end", "end end"]
  });

  // THE PHYSICS ENGINE: Converging Parallax
  // Everything moves at different speeds but perfectly aligns at 0% when you hit the bottom
  const yBentoMain = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const yBentoSocials = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const yBentoTelemetry = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  
  // Z-Index Sandwich Typography Parallax
  const yTextBackground = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yTextForeground = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <footer ref={footerRef} className="relative w-full mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-12 transition-colors duration-500 overflow-hidden bg-arctic-bg dark:bg-dark-bg border-t border-arctic-border dark:border-dark-border">

      {/* THE BENTO SANDWICH ENVIRONMENT */}
      <div className="relative w-full max-w-[1600px] mx-auto min-h-[70vh] flex flex-col justify-end">
        
        {/* LAYER 1: BACKGROUND SOLID TEXT (z-0) */}
        <motion.div 
          style={{ y: yTextBackground }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
          <h1 className="font-space text-[20vw] font-black text-arctic-primary dark:text-dark-primary opacity-[0.03] dark:opacity-[0.05] leading-[0.8] tracking-tighter m-0 text-center uppercase">
            INITIATE
          </h1>
          <h1 className="font-space text-[20vw] font-black text-arctic-primary dark:text-dark-primary opacity-[0.03] dark:opacity-[0.05] leading-[0.8] tracking-tighter m-0 text-center uppercase">
            PROTOCOL
          </h1>
        </motion.div>

        {/* LAYER 2: THE CONVERGING BENTO GRID (z-10) */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          
          {/* BENTO CELL 1: Massive Anchor CTA (Email) */}
          <motion.a 
            href={`mailto:${personalData.email}`}
            style={{ y: yBentoMain }}
            className="lg:col-span-2 group relative bg-arctic-primary dark:bg-dark-primary p-8 lg:p-12 flex flex-col justify-between overflow-hidden min-h-[350px] lg:min-h-[450px] cursor-pointer"
          >
            {/* Kinetic Orange Hover Fill */}
            <div className="absolute inset-0 bg-arctic-accent origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 z-0"></div>

            <div className="flex justify-between items-start relative z-10 text-arctic-surface dark:text-dark-bg transition-colors duration-500 group-hover:text-white">
              <span className="font-jet text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1">
                Open Channel
              </span>
              <ArrowUpRight size={48} className="opacity-0 -translate-x-4 translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>

            <div className="relative z-10 text-arctic-surface dark:text-dark-bg transition-colors duration-500 group-hover:text-white mt-12">
              <h3 className="font-space text-4xl lg:text-6xl font-black leading-[0.9] tracking-tighter uppercase mb-6">
                Let's Build <br/> The Future.
              </h3>
              <p className="font-jet text-sm lg:text-base font-bold opacity-80 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-current"></span>
                {personalData.email}
              </p>
            </div>
          </motion.a>

          {/* BENTO CELL 2: Socials Network (GitHub & LinkedIn) */}
          <motion.div 
            style={{ y: yBentoSocials }}
            className="lg:col-span-1 flex flex-col gap-4 lg:gap-6"
          >
            {/* LinkedIn Block */}
            <a 
              href={`https://${personalData.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex-1 bg-arctic-surface dark:bg-dark-surface border border-arctic-border dark:border-dark-border p-8 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-arctic-accent origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 z-0"></div>
              <div className="flex justify-between items-start relative z-10 text-arctic-primary dark:text-dark-primary transition-colors duration-500 group-hover:text-white">
                 <Globe2 size={24} />
                 <ArrowUpRight size={24} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="relative z-10 mt-12 text-arctic-primary dark:text-dark-primary transition-colors duration-500 group-hover:text-white">
                <h4 className="font-space text-2xl font-black uppercase tracking-tighter mb-1">LinkedIn</h4>
                <span className="font-jet text-[10px] font-bold uppercase tracking-widest opacity-60">Professional Network</span>
              </div>
            </a>

            {/* GitHub Block */}
            <a 
              href={`https://${personalData.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex-1 bg-arctic-surface dark:bg-dark-surface border border-arctic-border dark:border-dark-border p-8 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-arctic-accent origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 z-0"></div>
              <div className="flex justify-between items-start relative z-10 text-arctic-primary dark:text-dark-primary transition-colors duration-500 group-hover:text-white">
                 <TerminalSquare size={24} />
                 <ArrowUpRight size={24} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="relative z-10 mt-12 text-arctic-primary dark:text-dark-primary transition-colors duration-500 group-hover:text-white">
                <h4 className="font-space text-2xl font-black uppercase tracking-tighter mb-1">GitHub</h4>
                <span className="font-jet text-[10px] font-bold uppercase tracking-widest opacity-60">Version Control</span>
              </div>
            </a>
          </motion.div>

          {/* BENTO CELL 3: System Telemetry */}
          <motion.div 
            style={{ y: yBentoTelemetry }}
            className="lg:col-span-1 bg-transparent border-2 border-arctic-primary dark:border-dark-primary p-8 flex flex-col justify-between overflow-hidden relative"
          >
            {/* Ambient Scanning Line */}
            <motion.div 
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 top-0 w-full h-[2px] bg-arctic-accent opacity-30 z-0"
            />
            
            <div className="relative z-10 flex flex-col gap-8 font-jet text-[10px] sm:text-xs text-arctic-primary dark:text-dark-primary uppercase tracking-widest font-bold">
              <div>
                <span className="opacity-50 block mb-1">Coordinates</span>
                <span>LAT 30.6738 N<br/>LONG 74.7570 E</span>
              </div>
              
              <div>
                <span className="opacity-50 block mb-1">Server Status</span>
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ opacity: [1, 0.2, 1] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-2 bg-arctic-accent rounded-full"
                  />
                  <span className="text-arctic-accent">ACTIVE</span>
                </div>
              </div>

              <div>
                <span className="opacity-50 block mb-1">Build Version</span>
                <span>2026.04.11 // STABLE</span>
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-arctic-primary/20 dark:border-dark-primary/20">
              <span className="font-jet text-[10px] text-arctic-secondary dark:text-dark-secondary uppercase tracking-widest font-bold">
                &copy; {new Date().getFullYear()} Harjas Romana. All Rights Reserved.
              </span>
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
            className="font-space text-[20vw] font-black leading-[0.8] tracking-tighter m-0 text-center uppercase text-transparent"
            style={{ WebkitTextStroke: "1px var(--text-primary)" }}
          >
            INITIATE
          </h1>
          <h1 
            className="font-space text-[20vw] font-black leading-[0.8] tracking-tighter m-0 text-center uppercase text-transparent"
            style={{ WebkitTextStroke: "1px var(--text-primary)" }}
          >
            PROTOCOL
          </h1>
        </motion.div>

      </div>
    </footer>
  );
}