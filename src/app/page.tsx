import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Craftsmanship from "@/components/Craftsmanship";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative selection:bg-foreground selection:text-white">
      {/* Background is handled by globals.css gradient */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Craftsmanship />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
