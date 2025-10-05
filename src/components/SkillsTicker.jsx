import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function SkillsTicker() {
  const categories = [...skillsData, ...skillsData];

  return (
    <section className="relative w-full py-16 border-t-[1px] border-b-[1px] border-[#EAEAEA] bg-arctic-bg overflow-hidden flex flex-col justify-center">
      <div className="flex w-full items-center">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-24 whitespace-nowrap px-10"
        >
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-space text-sm font-bold text-arctic-primary tracking-widest uppercase mb-4 opacity-50">
                {cat.category}
              </span>
              <div className="flex gap-4">
                {cat.tech.map((t, i) => (
                  <span key={i} className="font-jet text-2xl font-black text-arctic-primary uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
