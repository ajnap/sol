import { useState } from 'react';
import { SectionTitle } from './SectionTitle';

const faqs = [
  {
    question: 'How long does it take for Soluna to learn my sleep patterns?',
    answer: 'Soluna begins personalizing your experience from the first night, but the AI becomes increasingly accurate over 1-2 weeks of use. Most users report noticeable improvements within the first 5 nights as the system calibrates to their unique sleep architecture.',
  },
  {
    question: 'Do I need to wear any sensors or trackers?',
    answer: 'No wearables required. Soluna uses advanced non-contact sensing technology to detect your sleep stages, breathing patterns, and movement from its position on your nightstand. Simply place it within 3 feet of your bed and it handles the rest.',
  },
  {
    question: 'What scents are available and are refills included?',
    answer: 'Soluna comes with a starter pack of our three most popular sleep-promoting blends: Lavender Dreams, Forest Night, and Chamomile Calm. The cartridges last approximately 3 months with nightly use. A subscription service is available for automatic refills, or you can purchase à la carte.',
  },
  {
    question: 'Can multiple people use the same Soluna device?',
    answer: 'Yes! Soluna supports up to 4 individual profiles. The device can detect which user is present based on sleep patterns and automatically switches profiles. For couples, we recommend using the "Shared Mode" which finds optimal settings that work for both sleepers.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 100-night sleep trial. If Soluna doesn\'t transform your sleep within 100 nights, return it for a full refund, no questions asked. We also provide a 2-year warranty covering any defects or malfunctions.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-lavender-200 to-lavender-100">
      <div className="container-width">
        <SectionTitle
          eyebrow="Questions & Answers"
          title="Everything You Need to Know"
          subtitle="Can't find what you're looking for? Reach out to our sleep specialists anytime."
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-lavender-300/50 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-sunrise-500/50 focus:ring-offset-2 rounded-lg"
                aria-expanded={openIndex === index}
              >
                <span className="font-serif text-lg font-semibold text-navy-900 pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-lavender-300/50 flex items-center justify-center">
                  <svg
                    className={`w-5 h-5 text-plum-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-navy-800/70 leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
