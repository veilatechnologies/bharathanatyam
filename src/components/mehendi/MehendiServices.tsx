"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

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
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className={`w-12 h-[1px] bg-foreground/30 mb-8 ${index % 2 === 0 ? 'origin-left' : 'origin-right'}`}
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
      </motion.div>
    </div>
  );
};

export default function MehendiServices() {
  const services = [
    {
      id: "I",
      title: "Bridal Masterpiece",
      description: "Elaborate, full-hand and leg traditional motifs. We incorporate intricate mandalas, peacocks, and bridal palanquins for an awe-inspiring ceremonial look.",
      image: "/assets/mehendi_detail.png"
    },
    {
      id: "II",
      title: "Portrait Mehendi",
      description: "Hyper-realistic henna sketching. We accurately draw the faces of deities, the couple, or customized love stories embedded directly into the design.",
      image: "/assets/service_mehendi_1783356251879.png"
    },
    {
      id: "III",
      title: "Guest & Party Art",
      description: "Elegant, minimalist Arabic and floral trails designed for bridesmaids, family members, and distinguished wedding guests.",
      image: "/assets/mehendi_guest.png"
    },
    {
      id: "IV",
      title: "Maternity Henna",
      description: "Safe, 100% natural and chemical-free belly henna art. Beautifully crafted mandalas to celebrate motherhood and baby showers.",
      image: "/assets/maternity_mehendi.png"
    }
  ];

  return (
    <section id="services" className="w-full py-32 bg-background relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {services.map((service, index) => (
          <ServiceRow key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
