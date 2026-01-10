'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  links: { label: string; href: string }[];
  brandName: string;
  lang: string;
}

export default function Navbar({ links, brandName, lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll to change styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logic to switch language
  const togglePath = pathname.startsWith('/pl') 
    ? pathname.replace('/pl', '/en') 
    : pathname.replace('/en', '/pl');

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform">
              {brandName.charAt(0)}
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">{brandName}</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">
                {link.label}
              </a>
            ))}

            {/* Language Switcher Button */}
            <Link 
              href={togglePath}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-blue-600 transition border-l pl-6 border-gray-200"
            >
              <Globe size={14} />
              {lang === 'en' ? 'PL' : 'EN'}
            </Link>

            <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
              {lang === 'en' ? 'Get Started' : 'Zacznij'}
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center gap-4">
            <Link href={togglePath} className="text-gray-600 text-xs font-bold uppercase">
              {lang === 'en' ? 'PL' : 'EN'}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2" aria-label='menu'>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV ANIMATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-semibold text-gray-900 border-b border-gray-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}