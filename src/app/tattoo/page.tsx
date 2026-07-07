import Navbar from "@/components/Navbar";
import TattooHero from "@/components/tattoo/TattooHero";
import TattooStyles from "@/components/tattoo/TattooStyles";
import TattooProcess from "@/components/tattoo/TattooProcess";
import TattooCTA from "@/components/tattoo/TattooCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function TattooStudio() {
  return (
    <main className="w-full min-h-screen relative selection:bg-foreground selection:text-white">
      <div className="relative z-10">
        <Navbar />
        
        <TattooHero />
        <TattooStyles />
        <TattooProcess />
        <TattooCTA />
        
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
