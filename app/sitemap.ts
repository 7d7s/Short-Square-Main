import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.shortsquare.com';

    const routes: MetadataRoute.Sitemap = ['', '/projects', '/studio', '/contact'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    return [...routes];
}
