'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaFilePdf, FaMapMarkerAlt, FaCode, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

// Data
const certifications: Certification[] = [
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

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-black pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="rounded-2xl p-8 mb-8 border-2 border-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              <Image
                src="/assets/img/profile.jpg"
                alt="Ruhan Pacolli"
                fill
                className="rounded-full object-cover border-2 border-black"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Ruhan Pacolli</h1>
              <p className="text-xl mb-4">Full-Stack Developer</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="mailto:hi@ruhanpacolli.online" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                  <FaEnvelope /> hi@ruhanpacolli.online
                </a>
                <a href="https://github.com/Ruhanpaco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                  <FaGithub /> GitHub
                </a>
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Kosovo
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div 
            className="md:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Skills Section */}
            <div className="rounded-2xl p-6 border-2 border-black">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaCode /> Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 border border-black rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="rounded-2xl p-6 border-2 border-black">
              <h2 className="text-xl font-bold mb-4">Languages</h2>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="rounded-2xl p-6 border-2 border-black">
              <h2 className="text-xl font-bold mb-4">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="group hover:bg-black/5 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-sm">{cert.institution}</p>
                    <p className="text-sm opacity-75">{cert.year}</p>
                    <a 
                      href={cert.file}
                      className="text-black hover:opacity-70 text-sm flex items-center gap-1 mt-2 transition-opacity"
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
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Experience Section */}
            <div className="rounded-2xl p-6 border-2 border-black">
              <h2 className="text-xl font-bold mb-6">Experience</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-black pl-4">
                  <h3 className="text-lg font-semibold">Salesman - Tecnomarket by Mabetex</h3>
                  <p className="text-sm mb-2">June 2024 - August 2024</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Assisted customers with product selection and inquiries</li>
                    <li>Maintained an organized inventory and displayed products attractively</li>
                    <li>Collaborated with team members to achieve sales targets</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="rounded-2xl p-6 border-2 border-black">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FaGraduationCap /> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-black pl-4">
                    <h3 className="text-lg font-semibold">{edu.institution}</h3>
                    <p>{edu.degree}</p>
                    <p className="text-sm opacity-75">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="rounded-2xl p-6 border-2 border-black">
              <h2 className="text-xl font-bold mb-6">Projects</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <a 
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 rounded-xl border-2 border-black hover:bg-black/5 transition-colors"
                  >
                    <h3 className="font-semibold">
                      {project.name}
                    </h3>
                    <p className="text-sm mt-2">{project.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
