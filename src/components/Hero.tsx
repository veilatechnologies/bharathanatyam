"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <>
      <section ref={ref} className="relative w-full h-[70vh] md:h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Full Width Background Image with Parallax */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image 
            src="/assets/hero_bharatanatyam.png" 
            alt="Bharatanatyam Silk" 
            fill 
            className="object-cover object-[center_20%] hover:scale-105 transition-transform duration-[6s]" 
            priority 
          />
          {/* Subtle gradient overlay to make text pop without hiding image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </motion.div>

        {/* Minimalist Brand Name Only */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 w-full text-center px-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-serif text-white tracking-[0.1em] font-bold drop-shadow-2xl uppercase whitespace-nowrap">
            Sri Sanjana
          </h1>
        </motion.div>
      </section>

      {/* Intro Section Below Hero */}
      <section className="w-full py-12 px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-[1000px] mx-auto text-center glass-panel p-12 md:p-20 shadow-2xl"
        >
          
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="w-16 h-[3px] bg-foreground"></span>
            <span className="text-sm uppercase tracking-[0.3em] font-sans font-bold text-foreground drop-shadow-sm">Since 2010</span>
            <span className="w-16 h-[3px] bg-foreground"></span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground font-bold leading-tight mb-8">
            The Pinnacle of <br className="hidden md:block"/> Authentic Attire.
          </h2>
          
          <p className="text-lg md:text-xl font-sans text-foreground/90 leading-relaxed mb-12 font-medium max-w-[800px] mx-auto">
            Dressing generations of classical dancers with perfectly tailored costumes made exclusively from semi silk and semi kanchipuram silk sarees.
          </p>
          
          <div>
            <Link href="/collections" className="btn-structured border-foreground bg-foreground text-white hover:bg-transparent hover:text-foreground shadow-xl text-sm md:text-base">
              Explore Collections
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
