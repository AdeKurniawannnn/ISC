import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UnitySection from "@/components/UnitySection";
import CarbonSection from "@/components/CarbonSection";
import MarketSection from "@/components/MarketSection";
import StoriesSection from "@/components/StoriesSection";
import StandardsSection from "@/components/StandardsSection";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <UnitySection />
      <CarbonSection />
      <MarketSection />
      <StoriesSection />
      <StandardsSection />
      <CtaSection />
    </main>
  );
}
