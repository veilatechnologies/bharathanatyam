"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Craftsmanship() {
  const features = [
    {
      id: "01",
      title: "Custom Tailoring & Designer Wear",
      subtitle: "Bespoke Perfection",
      description: "From impeccable Bharathanatyam attire to luxurious custom-made global outfits, our master tailors ensure every garment breathes, moves seamlessly, and fits flawlessly.",
      image: "/assets/service_tailoring_1783356135602.png",
      link: "/tailoring"
    },
    {
      id: "02",
      title: "Tailoring Training Academy",
      subtitle: "Empowering Next Generation",
      description: "We are deeply committed to passing down our knowledge. Our affordable training programs—available both offline at our Virudhunagar center and online—empower learners everywhere to master the art of tailoring.",
      image: "/assets/service_training_1783356166046.png",
      link: "/training"
    },
    {
      id: "03",
      title: "Aari & Hand Embroidery",
      subtitle: "Intricate Handwork",
      description: "Our artisans specialize in exquisite Aari work, hand embroidery, and precision machine embroidery. Every bead and thread is meticulously placed to create breathtaking designs on rich fabrics.",
      image: "/assets/service_embroidery_1783356229184.png",
      link: "/embroidery"
    },
    {
      id: "04",
      title: "Traditional Mehendi (Henna Art)",
      subtitle: "Cultural Elegance",
      description: "We provide exquisite, highly detailed Mehendi for weddings and special occasions, honoring traditional Indian patterns with a modern, flawless application for the most important days of your life.",
      image: "/assets/service_mehendi_1783356251879.png",
      link: "/mehendi"
    },
    {
      id: "05",
      title: "Professional Tattoo Services",
      subtitle: "Permanent Artistry",
      description: "Our clean, modern studio offers highly detailed, creative tattoo services. We turn your vision into permanent, beautiful body art in a completely professional and hygienic environment.",
      image: "/assets/service_tattoo_1783356284270.png",
      link: "/tattoo"
    }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm font-sans tracking-[0.4em] uppercase text-foreground/70 font-bold block mb-4">
            Service Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-bold">
            The Anatomy of Perfection
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {features.map((feature, index) => (
            <Link href={feature.link} key={feature.id} className="group block">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`} >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 relative h-[400px] lg:h-[500px] glass-panel overflow-hidden p-2"
              >
                <Image 
                  src={feature.image} 
                  alt={feature.title} 
                  fill 
                  className="object-cover p-2 rounded-xl transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <span className="text-6xl md:text-8xl font-serif text-foreground/10 font-bold absolute -z-10 -translate-y-10 -translate-x-10">
                  {feature.id}
                </span>
                <span className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-foreground/70 block mb-2">
                  {feature.subtitle}
                </span>
                <h3 className="text-3xl lg:text-4xl font-serif text-foreground font-bold mb-6">
                  {feature.title}
                </h3>
                <p className="text-base font-sans text-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-foreground font-bold text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <div className="w-6 h-[1px] bg-foreground"></div>
                </div>
              </motion.div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
