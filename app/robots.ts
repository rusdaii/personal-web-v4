import { MetadataRoute } from 'next';

const SITE_URL = 'https://rusdaii.vercel.app';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/404', '/500', '/api/*', '/studio'],
    },
  ],
  sitemap: `${SITE_URL}/sitemap.xml`,
  host: `${SITE_URL}`,
});

export default robots;
