import Navbar from "@/components/Navbar";
import TrainingHero from "@/components/training/TrainingHero";
import TrainingCurriculum from "@/components/training/TrainingCurriculum";
import LearningModes from "@/components/training/LearningModes";
import TrainingCTA from "@/components/training/TrainingCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function TrainingAcademy() {
  return (
    <main className="w-full min-h-screen relative selection:bg-foreground selection:text-white">
      <div className="relative z-10">
        <Navbar />
        
        <TrainingHero />
        <TrainingCurriculum />
        <LearningModes />
        <TrainingCTA />
        
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
