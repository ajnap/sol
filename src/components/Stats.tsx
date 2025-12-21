const stats = [
  {
    value: '47%',
    label: 'Faster Sleep Onset',
    description: 'Users fall asleep nearly twice as fast',
  },
  {
    value: '32%',
    label: 'More Deep Sleep',
    description: 'Increased restorative sleep stages',
  },
  {
    value: '89%',
    label: 'Feel More Rested',
    description: 'Report improved morning energy',
  },
  {
    value: '4.9',
    label: 'User Rating',
    description: 'Based on 12,000+ reviews',
  },
];

export function Stats() {
  return (
    <section className="section-padding bg-gradient-to-r from-plum-600 via-plum-700 to-plum-600">
      <div className="container-width">
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-sm font-semibold tracking-wider uppercase text-sunrise-400 mb-4">
            Proven Results
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Sleep Better, Live Better
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-sunrise-400 mb-2">
                {stat.value}
              </div>
              <div className="font-sans font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="font-sans text-sm text-lavender-300/80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
