import React from 'react'
import Background from './components/Background'
import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Experience from './components/Experience'
import Presence from './components/Presence'
import ProjectsGrid from './components/ProjectsGrid'
import Arsenal from './components/Arsenal'
import AcademicRigor from './components/AcademicRigor'
import Footer from './components/Footer'
import Leadership from './components/Leadership'

function App() {
  return (
    <div className="relative min-h-screen bg-arctic-bg dark:bg-dark-bg text-arctic-primary dark:text-dark-primary transition-colors duration-400 selection:bg-arctic-accent selection:text-white">
      
      {/* Layer 0: Environment */}
      <Background />
      
      {/* Layer 1: Global Navigation & Controls */}
      <Header />
      
      {/* I moved ThemeToggle to the top right, fixed, so it sits cleanly with the Header */}
      <div className="fixed top-4 right-6 lg:right-12 lg:top-5 z-[60]">
        <ThemeToggle />
      </div>

      {/* Layer 2: The Main Architectural Stack */}
      {/* Added IDs to wrappers so the Header routing works perfectly */}
      <main className="relative z-10 flex flex-col w-full">
        
        <div id="hero">
          <Hero />
        </div>
        
        <div id="philosophy">
          <Philosophy />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="projects">
          <ProjectsGrid />
        </div>
        <div id="presence">
          <Presence />
        </div>
        
        <div id="arsenal">
          <Arsenal />
        </div>

        <div id="leadership">
          <Leadership />
        </div>
        
        <div id="academics">
          <AcademicRigor />
        </div>

        

        
        
        <div id="footer">
          <Footer />
        </div>

      </main>
    </div>
  )
}

export default App