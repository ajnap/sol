interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = ''
}: SectionTitleProps) {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignmentClasses} ${className}`}>
      {eyebrow && (
        <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-sunrise-500 mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg md:text-xl text-navy-800/70 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
