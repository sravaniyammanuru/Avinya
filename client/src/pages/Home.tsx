import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import EventsSection from '@/components/EventsSection';
import Schedule from '@/components/Schedule';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <EventsSection />
      <Schedule />
      <FAQ />
      <Footer />
    </div>
  );
}