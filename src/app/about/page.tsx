"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yParallax2 = useTransform(scrollYProgress, [0.3, 1], [0, 100]);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black overflow-hidden relative"
    >
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold z-50 origin-left" 
        style={{ scaleX: scrollYProgress }} 
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col items-center justify-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center z-10 px-6"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Our Heritage
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-serif text-foreground tracking-tighter font-bold mb-6">
            About Us
          </h1>
          <div className="w-12 h-[2px] bg-foreground mx-auto mt-8"></div>
        </motion.div>
      </section>

      {/* Story Section 01: The Beginning */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full lg:w-5/12 flex flex-col"
        >
          <span className="text-gold font-serif text-6xl italic mb-6">2010</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
            A Decade of <br/>Devotion.
          </h2>
          <p className="text-base font-sans text-foreground/80 leading-relaxed mb-6 font-medium">
            Founded with a singular vision to preserve the sanctity of classical dance attire, Sri Sanjana Tailoring & Academy was born. What started as a modest endeavor quickly blossomed into a sanctuary for bespoke craftsmanship.
          </p>
          <p className="text-base font-sans text-foreground/80 leading-relaxed font-medium">
            We understood early on that a dancer&apos;s costume is their second skin on stage. It must breathe, it must move seamlessly, and above all, it must honor the ancient geometry of the Adavus.
          </p>
        </motion.div>

        <motion.div 
          style={{ y: yParallax }}
          className="w-full lg:w-7/12 relative aspect-[3/4] md:aspect-[4/3] rounded-sm overflow-hidden bg-foreground/5 shadow-2xl"
        >
          <Image 
            src="/assets/bharatanatyam_dancer.png" 
            alt="Bharatanatyam Origin" 
            fill 
            className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-1000" 
          />
        </motion.div>
      </section>

      {/* Story Section 02: The Craft */}
      <section className="w-full bg-foreground text-background py-32 mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full lg:w-5/12 flex flex-col"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Master Tailoring</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-background mb-8 leading-tight">
              The Architecture <br/>of Movement.
            </h2>
            <p className="text-base font-sans text-background/80 leading-relaxed mb-6 font-medium">
              We work exclusively with pure semi silk and semi kanchipuram silk sarees. The weight, the luster, and the fall of these specific fabrics are mathematically essential for creating the perfect &apos;Vishiri&apos; (front fan).
            </p>
            <p className="text-base font-sans text-background/80 leading-relaxed font-medium">
              Our master tailors take incredibly precise measurements, ensuring the Kacham (back piece) sits perfectly, and the Aramandi posture can be struck without any restriction or pulling of the fabric.
            </p>
          </motion.div>

          <motion.div 
            style={{ y: yParallax2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full lg:w-7/12 relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
          >
            <Image 
              src="/assets/dress5.jpeg" 
              alt="Craftsmanship" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </div>
      </section>

      {/* Story Section 03: Full Service */}
      <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-32 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold font-serif text-6xl block mb-6">✦</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8">
            Beyond the Silk
          </h2>
          <p className="text-lg md:text-xl font-sans text-foreground/80 leading-relaxed max-w-3xl mx-auto font-medium mb-12">
            Our artistry extends beyond the loom. As a full-suite atelier, we offer professional Beauty Parlour services, intricate Mehandi artistry, and Tattoo design—ensuring that every detail of your appearance is as flawless as your performance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="border border-foreground/10 p-8 glass-panel hover:border-gold transition-colors duration-500 cursor-pointer"
            >
              <h4 className="text-lg font-serif font-bold mb-3">Tailoring</h4>
              <p className="text-sm font-sans text-foreground/60">Bespoke Bharatanatyam costumes tailored to exact specifications.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="border border-foreground/10 p-8 glass-panel hover:border-gold transition-colors duration-500 cursor-pointer"
            >
              <h4 className="text-lg font-serif font-bold mb-3">Beauty & Mehandi</h4>
              <p className="text-sm font-sans text-foreground/60">Complete stage makeup and traditional intricate Mehandi application.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="border border-foreground/10 p-8 glass-panel hover:border-gold transition-colors duration-500 cursor-pointer"
            >
              <h4 className="text-lg font-serif font-bold mb-3">The Academy</h4>
              <p className="text-sm font-sans text-foreground/60">Passing down our artistic knowledge to the next generation.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  );
}
