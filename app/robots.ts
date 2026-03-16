import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.shotsquare.com';

    return {
        rules: {
            userAgent: '*',
            allow: [
                '/',
                '/_next/static/',
                '/_next/image/'
            ],
            disallow: ['/private/', '/api/', '/admin/'],
            crawlDelay: 2,
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
