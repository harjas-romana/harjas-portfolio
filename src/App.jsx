import React from 'react'
import Background from './components/Background'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Experience from './components/Experience'
import ProjectsGrid from './components/ProjectsGrid'
import Arsenal from './components/Arsenal'
import AcademicRigor from './components/AcademicRigor'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-arctic-bg dark:bg-dark-bg text-arctic-primary dark:text-dark-primary transition-colors duration-400 selection:bg-arctic-accent selection:text-white">
      <Background />
      <ThemeToggle />
      <Hero />
      <Philosophy />
      <Experience />
      <ProjectsGrid />
      <Arsenal />
      <AcademicRigor />
      <Footer />
    </div>
  )
}

export default App
