'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Profile() {
  return (
    <motion.div 
      className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <motion.div 
          className="relative w-48 h-48"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/assets/img/profile.jpg" // Make sure to add your profile image
            alt="Ruhan Pacolli"
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </motion.div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ruhan Pacolli
          </motion.h1>
          <motion.h2 
            className="text-xl text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full-Stack Developer
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I&apos;m Ruhan Pacolli, a software developer from Kosovo with a passion for building web applications that solve real-world problems. My focus is on creating modern and scalable applications using technologies like JavaScript, React, and more.
          </motion.p>

          {/* Contact Links */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="mailto:hi@ruhanpacolli.online"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              hi@ruhanpacolli.online
            </a>
            <a
              href="https://github.com/YourGithubUsername" // Replace with your GitHub username
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <motion.div 
        className="mt-8 pt-8 border-t border-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 
            'TypeScript', 'SQL', 'HTML', 'CSS', 'SASS', 'React Native',
            'SwiftUI', 'PostgreSQL', 'PHP', 'Vue.js', 'PHPmyadmin'
          ].map((skill) => (
            <span 
              key={skill}
              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Languages Section */}
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold mb-4">Languages</h3>
        <div className="flex gap-3">
          <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
            🇺🇸 English
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
            🇦🇱 Albanian
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
} 