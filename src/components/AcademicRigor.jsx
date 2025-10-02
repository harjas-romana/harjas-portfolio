import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function AcademicRigor() {
  const vit = {
    title: "Vellore Institute of Technology (VIT)",
    subtitle: "B.Tech Computer Science & Engineering",
    cgpa: "8.75 / 10.0"
  };

  const springer = achievementsData.find(a => a.type === "Publication");
  const conclave = achievementsData.find(a => a.type === "Award");

  return (
    <section className="relative w-full mx-auto px-6 lg:px-12 py-32 border-t border-arctic-border dark:border-dark-border transition-colors">

      <div className="mb-24 flex items-center gap-4">
        <span className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary">[05]</span>
        <h2 className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase">RESEARCH & ACADEMICS</h2>
      </div>

      <div className="flex flex-col gap-0 border-t border-arctic-primary dark:border-dark-primary flex-grow">

        {/* Banner 1: University */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-arctic-border dark:border-dark-border py-16 lg:py-24"
        >
          <div className="lg:w-1/2 pr-8">
            <h3 className="font-space text-4xl lg:text-5xl font-black uppercase text-arctic-primary dark:text-dark-primary tracking-tighter leading-tight mb-4">
              {vit.title}
            </h3>
            <span className="font-jet text-sm tracking-widest text-arctic-secondary dark:text-dark-secondary block">
              {vit.subtitle}
            </span>
          </div>
          <div className="lg:w-1/2 flex lg:justify-end mt-8 lg:mt-0">
            <span className="font-space text-5xl lg:text-7xl font-bold text-arctic-accent tracking-tighter">
              {vit.cgpa}
            </span>
          </div>
        </motion.div>

        {/* Banner 2: Springer Paper */}
        {springer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col lg:flex-row justify-between items-start border-b border-arctic-border dark:border-dark-border py-16 lg:py-24"
          >
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <span className="font-jet text-xs font-bold bg-arctic-primary dark:bg-dark-primary text-arctic-surface dark:text-dark-bg px-3 py-1 uppercase tracking-widest block w-fit">
                PUBLISHED RESEARCH
              </span>
            </div>
            <div className="lg:w-2/3 flex flex-col gap-6">
              <h4 className="font-space text-3xl lg:text-5xl font-bold tracking-tighter leading-tight text-arctic-primary dark:text-dark-primary uppercase">
                {springer.title}
              </h4>
              <a href={springer.link} target="_blank" rel="noopener noreferrer" className="font-jet text-sm font-bold text-arctic-accent underline underline-offset-4 tracking-widest uppercase hover:text-arctic-primary dark:hover:text-dark-primary transition-colors w-fit flex items-center gap-2">
                <span>Access Document</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}

        {/* Banner 3: WindowCrash Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col lg:flex-row justify-between items-start border-b border-arctic-border dark:border-dark-border py-16 lg:py-24"
        >
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <span className="font-jet text-xs font-bold bg-arctic-primary dark:bg-dark-primary text-arctic-surface dark:text-dark-bg px-3 py-1 uppercase tracking-widest block w-fit">
              INDUSTRY CONCLAVE 2024
            </span>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-6">
            <h4 className="font-space text-3xl lg:text-5xl font-bold tracking-tighter leading-tight text-arctic-primary dark:text-dark-primary uppercase">
              Top 10 Finalist out of 50+ Teams
            </h4>
            <p className="font-jet text-lg font-medium text-arctic-secondary dark:text-dark-secondary max-w-2xl leading-relaxed">
              Selected among the top 10 teams from over 50 participants at the Industry Conclave 2024. Presented research on distributed system failures and proposed novel mitigation strategies.
            </p>
            <a href="https://github.com/harjas-romana/industry_conclave_windowcrash" target="_blank" rel="noopener noreferrer" className="font-jet text-xs font-bold border border-arctic-primary dark:border-dark-primary bg-transparent text-arctic-primary dark:text-dark-primary hover:bg-arctic-primary dark:hover:bg-dark-primary hover:text-arctic-surface dark:hover:text-dark-bg transition-colors duration-300 px-4 py-2 w-fit flex items-center gap-2 uppercase tracking-widest">
              <span>VIEW PAPER</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Banner 4: Legacy Conclave Award (Fallback from Data) */}
        {conclave && conclave.title !== "Global Windows 10 Crash (BSOD) Research" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col lg:flex-row justify-between items-start border-b border-arctic-border dark:border-dark-border py-16 lg:py-24"
          >
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <span className="font-jet text-xs font-bold bg-arctic-primary dark:bg-dark-primary text-arctic-surface dark:text-dark-bg px-3 py-1 uppercase tracking-widest block w-fit">
                {conclave.date} CONCLAVE
              </span>
            </div>
            <div className="lg:w-2/3 flex flex-col gap-6">
              <h4 className="font-space text-3xl lg:text-5xl font-bold tracking-tighter leading-tight text-arctic-primary dark:text-dark-primary uppercase">
                {conclave.title}
              </h4>
              <p className="font-jet text-lg font-medium text-arctic-secondary dark:text-dark-secondary max-w-2xl leading-relaxed">
                {conclave.description}
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
