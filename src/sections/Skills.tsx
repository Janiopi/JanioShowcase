import { ContactCard } from '../components/ContactCard';
import { Card } from '../components/Card';

export function Skills() {
  const imageGit = '/assets/git.png';
  const imageDocker = '/assets/docker.png';
  const imageJavaScript = '/assets/JavaScript.png';
  const imagePrimsa = '/assets/prism.png';
  const imageReact = '/assets/React.png';
  const imageSpring = '/assets/springboot_logo_icon_249540.png';
  const imageExpress = '/assets/express-js.png';
  const imagePostgres = '/assets/postgre.png';

  const FrontendCategories = [
    {
      label: 'React',
      image: imageReact,
    },
    {
      label: 'JavaScript',
      image: imageJavaScript,
    },
  ];

  const BackendCategories = [
    {
      label: 'Prisma',
      image: imagePrimsa,
    },
    {
      label: 'Spring Boot',
      image: imageSpring,
    },
    {
      label: 'Express.js',
      image: imageExpress,
    },
    {
      label: 'PostgreSQL',
      image: imagePostgres,
    },
  ];

  const ToolsCategories = [
    {
      label: 'Git',
      image: imageGit,
    },
    {
      label: 'Docker',
      image: imageDocker,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">My Skills</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A look at the technologies I've been working with recently and how I
          use them
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="mb-12 bg-gray-800 p-6 rounded-xl border border-gray-600">
        <Card label="Frontend" value="I'm not that good at this, ngl" />
        <div className="flex items-center align-middle justify-evenly gap-12 mb-12">
          {FrontendCategories.map((category, index) => (
            <ContactCard
              key={index}
              label={category.label}
              image={category.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-12 bg-gray-800 p-6 rounded-xl border border-gray-600">
        <Card label="Backend" value="I like this one :)" />
        <div className="flex items-center align-middle justify-evenly gap-12 mb-12">
          {BackendCategories.map((category, index) => (
            <ContactCard
              key={index}
              label={category.label}
              image={category.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-12 bg-gray-800 p-6 rounded-xl border border-gray-600">
        <Card
          label="Others"
          value="I really like team work and learning new things!"
        />
        <div className="flex items-center align-middle justify-evenly gap-12 mb-12">
          {ToolsCategories.map((category, index) => (
            <ContactCard
              key={index}
              label={category.label}
              image={category.image}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-300 mb-4">
          Always eager to learn and improve my existing skills. Any feedback is
          welcome!
        </p>
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold">
          <span> {':)'} </span>
        </div>
      </div>
    </section>
  );
}
