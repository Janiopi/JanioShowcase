interface CardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}


export function Card({ icon, label, value }: CardProps) {
    return (
        <div className="text-center p-6 bg-blue-600/20 rounded-xl hover:bg-blue-600/30 transition-colors duration-300 border border-blue-500/50">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{label}</h3>
                    <p className="text-blue-300 text-sm font-medium">{value}</p>
            </div>
    )
}