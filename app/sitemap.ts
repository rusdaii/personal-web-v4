import { MetadataRoute } from 'next';

import { loadProjects } from '@/sanity/loader/loadQuery';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL = 'https://rusdaii.vercel.app';

  const { data } = await loadProjects();

  const projects = data.map(({ slug, _updatedAt }) => ({
    url: `${SITE_URL}/projects/${slug}`,
    lastModified: _updatedAt,
  }));

  const routes = ['', '/about', '/projects'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routes, ...projects];
}
