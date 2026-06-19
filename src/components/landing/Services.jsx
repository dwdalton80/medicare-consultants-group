import { Shield, Star, Pill, ClipboardList } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Medicare Supplement Plans',
    description:
      'Also known as Medigap, these plans fill the coverage gaps left by Original Medicare — including copays, coinsurance, and deductibles — so unexpected costs don\'t catch you off guard.',
  },
  {
    icon: Star,
    title: 'Medicare Advantage Plans',
    description:
      'An all-in-one alternative to Original Medicare offered by private insurers. Often includes dental, vision, hearing, and prescription coverage under a single plan.',
  },
  {
    icon: Pill,
    title: 'Prescription Drug Plans (Part D)',
    description:
      'Standalone drug coverage that pairs with Original Medicare or a Medigap plan. We help you compare formularies so your medications stay affordable.',
  },
  {
    icon: ClipboardList,
    title: 'Plan Comparison & Enrollment',
    description:
      'Not sure which plan type fits your situation? We walk you through every option side-by-side, answer your questions, and guide you through enrollment — at no cost to you.',
  },
];

export default function Services() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: '#F8FAFC', paddingTop: 'clamp(5rem, 10vh, 7rem)', paddingBottom: 'clamp(5rem, 10vh, 7rem)' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#B45309' }}
          >
            What We Offer
          </p>
          <div className="flex items-end gap-6">
            <h2
              id="services-heading"
              className="font-heading font-extrabold"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#0F172A', letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Coverage Options, Clearly Explained
            </h2>
            <div
              className="hidden lg:block h-px flex-1 mb-3"
              style={{ backgroundColor: '#B45309', opacity: 0.4 }}
              aria-hidden="true"
            />
          </div>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: '#475569', lineHeight: '1.7' }}>
            Every Medicare situation is different. We offer guidance across the full range of Medicare options so you can choose with confidence.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded p-8 flex flex-col gap-5 transition-shadow duration-200 hover:shadow-md"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #E2E8F0',
                  borderRadius: '4px',
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded"
                  style={{ backgroundColor: '#FEF3C7' }}
                  aria-hidden="true"
                >
                  <Icon size={22} style={{ color: '#B45309' }} strokeWidth={1.5} />
                </div>

                {/* Gold guide line top */}
                <div
                  className="h-px w-8"
                  style={{ backgroundColor: '#B45309' }}
                  aria-hidden="true"
                />

                <h3
                  className="font-heading font-bold text-lg leading-snug"
                  style={{ color: '#0F172A' }}
                >
                  {service.title}
                </h3>

                <p className="text-base leading-relaxed" style={{ color: '#475569', lineHeight: '1.65' }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}