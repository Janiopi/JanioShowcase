type Section = 'about' | 'projects' | 'skills';

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
    <header className="sticky top-4 z-150 bg-green-800 shadow-lg mb-8 rounded-lg">
      <nav className="flex items-center justify-center py-6  gap-8">
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
          section="skills"
          activeSection={activeSection}
          onSectionChange={onSectionChange}
        >
          Skills
        </NavItem>
      </nav>
    </header>
  );
}
