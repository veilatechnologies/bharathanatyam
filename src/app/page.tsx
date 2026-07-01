import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGallery from "@/components/ProductGallery";
import HandwovenHeritage from "@/components/HandwovenHeritage";
import Craftsmanship from "@/components/Craftsmanship";
import ParallaxQuote from "@/components/ParallaxQuote";
import GalleryOfGrace from "@/components/GalleryOfGrace";
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
        <GalleryOfGrace />
        <HandwovenHeritage />
        <Craftsmanship />
        <ParallaxQuote />
        <ProductGallery />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
