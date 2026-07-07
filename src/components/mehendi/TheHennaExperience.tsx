"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TheHennaExperience() {
  const modes = [
    {
      num: "01",
      title: "Consultation",
      desc: "Discuss motifs, themes, and bridal dress coordination to ensure your design matches your vision."
    },
    {
      num: "02",
      title: "Custom Design",
      desc: "We sketch personalized elements—from couple portraits to skylines—making the henna uniquely yours."
    },
    {
      num: "03",
      title: "Application",
      desc: "A relaxed, highly professional application session using our signature 100% organic, hand-mixed paste."
    },
    {
      num: "04",
      title: "Aftercare",
      desc: "We provide specialized organic sealants and aftercare guidance to guarantee the darkest possible stain."
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
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-8 leading-tight">
            The Henna <br/> Experience.
          </h2>
          <p className="text-background/60 font-sans text-sm leading-relaxed font-light">
            We believe bridal Mehendi is a luxurious ritual. Our systematic process ensures a serene application environment and a stunning, long-lasting stain.
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
