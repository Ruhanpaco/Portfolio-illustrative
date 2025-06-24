"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaSwift,
  FaPhp,
  FaGit,
  FaNpm,
  FaCpanel,
  FaTrello,
  FaDiscord,
  FaVuejs,
  FaSlack,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiExpo,
  SiReactrouter,
  SiGraphql,
  SiVite,
  SiTypescript,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiGithub,
  SiVercel,
  SiCloudflare,
  SiXcode,
  SiJira,
  SiGooglecloud,
  SiOpenai,
  SiPostman,
  SiStripe,
  SiShopify,
  SiFilezilla,
  SiFigma,
  SiCanva,
  SiNotion,
  SiTwilio,
  SiAuth0,
  SiLua,
  SiSqlite,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { IoTerminal } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

type Section = "front-end" | "back-end" | "devops" | "services-tools";

export default function TechStack() {
  const [activeSection, setActiveSection] = useState<Section>("front-end");

  const navItems = [
    { id: "front-end", title: "Front-End" },
    { id: "back-end", title: "Back-End" },
    { id: "devops", title: "DevOps" },
    { id: "services-tools", title: "Services & Tools" },
  ];

  const technologies = {
    "front-end": [
      { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
      { name: "Vue.js", icon: <FaVuejs className="text-green-500 text-4xl" /> },
      { name: "React Native", icon: <FaReact className="text-blue-400 text-4xl" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-4xl" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-4xl" /> },
      { name: "SCSS", icon: <SiSass className="text-pink-600 text-4xl" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
      { name: "SwiftUI", icon: <FaSwift className="text-orange-500 text-4xl" /> },
      { name: "Expo", icon: <SiExpo className="text-gray-900 text-4xl" /> },
      { name: "React Router", icon: <SiReactrouter className="text-red-500 text-4xl" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-600 text-4xl" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500 text-4xl" /> },
    ],
    "back-end": [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-600 text-4xl" /> },
      { name: "MySQL", icon: <DiMysql className="text-blue-600 text-4xl" /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-600 text-4xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
      { name: "SQLite", icon: <SiSqlite className="text-blue-300 text-4xl" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-600 text-4xl" /> },
      { name: "Prisma", icon: <SiPrisma className="text-teal-500 text-4xl" /> },
      { name: "Discord API", icon: <FaDiscord className="text-blue-600 text-4xl" /> },
      { name: "Lua", icon: <SiLua className="text-blue-800 text-4xl" /> },
    ],
    "devops": [
      { name: "Git", icon: <FaGit className="text-orange-600 text-4xl" /> },
      { name: "GitHub", icon: <SiGithub className="text-black text-4xl" /> },
      { name: "Vercel", icon: <SiVercel className="text-black text-4xl" /> },
      { name: "Cloudflare", icon: <SiCloudflare className="text-orange-600 text-4xl" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-700 text-4xl" /> },
      { name: "Xcode", icon: <SiXcode className="text-blue-500 text-4xl" /> },
      { name: "Terminal", icon: <IoTerminal className="text-black text-4xl" /> },
      { name: "NPM", icon: <FaNpm className="text-red-500 text-4xl" /> },
      { name: "Cpanel", icon: <FaCpanel className="text-orange-600 text-4xl" /> },
      { name: "Trello", icon: <FaTrello className="text-blue-600 text-4xl" /> },
      { name: "Jira", icon: <SiJira className="text-blue-700 text-4xl" /> },
    ],
    "services-tools": [
      { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500 text-4xl" /> },
      { name: "OpenAI APIs", icon: <SiOpenai className="text-teal-500 text-4xl" /> },
      { name: "Google Tools", icon: <FcGoogle className="text-red-500 text-4xl" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
      { name: "Stripe APIs", icon: <SiStripe className="text-blue-400 text-4xl" /> },
      { name: "Stripe Connect", icon: <SiStripe className="text-indigo-500 text-4xl" /> },
      { name: "Shopify", icon: <SiShopify className="text-green-500 text-4xl" /> },
      { name: "FileZilla", icon: <SiFilezilla className="text-red-700 text-4xl" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-600 text-4xl" /> },
      { name: "Canva", icon: <SiCanva className="text-blue-500 text-4xl" /> },
      { name: "Notion", icon: <SiNotion className="text-black text-4xl" /> },
      { name: "Twilio", icon: <SiTwilio className="text-red-400 text-4xl" /> },
      { name: "Auth0", icon: <SiAuth0 className="text-orange-400 text-4xl" /> },
      { name: "Slack", icon: <FaSlack className="text-green-500 text-4xl" /> },
    ],
  };

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id as Section)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all ${
                activeSection === item.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {item.title}
            </motion.button>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies[activeSection].map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-100 relative overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background overlay with fade animation */}
              <div 
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-all duration-500 ease-in-out"
                style={{
                  transform: 'scale(1.5)',
                  opacity: 0,
                }}
              />
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-fira-code">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}