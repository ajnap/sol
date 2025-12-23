import { Button } from './Button';
import { useParallax } from '../hooks/useScrollAnimation';

export function Hero() {
  const parallaxOffset = useParallax(0.3);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container-width section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-white/80 mb-6 animate-fade-in">
              Introducing Soluna
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6 animate-fade-in-up">
              Reconnect With{' '}
              <span className="text-sunrise-300">Natural</span>{' '}
              Sleep
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              Humans have lost connection to all the cues that tell them to fall asleep.
              Soluna reconnects you with the things that used to tell your body to rest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <Button variant="primary" size="lg" href="#reserve">
                Reserve Your Soluna
              </Button>
            </div>
          </div>

          {/* Device image with parallax */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className="relative"
              style={{ transform: `translateY(${parallaxOffset}px)` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white/20 blur-3xl animate-glow-pulse" />
              </div>

              {/* Device image */}
              <img
                src={`${import.meta.env.BASE_URL}Front-Clock-with-background-removebg-preview.png`}
                alt="Soluna sleep device - a spherical smart device with glass dome and digital clock display"
                className="relative z-10 w-72 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#problem" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group animate-bounce">
        <span className="text-xs font-medium text-white/60 uppercase tracking-wider group-hover:text-white/80 transition-colors">
          Learn more
        </span>
        <svg className="w-6 h-6 text-white/60 group-hover:text-white/80 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
