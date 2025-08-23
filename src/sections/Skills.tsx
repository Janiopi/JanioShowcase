import { Card } from "../components/Card"

export function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3", "Tailwind CSS"],
            color: "blue",
            emoji: "🎨"
        },
        {
            title: "Backend", 
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "RESTful APIs"],
            color: "green",
            emoji: "⚙️"
        },
        {
            title: "Tools & Others",
            skills: ["Git", "VS Code", "Vite", "npm", "Responsive Design", "Agile"],
            color: "purple",
            emoji: "🛠️"
        }
    ]

    return (
        <section className="max-w-6xl mx-auto py-16 px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    A comprehensive overview of my technical skills and areas of expertise
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                    <Card 
                        key={index} 
                        icon={category.emoji} 
                        label={category.title} 
                        value={category.skills.join(", ")} 
                    />
                ))}
            </div>


            <div className="mt-12 text-center">
                <p className="text-lg text-gray-300 mb-4">
                    Always eager to learn new technologies and improve my existing skills
                </p>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold">
                    <span>🚀 Continuously Learning</span>
                </div>
            </div>
        </section>
    )
}