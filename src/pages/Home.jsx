
import Faqs from '../components/layout/Faqs';
import plateData from '../data/plates-data.json';
import colorData from '../data/colors-data.json';
import SearchNavigation from '../components/layout/SearchNavigation';
import ContentGrid from '../components/ui/ContentGrid';
import Hero from '../components/layout/Hero';
import { useState } from 'react';

export default function Home() {
  const platesColorsData = plateData.plates;
  const singalColorData = colorData.colors;

  const [activeView, setActiveView] = useState('colors');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredColors = singalColorData.filter(
    color =>
      color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPlates = platesColorsData.filter(plate =>
    plate.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen background-color text-white font-serif overflow-x-hidden">
      <Hero />
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-44">
        {/* search area */}
        <SearchNavigation
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeView={activeView}
          setActiveView={setActiveView}
        />
        {/* Grid */}
        <ContentGrid
          activeView={activeView}
          filteredColors={filteredColors}
          filteredPlates={filteredPlates}
          searchQuery={searchQuery}
        />
      </main>
      <Faqs />
    </div>
  );
}

/*  Empty Results */
export function EmptyState({ query }) {
  return (
    <div className="col-span-full py-32 flex flex-col items-center">
      <span className="text-6xl mb-4 opacity-20">:(</span>
      <p className="text-zinc-500 font-serif italic text-xl md:text-2xl text-center">
        No results for <span className="text-[#1A1A1A]">"{query}"</span>
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 text-[10px] uppercase tracking-widest border-b border-[#1A1A1A] pb-1 hover:opacity-50 transition-opacity"
      >
        Clear all filters
      </button>
    </div>
  );
}
