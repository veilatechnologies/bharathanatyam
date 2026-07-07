import Navbar from "@/components/Navbar";
import TailoringHero from "@/components/tailoring/TailoringHero";
import BespokeServices from "@/components/tailoring/BespokeServices";
import TheProcess from "@/components/tailoring/TheProcess";
import TailoringCTA from "@/components/tailoring/TailoringCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function TailoringHome() {
  return (
    <main className="w-full min-h-screen relative selection:bg-foreground selection:text-white">
      <div className="relative z-10">
        <Navbar />
        
        <TailoringHero />
        <BespokeServices />
        <TheProcess />
        <TailoringCTA />
        
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
