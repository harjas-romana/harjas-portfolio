import React from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/portfolioData';

export default function SkillsTicker() {
  const tickerItems = [...heroData.techMarquee, ...heroData.techMarquee, ...heroData.techMarquee, ...heroData.techMarquee];
  const tickerReverse = [...tickerItems].reverse();

  return (
    <div className="w-full overflow-hidden border-y border-border-subtle mt-16 md:mt-20 ticker-mask bg-bg-elevated">
      {/* Primary row */}
      <div className="bg-accent py-4 flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap items-center"
        >
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-center mx-6">
              <span className="text-white font-sans font-bold text-lg md:text-xl uppercase tracking-widest">
                {item}
              </span>
              <span className="mx-6 text-white/40">◆</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Reverse row */}
      <div className="bg-bg-elevated py-3.5 flex border-t border-border-subtle">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          className="flex whitespace-nowrap items-center"
        >
          {tickerReverse.map((item, idx) => (
            <div key={idx} className="flex items-center mx-6">
              <span className="text-xs font-mono text-text-muted opacity-60 uppercase tracking-[0.2em] font-bold">
                {item}
              </span>
              <span className="mx-6 text-text-muted opacity-30">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
