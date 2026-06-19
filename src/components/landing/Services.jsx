import { Shield, Star, Pill, ClipboardList } from 'lucide-react';
import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

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

function ServiceCard({ service, delay }) {
  const { ref, visible } = useScrollReveal();
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="rounded p-8 flex flex-col gap-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #BAE6FD',
        borderRadius: '4px',
        boxShadow: hovered
          ? '0 8px 28px rgba(8,145,178,0.15)'
          : '0 1px 4px rgba(8,145,178,0.06)',
        transform: visible
          ? hovered ? 'translateY(-4px)' : 'translateY(0)'
          : 'translateY(28px)',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.55s ease ${delay}ms, transform 0.45s ease ${delay}ms, box-shadow 0.3s ease`,
      }}
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded"
        style={{
          backgroundColor: hovered ? '#0891B2' : '#E0F2FE',
          transition: 'background-color 0.3s ease',
        }}
        aria-hidden="true"
      >
        <Icon size={22} style={{ color: hovered ? '#ffffff' : '#0891B2', transition: 'color 0.3s ease' }} strokeWidth={1.5} />
      </div>

      <div
        className="h-px w-8"
        style={{ backgroundColor: '#0891B2' }}
        aria-hidden="true"
      />

      <h3
        className="font-heading font-bold text-lg leading-snug"
        style={{ color: '#0C3547' }}
      >
        {service.title}
      </h3>

      <p className="text-base leading-relaxed" style={{ color: '#475569', lineHeight: '1.65' }}>
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();

  return (
    <section
      className="w-full"
      style={{ backgroundColor: '#F0F9FF', paddingTop: 'clamp(5rem, 10vh, 7rem)', paddingBottom: 'clamp(5rem, 10vh, 7rem)' }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div
          ref={headerRef}
          className="mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#0891B2' }}
          >
            What We Offer
          </p>
          <div className="flex items-end gap-6">
            <h2
              id="services-heading"
              className="font-heading font-extrabold"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#0C3547', letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              Coverage Options, Clearly Explained
            </h2>
            <div
              className="hidden lg:block h-px flex-1 mb-3"
              style={{ backgroundColor: '#0891B2', opacity: 0.4 }}
              aria-hidden="true"
            />
          </div>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: '#334155', lineHeight: '1.7' }}>
            Every Medicare situation is different. We offer guidance across the full range of Medicare options so you can choose with confidence.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}