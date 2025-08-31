import { ContactCard } from '../components/ContactCard';

export function Contact() {
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
    <section className="max-w-4xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Let's get in touch :)
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          I'd love to talk with you! Whether you have a project in mind or just
          want to talk about other cool stuff.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <ContactCard
            key={index}
            image={method.image}
            label={method.label}
            link={method.link}
          />
        ))}
      </div>

      <p className="text-center text-gray-300 max-w-2xl mx-auto">
        I'm currently open to new opportunities! If you have a project or
        collaboration in mind, feel free to reach out. Let's create something
        amazing together!
      </p>
    </section>
  );
}
