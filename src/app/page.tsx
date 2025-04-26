'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import SocialMedia from './components/SocialMedia';
import Skills from './components/Skills';
import ByTheNumbers from './components/ByTheNumbers'; // Import the updated component
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FiMapPin } from 'react-icons/fi';
import { BiLogoPostgresql } from "react-icons/bi";
import Script from 'next/script';

export default function Home() {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Saas Landing Page",
      description: "This modern SaaS platform showcases enterprise solutions through immersive design and fluid animations. Built with Next.js and React, it features a foundation page highlighting system architecture, a services section demonstrating product offerings, and a contact page. The dark theme with gradient effects creates an engaging, professional experience.",
      image: "/assets/img/saas.png",
      github: "https://github.com/Ruhanpaco/saas-landing-page",
      liveDemo: "https://saas-landing-page-rose.vercel.app/",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black text-xl" /> },
        { name: "React", icon: <SiReact className="text-blue-500 text-xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-xl" /> },
      ],
    },
    {
      id: 2,
      title: "Hotel Website",
      description: "Designed to captivate users with a clean interface and modern visuals, this website highlights the elegance of luxury hotels. Built with React.js, Next.js, Tailwind CSS, and CSS for a responsive and appealing design.",
      image: "/assets/img/hotel.png",
      github: "https://github.com/Ruhanpaco/luxury-hotel-website",
      liveDemo: "https://luxury-hotel-website-sable.vercel.app/",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black text-xl" /> },
        { name: "React", icon: <SiReact className="text-blue-500 text-xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-xl" /> },
      ],
    },
    {
      id: 3,
      title: "[OLD] Portfolio Website",
      description: "Built using React.js, Next.js, Tailwind CSS, and TypeScript. This project emphasizes performance, user experience, and responsive design.",
      image: "/assets/img/portfolio-project.png",
      github: "https://github.com/Ruhanpaco/Monochrome-Profolio",
      liveDemo: null,
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black text-xl" /> },
        { name: "React", icon: <SiReact className="text-blue-500 text-xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-xl" /> },
      ],
    },
    {
      id: 4,
      title: "Kv Prishtina Junior Website",
      description: "Professional Volleyball website featuring elegant design with Next.js, TailwindCSS, and seamless match system, build with PostgreDB and typescript.",
      image: "/assets/img/volleyball.png",
      github: null,
      liveDemo: null,
      Live: "https://kvprishtinajunior.vercel.app/",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black text-xl" /> },
        { name: "React", icon: <SiReact className="text-blue-500 text-xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-xl" /> },
        { name: "PostgresDB", icon: <BiLogoPostgresql className="text-green-600 text-xl" /> },
        { name: "Google API Cloud", icon: <FcGoogle className="text-xl" /> },
      ],
    },
      {
      id: 5,
      title: "Dental Clinic Website",
      description: "Luxury dental clinic website featuring elegant design with Next.js, TailwindCSS, and seamless appointment booking system. Built with modern tech stack and premium aesthetics.",
      image: "/assets/img/dental.png",
      github: "https://github.com/Ruhanpaco/dental-clinic",
      liveDemo: "https://dental-clinic-ivory.vercel.app/",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black text-xl" /> },
        { name: "React", icon: <SiReact className="text-blue-500 text-xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-xl" /> },
      ],
    },
  ];

  // Local Time State
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Europe/Belgrade', // GMT+1 (Kosovo timezone)
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setLocalTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-white min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 py-20 md:py-0">
        {/* Left Side (Text) */}
        <div className="flex flex-col items-start w-full md:w-1/2 max-w-xl space-y-4 md:space-y-6 mt-16 md:mt-0 z-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I&apos;m
          </motion.h1>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
            Ruhan Pacolli
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-600" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.7 }}
          >
            A passionate web developer creating beautiful, functional websites and experiences. Welcome to my portfolio!
          </motion.p>
          
          {/* Social Media Component */}
          <div className="mt-6 md:mt-8">
            <SocialMedia />
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <motion.div 
            className="w-[95%] sm:w-[90%] max-w-[800px]"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 1 }}
          >
            <Image 
              src="/assets/img/image-profile.svg" 
              alt="Profile Image"
              width={800}
              height={800}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* By The Numbers Section */}
      <ByTheNumbers />

      {/* About Me Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Local Time Badge */}
          <motion.div
            className="flex justify-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold flex items-center">
              🕒 Local Time: {localTime}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16">About Me</h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-16">
            {/* Right Side (Image) */}
            <div className="w-full md:w-1/2">
              <motion.img 
                src="/assets/img/about-me.png"
                alt="About Me"
                className="w-[95%] sm:w-[90%] max-w-[900px] mx-auto rounded-lg"
                initial={{ opacity: 0, x: 100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Left Side (Text) */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Hi, I&apos;m Ruhan Pacolli, a passionate web developer based in Kosovo. I specialize in creating modern, responsive, and user-friendly websites and applications.
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-600" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I love turning ideas into reality through code and constantly strive to learn and improve my skills. When I&apos;m not coding, you can find me training volleyball, Volunteering, or just watching movies.
              </motion.p>
              {/* Location Badge */}
              <motion.div 
                className="flex space-x-4 pt-2" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                  <FiMapPin className="mr-2" /> Kosovo
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16">My Skills</h2>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16">My Projects</h2>
          <div className="space-y-12 md:space-y-16">
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className="flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12 bg-white border border-black rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Project Image */}
                <div className="w-full md:w-2/5">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-xl border-2 border-black object-cover"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="w-full md:w-3/5 space-y-4 md:space-y-6 mt-4 md:mt-0">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{project.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600">{project.description}</p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-base"
                      >
                        {tech.icon}
                        <span className="ml-2">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Project Links Demo */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 sm:pt-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-sm sm:text-base md:text-lg"
                      >
                        <FaGithub className="mr-2" /> GitHub
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 sm:px-8 py-2 sm:py-3 bg-white border-2 border-black text-black rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base md:text-lg"
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </a>
                    )}
                    {project.Live && (
                      <a
                        href={project.Live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 sm:px-8 py-2 sm:py-3 bg-white border-2 border-black text-black rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base md:text-lg"
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for Projects */}
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SoftwareApplication",
                "name": project.title,
                "description": project.description,
                "applicationCategory": "WebApplication",
                "operatingSystem": "All",
                "url": project.liveDemo || project.github || project.Live,
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "author": {
                  "@type": "Person",
                  "name": "Ruhan Pacolli"
                }
              }
            }))
          })
        }}
      />
    </main>
  );
}
