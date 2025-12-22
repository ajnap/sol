import { SectionTitle } from './SectionTitle';
import { ScrollReveal } from './ScrollAnimations';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-magenta-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Scent',
    description: '2 scent pods with a morning scent and a night-time scent to signal your body\'s natural rhythms.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-sunrise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Light',
    description: 'Light that simulates sunrise and sunset, training your circadian rhythm naturally.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Sound',
    description: 'Sound design scientifically proven to increase natural melatonin production.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Temperature',
    description: 'Connect Soluna with your smart thermostat and it will automatically change the temperature.',
  },
];

const additionalFeatures = [
  {
    icon: (
      <svg className="w-6 h-6 text-magenta-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Environment Control',
    description: 'Using proprietary AI software and on-board computer, Soluna will optimize your room for sleep.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Constantly Learning',
    description: 'Leverages data from onboard sensors and wearables to hack your sleep.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Custom Phone App',
    description: 'We make the experience light and fun so you don\'t have to do anything but sleep.',
  },
];

export function Solution() {
  return (
    <section id="solution" className="relative overflow-hidden">
      {/* Gradient bar top */}
      <div className="h-1 bg-gradient-bar" />

      <div className="section-padding bg-lavender-200">
        <div className="container-width">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Our Solution"
              title="Reconnect with natural sleep cues"
              subtitle="Humans have lost connection to all the cues that tell them to fall asleep. We reconnect you with the things that used to tell your body to go to sleep."
            />
          </ScrollReveal>

          {/* Main 4 features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-lavender-300/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-white/90 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-magenta-500/10 via-violet-500/10 to-cyan-500/10">
                      {feature.icon}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{feature.title}</h3>
                    <p className="text-navy-800/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional features */}
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={(index + 4) * 100}>
                <div className="flex gap-4 items-start bg-white/50 rounded-2xl p-6 border border-lavender-300/30 h-full transition-all duration-300 hover:bg-white/70 hover:shadow-lg">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-magenta-500/10 to-violet-500/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-navy-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-navy-800/70 leading-relaxed">{feature.description}</p>
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
