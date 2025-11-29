import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { academicsData } from '../data/portfolioData';
import { ArrowUpRight, BookOpen, Award as AwardIcon, GraduationCap } from 'lucide-react';

// Elite-tier cubic-bezier easing
const customEase = [0.76, 0, 0.24, 1];

// Safe fade-up for multiline descriptions (Prevents clipping)
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: customEase } 
  }
};

const textRevealVariants = {
  hidden: { y: "120%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1, 
    transition: { duration: 1, ease: customEase } 
  }
};

export default function AcademicRigor() {
  const { university, publication, award } = academicsData;
  const sectionRef = useRef(null);

  // Hardware-accelerated parallax engine
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Z-Index Sandwich Typography Parallax
  const yText = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yWatermark = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // Independent Module Scroll Speeds for overlapping masonry effect
  const yCard1 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]); // Moves up faster
  const yCard3 = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);  // Lags slightly behind

  return (
    <section ref={sectionRef} className="relative w-full mx-auto px-4 sm:px-6 lg:px-12 py-32 lg:py-48 transition-colors duration-500 overflow-hidden">
      
      {/* MASSIVE BACKGROUND WATERMARK */}
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 right-0 pointer-events-none z-0 select-none flex items-center justify-end w-full h-full opacity-5 dark:opacity-10"
      >
        <span className="font-space text-[40vw] font-black text-arctic-primary dark:text-dark-primary leading-none -mr-12">
          07
        </span>
      </motion.div>

      {/* SECTION HEADER */}
      <div className="mb-16 lg:mb-32 flex items-center gap-4 relative z-30 overflow-hidden max-w-[1400px] mx-auto">
        <motion.span 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary"
        >
          [07]
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2 
            variants={textRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase"
          >
            RESEARCH & ACADEMICS
          </motion.h2>
        </div>
      </div>

      {/* THE 3D OVERLAP ENVIRONMENT */}
      <div className="relative w-full max-w-[1400px] mx-auto min-h-[80vh] py-12">
        
        {/* LAYER 1: BACKGROUND SOLID TEXT (z-0) */}
        <motion.div 
          style={{ y: yText }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
        >
          <h1 className="font-space text-[20vw] md:text-[18vw] font-black text-arctic-primary dark:text-dark-primary opacity-[0.03] dark:opacity-[0.05] leading-[0.8] tracking-tighter m-0 text-center uppercase">
            RESEARCH
          </h1>
          <h1 className="font-space text-[20vw] md:text-[18vw] font-black text-arctic-primary dark:text-dark-primary opacity-[0.03] dark:opacity-[0.05] leading-[0.8] tracking-tighter m-0 text-center uppercase">
            RIGOR
          </h1>
        </motion.div>

        {/* LAYER 2: THE OVERLAPPING MASONRY CARDS (z-10) */}
        <div className="relative z-10 flex flex-col gap-8 lg:gap-0 w-full">
          
          {/* CARD 1: UNIVERSITY (Solid Module, Left Aligned) */}
          <motion.div 
            style={{ y: yCard1 }}
            className="w-full lg:w-8/12 self-start bg-arctic-surface dark:bg-dark-surface border-2 border-arctic-primary dark:border-dark-primary p-8 lg:p-16 shadow-2xl relative group"
          >
            {/* Kinetic Orange Hover Fill */}
            <div className="absolute inset-0 bg-arctic-accent origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 z-0"></div>

            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 transition-colors duration-500 group-hover:text-white">
              <div className="flex flex-col gap-6">
                <GraduationCap size={40} className="text-arctic-primary dark:text-dark-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                <div>
                  <h3 className="font-space text-3xl lg:text-5xl font-black uppercase tracking-tighter leading-tight mb-2">
                    {university.title}
                  </h3>
                  <span className="font-jet text-sm font-bold opacity-80 uppercase tracking-widest">
                    {university.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start lg:items-end">
                <span className="font-jet text-xs font-bold uppercase tracking-widest opacity-70 mb-2">
                  Cumulative GPA
                </span>
                <span className="font-space text-5xl lg:text-7xl font-black tracking-tighter text-arctic-accent group-hover:text-white transition-colors duration-500">
                  {university.cgpa}
                </span>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: SPRINGER PAPER (Inverted Module, Right Aligned, Physically overlaps Card 1) */}
          {publication && (
            <motion.a 
              href={publication.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ y: yCard2 }}
              className="w-full lg:w-7/12 self-end lg:-mt-24 bg-arctic-primary dark:bg-dark-primary text-arctic-surface dark:text-dark-bg p-8 lg:p-12 shadow-2xl relative group cursor-pointer block"
            >
              {/* Kinetic Orange Hover Fill */}
              <div className="absolute inset-0 bg-arctic-accent origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 z-0"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-jet text-[10px] font-bold uppercase tracking-widest bg-white/10 px-3 py-1">
                    {publication.typeHeader}
                  </span>
                  <BookOpen size={32} strokeWidth={1.5} className="opacity-80" />
                </div>
                
                <h4 className="font-space text-2xl lg:text-4xl font-black uppercase tracking-tighter leading-tight mb-12 group-hover:text-white transition-colors duration-500">
                  {publication.title}
                </h4>
                
                <div className="font-jet text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                  <span className="relative overflow-hidden pb-1">
                    {publication.linkText}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
                  </span>
                  <ArrowUpRight size={18} className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>
          )}

          {/* CARD 3: AWARD (Outlined/Glass Module, Left Aligned, Overlaps Card 2) */}
          {award && (
            <motion.a 
              href={award.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ y: yCard3 }}
              className="w-full lg:w-8/12 self-start lg:-mt-16 border-2 border-arctic-primary dark:border-dark-primary bg-arctic-bg/80 dark:bg-dark-bg/80 backdrop-blur-md p-8 lg:p-12 shadow-2xl relative group cursor-pointer block"
            >
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                <div className="flex-shrink-0">
                  <AwardIcon size={48} className="text-arctic-accent group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" strokeWidth={1.5} />
                </div>
                
                <div className="flex flex-col">
                  <span className="font-jet text-xs font-bold text-arctic-accent uppercase tracking-widest mb-4 block">
                    {award.typeHeader}
                  </span>
                  <h4 className="font-space text-3xl lg:text-4xl font-black text-arctic-primary dark:text-dark-primary uppercase tracking-tighter leading-tight mb-6">
                    {award.title}
                  </h4>
                  
                  {/* SAFE MULTILINE DESCRIPTION - Uses explicit text-primary with opacity, no overflow hiding */}
                  <motion.p 
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="font-jet text-sm md:text-base font-medium text-arctic-primary dark:text-dark-primary opacity-80 leading-relaxed mb-8"
                  >
                    {award.description}
                  </motion.p>
                  
                  <div className="font-jet text-xs font-bold border-2 border-arctic-primary dark:border-dark-primary bg-transparent text-arctic-primary dark:text-dark-primary px-6 py-3 w-fit flex items-center gap-3 uppercase tracking-widest relative overflow-hidden group/btn transition-colors duration-500 group-hover:border-arctic-accent">
                    <span className="absolute inset-0 bg-arctic-accent translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                      {award.linkText}
                    </span>
                    <ArrowUpRight size={16} className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </motion.a>
          )}

        </div>

        {/* LAYER 3: FOREGROUND OUTLINED TEXT (z-20) */}
        <motion.div 
          style={{ y: yText }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20 opacity-30 dark:opacity-40 mix-blend-difference"
        >
          <h1 
            className="font-space text-[20vw] md:text-[18vw] font-black leading-[0.8] tracking-tighter m-0 text-center uppercase text-transparent"
            style={{ WebkitTextStroke: "1px var(--text-primary)" }}
          >
            RESEARCH
          </h1>
          <h1 
            className="font-space text-[20vw] md:text-[18vw] font-black leading-[0.8] tracking-tighter m-0 text-center uppercase text-transparent"
            style={{ WebkitTextStroke: "1px var(--text-primary)" }}
          >
            RIGOR
          </h1>
        </motion.div>

      </div>
    </section>
  );
}