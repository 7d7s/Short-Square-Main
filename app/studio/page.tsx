import StudioContent from './content';
import metadataConfig from '@/config/seo/studio/config.json';
import { Metadata } from 'next';
import Head from 'next/head';
import studioData from '@/data/studio.json';

export const metadata: Metadata = {
  ...metadataConfig,
  alternates: {
    canonical: '/studio',
  },
  openGraph: {
    ...metadataConfig.openGraph,
  },
  twitter: {
    ...metadataConfig.twitter,
  },
};

export default function StudioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ShotSquare Studio",
    "url": "https://www.shotsquare.com/studio",
    "description": studioData.banner.description,
    "mainEntity": {
      "@type": "Organization",
      "name": "ShotSquare Photography",
      "image": studioData.banner.imageUrl
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StudioContent />
    </>
  );
}
