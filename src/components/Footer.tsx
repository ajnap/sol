import { useState } from 'react';
import { Button } from './Button';

const footerLinks = {
  Product: ['Features', 'How It Works', 'Pricing', 'Reviews'],
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Support: ['Help Center', 'Contact', 'Shipping', 'Returns'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="reserve" className="bg-navy-900 text-white">
      {/* CTA Section */}
      <div className="section-padding border-b border-white/10">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Ready to Transform Your Sleep?
            </h2>
            <p className="text-lg text-lavender-300/80 mb-8">
              Join the waitlist for early access and exclusive launch pricing.
              Be among the first to experience the future of sleep.
            </p>

            {subscribed ? (
              <div className="bg-sunrise-500/20 border border-sunrise-500/30 rounded-2xl p-6">
                <svg className="w-12 h-12 text-sunrise-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xl font-semibold text-white">You're on the list!</p>
                <p className="text-lavender-300/80 mt-2">We'll be in touch with exclusive updates soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sunrise-500 focus:border-transparent"
                />
                <Button variant="primary" size="lg">
                  Reserve Now
                </Button>
              </form>
            )}

            <p className="text-sm text-lavender-300/60 mt-4">
              No payment required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <svg viewBox="0 0 100 100" className="w-10 h-10" aria-hidden="true">
                  <defs>
                    <linearGradient id="sunGradFooter" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFB347"/>
                      <stop offset="50%" stopColor="#FF8C42"/>
                      <stop offset="100%" stopColor="#FF7AD9"/>
                    </linearGradient>
                    <linearGradient id="moonGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF7AD9"/>
                      <stop offset="100%" stopColor="#7B5CFF"/>
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="url(#sunGradFooter)"/>
                  <circle cx="50" cy="55" r="28" fill="url(#moonGradFooter)"/>
                  <circle cx="50" cy="45" r="18" fill="#FFFFFF" opacity="0.9"/>
                  <g fill="#FFB347">
                    <rect x="48" y="5" width="4" height="12" rx="2"/>
                    <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(30 50 50)"/>
                    <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(60 50 50)"/>
                    <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(-30 50 50)"/>
                    <rect x="48" y="5" width="4" height="12" rx="2" transform="rotate(-60 50 50)"/>
                  </g>
                </svg>
                <span className="font-sans text-xl font-bold tracking-widest">SOLUNA</span>
              </div>
              <p className="text-lavender-300/70 text-sm leading-relaxed">
                The world's smartest sleep device. Transforming nights, one dreamer at a time.
              </p>

              {/* Social links */}
              <div className="flex gap-4 mt-6">
                {['twitter', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={`Follow us on ${social}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social === 'twitter' && (
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      )}
                      {social === 'instagram' && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      )}
                      {social === 'linkedin' && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-sans font-semibold text-white mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-lavender-300/70 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-lavender-300/60 text-sm">
              © 2024 Soluna Sleep Technologies. All rights reserved.
            </p>
            <p className="text-lavender-300/60 text-sm">
              Made with care for better sleep everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
