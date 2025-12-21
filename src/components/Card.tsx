interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8
        border border-lavender-300/50
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/90' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function IconCard({ icon, title, description, className = '' }: IconCardProps) {
  return (
    <Card className={className}>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-sunrise-400/20 to-plum-500/20">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{title}</h3>
        <p className="text-navy-800/70 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
