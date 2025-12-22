import { ScrollReveal, AnimatedCounter } from './ScrollAnimations';

const achievements = [
  {
    value: 1000,
    suffix: "'s",
    label: 'Consumer Research Calls',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    value: 100,
    suffix: 'K+',
    label: 'Customers Surveyed Annually',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    value: 20,
    suffix: '+',
    label: 'Uniquely Designed Pending Patents',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function Mindset() {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-white/80 mb-4">
              Our Approach
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-4xl mx-auto">
              Consumer-centric approach that fast-tracks product–market fit
            </h2>
            <p className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              We have already done the research to build exactly what you need.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Nature image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-white/10 blur-3xl" />
              </div>
              <img
                src={`${import.meta.env.BASE_URL}woman-forest-1.webp`}
                alt="Woman in nature, reconnecting with natural rhythms"
                className="relative rounded-4xl shadow-2xl w-full"
              />
            </div>
          </ScrollReveal>

          {/* Stats grid */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 150}>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/20 text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-white/20 text-white">
                    {item.icon}
                  </div>
                  <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter
                      value={item.value}
                      suffix={item.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="font-sans text-white/80 text-sm lg:text-base">
                    {item.label}
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
