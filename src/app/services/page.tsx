'use client';

import { motion } from 'framer-motion';
import {
  FaLayerGroup, FaDesktop, FaServer, FaMobileAlt, FaLightbulb, FaCloudUploadAlt,
  FaSearch, FaPalette, FaCode, FaRocket, FaComments, FaHandshake, FaStar,
  FaBullseye, FaShieldAlt, FaSyncAlt // Added more icons
} from 'react-icons/fa';
import React from 'react';
import Link from 'next/link';

// Define the structure for a service item
interface ServiceItem {
  icon: React.ElementType; // Type for React component icons
  title: string;
  description: string;
}

// Service data (consistent with homepage)
const servicesData: ServiceItem[] = [
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
];

// Animation variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.1 }
  }
};

// Variant for items within a section (e.g., cards, list items)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

// Variant for text lines/words
const textLineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};

export default function ServicesPage() {
  const processSteps = [
    { icon: FaSearch, title: "Discovery & Planning", description: "Understanding your goals, requirements, and target audience to create a solid project plan." },
    { icon: FaPalette, title: "Design & Prototyping", description: "Creating wireframes, mockups, and prototypes for a user-friendly and visually appealing interface." },
    { icon: FaCode, title: "Development & Testing", description: "Building the application with clean code, modern technologies, and rigorous testing procedures." },
    { icon: FaRocket, title: "Deployment & Launch", description: "Deploying the application to a live environment and ensuring a smooth launch process." },
  ];

  const whyChoosePoints = [
    { icon: FaStar, title: "Quality Focus", description: "Commitment to high standards in code, design, and performance." },
    { icon: FaCode, title: "Modern Tech Stack", description: "Expertise in React, Next.js, TypeScript, and other current technologies." },
    { icon: FaComments, title: "Reliable Communication", description: "Keeping you informed and involved throughout the project lifecycle." },
    { icon: FaBullseye, title: "Problem-Solving Mindset", description: "Dedicated to finding effective solutions for your specific challenges." },
    { icon: FaSyncAlt, title: "Future-Proof Solutions", description: "Building scalable and maintainable applications ready for growth." },
    { icon: FaShieldAlt, title: "Security Conscious", description: "Implementing best practices for secure application development." },
  ];

  const approachPoints = [
      { icon: FaHandshake, title: "Collaboration", description: "Working closely with you at every stage." },
      { icon: FaCode, title: "Clean Code", description: "Prioritizing quality and maintainability." },
      { icon: FaComments, title: "Communication", description: "Keeping you informed and aligned." },
  ];

  return (
    <main className="min-h-screen bg-white text-black print:bg-white">
      <div className="scroll-snap-container pt-16 sm:pt-20">

        {/* --- Section 1: Page Header --- */}
        <motion.section 
          className="scroll-snap-section text-center max-w-5xl mx-auto bg-white text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={sectionVariants}
        >
          <div className="px-4">
            <motion.h1 variants={textLineVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">My Services</motion.h1>
            <motion.p variants={textLineVariants} className="text-lg sm:text-xl text-black/80 max-w-3xl mx-auto">
              Leveraging modern technologies to build robust, scalable, and engaging digital solutions tailored to your needs.
            </motion.p>
          </div>
        </motion.section>

        {/* --- Section 2: About My Services (White BG) --- */}
        <motion.section 
          className="scroll-snap-section text-left max-w-3xl mx-auto bg-white text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={sectionVariants}
        >
          <div className="relative px-4 w-full">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 text-black/5 text-6xl sm:text-8xl font-mono select-none -z-10" aria-hidden="true">
              &lt;/&gt;
            </div>
            <motion.h2 variants={textLineVariants} className="text-3xl sm:text-4xl font-bold text-black mb-5">About My Services</motion.h2>
            <motion.p variants={textLineVariants} className="text-base sm:text-lg text-black/80 leading-relaxed">
              My focus is on delivering high-quality, maintainable code and exceptional user experiences. I approach each project with a commitment to understanding your unique vision and translating it into a functional, elegant digital product. Whether you need a full application, a specific feature, or expert consultation, I bring dedication and technical proficiency to the table.
            </motion.p>
          </div>
        </motion.section>
        
        {/* --- Section 3: My Approach (Redesigned) --- */}
        <motion.section 
          className="scroll-snap-section text-left max-w-5xl mx-auto bg-white text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={sectionVariants}
        >
          <div className="px-4 w-full">
            <motion.h2 variants={textLineVariants} className="text-3xl sm:text-4xl font-bold text-black mb-5">My Approach</motion.h2>
            <motion.p variants={textLineVariants} className="text-base sm:text-lg text-black/80 leading-relaxed max-w-3xl mb-10">
              I believe in a collaborative process, working closely with you at every stage. Communication is key, ensuring we are aligned on goals and progress. I prioritize clean architecture, testable code, and future-proof solutions, utilizing best practices to ensure your project not only meets current needs but is also ready for future growth.
            </motion.p>
            
            {/* Key Pillars Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
              variants={sectionVariants}
            >
               {approachPoints.map((point, index) => (
                 <motion.div 
                   key={index} 
                   variants={itemVariants} 
                   className="p-6 border-2 border-black rounded-xl bg-white"
                 >
                   <div className="mb-4 inline-flex p-3 border-2 border-black rounded-full bg-white">
                      <point.icon className="text-2xl text-black" />
                   </div>
                   <h3 className="font-semibold text-lg mb-1.5 text-black">{point.title}</h3>
                   <p className="text-sm text-black/70 leading-snug">{point.description}</p>
                 </motion.div>
               ))}
            </motion.div>
          </div>
        </motion.section>

        {/* --- Section 4: Why Choose Me? (White BG) --- */}
        <motion.section 
          className="scroll-snap-section max-w-5xl mx-auto w-full bg-white text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={sectionVariants}
        >
          <div className="w-full px-4">
            <motion.h2 variants={textLineVariants} className="text-3xl sm:text-4xl font-bold text-center text-black mb-10 md:mb-12">Why Choose Me?</motion.h2>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={sectionVariants}> 
              {whyChoosePoints.map((point, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start gap-4 p-4 rounded-lg border border-black/10 hover:border-black/20 hover:shadow-sm transition-all">
                  <div className="mt-1">
                     <point.icon className="text-2xl text-black/70" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-black">{point.title}</h3>
                    <p className="text-sm text-black/70 leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* --- Section 5: My Process (White BG) --- */}
        <motion.section 
          className="scroll-snap-section max-w-5xl mx-auto w-full bg-white text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={sectionVariants}
        >
          <div className="w-full px-4">
            <motion.h2 variants={textLineVariants} className="text-3xl sm:text-4xl font-bold text-black text-center mb-10 md:mb-12">My Process</motion.h2>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={sectionVariants}>
              {processSteps.map((step, index) => (
                <motion.div variants={itemVariants} key={index} className="relative text-center p-5 border-2 border-black rounded-xl bg-white">
                  <span className="absolute -top-3 -left-3 bg-black text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold">{index + 1}</span>
                  <div className="mb-4 inline-flex p-3 border-2 border-black rounded-full bg-white mt-1">
                     <step.icon className="text-2xl text-black" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1.5 text-black">{step.title}</h3>
                  <p className="text-sm text-black/70 leading-snug">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* --- Section 6: Service Offerings Grid (White BG) --- */}
        <motion.section
          className="scroll-snap-section max-w-5xl mx-auto w-full bg-white text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={sectionVariants}
        >
          <div className="w-full px-4">
            <motion.h2 variants={textLineVariants} className="text-3xl sm:text-4xl font-bold text-center text-black mb-10 md:mb-12">What I Offer</motion.h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-h-[65vh] overflow-y-auto p-1" variants={sectionVariants}> 
              {servicesData.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl border-2 border-black flex items-start gap-5 hover:bg-black/5 transition-colors"
                >
                  <div className="mt-1">
                     <div className="p-3 bg-black border-2 border-black rounded-full inline-block">
                       <service.icon className="text-2xl text-white" />
                     </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">{service.title}</h3>
                    <p className="text-base text-black/80 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        
        {/* --- Section 7: Let's Build Something (CTA - White BG) --- */}
        <motion.section 
          className="scroll-snap-section text-center max-w-3xl mx-auto bg-white text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={sectionVariants}
        >
          <div className="px-4">
            <motion.h2 variants={textLineVariants} className="text-3xl sm:text-4xl font-bold text-black mb-5">Let&apos;s Build Something Great</motion.h2>
            <motion.p variants={textLineVariants} className="text-base sm:text-lg text-black/80 leading-relaxed mb-8">
              Ready to start your next project or have questions about my services? Don&apos;t hesitate to reach out. I&apos;m excited to learn about your ideas and discuss how I can help bring them to life.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                href="/contact"
                className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-black hover:bg-white hover:text-black transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </motion.section>

      </div>
    </main>
  );
} 