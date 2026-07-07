"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function LearningModes() {
  const modes = [
    {
      num: "01",
      title: "In-Studio Virudhunagar",
      desc: "Immersive, hands-on training with raw materials provided. Perfect for deep focus and direct master feedback."
    },
    {
      num: "02",
      title: "Global Online",
      desc: "Live virtual masterclasses designed for overseas students, featuring high-res multi-cam streams and 1-on-1 reviews."
    },
    {
      num: "03",
      title: "Certification",
      desc: "Upon completion, receive a globally recognized certificate from Sri Sanjana, attesting to your elite skill level."
    },
    {
      num: "04",
      title: "Business Support",
      desc: "Learn not just the craft, but the business. We guide you on setting up your own premium boutique or parlor."
    }
  ];

  return (
    <section className="w-full py-32 bg-foreground text-background">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Minimal Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/3 flex flex-col"
        >
          <span className="text-background/50 tracking-[0.4em] uppercase text-[10px] font-bold mb-6">
            The Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-8 leading-tight">
            Learn From <br/> Anywhere.
          </h2>
          <p className="text-background/60 font-sans text-sm leading-relaxed font-light">
            Whether you are joining us in our Virudhunagar headquarters or logging in from across the world, our training architecture guarantees an uncompromising educational experience.
          </p>
        </motion.div>

        {/* Right: Sleek List */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {modes.map((mode, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-8 py-8 border-b border-background/10 last:border-0 group cursor-pointer"
            >
              <span className="text-background/30 font-serif italic text-xl group-hover:text-background group-hover:-translate-y-1 transition-all duration-500">
                {mode.num}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
                <h3 className="text-xl md:text-2xl font-serif font-light text-background group-hover:pl-4 transition-all duration-500">
                  {mode.title}
                </h3>
                <p className="text-background/50 font-sans text-sm font-light sm:max-w-[250px] sm:text-right group-hover:text-background/90 transition-colors duration-500">
                  {mode.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
