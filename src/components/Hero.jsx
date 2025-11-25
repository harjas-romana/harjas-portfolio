import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalData, heroData } from '../data/portfolioData';
import { ArrowDownRight } from 'lucide-react';
import heroImage from '../assets/hero1.png';

// Custom easing to mimic high-end AOS animations
const customEase = [0.76, 0, 0.24, 1];

export default function Hero() {
  const containerRef = useRef(null);
  
  // NATIVE simpleParallax REPLACEMENT
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax speeds: Text moves up faster than the image, creating 3D separation
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
      <section ref={containerRef} className="relative min-h-[100dvh] w-full bg-arctic-accent overflow-hidden flex flex-col justify-center pt-24 pb-12 z-10">
      <div className="absolute top-8 left-6 lg:left-12 right-6 lg:right-12 flex justify-between items-start z-30 font-jet text-[10px] md:text-xs text-white uppercase tracking-widest font-bold">
        <div className="flex flex-col gap-1 py-15 px-4 border border-white/30 bg-white/10 backdrop-blur-sm">
          <span>{personalData.name}</span>
          <span className="opacity-70">{heroData.roleBox.subtitle}</span>
        </div>
        <div className="flex flex-col gap-1 text-right py-15 px-4 border border-white/30 bg-white/10 backdrop-blur-sm">
          <span>{heroData.status}</span>
          <span className="opacity-70">SCROLL TO EXPLORE</span>
        </div>
      </div>

      {/* THE 3D Z-INDEX SANDWICH */}
      <div className="relative w-full max-w-[1400px] mx-auto flex items-center justify-center flex-grow mt-12">
        
        {/* LAYER 1: BACKGROUND SOLID TEXT (Moves fast on scroll) */}
        <motion.div 
          style={{ y: yText }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
          <h1 className="font-space text-[22vw] lg:text-[280px] font-black text-[#F4F4F4] leading-[0.75] tracking-tighter m-0 text-center uppercase">
            HARJAS
          </h1>
          <h1 className="font-space text-[22vw] lg:text-[280px] font-black text-[#F4F4F4] leading-[0.75] tracking-tighter m-0 text-center uppercase">
            ROMANA
          </h1>
        </motion.div>

        {/* LAYER 2: THE CUTOUT IMAGE (Moves slow on scroll) */}
        <motion.div 
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.9, filter: "grayscale(100%) blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "grayscale(100%) blur(0px)" }}
          transition={{ duration: 1.5, ease: customEase }}
          className="relative z-10 h-[60vh] md:h-[75vh] w-full flex justify-center items-end"
        >
          <img 
            src={heroImage} 
            alt="Harjas Romana" 
            className="h-270 w-170 object-cover object-top drop-shadow-2xl scale-140 grayscale transition-filter duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
          />
        </motion.div>

        {/* LAYER 3: FOREGROUND OUTLINED TEXT (Matches Layer 1 perfectly) */}
        <motion.div 
          style={{ y: yText }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20"
        >
          <h1 
            className="font-space text-[22vw] lg:text-[280px] font-black leading-[0.75] tracking-tighter m-0 text-center uppercase text-transparent"
            style={{ WebkitTextStroke: "2px #F4F4F4" }}
          >
            HARJAS
          </h1>
          <h1 
            className="font-space text-[22vw] lg:text-[280px] font-black leading-[0.75] tracking-tighter m-0 text-center uppercase text-transparent"
            style={{ WebkitTextStroke: "2px #F4F4F4" }}
          >
            ROMANA
          </h1>
        </motion.div>
      </div>

      {/* BOTTOM METRICS GRID (Mimicking the Ardian Reference) */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 lg:px-12 mt-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/30 pt-8">
          
          {/* Mission Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: customEase }}
            className="md:col-span-1"
          >
            <h3 className="font-space text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight">
              Architecting Systems, <br/>
              Eliminating Race Conditions.
            </h3>
          </motion.div>

          {/* Core Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: customEase }}
            className="md:col-span-2 flex flex-col sm:flex-row justify-between gap-8 md:gap-16"
          >
            <div className="flex flex-col gap-2 w-full border-b border-white/20 sm:border-none pb-4 sm:pb-0">
               <span className="font-jet text-xs font-bold text-white/70 uppercase tracking-widest">Current Role</span>
               <div className="flex items-center justify-between">
                 <span className="font-space text-3xl font-bold text-white uppercase">SDE / GET</span>
                 <ArrowDownRight size={24} className="text-white" />
               </div>
            </div>

            <div className="flex flex-col gap-2 w-full border-b border-white/20 sm:border-none pb-4 sm:pb-0">
               <span className="font-jet text-xs font-bold text-white/70 uppercase tracking-widest">Focus</span>
               <div className="flex items-center justify-between">
                 <span className="font-space text-3xl font-bold text-white uppercase">Distributed Sys</span>
                 <ArrowDownRight size={24} className="text-white" />
               </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
               <span className="font-jet text-xs font-bold text-white/70 uppercase tracking-widest">Base</span>
               <div className="flex items-center justify-between">
                 <span className="font-space text-3xl font-bold text-white uppercase">Remote / India</span>
                 <ArrowDownRight size={24} className="text-white" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}