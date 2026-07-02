"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-black">
      <Navbar />
      
      {/* Minimal Header */}
      <section className="w-full pt-48 pb-20 px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Inquiries
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif font-bold uppercase tracking-[0.1em] mb-6">
            Contact Us
          </h1>
          <p className="text-sm md:text-base font-sans uppercase tracking-[0.2em] font-medium text-foreground/70 max-w-2xl mx-auto">
            Book a bespoke consultation or visit our atelier.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col space-y-12"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold uppercase tracking-widest mb-6 border-b border-foreground/10 pb-4">
                The Atelier
              </h3>
              <p className="font-sans text-foreground/80 leading-relaxed mb-6">
                <strong>Sri Sanjana Tailoring & Beauty Parlour</strong><br/>
                Tattoo Designer, Mehandi Artist, Academy
              </p>
              <div className="space-y-2 font-sans text-sm tracking-wide text-foreground/70">
                <p>Phone: +91 83447 18008</p>
                <p>Email: contact@srisanjana.com</p>
                <p>Hours: Mon - Sat, 10:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="w-full aspect-[4/3] bg-foreground/5 rounded-sm overflow-hidden relative shadow-lg">
              <iframe 
                src="https://www.google.com/maps?q=Sri+Sanjana+Tailouring,+Beauty+parlour&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 filter grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/Kk2LQP2U8LypZNEf6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-sans font-bold uppercase tracking-[0.2em] underline underline-offset-8 hover:text-gold transition-colors"
            >
              Open in Google Maps
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="glass-panel p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-2xl font-serif font-bold uppercase tracking-widest mb-8">
              Send an Inquiry
            </h3>
            
            <form className="flex flex-col space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mb-2">Full Name</label>
                <input type="text" className="bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-gold transition-colors font-sans" />
              </div>
              
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mb-2">Email Address</label>
                <input type="email" className="bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-gold transition-colors font-sans" />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mb-2">Phone Number</label>
                <input type="tel" className="bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-gold transition-colors font-sans" />
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mb-2">Inquiry Type</label>
                <select className="bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-gold transition-colors font-sans text-foreground/80">
                  <option>Bharatanatyam Dress Enquiry</option>
                </select>
              </div>
              
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mb-2">Message</label>
                <textarea rows={4} className="bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-gold transition-colors font-sans resize-none"></textarea>
              </div>

              <button className="btn-structured bg-foreground text-background hover:bg-gold hover:text-foreground hover:border-gold w-full mt-4">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
