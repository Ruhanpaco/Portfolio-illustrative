import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';


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
    icon: "https://ruhanpacolli.online/assets/img/logo.png", // Favicon
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
        url: "https://ruhanpacolli.online/assets/img/logo.png",
        width: 800,
        height: 800,
        alt: "Ruhan Pacolli",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your Google verification code
  },
  authors: [{ name: 'Ruhan Pacolli' }],
  creator: 'Ruhan Pacolli',
  publisher: 'Ruhan Pacolli',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
