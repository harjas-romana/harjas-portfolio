import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const editorialBullets = [
    {
      subheading: "[ CONCURRENCY & PUB/SUB ]",
      detail: "Engineered a Redis-backed pipeline for a bidding engine, reducing state synchronization latency to sub-800ms."
    },
    {
      subheading: "[ RAG & VECTOR SEARCH ]",
      detail: "Optimized backend retrieval for an AI Voice Agent, decreasing inference latency by 5% and boosting semantic match accuracy by 15%."
    },
    {
      subheading: "[ API ARCHITECTURE ]",
      detail: "Developed Flask RESTful APIs, bridging backend logic with React frontends to automate workflows by 30%."
    }
  ];

  return (
    <section className="relative w-full mx-auto px-6 lg:px-12 py-32 border-t border-arctic-border dark:border-dark-border transition-colors">
      
      <div className="mb-24 flex items-center gap-4">
        <span className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary">[02]</span>
        <h2 className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase">EXPERIENCE</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Abstract Graphic Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:col-span-4 hidden lg:flex flex-col items-center justify-start relative"
        >
          <div className="w-full aspect-square bg-arctic-primary dark:bg-dark-primary relative overflow-hidden">
             <div className="absolute inset-4 border border-arctic-bg dark:border-dark-bg opacity-50"></div>
             <motion.div 
               whileInView={{ y: ["100%", "0%"] }} 
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               className="absolute top-1/2 left-0 w-full h-1/2 bg-arctic-accent" 
             />
             <div className="absolute top-4 left-4 font-jet text-[10px] text-arctic-bg dark:text-dark-bg opacity-70 tracking-widest z-10">
               NODE // 0x47FF
             </div>
          </div>
          <div className="w-full py-4 font-jet text-[10px] text-arctic-secondary dark:text-dark-secondary tracking-widest uppercase border-b border-arctic-border dark:border-dark-border flex justify-between">
            <span>Data Matrix</span>
            <span>May-Oct 2025</span>
          </div>
        </motion.div>

        {/* Magazine Content Column */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          
          <div className="mb-12 border-b-4 border-arctic-primary dark:border-dark-primary pb-8">
            <span className="font-jet text-sm font-bold text-arctic-accent tracking-widest uppercase mb-4 block">
              QuantAI Limited // Remote
            </span>
            <h3 className="font-space text-4xl lg:text-6xl font-black text-arctic-primary dark:text-dark-primary uppercase tracking-tighter leading-none m-0">
              Software Engineer Intern
            </h3>
          </div>

          <div className="space-y-12">
            {editorialBullets.map((bullet, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
                className="flex flex-col gap-2"
              >
                <div className="font-jet text-sm md:text-base font-bold text-arctic-accent uppercase tracking-widest">
                  {bullet.subheading}
                </div>
                <p className="font-space text-xl md:text-2xl font-medium text-arctic-primary dark:text-dark-primary leading-relaxed max-w-4xl opacity-90">
                  {bullet.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
