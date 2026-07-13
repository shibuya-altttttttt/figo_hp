import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { newsArticles } from '@/lib/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/services', priority: 0.8 },
    { path: '/services/consulting', priority: 0.8 },
    { path: '/services/revitalization', priority: 0.8 },
    { path: '/sell', priority: 0.9 },
    { path: '/shindan', priority: 0.8 },
    { path: '/sell/income', priority: 0.9 },
    { path: '/sell/kubun', priority: 0.9 },
    { path: '/sell/land', priority: 0.9 },
    { path: '/buy', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/message', priority: 0.6 },
    { path: '/cases', priority: 0.6 },
    { path: '/news', priority: 0.6 },
    { path: '/faq', priority: 0.6 },
    { path: '/contact', priority: 0.9 },
  ];

  const staticRoutes = routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority,
  }));

  const newsRoutes = newsArticles.map((article) => ({
    url: `${siteConfig.url}/news/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...newsRoutes];
}
