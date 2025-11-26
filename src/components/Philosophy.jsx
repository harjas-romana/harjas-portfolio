import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';
import { philosophyData } from '../data/portfolioData';

// Elite-tier cubic-bezier easing
const customEase = [0.76, 0, 0.24, 1];

// --- WORD-BY-WORD ANIMATION COMPONENT ---
// This splits a string into words and masks each one for a staggered reveal
const AnimatedText = ({ text }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: customEase },
    },
    hidden: {
      y: "150%", // Pushed below the masking div
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="flex flex-wrap"
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block pb-2 mr-[1vw] lg:mr-[0.8vw]">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export default function Philosophy() {
  const sectionRef = useRef(null);
  
  // Hardware-accelerated parallax for the giant background watermark
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yWatermark = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={sectionRef} className="relative w-full mx-auto px-6 lg:px-12 py-32 lg:py-48 border-t border-arctic-border dark:border-dark-border transition-colors duration-500 overflow-hidden">
      
      {/* MASSIVE BACKGROUND WATERMARK (Parallax) */}
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 right-0 pointer-events-none z-0 select-none flex items-center justify-end w-full h-full opacity-5 dark:opacity-10"
      >
        <span className="font-space text-[40vw] font-black text-arctic-primary dark:text-dark-primary leading-none -mr-12">
          01
        </span>
      </motion.div>

      {/* SECTION HEADER */}
      <div className="mb-24 flex items-center gap-4 relative z-10 overflow-hidden">
        <motion.span 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary"
        >
          [01]
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "120%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: customEase }}
            className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase"
          >
            ENGINEERING PHILOSOPHY
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 relative z-10">
        
        {/* LEFT COMPARTMENT: The Cascading Typography */}
        <div className="md:col-span-8 lg:col-span-9">
          <div className="font-space text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl font-black text-arctic-primary dark:text-dark-primary leading-[1.1] tracking-tighter uppercase">
            {/* Injecting the custom word-by-word animation engine */}
            <AnimatedText text={philosophyData.text} />
          </div>
        </div>
        
        {/* RIGHT COMPARTMENT: Editorial Maxims Column */}
        <div className="md:col-span-4 lg:col-span-3 hidden md:flex flex-col justify-end pb-4 border-l border-arctic-border dark:border-dark-border pl-8 group">
           
           <div className="flex items-center gap-3 mb-8 overflow-hidden">
             <Target size={18} className="text-arctic-accent transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-90" />
             <span className="font-jet text-xs font-bold text-arctic-secondary dark:text-dark-secondary tracking-widest uppercase block">
               CORE MAXIMS
             </span>
           </div>

           <div className="space-y-6">
             {philosophyData.maxims.map((req, idx) => (
                <div key={idx} className="relative overflow-hidden group/item cursor-default">
                  {/* Subtle hover line fill */}
                  <span className="absolute inset-0 bg-arctic-primary/5 dark:bg-dark-primary/10 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/item:scale-x-100" />
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 + (idx * 0.15), ease: customEase }}
                    className="relative z-10 flex items-center justify-between p-2 -ml-2 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/item:translate-x-2"
                  >
                    <span className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary uppercase tracking-widest transition-colors duration-300 group-hover/item:text-arctic-accent">
                      {req}
                    </span>
                    <ArrowRight size={14} className="text-arctic-accent opacity-0 -translate-x-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                  </motion.div>
                </div>
             ))}
           </div>
           
        </div>
      </div>

    </section>
  );
}