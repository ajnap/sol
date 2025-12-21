import { SectionTitle } from './SectionTitle';
import { Button } from './Button';

export function DeviceApp() {
  return (
    <section className="section-padding bg-gradient-to-b from-lavender-100 to-lavender-200 overflow-hidden">
      <div className="container-width">
        <SectionTitle
          eyebrow="Device & App"
          title="Beautifully Engineered for Your Nightstand"
          subtitle="Premium materials meet intuitive design. Control everything from the device itself or through our companion app."
        />

        {/* Device showcase */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-sunrise-400/20 to-plum-500/20 blur-3xl" />
            </div>
            <img
              src={`${import.meta.env.BASE_URL}woman-bedroom-2-close-up.webp`}
              alt="Soluna device glowing warmly on a nightstand next to a peacefully sleeping person"
              className="relative rounded-4xl shadow-2xl w-full"
            />
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900">
              Designed to Disappear Into Your Routine
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sunrise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-navy-900 mb-1">Touch-Free Control</h4>
                  <p className="text-navy-800/70">Gesture-based controls let you adjust settings without reaching or fumbling in the dark.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-plum-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-navy-900 mb-1">Night Mode Display</h4>
                  <p className="text-navy-800/70">Clock dims automatically and uses sleep-safe red tones that won't disrupt melatonin.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sunrise-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-navy-900 mb-1">Whisper-Quiet Operation</h4>
                  <p className="text-navy-800/70">Near-silent mechanical design ensures the device never disrupts your sleep.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App showcase */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900">
              Complete Control in Your Pocket
            </h3>

            <p className="text-lg text-navy-800/70 leading-relaxed">
              The Soluna app gives you deep insights into your sleep patterns and
              lets you fine-tune every aspect of your sleep environment from anywhere.
            </p>

            <ul className="space-y-4">
              {[
                'Detailed sleep analytics and trends',
                'Custom routine scheduling',
                'Sound and scent library with 50+ options',
                'Smart home integrations',
                'Family profiles for multiple users',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-sunrise-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-navy-800/80">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-4">
              <Button variant="secondary" size="md">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </Button>
              <Button variant="outline" size="md">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-plum-500/20 to-sunrise-400/20 blur-3xl" />
              </div>
              <img
                src={`${import.meta.env.BASE_URL}hand-mockup-phone.webp`}
                alt="Soluna mobile app showing Good Morning greeting with purple gradient design"
                className="relative w-full max-w-md rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
