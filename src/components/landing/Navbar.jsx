import { Phone, Facebook, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const FACEBOOK_URL = 'https://www.facebook.com'; // Update with real URL when provided

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav
      className="sticky top-0 z-20 w-full border-b"
      style={{ backgroundColor: '#ffffff', borderColor: '#E0F2FE', boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="https://media.base44.com/images/public/6a35941791f303e104783ca3/38e1fe9ca_IMG_4341.png"
            alt="Medicare Consultants Group logo"
            className="h-20 w-auto object-contain"
            style={{  }}
          />
        </div>

        {/* Right side: Facebook + CTA dropdown */}
        <div className="flex items-center gap-4">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Medicare Consultants Group on Facebook"
            className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
            style={{ color: '#0C3547' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(8,145,178,0.08)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <Facebook size={22} aria-hidden="true" />
          </a>

          {/* Call Us dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={open}
              className="flex items-center gap-2 px-5 py-3 rounded font-semibold text-sm transition-colors duration-200"
              style={{
                backgroundColor: '#0891B2',
                color: '#ffffff',
                minHeight: '48px',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0E7490'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = open ? '#0E7490' : '#0891B2'}
            >
              <Phone size={16} aria-hidden="true" />
              <span>Call Us</span>
              <ChevronDown size={15} aria-hidden="true" style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            {open && (
              <div
                className="absolute right-0 mt-2 rounded shadow-lg overflow-hidden"
                style={{ backgroundColor: '#0E4D6B', border: '1px solid #0891B2', minWidth: '220px', zIndex: 50 }}
              >
                {/* Lori */}
                <div className="px-4 pt-4 pb-2">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#22D3EE' }}>Lori Hunter</p>
                  <a
                    href="tel:5126562483"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-2 px-3 rounded text-sm font-medium w-full"
                    style={{ color: '#F0F9FF' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <Phone size={14} aria-hidden="true" style={{ color: '#22D3EE' }} />
                    (512) 656-2483
                  </a>
                </div>

                <div className="h-px mx-4" style={{ backgroundColor: 'rgba(8,145,178,0.3)' }} />

                {/* Jennifer */}
                <div className="px-4 pt-2 pb-2">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#22D3EE' }}>Jennifer Swisher</p>
                  <a
                    href="tel:4052022902"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-2 px-3 rounded text-sm font-medium w-full"
                    style={{ color: '#F0F9FF' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <Phone size={14} aria-hidden="true" style={{ color: '#22D3EE' }} />
                    (405) 202-2902
                  </a>
                </div>

                <div className="h-px mx-4" style={{ backgroundColor: 'rgba(8,145,178,0.3)' }} />

                {/* Scott */}
                <div className="px-4 pt-2 pb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#22D3EE' }}>Scott Swisher</p>
                  <a
                    href="tel:4054188586"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-2 px-3 rounded text-sm font-medium w-full"
                    style={{ color: '#F0F9FF' }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <Phone size={14} aria-hidden="true" style={{ color: '#22D3EE' }} />
                    (405) 418-8586
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}