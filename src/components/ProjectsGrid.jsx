import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, GitBranchPlus} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const customEase = [0.76, 0, 0.24, 1];

export default function ProjectsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yWatermark = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={sectionRef} className="relative w-full mx-auto px-6 lg:px-12 py-32 lg:py-48 transition-colors duration-500 overflow-hidden">
      
      {/* MASSIVE BACKGROUND WATERMARK */}
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 right-0 pointer-events-none z-0 select-none flex items-center justify-end w-full h-full opacity-5 dark:opacity-10"
      >
        <span className="font-space text-[40vw] font-black text-arctic-primary dark:text-dark-primary leading-none -mr-12">
          03
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
          [03]
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "120%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: customEase }}
            className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase"
          >
            SYSTEM ARCHITECTURES
          </motion.h2>
        </div>
      </div>

      {/* BRUTALIST ACCORDION LIST */}
      <div className="flex flex-col border-t border-arctic-border dark:border-dark-border relative z-10">
        {projectsData.map((project, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: customEase }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b border-arctic-border dark:border-dark-border flex flex-col relative"
            >
              {/* Background fill on hover */}
              <div className="absolute inset-0 bg-arctic-primary/5 dark:bg-dark-primary/5 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 z-0" />

              {/* ALWAYS VISIBLE ROW HEADER */}
              <div className="w-full flex flex-col md:flex-row md:items-center justify-between py-8 lg:py-12 px-4 cursor-pointer relative z-10">
                <div className="flex items-center gap-6 lg:gap-12">
                  <span className="font-jet text-xs font-bold text-arctic-secondary dark:text-dark-secondary opacity-50 w-6">
                    0{idx + 1}
                  </span>
                  <h3 className="font-space text-2xl md:text-4xl lg:text-5xl font-black text-arctic-primary dark:text-dark-primary uppercase tracking-tighter transition-colors duration-300 group-hover:text-arctic-accent">
                    {project.title}
                  </h3>
                </div>
                
                {/* Tech Tags (Hidden on mobile for cleaner layout, visible on md+) */}
                <div className="hidden md:flex gap-3">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="font-jet text-[10px] font-bold text-arctic-primary dark:text-dark-primary border border-arctic-border dark:border-dark-border px-3 py-1 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* EXPANDABLE BODY (Hardware Accelerated Height) */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: customEase }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-16 px-4 pb-12 pt-4">
                      <div className="md:w-1/2 lg:pl-24">
                        <p className="font-jet text-sm md:text-base font-medium text-arctic-secondary dark:text-dark-secondary leading-relaxed max-w-2xl">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="md:w-1/2 flex flex-col justify-end gap-4">
                        <div className="flex gap-4">
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-jet text-xs font-bold text-arctic-primary dark:text-dark-primary bg-arctic-primary/10 dark:bg-dark-primary/10 hover:bg-arctic-primary hover:text-arctic-surface dark:hover:bg-dark-primary dark:hover:text-dark-bg transition-colors duration-300 px-4 py-2 uppercase tracking-widest border border-arctic-primary dark:border-dark-primary">
                              <GitBranchPlus size={16} /> View Repo
                            </a>
                          )}
                          {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-jet text-xs font-bold bg-arctic-primary dark:bg-dark-primary text-arctic-surface dark:text-dark-bg hover:bg-arctic-accent hover:border-arctic-accent transition-colors duration-300 px-4 py-2 uppercase tracking-widest border border-arctic-primary dark:border-dark-primary">
                              Live Deploy <ArrowUpRight size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}