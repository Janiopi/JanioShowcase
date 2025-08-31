import { Card } from '../components/Card';

export function AboutMe() {
  const profileImage = '/assets/LiterallyMe.jpeg'; // Asegúrate de que la ruta sea correcta

  return (
    <section className="max-w-4xl mx-auto py-16 px-6 animate-fade-in">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-600">
        {/* Layout responsive: columna en móvil, fila en desktop */}
        <div className=" items-center md:items-start justify-between mb-8 gap-6 md:gap-8">
          <Card
            icon=""
            label="About Me"
            value="Hello there! I'm Janio Zapata. Just a simple man that enjoys learning new things, sharing knowledge and helping others."
          />
          <Card
            icon=""
            label="Education"
            value={
              <>
                <strong>Universidad Nacional de Ingeniería</strong> - Computer
                Science Student.
                <br />
                Also part of <strong>ACECOM</strong>, a computer science student
                association from the Faculty of Science.
              </>
            }
          />
          <Card
            icon=""
            label="Interests"
            value="I'm currently into web development, but eager to learn more cool stuff like AI, image processing, computer graphics and more!"
          />
          <Card
            image={profileImage}
            label="Janio Zapata"
            value="Literally me!"
            imageAlt="Picture of Janio Zapata"
          />
        </div>
      </div>
    </section>
  );
}
