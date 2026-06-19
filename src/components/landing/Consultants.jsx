import { Phone, Mail, User } from 'lucide-react';
import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

const consultants = [
  {
    name: 'Lori Hunter',
    title: 'Licensed Independent Insurance Agent',
    phone: '(512) 656-2483',
    phoneHref: 'tel:5126562483',
    email: 'Lori@Hunter-MCG.com',
    emailHref: 'mailto:Lori@Hunter-MCG.com',
    bio: 'Lori brings years of expertise helping Medicare-eligible individuals find coverage that truly fits their health needs and budget. She is committed to clear, pressure-free guidance through every step of the enrollment process.',
    headerColor: '#0E4D6B',
  },
  {
    name: 'Jennifer Swisher',
    title: 'Licensed Independent Insurance Agent',
    phone: '(405) 202-2902',
    phoneHref: 'tel:4052022902',
    email: 'Jenniter@Swisher-MCG.com',
    emailHref: 'mailto:Jenniter@Swisher-MCG.com',
    bio: 'Jennifer Swisher brings over 25 years of experience in healthcare sales and business development, with a strong focus on respiratory and durable medical equipment. She currently serves as a Business Development Specialist for Rhythm Healthcare, covering Oklahoma and Texas.',
    bioFull: 'Jennifer Swisher brings over 25 years of experience in healthcare sales and business development, with a strong focus on respiratory and durable medical equipment. She currently serves as a Business Development Specialist for Rhythm Healthcare, covering Oklahoma and Texas.\n\nJennifer began her medical sales career with Invacare Corporation, where she spent nearly 13 years as a Territory Business Manager. She later held key sales positions with Inogen, O2 Concepts, and Inogen, managing multi-state territories including Texas, Oklahoma, Arkansas, Louisiana, Kansas, Missouri, and Colorado. Her expertise spans strategic partnerships, territory growth, and customer education.\n\nFrom 2020 to 2022, she also applied her sales acumen in real estate as a licensed Realtor with Keller Williams Realty Elite in Oklahoma City.\n\nJennifer is known for building lasting relationships and driving results, always with a focus on improving access to quality home medical care.',
    headerColor: '#0C3547',
    photo: 'https://media.base44.com/images/public/6a35941791f303e104783ca3/7eca7f813_IMG_4344.jpeg',
  },
];

function ConsultantCard({ consultant, delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="rounded flex flex-col overflow-hidden"
      style={{
        border: '1px solid #BAE6FD',
        borderRadius: '4px',
        boxShadow: hovered ? '0 16px 48px rgba(8,145,178,0.22)' : '0 2px 8px rgba(8,145,178,0.06)',
        transform: visible
          ? hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)'
          : 'translateY(32px)',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.5s ease ${delay}ms, box-shadow 0.3s ease`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Portrait area */}
      <div
        className="flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundColor: consultant.headerColor,
          minHeight: '200px',
          padding: '3rem 2rem 2rem',
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 60%, #0891B2 0%, transparent 60%), radial-gradient(circle at 80% 20%, #0D9488 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />
        <div
          className="relative w-40 h-40 rounded-full flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: 'rgba(8,145,178,0.25)', border: '2px solid #0891B2' }}
        >
          {consultant.photo ? (
            <img
              src={consultant.photo}
              alt={`Portrait of ${consultant.name}`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <User size={40} style={{ color: '#22D3EE' }} strokeWidth={1} />
          )}
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: '#0891B2' }}
          aria-hidden="true"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-5 p-8 flex-1" style={{ backgroundColor: '#ffffff' }}>
        <div>
          <h3 className="font-heading font-extrabold text-xl mb-1" style={{ color: '#0C3547' }}>
            {consultant.name}
          </h3>
          <p className="text-sm font-medium uppercase tracking-wide" style={{ color: '#0891B2' }}>
            {consultant.title}
          </p>
        </div>

        <div>
          <p className="text-base leading-relaxed whitespace-pre-line" style={{ color: '#475569', lineHeight: '1.7' }}>
            {consultant.bioFull
              ? expanded ? consultant.bioFull : consultant.bio
              : consultant.bio}
          </p>
          {consultant.bioFull && (
            <button
              onClick={() => setExpanded((e) => !e)}
              className="mt-2 text-sm font-semibold underline underline-offset-2 focus-visible:outline-none"
              style={{ color: '#0891B2' }}
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>

        <div className="flex flex-col gap-3 mt-auto pt-5" style={{ borderTop: '1px solid #E0F2FE' }}>
          <a
            href={consultant.phoneHref}
            aria-label={`Call ${consultant.name} at ${consultant.phone}`}
            className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 rounded"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#E0F2FE' }}
              aria-hidden="true"
            >
              <Phone size={16} style={{ color: '#0891B2' }} />
            </span>
            <span
              className="font-semibold text-base group-hover:underline underline-offset-2"
              style={{ color: hovered ? '#0891B2' : '#0C3547', transition: 'color 0.2s' }}
            >
              {consultant.phone}
            </span>
          </a>

          <a
            href={consultant.emailHref}
            aria-label={`Email ${consultant.name} at ${consultant.email}`}
            className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 rounded"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#E0F2FE' }}
              aria-hidden="true"
            >
              <Mail size={16} style={{ color: '#0891B2' }} />
            </span>
            <span
              className="font-semibold text-base group-hover:underline underline-offset-2 break-all"
              style={{ color: hovered ? '#0891B2' : '#0C3547', transition: 'color 0.2s' }}
            >
              {consultant.email}
            </span>
          </a>

          <a
            href={consultant.phoneHref}
            aria-label={`Call ${consultant.name} at ${consultant.phone}`}
            className="mt-2 flex items-center justify-center gap-2 rounded font-semibold text-base transition-colors duration-200 focus-visible:outline focus-visible:outline-2"
            style={{
              backgroundColor: hovered ? '#0891B2' : '#0C3547',
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
  const { ref: headerRef, visible: headerVisible } = useScrollReveal();

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#E0F2FE',
        paddingTop: 'clamp(5rem, 10vh, 7rem)',
        paddingBottom: 'clamp(5rem, 10vh, 7rem)',
      }}
      aria-labelledby="consultants-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={headerRef}
          className="mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#0891B2' }}>
            Meet Your Consultants
          </p>
          <div className="flex items-end gap-6">
            <h2
              id="consultants-heading"
              className="font-heading font-extrabold"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#0C3547', letterSpacing: '-0.02em', textWrap: 'balance' }}
            >
              People You Can Trust
            </h2>
            <div
              className="hidden lg:block h-px flex-1 mb-3"
              style={{ backgroundColor: '#0891B2', opacity: 0.4 }}
              aria-hidden="true"
            />
          </div>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: '#334155', lineHeight: '1.7' }}>
            We work for you — not the insurance companies. Our advisors are independent, licensed professionals dedicated to finding the right fit for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {consultants.map((c, i) => (
            <ConsultantCard key={c.name} consultant={c} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}