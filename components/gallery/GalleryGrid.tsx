"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import { FiMaximize2 } from "react-icons/fi";

export type GridItem = {
  id: string;
  title?: string;
  category?: string;
  brand?: string;
  image: string;
  colSpan?: number;
  rowSpan?: number;
  objPos?: string;
};

// Utility to cleanly map strings to SEO optimized slugs
function slugify(text: string) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export default function GalleryGrid({ items, linkToBrand = false }: { items: GridItem[], linkToBrand?: boolean }) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  
  // Infinite Scroll & Pagination State
  const [visibleCount, setVisibleCount] = useState(10);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < items.length) {
          setVisibleCount((prev) => Math.min(prev + 10, items.length));
        }
      },
      { threshold: 0.1, rootMargin: "200px" } // Triggers slightly before physical bottom
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [visibleCount, items.length]);

  const displayedItems = items.slice(0, visibleCount);

  // Supercharge image CDN caching by bypassing local Node.js bandwidth bottlenecks
  const cloudinaryLoader = ({ src, width, quality }: { src: string, width: number, quality?: number }) => {
    if (src.includes("res.cloudinary.com")) {
      const parts = src.split("/upload/");
      if (parts.length === 2) {
        return `${parts[0]}/upload/c_scale,w_${width},f_auto,q_${quality || "auto"}/${parts[1]}`;
      }
    }
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    if (hoveredIndex !== id) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: cy * 8, y: cx * -8 });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="w-full pb-20">
      {/* ─── Desktop: Auto-Adaptive Massive Editorial Grid ─── */}
      <motion.div 
        layout 
        className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[220px] lg:auto-rows-[280px] xl:auto-rows-[310px] gap-3 lg:gap-4 xl:gap-5 min-h-[600px] w-full"
      >
        <AnimatePresence mode="popLayout">
          {displayedItems.map((item, index) => {
            const isHovered = hoveredIndex === item.id;
            const isOtherHovered = hoveredIndex !== null && !isHovered;
            const tilted = isHovered ? tilt : { x: 0, y: 0 };
            const isLoaded = loadedImages[item.id];
            const brandLink = linkToBrand && item.brand ? `/gallery/${slugify(item.brand)}` : null;

            return (
              <motion.div
                layout
                key={item.id}
                className="relative overflow-hidden group rounded-[20px] lg:rounded-[24px] bg-[#0a0a0a]"
                style={{
                  gridColumn: `span ${item.colSpan || 1}`,
                  gridRow: `span ${item.rowSpan || 1}`,
                  perspective: "1000px",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                animate={{
                  opacity: isOtherHovered ? 0.6 : 1,
                  rotateX: tilted.x,
                  rotateY: tilted.y,
                  scale: isHovered ? 1.015 : 1,
                  zIndex: isHovered ? 20 : 1,
                }}
                onMouseEnter={() => setHoveredIndex(item.id)}
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Wrap content in link if brandLink exists */}
                {brandLink ? (
                  <Link href={brandLink} className="absolute inset-0 z-30 block">
                    <span className="sr-only">Go to {item.brand} gallery</span>
                  </Link>
                ) : (
                  <div 
                    className="absolute inset-0 z-30 cursor-zoom-in" 
                    onClick={() => setLightboxIndex(items.findIndex((i) => i.id === item.id))} 
                  />
                )}

                {/* MNC Grade 100x Dynamic Skeleton Loader Underlay */}
                <motion.div
                  className="absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] bg-[#0a0a0a]"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isLoaded ? 0 : 1 }}
                  transition={{ duration: 0.6 }}
                  style={{ pointerEvents: isLoaded ? "none" : "auto" }}
                >
                  <div className="absolute inset-0 bg-white/5 animate-pulse" />
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white/10 border-t-white/60 animate-spin" />
                </motion.div>

                {/* Deep Optimized Full-bleed image */}
                <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
                  <motion.div
                    className="absolute inset-[-5px]"
                    animate={{ scale: isHovered ? 1.08 : 1.0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      loader={cloudinaryLoader}
                      src={item.image}
                      alt={item.title || item.brand || "Portfolio Piece"}
                      fill
                      onLoad={() => setLoadedImages(prev => ({ ...prev, [item.id]: true }))}
                      className={`object-cover transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                      style={{ objectPosition: item.objPos || "center center" }}
                      sizes={item.colSpan === 2 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                      quality={90}
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Ultra subtle shadow vignette for 3D depth */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)" }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.12] rounded-[inherit] pointer-events-none z-20" />
                </div>

                {/* Brand Tag — Shown only on hover */}
                <motion.div
                  className="absolute bottom-4 left-4 z-40 pointer-events-none"
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.brand && (
                    <span className="text-[10px] px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-2xl text-black uppercase tracking-[0.2em] font-extrabold shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                      {item.brand}
                    </span>
                  )}
                </motion.div>

                {/* Lightbox Zoom Icon — High visibility secondary action */}
                {brandLink && (
                  <motion.div
                    className="absolute top-4 right-4 z-40"
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setLightboxIndex(items.findIndex((i) => i.id === item.id));
                      }}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <FiMaximize2 size={16} />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ─── Mobile: Vertical stack ─── */}
      <motion.div layout className="flex md:hidden flex-col gap-3 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {displayedItems.map((item, index) => {
            const isLoaded = loadedImages[item.id];
            const brandLink = linkToBrand && item.brand ? `/gallery/${slugify(item.brand)}` : null;
            
            return (
              <motion.div
                layout
                key={`m-${item.id}`}
                className={`relative rounded-[20px] group overflow-hidden border border-white/[0.06] bg-[#0a0a0a] ${index === 0 ? "h-[400px]" : "h-[300px]"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Wrap content in link if brandLink exists */}
                {brandLink ? (
                  <Link href={brandLink} className="absolute inset-0 z-30 block">
                    <span className="sr-only">Go to {item.brand} gallery</span>
                  </Link>
                ) : (
                  <div 
                    className="absolute inset-0 z-30" 
                    onClick={() => setLightboxIndex(items.findIndex((i) => i.id === item.id))} 
                  />
                )}

                {/* MNC Grade Local Loader for Mobile */}
                <motion.div
                  className="absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] bg-[#0a0a0a]"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isLoaded ? 0 : 1 }}
                  transition={{ duration: 0.6 }}
                  style={{ pointerEvents: isLoaded ? "none" : "auto" }}
                >
                  <div className="absolute inset-0 bg-white/5 animate-pulse" />
                  <div className="w-6 h-6 rounded-full border-2 border-white/10 border-t-white/60 animate-spin" />
                </motion.div>
                
                <Image
                  loader={cloudinaryLoader}
                  src={item.image}
                  alt={item.title || item.brand || "Portfolio"}
                  fill
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [item.id]: true }))}
                  className={`object-cover transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ objectPosition: item.objPos || "center center" }}
                  sizes="100vw"
                  quality={88}
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Mobile Brand Tag & Lightbox - Shown only on Active/Hover/Tap */}
                <div className="absolute bottom-4 left-4 right-4 z-40 flex items-center justify-between opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                  <div>
                    {item.brand && (
                      <span className="text-[10px] px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl text-black uppercase tracking-[0.2em] font-extrabold shadow-xl inline-block pointer-events-none">
                        {item.brand}
                      </span>
                    )}
                  </div>
                  
                  {brandLink && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setLightboxIndex(items.findIndex((i) => i.id === item.id));
                      }}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white"
                    >
                      <FiMaximize2 size={16} />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ─── Infinite Scroll Interceptor & Manual Load Button ─── */}
      {visibleCount < items.length && (
        <div ref={loadMoreRef} className="w-full pt-16 pb-8 flex flex-col items-center justify-center gap-4">
          <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
          <button 
            onClick={() => setVisibleCount((prev) => Math.min(prev + 10, items.length))}
            className="px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white text-[11px] uppercase tracking-[0.2em] font-extrabold hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
          >
            Load Next 10 Assets
          </button>
        </div>
      )}

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={items.map((item) => ({ src: item.image, alt: item.brand || "Gallery Image" }))}
        plugins={[Zoom, Fullscreen, Thumbnails, Counter]}
        animation={{ fade: 300, swipe: 250 }}
        carousel={{ finite: false }}
      />
    </div>
  );
}
