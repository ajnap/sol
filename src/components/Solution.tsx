import { SectionTitle } from './SectionTitle';
import { ScrollReveal } from './ScrollAnimations';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Light',
    description: 'Uses specific wavelengths to stimulate the natural effects of sunsets at night and sunrises in the morning.',
    bgColor: 'bg-gradient-to-br from-sunrise-400 to-sunrise-500',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Sound',
    description: 'Uses a library of science-backed sounds that help reduce stress at night and naturally increase alertness in the morning.',
    bgColor: 'bg-gradient-to-br from-violet-400 to-violet-600',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Taste',
    description: 'Sleep powder uses taste as a gentle signal to relax, with calming herbs that support your natural sleep rhythm.',
    bgColor: 'bg-gradient-to-br from-magenta-400 to-magenta-600',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Scent',
    description: 'Scent pods release unique and pleasant scents that activate natural sleep and waking areas of the brain.',
    bgColor: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Temperature',
    description: 'Connects to your smart thermostat to recreate natural, ideal sleeping and waking conditions.',
    bgColor: 'bg-gradient-to-br from-violet-500 to-cyan-500',
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

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Device image */}
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-magenta-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />
                </div>
                <img
                  src={`${import.meta.env.BASE_URL}woman-bedroom-2-close-up.webp`}
                  alt="Soluna device glowing warmly on a nightstand"
                  className="relative rounded-4xl shadow-2xl w-full"
                />
              </div>
            </ScrollReveal>

            {/* Features list */}
            <div className="order-1 lg:order-2 space-y-4">
              {features.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={index * 100} direction="right">
                  <div className="flex gap-4 items-start bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-lavender-300/50 transition-all duration-300 hover:bg-white/80 hover:shadow-lg hover:-translate-x-1">
                    <div className={`w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl ${feature.bgColor} shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-navy-900 mb-1">{feature.title}</h3>
                      <p className="text-navy-800/70 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
