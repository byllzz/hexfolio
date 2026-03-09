import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `relative font-fair text-[12px] tracking-[0.1em] transition-all duration-300 uppercase ${
      isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-800'
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isExpanded = !isScrolled || isHovered || mobileMenuOpen;

  return (
    <>
      <nav
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          /* Base Positioning */
          fixed top-4 left-1/2 -translate-x-1/2 z-[60] flex items-center transition-all duration-500 ease

          /* Background & Borders */
          bg-[#111] text-white backdrop-blur-md border border-zinc-900/50

          /* Dynamic Shape & Responsive Width */
          ${isScrolled ? 'top-4' : 'top-0'}
          ${isExpanded
            ? 'w-[95%] max-w-[900px] h-18 rounded-full px-6 md:px-12'
            : 'w-40 h-15 rounded-full px-0 justify-center'
          }
        `}
      >
        <div className={`flex items-center justify-between w-full ${!isExpanded ? 'justify-center' : ''}`}>

          {/* LOGO */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-2 h-2 bg-[#b91c1c] rotate-45"></div>
            <NavLink
              to="/"
              className={`font-fair text-xl tracking-tighter text-white transition-all duration-500 ${
                !isExpanded ? 'scale-110' : ''
              }`}
            >
              Iro<span className="text-zinc-300 italic">Kumi</span>
            </NavLink>
          </div>

          {/* DESKTOP LINKS */}
          <div className={`
            hidden md:flex items-center gap-10 transition-all duration-500
            ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none absolute translate-x-10'}
          `}>
            <NavLink to="/" className={linkStyle}>Dictionary</NavLink>
            <NavLink to="/about" className={linkStyle}>About</NavLink>
            <NavLink to="/faqs" className={linkStyle}>FAQ</NavLink>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 relative right-5">
            {/* Github Link */}
            <div className={`
              hidden md:block h-4 w-[1px] bg-zinc-300 relative
              ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'}
            `}>
              <a href="https://github.com/byllzz/iro-kumi" className="flex items-center gap-2 absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-widest text-white whitespace-nowrap">
               <FaGithub size={24} />
              </a>
            </div>

            {/* HAMBURGER BARS */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`
                md:hidden flex flex-col gap-1.5 z-[70] transition-all duration-300
                ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none absolute'}
              `}
            >
              <div className={`w-6 h-[1.5px] bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-[1.5px] bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-[1.5px] bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`
        fixed inset-0 z-[55] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-in-out md:hidden
        ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="text-black text-2xl font-fair tracking-[0.2em] uppercase">Dictionary</NavLink>
        <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className=" text-2xl text-black font-fair tracking-[0.2em] uppercase">About</NavLink>
        <NavLink to="/faqs" onClick={() => setMobileMenuOpen(false)} className="text-black text-2xl font-fair tracking-[0.2em] uppercase">FAQ</NavLink>
        <a href="https://github.com/byllzz/iro-kumi" className="mt-4 font-mono text-xs text-black tracking-widest text-[#b91c1c]">GITHUB</a>
      </div>
    </>
  );
}
