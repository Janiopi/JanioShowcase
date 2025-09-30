interface CardProps {
  label: string;
  image?: string;
  link?: string;
}

export function ContactCard({ image, label, link }: CardProps) {
  return (
    <div className="text-center flex-shrink-0  p-8 bg-gray-700/50 rounded-lg">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 text-black rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gray-100 hover:bg-blue-700"
      >
        {image && (
          <img src={image} alt={label} className="w-6 h-6 mr-2 rounded" />
        )}
        {label}
      </a>
    </div>
  );
}
