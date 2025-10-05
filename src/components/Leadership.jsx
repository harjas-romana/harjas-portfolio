import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Layout, Mic2 } from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

const getIcon = (org) => {
  if (org.includes("Stats")) return <Users size={32} />;
  if (org.includes("Linux")) return <Layout size={32} />;
  return <Mic2 size={32} />;
};

export default function Leadership() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [2000, 4000], [50, -100]);

  return (
    <section className="relative min-h-[50vh] px-6 lg:px-20 z-10 w-full max-w-[1200px] mx-auto py-32 border-t-4 border-arctic-primary mt-32">
      
      <div className="mb-24 flex items-center justify-between border-b-4 border-arctic-primary pb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-space text-5xl md:text-7xl font-black text-arctic-primary tracking-tighter uppercase"
        >
          LEADERSHIP_
        </motion.h2>
        <div className="hidden md:block w-32 h-8 bg-arctic-primary"></div>
      </div>

      <motion.div style={{ y: yParallax }} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {leadershipData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.15 }}
            className="group relative bg-arctic-surface brutal-border p-10 brutal-shadow flex flex-col"
          >
            {/* Index Block */}
            <div className="absolute -top-6 -right-6 bg-arctic-accent text-arctic-surface brutal-border w-16 h-16 flex items-center justify-center font-space text-3xl font-black">
              {idx + 1}
            </div>

            <div className="mb-8 p-5 bg-arctic-bg brutal-border inline-block self-start text-arctic-primary">
               {getIcon(item.organization)}
            </div>

            <h3 className="font-space text-2xl font-black text-arctic-primary leading-tight uppercase mb-2">
              {item.title}
            </h3>
            <h4 className="font-jet text-sm font-bold text-arctic-accent mb-8 uppercase">
              {item.organization}
            </h4>

            <div className="space-y-4 font-jet font-medium text-sm text-arctic-primary">
              {item.bullets.map((b, i) => (
                <p key={i} className="leading-relaxed">
                  &gt; {b}
                </p>
              ))}
            </div>
            
            {/* Hover bar slide-up */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-arctic-primary origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
