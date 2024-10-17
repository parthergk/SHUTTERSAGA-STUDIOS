import React from "react";
import { Great_Vibes } from "next/font/google";

// Importing the Great Vibes font
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className=" w-full h-screen ">
      {/* <Nav /> */}
      <div className=" w-screen h-screen fixed top-0 left-0 z-0">
        {/* Background video */}
        <video className=" w-screen h-screen object-cover" width="1280" height="720" playsInline autoPlay loop muted preload="none">
          <source src="/video/mainvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        id="home"
        className=" z-10 absolute w-full flex flex-col justify-between h-screen px-2 sm:px-3 lg:px-5 pt-16 pb-8 "
      >
        <div className=" w-full flex justify-end">
          <p className="tracking-wider text-right text-base sm:text-lg md:text-xl lg:text-2xl w-[405px] sm:w-[490px] lg:w-[547px] ">
            HI, AARAV VERMA I’M A PHOTOGRAPHER IN IND AND THE SHUTTERSAGA
            CAPTURING LIFE'S MAGICAL MOMENTS ONE CLICK <br /> AT A TIME.
          </p>
        </div>

        <div>
          {/* Apply the Great Vibes font only to this h1 */}
          <h1 className={`${greatVibes.className} font-normal text-6.5xl sm:text-8.5xl lg:text-12xl w-[22rem] sm:w-[40rem] lg:w-[55rem] leading-tight`}>
            Capturing <br /> Best Moments
          </h1>
          <div className=" flex flex-col gap-3 bottom-5">
            <div className=" w-full flex justify-center sm:justify-between text-base sm:text-lg md:text-xl lg:text-2xl">
              <span className=" hidden sm:block">AARAV VERMA PHOTOGRAPHY</span>
              <span>
                Scroll to Explore
              </span>
            </div>
            <div className=" border border-Beige w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;