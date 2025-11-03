"use client";
import DynamicButton from "@/components/common/button";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="container mx-auto bg-primary-brown text-white px-5 py-10 rounded-t-xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 items-center justify-between" data-aos="fade-up">
        {/* Left Section */}
        <div className="text-gray-50 text-sm lg:col-span-2 md:col-span-1">
          <h2 className="text-xl md:text-3xl lg:text-5xl text-gray-400 leading-tight text-center md:text-start">
            Let&apos;s <span className="font-medium text-white">Discuss</span> your vision
          </h2>
          <div className="flex items-center justify-center md:justify-start mt-4">
            <DynamicButton
              textColor="text-white"
              bgColor="bg-transparent border dark:border-white/50 border-white group-hover:border-white dark:group-hover:border-black"
              hoverTextColor="dark:group-hover:text-white group-hover:text-black"
              hoverBgColor="dark:bg-black bg-white"
            />
            <span className="font-medium text-white ml-3">with us</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-1 md:text-end text-center">
          <div className="lg:max-w-[420px] text-gray-300">
            <div className="space-y-1 md:space-y-2">
              <p>Shotsquare, I-102, Second Floor, Block I,</p>
              <p>Kirti Nagar, Delhi, 110015</p>
              <p>+91 8800007740</p>
              <p>support@shotsquare.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <footer className="md:mt-12 border-t border-white/20 mt-6 pt-6">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center gap-5">
          <h2 className="text-2xl font-bold text-white">ShotsSquare</h2>

          <div className="hidden lg:flex gap-8 text-gray-200">
            <Link href="/studio" className="hover:text-white transition-colors duration-200">Studio</Link>
            <Link href="/projects" className="hover:text-white transition-colors duration-200">Project</Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link>
          </div>

          <p className="text-sm text-gray-200 text-center md:text-right">
            &copy; {new Date().getFullYear()} ShotsSquare. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
