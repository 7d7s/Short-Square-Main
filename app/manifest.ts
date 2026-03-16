import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'ShotSquare Photography',
        short_name: 'ShotSquare',
        description: 'Expert photography services capturing weddings, portraits, fashion, travel, and nature across India with artistic excellence.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a09',
        theme_color: '#b4b2b5',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
