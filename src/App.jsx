import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/Chatbot/ChatWidget'
import HireModal from './components/HireModal'

const App = () => {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black text-white relative selection:bg-red-500/30 selection:text-white">
      {/* Sticky / Fixed Navigation Bar */}
      <Navbar onOpenHireModal={() => setIsHireModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenHireModal={() => setIsHireModalOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Luxury Hire Me Modal */}
      <HireModal 
        isOpen={isHireModalOpen} 
        onClose={() => setIsHireModalOpen(false)} 
      />

      {/* AI Chatbot Widget — floats above all content */}
      <ChatWidget />
    </div>
  )
}

export default App
