import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import Generator from "@/components/Generator";
import HowToUse from "@/components/HowToUse";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyItMatters />
      <Generator />
      <HowToUse />
      <FAQ />
      <Footer />
    </div>
  );
}
