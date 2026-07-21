"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BharathanatyamDescription() {
  const menuCategories = [
    { name: "Sun Pleated Pant Model with Silk Zari Border", link: "/bharathanatyam/sun-pleated-pant", icon: "🏵️" },
    { name: "Sun Pleated Pant Model with Thread Border", link: "/bharathanatyam/sun-pleated-pant-thread-border", icon: "🧵" },
    { name: "Skirt Model", link: "/bharathanatyam/skirt-model", icon: "👗" },
    { name: "Practice Sarees", link: "/bharathanatyam/practice-sarees", icon: "💃" },
    { name: "Saree Convert Costumes", link: "/bharathanatyam/saree-convert-costumes", icon: "✂️" },
    { name: "Jewelry & Accessories", link: "/bharathanatyam/jewelery-and-accessories", icon: "💎" },
    { name: "Customer Photos", link: "/bharathanatyam/customer-photos", icon: "📸" },
    { name: "Customer Reviews", link: "/bharathanatyam/customer-reviews", icon: "⭐" },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-foreground/80 tracking-[0.4em] uppercase text-xs font-bold block mb-4">
            Our Dance Collection
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground font-bold text-center leading-tight">
            <span className="text-foreground/30 text-2xl md:text-3xl hidden md:inline-block mr-4 align-middle">✨</span> 
            Traditional Attire 
            <span className="text-foreground/30 text-2xl md:text-3xl hidden md:inline-block ml-4 align-middle">✨</span>
          </h2>
        </motion.div>

        {/* Categories Menu Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto glass-panel p-8 md:p-12 mb-24 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150"></div>
          
          <h3 className="text-2xl font-serif text-center mb-10 text-foreground border-b border-foreground/10 pb-6 uppercase tracking-widest font-bold">Select a Model</h3>
          
          <ul className="space-y-4 relative z-10">
            {menuCategories.map((category, index) => (
              <li key={index}>
                <Link 
                  href={category.link}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-foreground hover:text-white transition-all duration-300 group/item hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-foreground/20"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl opacity-70 group-hover/item:opacity-100">{category.icon}</span>
                    <span className="font-sans text-lg font-bold tracking-wide">{category.name}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Bottom Section: Unique Guarantee Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-12"
        >
          {/* Card 1 */}
          <div className="relative group overflow-hidden border border-gold/20 bg-background rounded-tl-[30px] rounded-br-[30px] shadow-sm hover:border-gold/50 transition-colors">
            <div className="h-full bg-background/95 flex flex-col items-center justify-center gap-6 p-8 relative z-10">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:bg-gold/20 transition-colors duration-500">
                <span className="text-3xl">✨</span>
              </div>
              <p className="font-sans text-lg text-foreground/90 font-medium leading-relaxed">
                Customized designs with perfect fitting and quality stitching.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden border border-gold/20 bg-background rounded-tl-[30px] rounded-br-[30px] shadow-sm hover:border-gold/50 transition-colors">
            <div className="h-full bg-background/95 flex flex-col items-center justify-center gap-6 p-8 relative z-10">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:bg-gold/20 transition-colors duration-500">
                <span className="text-3xl">📦</span>
              </div>
              <p className="font-sans text-lg text-foreground/90 font-medium leading-relaxed">
                Worldwide Shipping Available across the globe.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden border border-gold/20 bg-background rounded-tl-[30px] rounded-br-[30px] shadow-sm hover:border-gold/50 transition-colors">
            <div className="h-full bg-background/95 flex flex-col items-center justify-center gap-6 p-8 relative z-10">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:bg-gold/20 transition-colors duration-500">
                <span className="text-3xl">💳</span>
              </div>
              <p className="font-sans text-lg text-foreground/90 font-medium leading-relaxed">
                Prepaid Orders Only.<br/>(No Cash on Delivery)
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
