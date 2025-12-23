import { ScrollReveal } from './ScrollAnimations';

export function AppControl() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width phone image with overlay */}
      <div className="relative min-h-[400px] md:h-[600px] lg:h-[700px]">
        {/* Background image - positioned to the right on desktop, centered on mobile */}
        <img
          src={`${import.meta.env.BASE_URL}hand-mockup-phone.webp`}
          alt="Soluna app on phone"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-right"
        />

        {/* Gradient overlay - stronger on mobile for readability */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/40 md:from-navy-900/80 md:via-navy-900/50 md:to-transparent" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-width">
            <ScrollReveal direction="left">
              <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left px-4 md:px-0">
                <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-magenta-400 mb-4">
                  The App
                </span>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4 md:mb-6">
                  <span className="bg-gradient-to-r from-magenta-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    Control
                  </span>{' '}
                  is in your hands
                </h2>
                <p className="text-base md:text-xl text-white/80 leading-relaxed">
                  Personalize your sleep experience, track your progress, and let AI optimize your environment—all from your phone.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
