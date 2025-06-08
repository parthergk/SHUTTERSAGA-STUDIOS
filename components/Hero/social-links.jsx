"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5 }}
      className="fixed top-1/2 -translate-y-1/2 right-8 flex flex-col gap-6"
    >
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-white/70 hover:text-white transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </motion.div>
  );
};