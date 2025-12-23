import { ScrollReveal, AnimatedCounter } from './ScrollAnimations';
import { Button } from './Button';

const stats = [
  {
    value: 1148,
    label: 'Initial Beta Pre-orders',
    description: 'Early believers already on board',
  },
  {
    value: 9784,
    label: 'Users Wanting Beta',
    description: 'Waiting for their Soluna',
  },
];

export function Traction() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-padding bg-navy-900">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text & Stats */}
            <div>
              <ScrollReveal>
                <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-magenta-400 mb-4">
                  Sleep Solution
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
                  Soluna is the first{' '}
                  <span className="bg-gradient-to-r from-magenta-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    a.i. enabled
                  </span>{' '}
                  sleep guide
                </h2>
              </ScrollReveal>

              <div className="space-y-8 mt-10">
                {stats.map((stat, index) => (
                  <ScrollReveal key={stat.label} delay={index * 150}>
                    <div className="flex items-baseline gap-4">
                      <div className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-magenta-400 to-violet-400 bg-clip-text text-transparent">
                        <AnimatedCounter value={stat.value} duration={2500} />
                      </div>
                      <div>
                        <div className="font-sans font-semibold text-white text-lg">
                          {stat.label}
                        </div>
                        <div className="font-sans text-sm text-lavender-300/70">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Device & CTA */}
            <ScrollReveal direction="right">
              <div className="flex flex-col items-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-magenta-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />
                  </div>

                  {/* Device - smaller */}
                  <img
                    src={`${import.meta.env.BASE_URL}Front-Clock-with-background-removebg-preview.png`}
                    alt="Soluna smart sleep device"
                    className="relative w-full max-w-xs mx-auto drop-shadow-2xl"
                  />
                </div>

                {/* Reserve Button */}
                <Button size="lg" className="px-10">
                  Reserve Launch Invite
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
