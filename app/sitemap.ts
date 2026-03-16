import { MetadataRoute } from 'next';
import blogData from '@/data/blog.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.shotsquare.com';

    // Base static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        '',
        '/projects',
        '/studio',
        '/contact',
        '/blog',
        '/cookie-policy',
        '/privacy-policy',
        '/terms-of-service'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: route === '' ? 1.0 : route === '/projects' ? 0.9 : 0.8,
    }));

    // Dynamic blog routes
    const blogRoutes: MetadataRoute.Sitemap = blogData.articles.map((article) => ({
        url: `${baseUrl}/blog/${article.id}`,
        lastModified: new Date(article.date).toISOString() || new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes];
}
