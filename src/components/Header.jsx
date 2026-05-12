import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useMotionValue, useSpring } from 'framer-motion';

// --- AWWWARDS SPRING PHYSICS ---
const SPRING_MAGNETIC = { type: "spring", stiffness: 150, damping: 15, mass: 0.1 };
const SPRING_UI = { type: "spring", stiffness: 200, damping: 25, mass: 0.5 };

const navLinks = [
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Architecture', href: '#projects' },
  { name: 'Foundation', href: '#academic' },
  { name: 'Operations', href: '#leadership' },
  { name: 'Contact', href: '#presence' },
];

function ArchitecturalLogo() {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 15 }}
      transition={SPRING_UI}
      className="relative flex items-center justify-center w-10 h-10 group"
    >
      <motion.div className="absolute left-1.5 w-[2.5px] h-full bg-text-primary group-hover:bg-accent transition-colors" />
      <motion.div className="absolute right-1.5 w-[2.5px] h-full bg-text-primary group-hover:bg-accent transition-colors" />
      <motion.div className="absolute top-2 left-1.5 w-6 h-[2.5px] bg-text-primary group-hover:bg-accent transition-colors" />
      <motion.div className="absolute bottom-2 left-1.5 w-4 h-[2.5px] bg-text-primary group-hover:bg-accent transition-colors" />
      <motion.div className="w-[2.5px] h-4 bg-text-primary group-hover:bg-accent transition-colors" />
    </motion.div>
  );
}

function MagneticNavLink({ children, href, isCv = false }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_MAGNETIC);
  const springY = useSpring(y, SPRING_MAGNETIC);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={isCv ? "_blank" : "_self"}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative group px-3 py-2 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold font-mono transition-colors duration-300 ${isCv ? 'text-accent border border-accent/20 rounded-full ml-2 hover:bg-accent hover:text-white' : 'text-text-muted hover:text-text-primary'
        }`}
    >
      {children}
      {!isCv && <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />}
    </motion.a>
  );
}

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <>
      <motion.div
        style={{ scaleX: useSpring(useScroll().scrollYProgress, { stiffness: 100, damping: 30 }) }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[60]"
      />

      <motion.header
        variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: "-100%", opacity: 0 } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
      >
        <div className="bg-bg-elevated/80 backdrop-blur-xl border border-border-strong shadow-diffuse rounded-full p-2 flex items-center gap-6 md:gap-10 pointer-events-auto">
          <a href="#" className="ml-1.5"><ArchitecturalLogo /></a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <MagneticNavLink key={link.name} href={link.href}>{link.name}</MagneticNavLink>
            ))}
            {/* THE CV ACCESS */}
            <MagneticNavLink href="/Harjas_Resume.pdf" isCv={true}>CV</MagneticNavLink>
          </nav>

          <div className="md:hidden flex items-center pr-4">
            <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-accent">Menu</span>
          </div>
        </div>
      </motion.header>
    </>
  );
}