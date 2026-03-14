import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero({ setsearchQuery }) {
  const containerRef = useRef(null);

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Background "Art" text scaling and fading effect
  const artScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const artOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0]);

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section
      ref={containerRef}
      className="relative  bg-[#F4EFEA] text-[#000] font-serif overflow-visible"
    >
      {/*  LAYER 1: Sticky Background  */}
      <div className="sticky top-0 h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          style={{ scale: artScale, opacity: artOpacity }}
          className="text-[#F8CCD3] text-[50vw] md:text-[40vw] font-serif font-bold leading-none tracking-tighter select-none"
        >
          Art
        </motion.div>
      </div>

      {/*  LAYER 2: Foreground Content  */}
      <div className="relative z-10 -mt-[70vh] md:-mt-[90vh]">
        <main className="relative flex flex-col items-center justify-center w-full min-h-screen md:pt-20">

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center w-full max-w-8xl mx-auto"
          >
            {/* Row 1: Welcome to the + Sticker */}
            <div className="relative flex items-center justify-center w-full">
              <motion.h1
                variants={fadeInUp}
                className="text-6xl md:text-[11vw] leading-[0.8] tracking-tighter font-medium text-center z-10"
              >
                Welcome to the
              </motion.h1>

              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 12 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -right-4 md:right-53 -top-6 md:top-27 w-16 h-16 md:w-24 md:h-24 rounded-full border border-[#1A1A1A] bg-[#F4EFEA] flex flex-col items-center justify-center z-20 shadow-sm"
              >
                <span className="text-lg md:text-2xl mb-1">:)</span>
                <span className="text-[7px] uppercase tracking-[0.2em] font-sans font-bold">
                   est. 1933
                </span>
              </motion.div>
            </div>

            {/* Row 2: Playground */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-2 font-sans">
                [ scroll to explore ]
              </span>
              <div className="text-7xl md:text-[11vw] leading-[0.8] tracking-tighter font-medium mt-2 md:mt-4 z-20 italic">
                playground
              </div>
            </motion.div>

            {/* Row 3: Of Wada Sanzo */}
            <div className="flex items-center mt-2 md:mt-1 relative w-full justify-center">
              {/* The "of" Circle */}
              <motion.div
                variants={fadeInUp}
                className="relative right-8 bottom-8 md:bottom-20 w-24 h-24 md:w-50 md:h-50 rounded-full border border-[#1A1A1A] flex items-center justify-center bg-[#F4EFEA]/50 backdrop-blur-lg z-30 -mr-8 md:-mr-12 translate-y-4 md:translate-y-8"
              >
                <span className="relative md:right-5 text-5xl md:text-[10vw] leading-none tracking-tighter">of</span>
              </motion.div>

              {/* Wada Sanzo Name Stack */}
              <div className="flex flex-col items-start z-20 translate-y-12 md:translate-y-24">
                <motion.span
                  variants={fadeInUp}
                  className="text-7xl md:text-[14vw] leading-[0.7] tracking-tighter font-medium uppercase"
                >
                  Wada
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  className="relative text-7xl md:text-[11vw] leading-[0.8] tracking-tighter font-medium ml-12 md:ml-48 italic"
                >
                  Sanzō
                </motion.span>
              </div>

              {/* Side Description */}
              <motion.div
                variants={fadeInUp}
                className="w-150 hidden lg:flex absolute right-0 md:right-65 top-[17%] -translate-y-1/2 items-start gap-4 text-[#1A1A1A] z-30"
              >
                <span className="text-7xl font-light leading-none opacity-20">(</span>
                <div className="flex flex-col gap-4">
                   <p className="text-[18px] font-sans font-medium leading-tight pt-2 max-w-[300px]">
                    A dictionary of color combinations by the visionary artist who redefined Japanese aesthetics.
                  </p>
                  <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 font-sans">
                    archive curated by chungi yoo
                  </span>
                </div>
                <span className="text-7xl font-light leading-none opacity-20">)</span>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </section>
  );
}
