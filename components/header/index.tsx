"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
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
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/" className="group">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-[#c8b390] bg-clip-text text-transparent group-hover:opacity-90 transition">
                  ShotSquare
                </span>
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
                    href="tel:+918800007740"
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
                className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 backdrop-blur-lg rounded-full shadow-xl"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Animated Hamburger */}
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="relative w-5 h-4"
                >
                  <motion.span
                    className="absolute block w-full h-0.5 bg-white rounded-full"
                    variants={{
                      closed: { top: 0, rotate: 0 },
                      open: { top: "50%", rotate: 45 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute block w-full h-0.5 bg-white rounded-full"
                    variants={{
                      closed: { top: "50%", opacity: 1 },
                      open: { top: "50%", opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute block w-full h-0.5 bg-white rounded-full"
                    variants={{
                      closed: { top: "100%", rotate: 0 },
                      open: { top: "50%", rotate: -45 },
                    }}
                    transition={{ duration: 0.3 }}
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
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-[#c8b390] bg-clip-text text-transparent">
                    Shotsquare
                  </span>

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
                    <p>+91 8800007740</p>
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
