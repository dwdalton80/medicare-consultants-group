import { Phone, Mail } from 'lucide-react';

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
            THERE ARE A LOT OF DECISIONS TO MAKE REGARDING YOUR MEDICARE COVERAGE. YOU DO NOT NEED TO GO IT ALONE!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:Lori@Hunter-MCG.com"
              aria-label="Email Lori Hunter"
              className="flex items-center justify-center gap-2 px-8 rounded font-semibold text-base transition-colors duration-200"
              style={{ backgroundColor: '#0891B2', color: '#ffffff', minHeight: '52px' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0E7490'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0891B2'}
            >
              <Mail size={17} aria-hidden="true" />
              Email Lori
            </a>
            <a
              href="mailto:Jenniter@Swisher-MCG.com"
              aria-label="Email Jennifer Swisher"
              className="flex items-center justify-center gap-2 px-8 rounded font-semibold text-base transition-colors duration-200 border-2"
              style={{ borderColor: '#0891B2', color: '#F0F9FF', backgroundColor: 'transparent', minHeight: '52px' }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0891B2'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <Mail size={17} aria-hidden="true" />
              Email Jennifer
            </a>
            <a
              href="mailto:Scott@Swosjer-MCG.com"
              aria-label="Email Scott Swisher"
              className="flex items-center justify-center gap-2 px-8 rounded font-semibold text-base transition-colors duration-200 border-2"
              style={{ borderColor: '#0891B2', color: '#F0F9FF', backgroundColor: 'transparent', minHeight: '52px' }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#0891B2'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <Mail size={17} aria-hidden="true" />
              Email Scott
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