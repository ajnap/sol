interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-to-b from-magenta-500 to-sunrise-400 text-white hover:from-magenta-400 hover:to-sunrise-300 focus:ring-magenta-500 shadow-lg shadow-magenta-500/25 hover:shadow-xl hover:shadow-magenta-500/30 hover:-translate-y-0.5',
    secondary: 'bg-violet-500 text-white hover:bg-violet-400 focus:ring-violet-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    outline: 'border-2 border-white/80 text-white hover:bg-white/10 focus:ring-white/50 backdrop-blur-sm',
    gradient: 'bg-gradient-to-r from-magenta-500 via-violet-500 to-cyan-500 text-white hover:from-magenta-400 hover:via-violet-400 hover:to-cyan-400 focus:ring-violet-500 shadow-lg shadow-violet-500/25 hover:shadow-xl hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
