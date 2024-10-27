import FeaturedSection from "@/components/feature";
import HeroSection from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
    </main>
    
  );
}
