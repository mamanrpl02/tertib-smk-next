'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links: NavLink[] = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang', href: '#about' },
    { name: 'Fitur', href: '#features' },
    { name: 'Kontak', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 border-b border-[#E8DFCA] transition-all duration-300 ${
        scrolled ? 'bg-[#F5EFE6]/95 backdrop-blur-md shadow-sm' : 'bg-[#F5EFE6]/70 backdrop-blur'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <Link href="#" className="text-2xl font-bold text-[#6D94C5]">
          Karakter<span className="text-[#b0a084]">in</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#6D94C5] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:inline bg-[#6D94C5] text-white px-4 py-2 rounded-xl hover:bg-[#5c84b5] transition">
          Coba Sekarang
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none text-2xl"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#F5EFE6]/95 backdrop-blur-md px-6 py-4 space-y-4 border-t border-[#E8DFCA]"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium hover:text-[#6D94C5] transition"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-[#6D94C5] text-white px-4 py-2 rounded-xl hover:bg-[#5c84b5] transition">
              Coba Sekarang
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
