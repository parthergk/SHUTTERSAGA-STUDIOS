"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const Photos = () => {
  const container = useRef();

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  // Transform for first div moving left
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -150]); // Adjust as needed

  // Transform for second div moving right
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 100]); // Adjust as needed

  // Array of image sources for the first group
  const leftImages = [
    '/image/img/g.jpg',
    '/image/img/gg.jpg',
    '/image/img/ss.jpg',
    '/image/img/ssss.jpg',
    '/image/img/ttt.jpg',
  ];

  // Array of image sources for the second group
  const rightImages = [
    '/image/img/dd.jpg',
    '/image/img/ttt.jpg',
    '/image/img/sss.jpg',
    '/image/img/g.jpg',
  ];

  return (
    <div ref={container} className='overflow-hidden relative z-10 w-full bg-EerieBlack px-2 sm:px-3 lg:px-5 pt-56'>
      <motion.div
        className='flex justify-center gap-4 py-2'
        style={{ x: xLeft }} // Apply left transform
      >
        {leftImages.map((src, index) => (
          <Image 
            key={index} 
            alt={`img-${index}`} 
            src={src} 
            width={380} 
            height={253.36} 
            className='h-3/4 w-3/4 md:w-full md:h-full' 
          />
        ))}
      </motion.div>

      <motion.div
        className='flex justify-center gap-4 py-2'
        style={{ x: xRight }} // Apply right transform
      >
        {rightImages.map((src, index) => (
          <Image 
            key={index} 
            alt={`img-${index}`} 
            src={src} 
            width={380} 
            height={253.36} 
            className='h-3/4 w-3/4 md:w-full md:h-full' 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Photos;
