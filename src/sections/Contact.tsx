import { Card } from "../components/Card"

export function Contact() {
    const contactMethods = [
        {
            icon: "📧",
            label: "Email",
            value: "janio.zapata@email.com",
            link: "mailto:janio.zapata@email.com"
        },
        {
            icon: "💼",
            label: "LinkedIn",
            value: "linkedin.com/in/janiozapata",
            link: "https://linkedin.com/in/janiozapata"
        },
        {
            icon: "🐙",
            label: "GitHub",
            value: "github.com/janiozapata",
            link: "https://github.com/janiozapata"
        }
    ]

    return (
        <section className="max-w-4xl mx-auto py-16 px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    I'd love to hear from you! Whether you have a project in mind or just want to chat about web development
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                    <Card
                        key={index}
                        icon={method.icon}
                        label={method.label}
                        value={method.value}
                    />
                ))}
            </div>

            <div className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-600">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
                    <p className="text-gray-200 mb-6 leading-relaxed">
                        I'm always open to discussing new opportunities, interesting projects, 
                        or just having a conversation about web development and technology.
                    </p>
                    <a 
                        href="mailto:janio.zapata@email.com"
                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <span className="mr-2">📨</span>
                        Send me a message
                    </a>
                </div>
            </div>
        </section>
    )
}