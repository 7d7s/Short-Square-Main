"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden rounded-t-[3rem] mt-16 border-t border-white/[0.05]">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-golden opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="inline-block mb-8 group focus-visible:outline-none">
              <div className="flex items-center gap-3">
                <div className="relative w-[32px] h-[32px] flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src="/image/logo.png"
                    alt="ShotSquare Logo"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
                <span className="text-xl font-medium tracking-wider text-white transition-colors duration-500 group-hover:text-golden">
                  ShotSquare
                </span>
              </div>
            </Link>
            <p className="text-white/40 font-light max-w-sm leading-relaxed mb-10 text-[15px]">
              Elevating visual storytelling through premium photography and cinematic direction. Based in New Delhi, working globally.
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: <FiInstagram size={18} />, href: "https://www.instagram.com/shortsquare.studio", name: "Instagram" },
                { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/company/shortsquare", name: "LinkedIn" },
                { icon: <FiTwitter size={18} />, href: "https://twitter.com/shortsquare", name: "Twitter" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:scale-105 transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold mb-8">Navigation</h4>
            <ul className="flex flex-col gap-5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Studio', href: '/studio' },
                { label: 'Projects', href: '/projects' },
                { label: 'Journal', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-white transition-colors duration-300 relative group inline-flex items-center text-[15px] font-light tracking-wide focus-visible:outline-none focus-visible:text-white"
                  >
                    <span>{label}</span>
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-golden transition-all duration-500 group-hover:w-full group-focus-visible:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold mb-8">Contact & Legal</h4>
            <div className="space-y-5 text-white/60 font-light text-[15px] tracking-wide">
              <p className="hover:text-white transition-colors duration-300 w-fit cursor-pointer">
                <a href="mailto:info@shortsquare.com" className="focus-visible:outline-none focus-visible:text-white">info@shortsquare.com</a>
              </p>
              <p className="hover:text-white transition-colors duration-300 w-fit cursor-pointer">
                <a href="tel:+918882758944" className="focus-visible:outline-none focus-visible:text-white">+91 888 275 8944</a>
              </p>
              <div className="pt-6 space-y-2.5">
                <p className="text-white/20 uppercase text-[9px] tracking-[0.25em] font-semibold mb-3">Studio Location</p>
                <p>Plot No 88, 3rd Floor, Kh No 12/02/1</p>
                <p>Hari Vihar, Kakrola, South West Delhi</p>
                <p>New Delhi, 110078</p>
                <p className="pt-4 text-white/20 text-[9px] tracking-[0.2em] uppercase font-semibold">CIN: U73100DL2026PTC461849</p>
              </div>
            </div>
          </div>

        </div>

        {/* Massive Text & Footer Bottom */}
        <div className="flex flex-col items-center border-t border-white/[0.05] pt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative overflow-hidden flex justify-center py-8 md:py-12 select-none pointer-events-none"
          >
            <h1 className="text-[11vw] md:text-[12vw] xl:text-[11.5vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-black/10">
              SHOTSQUARE
            </h1>
          </motion.div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-8 md:mt-12 text-[10px] md:text-[11px] text-white/40 font-light uppercase tracking-[0.2em]">
            <p>&copy; {currentYear} ShotSquare Photography</p>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:text-white">Privacy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:text-white">Terms</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:text-white">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
