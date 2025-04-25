"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaTrello,
  FaJsSquare,
  FaPhp,
  FaNpm,
  FaCpanel,
  FaDiscord,
  FaSwift,
  FaVuejs,
  FaGit,
  FaDatabase,
  FaSlack,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiSass,
  SiVercel,
  SiGithub,
  SiPostman,
  SiCloudflare,
  SiStripe,
  SiFilezilla,
  SiShopify,
  SiFirebase,
  SiXcode,
  SiExpo,
  SiGooglecloud,
  SiOpenai,
  SiReactrouter,
  SiGraphql,
  SiFigma,
  SiCanva,
  SiPrisma,
  SiLua,
  SiVite,
  SiSqlite,
  SiSupabase,
  SiJira,
  SiNotion,
  SiTwilio,
  SiAuth0,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { IoTerminal } from "react-icons/io5";

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
      { name: "Neon DB", icon: <FaDatabase className="text-green-400 text-4xl" /> },
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
      { name: "Visual Studio Code", icon: <VscVscode className="text-blue-700 text-4xl" /> },
      { name: "Xcode", icon: <SiXcode className="text-blue-500 text-4xl" /> },
      { name: "CLI & Terminal", icon: <IoTerminal className="text-black text-4xl" /> },
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
    <div className="flex flex-col items-center justify-center p-4 bg-white">
      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveSection(item.id as Section)}
            className={`px-6 py-3 text-sm font-semibold rounded-full border-2 transition-all ${
              activeSection === item.id
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100 hover:border-gray-400"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {item.title}
          </motion.button>
        ))}
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl">
        {technologies[activeSection].map((tech) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-xl hover:border-black transition-all transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">{tech.icon}</div>
            <span className="text-sm font-semibold text-center">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}