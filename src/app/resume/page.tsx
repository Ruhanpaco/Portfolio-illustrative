'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaFilePdf, FaMapMarkerAlt, FaCode, FaGraduationCap, FaCertificate, FaReact, FaFileAlt, FaWhatsapp, FaVolleyballBall, FaHashtag, FaGlobeAmericas } from 'react-icons/fa';
import Image from 'next/image';

// Data
const certifications: Certification[] = [
  {
    name: 'ISO 27001:2022 Certification',
    institution: 'Mastermind',
    year: '2025',
    file: '/assets/files/Mastermind_ISO27001-2022.pdf',
  },
  {
    name: 'SQL Certificate',
    institution: 'Codecademy',
    year: '2025',
    file: '/assets/files/codecademy_sql.pdf',
  },
  {
    name: 'TypeScript Certificate',
    institution: 'Codecademy',
    year: '2025',
    file: '/assets/files/codecademy_ts.pdf',
  },
];

const projects: Project[] = [
  {
    name: 'SaaS Landing Page',
    link: 'https://saas-landing-page.vercel.app/',
    description: 'A modern landing page for a SaaS product, designed with Tailwind CSS and React.',
  },
  {
    name: 'Luxury Hotel Website',
    link: 'https://luxury-hotel.vercel.app/',
    description: 'A responsive website for a luxury hotel, featuring elegant design and smooth animations.',
  },
  {
    name: 'Portfolio Website',
    link: 'https://ruhanpacolli.com',
    description: 'A personal portfolio website showcasing projects, skills, and certifications.',
  },
  {
    name: 'Dental clinic Website',
    link: 'https://dental-clinic-ivory.vercel.app/',
    description: 'A responsive website for a dental clinic, featuring a clean design and easy navigation.',
  },
  {
    name: ' Algorithm Visualizer Website',
    link: 'https://algorithm-visualizer-three-omega.vercel.app/',
    description: 'A modern, interactive web application that visualizes sorting algorithms. Built with Next.js and TailwindCSS, this project helps users understand how different algorithms work through visual representation and animation.',
  },
  {
  name: 'KV Prishtina Junior',
  link: 'https://kvprishtinajunior.vercel.app/',
  description: 'A volleyball website collaborated with Kv prishtina Junior, a clean and sleek design, with a natural color, and easy structure around the website, with real time data',
},
 {
    name: 'Banking App Design',
    link: 'https://github.com/Ruhanpaco/Bank-app-design',
    description: 'A sleek banking app UI built with React Native and TypeScript, offering an animated user experience with smooth transitions and interactive elements for effortless mobile banking.'
  }
];

const education: Education[] = [
  {
    degree: 'Middle School Certification',
    institution: 'Don Bosco Kosova',
    year: '2016 - 2024',
  },
  {
    degree: 'High School Diploma',
    institution: 'America School Of Kosovo (ASK)',
    year: '2024 - Present',
  },
];

// New volunteer/extracurricular data
const extracurricular: Extracurricular[] = [
  {
    role: 'Volleyball Player',
    organization: 'KV Prishtina Junior',
    period: '2024 - Present',
    description: 'Active member of the volleyball team, participating in regular training sessions and competitive matches.'
  },
  {
    role: 'Social Media Manager',
    organization: 'KV Prishtina Junior',
    period: '2024 - Present',
    description: 'Manage and create content for team social media accounts, increasing online engagement and team visibility.'
  }
];

const skills = ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'TypeScript', 'SQL', 'HTML', 'CSS', 'SASS', 'React Native', 'SwiftUI', 'PostgreSQL', 'PHP', 'Vue.js', 'PHPmyadmin'];
const languages = ['🇺🇸 English', '🇦🇱 Albanian'];

// Interfaces
interface Certification {
  name: string;
  institution: string;
  year: string;
  file: string;
}

interface Project {
  name: string;
  link: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

// New interface for extracurricular activities
interface Extracurricular {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-black pt-20 sm:pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8 border-2 border-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 relative">
              <Image
                src="/assets/img/profile.jpg"
                alt="Ruhan Pacolli"
                fill
                className="rounded-full object-cover border-2 border-black"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">Ruhan Pacolli</h1>
              <p className="text-lg sm:text-xl mb-3 sm:mb-4">Full-Stack Developer</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                <a href="mailto:hi@ruhanpacolli.online" className="flex items-center gap-1 sm:gap-2 hover:opacity-70 transition-opacity text-sm sm:text-base">
                  <FaEnvelope /> hi@ruhanpacolli.online
                </a>
                <a href="https://github.com/Ruhanpaco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2 hover:opacity-70 transition-opacity text-sm sm:text-base">
                  <FaGithub /> GitHub
                </a>
                <a href="https://wa.link/tpbnvt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 sm:gap-2 hover:opacity-70 transition-opacity text-sm sm:text-base">
                  <FaWhatsapp /> WhatsApp
                </a>
                <span className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                  <FaMapMarkerAlt /> Kosovo
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {/* Left Column */}
          <motion.div 
            className="md:col-span-1 space-y-5 sm:space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Skills Section */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-black">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <FaCode /> Skills
              </h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 border border-black rounded-full text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-black">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <FaGlobeAmericas /> Languages
              </h2>
              <div className="space-y-1.5 sm:space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm sm:text-base">
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-black">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <FaCertificate /> Certifications
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="group hover:bg-black/5 p-2 sm:p-3 rounded-lg transition-colors border border-gray-200">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-sm sm:text-base">{cert.name}</h3>
                      <FaReact className="text-black opacity-75 text-base sm:text-lg" />
                    </div>
                    <p className="text-xs sm:text-sm">{cert.institution}</p>
                    <p className="text-xs sm:text-sm opacity-75">{cert.year}</p>
                    <a 
                      href={cert.file}
                      className="text-black hover:opacity-70 text-xs sm:text-sm flex items-center gap-1 mt-1.5 sm:mt-2 transition-opacity border-t border-gray-200 pt-1.5 sm:pt-2"
                    >
                      <FaFilePdf /> View Certificate
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="md:col-span-2 space-y-5 sm:space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Experience Section */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-black">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <FaFileAlt /> Experience
              </h2>
              <div className="space-y-5 sm:space-y-6">
                <div className="border-l-2 border-black pl-3 sm:pl-4 relative">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-black absolute left-0 top-0 transform -translate-x-1.5"></div>
                  <h3 className="text-base sm:text-lg font-semibold">Salesman - Tecnomarket by Mabetex</h3>
                  <p className="text-xs sm:text-sm mb-1.5 sm:mb-2 font-medium">June 2024 - August 2024</p>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <li>Assisted customers with product selection and inquiries</li>
                    <li>Maintained an organized inventory and displayed products attractively</li>
                    <li>Collaborated with team members to achieve sales targets</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-black">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <FaGraduationCap /> Education
              </h2>
              <div className="space-y-5 sm:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-black pl-3 sm:pl-4 relative">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-black absolute left-0 top-0 transform -translate-x-1.5"></div>
                    <h3 className="text-base sm:text-lg font-semibold">{edu.institution}</h3>
                    <p className="font-medium text-sm">{edu.degree}</p>
                    <p className="text-xs sm:text-sm opacity-75 mt-0.5 sm:mt-1">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-black">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <FaCode /> Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                  <a 
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-black hover:bg-black/5 transition-colors relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-black/5 rotate-45 transform origin-top-right"></div>
                    <h3 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                      <span>{project.name}</span>
                    </h3>
                    <p className="text-xs sm:text-sm mt-1 sm:mt-2">{project.description}</p>
                    <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-gray-200 text-xs sm:text-sm font-medium flex items-center justify-end">
                      View Project →
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* New Extracurricular Activities Section */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-black">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <FaVolleyballBall /> Extracurricular Activities
              </h2>
              <div className="space-y-5 sm:space-y-6">
                {extracurricular.map((activity, index) => (
                  <div key={index} className="border-l-2 border-black pl-3 sm:pl-4 relative">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-black absolute left-0 top-0 transform -translate-x-1.5"></div>
                    <div className="flex items-start justify-between">
                      <h3 className="text-base sm:text-lg font-semibold">{activity.role}</h3>
                      {activity.role === 'Social Media Manager' ? 
                        <FaHashtag className="text-black opacity-75 text-base sm:text-lg" /> : 
                        <FaVolleyballBall className="text-black opacity-75 text-base sm:text-lg" />
                      }
                    </div>
                    <p className="font-medium text-sm">{activity.organization}</p>
                    <p className="text-xs sm:text-sm opacity-75 mt-0.5 sm:mt-1">{activity.period}</p>
                    <p className="text-xs sm:text-sm mt-1.5 sm:mt-2">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
