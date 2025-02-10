'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SocialMedia from './components/SocialMedia';
import Skills from './components/Skills';
import ByTheNumbers from './components/ByTheNumbers'; // Import the updated component
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FiMapPin } from 'react-icons/fi';
import Navbar from './components/Navbar'; // Import the Navbar component

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
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-white min-h-screen flex flex-col md:flex-row items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
        {/* Left Side (Text) */}
        <div className="flex flex-col items-start w-full md:w-1/2 max-w-xl space-y-4 sm:space-y-6 md:space-y-8">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I&apos;m
          </motion.h1>
          <motion.h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
            Ruhan Pacolli
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 max-w-md sm:max-w-lg md:max-w-xl" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.7 }}
          >
            A passionate web developer creating beautiful, functional websites and experiences. Welcome to my portfolio!
          </motion.p>
          
          {/* Social Media Component */}
          <div className="mt-4 sm:mt-6 md:mt-8">
            <SocialMedia />
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <motion.img 
            src="/assets/img/image-profile.svg" 
            alt="Profile Image"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[800px] h-auto object-contain"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 1 }}
          />
        </div>
      </section>

      {/* By The Numbers Section */}
      <ByTheNumbers />

      {/* About Me Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Local Time Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
              🕒 Local Time: {localTime}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side (Text) */}
            <div className="w-full md:w-1/2">
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 mb-6" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Hi, I&apos;m Ruhan Pacolli, a passionate web developer based in Kosovo. I specialize in creating modern, responsive, and user-friendly websites and applications.
              </motion.p>
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 mb-6" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                I love turning ideas into reality through code and constantly strive to learn and improve my skills. When I&apos;m not coding, you can find me training volleyball, Volunteering, or Just watching movies..
              </motion.p>
              {/* Location Badge */}
              <motion.div 
                className="flex space-x-4 mb-6" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                  <FiMapPin className="mr-2" /> Kosovo
                </span>
              </motion.div>
            </div>

            {/* Right Side (Image) */}
            <div className="w-full flex justify-center">
              <motion.img 
                src="/assets/img/about-me.png" // Updated image path
                alt="About Me"
                className="w-[450px] h-[450px] object-cover rounded-lg" // Bigger and no shadow
                initial={{ opacity: 0, x: 100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">My Skills</h2>
        <Skills />
      </section>
      {/* Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">My Projects</h2>
          <div className="space-y-12">
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className="flex flex-col md:flex-row items-center gap-8 bg-white border border-black rounded-lg p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Photo on the Left */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover rounded-lg border border-black"
                  />
                </div>

                {/* Content on the Right */}
                <div className="w-full md:w-2/3">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4">{project.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {tech.icon}
                        <span className="ml-2">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                      >
                        <FaGithub className="mr-2" /> GitHub
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-white border border-black text-black rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}