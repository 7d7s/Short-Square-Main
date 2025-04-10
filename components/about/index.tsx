import React from "react";
// import Link from "next/link";
import DynamicButton from "../common/button";

const AboutUs = () => {
  return (
    <section className="container mx-auto  text-white py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 ">
        <div
          className="text-gray-50 text-sm md:col-span-2 lg:col-span-1 flex flex-col justify-between items-start"
          data-aos="fade-up"
        >
          <div>
            {/* <p className="mb-2">(01)</p> */}
            <h3 className="text-2xl font-medium pb-2 ">About Us</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            We ardently strive to encapsulate life most precious moments,
            weaving a tapestry of artistry and a hint of enchanting magic, with
            the timeless essence of the human experience.
          </p>
        </div>

        <div className="md:col-span-2 " data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl  md:text-2xl lg:text-5xl text-gray-500 leading-tight">
            <span className="text-white">Photography</span> is driven by a deep
            passion for
            <span className="text-white"> capturing life</span> most
            <span className="text-white"> precious moments</span> with artistry
            and a touch of magic
          </h2>
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
    </section>
  );
};

export default AboutUs;
