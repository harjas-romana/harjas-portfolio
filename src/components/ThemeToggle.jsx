import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed top-6 right-6 z-[100] w-12 h-12 flex items-center justify-center border border-arctic-border dark:border-dark-border bg-arctic-surface dark:bg-dark-surface text-arctic-primary dark:text-dark-primary hover:border-arctic-accent hover:text-arctic-accent transition-all duration-300"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
}
