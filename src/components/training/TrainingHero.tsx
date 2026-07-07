"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrainingHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-background px-6 lg:px-20 pt-32 pb-16 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left: Minimal Typography */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col z-10"
        >
          <span className="text-foreground/50 tracking-[0.5em] text-[10px] uppercase font-bold mb-8 block">
            The Academy
          </span>
          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-foreground tracking-tighter font-light leading-[1.1]"
            >
              Master <br /> the Craft.
            </motion.h1>
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut", originX: 0 }}
            className="w-12 h-[1px] bg-foreground/30 mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-foreground/70 font-sans text-sm md:text-base max-w-sm font-light leading-relaxed mb-8"
          >
            Learn from the absolute best. We condense 15+ years of Sri Sanjana&apos;s mastery into rigorous, hands-on training programs designed to transform absolute beginners into industry-leading artisans.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            <a href="#courses" className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold transition-colors duration-300">
              Explore Courses
              <div className="w-4 h-[1px] bg-background"></div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Elegant Offset Image */}
        <div className="w-full lg:w-1/2 relative flex justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-[500px] aspect-[3/4] overflow-hidden bg-foreground/5"
          >
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src="/assets/academy_hero.png" 
                alt="Training Academy" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-90" 
                priority
              />
            </div>
          </motion.div>
          {/* Decorative minimalist accent */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "40%" }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            className="absolute -right-6 top-1/4 w-[1px] bg-foreground/20 hidden lg:block"
          />
        </div>
        
      </div>
    </section>
  );
}
