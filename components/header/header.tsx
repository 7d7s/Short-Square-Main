"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {
  // FaCamera,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
  // FaLayerGroup,
} from "react-icons/fa";
import Link from "next/link";
// import { FaPhoneVolume } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
// import { GiFilmProjector } from "react-icons/gi";
import Image from "next/image";

interface NavItem {
  name: string;
  icon?: React.ReactNode;
  href: string;
  subItems?: NavItem[];
}

export default function NavigationBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  const toggleDesktopDropdown = (menu: string) => {
    setDesktopDropdown(desktopDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  // Check if a nav item is active
  const isActive = (href: string) => {
    return pathname === href || 
           (href !== "/" && pathname.startsWith(href));
  };

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { 
      name: "Projects",
      href: "/projects",
      subItems: [
        { name: "All Projects", href: "/projects" },
        { name: "Project Details", href: "/project-details" }
      ]
    },
    { 
      name: "Pages", 
      href: "/about",
      subItems: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "FAQ", href: "/faq" },
        { name: "404 Page", href: "/404" }
      ]
    },
    { name: "Contact", href: "/contact" },
  ];

  const socialIcons = [FaInstagram, FaFacebook, FaTwitter, FaPinterest];

  return (
    <>
      <div className="container mx-auto p-5 bg-white">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 items-center md:px-5">
          <div className="flex items-center">
            <Image 
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744354785/logo-interse_q3cklf.png"
              alt="d" 
              width={1000} 
              height={1000}
              className="w-2/4"
            />
          </div>

          <div className="lg:col-span-2">
            <nav className="md:transform">
              {/* Desktop Navigation */}
              <div className="text-sm hidden lg:flex items-center justify-center space-x-4 text-black">
                <Link 
                  href={"/"} 
                  className={`border-b-2 px-3 pb-2 ${isActive("/") ? "border-[#255C56] text-[#255C56] font-medium" : "border-transparent hover:border-[#255C56] hover:text-[#255C56]"}`}
                >
                  Home
                </Link>

                <Link
                  href={"/services"}
                  className={`border-b-2 px-3 pb-2 ${isActive("/services") ? "border-[#255C56] text-[#255C56] font-medium" : "border-transparent hover:border-[#255C56] hover:text-[#255C56]"}`}
                >
                  Services
                </Link>
                
                {/* Projects Dropdown */}
                <div 
                  className="relative group"
                  onMouseEnter={() => toggleDesktopDropdown("projects")}
                  onMouseLeave={() => toggleDesktopDropdown("projects")}
                >
                  <button
                    className={`border-b-2 px-3 pb-2 flex items-center ${isActive("/projects") || isActive("/project-details") ? "border-[#255C56] text-[#255C56] font-medium" : "border-transparent hover:border-[#255C56] hover:text-[#255C56]"}`}
                  >
                    Projects &nbsp; 
                    {desktopDropdown === "projects" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                  </button>
                  {desktopDropdown === "projects" && (
                    <div className="absolute left-0 p-2 w-48 bg-white shadow-lg rounded-md py-1 z-50">
                      <Link 
                        href="/projects" 
                        className={`block px-4 py-2 text-sm ${isActive("/projects") ? "text-[#255C56] bg-gray-50 font-medium" : "text-gray-700 hover:bg-[#255C56] hover:text-white"}`}
                      >
                        All Projects
                      </Link>
                      <Link 
                        href="/project-details" 
                        className={`block px-4 py-2 text-sm ${isActive("/project-details") ? "text-[#255C56] bg-gray-50 font-medium" : "text-gray-700 hover:bg-[#255C56] hover:text-white"}`}
                      >
                        Project Details
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Pages Dropdown */}
                <div 
                  className="relative group"
                  onMouseEnter={() => toggleDesktopDropdown("pages")}
                  onMouseLeave={() => toggleDesktopDropdown("pages")}
                >
                  <button
                    className={`border-b-2 px-3 pb-2 flex items-center ${isActive("/about") || isActive("/team") || isActive("/faq") || isActive("/404") ? "border-[#255C56] text-[#255C56] font-medium" : "border-transparent hover:border-[#255C56] hover:text-[#255C56]"}`}
                  >
                    Pages &nbsp; 
                    {desktopDropdown === "pages" ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                  </button>
                  {desktopDropdown === "pages" && (
                    <div className="absolute left-0 p-2 w-48 bg-white shadow-lg rounded-md py-1 z-50">
                      <Link 
                        href="/about" 
                        className={`block px-4 py-2 text-sm ${isActive("/about") ? "text-[#255C56] bg-gray-50 font-medium" : "text-gray-700 hover:bg-[#255C56] hover:text-white"}`}
                      >
                        About Us
                      </Link>
                      <Link 
                        href="/team" 
                        className={`block px-4 py-2 text-sm ${isActive("/team") ? "text-[#255C56] bg-gray-50 font-medium" : "text-gray-700 hover:bg-[#255C56] hover:text-white"}`}
                      >
                        Our Team
                      </Link>
                      <Link 
                        href="/faq" 
                        className={`block px-4 py-2 text-sm ${isActive("/faq") ? "text-[#255C56] bg-gray-50 font-medium" : "text-gray-700 hover:bg-[#255C56] hover:text-white"}`}
                      >
                        FAQ
                      </Link>
                      <Link 
                        href="/404" 
                        className={`block px-4 py-2 text-sm ${isActive("/404") ? "text-[#255C56] bg-gray-50 font-medium" : "text-gray-700 hover:bg-[#255C56] hover:text-white"}`}
                      >
                        404 Page
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link
                  href="/blogs"
                  className={`border-b-2 px-3 pb-2 ${isActive("/blogs") ? "border-[#255C56] text-[#255C56] font-medium" : "border-transparent hover:border-[#255C56] hover:text-[#255C56]"}`}
                >
                  Blogs
                </Link>
                <Link
                  href="/contact"
                  className={`border-b-2 px-3 pb-2 ${isActive("/contact") ? "border-[#255C56] text-[#255C56] font-medium" : "border-transparent hover:border-[#255C56] hover:text-[#255C56]"}`}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex justify-end text-end w-full lg:hidden">
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
                      className="absolute block w-full h-0.5 bg-black rounded-full"
                      variants={{
                        closed: { top: "0%", rotate: 0 },
                        open: { top: "50%", rotate: 45 },
                      }}
                    />
                    <motion.span
                      className="absolute block w-full h-0.5 bg-black rounded-full"
                      variants={{
                        closed: { top: "50%", opacity: 1 },
                        open: { top: "50%", opacity: 0 },
                      }}
                    />
                    <motion.span
                      className="absolute block w-full h-0.5 bg-black rounded-full"
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
                href="/contact"
                className="relative bg-black hover:bg-[#255C56] hover:text-white font-semibold px-6 py-4 shadow-lg overflow-hidden transition-all duration-500 ease-in-out flex items-center"
              >
                Contact us &nbsp;  <MdArrowOutward size={20} />
              </Link>
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
              className="relative h-full w-4/5 max-w-xs bg-[#d2d2d2] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full p-5">
                {/* Header with logo and close button */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-lg font-medium text-gray-800"
                    >
                       <Image 
              src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744354785/logo-interse_q3cklf.png"
              alt="d" 
              width={1000} 
              height={1000}
              className="w-2/4"
            />
                    </motion.span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-[#255C56] transition-colors"
                    aria-label="Close menu"
                    onClick={closeMenu}
                  >
                    <FaTimes className="text-white" />
                  </motion.button>
                </div>

                {/* Navigation links with staggered animation */}
                <motion.div
                  className="flex-1 overflow-y-auto py-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <nav className="space-y-2">
                    {navItems.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        {item.subItems ? (
                          <div className="flex flex-col">
                            <button
                              onClick={() => toggleMobileDropdown(item.name)}
                              className={`flex items-center justify-between px-3 py-3 rounded-lg transition-colors group w-full ${
                                isActive(item.href) || 
                                item.subItems.some(sub => isActive(sub.href))
                                  ? "text-[#255C56] bg-gray-50 font-medium"
                                  : "text-gray-700 hover:text-primary-umber"
                              }`}
                            >
                              <div className="flex items-center">
                                <span className={`mr-3 text-lg ${
                                  isActive(item.href) || 
                                  item.subItems.some(sub => isActive(sub.href))
                                    ? "text-[#255C56]"
                                    : "text-black group-hover:text-red-500"
                                }`}>
                                  {item.icon}
                                </span>
                                <span>{item.name}</span>
                              </div>
                              {mobileDropdown === item.name ? (
                                <MdKeyboardArrowUp />
                              ) : (
                                <MdKeyboardArrowDown />
                              )}
                            </button>
                            {mobileDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-10"
                              >
                                {item.subItems.map((subItem, j) => (
                                  <Link
                                    key={j}
                                    href={subItem.href}
                                    className={`block px-3 py-2 rounded-lg transition-colors ${
                                      isActive(subItem.href)
                                        ? "text-[#255C56] bg-gray-50 font-medium"
                                        : "text-gray-600 hover:text-primary-umber"
                                    }`}
                                    onClick={closeMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={`flex items-center px-3 py-3 rounded-lg transition-colors group ${
                              isActive(item.href)
                                ? "text-[#255C56] bg-gray-50 font-medium"
                                : "text-gray-700 hover:text-primary-umber"
                            }`}
                            onClick={closeMenu}
                          >
                            <span className={`mr-3 text-lg ${
                              isActive(item.href)
                                ? "text-[#255C56]"
                                : "text-primary-gunmetal group-hover:text-primary-umber"
                            }`}>
                              {item.icon}
                            </span>
                            <span>{item.name}</span>
                          </Link>
                        )}
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
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-[#22333b] to-[#5d4f3f] text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
                    onClick={closeMenu}
                  >
                    Contact Us
                  </Link>

                  {/* Social links */}
                  <div className="flex justify-center space-x-4 mt-4">
                    {socialIcons.map((Icon, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ y: -2 }}
                        href="#"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
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