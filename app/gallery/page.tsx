import allImages from "@/data/allImages.json";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryHero from "@/components/gallery/GalleryHero";
import metadataConfig from "@/config/seo/gallery/config.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...metadataConfig,
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    ...metadataConfig.openGraph,
  },
  twitter: {
    ...metadataConfig.twitter,
  },
};

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Gallery | ShotSquare Studio",
    "url": "https://www.shotsquare.com/gallery",
    "description":
      "Browse the ShotSquare Studio gallery featuring commercial photography, videography, brand campaigns, product photography, fashion editorials, corporate projects, and creative productions.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "ShotSquare Studio",
      "url": "https://www.shotsquare.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ShotSquare Studio",
      "url": "https://www.shotsquare.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744790523/w2_r01a8b.png"
      }
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Commercial Photography"
      },
      {
        "@type": "Thing",
        "name": "Videography"
      },
      {
        "@type": "Thing",
        "name": "Creative Production"
      },
      {
        "@type": "Thing",
        "name": "Brand Campaigns"
      },
      {
        "@type": "Thing",
        "name": "Product Photography"
      }
    ],
    "inLanguage": "en-IN"
  };
  // Dynamic layout cycle to ensure perfect grid sealing regardless of array length
  const layoutCycle = [
    { colSpan: 2, rowSpan: 2 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 2, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 2 }, { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 2 }, { colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }
  ];

  // Hardware-accelerated RNG array shuffle mapping! Provides ultra fresh randomized feeds.
  const shuffledPool = [...allImages].sort(() => Math.random() - 0.5);

  const formattedItems = shuffledPool.map((s, i) => {
    const layout = layoutCycle[i % layoutCycle.length];
    return {
      id: `archive-${i}`,
      title: s.brand || "Showcase",
      category: s.category || "Portfolio",
      brand: s.brand || "",
      image: s.image,
      colSpan: layout.colSpan,
      rowSpan: layout.rowSpan,
      objPos: s.objPos || "center center",
    };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0a0a0a] pt-[120px] md:pt-[180px] pb-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <GalleryHero />
          <GalleryGrid items={formattedItems} linkToBrand={true} />
        </div>
      </main>
    </>
  );
}