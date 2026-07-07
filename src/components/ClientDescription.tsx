"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ClientDescription() {
  const servicesList = [
    "Custom Tailoring & Designer Wear",
    "Tailoring Training",
    "Aari Work",
    "Hand Embroidery",
    "Machine Embroidery",
    "Mehendi (Henna Art)",
    "Tattoo Services",
    "And many more creative solutions"
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 relative z-20 bg-foreground text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Welcome Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-white rounded-full p-2 mx-auto mb-8 shadow-2xl relative">
            <Image src="/assets/finallogo1.png" alt="Sri Sanjana" fill className="object-contain p-2" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Welcome to Sri Sanjana
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel !border-white/10 p-8 md:p-16 mb-16 shadow-2xl relative overflow-hidden w-full"
        >
          {/* Decorative background logo fade */}
          <div className="absolute -right-20 -bottom-20 opacity-[0.03] w-96 h-96 pointer-events-none">
            <Image src="/assets/finallogo1.png" alt="" fill className="object-contain" />
          </div>

          <div className="relative z-10 text-white/90 font-sans text-base md:text-lg leading-relaxed space-y-6 text-center md:text-left">
            <p>
              For over 15 years, Sri Sanjana has evolved from a small home-based tailoring studio into a trusted global brand. Today, nearly 90% of our customers reside overseas, trusting us to design and deliver custom-made outfits worldwide.
            </p>
            <p>
              Our expertise has expanded to encompass a wide range of creative and professional services:
            </p>
            
            {/* The Services List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 max-w-3xl mx-auto md:mx-0">
              {servicesList.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold shrink-0"></div>
                  <span className="font-bold tracking-wide">{service}</span>
                </div>
              ))}
            </div>

            <p>
              Beyond our craftsmanship, we are dedicated to empowering others through affordable training programs—available both at our Virudhunagar center and online for global learners.
            </p>
            
            <p className="pt-6 font-serif text-2xl md:text-3xl text-gold italic text-center md:text-left">
              Thank you for being a part of the Sri Sanjana family.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
