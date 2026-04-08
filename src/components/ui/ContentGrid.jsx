import React from 'react';
import SingleColorCard from '../ui/SingleColorCard';
import PlateCard from '../ui/PlateCard';
import { EmptyState } from '../../pages/Home';

export default function ContentGrid({ activeView, filteredColors, filteredPlates, searchQuery }) {
  // Logic for the total count display
  const itemCount = activeView === 'colors' ? filteredColors.length : filteredPlates.length;
  const viewLabel = activeView === 'colors' ? 'Pigments' : 'Harmonies';

  return (
    <div className="min-h-[70vh] flex flex-col gap-8">

      {/* metadata */}
      <div className="flex justify-between items-end border-b border-white/5 pb-4 px-2">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            Current View
          </span>
          <span className="h-[1px] w-8 bg-white/20"></span>
          <span className="text-sm font-serif italic text-white/80">
            {viewLabel} ({itemCount.toString().padStart(2, '0')})
          </span>
        </div>

        <div className="hidden md:block">
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">
            IROSAI Archive / 2026
          </span>
        </div>
      </div>

      {/* grid */}
      <div className="relative">
        {/* single color */}
        {activeView === 'colors' ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-3 transition-all duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-8">
            {filteredColors.length > 0 ? (
              filteredColors.map((item, idx) => (
                <div
                  key={item.id}
                  style={{ animationDelay: `${idx * 30}ms` }}
                  className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                >
                  <SingleColorCard item={item} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-20">
                <EmptyState query={searchQuery} />
              </div>
            )}
          </div>
        ) : (
            // plate card
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 md:gap-16 transition-all duration-1000 ease-in-out animate-in fade-in slide-in-from-bottom-8">
            {filteredPlates.length > 0 ? (
              filteredPlates.map((plate, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both"
                >
                  <PlateCard plate={plate} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-20">
                <EmptyState query={searchQuery} />
              </div>
            )}
          </div>
        )}
      </div>

      {/*footer for this grid */}
      {itemCount > 0 && (
        <div className="mt-12 flex justify-center opacity-60 group">
          <div className="flex flex-col items-center gap-2">
            <div className="w-[1px] h-12 bg-white  transition-all group-hover:h-20" />
            <span className="font-mono text-[12px] text-white uppercase tracking-[0.5em]">End of Collection</span>
          </div>
        </div>
      )}
    </div>
  );
}
