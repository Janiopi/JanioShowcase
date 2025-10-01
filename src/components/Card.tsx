interface CardProps {
  icon?: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
  image?: string;
  video?: string;
  imageAlt?: string;
  technologies?: string[];
}

export function Card({
  icon,
  label,
  value,
  image,
  video,
  imageAlt,
  technologies,
}: CardProps) {
  return (
    <div className="w-80 h-96 mx-4 text-center p-6 rounded-xl hover:bg-blue-600/30 transition-colors duration-300 border border-blue-500/50 background-color:red">
      {/* Media content - image or video */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg ">
          <img
            src={image}
            alt={imageAlt || label}
            className="w-25 h-25 object-cover hover:scale-101 transition-transform duration-300"
          />
        </div>
      )}

      {video && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <video
            src={video}
            className="w-full h-48 object-cover"
            controls
            preload="metadata"
          />
        </div>
      )}

      {/* Icon - only show if no image or video */}
      {!image && !video && icon && (
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
      )}

      <h3 className="text-lg font-bold text-white mb-2">{label}</h3>
      <p className="text-blue-300 text-sm font-medium">{value}</p>
      {technologies && (
        <div className="mt-4 flex flex-row justify-center flex-wrap px-10">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-blue-300 text-sm font-medium border px-2 py-1 rounded mx-2 my-1"
              style={{ margin: '4px' }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
