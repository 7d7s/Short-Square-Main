import allImages from "@/data/allImages.json";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "The Archive | Production Grade Gallery",
  description: "A complete visual timeline mapped through advanced masonry lazy loading protocols.",
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
        <div className="mb-12 md:mb-20">
          <h1 className="text-[40px] md:text-[80px] leading-[1.1] font-extrabold text-white uppercase tracking-tight mb-6">
            ShotSquare <br className="md:hidden" /> Gallery
          </h1>
          <p className="text-white/50 text-[12px] md:text-[14px] uppercase tracking-[0.1em] max-w-xl font-medium leading-[1.8]">
            Immerse yourself in the definitive visual portfolio of ShotSquare. 
            A curated showcase of our high-end brand campaigns, creative product shoots, 
            and dynamic studio captures.
          </p>
        </div>

        <GalleryGrid items={formattedItems} linkToBrand={true} />
      </div>
    </main>
  );
}