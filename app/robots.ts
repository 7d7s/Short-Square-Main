import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.shortsquare.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/api/', '/admin/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
