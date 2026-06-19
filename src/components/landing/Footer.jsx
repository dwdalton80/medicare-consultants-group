export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: '#020817', paddingTop: '3.5rem', paddingBottom: '3rem' }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Brand row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <img
              src="/MCG_logo.png"
              alt="Medicare Consultants Group"
              className="h-10 w-auto object-contain opacity-80"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <p
              className="text-sm font-semibold"
              style={{ color: '#94A3B8' }}
            >
              Medicare Consultants Group
            </p>
          </div>
          <p className="text-xs" style={{ color: '#475569' }}>
            © {currentYear} Medicare Consultants Group. All rights reserved.
          </p>
        </div>

        {/* Gold divider */}
        <div className="h-px mb-8" style={{ backgroundColor: '#B45309', opacity: 0.3 }} aria-hidden="true" />

        {/* Disclaimers */}
        <div className="flex flex-col gap-7">
          {/* TPMO */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: '#B45309', opacity: 0.9 }}
            >
              TPMO Disclaimer
            </p>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '14px',
                lineHeight: '1.8',
                maxWidth: '72ch',
              }}
            >
              We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact{' '}
              <a
                href="https://www.medicare.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="underline focus-gold rounded"
                style={{ color: 'rgba(255,255,255,0.75)' }}
                aria-label="Visit Medicare.gov (opens in new tab)"
              >
                Medicare.gov
              </a>{' '}
              or{' '}
              <a
                href="tel:18006332273"
                className="underline focus-gold rounded"
                style={{ color: 'rgba(255,255,255,0.75)' }}
                aria-label="Call 1-800-MEDICARE"
              >
                1-800-MEDICARE
              </a>{' '}
              to get information on all of your options.
            </p>
          </div>

          {/* Affiliation Notice */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: '#B45309', opacity: 0.9 }}
            >
              Affiliation Notice
            </p>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '14px',
                lineHeight: '1.8',
                maxWidth: '72ch',
              }}
            >
              This website is operated by a private, independent licensed insurance agent. It is not affiliated with, endorsed by, or connected to the federal Medicare program, CMS, or any government entity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}