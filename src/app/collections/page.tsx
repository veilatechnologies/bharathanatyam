"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowDown } from 'lucide-react';

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All", 
    "Salangai Pooja", 
    "Arangetram", 
    "Performance", 
    "Practice", 
    "Portfolio", 
    "Bala"
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const category = params.get('category');
      if (category && categories.includes(category)) {
        setActiveFilter(category);
      }
    }
  }, []);

  const products = [
    { id: 1, title: "The Auspicious Start", category: "Salangai Pooja", image: "/assets/dress2.jpeg" },
    { id: 2, title: "Golden Kanchipuram", category: "Arangetram", image: "/assets/dress5.jpeg" },
    { id: 3, title: "Temple Border Silk", category: "Practice", image: "/assets/dress4.jpeg" },
    { id: 4, title: "Divine Magenta", category: "Performance", image: "/assets/dress6.jpeg" },
    { id: 5, title: "Studio Edit", category: "Portfolio", image: "/assets/dancer_portrait.png" },
    { id: 6, title: "Dynamic Flow", category: "Performance", image: "/assets/dancer_dynamic.png" },
    { id: 7, title: "Little Danseuse", category: "Bala", image: "/assets/bharatanatyam_dancer.png" },
    { id: 8, title: "Classic Red", category: "Arangetram", image: "/assets/dress2.jpeg" },
    { id: 9, title: "Emerald Green", category: "Practice", image: "/assets/dress5.jpeg" },
  ];

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <Navbar />
      
      {/* Minimal Hero */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/assets/dancer_portrait.png" 
            alt="Bharatanatyam Dancer" 
            fill 
            className="object-cover object-top filter grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Sri Sanjana Atelier
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white tracking-[0.1em] font-bold uppercase mix-blend-difference mb-6">
            The Collections
          </h1>
        </motion.div>

        {/* Explore Down Arrow */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">Explore</span>
          <ArrowDown className="w-5 h-5 text-white/60 animate-bounce" />
        </motion.div>
      </section>

      {/* Minimal Filter Navigation */}
      <section className="w-full max-w-[1400px] mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs md:text-sm uppercase tracking-[0.2em] font-sans font-bold transition-all duration-300 pb-1 border-b-2 ${
                activeFilter === cat 
                  ? "border-foreground text-foreground" 
                  : "border-transparent text-foreground/40 hover:text-foreground/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Ultra Clean Grid */}
      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32 min-h-[50vh]">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="group flex flex-col"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-foreground/5 rounded-sm">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105" 
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground mb-4">
                    {product.title}
                  </h3>
                  <button className="px-6 py-2 border border-foreground text-[10px] uppercase tracking-[0.2em] font-sans font-bold hover:bg-foreground hover:text-white transition-colors duration-300">
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
