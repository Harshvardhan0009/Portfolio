import { useEffect, useRef, useState } from 'react'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Education   from './components/Education'
import Experience  from './components/Experience'
import Contact     from './components/Contact'
import Footer      from './components/Footer'
import BackToTop   from './components/BackToTop'
import Cursor      from './components/Cursor'
import WhyHireMe   from './components/WhyHireMe'
import SlashTransition from './components/SlashTransition'
import GlobalBackground from './components/GlobalBackground'

export default function App() {
  useEffect(() => {
    // Easter Egg: Press 'k' for Katana slash
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'k') {
         window.dispatchEvent(new Event('trigger-slash'))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="bg-bg-primary min-h-screen overflow-x-hidden relative">
      <GlobalBackground />
      <SlashTransition />
      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <WhyHireMe />
        <Education />
        <Experience />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <BackToTop />
    </div>
  )
}
