import { MetadataRoute } from 'next';

export function GET(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://ruhanpacolli.online/sitemap.xml',
  };
} 