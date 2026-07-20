import ServicesPage from "@/components/servicesPage";
import AosInit from "@/components/AosInit";
import Head from "next/head";
import metadataConfig from '@/config/seo/studio/config.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...metadataConfig,
  alternates: {
    canonical: '/studios',
  },
  openGraph: {
    ...metadataConfig.openGraph,
  },
  twitter: {
    ...metadataConfig.twitter,
  },
};


export default function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Production Services | ShotSquare Studio",
    "url": "https://www.shotsquare.com/services",
    "description": metadata.description,
  };

  return (
    <>
      <AosInit />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <ServicesPage />
    </>
  );
}
