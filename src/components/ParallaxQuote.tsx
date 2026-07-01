"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function ParallaxQuote() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax subtle movement for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="py-10 md:py-12 px-8">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left Side: Quote */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col justify-center text-left"
        >
          <div className="w-20 h-[3px] bg-foreground mb-10"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.3] mb-8 font-bold italic">
            "Dance is the hidden language of the soul.
          </h2>
          <p className="text-lg md:text-2xl uppercase tracking-[0.2em] font-sans text-foreground/90 font-bold">
            We merely provide the canvas."
          </p>
        </motion.div>

        {/* Right Side: Image with Parallax */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-foreground/10"
        >
          <motion.div style={{ y, height: "130%", top: "-15%" }} className="absolute inset-0 w-full">
            <Image 
              src="/assets/bharatanatyam_dancer.png" 
              alt="Bharatanatyam Dancer Canvas" 
              fill 
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
