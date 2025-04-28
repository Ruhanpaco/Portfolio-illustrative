'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import SocialMedia from './components/SocialMedia';
import Skills from './components/Skills';
import ByTheNumbers from './components/ByTheNumbers'; // Import the updated component
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaDesktop, FaServer, FaMobileAlt, FaLightbulb, FaCloudUploadAlt } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FiMapPin } from 'react-icons/fi';
import { BiLogoPostgresql } from "react-icons/bi";
import Script from 'next/script';
import React from 'react';

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
              <motion.div 
                className="w-[95%] sm:w-[90%] max-w-[900px] mx-auto rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: 100 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Image 
                  src="/assets/img/about-me.png"
                  alt="Ruhan Pacolli working on code"
                  width={900} 
                  height={700} 
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Left Side (Text) */}
            <div className="w-full md:w-1/2 space-y-5 sm:space-y-7">
              <motion.h3 
                className="text-2xl sm:text-3xl font-semibold text-black" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Driven Full-Stack Developer from Kosovo
              </motion.h3>
              <motion.p 
                className="text-base sm:text-lg text-gray-700" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Hello! I&apos;m Ruhan Pacolli, a dedicated web developer passionate about crafting exceptional digital experiences. With a strong foundation in <span className="font-medium text-black">React, Next.js, and TypeScript</span>, I specialize in building high-performance, scalable, and visually appealing web applications.
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg text-gray-700" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                My approach combines technical expertise with a keen eye for detail, ensuring every project is not only functional but also intuitive and engaging for the end-user. I thrive on challenges and continuously explore new technologies to deliver cutting-edge solutions.
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg text-gray-700" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Outside of coding, my involvement in team sports like volleyball has instilled strong values of <span className="font-medium text-black">collaboration, discipline, and communication</span> – qualities I bring to every project. I&apos;m also committed to community involvement through volunteering.
              </motion.p>

              {/* Badges & CTA */}
              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-3" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
                  <FiMapPin className="mr-2" /> Kosovo, Europe
                </span>
                <a href="/resume" className="inline-flex items-center px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                  View My Resume →
                </a>
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

      {/* Services Offered Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16">Services I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[ // Array of service objects
              {
                icon: FaLayerGroup,
                title: "Full-Stack Web Development",
                description: "Building complete web applications from front-end interface to back-end logic and database management."
              },
              {
                icon: FaDesktop,
                title: "Front-End Development",
                description: "Crafting responsive, performant, and visually appealing user interfaces with modern frameworks like React & Next.js."
              },
              {
                icon: FaServer,
                title: "Back-End & API Development",
                description: "Developing secure, scalable server-side logic and APIs using Node.js, TypeScript, SQL, and NoSQL databases."
              },
              {
                icon: FaMobileAlt,
                title: "Mobile App Development",
                description: "Creating cross-platform mobile apps with React Native & Expo or native iOS apps using SwiftUI."
              },
              {
                icon: FaLightbulb,
                title: "Custom Web Applications",
                description: "Designing and building tailored web solutions to meet unique project requirements and business needs."
              },
              {
                icon: FaCloudUploadAlt,
                title: "Cloud Deployment & DevOps",
                description: "Managing deployments on platforms like Vercel, utilizing Git/GitHub, and leveraging Cloudflare for performance."
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="p-3 bg-gray-100 rounded-full mb-4">
                  <service.icon className="text-2xl text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16">My Projects</h2>
          <div className="space-y-16 md:space-y-20">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                // Use alternating layout based on index
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-lg hover:border-gray-300 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Project Image */} 
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-md">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Project Content */} 
                <div className="w-full md:w-1/2 space-y-4 sm:space-y-5">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-black">{project.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{project.description}</p>

                  {/* Technology Badges */} 
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-sm font-medium text-gray-500 mr-2">Built with:</span>
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700"
                        title={tech.name} // Tooltip for accessibility
                      >
                        {React.cloneElement(tech.icon, { className: "text-base mr-1.5" })}
                        {tech.name}
                      </div>
                    ))}
                  </div>

                  {/* Project Links */} 
                  <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium group"
                      >
                        <FaGithub className="mr-2 text-base transition-transform group-hover:scale-110" /> GitHub
                      </a>
                    )}
                    {(project.liveDemo || project.Live) && (
                      <a
                        href={project.liveDemo || project.Live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-colors text-sm font-medium group"
                      >
                        <FaExternalLinkAlt className="mr-2 text-xs transition-transform group-hover:scale-110" /> Live Demo
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
