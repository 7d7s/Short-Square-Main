import React from 'react';
import { servicesData } from '@/data/servicesData';
import { notFound } from 'next/navigation';
import SubServiceHero from '@/components/subService/SubServiceHero';
import SubServiceNarrative from '@/components/subService/SubServiceNarrative';
import SubServiceDetails from '@/components/subService/SubServiceDetails';
import ServicesCTA from '@/components/servicesPage/ServicesCTA';
import AosInit from '@/components/AosInit';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ studio: string, subService: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const studio = servicesData.find((s) => s.slug === resolvedParams.studio);
  const subService = studio?.subServices.find((s) => s.slug === resolvedParams.subService);

  if (!subService || !studio) return { title: 'Not Found' };

  return {
    title: `${subService.title} - ${studio.title} | ShotSquare Studio`,
    description: subService.description,
    openGraph: {
      title: `${subService.title} | ShotSquare`,
      description: subService.description,
      images: [{ url: subService.image }],
    }
  };
}

export default async function SubServicePage({ params }: { params: Promise<{ studio: string, subService: string }> }) {
  const resolvedParams = await params;
  const studioSlug = resolvedParams.studio;
  const subServiceSlug = resolvedParams.subService;

  const studio = servicesData.find((s) => s.slug === studioSlug);
  if (!studio) {
    notFound();
  }

  const subService = studio.subServices.find((s) => s.slug === subServiceSlug);
  if (!subService) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": subService.title,
    "description": subService.description,
    "provider": {
      "@type": "Organization",
      "name": "ShotSquare Studio",
      "url": "https://www.shotsquare.com"
    },
    "serviceType": subService.title,
    "areaServed": "Global",
    "url": `https://www.shotsquare.com/studios/${studio.slug}/${subService.slug}`,
    "image": subService.image
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

      <SubServiceHero studio={studio} subService={subService} />
      <SubServiceNarrative subService={subService} />
      <SubServiceDetails subService={subService} />
      <ServicesCTA />
    </main>
  );
}
