
import { useState } from 'react'
import { Header } from './components/_index'
import { AboutMe, Contact, Projects, Skills } from './sections/_index'
import './App.css'

type Section = 'about' | 'projects' | 'contact' | 'skills'

function App() {
  const [activeSection, setActiveSection] = useState<Section>('about')

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      case 'skills':
        return <Skills />
      default:
        return <AboutMe />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="container mx-auto px-4 py-8">
        <div className="transition-all duration-500 ease-in-out">
          {renderSection()}
        </div>
      </main>
    </div>
  )
}

export default App
