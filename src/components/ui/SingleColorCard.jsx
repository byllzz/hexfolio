import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SingleColorCard({ item }) {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDetails = () => {
    navigate('/ColorDetails', { state: { color: item } });
  };

  return (
    <div
      className="group relative flex flex-col w-full cursor-pointer transition-all duration-500"
      onClick={handleDetails}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E5DCD3]">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundColor: item.hex }}
        />

        {/* Kanji Overlay  */}
        <div className="absolute top-2 right-2 md:top-3 md:right-3">
          <span className="text-white mix-blend-difference font-serif text-lg md:text-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 select-none">
            {item.kanji}
          </span>
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
            <ArrowUpRight
              className="text-white mix-blend-difference opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
              size={18}
              strokeWidth={1}
            />
        </div>
      </div>

      {/*  Metadata  */}
      <div className="py-4 px-2 flex flex-col gap-1 bg-black">
        <div className="flex justify-between items-start">
          {/* Index Number */}
          <span className="text-[8px] md:text-[9px] font-mono text-[#fff]/40 uppercase tracking-tighter">
            {item.id.toString().padStart(3, '0')}
          </span>

          {/* Hex / Copy Button */}
          <button
            onClick={handleCopy}
            className="text-[8px] md:text-[9px] font-mono text-[#fff]/40 hover:text-[#fff] transition-colors flex items-center gap-1 uppercase"
          >
            {copied ? (
              <span className="text-green-600 flex items-center gap-1">
                <Check size={8} /> COPIED
              </span>
            ) : (
              item.hex
            )}
          </button>
        </div>

        {/* Color Name */}
        <h3 className="text-[11px] md:text-[13px] font-serif text-[#fff] leading-tight truncate pr-2 group-hover:italic transition-all uppercase tracking-tight">
          {item.name}
        </h3>
      </div>

      {/* Subtle Hover Line */}
      <div style={{backgroundColor : item.hex}} className="absolute bottom-0 left-0 w-0 h-[5px] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
