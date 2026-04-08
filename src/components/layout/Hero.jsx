import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const ScrollingText = ({
    text,
    colorClass,
    speed = '10s',
    reverse = false,
  }) => (
    <div
      className={`inline-flex items-center ${colorClass} h-12 md:h-24 lg:h-32  rounded-full overflow-hidden w-[160px] xs:w-[200px] sm:w-[280px] md:w-[350px] lg:w-[450px] shadow-lg border-2 border-black shrink-0`}
    >
      <div
        className="flex whitespace-nowrap items-center"
        style={{
          animation: `marquee ${speed} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {[1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <span className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-medium tracking-normal font-fair uppercase px-3 md:px-6">
              {text}
            </span>
            <Sparkles className="fill-current" size={window?.innerWidth < 768 ? 16 : 24} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen w-full relative top-10 p-0 md:p-8 flex flex-col items-center justify-center font-sans overflow-x-hidden bg-black">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .font-fair { font-family: 'Playfair Display', serif; }
          .font-outfit { font-family: 'Outfit', sans-serif; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* Main Card Hero */}
      <div className="w-full max-w-[1440px] bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-2xl overflow-hidden p-6 md:p-16 relative flex flex-col justify-center border min-h-[60vh] lg:min-h-[85vh]">

        <div className="relative z-10 w-full">
          <div className="text-[14vw] sm:text-[12vw] md:text-[9vw] lg:text-[8.5rem] tracking-tighter leading-[0.9] md:leading-[0.85] font-black text-black flex flex-col gap-4 md:gap-8">

            {/* line 1 */}
            <div className="flex flex-wrap items-center gap-x-3 md:gap-x-8">
              <span className="font-fair italic lg:not-italic">Curating</span>
              <ScrollingText
                text="Unique Palettes"
                colorClass="bg-[#DD6E42] text-white"
                speed="10s"
              />
            </div>

            {/* Line 2*/}
            <div className="flex flex-col md:flex-row md:items-center gap-y-4 gap-x-12 md:ml-[10%] lg:ml-[15%]">
              <span className="font-fair">for digital</span>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-normal font-normal font-outfit leading-relaxed max-w-[260px] md:max-w-[320px] text-zinc-500 italic md:not-italic">
                The ultimate playground to discover and export high-contrast color pairings for modern interfaces.
              </p>
            </div>

            {/* line 3 */}
            <div className="flex flex-wrap items-center md:justify-end gap-x-3 md:gap-x-8 md:mr-[5%]">
              <ScrollingText
                text="Visual Stories"
                colorClass="bg-[#E2FF46] text-black"
                speed="12s"
                reverse={true}
              />
              <span className="font-fair">artists</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Area*/}
      <div className="w-full max-w-[1440px] mt-8 md:mt-12 pt-8 border-t border-zinc-800 flex flex-col lg:flex-row justify-between items-center gap-8 px-4">

        {/* Trend Indicators */}
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Current Trend:
          </span>
          <div className="flex -space-x-3 md:-space-x-4">
            {['#FF4D00', '#00E5FF', '#E2FF46', '#8154F0'].map((color, idx) => (
              <div
                key={idx}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-black md:border-white shadow-md transition-transform hover:-translate-y-2 cursor-pointer"
                style={{ backgroundColor: color }}
                title={`Trend Color ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* farzy brands */}
        <div className="flex gap-6 md:gap-12 items-center overflow-x-auto no-scrollbar w-full lg:w-auto justify-center md:justify-start pb-4 lg:pb-0">
          {['PANTONE®', 'ADOBE COLOR', 'KHROMA', 'COOLORS'].map((brand) => (
            <span
              key={brand}
              className="font-bold text-[10px] md:text-sm tracking-widest text-zinc-600 hover:text-zinc-200 cursor-default transition-colors whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
