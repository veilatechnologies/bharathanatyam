"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
          className="w-full max-w-[1400px] mx-auto h-20 bg-foreground shadow-lg rounded-[1.5rem] flex justify-between items-center px-6 md:px-8"
        >
          
          {/* Left: Empty for balance */}
          <div className="hidden lg:flex items-center space-x-6 text-white w-1/3">
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-start lg:justify-center items-center lg:w-1/3">
            <Link href="/" className="flex items-center space-x-4 group" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-1 overflow-hidden shadow-md">
                <Image src="/assets/finallogo1.png" alt="Sri Sanjana Logo" fill className="object-contain p-1 transition-transform duration-500 group-hover:scale-105" priority />
              </div>
              <span className="font-serif text-base md:text-lg tracking-[0.2em] text-white uppercase font-bold">
                Sri Sanjana
              </span>
            </Link>
          </div>

          {/* Right: Links & Mobile Menu */}
          <div className="flex justify-end items-center space-x-6 text-xs tracking-[0.1em] uppercase text-white font-sans font-bold lg:w-1/3">
            <Link href="/tailoring" className="hover:opacity-70 transition-opacity hidden lg:block">Tailoring</Link>
            <Link href="/training" className="hover:opacity-70 transition-opacity hidden lg:block">Training</Link>
            <Link href="/mehendi" className="hover:opacity-70 transition-opacity hidden lg:block">Mehendi</Link>
            <Link href="/tattoo" className="hover:opacity-70 transition-opacity hidden lg:block">Tattoo</Link>
            
            <button 
              className="lg:hidden flex items-center hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
          
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-black/80 flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-10 right-8 text-white hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-10 h-10 stroke-[1.5]" />
            </button>

            <div className="flex flex-col items-center space-y-8 h-full justify-center">
              <Link 
                href="/tailoring" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif text-white uppercase tracking-[0.2em] hover:text-gold transition-colors"
              >
                Tailoring
              </Link>
              <Link 
                href="/training" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif text-white uppercase tracking-[0.2em] hover:text-gold transition-colors"
              >
                Training
              </Link>
              <Link 
                href="/mehendi" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif text-white uppercase tracking-[0.2em] hover:text-gold transition-colors"
              >
                Mehendi
              </Link>
              <Link 
                href="/tattoo" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif text-white uppercase tracking-[0.2em] hover:text-gold transition-colors"
              >
                Tattoo
              </Link>
            </div>
            
            <div className="absolute bottom-12 text-center">
              <p className="text-[10px] text-white/50 uppercase tracking-[0.3em]">Sri Sanjana Atelier</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
