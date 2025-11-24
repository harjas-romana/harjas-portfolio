import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hardware-accelerated scroll listener for hide/show logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Check if user has scrolled past the hero section
    if (latest > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide header if scrolling down, show if scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: '// PHILOSOPHY', id: 'philosophy' },
    { name: '// EXPERIENCE', id: 'experience' },
    { name: '// ARCHITECTURE', id: 'projects' },
    { name: '// ARSENAL', id: 'arsenal' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-arctic-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-arctic-border dark:border-dark-border py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* LOGO / SYSTEM ID */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer group flex items-center gap-3"
        >
          <div className="w-2 h-2 bg-arctic-accent transition-transform duration-500 group-hover:scale-150" />
          <span className="font-space font-black text-xl tracking-tighter text-arctic-primary dark:text-dark-primary uppercase">
            H. Romana
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(link.id)}
              className="group relative font-jet text-xs font-bold text-arctic-secondary dark:text-dark-secondary hover:text-arctic-primary dark:hover:text-dark-primary uppercase tracking-widest transition-colors duration-300"
            >
              {link.name}
              {/* Kinetic underline */}
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-arctic-accent origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        {/* THEME TOGGLE WRAPPER */}
        {/* Note: In App.jsx, we will move your ThemeToggle inside this flex container */}
        <div id="theme-toggle-mount" className="flex items-center">
          {/* We will render ThemeToggle here via App.jsx positioning or you can import it directly into Header if preferred */}
        </div>

      </div>
    </motion.header>
  );
}