import { Phone, Facebook } from 'lucide-react';

const FACEBOOK_URL = 'https://www.facebook.com'; // Update with real URL when provided

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-20 w-full border-b"
      style={{ backgroundColor: '#0C3547', borderColor: '#0E4D6B' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="https://media.base44.com/images/public/6a35941791f303e104783ca3/38e1fe9ca_IMG_4341.png"
            alt="Medicare Consultants Group logo"
            className="h-14 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Right side: Facebook + CTA */}
        <div className="flex items-center gap-4">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Medicare Consultants Group on Facebook"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ color: '#ffffff' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Facebook size={22} aria-hidden="true" />
          </a>

          <a
            href="tel:5126562483"
            aria-label="Call Lori Hunter at 512-656-2483"
            className="flex items-center gap-2 px-5 py-3 rounded font-semibold text-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: '#0891B2',
              color: '#ffffff',
              minHeight: '48px',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0E7490'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0891B2'}
          >
            <Phone size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Get Free Guidance</span>
            <span className="sm:hidden">Call Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}