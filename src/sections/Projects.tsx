import {Card} from '../components/Card';

export function Projects() {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "A responsive portfolio website showcasing my skills and projects.",
            tech: ["React", "TypeScript", "Tailwind CSS"],
            emoji: "🌟"
        },
        {
            title: "Task Management App",
            description: "A full-stack application for managing daily tasks and productivity.",
            tech: ["React", "Node.js", "MongoDB"],
            emoji: "📋"
        },
        {
            title: "E-commerce Platform",
            description: "A modern e-commerce solution with payment integration and admin dashboard.",
            tech: ["Next.js", "Stripe", "PostgreSQL"],
            emoji: "🛒"
        }
    ]

    return (
        <section className="max-w-6xl mx-auto py-16 px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on that showcase my development skills
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} icon={project.emoji} label={project.title} value={project.description} />
                ))}
            </div>
        </section>
    )
}
          
