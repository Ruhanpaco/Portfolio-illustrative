'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa'; // Twitter Icon from React Icons
import { AiOutlineGithub } from 'react-icons/ai'; // GitHub Icon from React Icons

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        {/* Left Section: Copyright */}
        <p className="text-gray-800 text-center md:text-left">
          &copy; {new Date().getFullYear()} Ruhan Pacolli. All rights reserved.
        </p>

        {/* Right Section: Social Links */}
        <div className="flex gap-6">
          <Link href="https://twitter.com" target="_blank" className="text-gray-800 hover:text-blue-500">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://github.com" target="_blank" className="text-gray-800 hover:text-black">
            <AiOutlineGithub size={24} />
          </Link>
        </div>

        {/* Contribution Badge */}
        <div className="flex justify-end items-center gap-6">
          <button
            onClick={() => window.open('https://climate.stripe.com/X9tURq', '_blank')}
            className="flex items-center gap-2 text-black bg-white border-2 border-black rounded-full px-4 py-2 hover:bg-gray-100 transition duration-300"
          >
            {/* Badge Icon */}
            <Image
              src="/assets/img/StripeClimateBadge.svg"
              alt="Stripe Climate Badge"
              className="w-6 h-6"
              width={6}
              height={6}
            />
            <span className="text-sm">I contribute to climate</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
