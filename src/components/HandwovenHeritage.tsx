"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HandwovenHeritage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="w-full py-24 overflow-hidden bg-foreground text-white relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Animated Images */}
        <div className="w-full lg:w-1/2 relative h-[600px] flex gap-4 md:gap-8 justify-center">
          <motion.div style={{ y: y1 }} className="relative w-[45%] h-[80%] mt-[10%] glass-panel !border-white/10 overflow-hidden rounded-sm">
            <Image 
              src="/assets/aari_hero.png" 
              alt="Aari Embroidery" 
              fill 
              className="object-cover opacity-80" 
            />
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative w-[45%] h-[80%] glass-panel !border-white/10 overflow-hidden rounded-sm">
            <Image 
              src="/assets/mehendi_hero.png" 
              alt="Mehendi Art" 
              fill 
              className="object-cover opacity-80" 
            />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs font-sans tracking-[0.4em] uppercase font-bold mb-4 block">
              15 Years of Legacy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
              A Global Presence, <br/><span className="italic font-light">Empowering Others.</span>
            </h2>
            <div className="space-y-6 text-white/70 font-sans text-sm md:text-base leading-relaxed">
              <p>
                What began over 15 years ago as a small home-based tailoring business has blossomed into a trusted international brand. Today, we are proud that nearly 90% of our customers reside overseas, trusting Sri Sanjana to deliver custom-made outfits and exquisite craftsmanship worldwide.
              </p>
              <p>
                Our mission extends beyond creating beautiful garments and art. We are deeply committed to empowering others by providing affordable training programs. Whether you join us offline at our Virudhunagar center or participate in our global online classes, we are here to help you master these creative skills.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-[1px] bg-gold"></div>
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Trusted Worldwide</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
