import ContactContent from './content';
import metadataConfig from '@/config/seo/contact/config.json';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  ...metadataConfig,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    ...metadataConfig.openGraph,
  },
  twitter: {
    ...metadataConfig.twitter,
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ShotSquare Photography",
    "url": "https://www.shotsquare.com/contact",
    "description": "Reach out to ShotSquare Photography for weddings, portraits, travel, and nature photography inquiries.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "ShotSquare Photography",
      "image": "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744790523/w2_r01a8b.png",
      "telephone": "+918882758944",
      "email": "info@shortsquare.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}
