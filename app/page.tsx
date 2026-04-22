import HeroCanvas from '@/components/HeroCanvas';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import PreOrderCTA from '@/components/PreOrderCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-text-dark">
      <HeroCanvas />
      <StatsSection />
      <FeaturesSection />
      <PreOrderCTA />
      <Footer />
    </main>
  );
}
