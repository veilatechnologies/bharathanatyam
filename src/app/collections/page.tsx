"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowDown, ExternalLink } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function CollectionsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const models = [
    { 
      id: 1, 
      title: "Sun pleated Pant model with silk zari border", 
      category: "Performance", 
      image: "/assets/collection1.jpeg",
      dresses: [
        { id: 101, title: "Terracotta & Deep Purple with Gold Zari Border", image: "/assets/dress1.jpeg" },
        { id: 102, title: "Crimson Red & Leaf Green with Gold Zari Border", image: "/assets/dress2.jpeg" },
        { id: 103, title: "Pearl White & Soft Taupe with Gold Zari Border", image: "/assets/dress3.jpeg" },
        { id: 104, title: "Magenta & Moss Green with Gold Zari Border", image: "/assets/dress4.jpeg" },
        { id: 105, title: "Mustard Yellow & Navy Blue with Gold Zari Border", image: "/assets/dress5.jpeg" },
        { id: 106, title: "Classic Maroon & Dark Violet with Gold Zari Border", image: "/assets/dress6.jpeg" },
        { id: 107, title: "Deep Navy & Royal Blue with Gold Zari Border", image: "/assets/dress7.jpeg" }
      ]
    }
  ];

  // Sync selected model with URL
  const selectedModelId = searchParams.get('model');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedModelId) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [selectedModelId]);

  const selectedModel = selectedModelId 
    ? models.find(m => m.id.toString() === selectedModelId) 
    : null;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen && selectedModel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedModel]);

  const handleOpenModel = (model: any) => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `/collections?model=${model.id}`);
    }
    setIsOpen(true);
  };

  const handleCloseModel = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/collections');
    }
  };



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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-gold uppercase text-xs font-bold mb-4 block"
          >
            Sri Sanjana Atelier
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-8xl font-serif text-white tracking-[0.1em] font-bold uppercase mix-blend-difference mb-6"
          >
            The Collections
          </motion.h1>
        </motion.div>

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

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-16 pb-12 flex flex-col items-center text-center"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-foreground/50 mb-4">Discover the Authentic</span>
        <h2 className="text-4xl md:text-6xl font-serif text-foreground font-bold tracking-tight">
          Bharathanatyam Dance Costumes
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
          className="h-[2px] bg-gold mt-8"
        ></motion.div>
      </motion.section>

      <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-32 min-h-[50vh]">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence mode="wait">
            {models.map((model, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                key={model.id}
                className="group flex flex-col cursor-pointer"
                onClick={() => handleOpenModel(model)}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-foreground/5 rounded-sm shadow-md group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:-translate-y-2 transition-all duration-700">
                  <Image 
                    src={model.image} 
                    alt={model.title} 
                    fill 
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain transition-transform duration-[2s] group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white font-sans font-bold uppercase tracking-[0.2em] border border-white px-6 py-2 backdrop-blur-sm">
                      View Collection
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    {model.title}
                  </h3>
                  <p className="text-xs font-sans text-foreground/50 uppercase tracking-widest">
                    {model.dresses.length} Dresses
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {(isOpen && selectedModel) && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.4 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-start overflow-y-auto"
          >
            {/* Background for modal to match theme but with a blur over main page */}
            <div className="fixed inset-0 pointer-events-none bg-background/90 backdrop-blur-3xl"></div>

            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="w-full sticky top-0 z-20 bg-[#2a111a] border-b border-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="w-full max-w-[1400px] mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
                <div className="flex flex-col overflow-hidden">
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/70 mb-1"
                  >
                    The Atelier Collection
                  </motion.span>
                  <motion.h2 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="font-serif text-2xl md:text-4xl text-white font-bold tracking-wide"
                  >
                    {selectedModel.title}
                  </motion.h2>
                </div>
                <button 
                  onClick={handleCloseModel}
                  className="p-2 cursor-pointer hover:bg-white/10 rounded-full transition-colors border border-transparent hover:border-white/30"
                  aria-label="Close"
                >
                  <X className="w-8 h-8 text-white" />
                </button>
              </div>
            </motion.div>

            <div className="w-full max-w-[1400px] mx-auto p-6 md:p-12 pb-32">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                {selectedModel.dresses.map((dress: any, idx: number) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ 
                      duration: 0.7, 
                      ease: "easeOut" 
                    }}
                    key={dress.id} 
                    className="flex flex-col group p-4 hover:bg-gold/5 rounded-xl transition-colors duration-500"
                  >
                    <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 glass-panel transition-transform duration-500 hover:-translate-y-2 z-10 hover:shadow-2xl">
                      
                      <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full h-full"
                      >
                        <Image 
                          src={dress.image} 
                          alt={dress.title} 
                          fill 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain p-2 opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" 
                        />
                      </motion.div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <motion.h4 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="font-serif text-xl md:text-2xl text-foreground mb-4 font-bold relative z-10"
                      >
                        {dress.title}
                      </motion.h4>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "2rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-[1px] bg-foreground/20 mb-6 group-hover:w-12 transition-all duration-300"
                      ></motion.div>
                      <motion.button 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-[#5c1626] text-white text-[10px] uppercase tracking-[0.2em] font-sans font-bold px-8 py-3 rounded-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#5c1626]/30 relative z-10"
                      >
                        Enquire Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Footer inside the modal */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background"></div>}>
      <CollectionsContent />
    </Suspense>
  );
}
