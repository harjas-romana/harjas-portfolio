import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [displayText, setDisplayText] = useState("DATA_ARCHIVE");
  const finalTitle = "RESUME_MANIFEST";

  const decodeEffect = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev =>
        finalTitle.split("")
          .map((char, index) => {
            if (index < iteration) return finalTitle[index];
            return "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
          })
          .join("")
      );
      if (iteration >= finalTitle.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <footer className="w-full bg-bg-base pt-20 pb-10 px-6 md:px-12 border-t border-border-subtle">
      <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

        {/* Left: Branding */}
        <div className="flex flex-col gap-2">
          <span className="font-sans font-bold text-xl tracking-tighter text-text-primary">
            H. ROMANA // 2026
          </span>
          <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
            Architecting Agentic Environments
          </p>
        </div>

        {/* Center: The Encrypted Resume Extraction */}
        <motion.a
          href="/Harjas-Singh-Resume.pdf"
          target="_blank"
          onMouseEnter={decodeEffect}
          className="group flex flex-col items-center"
        >
          <span className="font-mono text-[9px] text-accent tracking-[0.4em] uppercase mb-2">
            [ Extract_Credentials ]
          </span>
          <span className="text-2xl font-mono font-bold text-text-primary group-hover:text-accent transition-colors duration-500">
            {displayText}
          </span>
        </motion.a>

        {/* Right: Technical Metadata */}
        <div className="flex flex-col items-end gap-1 text-right">
          <span className="font-mono text-[10px] text-text-muted uppercase">System Build: v4.0.2</span>
          <span className="font-mono text-[10px] text-text-muted uppercase">Status: Live // Secure</span>
        </div>
      </div>

      <div className="mt-20 text-center opacity-20">
        <span className="font-mono text-[9px] tracking-[0.5em] uppercase">
          &copy; 2026 All Primitives Protected
        </span>
      </div>
    </footer>
  );
}