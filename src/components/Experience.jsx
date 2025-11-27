import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experienceData } from '../data/portfolioData';

const customEase = [0.76, 0, 0.24, 1];

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yWatermark = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={sectionRef} className="relative w-full mx-auto px-6 lg:px-12 py-32 lg:py-48 border-t border-arctic-border dark:border-dark-border transition-colors duration-500 overflow-hidden">
      
      {/* MASSIVE BACKGROUND WATERMARK */}
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 left-0 pointer-events-none z-0 select-none flex items-center justify-start w-full h-full opacity-5 dark:opacity-10"
      >
        <span className="font-space text-[40vw] font-black text-arctic-primary dark:text-dark-primary leading-none -ml-12">
          02
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* STICKY LEFT COLUMN */}
        <div className="lg:col-span-4 flex flex-col relative">
          <div className="sticky top-32">
            <div className="flex items-center gap-4 mb-8 overflow-hidden">
              <motion.span 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: customEase }}
                className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary"
              >
                [02]
              </motion.span>
              <div className="overflow-hidden">
                <motion.h2 
                  initial={{ y: "120%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: customEase }}
                  className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase"
                >
                  EXPERIENCE
                </motion.h2>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: customEase }}
              className="mt-12 p-6 border border-arctic-border dark:border-dark-border bg-arctic-primary/5 dark:bg-dark-primary/5 backdrop-blur-sm"
            >
              <span className="font-jet text-xs font-bold text-arctic-accent tracking-widest uppercase block mb-2">
                {experienceData.company}
              </span>
              <h3 className="font-space text-2xl lg:text-3xl font-black text-arctic-primary dark:text-dark-primary uppercase tracking-tighter leading-none mb-4">
                {experienceData.role}
              </h3>
              <div className="w-full h-[1px] bg-arctic-border dark:bg-dark-border mb-4" />
              <span className="font-jet text-sm font-bold text-arctic-secondary dark:text-dark-secondary uppercase">
                {experienceData.timeline}
              </span>
            </motion.div>
          </div>
        </div>

        {/* SCROLLING RIGHT COLUMN (Engineering Bullets) */}
        <div className="lg:col-span-8 flex flex-col gap-12 lg:gap-24 lg:pl-12 lg:pt-32">
          {experienceData.editorialBullets.map((bullet, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: customEase }}
              className="group relative flex flex-col gap-4 pl-6 lg:pl-8"
            >
              <span className="absolute left-0 top-0 w-[2px] h-full bg-arctic-border dark:bg-dark-border" />
              <span className="absolute left-0 top-0 w-[2px] h-0 bg-arctic-accent transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:h-full" />
              
              <div className="overflow-hidden">
                <h4 className="font-space text-2xl lg:text-4xl font-black text-arctic-primary dark:text-dark-primary uppercase tracking-tighter transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-2">
                  {bullet.subheading}
                </h4>
              </div>
              <p className="font-jet text-sm md:text-base font-medium text-arctic-secondary dark:text-dark-secondary leading-relaxed max-w-3xl transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-2">
                {bullet.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}