type Section = 'about' | 'projects' | 'contact' | 'skills'

interface HeaderProps {
  activeSection: Section
  onSectionChange: (section: Section) => void
}

interface NavItemProps {
  section: Section
  activeSection: Section
  onSectionChange: (section: Section) => void
  children: React.ReactNode
}

function NavItem({ section, activeSection, onSectionChange, children }: NavItemProps) {
  const isActive = section === activeSection
  
  return (
    <button 
      className={`
        text-lg md:text-xl font-medium cursor-pointer 
        transition-all duration-200 hover:text-blue-400 
        px-3 py-2 rounded-lg hover:bg-gray-700
        ${isActive 
          ? 'text-blue-400 font-semibold bg-gray-700' 
          : 'text-gray-200'
        }
      `}
      onClick={() => onSectionChange(section)}
    >
      {children}
    </button>
  )
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-lg border-b border-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:justify-around">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            PORTAFOLIO
          </h1>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem section="about" activeSection={activeSection} onSectionChange={onSectionChange}>
              About me
            </NavItem>
            
            <NavItem section="projects" activeSection={activeSection} onSectionChange={onSectionChange}>
              Projects
            </NavItem>
            
            <NavItem section="contact" activeSection={activeSection} onSectionChange={onSectionChange}>
              Contact
            </NavItem>
            
            <NavItem section="skills" activeSection={activeSection} onSectionChange={onSectionChange}>
              Skills
            </NavItem>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-200 hover:text-blue-400">
            ☰
          </button>
        </div>
        
        {/* Mobile navigation */}
        <nav className="md:hidden pb-4 space-y-2">
          <NavItem section="about" activeSection={activeSection} onSectionChange={onSectionChange}>
            About me
          </NavItem>
          <NavItem section="projects" activeSection={activeSection} onSectionChange={onSectionChange}>
            Projects
          </NavItem>
          <NavItem section="contact" activeSection={activeSection} onSectionChange={onSectionChange}>
            Contact
          </NavItem>
          <NavItem section="skills" activeSection={activeSection} onSectionChange={onSectionChange}>
            Skills
          </NavItem>
        </nav>
      </div>
    </header>
  )
}