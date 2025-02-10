import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruhan Pacolli | Full-stack developer",
  description: "Hi, I'm Ruhan Pacolli, a Web Developer passionate about building web applications, i mostly work with React, Next.js, Tailwind CSS, and TypeScript, here you will learn more about me and get to know with my work.",
  icons: {
    icon: "./favicon.ico", // Favicon
  },
  alternates: {
    canonical: "https://ruhanpacolli.online",
  },
  openGraph: {
    title: "Ruhan Pacolli",
    description: "Hi, I'm Ruhan Pacolli, a Web Developer passionate about building web applications, i mostly work with React, Next.js, Tailwind CSS, and TypeScript, here you will learn more about me and get to know with my work.",
    url: "https://ruhanpacolli.online",
    siteName: "Ruhan Pacolli Portfolio",
    images: [
      {
        url: "https://ruhanpacolli.online/favicon.ico",
        width: 800,
        height: 800,
        alt: "Ruhan Pacolli",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
