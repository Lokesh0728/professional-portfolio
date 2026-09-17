import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatWidget from './components/Chatbot/ChatWidget'

const App = () => {
  return (
    <main className="w-full min-h-screen bg-black">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      {/* AI Chatbot Widget — floats above all content */}
      <ChatWidget />
    </main>
  )
}

export default App
