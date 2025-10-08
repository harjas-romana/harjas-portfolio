import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projectsList = [
  {
    title: "CodeAura v3 (Hybrid Search Engine)",
    description: "A hybrid semantic + keyword search engine for codebases utilizing ChromaDB, BM25 ranking, Reciprocal Rank Fusion, and Llama-3.3-70b cross-encoder re-ranking. Features parallel MD5 diffing and a live React dashboard.",
    tech: ["Node.js", "ChromaDB", "React", "LLMs"],
    link: "https://github.com/harjas-romana/codeAura"
  },
  {
    title: "Premium Store (E-Commerce V2)",
    description: "Production-ready full-stack e-commerce platform. Engineered with a React frontend, Node.js/Express REST API, persistent NeonDB (PostgreSQL) storage, and Upstash Redis caching.",
    tech: ["React", "Express", "PostgreSQL", "Redis"],
    link: "https://github.com/harjas-romana/e-commerce-v2"
  },
  {
    title: "Firehose (Event-Driven Architecture)",
    description: "A high-throughput Spring Boot application integrated with Apache Kafka for event streaming. Includes a decoupled React/TypeScript frontend (Nexus-UI) and Python A/B testing utilities.",
    tech: ["Spring Boot", "Kafka", "React", "TypeScript"],
    link: "https://github.com/harjas-romana/firehose"
  },
  {
    title: "Distributed API Rate Limiter",
    description: "Architected a distributed Sliding Window API Rate Limiter to protect backend microservices. Offloaded state-management to Redis using atomic Lua scripts against ZSET structures, sustaining 1,000+ simultaneous threads.",
    tech: ["Java", "Redis", "Docker"],
    link: "https://github.com/harjas-romana/api-rate-limiter"
  },
  {
    title: "Brainwave AI (Agriculture Support)",
    description: "A modern React/Vite application integrating three custom Machine Learning models for crop disease detection, yield production forecasting, and crop recommendation.",
    tech: ["React", "Vite", "Tailwind", "Python/ML"],
    link: "https://github.com/harjas-romana/epics-project"
  },
  {
    title: "Audio Engine (DSP Chrome Extension)",
    description: "A realtime DOM audio-hijacking Chrome Extension. Engineered custom Digital Signal Processing (DSP) modes including 16D surround, 360-degree immersion, and vocal clarity EQ shifting via the Web Audio API.",
    tech: ["JavaScript", "Chrome Extensions API", "DSP"],
    link: "https://github.com/harjas-romana/audio-engine"
  }
];

export default function ProjectsGrid() {
  const { scrollY } = useScroll();
  const parallaxOffset = useTransform(scrollY, [1500, 3000], [0, -40]);

  return (
    <section className="relative w-full mx-auto px-6 lg:px-12 py-32 border-t border-arctic-border dark:border-dark-border transition-colors">
      
      <div className="mb-24 flex items-center gap-4">
        <span className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary">[03]</span>
        <h2 className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase">INFRASTRUCTURE</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-[1600px] mx-auto">
        {projectsList.map((project, idx) => {
          return (
             <motion.div 
               key={idx}
               style={{ y: parallaxOffset }}
               initial={{ opacity: 0, scale: 0.98, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: (idx % 2) * 0.1, ease: "easeOut" }}
               className="group flex flex-col justify-between border border-arctic-border dark:border-dark-border bg-arctic-surface dark:bg-dark-surface p-8 lg:p-10 transition-all duration-300 hover:border-arctic-accent hover:-translate-y-1 h-full"
             >
               <div className="flex justify-between items-start mb-6">
                 <h3 className="font-space text-2xl lg:text-3xl font-black text-arctic-primary dark:text-dark-primary leading-tight uppercase">
                   [ {project.title} ]
                 </h3>
               </div>

               <div className="mb-10 font-jet text-sm lg:text-base text-arctic-secondary dark:text-dark-secondary font-medium leading-relaxed flex-grow">
                 {project.description}
               </div>

               {/* Tech Tags & View Source aligned bottom */}
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mt-auto pt-6 border-t border-arctic-border dark:border-dark-border">
                 
                 <div className="flex flex-wrap gap-2">
                   {project.tech.map((t, i) => (
                     <span key={i} className="font-jet border border-current px-2 py-1 text-[10px] sm:text-xs font-bold text-arctic-primary dark:text-dark-primary tracking-widest uppercase">
                       {t}
                     </span>
                   ))}
                 </div>

                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 border border-arctic-primary dark:border-dark-primary bg-transparent text-arctic-primary dark:text-dark-primary hover:bg-arctic-primary dark:hover:bg-dark-primary hover:text-arctic-surface dark:hover:text-dark-bg transition-colors duration-300 px-4 py-2 shrink-0"
                 >
                   <span className="font-jet text-xs font-bold uppercase tracking-widest">
                     VIEW SOURCE
                   </span>
                   <ArrowUpRight size={16} />
                 </a>

               </div>
             </motion.div>
          )
        })}
      </div>
    </section>
  );
}
