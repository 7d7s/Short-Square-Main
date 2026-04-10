"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import slideCardsData from "@/data/slideCards.json";

type GridItem = {
  id: string;
  title: string;
  category: string;
  tag: string; // Used for brand name over image
  image: string;
  colSpan?: number;
  rowSpan?: number;
  objPos?: string;
};

const allItems = (slideCardsData as any[]).map((s, i) => ({
  id: `slide-` + i,
  title: s.title || "Showcase",
  category: s.category || "Portfolio",
  tag: s.brand || "",
  link: s.link || "/gallery",
  image: s.image,
  colSpan: s.colSpan || 1,
  rowSpan: s.rowSpan || 1,
  objPos: s.objPos || "center center",
}));

const brandsMap = new Map<string, number>();
allItems.forEach(item => {
  if (item.category) {
    brandsMap.set(item.category, (brandsMap.get(item.category) || 0) + 1);
  }
});

const brands = ["All", ...Array.from(brandsMap.keys())];

const CardSlider = () => {
  const [filter, setFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

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

  // Filter items
  const filteredItems = useMemo(() => {
    return filter === "All" ? allItems : allItems.filter(item => item.tag === filter);
  }, [filter]);

  return (
    <div className="w-full pb-10">
      {/* ─── Filter Dropdown (MNC-Grade) ─── */}
      <div className="flex justify-end mb-8 md:mb-12 relative z-50">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="group flex flex-col items-end gap-1 outline-none"
          >
            <div className="flex items-center gap-3 py-2 px-5 border border-white/20 rounded-full bg-white/5 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 group-hover:border-white/40 shadow-lg">
              <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
                Filter By Brand
              </span>
              <span className="text-white font-semibold text-[11px] md:text-[12px] uppercase tracking-[0.1em] flex items-center gap-2">
                {filter}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-0 top-full mt-3 w-64 p-2 bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.8)] overflow-hidden z-[100]"
              >
                <div className="max-h-[300px] overflow-y-auto pr-1">
                  {brands.map((brandInfo, i) => (
                    <motion.button
                      key={brandInfo}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      onClick={() => {
                        setFilter(brandInfo);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300
                        ${filter === brandInfo ? "bg-white text-black" : "text-white/60 hover:bg-white/10 hover:text-white"}`}
                    >
                      <span className="flex items-center justify-between w-full">
                        <span>{brandInfo}</span>
                        <span className="opacity-50 text-[9px] font-bold">
                          {brandInfo === "All" ? allItems.length : brandsMap.get(brandInfo)}
                        </span>
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ─── Desktop: Asymmetric 3-col editorial grid ─── */}
      <motion.div layout className="hidden md:grid grid-cols-3 auto-rows-[270px] lg:auto-rows-[310px] xl:auto-rows-[330px] gap-2.5 min-h-[600px]">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => {
            const isHovered = hoveredIndex === item.id;
            const isOtherHovered = hoveredIndex !== null && !isHovered;
            const tilted = isHovered ? tilt : { x: 0, y: 0 };

            return (
              <motion.div
                layout
                key={item.id}
                className="relative overflow-hidden cursor-pointer rounded-[20px] lg:rounded-[24px]"
                style={{
                  gridColumn: `span ${item.colSpan}`,
                  gridRow: `span ${item.rowSpan}`,
                  perspective: "1000px",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: isOtherHovered ? 0.6 : 1,
                  rotateX: tilted.x,
                  rotateY: tilted.y,
                  scale: isHovered ? 1.015 : 1,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                onMouseEnter={() => setHoveredIndex(item.id)}
                onMouseMove={(e) => handleMouseMove(e, item.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Full-bleed image */}
                <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
                  <motion.div
                    className="absolute inset-[-5px]"
                    animate={{ scale: isHovered ? 1.07 : 1.01 }}
                    transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      style={{ objectPosition: item.objPos }}
                      sizes={item.colSpan === 2 ? "66vw" : "33vw"}
                      quality={90}
                    />
                  </motion.div>

                  {/* Ultra subtle shadow vignette for 3D depth — only on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)" }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.08] rounded-[inherit] pointer-events-none" />
                </div>

                {/* Arrow icon */}
                <motion.div
                  className="absolute top-4 right-4 z-30"
                  initial={false}
                  animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5, rotate: isHovered ? 0 : -45 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link href={item.link} passHref>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                      className="w-10 h-10 rounded-full bg-white shadow-[0_6px_24px_rgba(0,0,0,0.35)] flex items-center justify-center cursor-pointer backdrop-blur-sm"
                    >
                      <span className="text-black text-[13px] font-bold leading-none">↗</span>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Tag — bottom-left, subtle fade-in on hover. Now shows BRAND NAME */}
                <motion.div
                  className="absolute bottom-4 left-4 z-20 pointer-events-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 10
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.tag && (
                    <span className="text-[10px] px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-2xl text-black uppercase tracking-[0.2em] font-extrabold shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                      {item.tag}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ─── Mobile: Vertical stack ─── */}
      <motion.div layout className="flex md:hidden flex-col gap-3 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => {
            const isHovered = hoveredIndex === item.id;
            return (
              <motion.div
                layout
                key={`m-${item.id}`}
                className={`relative rounded-[20px] overflow-hidden border border-white/[0.06] ${index === 0 ? "h-[400px]" : "h-[260px]"}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: item.objPos }}
                  sizes="100vw"
                  quality={88}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Mobile Bottom Bar — now shows only on interaction (hover/tap) */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 10
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Brand Name on Mobile */}
                  <div>
                    {item.tag && (
                      <span className="text-[10px] px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl text-black uppercase tracking-[0.2em] font-extrabold shadow-xl">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <Link href={item.link} passHref>
                    <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center active:scale-90 transition-transform">
                      <span className="text-black text-[14px] font-bold">↗</span>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CardSlider;
