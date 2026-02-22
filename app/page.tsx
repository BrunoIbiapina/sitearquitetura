import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { OngoingWorksSection } from "@/components/ongoing-works-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { BlueprintBackground } from "@/components/blueprint-background";
import { PaintDrips } from "@/components/paint-drips";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BlueprintBackground />
      <PaintDrips />
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <OngoingWorksSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
