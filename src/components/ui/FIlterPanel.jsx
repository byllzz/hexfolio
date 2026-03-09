import React from 'react';
import { Search } from 'lucide-react';

export default function FilterPanel({ setsearchQuery }) {
  return (
    <div className="w-full bg-black pt-20 pb-10 px-6 md:px-16 border-b border-zinc-900/50">
      {/*  Big Typography Header */}
      <div className="flex flex-col mb-12">
        <span className="text-white font-mono text-[10px] tracking-[0.5em] uppercase mb-4">
          Wada Sanzō Archive — 1933
        </span>
        <h1 className="text-6xl md:text-8xl font-serif text-white tracking-tighter leading-none italic select-none">
          Discover Colors & Plates
        </h1>
      </div>

      {/*  Interactive Row */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-8">

        {/* l Search */}
        <div className="relative w-full md:w-180 group border-b border-white">
          <input
            type="text"
            onChange={e => {
              setsearchQuery(e.target.value);
            }}
            placeholder="Type to find a mood..."
            className="w-full bg-transparent py-3 pl-2 pr-10 text-xs tracking-widest text-white outline-none placeholder:text-white italic uppercase"
          />
          <Search
            className="absolute right-2 top-1/2 -translate-y-1/2 text- group-white focus-within:text-black transition-colors duration-700"
            size={18}
            strokeWidth={1}
          />
        </div>
      </div>
    </div>
  );
}
