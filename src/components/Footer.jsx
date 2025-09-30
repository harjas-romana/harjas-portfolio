import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] dark:bg-[#0A0A0A] text-[#FAFAFA] pt-32 pb-8 overflow-hidden relative flex flex-col border-t border-dark-border">

      <div className="w-full mx-auto px-6 lg:px-12 mb-32 flex flex-col lg:flex-row justify-between items-start gap-16 relative z-10">
        
        {/* Geo Meta */}
        <div className="flex flex-col gap-4 font-jet text-[10px] sm:text-xs text-[#FAFAFA]/40 uppercase tracking-widest">
          <span>LAT 30.6738 N / LONG 74.7570 E</span>
          <span>SERVER / OFFLINE_PROTOCOL :: ACTIVE</span>
          <span>BUILD: 2026.04.09 // STABLE</span>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-24">
          <div className="flex flex-col">
            <span className="font-jet text-xs font-bold text-[#0047FF] mb-4 uppercase tracking-widest">Connect</span>
            <a href={`mailto:${personalData.email}`} className="font-space text-lg font-bold text-[#FAFAFA] hover:text-[#0047FF] transition-colors">
              {personalData.email}
            </a>
          </div>

          <div className="flex flex-col">
            <span className="font-jet text-xs font-bold text-[#0047FF] mb-4 uppercase tracking-widest">Network</span>
            <a href={`https://${personalData.linkedin}`} target="_blank" rel="noopener noreferrer" className="font-space text-lg font-bold text-[#FAFAFA] hover:text-[#0047FF] transition-colors">
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col">
            <span className="font-jet text-xs font-bold text-[#0047FF] mb-4 uppercase tracking-widest">Codebase</span>
            <a href={`https://${personalData.github}`} target="_blank" rel="noopener noreferrer" className="font-space text-lg font-bold text-[#FAFAFA] hover:text-[#0047FF] transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Massive Bleeding Typography */}
      <div className="w-full flex justify-center relative mt-auto z-0 overflow-hidden leading-none pt-20">
        <h1 className="font-space text-footer-giant font-black text-[#FAFAFA]/[0.04] tracking-tighter leading-none m-0 translate-y-[20%] select-none">
          HARJAS
        </h1>
      </div>

      {/* Copyright */}
      <div className="px-6 lg:px-12 mt-12 flex flex-col md:flex-row justify-between items-center font-jet text-[10px] text-[#FAFAFA]/30 font-bold uppercase tracking-widest relative z-10">
        <span>&copy; {new Date().getFullYear()} Harjas Partap Singh Romana.</span>
        <span>ALL RIGHTS RESERVED.</span>
      </div>

      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#FAFAFA]/5"></div>
      <div className="absolute top-0 right-1/2 w-[1px] h-1/3 bg-[#FAFAFA]/5"></div>
    </footer>
  );
}
