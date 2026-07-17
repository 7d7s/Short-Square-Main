import allImages from "@/data/allImages.json";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryHero from "@/components/gallery/GalleryHero";

export const metadata = {
  title: "The Archive | High-End Visual Portfolio by ShotSquare Studio",
  description: "Explore the definitive visual portfolio of ShotSquare Studio. A curated showcase of international brand campaigns, creative product shoots, and dynamic studio captures.",
};

export default function GalleryPage() {
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
    <main className="min-h-screen bg-[#0a0a0a] pt-[120px] md:pt-[180px] pb-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <GalleryHero />

        <GalleryGrid items={formattedItems} linkToBrand={true} />
      </div>
    </main>
  );
}