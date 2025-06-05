'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'; // Add Image import
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
  FaDownload, // Added Download Icon
  FaClock, // Added Clock Icon
} from 'react-icons/fa';
import Script from 'next/script';
import { useState, useEffect } from 'react'; // Import useState and useEffect

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
    file: '/assets/files/Coursera_meta_apis.pdf',
  },
  {
    name: 'Microsoft Azure SQL',
    institution: 'Microsoft (via Coursera)',
    year: '2025',
    file: '/assets/files/Coursera_microsoft_azure_SQL.pdf',
  },
  {
    name: 'Essentials with Azure Fundamentals',
    institution: 'Microsoft (via Coursera)',
    year: '2025',
    file: '/assets/files/Coursera_Microsoft_azure_foundaction.pdf',
  },
];

const projects: Project[] = [
  {
    name: 'Domain Intelligence Tool',
    link: 'https://whoislookup.ruhanpacolli.online/',
    description: 'A comprehensive domain reconnaissance tool providing detailed insights into domains, their DNS records, SSL certificates, and more. Designed for security researchers, penetration testers, and system administrators to gather extensive information about any domain.',
  },
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

// Define the Experience interface
interface Experience {
  title: string;
  company: string;
  logo: string;
  period: string;
  responsibilities?: string[];
}

// Add experiences data
const experiences: Experience[] = [
  {
    title: "Junior Software Developer Intern",
    company: "Pioneering People",
    logo: "/assets/img/peoneer.png",
    period: "July 2024 - Present",
    responsibilities: [
      "Feature research and planning",
      "Prototyping using current tech stack (Laravel 11, MongoDB and AWS)",
      "Data informed design ideas"
    ]
  },
  {
    title: "Salesman",
    company: "Tecnomarket by Mabetex",
    logo: "/assets/img/tecno.png",
    period: "June 2024 - August 2024",
    responsibilities: [
      "Assisted customers with product selection and inquiries",
      "Maintained an organized inventory and displayed products attractively",
      "Collaborated with team members to achieve sales targets"
    ]
  }
];

export default function Resume() {
  // Local Time State & Effect
  const [localTime, setLocalTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Europe/Belgrade', // GMT+1 (Kosovo timezone)
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit', // Optional: remove seconds for less clutter
        hour12: true, // Optional: use 12-hour format
      });
      setLocalTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 60); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black pt-24 sm:pt-28 pb-16 px-4 print:pt-4 print:bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Minor size adjustments */}
        <motion.div 
          className="bg-white rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 border-2 border-black resume-header-card"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-1 text-center md:text-left">
              {/* Adjusted heading sizes */}
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-1.5 sm:mb-2 print:text-3xl">Ruhan Pacolli</h1>
              <p className="text-xl sm:text-2xl text-black/80 mb-4 sm:mb-5 print:text-lg">Full-Stack Developer</p>
              {/* Increased contact info size slightly */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 justify-center md:justify-start text-base text-black print:text-xs">
                <a href="mailto:hi@ruhanpacolli.online" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
                  <FaEnvelope /> hi@ruhanpacolli.online
                </a>
                <a href="https://github.com/Ruhanpaco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
                  <FaGithub /> GitHub
                </a>
                <a href="https://wa.link/tpbnvt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
                  <FaWhatsapp /> WhatsApp
                </a>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt /> Kosovo
                </span>
                 <span className="flex items-center gap-1.5 text-black">
                    <FaClock /> {localTime} (CET)
                 </span>
                 <a 
                  href="/assets/files/Ruhan_Pacolli_Resume.pdf"
                  download="Ruhan_Pacolli_Resume.pdf"
                  className="print-hidden flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors text-black text-sm font-medium"
                  aria-label="Download Resume as PDF"
                >
                  <FaDownload /> Download PDF
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-x-10 lg:gap-x-16 resume-grid">
          {/* Left Column */} 
          <motion.div 
            className="md:col-span-1 space-y-10 lg:space-y-12 resume-column-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ResumeSection icon={FaCode} title="Skills">
              {/* Skill Tags - Black border */}
              <div className="flex flex-wrap gap-2 print:gap-0.5">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white border border-black rounded-full text-sm font-medium text-black print:px-1 print:text-[10px] print:border-black print:bg-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection icon={FaGlobeAmericas} title="Languages">
              {/* Increased list item size */} 
              <ul className="space-y-1.5 print:space-y-0.5">
                {languages.map((lang, index) => (
                  <li key={index} className="flex items-center gap-2 text-base text-black print:text-xs">
                    {lang} 
                  </li>
                ))}
              </ul>
            </ResumeSection>

            <ResumeSection icon={FaCertificate} title="Certifications">
              <div className="space-y-4 print:space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-black rounded-lg p-3 bg-white print:p-2 print:border-black">
                    {/* Increased font sizes */}
                    <h3 className="font-semibold text-base text-black print:text-xs print:font-medium">{cert.name}</h3>
                    <p className="text-sm text-black/80 print:text-[10px]">{cert.institution}</p>
                    <p className="text-sm text-black/60 mb-1.5 print:text-[10px] print:mb-0.5">{cert.year}</p>
                    {cert.file ? (
                      <a 
                        href={cert.file}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="print-hidden inline-flex items-center gap-1 text-sm text-black font-medium hover:underline"
                      >
                        <FaFilePdf /> View Certificate
                      </a>
                    ) : (
                      <p className="print-hidden text-sm text-black/50 italic">
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
            className="md:col-span-2 space-y-10 lg:space-y-12 resume-column-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* --- Experience Section --- */} 
            <ResumeSection icon={FaBriefcase} title="Experience">
              {experiences.map((experience, index) => (
                <TimelineItem 
                  key={index}
                  title={experience.title} 
                  subtitle={experience.company}
                  period={experience.period}
                  isLast={index === experiences.length - 1}
                  logo={experience.logo}
                >
                  {experience.responsibilities && (
                    <ul className="list-disc list-inside space-y-1.5 text-base text-black/90 mt-1.5 print:text-[10px] print:leading-snug">
                      {experience.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  )}
                </TimelineItem>
              ))}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:grid-cols-1 print:gap-2">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="group block p-4 rounded-lg border border-black bg-white hover:bg-black/5 transition-all print:p-2 print:border-black"
                  >
                    {/* Increased font sizes */}
                    <h3 className="font-semibold text-base text-black mb-1 group-hover:opacity-70 transition-opacity print:text-xs print:font-medium">{project.name}</h3>
                    <p className="text-sm text-black/80 leading-snug mb-2.5 print:text-[10px] print:leading-snug">{project.description}</p>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="print-hidden text-sm font-medium text-black hover:underline flex items-center gap-1"
                    >
                      <FaLink size={12}/> View Project
                    </a>
                  </div>
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
                  {/* Increased description size */}
                  <p className="text-base text-black/90 mt-1.5 print:text-[10px]">{activity.description}</p>
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
            "knowsLanguage": languages.map(lang => lang.split(" ")[1]),
            "workExperience": experiences.map(exp => ({
              "@type": "WorkExperience",
              "jobTitle": exp.title,
              "worksFor": {
                "@type": "Organization",
                "name": exp.company
              },
              "startDate": exp.period.split(" - ")[0]
            }))
          })
        }}
      />
    </main>
  );
}

// --- Helper Components --- 

// Section Component - Adjusted heading size
const ResumeSection = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-xl p-5 sm:p-6 border-2 border-black resume-section print:border print:border-black print:rounded-lg print:p-3 print:shadow-none print:mb-4">
    <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2.5 print:text-lg print:mb-2">
      <Icon className="text-black print:text-base" /> {title}
    </h2>
    {children}
  </div>
);

// Timeline Item Component - Adjusted font sizes and added logo
const TimelineItem = ({ title, subtitle, period, children, isLast = false, iconOverride: IconOverride, logo }: {
  title: string;
  subtitle: string;
  period: string;
  children?: React.ReactNode;
  isLast?: boolean;
  iconOverride?: React.ElementType;
  logo?: string;
}) => (
  <div className={`relative pl-6 ${isLast ? '' : 'pb-6 print:pb-3'} print:pl-4`}>
    {/* Vertical line - Black */}
    {!isLast && <div className="absolute left-[7px] top-[12px] h-full w-0.5 bg-black print:hidden"></div>}
    {/* Dot - Black with white border */}
    <div className="absolute left-0 top-[4px] w-4 h-4 bg-black rounded-full border-2 border-white ring-1 ring-black print:w-2 print:h-2 print:top-[6px] print:border print:border-black print:bg-white">
      {IconOverride && <IconOverride className="absolute inset-0 m-auto text-[8px] text-white print:hidden" />} 
    </div>
    {/* Text - Black */} 
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-0.5">
      {/* Increased title size */}
      <h3 className="text-lg font-semibold text-black print:text-sm print:font-medium">{title}</h3>
      {/* Increased period size */}
      <span className="text-sm text-black/70 mt-0.5 sm:mt-0 flex-shrink-0 sm:ml-2 print:text-[10px]">{period}</span>
    </div>
    
    {/* Company with logo */}
    <div className="flex items-center gap-2 mb-1.5">
      {logo && (
        <div className="relative w-6 h-6 overflow-hidden rounded-sm print:w-4 print:h-4">
          <Image 
            src={logo} 
            alt={subtitle} 
            width={24} 
            height={24} 
            className="object-contain"
          />
        </div>
      )}
      <p className="text-base font-medium text-black/90 print:text-xs print:mb-0.5">{subtitle}</p>
    </div>
    
    {children}
  </div>
);
