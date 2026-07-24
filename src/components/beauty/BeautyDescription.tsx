"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BeautyDescription() {
  return (
    <section className="w-full py-24 bg-background relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold block mb-4">
            Aesthetics & Care
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground font-bold flex items-center justify-center gap-4">
            <span className="text-gold text-3xl">✨</span> 
            Sri Sanjana Beauty Parlour 
            <span className="text-gold text-3xl">✨</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          {/* Left Column: Primary Offerings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group overflow-hidden border-2 border-gold/20 hover:border-gold/50 bg-background rounded-tl-[40px] rounded-br-[40px] transition-all duration-500 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 flex flex-col justify-center space-y-4 p-8 md:p-12 h-full bg-background/95">
              
              <Link href="/beauty/saree-pre-pleating" className="flex items-center justify-between p-4 rounded-xl hover:bg-foreground hover:text-white transition-all duration-300 group/item hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-foreground/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-current/30 flex items-center justify-center bg-current/5 shrink-0 transition-colors">
                    <span className="text-2xl group-hover/item:scale-110 transition-transform">🌸</span>
                  </div>
                  <p className="text-xl md:text-2xl font-serif font-medium">Saree Pre-Pleating</p>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
              </Link>
              
              <Link href="/beauty/professional-makeup-and-hairdo" className="flex items-center justify-between p-4 rounded-xl hover:bg-foreground hover:text-white transition-all duration-300 group/item hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-foreground/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-current/30 flex items-center justify-center bg-current/5 shrink-0 transition-colors">
                    <span className="text-2xl group-hover/item:scale-110 transition-transform">💋</span>
                  </div>
                  <p className="text-xl md:text-2xl font-serif font-medium">Professional Makeup & Hairdo</p>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
              </Link>
              
              <Link href="/beauty/mehndi-designs" className="flex items-center justify-between p-4 rounded-xl hover:bg-foreground hover:text-white transition-all duration-300 group/item hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-foreground/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-current/30 flex items-center justify-center bg-current/5 shrink-0 transition-colors">
                    <span className="text-2xl group-hover/item:scale-110 transition-transform">🌿</span>
                  </div>
                  <p className="text-xl md:text-2xl font-serif font-medium">Mehndi Designs</p>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
              </Link>



              <Link href="/beauty/customer-reviews" className="flex items-center justify-between p-4 rounded-xl hover:bg-foreground hover:text-white transition-all duration-300 group/item hover:scale-[1.02] hover:shadow-lg border border-transparent hover:border-foreground/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-current/30 flex items-center justify-center bg-current/5 shrink-0 transition-colors">
                    <span className="text-2xl group-hover/item:scale-110 transition-transform">⭐</span>
                  </div>
                  <p className="text-xl md:text-2xl font-serif font-medium">Customer Reviews</p>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
              </Link>

            </div>
          </motion.div>

          {/* Right Column: Extra info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center px-4 md:px-10"
          >
            <h3 className="text-3xl md:text-4xl font-serif text-foreground font-bold mb-6">
              💄 Beauty Parlour Services Available
            </h3>
            <div className="w-16 h-[2px] bg-gold mb-8"></div>
            <p className="font-sans text-xl text-foreground/80 leading-relaxed">
              We specialize in providing a complete, premium aesthetic experience. 
              <br/><br/>
              <span className="text-gold font-bold">✨ All Types of Beauty Parlour Services Available</span>
            </p>
          </motion.div>

        </div>

        {/* Bottom Section: Unique Guarantee Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center"
        >
          {/* Card 1 */}
          <div className="relative group overflow-hidden border-2 border-gold/20 hover:border-gold/50 bg-background rounded-tl-[30px] rounded-br-[30px] transition-all duration-500 hover:-translate-y-2 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="h-full bg-background/95 flex flex-col items-center justify-center gap-6 p-10 relative z-10">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:bg-gold/20 transition-colors duration-500">
                <span className="text-3xl">💖</span>
              </div>
              <p className="font-sans text-lg text-foreground/90 font-medium leading-relaxed">
                Quality Service
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden border-2 border-gold/20 hover:border-gold/50 bg-background rounded-tl-[30px] rounded-br-[30px] transition-all duration-500 hover:-translate-y-2 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="h-full bg-background/95 flex flex-col items-center justify-center gap-6 p-10 relative z-10">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:bg-gold/20 transition-colors duration-500">
                <span className="text-3xl">✨</span>
              </div>
              <p className="font-sans text-lg text-foreground/90 font-medium leading-relaxed">
                Professional Care
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden border-2 border-gold/20 hover:border-gold/50 bg-background rounded-tl-[30px] rounded-br-[30px] transition-all duration-500 hover:-translate-y-2 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="h-full bg-background/95 flex flex-col items-center justify-center gap-6 p-10 relative z-10">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 group-hover:bg-gold/20 transition-colors duration-500">
                <span className="text-3xl">🌟</span>
              </div>
              <p className="font-sans text-lg text-foreground/90 font-medium leading-relaxed">
                Customized for Every Occasion
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
