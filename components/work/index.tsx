"use client";
import React from "react";
import CardSlider from "./cards";
import DynamicButton from "@/components/common/button";

const Work = () => {
  return (
    <section className="container mx-auto  text-white py-20">
      <div className="grid grid-cols-1 md:col-span-2 md:grid-cols-2 gap-10 items-center">
        <div
          className="text-gray-50 text-sm lg:col-span-1 md:col-span-2"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-medium">Work</h3>

          <h2 className="text-xl md:text-2xl lg:text-5xl text-gray-500 leading-tight mt-4">
            <span className="font-medium text-white">Photography</span> is
            driven by a deep passion for
            <span className="font-medium text-white"> capturing life</span> most
            <span className="font-medium text-white">
              {" "}
              precious moments
            </span>{" "}
            with artistry and a touch of magic
          </h2>
        </div>

        <div
          className="flex justify-end lg:col-span-1 md:col-span-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div>
            <p className="text-md leading-relaxed lg:max-w-[420] text-gray-400">
              We ardently strive to encapsulate life most precious moments,
              weaving a tapestry of artistry and a hint of enchanting magic,
              with the timeless essence of the human experience.
            </p>
            <div className="flex items-center mt-5">
              <DynamicButton
                textColor="text-white"
                bgColor="bg-transparent border border-white/50"
                hoverTextColor="group-hover:text-black"
                hoverBgColor="bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      <CardSlider />
    </section>
  );
};

export default Work;
