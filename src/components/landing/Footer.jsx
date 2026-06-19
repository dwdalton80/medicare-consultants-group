import { Facebook } from 'lucide-react';

const FACEBOOK_URL = 'https://www.facebook.com'; // Update with real URL when provided

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: '#061B27', paddingTop: '3.5rem', paddingBottom: '3rem' }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Brand row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div className="flex items-center gap-5">
            <img
              src="https://media.base44.com/images/public/6a35941791f303e104783ca3/38e1fe9ca_IMG_4341.png"
              alt="Medicare Consultants Group"
              className="h-12 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }}
            />
          </div>
          <div className="flex items-center gap-5">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Medicare Consultants Group on Facebook"
              className="flex items-center gap-2 text-sm hover:underline underline-offset-2 focus-visible:outline focus-visible:outline-2 rounded"
              style={{ color: '#7DD3FC' }}
            >
              <Facebook size={18} aria-hidden="true" />
              Facebook
            </a>
            <p className="text-xs" style={{ color: '#334155' }}>
              © {currentYear} Medicare Consultants Group. All rights reserved.
            </p>
          </div>
        </div>

        {/* Teal divider */}
        <div className="h-px mb-8" style={{ backgroundColor: '#0891B2', opacity: 0.3 }} aria-hidden="true" />

        {/* Disclaimers */}
        <div className="flex flex-col gap-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0891B2', opacity: 0.9 }}>
              TPMO Disclaimer
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.8', maxWidth: '72ch' }}>
              We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact{' '}
              <a
                href="https://www.medicare.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="underline focus-visible:outline focus-visible:outline-2 rounded"
                style={{ color: 'rgba(255,255,255,0.75)' }}
                aria-label="Visit Medicare.gov (opens in new tab)"
              >
                Medicare.gov
              </a>{' '}
              or{' '}
              <a
                href="tel:18006332273"
                className="underline focus-visible:outline focus-visible:outline-2 rounded"
                style={{ color: 'rgba(255,255,255,0.75)' }}
                aria-label="Call 1-800-MEDICARE"
              >
                1-800-MEDICARE
              </a>{' '}
              to get information on all of your options.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#0891B2', opacity: 0.9 }}>
              Affiliation Notice
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.8', maxWidth: '72ch' }}>
              This website is operated by a private, independent licensed insurance agent. It is not affiliated with, endorsed by, or connected to the federal Medicare program, CMS, or any government entity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}