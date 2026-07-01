"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GalleryOfGrace() {
  return (
    <section className="py-16 px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-sm md:text-base uppercase tracking-[0.3em] text-foreground mb-6 font-sans font-bold shadow-sm">The Exhibition</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground tracking-tight font-bold mb-6">Gallery of Grace</h2>
          <div className="w-[3px] h-16 bg-foreground"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          
          {/* Image 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-xl group border border-foreground/10"
          >
            <Image 
              src="/assets/bharatanatyam_dancer.png" 
              alt="Dancer 1" 
              fill 
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 border-[1px] border-white/10 m-3 rounded-sm">
              <h3 className="text-white font-serif text-2xl font-bold mb-2">The Golden Hour</h3>
              <p className="text-gold font-sans text-xs uppercase tracking-[0.2em]">Traditional Silk</p>
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-xl group border border-foreground/10"
          >
            <Image 
              src="/assets/dancer_dynamic.png" 
              alt="Dancer Dynamic" 
              fill 
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 border-[1px] border-white/10 m-3 rounded-sm">
              <h3 className="text-white font-serif text-2xl font-bold mb-2">Motion & Light</h3>
              <p className="text-gold font-sans text-xs uppercase tracking-[0.2em]">Performance Zari</p>
            </div>
          </motion.div>

          {/* Image 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-xl group border border-foreground/10"
          >
            <Image 
              src="/assets/dancer_portrait.png" 
              alt="Dancer Portrait" 
              fill 
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 border-[1px] border-white/10 m-3 rounded-sm">
              <h3 className="text-white font-serif text-2xl font-bold mb-2">Divine Focus</h3>
              <p className="text-gold font-sans text-xs uppercase tracking-[0.2em]">Intricate Detail</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
