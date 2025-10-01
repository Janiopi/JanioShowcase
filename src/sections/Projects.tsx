import { Showcase } from '../components/Showcase';

export function Projects() {
  const Showcase1 = {
    projects: [
      {
        title: 'Personal Portfolio',
        description:
          'A personal website to showcase my work, skills and a little about me (The one you are seeing right now and currently in progress)',
        technologies: ['React', 'Tailwind'],
      },
      {
        title: 'Academic Blog',
        description:
          'A blog platform, similar to StackOverflow, where students can share and help each other. I was in charge of the backend.',
        technologies: ['Express', 'PostgresSQL', 'Node.js'],
      },
      {
        title: 'Coming Soon :)',
        description: 'Stay tuned for more',
      },
    ],
    sectionTitle: 'My Projects',
  };

  const Showcase2 = {
    projects: [
      {
        title: 'Acecom Website',
        description:
          "I'm part of the web development area of Acecom. So during my time there, I've made some contributions to the website.",
        technologies: ['Remix', 'Prisma'],
      },
      {
        title: 'Chasqui 2 Website',
        description:
          'Chasqui 2 is a student organization from Universidad Nacional de Ingeniería, Perú. As part of the Acecom team, we contributed to their website. (Currently in progress)',
        technologies: ['Remix', 'Supabase'],
      },
      {
        title: 'MecaManager',
        description:
          'A system management for a car repair shop. I made contributions to the backend.',
        technologies: ['Spring Boot'],
      },
      {
        title: 'Open for Contributions',
        description:
          'I would love to contribute to other projects, feel free to reach me out!',
      },
    ],
    sectionTitle: 'Contributions',
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-6 animate-fade-in">
      <div className="flex flex-row justify-center mb-12">
        <Showcase {...Showcase1} />
        <Showcase {...Showcase2} />
      </div>
    </section>
  );
}
