import type { MetadataRoute } from 'next';
import { capabilities } from '@/data/capabilities';
import { locations } from '@/data/locations';
import { instrumentPages } from '@/data/instrumentPages';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    { path: '', priority: 1.0 },
    { path: '/services', priority: 0.9 },
    { path: '/capabilities', priority: 0.9 },
    { path: '/industries', priority: 0.8 },
    { path: '/accreditations', priority: 0.8 },
    { path: '/about', priority: 0.6 },
    { path: '/faq', priority: 0.6 },
    { path: '/careers', priority: 0.5 },
    { path: '/contact', priority: 0.9 },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${site.url}${p.path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p.priority,
    })),
    ...capabilities.map((c) => ({
      url: `${site.url}/capabilities/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}/locations`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    ...locations.map((l) => ({
      url: `${site.url}/locations/${l.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: l.slug === 'orange-county' ? 0.8 : 0.7,
    })),
    ...instrumentPages.map((p) => ({
      url: `${site.url}/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
