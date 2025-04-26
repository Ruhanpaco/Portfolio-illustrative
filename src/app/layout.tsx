import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruhan Pacolli | Full-Stack Developer | Kosovo",
  description: "Professional web developer specializing in React.js, Next.js, and modern UI/UX. Offering custom website development, responsive design, and e-commerce solutions. Based in Kosovo, working worldwide.",
  keywords: "web developer, full-stack developer, freelance developer, react developer, nextjs, Kosovo web developer, UI/UX design, responsive websites, custom web development",
  icons: {
    icon: "https://ruhanpacolli.online/assets/img/logo.png",
  },
  alternates: {
    canonical: "https://ruhanpacolli.online",
  },
  openGraph: {
    title: "Ruhan Pacolli | Full-Stack Developer & Web Designer",
    description: "Professional web developer specializing in React.js, Next.js, and modern UI/UX. Offering custom website development, responsive design, and e-commerce solutions.",
    url: "https://ruhanpacolli.online",
    siteName: "Ruhan Pacolli Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ruhanpacolli.online/assets/img/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ruhan Pacolli - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruhan Pacolli | Full-Stack Developer",
    description: "Professional web developer specializing in React.js, Next.js, and modern UI/UX design.",
    images: ["https://ruhanpacolli.online/assets/img/profile.jpg"],
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
    google: 'your-google-verification-code', // Replace with your actual verification code
  },
  authors: [{ name: 'Ruhan Pacolli', url: 'https://ruhanpacolli.online' }],
  creator: 'Ruhan Pacolli',
  publisher: 'Ruhan Pacolli',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
        
        {/* Structured data for personal portfolio */}
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ruhan Pacolli",
              "url": "https://ruhanpacolli.online",
              "image": "https://ruhanpacolli.online/assets/img/profile.jpg",
              "jobTitle": "Full-Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "sameAs": [
                "https://github.com/Ruhanpaco",
                "https://wa.link/tpbnvt"
              ],
              "knowsAbout": ["Web Development", "React.js", "Next.js", "JavaScript", "TypeScript", "UI/UX Design"]
            })
          }}
        />
      </body>
    </html>
  );
}
