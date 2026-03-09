import BackgroundCanvas from './BackgroundCanvas';


export default function Hero({ platesLenght, singleColorsLength }) {
  return (
    <section className="relative pt-40 bg-transparent text-white min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden">
            {/* The Canvas Component */}
            <BackgroundCanvas />
      {/*large outlined background  */}
      <div className="absolute top-30 left-0 w-full select-none pointer-events-none z-0">
        <h1
          className="text-[20vw] font-bold leading-none uppercase tracking-tighter opacity-10"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px #ffffff',
          }}
        >
          Archive
        </h1>
      </div>

      {/*  vertical tategaki text  */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 select-none pointer-events-none z-0 hidden lg:block">
        <p
          className="text-[8vw] font-bold opacity-100"
          style={{
            writingMode: 'vertical-rl',
            color: 'transparent',
            WebkitTextStroke: '2px #ffffff',
          }}
        >
          配色総鑑
        </p>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/*  the red seal */}
        <div className="inline-block bg-[#b91c1c] text-white text-[10px] px-3 py-1 mb-8 tracking-[0.4em] font-bold uppercase">
          Show Era Masterpiece
        </div>

        {/* main title section */}
        <div className="border-l border-zinc-800 pl-8 md:pl-12">
          <h1 className="text-6xl md:text-[10rem] font-fair leading-[0.9] tracking-tighter font-bold text-white mb-8">
            Dictionary <br />
            <span className="text-zinc-700 italic">of</span> Color <br />
            Combinations
          </h1>

          <p className="font-fair text-xl md:text-3xl max-w-2xl text-zinc-500 leading-relaxed italic">
            A timeless reference for visual harmony, modern aesthetics, and the sophisticated art of
            dressing well.
          </p>
        </div>

        {/* statistics grid */}
        <div className="flex flex-row items-center gap-16 mt-20 ml-8 md:ml-12">
          <div className="group cursor-default">
            <h2
              className="text-5xl md:text-7xl font-fair text-white transition-transform duration-500 group-hover:-translate-y-2"
              id="totalColors"
            >
              {singleColorsLength}
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-8 h-[1px] bg-[#b91c1c]"></div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white">
                Individual Hues
              </span>
            </div>
          </div>

          <div className="group cursor-default">
            <h2 className="text-5xl md:text-7xl font-fair text-white transition-transform duration-500 group-hover:-translate-y-2">
              {platesLenght}
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-8 h-[1px] bg-black"></div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white">
                Chord Plates
              </span>
            </div>
          </div>
        </div>

        {/* japanese title */}
        <div className="mt-24 ml-8 md:ml-12 opacity-100">
          <p className="font-fair text-sm tracking-[1em] uppercase text-white">
            Wada Sanzō — Haishoku Sōkan
          </p>
        </div>
      </div>

      {/* bottom scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.5em] rotate-90 mb-4">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
