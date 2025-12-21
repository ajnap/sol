import { SectionTitle } from './SectionTitle';

const sleepStages = [
  {
    stage: 'Awake',
    time: '10:30 PM',
    description: 'Light dims, calming scent releases, temperature begins cooling',
    color: 'bg-sunrise-400',
    width: 'w-1/6',
  },
  {
    stage: 'Light Sleep',
    time: '10:45 PM',
    description: 'Soft soundscape fades in, guiding you into relaxation',
    color: 'bg-sunrise-500',
    width: 'w-1/5',
  },
  {
    stage: 'Deep Sleep',
    time: '11:30 PM',
    description: 'All systems optimize for maximum restoration',
    color: 'bg-plum-500',
    width: 'w-1/3',
  },
  {
    stage: 'REM Sleep',
    time: '2:00 AM',
    description: 'Environment maintains perfect conditions for dreaming',
    color: 'bg-plum-600',
    width: 'w-1/4',
  },
  {
    stage: 'Wake',
    time: '7:00 AM',
    description: 'Sunrise simulation and gentle warming begin',
    color: 'bg-sunrise-400',
    width: 'w-1/6',
  },
];

export function Science() {
  return (
    <section className="section-padding bg-gradient-to-b from-lavender-200 via-white to-lavender-100">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div>
            <SectionTitle
              eyebrow="Personalized Sleep Science"
              title="AI That Learns Your Sleep"
              subtitle="Soluna's neural engine analyzes your unique sleep patterns, adjusting all four modalities in real-time to optimize every stage of your night."
              align="left"
            />

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-sunrise-400/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-sunrise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-1">Continuous Learning</h3>
                  <p className="text-navy-800/70">Improves with every night, adapting to seasonal changes, stress levels, and lifestyle shifts.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-plum-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-plum-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-1">Sleep Stage Detection</h3>
                  <p className="text-navy-800/70">Non-invasive sensors detect sleep stages without wearables, making adjustments automatically.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-sunrise-400/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-sunrise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-1">Instant Optimization</h3>
                  <p className="text-navy-800/70">Real-time adjustments happen within seconds of detecting changes in your sleep state.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sleep timeline visual */}
          <div className="bg-white/60 backdrop-blur-sm rounded-4xl p-8 border border-lavender-300/50 shadow-xl">
            <h3 className="font-serif text-xl font-semibold text-navy-900 mb-8 text-center">
              Your Night with Soluna
            </h3>

            <div className="space-y-4">
              {sleepStages.map((stage, index) => (
                <div key={stage.stage} className="flex items-center gap-4">
                  <div className="w-20 text-right">
                    <span className="font-sans text-sm text-navy-800/60">{stage.time}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <div className={`h-3 rounded-full ${stage.color} ${stage.width}`} />
                      <span className="font-sans text-sm font-medium text-navy-900">{stage.stage}</span>
                    </div>
                    <p className="text-xs text-navy-800/50 pl-0">{stage.description}</p>
                  </div>
                  {index < sleepStages.length - 1 && (
                    <div className="hidden" />
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-8 pt-6 border-t border-lavender-200 flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sunrise-400" />
                <span className="text-xs text-navy-800/60">Transition</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-plum-500" />
                <span className="text-xs text-navy-800/60">Restorative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
