'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import SocialMedia from './components/SocialMedia';
import Skills from './components/Skills';
import ByTheNumbers from './components/ByTheNumbers'; // Import the updated component
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaDesktop, FaServer, FaMobileAlt, FaLightbulb, FaCloudUploadAlt, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiAxios, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiCalendly } from 'react-icons/si';
import { FiMapPin } from 'react-icons/fi';
import { BiLogoPostgresql } from "react-icons/bi";
import Script from 'next/script';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Domain Intelligence Tool",
      description: "A comprehensive domain reconnaissance tool providing detailed insights into domains, their DNS records, SSL certificates, and more. Designed for security researchers, penetration testers, and system administrators to gather extensive information about any domain.",
      image: "/assets/img/whois.png",
      github: null,
      liveDemo: "https://whoislookup.ruhanpacolli.online/",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black text-xl" /> },
        { name: "React", icon: <SiReact className="text-blue-500 text-xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-xl" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-xl" /> },
        { name: "Axios", icon: <SiAxios className="text-black text-xl" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500 text-xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-xl" /> },
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
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative bg-white min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 py-20 md:py-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        {/* Left Side (Text) */}
        <div className="flex flex-col items-start w-full md:w-1/2 max-w-xl space-y-6 md:space-y-8 mt-16 md:mt-0 z-10">
          <div className="flex flex-col space-y-2">
            <motion.div 
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-black/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FiMapPin className="text-black" />
              <span className="text-sm text-black font-medium">Based in Kosovo • {localTime}</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold" 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-black/80 to-black">
                Ruhan Pacolli
              </span>
            </motion.h1>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-light text-black leading-relaxed max-w-lg">
              A passionate <span className="font-semibold bg-gradient-to-r from-black to-black/80 bg-clip-text text-transparent">Full Stack Developer</span> crafting beautiful, functional digital experiences that make a difference.
            </p>
          </motion.div>
          
          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col items-center md:items-start p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-black/10 shadow-sm">
              <span className="text-3xl font-bold bg-gradient-to-r from-black to-black/80 bg-clip-text text-transparent">6+</span>
              <span className="text-sm text-black">Years Experience</span>
            </div>
            <div className="flex flex-col items-center md:items-start p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-black/10 shadow-sm">
              <span className="text-3xl font-bold bg-gradient-to-r from-black to-black/80 bg-clip-text text-transparent">10+</span>
              <span className="text-sm text-black">Projects</span>
            </div>
            <div className="flex flex-col items-center md:items-start p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-black/10 shadow-sm">
              <span className="text-3xl font-bold bg-gradient-to-r from-black to-black/80 bg-clip-text text-transparent">100%</span>
              <span className="text-sm text-black">Client Satisfaction</span>
            </div>
          </motion.div>
          {/* button to resume and to contact as QAB */}
          <div className="flex gap-4">
            <Link href="/resume" className="inline-flex items-center px-4 py-2 border-2 border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors duration-200">
              <FaFileAlt className="mr-2" />
              Look at my Resume
            </Link>
            <Link href="/contact" className="inline-flex items-center px-4 py-2 border-2 border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors duration-200">
              <FaEnvelope className="mr-2" />
              Get in Touch
            </Link>
          </div>
          {/* Social Media Component */}
          <motion.div 
            className="mt-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <SocialMedia />
          </motion.div>
        </div>

        {/* Right Side (Image) */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-[95%] sm:w-[90%] max-w-[800px]">
            <div className="relative">
              <Image 
                src="/assets/img/image-profile.svg" 
                alt="Ruhan Pacolli - Full Stack Developer"
                width={800}
                height={800}
                className="w-full h-auto rounded-3xl border border-gray-100"
                priority
              />
            </div>
          </div>
        </motion.div>
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
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 bg-white" id="projects">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-center mb-20">
            <h2 className="text-4xl font-bold text-black font-fira-code mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-black"></div>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[16/9] overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        quality={90}
                      />
                    </div>
                  </div>
                  
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-black font-fira-code">{project.title}</h3>
                      <p className="text-black text-lg">
                        {project.description.length > 180 
                          ? `${project.description.substring(0, 180)}...` 
                          : project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="flex items-center bg-white px-3 py-1.5 rounded-md text-xs border border-black"
                          >
                            {tech.icon}
                            <span className="ml-1.5 text-black">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    
                      <div className="flex gap-6 pt-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-black hover:text-black/70 transition-colors group-hover:underline"
                          >
                            <FaGithub className="mr-2 text-xl" />
                            View Code
                          </a>
                        )}
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-black hover:text-black/70 transition-colors group-hover:underline"
                          >
                            <FaExternalLinkAlt className="mr-2 text-xl" />
                            Live Demo
                          </a>
                        )}
                        {project.Live && (
                          <a
                            href={project.Live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-black hover:text-black/70 transition-colors group-hover:underline"
                          >
                            <FaExternalLinkAlt className="mr-2 text-xl" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section with Enhanced Design */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 md:mb-16">
            <motion.span 
              className="text-sm md:text-base text-gray-600 font-medium tracking-wider uppercase mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              What I Do
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Services I Offer
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[ // Enhanced service descriptions
              {
                icon: FaLayerGroup,
                title: "Full-Stack Development",
                description: "End-to-end web application development with modern tech stack. From user interface to server architecture and database design."
              },
              {
                icon: FaDesktop,
                title: "Frontend Excellence",
                description: "Creating responsive, performant UIs with React & Next.js. Focus on accessibility, SEO, and exceptional user experience."
              },
              {
                icon: FaServer,
                title: "Backend Architecture",
                description: "Robust server-side solutions with Node.js, TypeScript, and modern databases. RESTful APIs and real-time applications."
              },
              {
                icon: FaMobileAlt,
                title: "Mobile Development",
                description: "Cross-platform mobile applications with React Native. Native-like performance with modern mobile development practices."
              },
              {
                icon: FaLightbulb,
                title: "Solution Architecture",
                description: "Custom web solutions tailored to business needs. Focus on scalability, maintainability, and business value."
              },
              {
                icon: FaCloudUploadAlt,
                title: "DevOps & Deployment",
                description: "Modern deployment workflows with CI/CD. Cloud infrastructure management and performance optimization."
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="p-4 bg-gray-50 rounded-xl mb-6 inline-block group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <service.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Schedule a Meeting Button */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-block">
              <a 
                href="https://calendly.com/ruhanpaco/schedule-a-meeting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-10 py-4 bg-[#0060FF] text-white rounded-xl hover:bg-[#0052DB] transition-all duration-300 text-base font-medium shadow-md hover:shadow-lg"
              >
                <SiCalendly className="text-xl" />
                <span>Schedule a Meeting</span>
              </a>
              <p className="text-sm text-gray-500 mt-3">Powered by Calendly</p>
            </div>
          </motion.div>
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