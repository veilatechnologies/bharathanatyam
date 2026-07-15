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

const longGownImages = [
  { id: 1, src: "/assets/longgown/lg1.jpeg", category: "Long Gown", size: "large" as const },
  { id: 2, src: "/assets/longgown/lg2.jpeg", category: "Long Gown", size: "tall" as const },
  { id: 3, src: "/assets/longgown/lg3.jpeg", category: "Long Gown", size: "square" as const },
  { id: 4, src: "/assets/longgown/lg4.jpeg", category: "Long Gown", size: "wide" as const },
  { id: 5, src: "/assets/longgown/lg5.jpeg", category: "Long Gown", size: "square" as const },
  { id: 6, src: "/assets/longgown/lg6.jpeg", category: "Long Gown", size: "tall" as const },
  { id: 7, src: "/assets/longgown/lg7.jpeg", category: "Long Gown", size: "square" as const },
  { id: 8, src: "/assets/longgown/lg8.jpeg", category: "Long Gown", size: "large" as const },
  { id: 9, src: "/assets/longgown/lg9.jpeg", category: "Long Gown", size: "wide" as const },
  { id: 10, src: "/assets/longgown/lg10.jpeg", category: "Long Gown", size: "square" as const },
  { id: 11, src: "/assets/longgown/lg11.jpeg", category: "Long Gown", size: "tall" as const },
  { id: 12, src: "/assets/longgown/lg12.jpeg", category: "Long Gown", size: "large" as const },
  { id: 13, src: "/assets/longgown/lg13.jpeg", category: "Long Gown", size: "square" as const },
  { id: 14, src: "/assets/longgown/lg14.jpeg", category: "Long Gown", size: "wide" as const },
  { id: 15, src: "/assets/longgown/lg15.jpeg", category: "Long Gown", size: "square" as const },
  { id: 16, src: "/assets/longgown/lg16.jpeg", category: "Long Gown", size: "tall" as const },
];

const pattuPavadaiImages = [
  { id: 1, src: "/assets/pattupavadai/pp1.jpeg", category: "Pattu Pavadai", size: "large" as const },
  { id: 2, src: "/assets/pattupavadai/pp2.jpeg", category: "Pattu Pavadai", size: "tall" as const },
  { id: 3, src: "/assets/pattupavadai/pp3.jpeg", category: "Pattu Pavadai", size: "square" as const },
  { id: 4, src: "/assets/pattupavadai/pp4.jpeg", category: "Pattu Pavadai", size: "wide" as const },
  { id: 5, src: "/assets/pattupavadai/pp5.jpeg", category: "Pattu Pavadai", size: "square" as const },
  { id: 6, src: "/assets/pattupavadai/pp6.jpeg", category: "Pattu Pavadai", size: "tall" as const },
  { id: 7, src: "/assets/pattupavadai/pp7.jpeg", category: "Pattu Pavadai", size: "square" as const },
  { id: 8, src: "/assets/pattupavadai/pp8.jpeg", category: "Pattu Pavadai", size: "large" as const },
  { id: 9, src: "/assets/pattupavadai/pp9.jpeg", category: "Pattu Pavadai", size: "wide" as const },
  { id: 10, src: "/assets/pattupavadai/pp10.jpeg", category: "Pattu Pavadai", size: "square" as const },
  { id: 11, src: "/assets/pattupavadai/pp11.jpeg", category: "Pattu Pavadai", size: "tall" as const },
  { id: 12, src: "/assets/pattupavadai/pp12.jpeg", category: "Pattu Pavadai", size: "large" as const },
  { id: 13, src: "/assets/pattupavadai/pp13.jpeg", category: "Pattu Pavadai", size: "square" as const },
  { id: 14, src: "/assets/pattupavadai/pp14.jpeg", category: "Pattu Pavadai", size: "wide" as const },
  { id: 15, src: "/assets/pattupavadai/pp15.jpeg", category: "Pattu Pavadai", size: "square" as const },
  { id: 16, src: "/assets/pattupavadai/pp16.jpeg", category: "Pattu Pavadai", size: "tall" as const },
  { id: 17, src: "/assets/pattupavadai/pp17.jpeg", category: "Pattu Pavadai", size: "large" as const },
  { id: 18, src: "/assets/pattupavadai/pp18.jpeg", category: "Pattu Pavadai", size: "square" as const },
  { id: 19, src: "/assets/pattupavadai/pp19.jpeg", category: "Pattu Pavadai", size: "wide" as const },
];

const machineEmbroideryImages = [
  { id: 1, src: "/assets/machineembroidery/me1.jpeg", category: "Machine Embroidery", size: "large" as const },
  { id: 2, src: "/assets/machineembroidery/me2.jpeg", category: "Machine Embroidery", size: "tall" as const },
  { id: 3, src: "/assets/machineembroidery/me3.jpeg", category: "Machine Embroidery", size: "square" as const },
  { id: 4, src: "/assets/machineembroidery/me4.jpeg", category: "Machine Embroidery", size: "wide" as const },
  { id: 5, src: "/assets/machineembroidery/me5.jpeg", category: "Machine Embroidery", size: "square" as const },
  { id: 6, src: "/assets/machineembroidery/me6.jpeg", category: "Machine Embroidery", size: "tall" as const },
  { id: 7, src: "/assets/machineembroidery/me7.jpeg", category: "Machine Embroidery", size: "square" as const },
  { id: 8, src: "/assets/machineembroidery/me8.jpeg", category: "Machine Embroidery", size: "large" as const },
  { id: 9, src: "/assets/machineembroidery/me9.jpeg", category: "Machine Embroidery", size: "wide" as const },
  { id: 10, src: "/assets/machineembroidery/me10.jpeg", category: "Machine Embroidery", size: "square" as const },
  { id: 11, src: "/assets/machineembroidery/me11.jpeg", category: "Machine Embroidery", size: "tall" as const },
  { id: 12, src: "/assets/machineembroidery/me12.jpeg", category: "Machine Embroidery", size: "large" as const },
  { id: 13, src: "/assets/machineembroidery/me13.jpeg", category: "Machine Embroidery", size: "square" as const },
  { id: 14, src: "/assets/machineembroidery/me14.jpeg", category: "Machine Embroidery", size: "wide" as const },
  { id: 15, src: "/assets/machineembroidery/me15.jpeg", category: "Machine Embroidery", size: "square" as const },
  { id: 16, src: "/assets/machineembroidery/me16.jpeg", category: "Machine Embroidery", size: "tall" as const },
  { id: 17, src: "/assets/machineembroidery/me17.jpeg", category: "Machine Embroidery", size: "large" as const },
  { id: 18, src: "/assets/machineembroidery/me18.jpeg", category: "Machine Embroidery", size: "square" as const },
  { id: 19, src: "/assets/machineembroidery/me19.jpeg", category: "Machine Embroidery", size: "wide" as const },
  { id: 20, src: "/assets/machineembroidery/me20.jpeg", category: "Machine Embroidery", size: "tall" as const },
  { id: 21, src: "/assets/machineembroidery/me21.jpeg", category: "Machine Embroidery", size: "square" as const },
  { id: 22, src: "/assets/machineembroidery/me22.jpeg", category: "Machine Embroidery", size: "large" as const },
  { id: 23, src: "/assets/machineembroidery/me23.jpeg", category: "Machine Embroidery", size: "wide" as const },
  { id: 24, src: "/assets/machineembroidery/me24.jpeg", category: "Machine Embroidery", size: "square" as const },
  { id: 25, src: "/assets/machineembroidery/me25.jpeg", category: "Machine Embroidery", size: "tall" as const },
  { id: 26, src: "/assets/machineembroidery/me26.jpeg", category: "Machine Embroidery", size: "large" as const },
];

const lehengaImages = [
  { id: 1, src: "/assets/lehenga/le1.jpeg", category: "Lehenga", size: "large" as const },
  { id: 2, src: "/assets/lehenga/le2.jpeg", category: "Lehenga", size: "tall" as const },
  { id: 3, src: "/assets/lehenga/le3.jpeg", category: "Lehenga", size: "square" as const },
  { id: 4, src: "/assets/lehenga/le4.jpeg", category: "Lehenga", size: "wide" as const },
  { id: 5, src: "/assets/lehenga/le5.jpeg", category: "Lehenga", size: "square" as const },
  { id: 6, src: "/assets/lehenga/le6.jpeg", category: "Lehenga", size: "tall" as const },
  { id: 7, src: "/assets/lehenga/le7.jpeg", category: "Lehenga", size: "square" as const },
  { id: 8, src: "/assets/lehenga/le8.jpeg", category: "Lehenga", size: "large" as const },
  { id: 9, src: "/assets/lehenga/le9.jpeg", category: "Lehenga", size: "wide" as const },
  { id: 10, src: "/assets/lehenga/le10.jpeg", category: "Lehenga", size: "square" as const },
  { id: 11, src: "/assets/lehenga/le11.jpeg", category: "Lehenga", size: "tall" as const },
  { id: 12, src: "/assets/lehenga/le12.jpeg", category: "Lehenga", size: "large" as const },
  { id: 13, src: "/assets/lehenga/le13.jpeg", category: "Lehenga", size: "square" as const },
  { id: 14, src: "/assets/lehenga/le14.jpeg", category: "Lehenga", size: "wide" as const },
];

const kidsGownImages = [
  { id: 1, src: "/assets/kidsgown/kg1.jpeg", category: "Kids Gown", size: "large" as const },
  { id: 2, src: "/assets/kidsgown/kg2.jpeg", category: "Kids Gown", size: "tall" as const },
  { id: 3, src: "/assets/kidsgown/kg3.jpeg", category: "Kids Gown", size: "square" as const },
  { id: 4, src: "/assets/kidsgown/kg4.jpeg", category: "Kids Gown", size: "wide" as const },
  { id: 5, src: "/assets/kidsgown/kg5.jpeg", category: "Kids Gown", size: "square" as const },
  { id: 6, src: "/assets/kidsgown/kg6.jpeg", category: "Kids Gown", size: "tall" as const },
  { id: 7, src: "/assets/kidsgown/kg7.jpeg", category: "Kids Gown", size: "square" as const },
  { id: 8, src: "/assets/kidsgown/kg8.jpeg", category: "Kids Gown", size: "large" as const },
  { id: 9, src: "/assets/kidsgown/kg9.jpeg", category: "Kids Gown", size: "wide" as const },
  { id: 10, src: "/assets/kidsgown/kg10.jpeg", category: "Kids Gown", size: "square" as const },
  { id: 11, src: "/assets/kidsgown/kg11.jpeg", category: "Kids Gown", size: "tall" as const },
  { id: 12, src: "/assets/kidsgown/kg12.jpeg", category: "Kids Gown", size: "large" as const },
  { id: 13, src: "/assets/kidsgown/kg13.jpeg", category: "Kids Gown", size: "square" as const },
  { id: 14, src: "/assets/kidsgown/kg14.jpeg", category: "Kids Gown", size: "wide" as const },
  { id: 15, src: "/assets/kidsgown/kg15.jpeg", category: "Kids Gown", size: "square" as const },
  { id: 16, src: "/assets/kidsgown/kg16.jpeg", category: "Kids Gown", size: "tall" as const },
  { id: 17, src: "/assets/kidsgown/kg17.jpeg", category: "Kids Gown", size: "large" as const },
  { id: 18, src: "/assets/kidsgown/kg18.jpeg", category: "Kids Gown", size: "square" as const },
];
const momDaughterImages = [
  { id: 1, src: "/assets/mom_and_daughter/md1.jpeg", category: "Mom & Daughter", size: "large" as const },
  { id: 2, src: "/assets/mom_and_daughter/md2.jpeg", category: "Mom & Daughter", size: "tall" as const },
  { id: 3, src: "/assets/mom_and_daughter/md3.jpeg", category: "Mom & Daughter", size: "square" as const },
  { id: 4, src: "/assets/mom_and_daughter/md4.jpeg", category: "Mom & Daughter", size: "wide" as const },
  { id: 5, src: "/assets/mom_and_daughter/md5.jpeg", category: "Mom & Daughter", size: "square" as const },
  { id: 6, src: "/assets/mom_and_daughter/md6.jpeg", category: "Mom & Daughter", size: "tall" as const },
  { id: 7, src: "/assets/mom_and_daughter/md7.jpeg", category: "Mom & Daughter", size: "square" as const },
  { id: 8, src: "/assets/mom_and_daughter/md8.jpeg", category: "Mom & Daughter", size: "large" as const },
  { id: 9, src: "/assets/mom_and_daughter/md9.jpeg", category: "Mom & Daughter", size: "wide" as const },
  { id: 10, src: "/assets/mom_and_daughter/md10.jpeg", category: "Mom & Daughter", size: "square" as const },
  { id: 11, src: "/assets/mom_and_daughter/md11.jpeg", category: "Mom & Daughter", size: "tall" as const },
  { id: 12, src: "/assets/mom_and_daughter/md12.jpeg", category: "Mom & Daughter", size: "large" as const },
  { id: 13, src: "/assets/mom_and_daughter/md13.jpeg", category: "Mom & Daughter", size: "square" as const },
  { id: 14, src: "/assets/mom_and_daughter/md14.jpeg", category: "Mom & Daughter", size: "wide" as const },
  { id: 15, src: "/assets/mom_and_daughter/md15.jpeg", category: "Mom & Daughter", size: "square" as const },
  { id: 16, src: "/assets/mom_and_daughter/md16.jpeg", category: "Mom & Daughter", size: "tall" as const },
  { id: 17, src: "/assets/mom_and_daughter/md17.jpeg", category: "Mom & Daughter", size: "large" as const },
  { id: 18, src: "/assets/mom_and_daughter/md18.jpeg", category: "Mom & Daughter", size: "square" as const },
  { id: 19, src: "/assets/mom_and_daughter/md19.jpeg", category: "Mom & Daughter", size: "wide" as const },
  { id: 20, src: "/assets/mom_and_daughter/md20.jpeg", category: "Mom & Daughter", size: "tall" as const },
  { id: 21, src: "/assets/mom_and_daughter/md21.jpeg", category: "Mom & Daughter", size: "square" as const },
  { id: 22, src: "/assets/mom_and_daughter/md22.jpeg", category: "Mom & Daughter", size: "large" as const },
  { id: 23, src: "/assets/mom_and_daughter/md23.jpeg", category: "Mom & Daughter", size: "wide" as const },
  { id: 24, src: "/assets/mom_and_daughter/md24.jpeg", category: "Mom & Daughter", size: "square" as const },
  { id: 25, src: "/assets/mom_and_daughter/md25.jpeg", category: "Mom & Daughter", size: "tall" as const },
  { id: 26, src: "/assets/mom_and_daughter/md26.jpeg", category: "Mom & Daughter", size: "large" as const },
  { id: 27, src: "/assets/mom_and_daughter/md27.jpeg", category: "Mom & Daughter", size: "square" as const },
  { id: 28, src: "/assets/mom_and_daughter/md28.jpeg", category: "Mom & Daughter", size: "wide" as const },
  { id: 29, src: "/assets/mom_and_daughter/md29.jpeg", category: "Mom & Daughter", size: "tall" as const },
  { id: 30, src: "/assets/mom_and_daughter/md30.jpeg", category: "Mom & Daughter", size: "square" as const },
];

const siblingsComboImages = [
  { id: 1, src: "/assets/siblings_combo/sc1.jpeg", category: "Siblings Combo", size: "large" as const },
  { id: 2, src: "/assets/siblings_combo/sc2.jpeg", category: "Siblings Combo", size: "tall" as const },
  { id: 3, src: "/assets/siblings_combo/sc3.jpeg", category: "Siblings Combo", size: "square" as const },
  { id: 4, src: "/assets/siblings_combo/sc4.jpeg", category: "Siblings Combo", size: "wide" as const },
  { id: 5, src: "/assets/siblings_combo/sc5.jpeg", category: "Siblings Combo", size: "square" as const },
  { id: 6, src: "/assets/siblings_combo/sc6.jpeg", category: "Siblings Combo", size: "tall" as const },
  { id: 7, src: "/assets/siblings_combo/sc7.jpeg", category: "Siblings Combo", size: "square" as const },
  { id: 8, src: "/assets/siblings_combo/sc8.jpeg", category: "Siblings Combo", size: "large" as const },
  { id: 9, src: "/assets/siblings_combo/sc9.jpeg", category: "Siblings Combo", size: "wide" as const },
  { id: 10, src: "/assets/siblings_combo/sc10.jpeg", category: "Siblings Combo", size: "square" as const },
  { id: 11, src: "/assets/siblings_combo/sc11.jpeg", category: "Siblings Combo", size: "tall" as const },
  { id: 12, src: "/assets/siblings_combo/sc12.jpeg", category: "Siblings Combo", size: "large" as const },
  { id: 13, src: "/assets/siblings_combo/sc13.jpeg", category: "Siblings Combo", size: "square" as const },
  { id: 14, src: "/assets/siblings_combo/sc14.jpeg", category: "Siblings Combo", size: "wide" as const },
];

export default function TailoringHome() {
  return (
    <main className="w-full min-h-screen relative selection:bg-foreground selection:text-white">
      <div className="relative z-10">
        <Navbar />
        
        <TailoringHero />
        <TailoringDescription />
        <ImageGallery title="Siblings Combo" subtitle="Siblings Combo" images={siblingsComboImages} />
        <ImageGallery title="Mom & Daughter Combo" subtitle="Mom and Daughter Combo" images={momDaughterImages} />
        <ImageGallery title="Kids Gown" subtitle="Kids Gown" images={kidsGownImages} />
        <ImageGallery title="Lehenga" subtitle="Lehenga" images={lehengaImages} />
        <ImageGallery title="Machine Embroidery" subtitle="Machine Embroidery" images={machineEmbroideryImages} />
        <ImageGallery title="Pattu Pavadai" subtitle="Pattu Pavadai" images={pattuPavadaiImages} />
        <ImageGallery title="Blouse Designs" subtitle="Exquisite & Intricate Creations" images={blouseDesignImages} />
        <ImageGallery title="Long Gowns" subtitle="Long Gown For Adults" images={longGownImages} />
        <ImageGallery title="Family Combos" subtitle="Matching & Coordinated Outfits" images={familyComboImages} />
        
        <Footer />
      </div>
    </main>
  );
}
