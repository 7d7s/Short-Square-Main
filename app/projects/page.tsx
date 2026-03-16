import ProjectsContent from './content';
import metadataConfig from '@/config/seo/projects/config.json';
import { Metadata } from 'next';
import Head from 'next/head';
import projectsData from '@/data/projects.json';

export const metadata: Metadata = {
  ...metadataConfig,
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    ...metadataConfig.openGraph,
  },
  twitter: {
    ...metadataConfig.twitter,
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "ShotSquare Photography Portfolio",
    "url": "https://www.shotsquare.com/projects",
    "about": "Collection of professional photography work including wedding, portrait, and fashion photography.",
    "image": projectsData.projects.map((img: any) => ({
      "@type": "ImageObject",
      "url": img.url,
      "contentUrl": img.url,
      "name": img.title,
      "description": `${img.title} - ${img.category} photography by ShotSquare`,
      "creator": {
        "@type": "Organization",
        "name": "ShotSquare Photography"
      },
      "license": "https://www.shotsquare.com/terms-of-service",
      "acquireLicensePage": "https://www.shotsquare.com/contact"
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsContent />
    </>
  );
}