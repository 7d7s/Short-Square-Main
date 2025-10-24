"use client";
import React from "react";
import CardSlider from "@/components/common/workCards";
import DynamicButton from "@/components/common/button";

const Work = () => {
  return (
    <section className="container mx-auto  text-white py-16">
      <div className="grid grid-cols-1 md:col-span-2 md:grid-cols-2 gap-10 items-center">
        <div
          className="dark:text-white text-black text-sm lg:col-span-1 md:col-span-2"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-medium">Work</h3>

          <h2 className="text-xl md:text-2xl lg:text-5xl text-gray-500 leading-tight mt-4">
            <span className="font-medium dark:text-white text-black">Capturing </span>
             {"Life’s"} Most Precious Moments with Artistry and Soul.
          </h2>
        </div>

        <div
          className="flex justify-end lg:col-span-1 md:col-span-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div>
            <p className="text-md leading-relaxed lg:max-w-[420] dark:text-white text-black">
            Every frame we capture is a blend of heartfelt emotion,
    timeless beauty, and a touch of magic. Our passion lies in preserving those fleeting moments that define
    love, joy, and the human experience — so you can relive them forever.
            </p>
            <div className="flex items-center mt-5">
            <DynamicButton
              textColor="dark:text-white text-black"
              bgColor="bg-transparent border dark:border-white/50 border-black"
              hoverTextColor="dark:group-hover:text-black group-hover:text-white"
              hoverBgColor="dark:bg-white bg-black"
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
