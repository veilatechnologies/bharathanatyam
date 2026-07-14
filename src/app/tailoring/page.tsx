import Navbar from "@/components/Navbar";
import TailoringHero from "@/components/tailoring/TailoringHero";
import TailoringDescription from "@/components/tailoring/TailoringDescription";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";

const familyComboImages = [
  { id: 1, src: "/assets/family combo/fc1.jpeg", category: "Family Combo", size: "large" as const },
  { id: 2, src: "/assets/family combo/fc2.jpeg", category: "Family Combo", size: "tall" as const },
  { id: 3, src: "/assets/family combo/fc3.jpeg", category: "Family Combo", size: "square" as const },
  { id: 4, src: "/assets/family combo/fc4.jpeg", category: "Family Combo", size: "wide" as const },
  { id: 5, src: "/assets/family combo/fc5.jpeg", category: "Family Combo", size: "square" as const },
  { id: 6, src: "/assets/family combo/fc6.jpeg", category: "Family Combo", size: "tall" as const },
  { id: 7, src: "/assets/family combo/fc7.jpeg", category: "Family Combo", size: "square" as const },
  { id: 8, src: "/assets/family combo/fc8.jpeg", category: "Family Combo", size: "large" as const },
  { id: 9, src: "/assets/family combo/fc9.jpeg", category: "Family Combo", size: "wide" as const },
  { id: 10, src: "/assets/family combo/fc10.jpeg", category: "Family Combo", size: "square" as const },
  { id: 11, src: "/assets/family combo/fc11.jpeg", category: "Family Combo", size: "tall" as const },
  { id: 12, src: "/assets/family combo/fc12.jpeg", category: "Family Combo", size: "large" as const },
  { id: 13, src: "/assets/family combo/fc13.jpeg", category: "Family Combo", size: "square" as const },
];

const blouseDesignImages = [
  { id: 1, src: "/assets/blouse designs/bd1.jpeg", category: "Blouse Design", size: "large" as const },
  { id: 2, src: "/assets/blouse designs/bd2.jpeg", category: "Blouse Design", size: "tall" as const },
  { id: 3, src: "/assets/blouse designs/bd3.jpeg", category: "Blouse Design", size: "square" as const },
  { id: 4, src: "/assets/blouse designs/bd4.jpeg", category: "Blouse Design", size: "wide" as const },
  { id: 5, src: "/assets/blouse designs/bd5.jpeg", category: "Blouse Design", size: "square" as const },
  { id: 6, src: "/assets/blouse designs/bd6.jpeg", category: "Blouse Design", size: "tall" as const },
  { id: 7, src: "/assets/blouse designs/bd7.jpeg", category: "Blouse Design", size: "square" as const },
  { id: 8, src: "/assets/blouse designs/bd8.jpeg", category: "Blouse Design", size: "large" as const },
  { id: 9, src: "/assets/blouse designs/bd9.jpeg", category: "Blouse Design", size: "wide" as const },
  { id: 10, src: "/assets/blouse designs/bd10.jpeg", category: "Blouse Design", size: "square" as const },
  { id: 11, src: "/assets/blouse designs/bd11.jpeg", category: "Blouse Design", size: "tall" as const },
  { id: 12, src: "/assets/blouse designs/bd12.jpeg", category: "Blouse Design", size: "large" as const },
  { id: 13, src: "/assets/blouse designs/bd13.jpeg", category: "Blouse Design", size: "square" as const },
  { id: 14, src: "/assets/blouse designs/bd14.jpeg", category: "Blouse Design", size: "wide" as const },
  { id: 15, src: "/assets/blouse designs/bd15.jpeg", category: "Blouse Design", size: "square" as const },
];

export default function TailoringHome() {
  return (
    <main className="w-full min-h-screen relative selection:bg-foreground selection:text-white">
      <div className="relative z-10">
        <Navbar />
        
        <TailoringHero />
        <TailoringDescription />
        <ImageGallery title="Blouse Designs" subtitle="Exquisite & Intricate Creations" images={blouseDesignImages} />
        <ImageGallery title="Family Combos" subtitle="Matching & Coordinated Outfits" images={familyComboImages} />
        
        <Footer />
      </div>
    </main>
  );
}
