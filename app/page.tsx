import FadedCircle from "./components/FadedCircle";
import Navbar from "./components/Navbar";
import BrandHighlightSection from "./components/sections/BrandHighlightSection";
import HeroSection from "./components/sections/HeroSection";
import OurExpertiseSection from "./components/sections/OurExpertiseSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="">
        <Navbar />
      </header>
      <HeroSection />
      <BrandHighlightSection />
      <OurExpertiseSection />
    </div>
  );
}
