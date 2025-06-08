"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const HeroText = () => {
  return (
    <div className="relative z-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-center gap-2 mb-4"
      >
        <Camera className="w-6 h-6" />
        <span className="text-sm uppercase tracking-widest">Shuttersaga</span>
      </motion.div>

      <motion.h1
        className={`${greatVibes.className} text-7xl md:text-9xl lg:text-[12rem] leading-none mb-8`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Capturing <br />
        <span className="text-amber-300">Timeless</span> <br />
        Stories
      </motion.h1>

      <motion.p
        className="max-w-md text-lg text-gray-200"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Hi, I'm Aarav Verma, a visual storyteller based in India. Through my lens,
        I capture the essence of life's most precious moments.
      </motion.p>
    </div>
  );
};