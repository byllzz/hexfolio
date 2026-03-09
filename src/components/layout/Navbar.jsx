import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Style for NavLinks
  const linkStyle = ({ isActive }) =>
    `relative font-fair text-[11px] tracking-[0.3em] transition-all duration-300 uppercase ${
      isActive ? 'text-black' : 'text-zinc-500 hover:text-zinc-200'
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isExpanded = !isScrolled || isHovered;

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`

        /* Base Positioning */
        fixed top-2 left-1/2 -translate-x-1/2 z-50 flex items-center transition-all duration-500 ease-in-out overflow-hidden

        /* Background & Borders */
        bg-white text-black backdrop-blur-md border border-zinc-900/50

        /* Scroll-based logic: Top margin and Shape */
        ${isScrolled ? 'top-4' : 'top-0'}
        ${
          isExpanded
            ? 'w-full max-w-[900px] h-20 rounded-full px-12'
            : 'w-40 h-17 rounded-full px-0 justify-center'
        }
      `}
    >
      <div
        className={`flex items-center justify-between w-full ${!isExpanded ? 'justify-center' : ''}`}
      >
        {/* LOGO AREA: Always visible */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-2 h-2 bg-[#b91c1c] rotate-45"></div>
          <NavLink
            to="/"
            className={`font-fair text-xl tracking-tighter text-black hover:text-zinc-400 transition-all duration-500 ${
              !isExpanded ? 'scale-110' : ''
            }`}
          >
            Iro<span className="text-zinc-600 italic">Kumi</span>
          </NavLink>
        </div>

        {/* LINKS: Hidden when shrunk, fades in when expanded */}
        <div
          className={`
          flex items-center gap-10 transition-all duration-500
          ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none absolute translate-x-10'}
        `}
        >
          <NavLink to="/" className={linkStyle}>
            {({ isActive }) => (
              <>
                Dictionary
                {isActive && (
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#b91c1c]" />
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#b91c1c]" />
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/faqs" className={linkStyle}>
            {({ isActive }) => (
              <>
                FAQ
                {isActive && (
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#b91c1c]" />
                )}
              </>
            )}
          </NavLink>
        </div>

        {/* GITHUB: Hidden when shrunk */}
        <div
          className={`
          relative right-15 hidden md:block h-4 w-[1px] bg-zinc-800 transition-all duration-500
          ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none absolute'}
        `}
        >
          <a
            href="https://github.com/byllzz/iro-kumi"
            target="_blank"
            rel="noreferrer"
            className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[12px] tracking-widest text-black hover:text-zinc-400 transition-colors"
          >
            GITHUB
          </a>
        </div>
      </div>
    </nav>
  );
}
