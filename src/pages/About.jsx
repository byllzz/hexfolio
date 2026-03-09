import React from 'react';

export default function About() {
  return (
    <section className="relative bg-black text-white pt-32 pb-40 px-6 md:px-24 overflow-hidden font-inter pt-40">
      {/* the watermark vertical */}
      <div className="absolute top-20 right-10 select-none pointer-events-none z-0 hidden lg:block">
        <h1
          className="text-[12vw] relative top-15 font-bold leading-none uppercase opacity-100"
          style={{
            writingMode: 'vertical-rl',
            color: 'transparent',
            WebkitTextStroke: '2px #ffffff',
          }}
        >
          和田三造
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/*  red seal accent */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-32 border-l border-zinc-800 pl-8">
          <div>
            <div className="inline-block bg-[#b91c1c] text-white text-[10px] px-2 py-1 mb-6 tracking-[0.3em] font-bold">
              EST. 1883
            </div>
            <h1 className="font-fair text-7xl md:text-9xl text-white tracking-tighter leading-none mb-4">
              Wada <br /> Sanzō
            </h1>
            <p className="text-white font-serif italic text-2xl">Color Theorist & Visionary</p>
          </div>

          <div className="mt-12 relative right-40 top-70  md:mt-0 text-right space-y-2">
            <p className="font-mono text-xs tracking-widest text-zinc-500">PERIOD</p>
            <p className="font-fair text-4xl text-white">1883 — 1967</p>
          </div>
        </div>

        {/* main narative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* journey */}
          <div className="lg:col-span-4 space-y-8">
            <span className="text-[10px] text-white tracking-[0.5em] block uppercase">
              The Genesis
            </span>
            <h3 className="font-fair text-3xl text-white italic leading-tight">
              From the shores of Hyogo to the studios of Tokyo.
            </h3>
            <p className="text-zinc-500 leading-relaxed font-light">
              Born in Hyogo Prefecture, Wada moved to Tokyo at 16 with a singular ambition. Under{' '}
              <span className="text-white">Kuroda Seiki</span>, he mastered the balance of light
              and form, becoming a cornerstone of the Hakubakai society.
            </p>
          </div>

          <div className="lg:col-start-6 lg:col-span-6 space-y-12">
            <div className="relative">
              {/* image */}
              <div className="w-full h-80 bg-zinc-900/50 border border-zinc-800 rounded-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700">
                <span className="text-white font-fair italic">South Wind Portrait</span>
              </div>
              <p className="mt-4 text-[11px] text-zinc-600 uppercase tracking-widest text-right italic">
                Fig 1.1 — Early Impressionism (1907)
              </p>
            </div>

            <div className="space-y-6 max-w-xl">
              <p className="text-zinc-400 leading-relaxed text-lg">
                Between 1909 and 1914, his soul expanded across{' '}
                <span className="text-white">France, India, and Burma</span>. This pilgrimage
                birthed a unique philosophy: a synthesis of Western technique and the vibrant,
                spiritual palettes of the East.
              </p>
            </div>
          </div>
        </div>

        {/*centerpiece */}
        <div className="mt-48 py-24 border-y border-zinc-900 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h4 className="text-[#b91c1c] font-mono text-xs mb-4 tracking-widest">PUBLICATION</h4>
            <h2 className="font-fair text-5xl text-white leading-tight">
              Haishoku Sōkan <br />
              <span className="text-zinc-700 italic text-4xl">配色総鑑</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-zinc-500 text-xl font-light leading-relaxed">
              In 1934, Wada published a tour de force: an 11-volume system of color chords. It
              wasn't just a book; it was a physical experience of 30 cards, immaculately bound,
              defining the <span className="text-zinc-200">triads and tetrads</span> that still
              guide Japanese modernism.
            </p>
          </div>
        </div>

        {/* legacy & achievement */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="space-y-4">
            <div className="text-4xl font-fair text-white underline decoration-zinc-800 underline-offset-8">
              1927
            </div>
            <p className="text-sm text-zinc-500">
              Founded the Japan Standard Color Association (日本標準色協会).
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-fair text-white underline decoration-zinc-800 underline-offset-8">
              1954
            </div>
            <p className="text-sm text-zinc-500">
              Academy Award for Best Costume Design — "Gate of Hell" (地獄門).
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-fair text-white underline decoration-zinc-800 underline-offset-8">
              2026
            </div>
            <p className="text-sm text-zinc-500">
              Digital preservation via the Wada Index Archive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
