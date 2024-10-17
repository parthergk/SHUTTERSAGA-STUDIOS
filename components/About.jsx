import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" w-full h-[2100px] sm:h-[2400px] md:h-[2100px]">
      <Image
        src="/image/gradient.png"
        alt="gradient"
        height={2431}
        width={1280}
        className=" absolute top-0 z-0 w-full h-[3100px]"
      />

      <div  className="px-2 sm:px-3 lg:px-5 absolute z-10 w-full pt-96 ">
        <div id="about" className="grid grid-cols-1 gap-y-40 md:grid-cols-2 md:grid-rows-2 text-center">
          <div className="text-7.0xl sm:text-8.5xl lg:text-11xl xl:text-12xl font-light text-left">
            25+
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-wide">
              Years of Experience
            </span>
          </div>
          <div className="text-7.0xl sm:text-8.5xl lg:text-11xl xl:text-12xl font-light text-right">
            700K
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-wide">Photo Session</span>
          </div>
          <div className="text-7.0xl sm:text-8.5xl lg:text-11xl xl:text-12xl font-light text-left">
            3.2M
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-wide">
              Online Followers
            </span>
          </div>
          <div className="text-7.0xl sm:text-8.5xl lg:text-11xl xl:text-12xl font-light text-right">
            16+
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-wide">
              Awards and Recognitions
            </span>
          </div>
        </div>

        <div className=" grid grid-cols-1  md:grid-cols-2 mt-48">
          <div className="sm:col-span-2 order-2 md:order-1">
            <span className="text-base sm:text-xl md:text-1.5xl lg:text-2xl font-normal tracking-wider">Hi, my name is</span>
            <h2 className=" text-5xl sm:text-6xl md:text-7xl mt-2 md:mt-3">Aarav Verma</h2>
          </div>

          <div className="order-1 md:order-2 mb-6 md:mt-6">
            <Image
              src="/image/about.png"
              alt="About"
              height={1315}
              width={645}
              className="w-full"
            />
          </div>

          <div className="order-3 md:order-3 mt-3 md:mt-6 min-w-[356px] ml-0 md:ml-5 lg:ml-10 ">
            <p className="text-base sm:text-xl md:text-1.5xl lg:text-2xl font-normal w-full tracking-wider">A passionate photographer dedicated to capturing the beauty of life’s most special moments. From intimate weddings to grand celebrations, my goal is to tell your story through authentic, timeless images that you’ll cherish forever.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;