import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-500 pt-10 pb-0 px-8 border-t border-zinc-900 min-h-screen w-full flex flex-col justify-between">
      {/* Large  Text */}
      <div className=" w-full select-none pointer-events-none">
        <h1
          className="text-[16.5vw] font-bold leading-none opacity-100 uppercase tracking-tighter"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px #cccccc59', // zinc-600 color
          }}
        >
          WadaIndex
        </h1>
      </div>
      <div className="w-full max-w-[1560px] mx-auto grid grid-cols-2 md:grid-cols-2 gap-8">
        {/* col -1*/}
        <div className="space-y-4">
          <h2 className="font-fair text-4xl font-bold text-zinc-100 tracking-tight">Wada Index</h2>
          <p className="text-sm leading-relaxed max-w-xs">
            A digital preservation of Wada Sanzō’s 1930s color theory. Exploring the harmony between
            traditional Japanese aesthetics and modern design.
          </p>
        </div>

        {/* col -2 */}
        <div className="md:grid grid-cols-2">
          {/* links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-zinc-300/90 text-xl uppercase tracking-[0.1em] font-fair mb-2 font-semibold">
              Navigation
            </h3>
            <Link to="/" className="hover:text-white transition-colors text-sm">
              Dictionary
            </Link>
            <Link to="/about" className="hover:text-white transition-colors text-sm">
              About the Artist
            </Link>
            <Link to="/faqs" className="hover:text-white transition-colors text-sm">
              Common Questions
            </Link>
            <a
              href="https://github.com/byllzz/wada-index"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors text-sm"
            >
              GitHub Repo
            </a>
          </div>
          {/* main source */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <div className="text-left md:text-right">
              <h3 className="text-zinc-300/90 text-xl uppercase  font-fair mb-2 font-semibold">
                Source Material
              </h3>
              <p className="text-sm italic font-fair">Haishoku Sōkan (1933)</p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 md:mt-0 group flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-300  hover:text-zinc-400 transition-color"
            >
              Back To Top
            </button>
          </div>
        </div>
      </div>

      {/* copyright & license */}
      <div className="w-full py-8 border-t border-zinc-900 flex  md:flex-row justify-center items-center  uppercase tracking-widest">
        <div className="flex flex-col items-center justify-center">
          <p className='uppercase font-fair text-zinc-300/90 text-sm'>© 2025 Colors of Wada Index</p>
          <Link
            to="/license"
            className="font-fair capitalize text-[18px] underline md:text-[18px] mb-4 tracking-tight"
          >
            License & Rights
          </Link>
        </div>
      </div>
    </footer>
  );
}
