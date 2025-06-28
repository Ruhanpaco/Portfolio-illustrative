'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Mail,
  Github,
  FileText,
  MapPin,
  MessageCircle,
  ExternalLink,
  Download,
  Clock,
  ChevronRight
} from 'lucide-react';
import Script from 'next/script';

// Data
const certifications = [
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

const projects = [
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

const education = [
  {
    degree: 'High School Diploma',
    institution: 'America School Of Kosovo (ASK)',
    year: '2024 - Present',
  }
];

const extracurricular = [
  {
    role: 'Volunteer',
    organization: 'Google Developer Group Prishtina',
    period: '2024 - Present',
    description: 'Contributing to the tech community by organizing events including "Build with AI", helping with check-ins, and collecting feedback from attendees. Helping to foster a vibrant tech ecosystem in Kosovo through community engagement and technical mentorship.'
  },
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

const experiences = [
  {
    title: "Founder",
    company: "EliteDev Agency",
    logo: "/assets/img/elitedev.png",
    period: "January 2023 - Present",
    responsibilities: [
      "Leading web and mobile application development projects",
      "Managing client relationships and business development",
      "Overseeing technical architecture and development standards",
      "Building and managing a team of skilled developers"
    ]
  },
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

const skills = ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'TypeScript', 'SQL', 'HTML', 'CSS', 'SASS', 'React Native', 'SwiftUI', 'PostgreSQL', 'PHP', 'Vue.js', 'PHPmyadmin'];
const languages = ['🇺🇸 English', '🇦🇱 Albanian'];

export default function Resume() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Europe/Belgrade',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setLocalTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-black">
      {/* SEO description */}
      <div className="sr-only">
        <h2>Ruhan Pacolli - Full-Stack Developer Resume</h2>
        <p>Full-Stack Developer with expertise in React, Next.js, and modern web technologies.</p>
      </div>
      
      {/* Header Section */}
      <header className="pt-36 pb-16 px-6 bg-black text-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Ruhan Pacolli
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-8">
            Full-Stack Developer
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base mb-10">
            <a href="mailto:hi@ruhanpacolli.online" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Mail size={18} />
              hi@ruhanpacolli.online
            </a>
            <a href="https://github.com/Ruhanpaco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <Github size={18} />
              GitHub
            </a>
            <a href="https://wa.link/tpbnvt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <span className="flex items-center gap-2 text-gray-300">
              <MapPin size={18} />
              Kosovo
            </span>
            <span className="flex items-center gap-2 text-gray-300">
              <Clock size={18} />
              {localTime} (CET)
            </span>
          </div>
          
          <a 
            href="/assets/files/Ruhan_Pacolli_Resume.pdf" 
            download="Ruhan_Pacolli_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-100 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="md:col-span-4 lg:col-span-3">
            {/* Skills */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold flex items-center gap-2 border-b border-black pb-2 mb-4">
                <ChevronRight size={20} />
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 border border-black rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            
            {/* Languages */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold flex items-center gap-2 border-b border-black pb-2 mb-4">
                <ChevronRight size={20} />
                Languages
              </h2>
              <ul className="space-y-2">
                {languages.map((lang, index) => (
                  <li key={index} className="flex items-center text-base">
                    <ChevronRight size={16} className="mr-2" />
                    {lang}
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Certifications */}
            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2 border-b border-black pb-2 mb-4">
                <ChevronRight size={20} />
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-black p-4">
                    <h3 className="font-bold text-lg">{cert.name}</h3>
                    <p className="text-sm">{cert.institution}</p>
                    <p className="text-sm font-semibold mb-2">{cert.year}</p>
                    {cert.file && (
                      <a 
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium"
                      >
                        <FileText size={14} />
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          {/* Right Column */}
          <div className="md:col-span-8 lg:col-span-9">
            {/* Experience */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold flex items-center gap-2 border-b border-black pb-2 mb-6">
                <ChevronRight size={20} />
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6">
                    {/* Timeline design */}
                    <div className="absolute left-0 top-2 w-2 h-2 bg-black rounded-full"></div>
                    {index < experiences.length - 1 && (
                      <div className="absolute left-1 top-4 bottom-0 w-[1px] bg-black h-full"></div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <span className="text-sm font-medium bg-black text-white px-2 py-0.5 mt-1 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 mt-2 mb-3">
                      {exp.logo && (
                        <div className={`relative overflow-hidden ${exp.logo.includes('elitedev.png') ? 'w-8 h-8' : 'w-6 h-6'}`}>
                          <Image 
                            src={exp.logo} 
                            alt={exp.company} 
                            width={exp.logo.includes('elitedev.png') ? 32 : 24} 
                            height={exp.logo.includes('elitedev.png') ? 32 : 24}
                            className="object-contain"
                          />
                        </div>
                      )}
                      <p className="font-medium">{exp.company}</p>
                    </div>
                    
                    {exp.responsibilities && (
                      <ul className="list-disc list-inside space-y-1 pl-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-base">{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
            
            {/* Education */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold flex items-center gap-2 border-b border-black pb-2 mb-4">
                <ChevronRight size={20} />
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="py-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <p className="font-medium">{edu.degree}</p>
                    </div>
                    <span className="text-sm font-medium bg-black text-white px-2 py-0.5 mt-1 sm:mt-0">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </section>
            
            {/* Projects */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold flex items-center gap-2 border-b border-black pb-2 mb-4">
                <ChevronRight size={20} />
                Projects
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div 
                    key={index}
                    className="border border-black p-5"
                  >
                    <h3 className="text-lg font-bold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium"
                    >
                      <ExternalLink size={14} />
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Extracurricular Activities */}
            <section>
              <h2 className="text-xl font-semibold flex items-center gap-2 border-b border-black pb-2 mb-6">
                <ChevronRight size={20} />
                Extracurricular Activities
              </h2>
              <div className="space-y-8">
                {extracurricular.map((activity, index) => (
                  <div key={index} className="relative pl-6">
                    {/* Timeline design */}
                    <div className="absolute left-0 top-2 w-2 h-2 bg-black rounded-full"></div>
                    {index < extracurricular.length - 1 && (
                      <div className="absolute left-1 top-4 bottom-0 w-[1px] bg-black h-full"></div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{activity.role}</h3>
                      <span className="text-sm font-medium bg-black text-white px-2 py-0.5 mt-1 sm:mt-0">
                        {activity.period}
                      </span>
                    </div>
                    <p className="font-medium mt-2 mb-2">{activity.organization}</p>
                    <p className="text-base">{activity.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* SEO Schema */}
      <Script
        id="resume-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ruhan Pacolli",
            "jobTitle": "Full-Stack Developer",
            "description": "Experienced Full-Stack Developer with 6+ years of experience building modern web applications using React, Next.js, TypeScript, and Node.js.",
            "image": "https://ruhanpacolli.online/assets/img/profile.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Kosovo",
              "addressRegion": "Europe"
            },
            "email": "hi@ruhanpacolli.online",
            "url": "https://ruhanpacolli.online",
            "sameAs": [
              "https://github.com/Ruhanpaco",
              "https://wa.link/tpbnvt",
              "https://www.linkedin.com/in/ruhan-pacolli-a982a2364/"
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
              "skills": skills.join(", "),
              "responsibilities": [
                "Design and development of responsive web applications",
                "Front-end development with React and Next.js",
                "Back-end development with Node.js",
                "Database design and management",
                "API development and integration"
              ],
              "occupationLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "Kosovo"
                }
              }
            },
            "knowsLanguage": languages.map(lang => lang.split(" ")[1]),
            "alumniOf": education.map(edu => ({
              "@type": "EducationalOrganization",
              "name": edu.institution,
              "degree": edu.degree,
              "startDate": edu.year.split(" - ")[0]
            })),
            "workExperience": experiences.map(exp => ({
              "@type": "WorkExperience",
              "jobTitle": exp.title,
              "worksFor": {
                "@type": "Organization",
                "name": exp.company,
                "image": exp.logo
              },
              "startDate": exp.period.split(" - ")[0],
              "endDate": exp.period.split(" - ")[1] === "Present" ? null : exp.period.split(" - ")[1],
              "description": exp.responsibilities ? exp.responsibilities.join(". ") : ""
            })),
            "makesOffer": projects.map(project => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "CreativeWork",
                "name": project.name,
                "url": project.link,
                "description": project.description
              }
            }))
          })
        }}
      />
    </main>
  );
}