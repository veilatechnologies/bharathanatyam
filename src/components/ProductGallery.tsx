"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductGallery() {
  // Mixed portfolio matching actual services
  const galleryItems = [
    { id: 1, src: "/assets/service_tailoring_1783356135602.png", category: "Custom Tailoring", size: "large" },
    { id: 2, src: "/assets/service_embroidery_1783356229184.png", category: "Aari Embroidery", size: "tall" },
    { id: 3, src: "/assets/service_mehendi_1783356251879.png", category: "Mehendi Art", size: "square" },
    { id: 4, src: "/assets/service_tattoo_1783356284270.png", category: "Tattoo Studio", size: "wide" },
    { id: 5, src: "/assets/service_training_1783356166046.png", category: "Training Academy", size: "tall" },
    { id: 6, src: "/assets/aari_detail.png", category: "Hand Embroidery", size: "square" },
    { id: 7, src: "/assets/tailoring_detail.png", category: "Designer Wear", size: "wide" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-sans tracking-[0.4em] uppercase text-foreground/70 font-bold block mb-4">
              The Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground font-bold max-w-lg">
              A Glimpse into Our World.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="#services" className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-foreground border-b border-foreground pb-1 hover:text-foreground/60 transition-colors">
              View All Services
            </Link>
          </motion.div>
        </div>

        {/* Masonry-style CSS Grid with dense packing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] grid-flow-dense">
          {galleryItems.map((item, i) => {
            let spanClass = "col-span-1 row-span-1";
            if (item.size === "tall") spanClass = "col-span-1 row-span-2";
            if (item.size === "wide") spanClass = "col-span-1 sm:col-span-2 row-span-1";
            if (item.size === "large") spanClass = "col-span-1 sm:col-span-2 row-span-2";

            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group overflow-hidden glass-panel ${spanClass}`}
              >
                <Image 
                  src={item.src} 
                  alt={item.category} 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/80 mb-2">
                    {item.category}
                  </span>
                  <div className="w-12 h-[1px] bg-foreground/50"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
