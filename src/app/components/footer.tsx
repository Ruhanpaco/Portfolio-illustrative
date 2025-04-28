'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Resume', href: '/resume' },
      { name: 'Contact', href: '/contact' },
    ],
    projects: [
      { name: 'SaaS Landing Page', href: 'https://saas-landing-page-rose.vercel.app/' },
      { name: 'Hotel Website', href: 'https://luxury-hotel-website-sable.vercel.app/' },
      { name: 'Dental Clinic', href: 'https://dental-clinic-ivory.vercel.app/' },
      { name: 'KV Prishtina Junior', href: 'https://kvprishtinajunior.vercel.app/' },
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/Ruhanpaco', icon: FaGithub },
      { name: 'WhatsApp', href: 'https://wa.link/tpbnvt', icon: FaWhatsapp },
      { name: 'Email', href: 'mailto:hi@ruhanpacolli.online', icon: FaEnvelope },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/assets/img/logo.png"
                  alt="Ruhan Pacolli"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">Ruhan Pacolli</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Full-stack developer specializing in modern web technologies and exceptional user experiences.
            </p>
            <div className="flex items-center text-gray-600 text-sm">
              <FaMapMarkerAlt className="mr-2" />
              <span>Kosovo, Europe</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Projects */}
          <div>
            <h3 className="text-black font-semibold mb-4">Recent Projects</h3>
            <ul className="space-y-3">
              {footerLinks.projects.map((project) => (
                <li key={project.name}>
                  <a 
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-black font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              {footerLinks.social.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-black transition-colors"
                  >
                    <social.icon className="mr-2" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © {currentYear} Ruhan Pacolli. All rights reserved.
          </p>
          
          {/* Climate Badge */}
          <button
            onClick={() => window.open('https://climate.stripe.com/X9tURq', '_blank')}
            className="flex items-center gap-2 text-black bg-white border-2 border-black rounded-full px-4 py-2 hover:bg-gray-100 transition duration-300"
          >
            <Image
              src="/assets/img/StripeClimateBadge.svg"
              alt="Stripe Climate Badge"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-sm">I contribute to climate</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
