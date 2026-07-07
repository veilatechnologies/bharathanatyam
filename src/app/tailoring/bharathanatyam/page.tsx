"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BharathanatyamCatalog() {
  return (
    <main className="w-full min-h-screen relative selection:bg-foreground selection:text-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-6 max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <section className="text-center mb-16">
          <Link href="/tailoring" className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground text-xs uppercase tracking-widest font-bold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Tailoring
          </Link>
          <span className="text-foreground tracking-[0.4em] uppercase text-xs font-bold block mb-4">
            Exclusive Collection
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
            Bharathanatyam Attire
          </h1>
          <div className="w-16 h-[2px] bg-gold mx-auto"></div>
        </section>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <Link href="/tailoring/bharathanatyam/sun-pleated-pant" className="group block">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col"
            >
              {/* Image Card */}
              <div className="relative w-full aspect-[3/4] bg-foreground/5 overflow-hidden rounded-sm mb-6">
                <Image 
                  src="/assets/collection1.jpeg" 
                  alt="Sun Pleated Pant Model"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-90"
                />
              </div>
              
              {/* Product Info */}
              <h2 className="font-serif text-xl md:text-2xl text-foreground font-light mb-2 group-hover:text-gold transition-colors duration-300">
                Bharathanatyam Dance Costume
              </h2>
              <p className="text-foreground/70 font-sans text-sm tracking-wide font-light">
                Sun Pleated Pant Model with Silk Zari Border
              </p>
            </motion.div>
          </Link>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
