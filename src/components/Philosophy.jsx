import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="relative w-full mx-auto px-6 lg:px-12 py-32 border-t border-arctic-border dark:border-dark-border transition-colors duration-400">
      
      <div className="mb-24 flex items-center gap-4">
        <span className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary">[01]</span>
        <h2 className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase">ENGINEERING PHILOSOPHY</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="md:col-span-8 lg:col-span-9"
        >
          <p className="font-space text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold text-arctic-primary dark:text-dark-primary leading-tight tracking-tighter">
            I do not just write code; I architect fault-tolerant systems. My focus is on eliminating distributed race conditions, optimizing high-concurrency data layers, and building backend infrastructure that scales predictably under peak loads. From deploying Redis-backed publish-subscribe pipelines to fine-tuning semantic RAG retrieval algorithms, I engineer the backend logic that keeps modern applications breathing.
          </p>
        </motion.div>
        
        <div className="md:col-span-4 lg:col-span-3 hidden md:flex flex-col justify-end pb-4 border-l border-arctic-border dark:border-dark-border pl-8">
           <span className="font-jet text-xs font-bold text-arctic-secondary dark:text-dark-secondary tracking-widest uppercase mb-4 block">
             CORE MAXIMS
           </span>
           <div className="space-y-2 font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary uppercase">
             <p>[ RELIABILITY ]</p>
             <p>[ CONCURRENCY ]</p>
             <p>[ PREDICTABILITY ]</p>
           </div>
        </div>
      </div>

    </section>
  );
}
