import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { arsenalData } from '../data/portfolioData';

// Elite-tier cubic-bezier easing
const customEase = [0.76, 0, 0.24, 1];

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const columnVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: customEase } 
  }
};

export default function Arsenal() {
  const sectionRef = useRef(null);
  
  // Hardware-accelerated parallax for the Z-Index Sandwich typography
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // The text moves opposite to the scroll direction for maximum depth
  const yText = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={sectionRef} className="relative w-full mx-auto px-6 lg:px-12 py-32 lg:py-48 transition-colors duration-500 overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="mb-24 flex items-center gap-4 relative z-30 overflow-hidden max-w-[1600px] mx-auto">
        <motion.span 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary"
        >
          [05]
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "120%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: customEase }}
            className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase"
          >
            TECHNICAL ARSENAL
          </motion.h2>
        </div>
      </div>

      {/* THE 3D Z-INDEX SANDWICH ENVIRONMENT */}
      <div className="relative w-full max-w-[1600px] mx-auto min-h-[60vh] flex items-center justify-center py-12 lg:py-24">
        
        {/* LAYER 1: BACKGROUND SOLID TEXT (z-0) */}
        <motion.div 
          style={{ y: yText }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
          <h1 className="font-space text-[24vw] md:text-[20vw] font-black text-arctic-primary dark:text-dark-primary opacity-[0.03] dark:opacity-[0.05] leading-[0.8] tracking-tighter m-0 text-center uppercase">
            CORE
          </h1>
          <h1 className="font-space text-[24vw] md:text-[20vw] font-black text-arctic-primary dark:text-dark-primary opacity-[0.03] dark:opacity-[0.05] leading-[0.8] tracking-tighter m-0 text-center uppercase">
            STACK
          </h1>
        </motion.div>

        {/* LAYER 2: THE OPAQUE FLOATING MODULES (z-10) */}
        {/* We use a staggered layout here to mimic the Packery library behavior natively */}
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {arsenalData.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={columnVariants}
              // Staggering the columns: Evens push down, Odds push up
              className={`flex flex-col p-8 lg:p-10 border-2 border-arctic-primary dark:border-dark-primary bg-arctic-surface dark:bg-dark-surface shadow-2xl group/col ${idx % 2 === 0 ? 'lg:-translate-y-12' : 'lg:translate-y-12'}`}
            >
              <div className="flex justify-between items-start mb-12 overflow-hidden">
                <h3 className="font-space text-xl font-black text-arctic-primary dark:text-dark-primary uppercase tracking-tighter transition-colors duration-500 group-hover/col:text-arctic-accent">
                  {cat.name}
                </h3>
                <span className="font-jet text-xs font-bold text-arctic-secondary dark:text-dark-secondary opacity-40">
                  0{idx + 1}
                </span>
              </div>
              
              <div className="flex flex-col gap-3">
                {cat.tech.map((t, i) => (
                  <div key={i} className="relative overflow-hidden group cursor-default p-3 -ml-3 bg-transparent">
                    {/* Hardware-accelerated hover fill */}
                    <span className="absolute inset-0 bg-arctic-primary dark:bg-dark-primary origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
                    
                    {/* Text & bullet container with X-axis translate */}
                    <div className="flex items-center gap-4 relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-3">
                      <div className="w-1.5 h-1.5 bg-arctic-accent transition-transform duration-500 group-hover:scale-150"></div>
                      <span className="font-jet text-sm text-arctic-secondary dark:text-dark-secondary font-bold uppercase tracking-widest transition-colors duration-500 group-hover:text-arctic-surface dark:group-hover:text-dark-bg">
                        {t}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LAYER 3: FOREGROUND OUTLINED TEXT (z-20) */}
        {/* Must have pointer-events-none so it doesn't block the module hover states */}
        <motion.div 
          style={{ y: yText }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 opacity-30 dark:opacity-40 mix-blend-difference"
        >
          <h1 
            className="font-space text-[24vw] md:text-[20vw] font-black leading-[0.8] tracking-tighter m-0 text-center uppercase text-transparent"
            style={{ WebkitTextStroke: "1px var(--text-primary)" }}
          >
            CORE
          </h1>
          <h1 
            className="font-space text-[24vw] md:text-[20vw] font-black leading-[0.8] tracking-tighter m-0 text-center uppercase text-transparent"
            style={{ WebkitTextStroke: "1px var(--text-primary)" }}
          >
            STACK
          </h1>
        </motion.div>

      </div>
    </section>
  );
}