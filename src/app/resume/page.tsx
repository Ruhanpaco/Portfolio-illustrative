'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaFilePdf, FaGraduationCap } from 'react-icons/fa';

// Data
const certifications = [
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

const projects = [
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
];

const education = [
  {
    degree: 'Middle School Certification',
    institution: 'Don Bosco Kosova',
    year: '2016 - 2024',
  },
  {
    degree: 'High School Diploma',
    institution: 'America School Of Kosovo (ASK)',
    year: '2016 - Present',
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

// Reusable Components
const CertificationCard = ({ cert }: { cert: Certification }) => (
  <motion.li
    className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
    whileHover={{ scale: 1.02 }}
  >
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
      <p className="text-sm text-gray-500">{cert.institution} - {cert.year}</p>
    </div>
    <a
      href={cert.file}
      className="text-black hover:text-gray-700 flex items-center transition-colors"
      aria-label={`View ${cert.name}`}
    >
      <FaFilePdf className="mr-1" /> View
    </a>
  </motion.li>
);

const ProjectLink = ({ project }: { project: Project }) => (
  <motion.li
    className="hover:underline text-black hover:text-gray-700 transition-colors"
    whileHover={{ scale: 1.02 }}
  >
    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name}`}>
      {project.name}
    </a>
    <p className="text-sm text-gray-500 mt-1">{project.description}</p>
  </motion.li>
);

const EducationCard = ({ edu }: { edu: Education }) => (
  <motion.li
    className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
    whileHover={{ scale: 1.02 }}
  >
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{edu.institution}</h3>
      <p className="text-sm text-gray-500">{edu.degree}</p>
      <p className="text-sm text-gray-500">{edu.year}</p>
    </div>
    <FaGraduationCap className="text-gray-600" />
  </motion.li>
);

const Badge = ({ text }: { text: string }) => (
  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
    {text}
  </span>
);

export default function Resume() {
  return (
    <main className="min-h-screen bg-white text-black py-20">
      <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 flex flex-col md:flex-row gap-12">

        {/* Left Panel - Profile & Contact Info */}
        <motion.aside
          className="bg-white p-8 rounded-2xl shadow-xl w-full md:w-1/3 flex flex-col items-center border border-gray-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mt-6 text-gray-900">Ruhan Pacolli</h1>
          <p className="text-gray-500 text-lg">Full-Stack Developer</p>

          {/* Contact Details */}
          <div className="mt-6 space-y-3 text-center">
            <div className="flex items-center justify-center space-x-2">
              <FaEnvelope className="text-gray-600" />
              <span className="text-gray-600">hi@ruhanpacolli.online</span>
            </div>
            <a
              href="https://github.com/Ruhanpaco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 hover:text-black transition"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-gray-600" />
              <span className="text-gray-600">GitHub</span>
            </a>
          </div>

          {/* Download Resume Button */}
          <motion.p
            className="mt-6 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Not Available"
          >
            No Resume Available
          </motion.p>

          {/* Professional Summary */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Hi, I&apos;m Ruhan Pacolli, a software developer from Kosovo with a passion for building web applications that solve real-world problems. My focus is on creating modern and scalable applications using technologies like JavaScript, React, and more.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-8 w-full">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} text={skill} />
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mt-8 w-full">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Languages</h2>
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <Badge key={index} text={language} />
              ))}
            </div>
          </div>
        </motion.aside>

        {/* Right Panel - Main Resume Content */}
        <section className="flex-1 space-y-12">

          {/* Experience Section */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Salesman - Tecnomarket by Mabetex</h3>
                <p className="text-gray-500">June 2024 - August 2024</p>
                <li className="mt-2 text-gray-700 leading-relaxed">
                Assisted customers with product selection and inquiries.
                </li>
                <li className="mt-2 text-gray-700 leading-relaxed">
                Maintained an organized inventory and displayed products attractively.
                </li>
                <li className="mt-2 text-gray-700 leading-relaxed">
                Collaborated with team members to achieve sales targets.
                </li>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Education</h2>
            <ul className="space-y-4">
              {education.map((edu, index) => (
                <EducationCard key={index} edu={edu} />
              ))}
            </ul>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Celine Macarthur',
                  position: 'Education Consultant - ASK',
                  feedback: "Ruhan is a dedicated, innovative young man with a passion for coding and web development, working on school web projects and creating apps that help the school and people around him.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                  <h4 className="text-gray-900 font-bold mt-4">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Certifications</h2>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </ul>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Projects</h2>
            <ul className="space-y-4">
              {projects.map((project, index) => (
                <ProjectLink key={index} project={project} />
              ))}
            </ul>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
