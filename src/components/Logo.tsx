interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}logo1.png`}
        alt="Soluna"
        className="h-10 w-auto"
      />
    </div>
  );
}

export function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}favicon1.png`}
      alt="Soluna"
      className={className}
    />
  );
}
