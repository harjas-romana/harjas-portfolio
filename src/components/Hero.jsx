import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Server } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const logLines = [
  "> initializing distributed systems...",
  "> connecting to redis cache...",
  "> optimizing RAG pipelines...",
  "> validating Lua scripts on ZSET...",
  "> deploying rate limiter gateway...",
  "> status: 200 OK"
];

const techMarquee = ["Java", "Spring Boot", "Redis", "AWS", "Docker", "Python", "Node.js", "Kubernetes", "PostgreSQL", "ChromaDB"];

function TerminalTyper() {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (currentLine >= logLines.length) {
      // Restart after a pause
      const resetTimer = setTimeout(() => {
        setLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
        setDisplayText("");
      }, 4000);
      return () => clearTimeout(resetTimer);
    }

    const line = logLines[currentLine];
    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + line[currentChar]);
        setCurrentChar(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timer);
    } else {
      // Line complete, push it and move to next
      const timer = setTimeout(() => {
        setLines(prev => [...prev, displayText]);
        setDisplayText("");
        setCurrentChar(0);
        setCurrentLine(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, displayText]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, displayText]);

  return (
    <div ref={containerRef} className="flex flex-col gap-1 overflow-hidden h-full">
      {lines.map((l, i) => (
        <div key={i} className="font-jet text-xs md:text-sm text-green-400/80 whitespace-nowrap">
          {l}
        </div>
      ))}
      {currentLine < logLines.length && (
        <div className="font-jet text-xs md:text-sm text-green-400 whitespace-nowrap">
          {displayText}
          <span className="inline-block w-2 h-4 bg-green-400 ml-0.5 animate-pulse align-middle" />
        </div>
      )}
    </div>
  );
}

const boxVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function Hero() {
  const marqueeItems = [...techMarquee, ...techMarquee, ...techMarquee];

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center px-4 md:px-8 lg:px-12 py-12 w-full z-10">
      
      {/* ===== THE BENTO GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-[1px] bg-arctic-border dark:bg-dark-border max-w-[1600px] mx-auto w-full">
        
        {/* BOX 1: THE IDENTITY — spans 2 cols, 2 rows on lg */}
        <motion.div
          custom={0}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          className="relative md:col-span-2 md:row-span-2 bg-arctic-surface dark:bg-dark-surface p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden"
        >
          <div>
            <h1 className="font-space text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-arctic-primary dark:text-dark-primary leading-ultra-tight tracking-ultra-tight uppercase m-0">
              HARJAS
              <br />
              PARTAP
              <br />
              SINGH
              <br />
              <span className="text-arctic-accent">ROMANA.</span>
            </h1>
          </div>
          
          {/* Status Indicator Bottom Corner */}
          <div className="flex items-center gap-3 mt-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-jet text-xs md:text-sm font-bold text-arctic-secondary dark:text-dark-secondary uppercase tracking-widest">
              System Status: Online | Faridkot / Remote
            </span>
          </div>
        </motion.div>

        {/* BOX 2: THE TERMINAL — always dark */}
        <motion.div
          custom={1}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          className="relative md:col-span-1 lg:row-span-2 bg-[#0A0A0A] p-6 md:p-8 flex flex-col min-h-[250px] lg:min-h-0"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <span className="font-jet text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest">
              /var/log/system.out
            </span>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <TerminalTyper />
          </div>
        </motion.div>

        {/* BOX 3: THE ROLE */}
        <motion.div
          custom={2}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          className="relative bg-arctic-surface dark:bg-dark-surface p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <Hexagon size={40} className="text-arctic-accent" strokeWidth={1} />
            <span className="font-jet text-[10px] text-arctic-secondary dark:text-dark-secondary tracking-widest">FIG.03</span>
          </div>
          <div className="mt-auto">
            <h2 className="font-space text-xl md:text-2xl font-black text-arctic-primary dark:text-dark-primary uppercase tracking-tighter leading-tight mb-2">
              Software Engineer
            </h2>
            <p className="font-jet text-xs md:text-sm font-bold text-arctic-secondary dark:text-dark-secondary uppercase tracking-widest">
              B.Tech CSE '26 | VIT
            </p>
          </div>
        </motion.div>

        {/* BOX 4: THE ARSENAL MARQUEE */}
        <motion.div
          custom={3}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          className="relative md:col-span-2 bg-arctic-surface dark:bg-dark-surface p-6 md:p-8 flex flex-col justify-center overflow-hidden"
        >
          <span className="font-jet text-[10px] md:text-xs font-bold text-arctic-secondary dark:text-dark-secondary uppercase tracking-widest mb-4 block">
            ACTIVE STACK
          </span>
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{ ease: "linear", duration: 20, repeat: Infinity }}
              className="flex gap-6 md:gap-10 whitespace-nowrap"
            >
              {marqueeItems.map((tech, i) => (
                <span key={i} className="font-space text-2xl md:text-4xl font-black text-arctic-primary dark:text-dark-primary uppercase tracking-tighter">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* BOX 5: CONTACT LINKS — minimalist horizontal */}
        <motion.div
          custom={4}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          className="relative md:col-span-2 bg-arctic-accent p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <span className="font-space text-xl md:text-2xl font-bold text-white uppercase tracking-tighter">
            Let's build something.
          </span>

          <div className="flex flex-wrap gap-4 md:gap-8 font-jet text-sm font-bold uppercase tracking-widest">
            <a href={`mailto:${personalData.email}`} className="text-white/80 hover:text-white transition-colors">
              Email
            </a>
            <a href={`https://${personalData.github}`} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              GitHub
            </a>
            <a href={`https://${personalData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
