import Hero from '../components/layout/Hero'
import Faqs from '../components/layout/Faqs';
import plateData from '../data/wadaData.json';
import colorData from '../data/colors-data.json'
import PlateCard from '../components/ui/PlateCard';
import FIlterPanel from '../components/ui/FIlterPanel';
import SingleColorCard from '../components/ui/SingleColorCard';
import { useState } from 'react';

export default function Home() {
  const platesColorsData = plateData.plates;
  const singalColorData = colorData.colors;

  const [activeView, setActiveView] = useState('colors');
  const [searchQuery, setsearchQuery] = useState('');

  // main logic for searchQuery
  const filteredColors = singalColorData.filter(
    color =>
      color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredPlates = platesColorsData.filter(plate =>
    plate.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-full flex flex-col overflow-x-hidden relative min-h-screen bg-black">
      <div>
        <Hero platesLenght={platesColorsData.length} singleColorsLength={singalColorData.length} />
      </div>

      <div className="bg-black px-6 md:px-16">
        <FIlterPanel setsearchQuery={setsearchQuery} />

        <div className="flex flex-row items-center justify-center w-full max-w-400 mx-auto gap-20 my-32">
          ({' '}
          <button
            className={`text-3xl italic font-serif transition-all duration-200 ${activeView === 'colors' ? 'text-white' : 'text-zinc-400'}`}
            onClick={() => setActiveView('colors')}
          >
            Individual Colors
          </button>
          <button
            onClick={() => setActiveView('plates')}
            className={`text-3xl italic font-serif transition-all duration-200 ${activeView === 'plates' ? 'text-white' : 'text-zinc-400'}`}
          >
            Color Plates
          </button>{' '}
          )
        </div>

        {/* View Logic */}
        {activeView === 'colors' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[40vh]">
            {filteredColors.length > 0 ? (
              filteredColors.map(item => <SingleColorCard key={item.id} item={item} />)
            ) : (
              <div className="col-span-full py-20 text-center text-zinc-700 font-serif italic text-2xl">
                No pigments found matching "{searchQuery}"
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-[40vh]">
            {filteredPlates.length > 0 ? (
              filteredPlates.map((plate, index) => <PlateCard key={index} plate={plate} />)
            ) : (
              <div className="col-span-full py-20 text-center text-zinc-700 font-serif italic text-2xl">
                No plates found matching "{searchQuery}"
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center justify-center  my-20 bg-black text-white">
        <h1 className="underline text-4xl md:text-6xl font-serif text-white tracking-tighter leading-none italic select-none">
          More {activeView === 'colors' ? "Colors" : "Plates"} Soon!
        </h1>
      </div>
      <Faqs />
    </div>
  );
}
