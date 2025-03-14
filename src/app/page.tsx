"use client"; // Ensure this is a Client Component

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import SocialMedia from "./components/SocialMedia";
import Skills from "./components/Skills";
import ByTheNumbers from "./components/ByTheNumbers";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FiMapPin } from "react-icons/fi";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

export default function HomeClient() {
  // Local Time State
  const [localTime, setLocalTime] = useState("");

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
      LiveDemo: "https://kvprishtinajunior.vercel.app/",
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
  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/Belgrade",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setLocalTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-white min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 py-20 md:py-0">
        <div className="flex flex-col items-start w-full md:w-1/2 max-w-xl space-y-4 md:space-y-6 mt-16 md:mt-0">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            I&apos;m
          </motion.h1>
          <motion.h2 className="text-5xl sm:text-6xl md:text-7xl font-bold" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            Ruhan Pacolli
          </motion.h2>
          <motion.p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}>
            A passionate web developer creating beautiful, functional websites and experiences. Welcome to my portfolio!
          </motion.p>
          <div className="mt-8">
            <SocialMedia />
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <motion.div className="w-[90%] max-w-[800px]" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}>
            <Image src="/assets/img/image-profile.svg" alt="Profile Image" width={800} height={800} className="w-full h-auto" priority />
          </motion.div>
        </div>
      </section>

      {/* By The Numbers Section */}
      <ByTheNumbers />

      {/* About Me Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div className="flex justify-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <span className="bg-gray-100 px-6 py-3 rounded-full text-sm font-semibold flex items-center"> 🕒 Local Time: {localTime} </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">My Projects</h2>
          <div className="space-y-16">
            {projects.map((project) => (
              <motion.div key={project.id} className="flex flex-col md:flex-row items-start gap-8 md:gap-12 bg-white border border-black rounded-xl p-6 md:p-8 hover:shadow-xl transition-shadow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                {/* Project Image */}
                <div className="w-full md:w-2/5">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={project.image} alt={project.title} fill className="rounded-xl border-2 border-black object-cover" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="w-full md:w-3/5 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-semibold">{project.title}</h3>
                  <p className="text-lg md:text-xl text-gray-600">{project.description}</p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center bg-gray-100 px-4 py-2 rounded-full text-base">
                        {tech.icon}
                        <span className="ml-2">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap gap-6 pt-6">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-lg">
                        <FaGithub className="mr-2" /> GitHub
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center px-8 py-3 bg-white border-2 border-black text-black rounded-xl hover:bg-gray-100 transition-colors text-lg">
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
    </main>
  );
}
