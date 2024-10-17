"use client"
import Image from "next/image";
import React from "react";
import {motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    image: "/image/ccc.jpg",
    review:
      "Finnegan is an exceptional photographer who truly knows how to capture the essence of every moment. His attention to detail and artistic eye turned our wedding day into a beautiful story told through stunning images. I highly recommend him to anyone looking for a passionate professional.",
    name: "Rohan Sharma & Anita Sharma",
  },
  {
    image: "/image/ccc.jpg",
    review:
      "Working with Finnegan was an absolute pleasure. He made us feel comfortable and captured the most intimate and joyful moments of our day. The photos came out breathtakingly beautiful, and we couldn’t be happier with the results.",
    name: "Priya & Suresh Patel",
  },
  {
    image: "/image/ccc.jpg",
    review:
      "Finnegan exceeded all of our expectations with his incredible photography skills. He was professional, friendly, and his work speaks for itself. The pictures he took will be cherished for a lifetime.",
    name: "Amit & Meera Gupta",
  },
];

const Testimonial = () => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={container} className="relative z-10 text-center w-full bg-EerieBlack px-2 sm:px-3 lg:px-5 pt-56">
      <h1 className=" sticky top-0 mb-64 text-7.0xl sm:text-8.5xl lg:text-12xl italic">
        My Clients
      </h1>

      <div className=" flex flex-col items-center justify-center gap-60 ">
      {testimonials.map((testimonial, index) => {
        const targetScale = 1-((testimonials.length - index) * 0.05)
        const range = [index * 0.25, 1]

        const scale = useTransform(scrollYProgress, range, [1, targetScale])
        // const scale = useTransform(scrollYProgress, range, [1, 0]);

        return (
        <motion.div
        style={{scale}}
          key={index}
          className=" sticky top-60 flex flex-col md:flex-row gap-10 justify-center items-center mb-12 bg-EerieBlack"
        >
          <Image
            alt="client"
            src={testimonial.image}
            width={6720}
            height={4480}
            className="h-36 w-36 sm:h-52 sm:w-52 md:w-64 md:h-64 rounded-full object-cover"
          />

          <div className="flex flex-col w-full md:w-full md:min-w-[467px]  gap-5">
            <span className="text-base sm:text-xl md:text-1.5xl lg:text-2xl font-normal tracking-wider">
              {testimonial.review}
            </span>
            <h6 className="text-xl sm:text-1.5xl md:text-2xl lg:text-2.8xl tracking-wider font-medium">
              {testimonial.name}
            </h6>
          </div>
        </motion.div>
      )})}
      </div>
    </div>
  );
};

export default Testimonial;
