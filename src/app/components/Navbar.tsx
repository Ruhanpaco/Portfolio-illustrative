'use client';

import { useState, useEffect } from 'react';
import { FaHome, FaFileAlt, FaComments, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeNavbar = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: FaHome },
    { href: '/resume', label: 'Resume', icon: FaFileAlt },
    { href: '/contact', label: 'Contact', icon: FaComments },
  ];

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" onClick={closeNavbar} className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                <Image
                  src="/assets/img/logo.png"
                  alt="Logo"
                  fill
                  className="rounded-full shadow-sm object-cover"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  <link.icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleNavbar}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus:outline-none text-black"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
              onClick={closeNavbar}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 w-full bg-white z-50 md:hidden shadow-xl"
            >
              <div className="flex flex-col p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" onClick={closeNavbar}>
                    <div className="w-10 h-10 relative">
                      <Image
                        src="/assets/img/logo.png"
                        alt="Logo"
                        fill
                        className="rounded-full shadow-sm object-cover"
                        priority
                      />
                    </div>
                  </Link>
                  <button
                    onClick={closeNavbar}
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-black"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeNavbar}
                      className="flex items-center space-x-3 text-lg font-medium text-black hover:text-gray-800 transition-colors p-3 rounded-lg hover:bg-gray-50"
                    >
                      <link.icon size={24} className="text-black" />
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}