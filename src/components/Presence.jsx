import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { ArrowUpRight, Activity } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

// Elite-tier cubic-bezier easing
const customEase = [0.76, 0, 0.24, 1];

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Presence() {
  const { isDark } = useTheme();
  const sectionRef = useRef(null);
  
  // Parallax Watermark
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yWatermark = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const githubUsername = personalData.github.split('/').pop();

  // Custom Heatmap mapping to your Ardian Orange Accent
  const customTheme = {
    light: ['#E5E5E5', '#F5A38C', '#EE7656', '#E85B37', '#E54826'],
    dark:  ['#262626', '#5C1D0F', '#8C2C17', '#B83A1E', '#E54826'],
  };

  return (
    <section ref={sectionRef} className="relative w-full mx-auto px-6 lg:px-12 py-32 lg:py-48 border-t border-arctic-border dark:border-dark-border transition-colors duration-500 overflow-hidden">
      
      {/* MASSIVE BACKGROUND WATERMARK */}
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-0 right-0 pointer-events-none z-0 select-none flex items-center justify-end w-full h-full opacity-5 dark:opacity-10"
      >
        <span className="font-space text-[40vw] font-black text-arctic-primary dark:text-dark-primary leading-none -mr-12">
          04
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
          [04]
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "120%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: customEase }}
            className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase"
          >
            PRESENCE & METRICS
          </motion.h2>
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:gap-16 relative z-10 w-full max-w-[1600px] mx-auto">
        
        {/* MASSIVE SOCIAL MODULES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          
          {/* GitHub Action Block */}
          <motion.a 
            href={`https://${personalData.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="group relative flex flex-col justify-between border-2 border-arctic-primary dark:border-dark-primary bg-transparent p-8 lg:p-12 overflow-hidden h-full cursor-pointer"
          >
            {/* Kinetic Hover Fill */}
            <div className="absolute inset-0 bg-arctic-primary dark:bg-dark-primary origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 z-0"></div>

            <div className="flex justify-between items-start mb-16 relative z-10">
              <GithubIcon size={48} className="text-arctic-primary dark:text-dark-primary transition-colors duration-500 group-hover:text-arctic-surface dark:group-hover:text-dark-bg" />
              <ArrowUpRight size={32} className="text-arctic-primary dark:text-dark-primary transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-arctic-surface dark:group-hover:text-dark-bg" />
            </div>
            
            <div className="relative z-10">
              <div className="overflow-hidden mb-4">
                <span className="font-jet text-xs font-bold text-arctic-primary dark:text-dark-primary tracking-widest uppercase block transition-colors duration-500 group-hover:text-arctic-surface dark:group-hover:text-dark-bg opacity-70 group-hover:opacity-100">
                  Version Control / Architecture
                </span>
              </div>
              <div className="overflow-hidden">
                <h3 className="font-space text-4xl lg:text-6xl font-black text-arctic-primary dark:text-dark-primary leading-tight uppercase transition-colors duration-500 group-hover:text-arctic-surface dark:group-hover:text-dark-bg">
                   GitHub
                </h3>
              </div>
            </div>
          </motion.a>

          {/* LinkedIn Action Block */}
          <motion.a 
            href={`https://${personalData.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: customEase }}
            className="group relative flex flex-col justify-between border-2 border-arctic-primary dark:border-dark-primary bg-transparent p-8 lg:p-12 overflow-hidden h-full cursor-pointer"
          >
            {/* Kinetic Hover Fill */}
            <div className="absolute inset-0 bg-[#0077b5] origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 z-0"></div>

            <div className="flex justify-between items-start mb-16 relative z-10">
              <LinkedinIcon size={48} className="text-arctic-primary dark:text-dark-primary transition-colors duration-500 group-hover:text-white" />
              <ArrowUpRight size={32} className="text-arctic-primary dark:text-dark-primary transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="overflow-hidden mb-4">
                <span className="font-jet text-xs font-bold text-arctic-primary dark:text-dark-primary tracking-widest uppercase block transition-colors duration-500 group-hover:text-white opacity-70 group-hover:opacity-100">
                  Professional Network / Log
                </span>
              </div>
              <div className="overflow-hidden">
                <h3 className="font-space text-4xl lg:text-6xl font-black text-arctic-primary dark:text-dark-primary leading-tight uppercase transition-colors duration-500 group-hover:text-white">
                   LinkedIn
                </h3>
              </div>
            </div>
          </motion.a>

        </div>

        {/* CONTRIBUTION TELEMETRY ROW */}
        <motion.div 
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: customEase }}
          className="border-2 border-arctic-primary dark:border-dark-primary bg-arctic-bg dark:bg-dark-bg p-8 lg:p-12 w-full mx-auto relative overflow-hidden group"
        >
          {/* Scanning Line overlay */}
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-1/2 h-[2px] bg-arctic-accent opacity-50 z-20"
          />

          <div className="flex items-center gap-3 mb-12">
            <Activity size={20} className="text-arctic-accent animate-pulse" />
            <span className="font-jet text-[10px] sm:text-xs font-bold text-arctic-primary dark:text-dark-primary uppercase tracking-widest">
              TELEMETRY :: COMMIT VELOCITY (LAST 365 DAYS)
            </span>
          </div>
          
          <div className="flex justify-center w-full min-w-min overflow-x-auto hide-scrollbar pb-4 relative z-10">
            {/* Wrap the GitHubCalendar to enforce your global typography 
              and hide its default borders if any.
            */}
            <div className="font-jet text-xs lg:text-sm font-bold opacity-90 transition-opacity duration-300 group-hover:opacity-100">
              <GitHubCalendar 
                username={githubUsername}
                colorScheme={isDark ? "dark" : "light"}
                theme={customTheme}
                blockSize={18}
                blockMargin={6}
                fontSize={14}
                hideColorLegend={false}
                hideTotalCount={false}
                labels={{
                  totalCount: "{{count}} deployments documented",
                }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}