interface CardProps {
  label: string;
  image?: string;

  link?: string;
}

export function ContactCard({ image, label, link }: CardProps) {
  return (
    <div className="text-center">
      <h3 className="text-1xl font-bold text-white mb-3">{label}</h3>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        {image && (
          <img src={image} alt={label} className="w-2 h-2 mr-2 rounded" />
        )}
      </a>
    </div>
  );
}
