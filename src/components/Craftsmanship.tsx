"use client";
import { motion } from 'framer-motion';
import { Scissors, Ruler, Sparkles, CheckCircle } from 'lucide-react';

export default function Craftsmanship() {
  const steps = [
    {
      icon: <Scissors className="w-6 h-6 text-foreground" />,
      title: "Silk Selection",
      desc: "We source the finest, authentic Kanjeevaram silks straight from traditional looms."
    },
    {
      icon: <Ruler className="w-6 h-6 text-foreground" />,
      title: "Divine Geometry",
      desc: "Precise measurements ensure perfect pleat falls and complete freedom of movement."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-foreground" />,
      title: "Heritage Stitching",
      desc: "Hand-finished borders and heavy zari work meticulously preserved during tailoring."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-foreground" />,
      title: "The Final Polish",
      desc: "Rigorous quality checks before the silk ever touches the sacred stage."
    }
  ];

  return (
    <section className="py-16 px-8 relative z-10">
      <div className="w-full max-w-[1400px] mx-auto">
        
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-sm md:text-base uppercase tracking-[0.3em] text-foreground mb-6 font-sans font-bold shadow-sm">The Process</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground tracking-tight font-bold mb-6">Art of Tailoring</h2>
          <div className="w-[3px] h-16 bg-foreground"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel p-10 flex flex-col items-center text-center hover:-translate-y-4 transition-transform duration-500 bg-white/30 backdrop-blur-xl shadow-lg border border-white/20"
            >
              <div className="w-16 h-16 rounded-full border border-foreground/30 flex items-center justify-center mb-8 bg-white/20">
                {step.icon}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground font-bold mb-6">{step.title}</h3>
              <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
