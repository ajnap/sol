import { SectionTitle } from './SectionTitle';
import { Card } from './Card';

const testimonials = [
  {
    quote: "I've struggled with insomnia for years. After just two weeks with Soluna, I'm falling asleep naturally and waking up refreshed. It's genuinely changed my life.",
    name: 'Sarah Chen',
    title: 'Software Engineer',
    image: 'woman-forest-1.webp',
  },
  {
    quote: "The sunrise wake feature is incredible. I haven't needed an alarm in months. My mornings are calmer and I have more energy throughout the day.",
    name: 'Marcus Johnson',
    title: 'Marketing Director',
    image: 'man-wake-up-1.webp',
  },
  {
    quote: "As a new parent, sleep was a luxury. Soluna helped me maximize the sleep I could get. The AI really does learn and adapt to your patterns.",
    name: 'Emily Rodriguez',
    title: 'Product Designer',
    image: 'woman-bedroom-1.webp',
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-lavender-200">
      <div className="container-width">
        <SectionTitle
          eyebrow="What People Say"
          title="Stories of Better Sleep"
          subtitle="Join thousands who have transformed their nights with Soluna."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="flex flex-col animate-fade-in-up"
              hover={false}
            >
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-sunrise-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-sans text-navy-800/80 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-lavender-200">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-lavender-300">
                    <img
                      src={`${import.meta.env.BASE_URL}${testimonial.image}`}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-navy-900">
                      {testimonial.name}
                    </div>
                    <div className="font-sans text-sm text-navy-800/60">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
