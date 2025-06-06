import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Ruhan Pacolli - Expert Full-Stack Developer from Kosovo',
  description: 'Experienced Full-Stack Developer with expertise in React, Next.js, TypeScript and modern web technologies. View Ruhan Pacolli\'s professional skills, work experience, projects, and certifications.',
  keywords: 'Ruhan Pacolli resume, web developer Kosovo, full-stack developer portfolio, React developer, Next.js expert, TypeScript developer, frontend developer, software engineer resume, JavaScript developer, Kosovo tech talent, hire web developer',
  alternates: {
    canonical: 'https://ruhanpacolli.online/resume',
  },
  openGraph: {
    title: 'Resume | Ruhan Pacolli - Full-Stack Developer',
    description: 'View my professional background, skills, and portfolio. Specializing in React, Next.js, and TypeScript with 6+ years of experience building modern web applications.',
    type: 'profile',
    locale: 'en_US',
    url: 'https://ruhanpacolli.online/resume',
    siteName: 'Ruhan Pacolli Portfolio',
    images: [
      {
        url: 'https://ruhanpacolli.online/assets/img/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Ruhan Pacolli - Professional Full-Stack Developer Resume',
      },
    ],
    firstName: 'Ruhan',
    lastName: 'Pacolli',
    username: 'ruhanpaco',
    gender: 'male'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruhan Pacolli - Full-Stack Developer Resume',
    description: 'Experienced developer specializing in React, Next.js & TypeScript. View my skills, projects and work history. Available for freelance and full-time opportunities.',
    creator: '@Ruhanpaco',
    images: ['https://ruhanpacolli.online/assets/img/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Ruhan Pacolli', url: 'https://github.com/Ruhanpaco' }],
  category: 'Technology',
  verification: {
    google: 'verification_token', // Replace with your Google verification token if you have one
  },
}; 