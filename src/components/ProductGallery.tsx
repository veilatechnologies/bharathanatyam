"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductGallery() {
  return (
    <section id="collection" className="py-16 relative">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-sm uppercase tracking-[0.2em] text-foreground mb-4 font-sans font-bold">The Gallery</span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground tracking-tight font-bold mb-6">Sacred Silks</h2>
          <div className="w-[3px] h-12 bg-foreground"></div>
        </div>

        {/* Structured 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col group cursor-pointer glass-panel p-6 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:border-gold/50"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 rounded-xl">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/assets/dress2.jpeg" alt="Arangetram Collection" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
              </div>
            </div>
            <div className="text-center pb-2 relative overflow-hidden">
              <h3 className="font-serif text-2xl text-foreground mb-2 font-bold transition-colors duration-500 group-hover:text-gold">Arangetram</h3>
              <p className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold transition-all duration-500 transform translate-y-0 group-hover:-translate-y-1">Explore Collection</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-12"></div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col group cursor-pointer glass-panel p-6 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:border-gold/50"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 rounded-xl">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/assets/dress5.jpeg" alt="Performance Collection" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
              </div>
            </div>
            <div className="text-center pb-2 relative overflow-hidden">
              <h3 className="font-serif text-2xl text-foreground mb-2 font-bold transition-colors duration-500 group-hover:text-gold">Performance</h3>
              <p className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold transition-all duration-500 transform translate-y-0 group-hover:-translate-y-1">Explore Collection</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-12"></div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col group cursor-pointer glass-panel p-6 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:border-gold/50"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 rounded-xl">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/assets/dress4.jpeg" alt="Practice Collection" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
              </div>
            </div>
            <div className="text-center pb-2 relative overflow-hidden">
              <h3 className="font-serif text-2xl text-foreground mb-2 font-bold transition-colors duration-500 group-hover:text-gold">Practice</h3>
              <p className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold transition-all duration-500 transform translate-y-0 group-hover:-translate-y-1">Explore Collection</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-12"></div>
            </div>
          </motion.div>

        </div>
        
        <div className="mt-20 flex justify-center">
          <Link href="#" className="btn-structured">
            View All Designs
          </Link>
        </div>

      </div>
    </section>
  );
}
