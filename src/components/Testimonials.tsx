"use client";
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const reviews = [
    {
      name: "Anjali S.",
      role: "Professional Dancer",
      text: "The fall of the pleats and the richness of the zari are unmatched. I felt absolute freedom during my Tillana."
    },
    {
      name: "Meera V.",
      role: "Dance Teacher",
      text: "Sri Sanjana doesn't just stitch clothes; they engineer them for the stage. My students won't wear anything else."
    },
    {
      name: "Kavya R.",
      role: "Arangetram Student",
      text: "For my Arangetram, the dress was as praised as the performance. The temple border work is breathtaking."
    }
  ];

  return (
    <section className="py-16 px-8 relative z-10">
      <div className="w-full max-w-[1400px] mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground font-bold mb-4">Voices of Grace</h2>
          <p className="text-base md:text-xl uppercase tracking-[0.3em] font-sans font-bold text-foreground/80">From our esteemed dancers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-12 flex flex-col items-center text-center glass-panel group transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:border-gold/30"
            >
              <div className="flex space-x-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-foreground text-foreground transition-colors duration-500 group-hover:fill-gold group-hover:text-gold" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-serif italic leading-relaxed mb-8 font-bold text-foreground">"{review.text}"</p>
              <div className="mt-auto flex flex-col items-center">
                <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em] font-sans mb-1 text-foreground">{review.name}</h4>
                <span className="text-xs uppercase tracking-[0.1em] font-sans text-foreground/80 font-medium">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
