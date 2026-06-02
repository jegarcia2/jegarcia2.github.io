'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';


const leftLinks = [
  { key: 'skills', href: '#skills', title: 'TECHNICAL CAPABILITIES' },
  { key: 'projects', href: '#projects', title: 'PROJECTS' },
];

const rightLinks = [
  { key: 'experience', href: '#experience', title: 'EXPERIENCE & EDUCATION' },
  { key: 'contact', href: '#contact', title: 'CONTACT ME' },
];

const allLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // This listens to the user's scrolling
  useEffect(() => {
    const handleScroll = () => {
      // If the user scrolls down more than 300 pixels, it triggers the change
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/10">

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center h-16">

        {/* Left Links */}
        <div className="flex items-center gap-12">
          {leftLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[0.85rem] font-bold tracking-widest uppercase text-white hover:text-[#2ecc8a] transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="mx-24 relative flex items-center justify-center w-12 h-12">

          {/* The divider line (Fades out when scrolled) */}
          <div className={`absolute w-px h-8 bg-white/20 transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
          />

          {/* The Portrait: Increased to w-20 h-20 (80px). Since the navbar is only 64px, it automatically overflows! */}
          <div className={`absolute w-35 h-35 rounded-full border-2 border-white/20 bg-[#0B0F19] flex items-center justify-center overflow-hidden transition-all duration-500 transform shadow-xl ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <a
              href="#"
              className={`absolute w-35 h-35 rounded-full border-2 border-white/20 bg-[#0B0F19] flex items-center justify-center overflow-hidden transition-all duration-500 transform shadow-xl cursor-pointer ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
              onClick={(e) => {
                // This ensures a buttery-smooth scroll exactly to the top
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Image
                src="/profile-2.png"
                alt="José Emilio García Villegas"
                fill
                className="object-cover"
                priority
              />
            </a>
          </div>

        </div>

        {/* Right Links */}
        <div className="flex items-center gap-12">
          {rightLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[0.85rem] font-bold tracking-widest uppercase text-white hover:text-[#2ecc8a] transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>

      </div>

      {/* Mobile Layout (Unchanged) */}
      <div className="md:hidden flex items-center justify-between h-14 px-4">
        <span className="text-sm font-bold tracking-widest uppercase text-white">Menu</span>
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="text-white text-xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-[#0B0F19] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {allLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="block text-sm font-bold tracking-widest uppercase text-gray-300 hover:text-[#2ecc8a] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}