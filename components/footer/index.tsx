"use client";
import DynamicButton from "@/components/common/button";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="container mx-auto bg-primary-brown text-white px-5 py-9 rounded-t-xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 items-center justify-between">
        <div
          className="text-gray-50 text-sm lg:col-span-2 md:col-span-1"
          data-aos="fade-up"
        >
          <h2 className="text-xl lg:text-5xl text-gray-500 leading-tight mt-4 md:text-start text-center">
            Lets <span className="font-medium text-white">Discuse</span> your
            vision
            <div className="flex items-center justify-center md:justify-start mt-3">
              <DynamicButton
                textColor="text-white"
                bgColor="bg-transparent border border-white/50"
                hoverTextColor="group-hover:text-black"
                hoverBgColor="bg-white"
              />
              <span className="font-medium text-white ms-3"> with us</span>
            </div>
          </h2>
        </div>

        <div
          className="lg:col-span-1  md:text-end text-center"
          data-aos="fade-up"
        >
          <div className="lg:max-w-[420] text-gray-300">
            <div className="space-y-2">
              <p className="">456 Oak Avenue,</p>
              <p className="">Cityville, MA 56789,</p>
              <p className="">United States</p>
              <p className="">+1 (555) 125-4567</p>
              <p className="">mk@hello.com</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="md:mt-12  border-t border-gray-200 mt-8 pt-8">
        <div className="flex flex-col md:flex-row  md:justify-between justify-center items-center gap-5">
          <div className="">
            <h2 className="text-2xl font-bold text-white">MKGraphY</h2>
          </div>

          <div className="hidden gap-8 lg:block">
            <div className="flex gap-5 text-gray-200">
              <Link
                href="/about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/projects"
                className="hover:text-white transition-colors duration-200"
              >
                Project
              </Link>
              <Link
                href="/services"
                className="hover:text-white transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
          <div className="">
            <p className="text-sm text-gray-200 md:mt-0">
              ©mk 2025. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
