"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const navItems = [
  { name: "Studio", href: "/studio" },
  { name: "Projects", href: "/projects" },
  { name: "Journal", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

// Cinematic Apple-like easing curve
const ease = [0.16, 1, 0.3, 1];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    // Sleek pill mode activation
    if (latest > 10) setIsScrolled(true);
    else setIsScrolled(false);

    // MNC Headroom Logic: Hide when scrolling down past the hero, show when scrolling up
    if (typeof window !== "undefined") {
      const heroThreshold = window.innerHeight * 0.3; // Start hiding after scrolling ~60% of the screen

      if (latest > heroThreshold && latest > previous) {
        // Scrolling down past threshold -> hide
        setIsHidden(true);
      } else if (latest < previous) {
        // Scrolling up -> show
        setIsHidden(false);
      } else if (latest < 10) {
        setIsHidden(false);
      }
    }
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const toggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const close = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        initial="visible"
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.7, ease }}
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center w-full transition-all duration-700 pointer-events-none ${isScrolled ? "pt-4 md:pt-6" : "pt-8 md:pt-12"
          }`}
        role="banner"
      >
        <div
          className={`pointer-events-auto relative flex items-center justify-between w-full mx-4 md:mx-8 xl:mx-auto max-w-7xl transition-all duration-700 ease-out rounded-full ${isScrolled
            ? "px-4 py-3 md:py-3.5 bg-[#030303]/60 backdrop-blur-2xl border border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "px-5 py-4 md:py-5 bg-transparent border-transparent"
            }`}
        >
          {/* ULTRA-MINIMAL LOGO */}
          <Link
            href="/"
            className="group relative flex items-center gap-3 md:gap-4 px-3 py-2 z-[110] focus-visible:outline-none"
            aria-label="Homepage"
          >
            <div className="relative w-[26px] h-[26px] md:w-[30px] md:h-[30px] flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-105">
              <Image
                src="/image/logo.png"
                alt="ShotSquare Logo"
                fill
                className="object-contain"
                sizes="30px"
                priority
              />
            </div>
            <span className="text-[17px] md:text-[19px] font-medium tracking-wide text-white transition-colors duration-500 group-hover:text-golden">
              ShotSquare
            </span>
          </Link>

          {/* SLEEK, THIN DESKTOP NAV */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" aria-label="Main Navigation">
            <ul className="flex items-center gap-[6px] p-[6px] bg-white/[0.02] border border-white/[0.04] rounded-full backdrop-blur-xl">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name} className="relative z-10">
                    <Link
                      href={item.href}
                      className="relative block px-7 py-[12px] text-[13px] uppercase tracking-[0.15em] transition-all duration-500 rounded-full focus-visible:outline-none"
                    >
                      <span className={`relative z-20 transition-colors duration-500 ${isActive ? "text-black font-semibold" : "text-white/40 hover:text-white"}`}>
                        {item.name}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          transition={{ type: "spring", stiffness: 400, damping: 35 }}
                          className="absolute inset-0 bg-white rounded-full z-10 shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3 z-[110] pr-1">
            <Link
              href="/contact"
              className="hidden md:flex items-center justify-center gap-2.5 px-8 py-[13px] text-[13px] md:text-[14px] uppercase tracking-[0.1em] text-white hover:text-black bg-white/[0.03] hover:bg-white border border-white/[0.08] hover:border-white rounded-full transition-all duration-500 focus-visible:outline-none group"
            >
              Start Project
              <MdArrowOutward size={18} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-300" />
            </Link>

            {/* BUTTERY SCALED HAMBURGER - TWO LINE MINIMALIST */}
            <button
              onClick={toggle}
              className={`relative md:hidden flex items-center justify-center w-[50px] h-[50px] rounded-full transition-all duration-500 border focus-visible:outline-none ${isMobileMenuOpen
                ? "bg-transparent border-transparent"
                : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20"
                }`}
              aria-label="Toggle Menu"
            >
              <div className="relative w-[22px] h-[12px] flex flex-col justify-between items-center">
                <motion.span
                  animate={isMobileMenuOpen ? { y: 5, rotate: 45, backgroundColor: "#ffffff" } : { y: 0, rotate: 0, backgroundColor: "#ffffff" }}
                  transition={{ duration: 0.6, ease }}
                  className="w-full h-[1.5px] bg-white origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { y: -5, rotate: -45, backgroundColor: "#ffffff" } : { y: 0, rotate: 0, backgroundColor: "#ffffff" }}
                  transition={{ duration: 0.6, ease }}
                  className="w-full h-[1.5px] bg-white origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* CINEMATIC, DARK MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 z-[90] bg-[#020202] flex flex-col justify-center px-8 md:px-16"
          >
            {/* Subtle light leak for mood */}
            <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-golden/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Nav container */}
            <nav className="relative z-10 flex flex-col gap-3 md:gap-5">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <div key={item.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%", rotate: 2 }}
                      animate={{ y: "0%", rotate: 0 }}
                      exit={{ y: "110%", rotate: -2, transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.8, ease }}
                    >
                      <Link
                        href={item.href}
                        onClick={close}
                        className="group flex items-center py-2"
                      >
                        <span className={`text-[11vw] md:text-[7vw] font-light tracking-[-0.03em] leading-none transition-colors duration-700 ${isActive ? "text-white" : "text-white/20 hover:text-white"
                          }`}>
                          {item.name}
                        </span>
                        {isActive && (
                          <motion.div
                            layoutId="mobile-dot"
                            className="w-2 h-2 rounded-full bg-golden ml-6 md:ml-10 shadow-[0_0_15px_rgba(var(--golden-rgb),0.6)]"
                          />
                        )}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </nav>

            {/* Bottom utility / Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
              transition={{ delay: 0.5, duration: 0.8, ease }}
              className="absolute bottom-12 left-8 md:left-16 flex flex-col gap-3"
            >
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold">Say Hello</span>
              <div className="flex flex-col gap-1">
                <a href="mailto:hello@shortsquare.com" className="text-lg md:text-xl text-white/80 hover:text-golden transition-colors duration-500">
                  hello@shortsquare.com
                </a>
                <a href="tel:+918882758944" className="text-lg md:text-xl text-white/40 hover:text-white transition-colors duration-500">
                  +91 888 275 8944
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
