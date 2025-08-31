type Section = 'about' | 'projects' | 'contact' | 'skills';

interface HeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

interface NavItemProps {
  section: Section;
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  children: React.ReactNode;
}

function NavItem({
  section,
  activeSection,
  onSectionChange,
  children,
}: NavItemProps) {
  const isActive = section === activeSection;

  return (
    <button
      className={`
    text-sm md:text-lg lg:text-xl font-medium cursor-pointer 
        transition-all duration-200 hover:text-blue-400 
        px-2 md:px-3 py-2 rounded-lg hover:bg-gray-700
        whitespace-nowrap
        ${
          isActive ? 'text-blue-400 font-semibold bg-gray-700' : 'text-gray-200'
        }
      `}
      onClick={() => onSectionChange(section)}
    >
      {children}
    </button>
  );
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-lg border-b border-gray-600">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold  bg-clip-text py-3">
        PORTAFOLIO
      </h1>
      <div className="flex justify-center py-4">
        <div className="flex items-center justify-center space-x-2 md:space-x-4 lg:space-x-8">
          <nav className=" md:flex items-center space-x-8">
            <NavItem
              section="about"
              activeSection={activeSection}
              onSectionChange={onSectionChange}
            >
              About me
            </NavItem>

            <NavItem
              section="projects"
              activeSection={activeSection}
              onSectionChange={onSectionChange}
            >
              Projects
            </NavItem>

            <NavItem
              section="contact"
              activeSection={activeSection}
              onSectionChange={onSectionChange}
            >
              Contact
            </NavItem>

            <NavItem
              section="skills"
              activeSection={activeSection}
              onSectionChange={onSectionChange}
            >
              Skills
            </NavItem>
          </nav>
        </div>
      </div>
    </header>
  );
}
