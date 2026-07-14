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
      role: "Bridal Client",
      text: "Sri Sanjana crafted the most breathtaking Aari work blouse for my wedding. The fitting and attention to detail were simply perfect."
    },
    {
      name: "Kavya R.",
      role: "Beauty Client",
      text: "The Mehendi design for my engagement was incredibly intricate, and the makeup was flawlessly natural. A truly premium experience."
    }
  ];

  return (
    <section className="py-16 px-8 relative z-10">
      <div className="w-full max-w-[1400px] mx-auto">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
          }}
          className="text-center mb-20"
        >
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground font-bold mb-4">Voices of Grace</motion.h2>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-base md:text-xl uppercase tracking-[0.3em] font-sans font-bold text-foreground/80">From our cherished clients</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    delay: idx * 0.2,
                    staggerChildren: 0.1,
                    delayChildren: idx * 0.2 + 0.3
                  } 
                }
              }}
              className="p-12 flex flex-col items-center text-center glass-panel group transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] hover:border-gold/30"
            >
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="flex space-x-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div key={star} variants={{ hidden: { opacity: 0, scale: 0, rotate: -180 }, visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 200 } } }}>
                    <Star className="w-4 h-4 fill-foreground text-foreground transition-colors duration-500 group-hover:fill-gold group-hover:text-gold" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-lg md:text-xl font-serif italic leading-relaxed mb-8 font-bold text-foreground">&quot;{review.text}&quot;</motion.p>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="mt-auto flex flex-col items-center">
                <h4 className="text-sm md:text-base font-black uppercase tracking-[0.2em] font-sans mb-1 text-foreground">{review.name}</h4>
                <span className="text-xs uppercase tracking-[0.1em] font-sans text-foreground/80 font-medium">{review.role}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
