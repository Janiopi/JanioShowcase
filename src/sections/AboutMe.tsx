import {Card} from '../components/Card';

export function AboutMe() {
    const profileImage = "/assets/LiterallyMe.jpeg"; // Asegúrate de que la ruta sea correcta
    const Labels = [
        {
            icon: "🎓",
            label: "Student",
            value: "Computer Science"
        },
        {
            icon: "💻",
            label: "Developer",
            value: "Web Technologies"
        },
        {
            icon: "🚀",
            label: "Passionate",
            value: "Digital Innovation"
        }

    ]

    return (
        <section className="max-w-4xl mx-auto py-16 px-6 animate-fade-in">
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-600">
                {/* Layout responsive: columna en móvil, fila en desktop */}
                <div className="flex flex-row md:flex-col items-center md:items-start justify-between mb-8 gap-6 md:gap-8">
                    {/* Texto */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Janio Zapata
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-blue-400 mb-6 font-semibold">Web Developer</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto md:mx-0"></div>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mt-4">
                            Hello there! I'm Janio, a passionate <span className="font-semibold text-blue-400">Peruvian computer science student</span> 
                            {" "}who is deeply passionate about web development and creating amazing digital experiences.
                        </p>
                    </div>
                    
                    {/* Imagen - Tamaño más grande y responsive */}
                    <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-20 md:h-20 overflow-hidden rounded-full shadow-xl border-4 border-blue-400 hover:border-purple-400 transition-all duration-300 hover:scale-105">
                            <img 
                                className="w-full h-full object-cover" 
                                src={profileImage} 
                                alt="Janio Zapata - Web Developer" 
                            />
                        </div>
                    </div>
                </div>
                
                <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        {Labels.map((item,index)   => (
                            <Card 
                                key={index}
                                icon={item.icon}
                                label={item.label}
                                value={item.value}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}