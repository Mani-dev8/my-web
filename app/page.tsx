import FadedCircle from "./components/common/FadedCircle";
import Navbar from "./components/common/Navbar";
import BrandHighlightSection from "./components/sections/BrandHighlightSection";
import Footer from "./components/sections/Footer";
import GetInTouchSection from "./components/sections/GetInTouchSection";
import HeroSection from "./components/sections/HeroSection";
import OurExpertiseSection from "./components/sections/OurExpertiseSection";
import OurJourneySection from "./components/sections/OurJourneySection";
import OurTrustedClientSection from "./components/sections/OurTrustedClientSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="">
        <Navbar />
      </header>
      <HeroSection />
      <BrandHighlightSection />
      <OurExpertiseSection />
      <OurJourneySection />
      <OurTrustedClientSection />
      <GetInTouchSection />
      <Footer />
    </main>
  );
}
