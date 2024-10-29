import FeaturedSection from "@/components/feature";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
    </main>
    
  );
}
