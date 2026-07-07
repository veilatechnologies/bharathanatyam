"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ServiceRow = ({ service, index }: { service: Service; index: number }) => {
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
            src={service.image} 
            alt={service.title} 
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
          {service.id}.
        </span>
        <div className="overflow-hidden mb-8">
          <motion.h3 
            initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-serif text-foreground tracking-tight font-light"
          >
            {service.title}
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
          {service.description}
        </motion.p>

        {service.title === "Classical Dance Attire" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="mt-8"
          >
            <Link 
              href="/tailoring/bharathanatyam" 
              className="inline-flex items-center gap-3 border border-foreground/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Explore Bharathanatyam
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default function BespokeServices() {
  const services = [
    {
      id: "I",
      title: "Bridal Blouses",
      description: "The centerpiece of your festive attire. We specialize in intricate Zardosi work, heavy beadwork, and maggam embroidery on pure silk, ensuring a flawless, second-skin fit for your big day.",
      image: "/assets/bridal_blouse_v2.png"
    },
    {
      id: "II",
      title: "Custom Gowns",
      description: "Elegant, flowing silhouettes tailored to your exact body measurements. We merge premium Indian fabrics with structural high-fashion western draping techniques for maximum breathable comfort.",
      image: "/assets/custom_gown_v2.png"
    },
    {
      id: "III",
      title: "Salwar Suits",
      description: "Classic ethnic wear crafted with vibrant raw silks and georgettes. We offer a perfect balance between meticulous traditional embroidery and clean, modern, perfectly tailored cuts.",
      image: "/assets/salwar_suit_v2.png"
    },
    {
      id: "IV",
      title: "Kids Couture",
      description: "High-quality bespoke ethnic and party wear for children. We use authentic, soft cotton linings to ensure absolute comfort without compromising on sophisticated festive style.",
      image: "/assets/kids_wear_v2.png"
    },
    {
      id: "V",
      title: "Classical Dance Attire",
      description: "Our historic specialty. We craft Bharathanatyam costumes from premium Dharmavaram and semi-Kanchipuram silks, engineered with mathematically perfect Kacham and Vishiri pleats for flawless stage movement.",
      image: "/assets/hero_bharatanatyam.png"
    }
  ];

  return (
    <section className="w-full py-32 bg-background relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {services.map((service, index) => (
          <ServiceRow key={index} service={service} index={index} />
        ))}
        
      </div>
    </section>
  );
}
