import { Phone, Mail, User } from 'lucide-react';
import { useState } from 'react';

const consultants = [
  {
    name: 'Lori Hunter',
    title: 'Licensed Independent Insurance Agent',
    phone: '(512) 656-2483',
    phoneHref: 'tel:5126562483',
    email: 'Lori@Hunter-MCG.com',
    emailHref: 'mailto:Lori@Hunter-MCG.com',
    bio: 'Lori brings years of expertise helping Medicare-eligible individuals find coverage that truly fits their health needs and budget. She is committed to clear, pressure-free guidance through every step of the enrollment process.',
    color: '#1E3A5F',
  },
  {
    name: 'Jennifer Swisher',
    title: 'Licensed Independent Insurance Agent',
    phone: '(405) 202-2902',
    phoneHref: 'tel:4052022902',
    email: 'Jenniter@Swisher-MCG.com',
    emailHref: 'mailto:Jenniter@Swisher-MCG.com',
    bio: 'Jennifer specializes in helping clients navigate the often-confusing world of Medicare plan options. Her patient, personalized approach ensures every client understands their choices and feels confident in their decision.',
    color: '#0F172A',
  },
];

function ConsultantCard({ consultant }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded flex flex-col overflow-hidden transition-shadow duration-300"
      style={{
        border: '1px solid #E2E8F0',
        borderRadius: '4px',
        boxShadow: hovered ? '0 8px 32px rgba(15,23,42,0.12)' : '0 2px 8px rgba(15,23,42,0.06)',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Portrait area */}
      <div
        className="flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundColor: consultant.color,
          minHeight: '200px',
          padding: '3rem 2rem 2rem',
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 60%, #B45309 0%, transparent 60%), radial-gradient(circle at 80% 20%, #D97706 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
        {/* Avatar placeholder */}
        <div
          className="relative w-24 h-24 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(212,172,80,0.2)', border: '2px solid #B45309' }}
          aria-hidden="true"
        >
          <User size={40} style={{ color: '#D97706' }} strokeWidth={1} />
        </div>

        {/* Gold guide line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: '#B45309' }}
          aria-hidden="true"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-5 p-8 flex-1" style={{ backgroundColor: '#ffffff' }}>
        <div>
          <h3
            className="font-heading font-extrabold text-xl mb-1"
            style={{ color: '#0F172A' }}
          >
            {consultant.name}
          </h3>
          <p className="text-sm font-medium uppercase tracking-wide" style={{ color: '#B45309' }}>
            {consultant.title}
          </p>
        </div>

        <p className="text-base leading-relaxed" style={{ color: '#475569', lineHeight: '1.7' }}>
          {consultant.bio}
        </p>

        {/* Contact info — expands on hover */}
        <div
          className="flex flex-col gap-3 mt-auto pt-5"
          style={{ borderTop: '1px solid #E2E8F0' }}
        >
          <a
            href={consultant.phoneHref}
            aria-label={`Call ${consultant.name} at ${consultant.phone}`}
            className="flex items-center gap-3 group focus-gold rounded"
            style={{ color: '#1E293B', textDecoration: 'none' }}
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 transition-colors duration-200"
              style={{ backgroundColor: '#FEF3C7' }}
              aria-hidden="true"
            >
              <Phone size={16} style={{ color: '#B45309' }} />
            </span>
            <span
              className="font-semibold text-base underline-offset-2 group-hover:underline"
              style={{ color: hovered ? '#B45309' : '#0F172A', transition: 'color 0.2s' }}
            >
              {consultant.phone}
            </span>
          </a>

          <a
            href={consultant.emailHref}
            aria-label={`Email ${consultant.name} at ${consultant.email}`}
            className="flex items-center gap-3 group focus-gold rounded"
            style={{ color: '#1E293B', textDecoration: 'none' }}
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0 transition-colors duration-200"
              style={{ backgroundColor: '#FEF3C7' }}
              aria-hidden="true"
            >
              <Mail size={16} style={{ color: '#B45309' }} />
            </span>
            <span
              className="font-semibold text-base underline-offset-2 group-hover:underline break-all"
              style={{ color: hovered ? '#B45309' : '#0F172A', transition: 'color 0.2s' }}
            >
              {consultant.email}
            </span>
          </a>

          <a
            href={consultant.phoneHref}
            aria-label={`Call ${consultant.name} at ${consultant.phone}`}
            className="mt-2 flex items-center justify-center gap-2 rounded font-semibold text-base transition-colors duration-200 focus-gold"
            style={{
              backgroundColor: hovered ? '#B45309' : '#0F172A',
              color: '#ffffff',
              minHeight: '56px',
              transition: 'background-color 0.25s ease',
            }}
          >
            <Phone size={17} aria-hidden="true" />
            Call {consultant.name.split(' ')[0]}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Consultants() {
  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#F1F5F9',
        paddingTop: 'clamp(5rem, 10vh, 7rem)',
        paddingBottom: 'clamp(5rem, 10vh, 7rem)',
      }}
      aria-labelledby="consultants-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#B45309' }}
          >
            Meet Your Consultants
          </p>
          <div className="flex items-end gap-6">
            <h2
              id="consultants-heading"
              className="font-heading font-extrabold"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#0F172A', letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              People You Can Trust
            </h2>
            <div
              className="hidden lg:block h-px flex-1 mb-3"
              style={{ backgroundColor: '#B45309', opacity: 0.4 }}
              aria-hidden="true"
            />
          </div>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: '#475569', lineHeight: '1.7' }}>
            We work for you — not the insurance companies. Our advisors are independent, licensed professionals dedicated to finding the right fit for your needs.
          </p>
        </div>

        {/* Consultant cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {consultants.map((c) => (
            <ConsultantCard key={c.name} consultant={c} />
          ))}
        </div>
      </div>
    </section>
  );
}