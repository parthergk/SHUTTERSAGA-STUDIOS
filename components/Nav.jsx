"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Dynamically handle screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust based on your needs
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNab = () => {
    setActive(!active);
  };

  // Scroll to specific section onClick
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(false); // Close the menu after clicking
    }
  };

  return (
    <nav className=" flex justify-between w-full p-2 sm:p-3 lg:p-5 fixed z-20">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium">
        SHUTTERSAGA STUDIOS
      </h1>
      <div
        className={`cursor-pointer relative z-50 flex flex-col ${
          active ? "justify-center" : "justify-between"
        } items-center py-2`}
        onClick={handleNab}
      >
        {active ? (
          <>
            <div className="border w-11 rotate-45"></div>
            <div className="border w-11 -rotate-45"></div>
          </>
        ) : (
          <>
            <div className="border w-10"></div>
            <div className="border w-10"></div>
          </>
        )}
      </div>

      {/* Motion div for the animated navigation menu */}
      <motion.div
        className="absolute z-0 right-0 top-0 bg-EerieBlack p-5 h-screen w-screen lg:w-[550px]"
        initial={{ x: "100%" }}
        animate={{ x: active ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <ul className="w-full h-full flex justify-center items-center flex-col gap-5 md:gap-7 text-6.5xl font-light tracking-widest">
          {["home", "about", "album", "services", "contact"].map((section) => (
            <li
              key={section}
              className="cursor-pointer"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Nav;
