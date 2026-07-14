import Navbar from "@/components/Navbar";
import BeautyHero from "@/components/beauty/BeautyHero";
import BeautyDescription from "@/components/beauty/BeautyDescription";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";

const makeupImages = [
  { id: 1, src: "/assets/makeup and hairstyle/mh1.jpeg", category: "Makeup & Hairstyle", size: "large" as const },
  { id: 2, src: "/assets/makeup and hairstyle/mh2.jpeg", category: "Makeup & Hairstyle", size: "tall" as const },
  { id: 3, src: "/assets/makeup and hairstyle/mh3.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 4, src: "/assets/makeup and hairstyle/mh4.jpeg", category: "Makeup & Hairstyle", size: "wide" as const },
  { id: 5, src: "/assets/makeup and hairstyle/mh5.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 6, src: "/assets/makeup and hairstyle/mh6.jpeg", category: "Makeup & Hairstyle", size: "tall" as const },
  { id: 7, src: "/assets/makeup and hairstyle/mh7.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 8, src: "/assets/makeup and hairstyle/mh8.jpeg", category: "Makeup & Hairstyle", size: "large" as const },
  { id: 9, src: "/assets/makeup and hairstyle/mh9.jpeg", category: "Makeup & Hairstyle", size: "wide" as const },
  { id: 10, src: "/assets/makeup and hairstyle/mh10.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 11, src: "/assets/makeup and hairstyle/mh11.jpeg", category: "Makeup & Hairstyle", size: "tall" as const },
  { id: 12, src: "/assets/makeup and hairstyle/mh12.jpeg", category: "Makeup & Hairstyle", size: "large" as const },
  { id: 13, src: "/assets/makeup and hairstyle/mh13.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 14, src: "/assets/makeup and hairstyle/mh14.jpeg", category: "Makeup & Hairstyle", size: "wide" as const },
  { id: 15, src: "/assets/makeup and hairstyle/mh15.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 16, src: "/assets/makeup and hairstyle/mh16.jpeg", category: "Makeup & Hairstyle", size: "tall" as const },
  { id: 17, src: "/assets/makeup and hairstyle/mh17.jpeg", category: "Makeup & Hairstyle", size: "large" as const },
  { id: 18, src: "/assets/makeup and hairstyle/mh18.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 19, src: "/assets/makeup and hairstyle/mh19.jpeg", category: "Makeup & Hairstyle", size: "wide" as const },
  { id: 20, src: "/assets/makeup and hairstyle/mh20.jpeg", category: "Makeup & Hairstyle", size: "tall" as const },
  { id: 21, src: "/assets/makeup and hairstyle/mh21.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 22, src: "/assets/makeup and hairstyle/mh22.jpeg", category: "Makeup & Hairstyle", size: "large" as const },
  { id: 23, src: "/assets/makeup and hairstyle/mh23.jpeg", category: "Makeup & Hairstyle", size: "wide" as const },
  { id: 24, src: "/assets/makeup and hairstyle/mh24.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 25, src: "/assets/makeup and hairstyle/mh25.jpeg", category: "Makeup & Hairstyle", size: "tall" as const },
  { id: 26, src: "/assets/makeup and hairstyle/mh26.jpeg", category: "Makeup & Hairstyle", size: "large" as const },
  { id: 27, src: "/assets/makeup and hairstyle/mh27.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 28, src: "/assets/makeup and hairstyle/mh28.jpeg", category: "Makeup & Hairstyle", size: "wide" as const },
  { id: 29, src: "/assets/makeup and hairstyle/mh29.jpeg", category: "Makeup & Hairstyle", size: "tall" as const },
  { id: 30, src: "/assets/makeup and hairstyle/mh30.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
  { id: 31, src: "/assets/makeup and hairstyle/mh31.jpeg", category: "Makeup & Hairstyle", size: "large" as const },
  { id: 32, src: "/assets/makeup and hairstyle/mh32.jpeg", category: "Makeup & Hairstyle", size: "square" as const },
];

export default function BeautyParlour() {
  return (
    <main className="w-full min-h-screen relative selection:bg-foreground selection:text-white">
      <div className="relative z-10">
        <Navbar />
        
        <BeautyHero />
        <BeautyDescription />
        <ImageGallery title="Our Recent Works" subtitle="Makeup & Hairstyle" images={makeupImages} />
        
        <Footer />
      </div>
    </main>
  );
}
