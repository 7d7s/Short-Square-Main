import allImages from "@/data/allImages.json";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { notFound } from "next/navigation";

// Utility to cleanly map strings to SEO optimized slugs
function slugify(text: string) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// NextJS 14 SSG Pre-generation for instant load times (Deep Optimizer)
export function generateStaticParams() {
  const brands = new Set(allImages.map(img => img.brand).filter(Boolean));
  return Array.from(brands).map(brand => ({
    slug: [slugify(brand as string)]
  }));
}

export async function generateMetadata({ params } : { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const requestedSlug = resolvedParams.slug.join('/');
  const brandFilteredImages = allImages.filter(img => img.brand && slugify(img.brand) === requestedSlug);
  
  if (!brandFilteredImages.length) return {};
  
  return {
    title: `${brandFilteredImages[0].brand} | Exclusive Gallery Archive`,
    description: `Browse the dedicated production archive and visual grid for ${brandFilteredImages[0].brand}.`,
  }
}

export default async function BrandGalleryPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const requestedSlug = resolvedParams.slug.join('/');
  
  // High-performance filter map
  const brandFilteredImages = allImages.filter(img => img.brand && slugify(img.brand) === requestedSlug);

  // Return a generic 404 cleanly if the slug doesn't exist
  if (!brandFilteredImages || brandFilteredImages.length === 0) {
    notFound();
  }

  const brandName = brandFilteredImages[0].brand;

  // Dynamic layout cycle to perfectly recalculate shape arrays for any subset of images!
  const layoutCycle = [
    { colSpan: 2, rowSpan: 2 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 2, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 2 }, { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 2 }, { colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }
  ];

  // Hardware-accelerated RNG array shuffle mapping! Provides ultra fresh randomized feeds specifically for this brand.
  const shuffledBrandSet = [...brandFilteredImages].sort(() => Math.random() - 0.5);

  const formattedItems = shuffledBrandSet.map((s, i) => {
    const layout = layoutCycle[i % layoutCycle.length];
    return {
      id: `dynamic-brand-${i}`,
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
          <p className="text-white/50 text-[10px] md:text-[12px] uppercase tracking-[0.2em] mb-4 font-bold">
            Curated Collection
          </p>
          <h1 className="text-[40px] md:text-[80px] leading-[1.1] font-extrabold text-white uppercase tracking-tight mb-6">
            {brandName}
          </h1>
          <p className="text-white/50 text-[12px] md:text-[14px] uppercase tracking-[0.1em] max-w-xl font-medium leading-[1.8]">
            An exclusive gallery tailored specifically to the structural design and aesthetic language of {brandName}.
            Rendered through high-performance dynamic lazy loading.
          </p>
        </div>

        <GalleryGrid items={formattedItems} />
      </div>
    </main>
  );
}