import { useState, useEffect } from 'react';
import { Button } from './Button';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Science', href: '#science' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-width">
        <nav className="flex items-center justify-between h-20 px-6 lg:px-12">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sunrise-400 to-plum-500 flex items-center justify-center shadow-lg">
              <div className="w-5 h-5 rounded-full bg-white/30" />
            </div>
            <span className="font-sans text-xl font-bold tracking-wide text-navy-900">
              SOLUNA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm font-medium text-navy-800/80 hover:text-navy-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm" href="#reserve">
              Reserve Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-lavender-200/50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-navy-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-64' : 'max-h-0'
          }`}
        >
          <div className="px-6 pb-6 space-y-4 bg-white/80 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-sans text-base font-medium text-navy-800/80 hover:text-navy-900 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="md" href="#reserve" className="w-full">
              Reserve Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
