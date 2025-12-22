import { ScrollReveal } from './ScrollAnimations';

const problems = [
  {
    icon: (
      <svg className="w-8 h-8 text-magenta-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Sleep Data Makes Us Anxious',
    description: 'Obsessing over sleep metrics creates stress that actually worsens sleep quality.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Melatonin Is Damaging Our Bodies',
    description: 'Long-term melatonin use can disrupt your body\'s natural hormone production.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Current Tech Misses The Mark',
    description: 'Most sleep devices track problems but don\'t actually solve them for consumers.',
  },
];

export function Opportunity() {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-magenta-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-magenta-400 mb-4">
              The Opportunity
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-3xl mx-auto">
              Current sleep tech is approaching the problem all wrong.
            </h2>
            <p className="mt-5 text-lg md:text-xl text-lavender-300/80 leading-relaxed max-w-2xl mx-auto">
              The current solutions are making things worse:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problems list */}
          <div className="grid gap-6">
            {problems.map((problem, index) => (
              <ScrollReveal key={problem.title} delay={index * 150}>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
                  <div className="flex gap-5 items-start">
                    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white/10">
                      {problem.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-white mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-lavender-300/70 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Wake up image */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-magenta-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />
              </div>
              <img
                src={`${import.meta.env.BASE_URL}man-wake-up-1.webp`}
                alt="Man waking up refreshed"
                className="relative rounded-4xl shadow-2xl w-full"
              />
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-sm text-white font-medium">Imagine waking up refreshed</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
