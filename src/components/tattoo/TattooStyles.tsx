"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Style {
  id: string;
  title: string;
  description: string;
  image: string;
}

const StyleRow = ({ styleData, index }: { styleData: Style; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 lg:gap-24 mb-40 last:mb-0`}
    >
      {/* Minimal Image Container with Parallax */}
      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2 relative aspect-[4/5] bg-foreground/5 overflow-hidden rounded-sm"
      >
        <motion.div style={{ y: yImage }} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <Image 
            src={styleData.image} 
            alt={styleData.title} 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
          />
        </motion.div>
      </motion.div>

      {/* Elegant Typography Container */}
      <motion.div 
        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2 flex flex-col justify-center"
      >
        <span className="text-foreground/20 font-serif text-6xl md:text-8xl font-light italic mb-8">
          {styleData.id}.
        </span>
        <div className="overflow-hidden mb-8">
          <motion.h3 
            initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-serif text-foreground tracking-tight font-light"
          >
            {styleData.title}
          </motion.h3>
        </div>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut", originX: index % 2 === 0 ? 0 : 1 }}
          className="w-12 h-[1px] bg-foreground/30 mb-8"
        ></motion.div>
        <motion.p 
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-foreground/60 font-sans text-sm md:text-base leading-relaxed font-light max-w-sm"
        >
          {styleData.description}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default function TattooStyles() {
  const stylesData = [
    {
      id: "I",
      title: "Fine Line & Minimalist",
      description: "Delicate, single-needle precision work. Perfect for elegant quotes, subtle floral pieces, and micro-tattoos that age gracefully.",
      image: "/assets/tattoo_detail.png"
    },
    {
      id: "II",
      title: "Realism & Portrait",
      description: "Hyper-realistic shading and intricate detail. We bring photographs and complex concepts to life with stunning three-dimensional depth.",
      image: "/assets/service_tattoo_1783356284270.png"
    },
    {
      id: "III",
      title: "Traditional & Tribal",
      description: "Bold lines, dense blackwork, and culturally significant patterns. Timeless designs engineered for maximum longevity and impact.",
      image: "/assets/art_detail.png"
    },
    {
      id: "IV",
      title: "Custom Cover-Ups",
      description: "Expertly transforming old, faded, or unwanted ink into brand new masterpieces seamlessly integrated with your body's natural flow.",
      image: "/assets/tattoo_hero.png"
    }
  ];

  return (
    <section id="styles" className="w-full py-32 bg-background relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {stylesData.map((styleData, index) => (
          <StyleRow key={index} styleData={styleData} index={index} />
        ))}
      </div>
    </section>
  );
}
