import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '90vh' }}
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, #0C3547 55%, rgba(12,53,71,0.72) 80%, rgba(12,53,71,0.2) 100%)',
          }}
        />
      </div>

      {/* Teal guide line accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block"
        style={{ backgroundColor: '#0891B2' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center" style={{ minHeight: '90vh' }}>
        <div className="max-w-2xl py-20 lg:py-0">
          {/* Eyebrow */}
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-6"
            style={{ color: '#22D3EE' }}
          >
            Trusted Medicare Guidance
          </p>

          {/* Headline */}
          <h1
            className="font-heading font-extrabold leading-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#F0F9FF',
              letterSpacing: '-0.02em',
              textWrap: 'balance',
            }}
          >
            Medicare Guidance,{' '}
            <span style={{ color: '#22D3EE' }}>Personalized</span>{' '}
            for You.
          </h1>

          {/* Subheadline */}
          <p
            className="mb-10 text-lg leading-relaxed max-w-xl"
            style={{ color: '#BAE6FD', lineHeight: '1.7' }}
          >
            Navigating Medicare doesn't have to be overwhelming. Our licensed, independent agents work for you — not the insurance companies — to find the plan that fits your life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:5126562483"
              aria-label="Call Lori Hunter at 512-656-2483"
              className="flex items-center justify-center gap-3 px-8 rounded font-semibold text-base transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: '#0891B2',
                color: '#ffffff',
                minHeight: '56px',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0E7490'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0891B2'}
            >
              <Phone size={18} aria-hidden="true" />
              Call Lori
              <span className="text-sm font-normal opacity-80">(512) 656-2483</span>
            </a>

            <a
              href="tel:4052022902"
              aria-label="Call Jennifer Swisher at 405-202-2902"
              className="flex items-center justify-center gap-3 px-8 rounded font-semibold text-base transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-2"
              style={{
                borderColor: '#22D3EE',
                color: '#F0F9FF',
                backgroundColor: 'transparent',
                minHeight: '56px',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#22D3EE';
                e.currentTarget.style.color = '#0C3547';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#F0F9FF';
              }}
            >
              <Phone size={18} aria-hidden="true" />
              Call Jennifer
              <span className="text-sm font-normal opacity-80">(405) 202-2902</span>
            </a>
          </div>

          {/* Trust badge */}
          <div className="mt-10 flex items-center gap-3">
            <div
              className="h-px flex-1 max-w-12"
              style={{ backgroundColor: '#0891B2' }}
              aria-hidden="true"
            />
            <p className="text-sm" style={{ color: '#7DD3FC' }}>
              Independent agents · No sales pressure · Free consultations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}