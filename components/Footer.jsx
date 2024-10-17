"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const animation = () => {
    // Check if both refs are defined before animating
    if (firstText.current && secondText.current) {
      gsap.set(firstText.current, { xPercent });
      gsap.set(secondText.current, { xPercent });
      xPercent += 0.1 * direction;

      // Reset when xPercent reaches -100% to create a continuous loop
      if (xPercent <= -100) {
        xPercent = 0;
      }
    }

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    requestAnimationFrame(animation);
    return () => cancelAnimationFrame(animation); // Cleanup on unmount
  }, []);

  return (
    <div className="relative z-10 w-full bg-EerieBlack px-2 sm:px-3 lg:px-5 pt-56 overflow-hidden">
      <div id="contact" className="w-full h-full">
        <h2 className="text-5xl sm:text-6xl md:text-7xl mb-2 md:mb-3">
          Together, We’ll <br /> Frame Your Love Story
        </h2>
        <p className="text-base sm:text-xl md:text-2xl lg:text-2xl font-normal w-full tracking-wider">
          Your wedding day is one of the most treasured moments in your life, and
          every detail deserves to be captured with the utmost care. At our
          studio, we specialize in narrating your unique love story through
          exquisite, timeless photography. From intimate rituals to grand
          celebrations, we are dedicated to preserving the emotions and memories
          that matter most to you. Allow us to transform your special day into a
          stunning collection of images that you and your loved ones will
          cherish for a lifetime.
        </p>
      </div>

      <div className="w-full mt-5 flex flex-col-reverse md:flex-row items-end gap-2 md:justify-between md:items-center">
        <ul className="flex gap-5 text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wider font-medium">
          <li key="L">
            <a href="/">LinkedIn</a>
          </li>
          <li key="I">
            <a href="/">Instagram</a>
          </li>
          <li key="T">
            <a href="/">Twitter</a>
          </li>
          <li key="F">
            <a href="/">Facebook</a>
          </li>
        </ul>
        <span className="text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wider font-medium">
          studiodream@gmail.com
        </span>
      </div>

      {/* Animated Scrolling Text */}
      <div className="w-full text-[2.8rem] sm:text-[5rem] md:text-[6rem] lg:text-9xl xl:text-12xl text-center font-bold">
        <div className="whitespace-nowrap relative overflow-hidden">
          <p ref={firstText} className="relative sm:pl-32 lg:pl-28">
            STUDIO DREAM
          </p>
          <p ref={secondText} className="absolute left-full top-0">
            STUDIO DREAM
          </p>
        </div>
        <div className="border w-full"></div>
      </div>

      <div className="w-full py-5">
        <ul className="w-full flex justify-between text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wider font-medium">
          <li key="C" className="w-full md:w-auto text-center md:text-start">
            COPYRIGHT SHUTTERSAGA STUDIOS
          </li>
          <li key="P" className="hidden lg:block">Privacy Policy</li>
          <li key="D" className="hidden md:block">Design By Parther</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
