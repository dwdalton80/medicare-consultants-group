import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Consultants from '@/components/landing/Consultants';
import ContactBand from '@/components/landing/ContactBand';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8FAFC' }}>
      <Navbar />
      <Hero />
      <Services />
      <Consultants />
      <ContactBand />
      <Footer />
    </div>
  );
}