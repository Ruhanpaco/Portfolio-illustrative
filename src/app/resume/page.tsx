'use client';

import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGithub,
  FaFilePdf,
  FaMapMarkerAlt,
  FaCode,
  FaGraduationCap,
  FaCertificate,
  FaBriefcase, // Changed from FaFileAlt for Experience
  FaWhatsapp,
  FaVolleyballBall,
  FaHashtag,
  FaGlobeAmericas,
  FaLink, // Added for project links
} from 'react-icons/fa';
import Image from 'next/image';
import Script from 'next/script';

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
  {
    name: 'APIs Certification',
    institution: 'Meta (via Coursera)',
    year: '2025',
    file: '', // Placeholder until May 5th
  },
  {
    name: 'Microsoft Azure SQL',
    institution: 'Microsoft (via Coursera)',
    year: '2025',
    file: '', // Placeholder until May 5th
  },
];

const projects: Project[] = [
  {
    name: 'SaaS Landing Page',
    link: 'https://saas-landing-page-rose.vercel.app/',
    description: 'A modern landing page for a SaaS product, designed with Tailwind CSS and React.',
  },
  {
    name: 'Luxury Hotel Website',
    link: 'https://luxury-hotel-website-sable.vercel.app/',
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
  link: 'https://kvprishtinajr.com/',
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
    degree: 'High School Diploma',
    institution: 'America School Of Kosovo (ASK)',
    year: '2024 - Present',
  }
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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 pt-24 sm:pt-28 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */} 
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8 sm:mb-10 border border-gray-200"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 relative flex-shrink-0">
              <Image
                src="/assets/img/profile.jpg"
                alt="Ruhan Pacolli"
                fill
                className="rounded-full object-cover shadow-md border-4 border-white"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-1.5 sm:mb-2">Ruhan Pacolli</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-5">Full-Stack Developer</p>
              {/* Contact Info - Reduced margins, adjusted layout */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start text-sm sm:text-base text-gray-700">
                <a href="mailto:hi@ruhanpacolli.online" className="flex items-center gap-1.5 hover:text-black transition-colors">
                  <FaEnvelope /> hi@ruhanpacolli.online
                </a>
                <a href="https://github.com/Ruhanpaco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-black transition-colors">
                  <FaGithub /> GitHub
                </a>
                <a href="https://wa.link/tpbnvt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-black transition-colors">
                  <FaWhatsapp /> WhatsApp
                </a>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt /> Kosovo
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Left Column */} 
          <motion.div 
            className="md:col-span-1 space-y-6 sm:space-y-8 lg:space-y-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Section Card Component (Example) */} 
            <ResumeSection icon={FaCode} title="Skills">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs sm:text-sm font-medium text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection icon={FaGlobeAmericas} title="Languages">
              <ul className="space-y-2">
                {languages.map((lang, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                    {lang} 
                  </li>
                ))}
              </ul>
            </ResumeSection>

            <ResumeSection icon={FaCertificate} title="Certifications">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4 bg-white hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-sm sm:text-base text-black">{cert.name}</h3>
                      {/* Optional: Icon per cert type? */} 
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600">{cert.institution}</p>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">{cert.year}</p>
                    {cert.file ? (
                      <a 
                        href={cert.file}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-xs sm:text-sm text-black font-medium hover:underline"
                      >
                        <FaFilePdf /> View Certificate
                      </a>
                    ) : (
                      <p className="text-xs sm:text-sm text-gray-400 italic">
                        Certificate available after May 5th
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </ResumeSection>
          </motion.div>

          {/* Right Column */} 
          <motion.div 
            className="md:col-span-2 space-y-6 sm:space-y-8 lg:space-y-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* --- Experience Section --- */} 
            <ResumeSection icon={FaBriefcase} title="Experience">
              {/* Single Experience Item - Apply loop if needed */} 
              <TimelineItem 
                title="Salesman" 
                subtitle="Tecnomarket by Mabetex" 
                period="June 2024 - August 2024"
              >
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-gray-600 mt-1">
                  <li>Assisted customers with product selection and inquiries</li>
                  <li>Maintained an organized inventory and displayed products attractively</li>
                  <li>Collaborated with team members to achieve sales targets</li>
                </ul>
              </TimelineItem>
              {/* Add more TimelineItems here if you have more experience */}
            </ResumeSection>

            {/* --- Education Section --- */} 
            <ResumeSection icon={FaGraduationCap} title="Education">
              {education.map((edu, index) => (
                <TimelineItem 
                  key={index}
                  title={edu.institution} 
                  subtitle={edu.degree} 
                  period={edu.year}
                  isLast={index === education.length - 1}
                />
              ))}
            </ResumeSection>

            {/* --- Projects Section --- */} 
            <ResumeSection icon={FaCode} title="Projects">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <a 
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-3 sm:p-4 rounded-lg border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="font-semibold text-sm sm:text-base text-black mb-1 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-snug mb-2">{project.description}</p>
                    <span className="text-xs sm:text-sm font-medium text-blue-600 group-hover:underline flex items-center gap-1">
                      <FaLink size={12}/> View Project
                    </span>
                  </a>
                ))} 
              </div>
            </ResumeSection>

            {/* --- Extracurricular Activities Section --- */} 
            <ResumeSection icon={FaVolleyballBall} title="Extracurricular Activities">
              {extracurricular.map((activity, index) => (
                <TimelineItem 
                  key={index}
                  title={activity.role} 
                  subtitle={activity.organization} 
                  period={activity.period}
                  isLast={index === extracurricular.length - 1}
                  iconOverride={activity.role === 'Social Media Manager' ? FaHashtag : FaVolleyballBall}
                >
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{activity.description}</p>
                </TimelineItem>
              ))}
            </ResumeSection>

          </motion.div>
        </div>
      </div>

      {/* --- Resume Schema for SEO --- */} 
      <Script
        id="resume-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ruhan Pacolli",
            "jobTitle": "Full-Stack Developer",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Kosovo"
            },
            "email": "hi@ruhanpacolli.online",
            "url": "https://ruhanpacolli.online",
            "sameAs": [
              "https://github.com/Ruhanpaco",
              "https://wa.link/tpbnvt"
            ],
            "hasCredential": certifications.map(cert => ({
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "certification",
              "name": cert.name,
              "recognizedBy": {
                "@type": "Organization",
                "name": cert.institution
              },
              "validFrom": cert.year
            })),
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Full-Stack Developer",
              "skills": skills.join(", ")
            },
            "alumniOf": education.map(edu => ({
              "@type": "EducationalOrganization",
              "name": edu.institution
            })),
            "knowsLanguage": languages.map(lang => lang.split(" ")[1])
          })
        }}
      />
    </main>
  );
}

// --- Helper Components --- 

// Section Card Wrapper
const ResumeSection = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 border border-gray-200">
    <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-5 flex items-center gap-2.5">
      <Icon className="text-gray-700" /> {title}
    </h2>
    {children}
  </div>
);

// Timeline Item Component
const TimelineItem = ({ title, subtitle, period, children, isLast = false, iconOverride: IconOverride }: {
  title: string;
  subtitle: string;
  period: string;
  children?: React.ReactNode;
  isLast?: boolean;
  iconOverride?: React.ElementType;
}) => (
  <div className={`relative pl-6 ${isLast ? '' : 'pb-6'}`}>
    {/* Vertical line */}
    {!isLast && <div className="absolute left-[7px] top-[12px] h-full w-0.5 bg-gray-200"></div>}
    {/* Dot */}
    <div className="absolute left-0 top-[4px] w-4 h-4 bg-gray-200 rounded-full border-4 border-white">
      {IconOverride && <IconOverride className="absolute inset-0 m-auto text-[8px] text-gray-600" />} 
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-0.5">
      <h3 className="text-base sm:text-lg font-semibold text-black">{title}</h3>
      <span className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-0 flex-shrink-0 sm:ml-2">{period}</span>
    </div>
    <p className="text-sm sm:text-base font-medium text-gray-600 mb-1">{subtitle}</p>
    {children}
  </div>
);
