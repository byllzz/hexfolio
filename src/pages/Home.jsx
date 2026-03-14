import Hero from '../components/layout/Hero';
import Faqs from '../components/layout/Faqs';
import plateData from '../data/wadaData.json';
import colorData from '../data/colors-data.json';
import PlateCard from '../components/ui/PlateCard';
import FilterPanel from '../components/ui/FilterPanel';
import SingleColorCard from '../components/ui/SingleColorCard';
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
    <div className="w-full min-h-screen bg-[#F4EFEA] text-[#1A1A1A] font-serif overflow-x-hidden">
      {/* Hero Section */}
      <Hero
        platesLenght={platesColorsData.length}
        singleColorsLength={singalColorData.length}
        setsearchQuery={setSearchQuery}
      />

      {/*  Filter Section */}
      <div className="relative z-20 ">
        <FilterPanel setsearchQuery={setSearchQuery} />
      </div>

      <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-44">
        {/* Toggle btns*/}
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-12 relative">
            <button
              onClick={() => setActiveView('colors')}
              className={`group relative text-2xl md:text-4xl transition-all duration-500 ${
                activeView === 'colors' ? 'opacity-100 italic' : 'opacity-30 hover:opacity-50'
              }`}
            >
              <span className="font-mono text-[10px] absolute -top-4 left-0 tracking-widest uppercase italic">
                Collection 01
              </span>
              Individual Colors
              {activeView === 'colors' && (
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#1A1A1A] scale-x-100 transition-transform origin-left" />
              )}
            </button>

            <div className="h-10 w-[1px] bg-[#1A1A1A]/20 rotate-[25deg]" />

            <button
              onClick={() => setActiveView('plates')}
              className={`group relative text-2xl md:text-4xl transition-all duration-500 ${
                activeView === 'plates' ? 'opacity-100 italic' : 'opacity-30 hover:opacity-50'
              }`}
            >
              <span className="font-mono text-[10px] absolute -top-4 left-0 tracking-widest uppercase italic">
                Collection 02
              </span>
              Color Plates
              {activeView === 'plates' && (
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#1A1A1A] scale-x-100 transition-transform origin-left" />
              )}
            </button>
          </div>
        </div>

        {/* Grid logic*/}
        <div className="min-h-[60vh]">
          {activeView === 'colors' ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-5 gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              {filteredColors.length > 0 ? (
                filteredColors.map(item => <SingleColorCard key={item.id} item={item} />)
              ) : (
                <EmptyState query={searchQuery} />
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              {filteredPlates.length > 0 ? (
                filteredPlates.map((plate, index) => <PlateCard key={index} plate={plate} />)
              ) : (
                <EmptyState query={searchQuery} />
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <div className="w-full py-12 flex flex-col items-center justify-center text-[#000]">
        <div className="overflow-hidden mb-4">
          <p className="font-mono text-[10px]  tracking-[0.6em] uppercase opacity-50 animate-pulse">
            Stay Tuned
          </p>
        </div>
        <h2 className="text-5xl underline md:text-8xl font-serif italic tracking-tighter hover:scale-105 transition-transform duration-700 cursor-default">
          More {activeView === 'colors' ? 'Pigments' : 'Harmony'} Soon
        </h2>
        <div className="mt-12 h-[1px] w-2" />
      </div>

      <Faqs />
    </div>
  );
}

/*  Empty Results */
function EmptyState({ query }) {
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
