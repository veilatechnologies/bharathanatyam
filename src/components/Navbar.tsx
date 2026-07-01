"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
        className="w-full max-w-[1400px] mx-auto h-20 bg-foreground shadow-lg rounded-[1.5rem] flex justify-between items-center px-8"
      >
        
        {/* Left: Search & Profile */}
        <div className="hidden md:flex items-center space-x-6 text-white w-1/3">
          <Link href="#" className="hover:opacity-70 transition-opacity"><Search className="w-5 h-5 stroke-[2]" /></Link>
          <Link href="#" className="hover:opacity-70 transition-opacity"><User className="w-5 h-5 stroke-[2]" /></Link>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center items-center w-1/3">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-12 h-12 bg-white rounded-full p-1 overflow-hidden shadow-md">
              <Image src="/assets/finallogo1.png" alt="Sri Sanjana Logo" fill className="object-contain p-1 transition-transform duration-500 group-hover:scale-105" priority />
            </div>
            <span className="font-serif text-lg tracking-[0.2em] text-white uppercase hidden sm:block font-bold">
              Sri Sanjana
            </span>
          </Link>
        </div>

        {/* Right: Links & Cart & Mobile Menu */}
        <div className="flex justify-end items-center space-x-6 text-xs tracking-[0.1em] uppercase text-white font-sans font-bold w-1/3">
          <Link href="#collection" className="hover:opacity-70 transition-opacity hidden lg:block">Collections</Link>
          <Link href="#" className="hover:opacity-70 transition-opacity hidden lg:block">Heritage</Link>
          <Link href="#" className="flex items-center gap-2 hover:opacity-70 transition-opacity relative">
            <ShoppingBag className="w-5 h-5 stroke-[2]" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-white text-foreground text-[10px] font-bold flex items-center justify-center rounded-full">0</span>
          </Link>
          <button className="lg:hidden flex items-center hover:opacity-70 transition-opacity">
            <Menu className="w-6 h-6 stroke-[2]" />
          </button>
        </div>
        
      </motion.div>
    </nav>
  );
}
