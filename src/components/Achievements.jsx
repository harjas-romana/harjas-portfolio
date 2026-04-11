import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Trophy, ArrowUpRight } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

// Elite-tier cubic-bezier easing for the "snap" effect
const customEase = [0.76, 0, 0.24, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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

export default function Achievements() {
  const { scrollY } = useScroll();
  // Using Framer Motion's optimized scroll tracking
  const yParallax = useTransform(scrollY, [2000, 4000], [0, -80]);

  return (
    <section className="relative w-full mx-auto px-6 lg:px-12 py-32 transition-colors">
      
      {/* Section Header */}
      <div className="mb-24 flex items-center gap-4 overflow-hidden">
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
            className="font-space text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-arctic-primary dark:text-dark-primary m-0 uppercase"
          >
            RECOGNITION_
          </motion.h2>
        </div>
      </div>

      <motion.div style={{ y: yParallax }} className="flex flex-col gap-12 max-w-[1200px] mx-auto">
        {achievementsData.map((achieve, idx) => (
          <motion.a
            href={achieve.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="group relative flex flex-col md:flex-row items-start md:items-stretch bg-transparent border-4 border-arctic-primary dark:border-dark-primary transition-all duration-500 overflow-hidden"
          >
            {/* High-speed sliding overlay for hover state */}
            <div className="absolute inset-0 bg-arctic-primary dark:bg-dark-primary origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 z-0"></div>

            {/* Left Icon Block */}
            <div className="bg-arctic-primary dark:bg-dark-primary p-8 flex items-center justify-center flex-shrink-0 z-10 w-full md:w-32 transition-colors duration-500">
              {achieve.type === "Publication" ? (
                <BookOpen size={40} className="text-arctic-surface dark:text-dark-bg group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              ) : (
                <Trophy size={40} className="text-arctic-surface dark:text-dark-bg group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              )}
            </div>
            
            {/* Middle Content Block */}
            <div className="p-8 flex-1 z-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6 overflow-hidden">
                <motion.span variants={textRevealVariants} className="font-jet text-xs font-bold uppercase text-arctic-primary dark:text-dark-primary bg-arctic-accent px-3 py-1 border border-arctic-primary dark:border-dark-primary transition-colors duration-500 group-hover:border-transparent">
                  {achieve.type}
                </motion.span>
                <motion.span variants={textRevealVariants} className="font-jet text-xs font-bold text-arctic-secondary dark:text-dark-secondary transition-colors duration-500 group-hover:text-arctic-surface dark:group-hover:text-dark-bg">
                  {achieve.date}
                </motion.span>
              </div>
              
              <div className="overflow-hidden pb-2">
                <motion.h3 variants={textRevealVariants} className="font-space text-2xl md:text-3xl font-black leading-tight mb-2 uppercase text-arctic-primary dark:text-dark-primary transition-colors duration-500 group-hover:text-arctic-surface dark:group-hover:text-dark-bg">
                  {achieve.title}
                </motion.h3>
              </div>
              
              <div className="overflow-hidden">
                <motion.h4 variants={textRevealVariants} className="font-jet text-sm font-bold uppercase mb-4 text-arctic-primary dark:text-dark-primary opacity-80 transition-colors duration-500 group-hover:text-arctic-surface dark:group-hover:text-dark-bg">
                  {achieve.issuer}
                </motion.h4>
              </div>
              
              <motion.p variants={textRevealVariants} className="font-jet font-medium text-sm md:text-base leading-relaxed text-arctic-secondary dark:text-dark-secondary opacity-90 transition-colors duration-500 group-hover:text-arctic-surface/80 dark:group-hover:text-dark-bg/80">
                {achieve.description}
              </motion.p>
            </div>

            {/* Right Arrow Block */}
            <div className="bg-arctic-surface dark:bg-dark-surface border-t-4 md:border-t-0 md:border-l-4 border-arctic-primary dark:border-dark-primary p-8 flex items-center justify-center z-10 transition-colors duration-500 group-hover:bg-transparent group-hover:border-transparent">
              <ArrowUpRight size={40} className="text-arctic-primary dark:text-dark-primary transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-arctic-surface dark:group-hover:text-dark-bg" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}