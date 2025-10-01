import { Card } from '../components/Card';

interface Project {
  title: string;
  description: string;
  technologies?: string[];
}

interface ShowcaseProps {
  projects: Project[];
  sectionTitle?: string;
}

export function Showcase({ projects, sectionTitle }: ShowcaseProps) {
  return (
    <div className="border flex flex-col transition-all duration-300 hover:scale-101">
      {sectionTitle && <h2 className="text-center"> {sectionTitle}</h2>}
      {projects.map((project, index) => {
        return (
          <Card
            key={index}
            label={project.title}
            value={project.description}
            technologies={project.technologies}
          />
        );
      })}
    </div>
  );
}
