"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function TailoringCTA() {
  return (
    <section className="w-full py-32 bg-background flex justify-center items-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1000px] w-full bg-foreground/5 p-12 md:p-20 text-center flex flex-col items-center justify-center relative overflow-hidden"
      >
        <span className="text-foreground/50 tracking-[0.4em] uppercase text-[10px] font-bold mb-6">
          Your Vision, Realized
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-foreground font-light mb-8 max-w-2xl leading-tight">
          Ready to stitch your dream outfit?
        </h2>
        <p className="text-foreground/70 font-sans text-sm md:text-base font-light max-w-lg mb-12 leading-relaxed">
          Whether you are based locally or halfway across the globe, our master tailors are ready to craft a flawless, bespoke garment tailored exactly to your measurements.
        </p>
        
        <a 
          href="#contact"
          className="inline-flex items-center gap-4 bg-foreground text-background px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-500 ease-out"
        >
          <MessageCircle className="w-5 h-5" />
          Consult via WhatsApp
        </a>

        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-foreground/20"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-foreground/20"></div>
      </motion.div>
    </section>
  );
}
