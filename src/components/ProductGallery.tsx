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
          <h2 className="text-4xl md:text-6xl font-serif text-foreground tracking-tight font-bold mb-6">Sacred Costumes</h2>
          <div className="w-[3px] h-12 bg-foreground"></div>
        </div>

        {/* Centered Single Column Grid for the single model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center">
          
          {/* Card 1 */}
          <Link href="/collections?model=1" className="md:col-span-2 max-w-md mx-auto w-full">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col group cursor-pointer glass-panel p-6 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:border-gold/50 h-full"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 rounded-xl">
                <div className="relative w-full h-full overflow-hidden">
                  <Image src="/assets/collection1.jpeg" alt="Sun Pleated Pant Model" fill unoptimized className="object-contain transition-transform duration-[2s] group-hover:scale-110" />
                </div>
              </div>
              <div className="text-center pb-2 relative overflow-hidden">
                <h3 className="font-serif text-2xl text-foreground mb-2 font-bold transition-colors duration-500 group-hover:text-gold">Sun Pleated Pant Model</h3>
                <p className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold transition-all duration-500 transform translate-y-0 group-hover:-translate-y-1">View Collection</p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-12"></div>
              </div>
            </motion.div>
          </Link>

        </div>
        
        <div className="mt-20 flex justify-center">
          <Link href="/collections" className="btn-structured">
            View All Designs
          </Link>
        </div>

      </div>
    </section>
  );
}
