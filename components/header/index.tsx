"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaInstagram, FaPinterest, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdArrowOutward, MdDashboard } from "react-icons/md";
import { GiFilmProjector } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", icon: <MdDashboard />, href: "/" },
    { name: "Studio", icon: <FaLayerGroup />, href: "/studio" },
    { name: "Projects", icon: <GiFilmProjector />, href: "/projects" },
    { name: "Contact", icon: <FaPhoneVolume />, href: "/contact" },
  ];

  const socialIcons = [FaInstagram, FaFacebook, FaTwitter, FaPinterest];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <div className="absolute top-0 left-0 right-0 z-50 md:pt-14 pt-8 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 items-center">

            {/* LOGO */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="group flex items-center gap-3">
                {/* 
                  Drop your actual logo image here when ready. For example:
                  <Image src="/your-logo.png" alt="ShortSquare Logo" width={40} height={40} className="w-10 h-10 object-contain drop-shadow-xl" priority /> 
                */}
                <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-[#c8b390]/20 to-white/5 border border-white/10 shadow-[0_0_20px_rgba(200,179,144,0.1)] backdrop-blur-md overflow-hidden group-hover:border-[#c8b390]/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-[#c8b390]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-[#c8b390] transform group-hover:scale-110 transition-transform duration-500"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl tracking-tighter font-extrabold bg-gradient-to-r from-white via-white/90 to-[#c8b390] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity duration-300">
                    ShortSquare
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[#c8b390]/70 -mt-1 font-medium pl-0.5">
                    Studios
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex justify-center">
              <motion.nav
                initial={{ y: -18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl px-8 py-3 rounded-full flex items-center space-x-8"
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <motion.div key={item.name} whileHover={{ y: -2 }}>
                      <Link
                        href={item.href}
                        className={`relative text-sm uppercase tracking-wider font-medium transition-all duration-300 group
                          ${isActive ? "text-white" : "text-white/70 hover:text-white"}`}
                      >
                        {item.name}

                        {/* ACTIVE OR HOVER UNDERLINE */}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#c8b390] to-[#9a8368] transition-all duration-300
                            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>
            </div>

            {/* DESKTOP CTA BUTTONS */}
            <div className="hidden lg:flex justify-end">
              <motion.div
                initial={{ y: -18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-3"
              >

                {/* BOOK A CALL */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="tel:+918882758944"
                    className="relative rounded-full font-semibold px-6 py-3 shadow-2xl overflow-hidden text-white bg-gradient-to-r from-[#c8b390] to-[#9a8368] backdrop-blur-lg transition-all duration-500 ease-in-out flex items-center gap-2 group"
                  >
                    <span className="absolute inset-0 bg-white/10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"></span>
                    <span className="relative text-sm z-10 flex items-center gap-2 uppercase tracking-wide">
                      Book A Call
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* MOBILE MENU */}
            <div className="flex justify-end lg:hidden">
              <motion.button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="group relative w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#c8b390]/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c8b390]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                {/* Animated Hamburger */}
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="relative w-5 h-4 flex flex-col justify-between z-10"
                >
                  <motion.span
                    className="block h-[2px] w-full bg-white rounded-full origin-center transition-colors duration-300 group-hover:bg-[#c8b390]"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 7 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="block h-[2px] w-full bg-white rounded-full transition-colors duration-300 group-hover:bg-[#c8b390]"
                    variants={{
                      closed: { opacity: 1, x: 0 },
                      open: { opacity: 0, x: -10 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="block h-[2px] w-[60%] group-hover:w-full bg-white rounded-full origin-center ml-auto transition-all duration-300 group-hover:bg-[#c8b390]"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -7, width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.button>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu} />

            {/* slide panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 260 }}
              className="relative h-full w-full md:w-96 ml-auto bg-gradient-to-br from-primary-brown to-[#1a1008] border-l border-white/10 shadow-2xl"
            >
              <div className="flex flex-col h-full p-5">

                {/* header */}
                <div className="flex justify-between items-center pb-8 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-[#c8b390]/20 to-white/5 border border-white/10 shadow-lg backdrop-blur-md">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#c8b390]" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl tracking-tighter font-extrabold bg-gradient-to-r from-white via-white/90 to-[#c8b390] bg-clip-text text-transparent">
                        ShortSquare
                      </span>
                      <span className="text-[0.55rem] uppercase tracking-[0.3em] text-[#c8b390]/70 -mt-1 font-medium pl-0.5">
                        Studios
                      </span>
                    </div>
                  </div>

                  <motion.button
                    onClick={closeMenu}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg"
                  >
                    <FaTimes size={16} className="text-white" />
                  </motion.button>
                </div>

                {/* nav links */}
                <div className="flex-1 overflow-y-auto py-8 space-y-4">
                  {navItems.map((item, idx) => {
                    const isActive = pathname === item.href;

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.07 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={`flex items-center px-4 py-4 rounded-2xl border transition-all duration-300 group
                            ${isActive
                              ? "bg-white/10 border-white/30"
                              : "border-transparent hover:bg-white/10 hover:border-white/20"
                            }`}
                        >
                          <span
                            className={`mr-4 text-xl transition duration-300
                            ${isActive ? "text-[#c8b390]" : "text-[#c8b390] group-hover:scale-110"}
                          `}
                          >
                            {item.icon}
                          </span>

                          <span
                            className={`text-lg font-medium transition duration-300
                            ${isActive ? "text-[#c8b390]" : "text-white group-hover:text-[#c8b390]"}`}
                          >
                            {item.name}
                          </span>

                          <motion.div
                            className={`ml-auto transition-opacity duration-300
                              ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                            whileHover={{ x: 5 }}
                          >
                            <MdArrowOutward size={18} />
                          </motion.div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* footer */}
                <div className="pt-8 border-t border-white/10">
                  <Link
                    href="/book-session"
                    className="block w-full text-center rounded-2xl py-4 px-6 font-semibold bg-gradient-to-r from-[#c8b390] to-[#9a8368] text-white shadow-xl hover:shadow-[#c8b390]/25 transition-all"
                    onClick={closeMenu}
                  >
                    Book a Session
                  </Link>

                  <div className="mt-6 text-center text-white/70 text-sm">
                    <p>+91 8882758944</p>
                  </div>

                  <div className="mt-6 flex justify-center space-x-6">
                    {socialIcons.map((Icon, idx) => (
                      <motion.a
                        key={idx}
                        href="#"
                        whileHover={{ y: -2, scale: 1.2 }}
                        className="text-white/80 hover:text-[#c8b390] transition p-2"
                      >
                        <Icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
