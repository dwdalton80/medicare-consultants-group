import { Phone, Mail } from 'lucide-react';

export default function ContactBand() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: '#0C3547' }}
      aria-labelledby="contact-band-heading"
    >
      <div className="w-full h-1" style={{ backgroundColor: '#0891B2' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#22D3EE' }}>
              Ready to Get Started?
            </p>
            <h2
              id="contact-band-heading"
              className="font-heading font-extrabold mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#F0F9FF', letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Find the Right Medicare Plan — At No Cost to You.
            </h2>
            <p style={{ color: '#7DD3FC', lineHeight: '1.7', fontSize: '1rem' }}>
              Our consultations are completely free. Call or email either of our licensed agents today and get clear, personalized Medicare guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {/* Lori */}
            <div
              className="flex flex-col gap-3 p-5 rounded"
              style={{ backgroundColor: '#0E4D6B', border: '1px solid #0891B2', borderRadius: '4px' }}
            >
              <p className="font-heading font-bold text-lg" style={{ color: '#F0F9FF' }}>Lori Hunter</p>
              <a
                href="tel:5126562483"
                aria-label="Call Lori Hunter at 512-656-2483"
                className="flex items-center gap-2 font-semibold text-base hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-2 rounded"
                style={{ color: '#22D3EE' }}
              >
                <Phone size={16} aria-hidden="true" />
                (512) 656-2483
              </a>
              <a
                href="mailto:Lori@Hunter-MCG.com"
                aria-label="Email Lori Hunter"
                className="flex items-center gap-2 text-sm hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-2 rounded"
                style={{ color: '#7DD3FC' }}
              >
                <Mail size={14} aria-hidden="true" />
                <span className="break-all">Lori@Hunter-MCG.com</span>
              </a>
            </div>

            {/* Jennifer */}
            <div
              className="flex flex-col gap-3 p-5 rounded"
              style={{ backgroundColor: '#0E4D6B', border: '1px solid #0891B2', borderRadius: '4px' }}
            >
              <p className="font-heading font-bold text-lg" style={{ color: '#F0F9FF' }}>Jennifer Swisher</p>
              <a
                href="tel:4052022902"
                aria-label="Call Jennifer Swisher at 405-202-2902"
                className="flex items-center gap-2 font-semibold text-base hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-2 rounded"
                style={{ color: '#22D3EE' }}
              >
                <Phone size={16} aria-hidden="true" />
                (405) 202-2902
              </a>
              <a
                href="mailto:Jenniter@Swisher-MCG.com"
                aria-label="Email Jennifer Swisher"
                className="flex items-center gap-2 text-sm hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-2 rounded"
                style={{ color: '#7DD3FC' }}
              >
                <Mail size={14} aria-hidden="true" />
                <span className="break-all">Jenniter@Swisher-MCG.com</span>
              </a>
            </div>

            {/* Scott */}
            <div
              className="flex flex-col gap-3 p-5 rounded"
              style={{ backgroundColor: '#0E4D6B', border: '1px solid #0891B2', borderRadius: '4px' }}
            >
              <p className="font-heading font-bold text-lg" style={{ color: '#F0F9FF' }}>Scott Swisher</p>
              <a
                href="tel:4054188586"
                aria-label="Call Scott Swisher at 405-418-8586"
                className="flex items-center gap-2 font-semibold text-base hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-2 rounded"
                style={{ color: '#22D3EE' }}
              >
                <Phone size={16} aria-hidden="true" />
                (405) 418-8586
              </a>
              <a
                href="mailto:Scott@Swisher-MCG.com"
                aria-label="Email Scott Swisher"
                className="flex items-center gap-2 text-sm hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-2 rounded"
                style={{ color: '#7DD3FC' }}
              >
                <Mail size={14} aria-hidden="true" />
                <span className="break-all">Scott@Swisher-MCG.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}