"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function TrainingCTA() {
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
          Begin Your Journey
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-foreground font-light mb-8 max-w-2xl leading-tight">
          Ready to master the craft?
        </h2>
        <p className="text-foreground/70 font-sans text-sm md:text-base font-light max-w-lg mb-12 leading-relaxed">
          Classes fill up quickly. Secure your spot in our upcoming batch, whether online or at our Virudhunagar headquarters.
        </p>
        
        <a 
          href="#contact"
          className="inline-flex items-center gap-4 bg-foreground text-background px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-500 ease-out"
        >
          <MessageCircle className="w-5 h-5" />
          Enroll via WhatsApp
        </a>

        {/* Decorative Lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-foreground/20"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-foreground/20"></div>
      </motion.div>
    </section>
  );
}
