"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HandwovenHeritage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  return (
    <section ref={ref} className="py-16 px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto bg-foreground rounded-[2rem] shadow-2xl overflow-hidden border border-gold/20"
      >
        
        {/* Left Side: Elegant Text */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] font-sans font-bold text-gold mb-6">
            Our Heritage
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gold-light leading-[1.2] mb-8 font-bold">
            The Weave of the Gods
          </h2>
          <p className="font-sans text-gold-light/90 leading-relaxed text-base md:text-xl font-medium mb-12">
            Every thread carries a prayer. Our costumes are tailored exclusively using semi silk and semi kanchipuram silk sarees. We source only the finest fabrics, ensuring your performance radiates with the divine grace it deserves while providing the flexibility needed for intricate movements.
          </p>
          
          <div>
            <Link href="/about" className="inline-flex items-center gap-4 text-gold hover:text-gold-light transition-colors group">
              <span className="uppercase tracking-[0.2em] font-bold text-xs md:text-sm">Read Our Story</span>
              <span className="w-12 h-[1px] bg-gold group-hover:w-20 transition-all duration-500"></span>
            </Link>
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full overflow-hidden">
          <motion.div style={{ y, height: "130%", top: "-15%" }} className="absolute inset-0 w-full">
            <Image 
              src="/assets/dress6.jpeg" 
              alt="Handwoven Silk Process" 
              fill 
              className="object-cover object-center"
            />
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/20"></div>
          </motion.div>
        </div>
        
      </motion.div>
    </section>
  );
}
