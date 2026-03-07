import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SingleColorCard({ item }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

   const navigation = useNavigate();
  const handleDetails = () => {
   navigation('/ColorDetails', { state: { color: item } });
  }
  return (
    <div className="group relative bg-[#0a0a0a] border border-zinc-900 rounded-sm overflow-hidden hover:border-zinc-700 transition-all duration-500">
      {/*  Large Color Field */}
      <div
        className="aspect-[5/7] w-full relative overflow-hidden cursor-pointer"
        style={{ backgroundColor: item.hex }}
        onClick={handleDetails}
      >
        {/* Vertical Kanji Overlay */}
        <div className="absolute top-4 right-4 flex flex-col items-center">
          <span
            className="text-white mix-blend-difference font-serif text-3xl opacity-80 select-none"
            style={{ writingMode: 'vertical-rl' }}
          >
            {item.kanji}
          </span>
        </div>
      </div>

      {/* Metadata Section */}
      <div className="p-5 space-y-4">
        <div className="flex relative justify-between items-start">
          <div>
            <p className="text-[10px] font-mono text-zinc-500 tracking-[0.3em] uppercase mb-1">
              {item.id} // {item.category}
            </p>
            <h3 className="text-xl font-serif text-zinc-100 tracking-tight">{item.name}</h3>
          </div>
          <button
            onClick={handleCopy}
            className="font-mono text-[11px] text-zinc-400 hover:text-white border-b border-zinc-800 hover:border-white transition-all pb-0.5 uppercase tracking-tighter"
          >
            {item.hex}
          </button>
        </div>

        {/* Description - subtle and elegant */}
        <p className="text-[11px] leading-relaxed text-zinc-500 font-light pr-4 italic">
          "{item.description}"
        </p>
      </div>

      {/* Decorative Bottom Bar */}
      <div
        className="h-1 w-0 group-hover:w-full transition-all duration-700 ease-in-out"
        style={{ backgroundColor: item.hex }}
      ></div>

      {/* Hover Overlay with Copy Icon */}
      <div className="absolute bottom-4 right-4  group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <button className="opacity-0 group-hover:opacity-100 transition-opacity    rounded-full" onClick={handleCopy}>
          {copied ? (
            <Check size={25} className="text-white" />
          ) : (
            <Copy size={25} className="text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
