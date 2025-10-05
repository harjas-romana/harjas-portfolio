import React from 'react';
import { motion } from 'framer-motion';

export default function Arsenal() {
  const categories = [
    { name: "Core Languages", tech: ["Java 21", "Python", "C++", "JavaScript", "Node.js", "SQL"] },
    { name: "Backend & Systems", tech: ["Spring Boot", "Microservices", "REST APIs", "Distributed Systems"] },
    { name: "Databases", tech: ["MySQL", "MongoDB", "Redis", "ChromaDB"] },
    { name: "Cloud & DevOps", tech: ["AWS Architecture", "Docker", "CI/CD", "GitHub Actions"] }
  ];

  return (
    <section className="relative w-full mx-auto px-6 lg:px-12 py-32 border-t border-arctic-border dark:border-dark-border overflow-hidden transition-colors">
      
      <div className="mb-24 flex items-center gap-4">
        <span className="font-jet text-sm font-bold text-arctic-primary dark:text-dark-primary">[04]</span>
        <h2 className="font-space text-3xl font-bold tracking-tight text-arctic-primary dark:text-dark-primary m-0 uppercase">TECHNICAL ARSENAL</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-arctic-border dark:border-dark-border">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
            className={`flex flex-col p-8 lg:p-10 ${idx < categories.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''} border-arctic-border dark:border-dark-border`}
          >
            <h3 className="font-space text-xl font-black text-arctic-primary dark:text-dark-primary uppercase tracking-tighter mb-8">
              {cat.name}
            </h3>
            
            <div className="flex flex-col gap-4">
              {cat.tech.map((t, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-1.5 h-1.5 bg-arctic-primary dark:bg-dark-primary group-hover:bg-arctic-accent transition-colors"></div>
                  <span className="font-jet text-sm text-arctic-secondary dark:text-dark-secondary group-hover:text-arctic-primary dark:group-hover:text-dark-primary font-bold uppercase tracking-widest transition-colors">
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
