import type { MetadataRoute } from 'next';
import { navigation, team } from '@/data/company';
import { siteUrl } from '@/lib/siteUrl';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const navRoutes = navigation.map((item) => ({
    url: `${siteUrl}${item.href}`,
    lastModified: new Date(),
  }));
  const teamRoutes = team.map((member) => ({
    url: `${siteUrl}/team/${member.slug}`,
    lastModified: new Date(),
  }));

  return [...navRoutes, ...teamRoutes];
}
