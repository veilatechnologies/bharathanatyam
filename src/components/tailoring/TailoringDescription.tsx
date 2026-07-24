"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TailoringDescription() {
  const stitchingList = [
    "Pattu Pavadai",
    "Lehenga",
    "Mom & Daughter Combo Dresses",
    "Long Gowns",
    "Kids & Adult Wear",
    "All Types of Custom Stitching"
  ];

  const menuCategories = [
    { name: "Blouse Designs", link: "/tailoring/blouse-designs", icon: "👚" },
    { name: "Ready-Made Blouses", link: "/tailoring/ready-made-blouses", icon: "🛍️" },
    { name: "Aari Work Blouses", link: "/tailoring/aari-work-blouses", icon: "🪡" },
    { name: "Machine Embroidery", link: "/tailoring/machine-embroidery", icon: "🧵" },
    { name: "Pattu Pavadai", link: "/tailoring/pattu-pavadai", icon: "🎀" },
    { name: "Lehenga", link: "/tailoring/lehenga", icon: "🏵️" },
    { name: "Customized Chudi Sets", link: "/tailoring/customized-chudi-sets", icon: "✨" },
    { name: "Mom & Daughter Combo", link: "/tailoring/mom-and-daughter-combo", icon: "👩‍👧" },
    { name: "Siblings Combo", link: "/tailoring/siblings-combo", icon: "👯‍♀️" },
    { name: "Family Combos", link: "/tailoring/family-combos", icon: "👨‍👩‍👧‍👦" },
    { name: "Long Gowns", link: "/tailoring/long-gowns", icon: "👗" },
    { name: "Kids Gowns", link: "/tailoring/kids-gown", icon: "👧" },
    { name: "Customer Photos", link: "/tailoring/customer-photos", icon: "📸" },
    { name: "Customer Reviews", link: "/tailoring/customer-reviews", icon: "⭐" },
  ];

  return (
    <section className="w-full py-24 bg-background relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-foreground/80 tracking-[0.4em] uppercase text-xs font-bold block mb-4">
            Our Collections
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground font-bold text-center leading-tight">
            <span className="text-foreground/30 text-2xl md:text-3xl hidden md:inline-block mr-4 align-middle">✨</span> 
            Sri Sanjana Tailoring 
            <span className="text-foreground/30 text-2xl md:text-3xl hidden md:inline-block ml-4 align-middle">✨</span>
          </h2>
        </motion.div>

        {/* The Menu Card (Styled like the original left card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden border-2 border-foreground/10 bg-background rounded-tl-[40px] rounded-br-[40px] shadow-xl max-w-4xl mx-auto mb-20"
        >
          <div className="relative z-10 p-10 md:p-14 bg-background/95">
            <h3 className="text-2xl font-serif text-center mb-10 text-foreground border-b border-foreground/10 pb-6 uppercase tracking-widest font-bold">Select a Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10">
              {menuCategories.map((cat, idx) => (
                <Link 
                  key={idx} 
                  href={cat.link} 
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-foreground hover:text-white transition-all duration-300 group/link hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-foreground/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-current/20 flex items-center justify-center shrink-0 bg-current/5 transition-colors">
                      <span className="text-xl opacity-80 group-hover/link:opacity-100">{cat.icon}</span>
                    </div>
                    <p className="text-lg font-bold font-sans tracking-wide">{cat.name}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text Content (Moved down from the right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-24 bg-foreground/5 p-8 rounded-2xl border border-foreground/10"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-foreground font-bold mb-8">
            We also undertake stitching for:
          </h3>
          <ul className="flex flex-wrap justify-center gap-x-12 gap-y-6 font-sans text-lg text-foreground/80">
            {stitchingList.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold shrink-0"></div>
                <span>{item}</span>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center"
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
