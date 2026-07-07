import Navbar from "@/components/Navbar";
import MehendiHero from "@/components/mehendi/MehendiHero";
import MehendiServices from "@/components/mehendi/MehendiServices";
import TheHennaExperience from "@/components/mehendi/TheHennaExperience";
import MehendiCTA from "@/components/mehendi/MehendiCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function MehendiArt() {
  return (
    <main className="w-full min-h-screen relative selection:bg-foreground selection:text-white">
      <div className="relative z-10">
        <Navbar />
        
        <MehendiHero />
        <MehendiServices />
        <TheHennaExperience />
        <MehendiCTA />
        
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
