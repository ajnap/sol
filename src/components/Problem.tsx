import { SectionTitle } from './SectionTitle';
import { ScrollReveal, AnimatedCounter } from './ScrollAnimations';

const stats = [
  {
    value: 70,
    suffix: 'M',
    label: 'Have Insomnia',
    description: 'Americans struggling to sleep',
  },
  {
    value: 43,
    suffix: 'M',
    label: 'Have Sleep Apnea',
    description: 'Undiagnosed or untreated',
  },
  {
    value: 30,
    suffix: '%',
    label: 'Sleep Deprived',
    description: 'Of the U.S. population',
  },
  {
    value: 411,
    prefix: '$',
    suffix: 'B',
    label: 'Annual Cost',
    description: 'Economic impact to the U.S.',
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden">
      {/* Gradient bar top */}
      <div className="h-1 bg-gradient-bar" />

      <div className="section-padding bg-lavender-200">
        <div className="container-width">
          <ScrollReveal>
            <SectionTitle
              eyebrow="The Sleep Crisis"
              title="Bad sleep is an epidemic."
              subtitle="The Center for Disease Control has declared insufficient sleep a public health problem affecting millions of Americans."
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 150}>
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-lavender-300/50 text-center h-full">
                  <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-magenta-500 to-violet-500 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="font-sans font-semibold text-navy-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="font-sans text-sm text-navy-800/60">
                    {stat.description}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
