"use client";
import { Ruler, Scissors, Sparkles, Gem } from 'lucide-react';
import { motion } from 'framer-motion';
export default function Features() {
  const features = [
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Immaculate Fit",
      desc: "Tailored to your exact measurements for complete freedom of movement on stage."
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Premium Fabrics",
      desc: "Only the highest quality silks and cottons used for durability and luster."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Authentic Zari",
      desc: "Intricate temple borders and pure zari work that catches the stage lights."
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Custom Design",
      desc: "Fully customizable patterns and color combinations to match your vision."
    }
  ];

  return (
    <section className="bg-background border-b border-foreground/20 relative z-10">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group h-[320px] w-full [perspective:1000px]"
            >
              {/* Inner card with 3D transform */}
              <motion.div 
                className="relative w-full h-full [transform-style:preserve-3d]"
                initial={{ rotateY: 0 }}
                whileInView={{ rotateY: 180 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut",
                  delay: 0.5 + (idx * 0.4)
                }}
              >
                
                {/* FRONT FACE */}
                <div className="absolute inset-0 [backface-visibility:hidden] p-8 flex flex-col items-center justify-center text-center border border-foreground/10 rounded-2xl bg-white/20 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <div className="w-20 h-20 flex items-center justify-center mb-6 text-foreground bg-white rounded-full shadow-lg">
                    {feat.icon}
                  </div>
                  <h4 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] font-sans text-foreground">
                    {feat.title}
                  </h4>
                  {/* Hover hint removed since it's automatic */}
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-8 flex flex-col items-center justify-center text-center border border-gold/40 rounded-2xl bg-foreground shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-gold bg-white/10 rounded-full">
                    {feat.icon}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] font-sans text-gold mb-4">
                    {feat.title}
                  </h4>
                  <p className="text-sm md:text-base font-sans text-white/90 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
