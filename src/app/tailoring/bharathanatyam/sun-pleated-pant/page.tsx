"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SunPleatedPantDetail() {
  const dressData = [
    { src: "/assets/dress1.jpeg", colors: "Pink & Maroon" },
    { src: "/assets/dress2.jpeg", colors: "Pink & Green" },
    { src: "/assets/dress3.jpeg", colors: "Maroon & Pink" },
    { src: "/assets/dress4.jpeg", colors: "Pink & Olive Green" },
    { src: "/assets/dress5.jpeg", colors: "Pink & Forest Green" },
    { src: "/assets/dress6.jpeg", colors: "Pink & Gold" },
    { src: "/assets/dress7.jpeg", colors: "Pink & Red" }
  ];

  return (
    <main className="w-full min-h-screen relative selection:bg-foreground selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-6 max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/tailoring/bharathanatyam" className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground text-xs uppercase tracking-widest font-bold mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Collection
            </Link>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-4 max-w-4xl leading-tight"
            >
              Bharathanatyam Dance Costume
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-foreground/70 font-sans text-lg tracking-wide font-light"
            >
              Sun Pleated Pant Model with Silk Zari Border
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-16 h-[1px] bg-foreground/30 mt-8 mb-12 origin-left"
            ></motion.div>
          </motion.div>
        </section>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {dressData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
              className="relative w-full break-inside-avoid flex flex-col group"
            >
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full overflow-hidden bg-foreground/5 rounded-sm"
              >
                <img 
                  src={item.src} 
                  alt={`Costume detail ${index + 1}`}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: ((index % 3) * 0.15) + 0.3, ease: "easeOut" }}
                className="mt-3 text-center"
              >
                <p className="text-foreground/70 font-sans text-xs tracking-[0.2em] uppercase font-bold">
                  {item.colors}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 text-center border-t border-foreground/10 pt-20"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl font-serif text-foreground font-light mb-6"
          >
            Interested in this design?
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            href="#contact" 
            className="inline-flex items-center justify-center bg-foreground text-background px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold transition-colors duration-300"
          >
            Inquire Now
          </motion.a>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}
