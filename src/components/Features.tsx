"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, GraduationCap, Flower2, PenTool } from 'lucide-react';
import Link from 'next/link';

export default function Features() {
  const pillars = [
    {
      title: "Custom Tailoring",
      subtitle: "& Designer Wear",
      description: "Delivering impeccable custom-made outfits and authentic Bharathanatyam attire to customers worldwide.",
      icon: <Scissors className="w-10 h-10 text-white" />,
      link: "/tailoring"
    },
    {
      title: "Training Academy",
      subtitle: "Empowering Others",
      description: "Affordable training programs for learners everywhere, available both offline at our Virudhunagar center and online.",
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      link: "/training"
    },
    {
      title: "Mehendi Artistry",
      subtitle: "Traditional Henna",
      description: "Exquisite, intricate traditional Mehendi designs applied by expert artists for weddings and special occasions.",
      icon: <Flower2 className="w-10 h-10 text-white" />,
      link: "/mehendi"
    },
    {
      title: "Tattoo Services",
      subtitle: "Creative Solutions",
      description: "Professional, hygienic, and deeply artistic tattoo services delivering permanent art tailored to your vision.",
      icon: <PenTool className="w-10 h-10 text-white" />,
      link: "/tattoo"
    }
  ];

  return (
    <section id="services" className="w-full py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-sans tracking-[0.4em] uppercase text-foreground/70 font-bold">The Pillars of</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-bold mt-2">Sri Sanjana</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <Link href={pillar.link} key={index} className="block group [perspective:1200px]">
              <motion.div 
                initial={{ opacity: 0, rotateY: -180, scale: 0.8, z: -100, backgroundColor: "rgba(255,255,255,0.0)" }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1, z: 0, backgroundColor: "rgb(26, 17, 20)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-8 flex flex-col items-center text-center h-full transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl bg-foreground [transform-style:preserve-3d]"
              >
                <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(pillar.icon as React.ReactElement, { className: 'w-10 h-10 text-foreground' })}
                </div>
                <h3 className="text-2xl font-serif text-white font-bold mb-2">{pillar.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] font-sans text-white/80 font-bold mb-4 block">{pillar.subtitle}</span>
                <p className="text-sm font-sans text-white/90 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-white font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <div className="w-6 h-[1px] bg-white"></div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
