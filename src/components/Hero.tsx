"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const slides = [
  {
    id: "bharathanatyam",
    image: "/assets/hero_bharatanatyam.png",
    subtitle: "Specialist in Bharathanatyam Costumes",
    link: "/bharathanatyam"
  },
  {
    id: "tailoring",
    image: "/assets/tailoring_machine_girl.png",
    subtitle: "Custom Tailoring & Designer Wear",
    link: "/tailoring"
  },
  {
    id: "embroidery",
    image: "/assets/aari_hero.png",
    subtitle: "Aari & Hand Embroidery",
    link: "/tailoring"
  },
  {
    id: "beauty",
    image: "/assets/mehendi_hero.png",
    subtitle: "Beauty Parlour & Aesthetics",
    link: "/beauty"
  },
  {
    id: "tattoo",
    image: "/assets/tattoo_hero.png",
    subtitle: "Tattoo Services",
    link: "/beauty"
  }
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Safe index to prevent HMR out of bounds errors
  const safeIndex = currentIndex >= slides.length ? 0 : currentIndex;
  const activeSlide = slides[safeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section ref={ref} className="relative w-full h-[70vh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a1114]">
        
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={activeSlide.image} 
                alt={activeSlide.subtitle} 
                fill 
                sizes="100vw"
                className="object-cover object-[center_20%] transform transition-transform duration-[8s] hover:scale-110" 
                priority={safeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10 pointer-events-none"></div>
        </motion.div>

        <div className="relative z-20 w-full text-center px-4 mt-20 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-serif text-white tracking-[0.1em] font-bold drop-shadow-2xl uppercase whitespace-nowrap mb-6"
          >
            Sri Sanjana
          </motion.h1>

          <div className="h-12 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-[1px] bg-gold/70"></div>
                <span className="text-sm md:text-lg text-gold uppercase tracking-[0.4em] font-sans font-bold">
                  {activeSlide.subtitle}
                </span>
                <div className="w-8 h-[1px] bg-gold/70"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === safeIndex ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="w-full py-12 px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.8, staggerChildren: 0.2 } 
            }
          }}
          className="max-w-[1000px] mx-auto text-center glass-panel p-12 md:p-20 shadow-2xl"
        >
          <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }} className="mb-6 flex items-center justify-center gap-4">
            <span className="w-16 h-[3px] bg-foreground"></span>
            <span className="text-sm uppercase tracking-[0.3em] font-sans font-bold text-foreground drop-shadow-sm">Welcome to Sri Sanjana</span>
            <span className="w-16 h-[3px] bg-foreground"></span>
          </motion.div>
          
          <div className="text-lg md:text-xl font-sans text-foreground/90 leading-relaxed mb-12 font-medium max-w-[800px] mx-auto space-y-6 text-left">
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
              What began as a small home-based tailoring business has grown into a trusted brand serving customers across the globe. At Sri Sanjana, we started by teaching tailoring and stitching customized garments with care and dedication. Today, nearly 90% of our customers are from overseas, and we proudly design and deliver custom-made outfits worldwide.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
              Over the past 15 years, we have expanded our expertise beyond tailoring to offer a wide range of creative and professional services, including:
            </motion.p>
            
            <motion.ul variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} className="list-none space-y-2 py-4 pl-4 md:pl-8">
              <motion.li variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-foreground shrink-0"></div> Authentic Bharathanatyam Costumes</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-foreground shrink-0"></div> Custom Tailoring & Designer Wear</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-foreground shrink-0"></div> Premium Beauty Parlour & Aesthetics</motion.li>
            </motion.ul>

            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
              We are committed to delivering the highest quality craftsmanship, ensuring every stitch and design is executed with absolute perfection.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } } }} className="pt-4 font-serif text-2xl md:text-3xl text-foreground font-bold italic text-center">
              Thank you for being a part of the Sri Sanjana family.
            </motion.p>
          </div>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="flex flex-wrap justify-center gap-4">
            <Link href="#services" className="btn-structured border-foreground bg-foreground text-white hover:bg-transparent hover:text-foreground shadow-xl text-sm md:text-base">
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
