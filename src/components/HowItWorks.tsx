import { SectionTitle } from './SectionTitle';
import { IconCard } from './Card';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-sunrise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Adaptive Light',
    description: 'Circadian-aligned light therapy that gradually dims at night and simulates sunrise in the morning, training your body\'s natural sleep-wake cycle.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-plum-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Personalized Sound',
    description: 'AI-curated soundscapes including white noise, binaural beats, and nature sounds that adapt in real-time based on your sleep patterns.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-sunrise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Calming Scent',
    description: 'Precision-diffused aromatherapy with sleep-promoting essential oils like lavender and chamomile, released at the optimal moments of your sleep cycle.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-plum-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Smart Temperature',
    description: 'Gentle thermal regulation that cools your environment for sleep onset and gradually warms you before wake time for natural, refreshed mornings.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-lavender-200">
      <div className="container-width">
        <SectionTitle
          eyebrow="The Science of Better Sleep"
          title="Four Pillars of Perfect Rest"
          subtitle="Soluna orchestrates the essential elements your body needs for truly restorative sleep, all personalized to your unique biology."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <IconCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        {/* Connection visual */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 text-navy-800/40">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-sunrise-400/50" />
            <span className="font-sans text-sm tracking-wider uppercase">Synchronized by AI</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-plum-500/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
