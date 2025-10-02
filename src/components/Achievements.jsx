import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Trophy, ArrowUpRight } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [3000, 5000], [0, -100]);

  return (
    <section className="relative min-h-[50vh] px-6 lg:px-20 z-10 w-full max-w-[1200px] mx-auto py-32 border-t-4 border-arctic-primary mb-20 mt-32">
      
      <div className="mb-24 flex items-center justify-between">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-space text-5xl md:text-7xl font-black text-arctic-primary tracking-tighter uppercase"
        >
          RECOGNITION_
        </motion.h2>
      </div>

      <motion.div style={{ y: yParallax }} className="flex flex-col gap-12">
        {achievementsData.map((achieve, idx) => (
          <motion.a
            href={achieve.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -8, x: 8 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="group relative flex flex-col md:flex-row items-start md:items-stretch bg-arctic-surface brutal-border brutal-shadow transition-all duration-300 overflow-hidden"
          >
            {/* Hover slide overlay */}
            <div className="absolute inset-0 bg-arctic-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>

            <div className="bg-arctic-primary p-8 flex items-center justify-center flex-shrink-0 z-10">
              {achieve.type === "Publication" ? (
                <BookOpen size={40} className="text-arctic-surface group-hover:text-arctic-accent transition-colors" />
              ) : (
                <Trophy size={40} className="text-arctic-surface group-hover:text-arctic-accent transition-colors" />
              )}
            </div>
            
            <div className="p-8 flex-1 z-10 group-hover:text-arctic-surface transition-colors flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-jet text-xs font-bold uppercase text-arctic-primary bg-arctic-accent px-3 py-1 brutal-border border-arctic-primary">
                  {achieve.type}
                </span>
                <span className="font-jet text-xs font-bold text-arctic-secondary group-hover:text-arctic-surface">
                  {achieve.date}
                </span>
              </div>
              
              <h3 className="font-space text-2xl md:text-3xl font-black leading-tight mb-2 uppercase">
                {achieve.title}
              </h3>
              
              <h4 className="font-jet text-sm font-bold uppercase mb-4 opacity-80">
                {achieve.issuer}
              </h4>
              
              <p className="font-jet font-medium text-sm md:text-base leading-relaxed opacity-90">
                {achieve.description}
              </p>
            </div>

            <div className="bg-arctic-bg brutal-border-l border-arctic-primary p-8 flex items-center justify-center z-10 group-hover:bg-arctic-accent transition-colors">
              <ArrowUpRight size={32} className="text-arctic-primary" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
