interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
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
    primary: 'bg-sunrise-500 text-white hover:bg-sunrise-600 focus:ring-sunrise-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'bg-plum-600 text-white hover:bg-plum-700 focus:ring-plum-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    outline: 'border-2 border-plum-600 text-plum-600 hover:bg-plum-600 hover:text-white focus:ring-plum-600',
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
