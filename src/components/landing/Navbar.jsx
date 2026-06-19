import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-20 w-full border-b"
      style={{ backgroundColor: '#0F172A', borderColor: '#1E293B' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo + Name */}
        <div className="flex items-center gap-4">
          <img
            src="/MCG_logo.png"
            alt="Medicare Consultants Group logo"
            className="h-12 w-auto object-contain"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="guide-line pl-4 hidden sm:block">
            <p className="text-xs font-medium uppercase tracking-widest" style={{ color: '#B45309' }}>
              Medicare Consultants Group
            </p>
            <p className="text-xs" style={{ color: '#94A3B8' }}>
              Licensed Independent Insurance Agents
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="tel:5126562483"
          aria-label="Call Lori Hunter at 512-656-2483"
          className="flex items-center gap-2 px-5 py-3 rounded font-semibold text-sm transition-colors duration-200 focus-gold"
          style={{
            backgroundColor: '#B45309',
            color: '#ffffff',
            minHeight: '56px',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#D97706'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B45309'}
        >
          <Phone size={16} aria-hidden="true" />
          <span className="hidden sm:inline">Get Free Guidance</span>
          <span className="sm:hidden">Call Us</span>
        </a>
      </div>
    </nav>
  );
}