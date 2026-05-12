import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from 'framer-motion';

// ─── SPRING CONFIGS ───────────────────────────────────────────
export const SPRING = {
  heavy: { type: "spring", damping: 30, stiffness: 100, mass: 1.5 },
  snappy: { type: "spring", damping: 20, stiffness: 300, mass: 0.8 },
  smooth: { type: "spring", damping: 40, stiffness: 90, mass: 1.2 },
  magnetic: { damping: 15, stiffness: 150, mass: 0.1 },
  magneticHeavy: { damping: 20, stiffness: 100, mass: 0.5 },
};

// ─── HOOKS ────────────────────────────────────────────────────

export function useMagnetic(strength = 0.1, springConfig = SPRING.magnetic) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    x.set((e.clientX - center.x) * strength);
    y.set((e.clientY - center.y) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, handleMouseMove, handleMouseLeave };
}

// ─── SHARED COMPONENTS ───────────────────────────────────────

export function LineReveal({
  children,
  delay = 0,
  className = "",
  once = true,
  as = "div",
}) {
  const Tag = motion[as] || motion.div;
  return (
    <div className={`overflow-hidden ${className}`}>
      <Tag
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once, margin: "-80px" }}
        transition={{ ...SPRING.heavy, delay }}
      >
        {children}
      </Tag>
    </div>
  );
}

export function SectionHeading({ title, index, className = "" }) {
  const figNum = String(index).padStart(2, '0');
  return (
    <div className={`mb-16 md:mb-20 ${className}`}>
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={SPRING.heavy}
          className="flex items-center gap-4"
        >
          <span className="text-[10px] font-mono text-text-muted tracking-widest">
            FIG.{figNum}
          </span>
          <span className="w-8 h-[1px] bg-accent" />
          <span className="text-xs md:text-sm font-mono text-accent tracking-widest uppercase font-bold">
            {title}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export function MagneticWrapper({
  children,
  className = "",
  strength = 0.05,
  springConfig = SPRING.magneticHeavy,
  as = "div",
}) {
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } =
    useMagnetic(strength, springConfig);
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </Tag>
  );
}
