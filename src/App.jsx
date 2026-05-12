import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactLenis } from 'lenis/react';

/* Core Components */
import Header from './components/Header';
import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor'; // The New Precision Cursor
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import AcademicRigor from './components/AcademicRigor';
import ProjectsGrid from './components/ProjectsGrid';
import Arsenal from './components/Arsenal';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Presence from './components/Presence';
import Footer from './components/Footer';
import ResumePayload from './components/ResumePayload';

function App() {

  // --- JARVIS IDENTITY PROTOCOL (Easter Egg) ---
  useEffect(() => {
    let keys = "";
    const handleInput = (e) => {
      keys += e.key.toLowerCase();
      if (keys.endsWith("jarvis")) {
        // A subtle but powerful nod to your Agentic OS project
        console.log("IDENTITY VERIFIED: HELLO HARJAS.");
        window.open('https://github.com/harjas-romana', '_blank');
        keys = "";
      }
      if (keys.length > 10) keys = keys.substring(1);
    };
    window.addEventListener("keydown", handleInput);
    return () => window.removeEventListener("keydown", handleInput);
  }, []);


  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <AnimatePresence mode="wait">

          /* ─── PRODUCTION ENVIRONMENT ─── */
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full min-h-screen bg-bg-base selection:bg-accent selection:text-white"
        >
          <CustomCursor />
          <Header />

          <main id="smooth-content">
            {/* 1. The Entry Point */}
            <Hero />

            {/* 2. The Manifesto */}
            <Philosophy />

            {/* 3. The Evidence (Systems) */}
            <ProjectsGrid />

            {/* 4. The Toolkit */}
            <Arsenal />

            {/* 5. The Evolution (Professional) */}
            <Experience />

            {/* 6. The Command (Leadership) */}
            <Leadership />

            {/* 7. The Impact (Recognition) */}
            <Achievements />

            {/* 8. The Foundation (Academic) */}
            <AcademicRigor />

            {/* 9. The Closure */}
            <Presence />
          </main>

          <Footer />
        </motion.div>

      </AnimatePresence>
    </ReactLenis>
  );
}

export default App;