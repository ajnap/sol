import { SectionTitle } from './SectionTitle';

const stats = [
  {
    value: '70M',
    label: 'Have Insomnia',
    description: 'Americans struggling to sleep',
  },
  {
    value: '43M',
    label: 'Have Sleep Apnea',
    description: 'Undiagnosed or untreated',
  },
  {
    value: '30%',
    label: 'Sleep Deprived',
    description: 'Of the U.S. population',
  },
  {
    value: '$411B',
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
          <SectionTitle
            eyebrow="The Sleep Crisis"
            title="Bad sleep is an epidemic."
            subtitle="The Center for Disease Control has declared insufficient sleep a public health problem affecting millions of Americans."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-lavender-300/50 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-magenta-500 to-violet-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="font-sans font-semibold text-navy-900 mb-1">
                  {stat.label}
                </div>
                <div className="font-sans text-sm text-navy-800/60">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
