import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { WhyASFSection } from "@/components/sections/WhyASFSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <StatsSection />
      <EventsSection />
      <WhyASFSection />
      <AwardsSection />
    </div>
  );
}
