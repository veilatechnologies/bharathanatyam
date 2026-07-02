"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MeasurementsPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black overflow-hidden relative"
    >
      <Navbar />
      
      {/* Hero Header */}
      <section className="w-full pt-40 pb-12 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="text-center z-10 px-6"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Client Portal
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-foreground tracking-tighter font-bold mb-6">
            Measurement Guide
          </h1>
          <p className="text-sm md:text-base font-sans font-medium text-foreground/70 max-w-xl mx-auto">
            Bespoke tailoring requires precision. Please follow this guide carefully when submitting your measurements for your custom Bharatanatyam costume.
          </p>
          <div className="w-12 h-[2px] bg-foreground mx-auto mt-8"></div>
        </motion.div>
      </section>

      {/* Measurement Image Display */}
      <section className="w-full max-w-[1000px] mx-auto px-6 md:px-12 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="w-full bg-foreground/5 p-4 md:p-8 rounded-2xl shadow-2xl border border-foreground/10"
        >
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-white">
            <Image 
              src="/assets/measurement.jpeg" 
              alt="Measurement Guide" 
              fill 
              className="object-contain" 
            />
          </div>
        </motion.div>
        
        {/* Support Callout */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-sans font-bold text-foreground/60 uppercase tracking-[0.1em]">
            Need help taking measurements?
          </p>
          <p className="text-base font-sans text-foreground mt-2">
            Reach out to us on WhatsApp: <span className="font-bold">+91 83447 18008</span>
          </p>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}
