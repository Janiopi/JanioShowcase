import { Card } from '../components/Card';

export function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description:
        'A personal website to showcase my work, skills and a little about me (The one you are seeing right now and currently in progress)',
    },
    {
      title: 'Academic Blog',
      description:
        'A blog platform, similar to StackOverflow, where students can share and help each other. I was in charge of the backend.',
    },
    {
      title: 'Coming Soon :)',
      description: 'Stay tuned for more',
    },
  ];

  const contributions = [
    {
      title: 'Acecom Website',
      description:
        "I'm part of the web development area of Acecom. So during my time there, I've made some contributions to the website.",
    },
    {
      title: 'Chasqui 2 Website',
      description:
        'Chasqui 2 is a student organization from Universidad Nacional de Ingeniería, Perú. As part of the Acecom team, we contributed to their website. (Currently in progress)',
    },
    {
      title: 'MecaManager',
      description:
        'A system management for a car repair shop. I made contributions to the backend.',
    },
    {
      title: 'Open for Contributions',
      description:
        'I would love to contribute to other projects, feel free to reach me out!',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-6xl md:text-6xl font-bold text-white mb-4">
          My Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on that showcase my
          development skills
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} label={project.title} value={project.description} />
        ))}
      </div>

      <div className="text-center mb-12">
        <h2 className="text-6xl md:text-6xl font-bold text-white mb-4">
          Contributions
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Some other projects I've contributed in.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contributions.map((project, index) => (
          <Card key={index} label={project.title} value={project.description} />
        ))}
      </div>
    </section>
  );
}
