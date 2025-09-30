import { Card } from '../components/Card';
import { ContactCard } from '../components/ContactCard';

export function AboutMe() {
  const profileImage = '/assets/LiterallyMe.jpeg';
  const imageGithub = '/assets/github.png';
  const imageLinkedin = '/assets/linkedin.png';
  const imageEmail = '/assets/mail.png';

  const contactMethods = [
    {
      image: imageEmail,
      label: 'Email',
      link: 'mailto:janio.zapata.i@uni.pe',
    },
    {
      image: imageLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/janio-zapata-inga-65744832a/',
    },
    {
      image: imageGithub,
      label: 'GitHub',
      link: 'https://github.com/Janiopi',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-32 px-8 animate-fade-in">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-600 ">
        {/* Layout responsive: columna en móvil, fila en desktop */}
        <h1 className="text-2xl font-bold mb-4 text-center">
          Let's create digital experiences together!
        </h1>
        <p className="text-gray-300 text-xl leading-relaxed text-center mb-8">
          Hello there. I'm <strong>Janio Zapata</strong>, a guy who likes
          building things software. Currently I'm studying{' '}
          <strong>Computer Science</strong> at{' '}
          <strong>Universidad Nacional de Ingeniería</strong>, Perú.
          <br />
          Also I'm a member of{' '}
          <a
            href="https://acecom.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            ACECOM
          </a>
          , a student association from Faculty of Science.
        </p>
      </div>
      <div className="flex items-center justify-center mt-8 gap-10">
        <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 rounded-full border-4 border-blue-500"
        />
        <p className="text-xl text-gray-300 font-semibold">This is me! :D</p>
      </div>
      <div className="flex flex-col justify-center items-center mt-12 border border-gray-600">
        <p>
          I'm currently looking for opportunities to collaborate on exciting
          projects and learn more! So feel free to contact me{' '}
        </p>
        <div className="flex flex-row justify-center gap-12 mb-10">
          {contactMethods.map((method, index) => (
            <ContactCard
              key={index}
              image={method.image}
              label={method.label}
              link={method.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
