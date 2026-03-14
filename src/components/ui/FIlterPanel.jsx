import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FilterPanel({ setsearchQuery }) {
  return (
    /* the main container - a floating dark pill */
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[95%] max-w-6xl mx-auto bg-[#000] rounded-xl md:rounded-full px-6 md:px-16 mt-20 md:mt-40 py-16 md:py-24 overflow-hidden flex flex-col items-center"
    >


      {/* the arched text - responsive svg curve */}
      <div className="absolute -top-5 md:-top-10 left-1/2 -translate-x-1/2 w-[180%] md:w-[1400px] pointer-events-none select-none overflow-visible">
        <svg viewBox="0 0 1200 350" className="w-full h-auto overflow-visible">
          <path id="text-curve" d="M 0,300 C 300,50 900,50 1200,300" fill="transparent" />
          <text
            className="text-[45px] md:text-[50px] font-serif tracking-[0.05em]"
            fill="none"
            stroke="#fff"
            strokeWidth="0.4"
            opacity="0.6"
          >
            <textPath href="#text-curve" startOffset="50%" textAnchor="middle">
              COLORS & COLOR PLATES
            </textPath>
          </text>
        </svg>
      </div>

      {/* the main interactive area */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl mt-20 md:mt-16">

        {/* archival label - small caps hint */}
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <div className="h-[1px] w-4 md:w-8 bg-white/20"></div>
          <span className="text-white/60 font-mono text-[9px] md:text-[11px] tracking-[0.5em] uppercase text-center">
            Wada Sanzō Archive — 1933
          </span>
          <div className="h-[1px] w-4 md:w-8 bg-white/20"></div>
        </div>

        {/* the interactive search bar */}
        <div className="relative w-full md:w-5/6 group">
          <input
            type="text"
            onChange={e => setsearchQuery(e.target.value)}
            placeholder="Search for a mood..."
            className="w-full bg-transparent py-5 px-2 text-xl md:text-3xl tracking-tighter text-white outline-none border-b border-white/10 placeholder:text-white/20 italic font-serif transition-all duration-700 group-hover:border-white/30 focus:border-white"
          />

          {/* search icon and discover hint */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <span className="hidden md:block text-[10px] uppercase tracking-[0.4em] text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
              Discover
            </span>
            <div className="p-2">
              <Search
                className="text-white/40 group-focus-within:text-white group-hover:rotate-12 transition-all duration-500"
                size={22}
                strokeWidth={1}
              />
            </div>
          </div>

          {/* the animated focus line */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-1000 ease-out group-focus-within:w-full" />
        </div>

        {/* mobile-only scroll hint */}
        <div className="mt-12 md:hidden">
          <span className="text-[8px] text-white/30 uppercase tracking-[0.3em]">
            ↓ Swipe to browse pigments
          </span>
        </div>

      </div>
    </motion.section>
  );
}
