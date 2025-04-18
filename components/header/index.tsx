"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,   
  FaLayerGroup,
} from "react-icons/fa";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdArrowOutward, MdDashboard } from "react-icons/md";
import { GiFilmProjector } from "react-icons/gi";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [mobileDropdown, setMobileDropdown] = useState(false);

  // const toggleMobileDropdown = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setMobileDropdown(!mobileDropdown);
  // };

  const closeMenu = () => {
    setIsOpen(false);
    // setMobileDropdown(false);
  };

  const navItems: NavItem[] = [
    { name: "Home", icon: <MdDashboard />, href: "/" },
    { name: "Studio", icon: <FaLayerGroup />, href: "/studio" },
    { name: "Projects", icon: <GiFilmProjector />, href: "/projects" },
    { name: "Contact", icon: <FaPhoneVolume />, href: "/contact" },
  ];

  const socialIcons = [FaInstagram, FaFacebook, FaTwitter, FaPinterest];

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-30 md:pt-16 pt-8 text-white ">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 items-center px-5 ">
            <div className=" ">
              <Link href="/" className="flex items-center">
              <span className="text-xl font-medium">ShortSquare </span></Link>
            </div>

            <div className="">
              <nav className="lg:bg-white/50 lg:backdrop-blur-md lg:shadow-md w-auto md:px-6 px-0 py-4 rounded-full flex items-center justify-between md:transform">
                {/* Desktop Navigation */}
                <div className="hidden mx-auto lg:flex items-center space-x-4 text-primary-gunmetal">
                  <Link href={"/"} className="font-bold hover:text-white/80">
                    Home
                  </Link>

                  <Link
                    href={"/studio"}
                    className="border-r border-l px-3 font-bold hover:text-white/80"
                  >
                    Studio
                  </Link>
                  <Link
                    href="/projects"
                    className="border-r border-white pr-3 font-bold hover:text-white/80"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="font-bold hover:text-white/80"
                  >
                    Contact
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex justify-end text-end w-full lg:hidden md:pr-5">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    className="relative w-10 h-10 flex items-center justify-center"
                  >
                    <motion.div
                      initial={false}
                      animate={isOpen ? "open" : "closed"}
                      className="relative w-6 h-5"
                    >
                      <motion.span
                        className="absolute block w-full h-0.5 bg-white rounded-full"
                        variants={{
                          closed: { top: "0%", rotate: 0 },
                          open: { top: "50%", rotate: 45 },
                        }}
                      />
                      <motion.span
                        className="absolute block w-full h-0.5 bg-white rounded-full"
                        variants={{
                          closed: { top: "50%", opacity: 1 },
                          open: { top: "50%", opacity: 0 },
                        }}
                      />
                      <motion.span
                        className="absolute block w-full h-0.5 bg-white rounded-full"
                        variants={{
                          closed: { top: "100%", rotate: 0 },
                          open: { top: "50%", rotate: -45 },
                        }}
                      />
                    </motion.div>
                  </button>
                </div>
              </nav>
            </div>

            {/* CTA Buttons */}
            <div className="lg:block hidden">
              <div className="group space-x-2 relative w-auto text-end flex justify-end">
                <Link
                  href="#"
                  className="relative rounded-full font-semibold px-6 py-4 shadow-lg overflow-hidden text-primary-gunmetal bg-white/70 backdrop-blur-md transition-all duration-500 ease-in-out flex items-center gap-2 group"
                >
                  <span className="absolute inset-0 bg-primary-brown transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative text-sm z-10 flex items-center gap-2 uppercase group-hover:text-white">
                    Back A Call
                  </span>
                </Link>
                <Link
                  href="#"
                  className="relative rounded-full font-semibold p-4 shadow-lg overflow-hidden text-black bg-white transition-all duration-500 ease-in-out flex items-center gap-2 group"
                >
                  <MdArrowOutward size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="relative h-full w-4/5 max-w-xs bg-white dark:bg-black  shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full p-5">
                {/* Header with logo and close button */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <motion.div
                      initial={{ scale: 0.8, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl text-primary-gunmetal dark:text-white"
                    >
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-lg font-medium text-primary-gunmetal dark:text-white"
                    >
                      ShortSquare 
                    </motion.span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-primary-umber transition-colors"
                    aria-label="Close menu"
                    onClick={closeMenu}
                  >
                    <FaTimes className="text-primary-gunmetal dark:text-white" />
                  </motion.button>
                </div>

                {/* Navigation links with staggered animation */}
                <motion.div
                  className="flex-1 overflow-y-auto py-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <nav className="space-y-4">
                    {navItems.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center px-3 py-3 text-primary-gunmetal dark:text-white hover:text-primary-umber rounded-lg transition-colors group"
                          onClick={closeMenu}
                        >
                          <span className="mr-3 text-lg text-primary-gunmetal dark:text-white group-hover:text-primary-umber">
                            {item.icon}
                          </span>
                          <span className="font-medium">{item.name}</span>
                      
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </motion.div>

                {/* Footer with CTA button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-4 border-t border-gray-100"
                >
                  <Link
                    href="/book-session"
                    className="block w-full text-center bg-gradient-to-r from-[#22333b] to-[#5d4f3f] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
                    onClick={closeMenu}
                  >
                    Book a Session
                  </Link>

                  {/* Social links */}
                  <div className="flex justify-center space-x-4 mt-4">
                    {socialIcons.map((Icon, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ y: -2 }}
                        href="#"
                        className="text-primary-gunmetal dark:text-white hover:text-blue-600 transition-colors"
                        aria-label={`Social media link ${i}`}
                      >
                        <Icon />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
