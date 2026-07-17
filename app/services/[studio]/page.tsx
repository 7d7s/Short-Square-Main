import React from 'react';
import { servicesData } from '@/data/servicesData';
import { notFound } from 'next/navigation';
import StudioHero from '@/components/studio/StudioHero';
import SubServiceGrid from '@/components/studio/SubServiceGrid';
import ServicesCTA from '@/components/servicesPage/ServicesCTA';
import AosInit from '@/components/AosInit';
import Head from 'next/head';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ studio: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const studio = servicesData.find((s) => s.slug === resolvedParams.studio);
  
  if (!studio) return { title: 'Not Found' };

  return {
    title: `${studio.title} | ShotSquare Photography`,
    description: studio.description,
    openGraph: {
      title: `${studio.title} | ShotSquare`,
      description: studio.description,
      images: [{ url: studio.image }],
    }
  };
}

export default async function StudioPage({ params }: { params: Promise<{ studio: string }> }) {
  const resolvedParams = await params;
  const studioSlug = resolvedParams.studio;
  
  const studio = servicesData.find((s) => s.slug === studioSlug);
  
  if (!studio) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": studio.title,
    "description": studio.description,
    "provider": {
      "@type": "Organization",
      "name": "ShotSquare Photography",
      "url": "https://www.shotsquare.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${studio.title} Services`,
      "itemListElement": studio.subServices.map((sub, index) => ({
        "@type": "OfferCatalog",
        "position": index + 1,
        "name": sub.title,
        "description": sub.description,
        "url": `https://www.shotsquare.com/services/${studio.slug}/${sub.slug}`
      }))
    }
  };

  return (
    <main className="bg-[#030303] min-h-screen text-white overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AosInit />
      {/* Global Grain/Noise layer for premium texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-screen z-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <StudioHero studio={studio} />
      <SubServiceGrid studio={studio} />
      <ServicesCTA />
    </main>
  );
}
