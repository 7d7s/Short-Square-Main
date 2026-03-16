"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import homeData from "@/data/home.json";

type GridItem = {
  title: string;
  tag: string;
  image: string;
  colSpan: number;
  rowSpan: number;
  objPos: string;
};

const workCards = homeData.work.cards.map((c) => ({
  title: c.title,
  tag: c.tags?.[0] ?? "",
  image: c.image,
}));
const slideCards = homeData.expertise.slides.map((s) => ({
  title: s.title,
  tag: s.category,
  image: s.image,
}));

const allItems = [...workCards, ...slideCards].slice(0, 8);

const layoutMap: Pick<GridItem, "colSpan" | "rowSpan" | "objPos">[] = [
  { colSpan: 2, rowSpan: 2, objPos: "center 20%" },
  { colSpan: 1, rowSpan: 1, objPos: "center 25%" },
  { colSpan: 1, rowSpan: 1, objPos: "center 30%" },
  { colSpan: 1, rowSpan: 2, objPos: "center 15%" },
  { colSpan: 1, rowSpan: 1, objPos: "center 20%" },
  { colSpan: 1, rowSpan: 1, objPos: "center 30%" },
  { colSpan: 1, rowSpan: 1, objPos: "center 20%" },
  { colSpan: 2, rowSpan: 1, objPos: "center 35%" },
];

const items: GridItem[] = allItems.map((item, i) => ({
  ...item,
  ...layoutMap[i],
}));

// Each cell gets a unique clip-path direction for dramatic, staggered entrance
const clipReveal = [
  "inset(100% 0 0 0)",  // wipe from bottom
  "inset(0 0 0 100%)",  // wipe from right
  "inset(0 100% 0 0)",  // wipe from left
  "inset(100% 0 0 0)",
  "inset(0 0 100% 0)",  // wipe from top
  "inset(0 0 0 100%)",
  "inset(100% 0 0 0)",
  "inset(0 0 100% 0)",
];

const CardSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveredIndex !== index) return;
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
    <div className="w-full">

      {/* ─── Desktop: Asymmetric 3-col editorial grid ─── */}
      <div className="hidden md:grid grid-cols-3 auto-rows-[270px] lg:auto-rows-[310px] xl:auto-rows-[330px] gap-2.5">
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isOtherHovered = hoveredIndex !== null && !isHovered;
          const tilted = isHovered ? tilt : { x: 0, y: 0 };

          return (
            <motion.div
              key={index}
              className="relative overflow-hidden cursor-pointer rounded-[20px] lg:rounded-[24px]"
              style={{
                gridColumn: `span ${item.colSpan}`,
                gridRow: `span ${item.rowSpan}`,
                perspective: "1000px",
              }}
              // Scroll entrance — each cell wipes in from a unique direction
              initial={{ clipPath: clipReveal[index], opacity: 0 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              animate={{
                opacity: isOtherHovered ? 0.6 : 1,
                rotateX: tilted.x,
                rotateY: tilted.y,
                scale: isHovered ? 1.015 : 1,
              }}
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
                    priority={index < 2}
                  />
                </motion.div>

                {/* Ultra subtle shadow vignette for 3D depth — only on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)",
                  }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Thin border ring */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.08] rounded-[inherit] pointer-events-none" />
              </div>

              {/* Arrow icon — appears top-right on hover with spring pop */}
              <motion.div
                className="absolute top-4 right-4 z-30"
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0.5,
                  rotate: isHovered ? 0 : -45,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link href="/projects" passHref>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-10 h-10 rounded-full bg-white shadow-[0_6px_24px_rgba(0,0,0,0.35)] flex items-center justify-center cursor-pointer backdrop-blur-sm"
                  >
                    <span className="text-black text-[13px] font-bold leading-none">↗</span>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Tag — bottom-left, subtle fade-in on hover */}
              <motion.div
                className="absolute bottom-4 left-4 z-20"
                initial={false}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[9px] px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-2xl border border-white/15 text-white/80 uppercase tracking-[0.2em] font-medium">
                  {item.tag}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── Mobile: Vertical stack ─── */}
      <div className="flex md:hidden flex-col gap-3">
        {items.slice(0, 5).map((item, index) => (
          <motion.div
            key={`m-${index}`}
            className={`relative rounded-[20px] overflow-hidden border border-white/[0.06] ${index === 0 ? "h-[400px]" : "h-[260px]"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
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

            {/* Minimal bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Tag + Arrow row */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
              <span className="text-[9px] px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/15 text-white/75 uppercase tracking-[0.2em]">
                {item.tag}
              </span>
              <Link href="/projects" passHref>
                <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
                  <span className="text-black text-[12px] font-bold">↗</span>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
