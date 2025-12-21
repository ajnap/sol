import { Button } from './Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-lavender-100 via-lavender-200 to-lavender-200">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sunrise-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-plum-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-width section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-sunrise-500 mb-6 animate-fade-in">
              Introducing Soluna
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-navy-900 leading-[1.1] mb-6 animate-fade-in-up">
              Meet the World's{' '}
              <span className="gradient-text">Smartest</span>{' '}
              Sleep Companion
            </h1>

            <p className="text-lg md:text-xl text-navy-800/80 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              Transform your nights with AI-powered sleep optimization.
              Soluna harmonizes light, sound, scent, and temperature to
              guide you into deeper, more restorative rest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <Button variant="primary" size="lg" href="#reserve">
                Reserve Your Soluna
              </Button>
              <Button variant="outline" size="lg" href="#how-it-works">
                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-lavender-300/50 animate-fade-in animation-delay-600">
              <p className="text-sm text-navy-800/60 mb-4">Trusted by sleep researchers worldwide</p>
              <div className="flex items-center justify-center lg:justify-start gap-8 opacity-60">
                <span className="font-sans font-semibold text-navy-800">Stanford Sleep Lab</span>
                <span className="font-sans font-semibold text-navy-800">MIT Media Lab</span>
                <span className="font-sans font-semibold text-navy-800">Mayo Clinic</span>
              </div>
            </div>
          </div>

          {/* Device image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-sunrise-400/30 blur-3xl animate-glow-pulse" />
              </div>

              {/* Device image */}
              <img
                src="/Front-Clock-with-background.webp"
                alt="Soluna sleep device - a spherical smart device with glass dome and digital clock display"
                className="relative z-10 w-72 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-navy-800/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
