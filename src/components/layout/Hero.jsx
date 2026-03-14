import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // background text behavior
  const artScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const artOpacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 0]);

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F4EFEA] text-[#1A1A1A] font-serif overflow-hidden md:overflow-visible"
    >
      {/*  sticky background  */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          style={{ scale: artScale, opacity: artOpacity }}
          className="text-[#F8CCD3] text-[60vw] md:text-[40vw] font-serif font-bold leading-none tracking-tighter select-none"
        >
          Art
        </motion.div>
      </div>

      {/*foreground content  */}
      <div className="relative z-10 -mt-[100vh]">
        <main className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 md:px-0 pt-10 md:pt-50">

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center w-full max-w-[1400px] mx-auto"
          >
            {/* row 1: welcome + sticker */}
            <div className="relative flex items-center justify-center w-full">
              <motion.h1
                variants={fadeInUp}
                className="text-[14vw] md:text-[11vw] leading-[0.85] md:leading-[0.8] tracking-tighter font-medium text-center z-10"
              >
                Welcome to the
              </motion.h1>

              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 12 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -right-2 md:right-[15%] -top-4 md:top-10 w-14 h-14 md:w-24 md:h-24 rounded-full border border-[#1A1A1A] bg-[#F4EFEA] flex flex-col items-center justify-center z-20 shadow-sm"
              >
                <span className="text-sm md:text-2xl mb-0.5 md:mb-1">:)</span>
                <span className="text-[5px] md:text-[8px] uppercase tracking-[0.2em] font-sans font-bold text-center px-1">
                   est. 1933
                </span>
              </motion.div>
            </div>

            {/* row 2: playground */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center w-full"
            >
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] opacity-40 mb-2 font-sans">
                [ scroll to explore ]
              </span>
              <div className="text-[16vw] md:text-[11vw] leading-[0.8] tracking-tighter font-medium mt-1 md:mt-4 z-20 italic">
                playground
              </div>
            </motion.div>

            {/* row 3: name lockup */}
            <div className="flex flex-col md:flex-row items-center md:items-start mt-4 md:mt-1 relative w-full justify-center">

              {/* the "of" circle - hidden on tiny screens or scaled down */}
              <motion.div
                variants={fadeInUp}
                className="absolute left-[5%] md:relative md:left-0 bottom-[60%] md:bottom-20 w-20 h-20 md:w-50 md:h-50 rounded-full border border-[#1A1A1A] flex items-center justify-center bg-[#F4EFEA]/50 backdrop-blur-md z-30 -mr-0 md:-mr-12 translate-y-0 md:translate-y-8"
              >
                <span className="text-4xl md:text-[10vw] leading-none tracking-tighter">of</span>
              </motion.div>

              {/* wada sanzo text */}
              <div className="flex flex-col items-center md:items-start z-20 mt-10 md:mt-0 translate-y-0 md:translate-y-24">
                <motion.span
                  variants={fadeInUp}
                  className="text-[20vw] md:text-[14vw] leading-[0.7] tracking-tighter font-medium uppercase"
                >
                  Wada
                </motion.span>
                <motion.span
                  variants={fadeInUp}
                  className="relative text-[16vw] md:text-[11vw] leading-[0.8] tracking-tighter font-medium md:ml-48 italic"
                >
                  Sanzō
                </motion.span>
              </div>

              {/* side description - becomes a bottom badge on mobile */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 md:mt-0 md:w-80 flex lg:absolute right-0 md:right-[5%] top-[20%] md:-translate-y-1/2 items-start gap-3 md:gap-4 text-[#1A1A1A] z-30 px-6 md:px-0"
              >
                <span className="hidden md:block text-5xl md:text-7xl font-light leading-none opacity-20">(</span>
                <div className="flex flex-col gap-2 md:gap-4 text-center md:text-left">
                   <p className="text-sm md:text-lg font-sans font-medium leading-snug md:leading-tight md:max-w-[280px]">
                    A dictionary of color combinations by the visionary artist who redefined Japanese aesthetics.
                  </p>
                   {/* hint: curated by chungi yoo */}
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] opacity-40 font-sans">
                    archive curated by chungi yoo
                  </span>
                </div>
                <span className="hidden md:block text-5xl md:text-7xl font-light leading-none opacity-20">)</span>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </section>
  );
}
