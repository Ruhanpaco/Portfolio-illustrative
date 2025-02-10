'use client';

import { useState } from 'react';
import { FaHome, FaFileAlt, FaComments, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full bg-white text-black shadow-lg w-16 flex-col items-center justify-center space-y-8 z-50">
        {/* Logo */}
        <div className="absolute top-4">
          <Link href="/">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/assets/img/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full"
                onError={(e) => {
                  // If the logo fails to load, show text instead
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback Text */}
              <span className="text-xl font-bold hidden">Ruhan</span>
            </div>
          </Link>
        </div>

        {/* Home Icon */}
        <Link href="/" className="group relative flex items-center justify-center w-12 h-12 hover:bg-gray-100 rounded-lg transition">
          <FaHome size={24} className="text-gray-700" />
          <span className="absolute left-16 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Home
          </span>
        </Link>

        {/* Resume Icon */}
        <Link href="/resume" className="group relative flex items-center justify-center w-12 h-12 hover:bg-gray-100 rounded-lg transition">
          <FaFileAlt size={24} className="text-gray-700" />
          <span className="absolute left-16 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Resume
          </span>
        </Link>

        {/* Contact Icon */}
        <Link href="/contact" className="group relative flex items-center justify-center w-12 h-12 hover:bg-gray-100 rounded-lg transition">
          <FaComments size={24} className="text-gray-700" />
          <span className="absolute left-16 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Contact
          </span>
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 w-full bg-white text-black shadow-lg z-50">
        {/* Hamburger Menu and Logo */}
        <div className="p-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/assets/img/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-full"
                onError={(e) => {
                  // If the logo fails to load, show text instead
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Fallback Text */}
              <span className="text-xl font-bold hidden">Ruhan</span>
            </div>
          </Link>
          <button onClick={toggleNavbar} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Full-Screen Navbar */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-8 z-50">
            {/* Close Button */}
            <button
              onClick={closeNavbar}
              className="absolute top-4 right-4 focus:outline-none"
            >
              <FaTimes size={24} />
            </button>

            {/* Logo */}
            <Link href="/" onClick={closeNavbar}>
              <div className="w-24 h-24 flex items-center justify-center">
                <Image
                  src="/assets/img/logo.png"
                  alt="Logo"
                  width={96}
                  height={96}
                  className="rounded-full"
                  onError={(e) => {
                    // If the logo fails to load, show text instead
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback Text */}
                <span className="text-2xl font-bold hidden">Ruhan</span>
              </div>
            </Link>

            {/* Links */}
            <Link href="/" className="text-2xl font-semibold hover:text-gray-600 transition" onClick={closeNavbar}>
              Home
            </Link>
            <Link href="/resume" className="text-2xl font-semibold hover:text-gray-600 transition" onClick={closeNavbar}>
              Resume
            </Link>
            <Link href="/contact" className="text-2xl font-semibold hover:text-gray-600 transition" onClick={closeNavbar}>
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Overlay for Mobile Navbar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeNavbar}
        ></div>
      )}
    </>
  );
}