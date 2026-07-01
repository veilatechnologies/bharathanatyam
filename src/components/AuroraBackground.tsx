"use client";
import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-gradient-to-br from-[#de82a3] via-[#a83d5f] to-[#5c1626]">
      {/* Orb 1: Soft Gold */}
      <motion.div
        animate={{
          x: ["0%", "20%", "-20%", "0%"],
          y: ["0%", "20%", "-10%", "0%"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gold/30 blur-[120px]"
      />
      
      {/* Orb 2: Bright Rose */}
      <motion.div
        animate={{
          x: ["0%", "-30%", "10%", "0%"],
          y: ["0%", "30%", "-20%", "0%"],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#f3a4bc]/30 blur-[140px]"
      />

      {/* Orb 3: Deep Maroon */}
      <motion.div
        animate={{
          x: ["0%", "40%", "-30%", "0%"],
          y: ["0%", "-30%", "20%", "0%"],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-[#5c1626]/50 blur-[150px]"
      />
      
      {/* Texture Overlay (Optional subtle grain) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}
