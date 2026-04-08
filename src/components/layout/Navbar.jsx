import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const linkStyle = ({ isActive }) =>
    `relative font-outfit text-[14px] font-medium capitalize transition-colors duration-200 ${
      isActive ? 'text-black' : 'text-black/30 hover:text-zinc-800'
    }`;

  const mobileLinkStyle = ({ isActive }) =>
    `text-2xl font-fair tracking-[0.2em] uppercase transition-all ${
      isActive ? 'text-black scale-110' : 'text-black/40'
    }`;

  return (
    <>
      <nav className="fixed w-full top-3 sm:top-5 left-0 right-0 z-[60] flex justify-center px-4">
        <div
          className="flex items-center justify-between px-4 h-12 w-full max-w-[450px] text-black bg-white/90 backdrop-blur-md border border-black/5 shadow-sm rounded-full"
        >
          {/* logo */}
          <div className="flex items-center shrink-0">
            <NavLink to="/" className="flex items-center gap-1 group">
              <span className="flex items-center justify-center">
                <svg
                  fill="#000"
                  height={28}
                  width={28}
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:rotate-12"
                >
                  <path d="M253.72,202.53a4,4,0,0,0,4.56,0,151.88,151.88,0,0,1,128.44-20.41,4,4,0,0,0,5.15-4C388.8,105.86,329,48,256,48S123.2,105.86,120.13,178.15a4,4,0,0,0,5.15,4,151.88,151.88,0,0,1,128.44,20.41Z"></path>
                  <path d="M405.31,212.56a152.53,152.53,0,0,1-83.08,108.23,4,4,0,0,0-2.28,3.69c0,1.17.05,2.34.05,3.52a151.58,151.58,0,0,1-47.15,109.94,4,4,0,0,0,.64,6.31A135.24,135.24,0,0,0,344,464c72.07,0,134.1-60.28,136-132.34a136.07,136.07,0,0,0-68.76-121.87A4,4,0,0,0,405.31,212.56Z"></path>
                  <path d="M390.57,203.67a4,4,0,0,0-2.69-4.4,135.84,135.84,0,0,0-114.4,12.49,4,4,0,0,0-.64,6.29,151.92,151.92,0,0,1,44.47,81.4,4,4,0,0,0,5.94,2.72A136.29,136.29,0,0,0,390.57,203.67Z"></path>
                  <path d="M192,328c0-1.18,0-2.35.05-3.52a4,4,0,0,0-2.28-3.69,152.53,152.53,0,0,1-83.08-108.23,4,4,0,0,0-5.88-2.77A136.07,136.07,0,0,0,32.05,331.66C34,403.72,96,464,168.05,464a135.24,135.24,0,0,0,70.46-19.75,4,4,0,0,0,.64-6.31A151.58,151.58,0,0,1,192,328Z"></path>
                  <path d="M168,192a135.34,135.34,0,0,0-43.88,7.27,4,4,0,0,0-2.69,4.4,136.29,136.29,0,0,0,67.32,98.5,4,4,0,0,0,5.94-2.72,151.92,151.92,0,0,1,44.47-81.4,4,4,0,0,0-.64-6.29A135.18,135.18,0,0,0,168,192Z"></path>
                  <path d="M256,336a151.44,151.44,0,0,1-42.72-6.12,4,4,0,0,0-5.15,4,135.69,135.69,0,0,0,45.18,95.4,4,4,0,0,0,5.38,0,135.69,135.69,0,0,0,45.18-95.4,4,4,0,0,0-5.15-4A151.44,151.44,0,0,1,256,336Z"></path>
                  <path d="M302.57,308.33a135.94,135.94,0,0,0-43.87-81.58,4.06,4.06,0,0,0-5.4,0,135.94,135.94,0,0,0-43.87,81.58,4,4,0,0,0,2.69,4.4,136.06,136.06,0,0,0,87.76,0A4,4,0,0,0,302.57,308.33Z"></path>
                </svg>
              </span>
              <span className="font-fair text-[18px] tracking-tighter text-black">
                Iro<span className="italic font-bold">Sai</span>
              </span>
            </NavLink>
          </div>

          {/* navigation */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <NavLink to="/" className={linkStyle}>Dictionary</NavLink>
              <NavLink to="/about" className={linkStyle}>About</NavLink>
              <NavLink to="/faqs" className={linkStyle}>FAQ</NavLink>
              <div className="h-4 w-[1px] bg-black/20 mx-1" />
              <a
                href="https://github.com/byllzz/irosai"
                target="_blank"
                rel="noreferrer"
                className="text-black/70 hover:text-black transition-colors"
              >
                <FaGithub size={20} />
              </a>
            </div>

            {/* toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-[70]"
            >
              <div className={`w-5 h-[1.5px] bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
              <div className={`w-5 h-[1.5px] bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-[1.5px] bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* mobile overlay */}
      <div
        className={`
          fixed inset-0 z-[55] bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden
          ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}
      >
        <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={mobileLinkStyle}>
          Dictionary
        </NavLink>
        <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={mobileLinkStyle}>
          About
        </NavLink>
        <NavLink to="/faqs" onClick={() => setMobileMenuOpen(false)} className={mobileLinkStyle}>
          FAQ
        </NavLink>

        <a
          href="https://github.com/byllzz/irosai"
          target="_blank"
          rel="noreferrer"
          className="mt-4 p-3 rounded-full bg-black text-white hover:scale-110 transition-transform"
        >
          <FaGithub size={28} />
        </a>
      </div>
    </>
  );
}
