interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFB347"/>
            <stop offset="50%" stopColor="#FF8C42"/>
            <stop offset="100%" stopColor="#FF7AD9"/>
          </linearGradient>
          <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7AD9"/>
            <stop offset="100%" stopColor="#7B5CFF"/>
          </linearGradient>
        </defs>
        {/* Outer circle */}
        <circle cx="50" cy="50" r="45" fill="url(#sunGrad)"/>
        {/* Inner moon arc */}
        <circle cx="50" cy="55" r="28" fill="url(#moonGrad)"/>
        {/* White inner circle */}
        <circle cx="50" cy="45" r="18" fill="#FFFFFF" opacity="0.9"/>
        {/* Sun rays */}
        <g fill="#FFB347">
          <rect x="48" y="5" width="4" height="12" rx="2"/>
          <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(30 50 50)"/>
          <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(60 50 50)"/>
          <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(-30 50 50)"/>
          <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(-60 50 50)"/>
        </g>
      </svg>

      {/* Wordmark */}
      {showText && (
        <span className="font-sans text-xl font-bold tracking-widest text-plum-600">
          SOLUNA
        </span>
      )}
    </div>
  );
}

export function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sunGradIcon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFB347"/>
          <stop offset="50%" stopColor="#FF8C42"/>
          <stop offset="100%" stopColor="#FF7AD9"/>
        </linearGradient>
        <linearGradient id="moonGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7AD9"/>
          <stop offset="100%" stopColor="#7B5CFF"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#sunGradIcon)"/>
      <circle cx="50" cy="55" r="28" fill="url(#moonGradIcon)"/>
      <circle cx="50" cy="45" r="18" fill="#FFFFFF" opacity="0.9"/>
      <g fill="#FFB347">
        <rect x="48" y="5" width="4" height="12" rx="2"/>
        <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(30 50 50)"/>
        <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(60 50 50)"/>
        <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(-30 50 50)"/>
        <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(-60 50 50)"/>
      </g>
    </svg>
  );
}
