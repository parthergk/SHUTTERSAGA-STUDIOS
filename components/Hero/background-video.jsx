"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundVideo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-screen h-screen fixed top-0 left-0 z-0"
    >
      <div className="absolute inset-0 bg-black/30 z-10" />
      <video
        className="w-screen h-screen object-cover"
        width="1280"
        height="720"
        playsInline
        autoPlay
        loop
        muted
        preload="none"
      >
        <source src="/video/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};