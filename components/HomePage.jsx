"use client";
import { motion } from "motion/react";
import React from "react";

export default function HomePage() {
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      className="h-screen w-screen bg-cream text-charcoal flex items-center justify-center"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center">
        <motion.h1
          className="font-pt-serif text-6xl font-black mb-4"
          variants={fadeInVariants}
        >
          Welcome to my page
        </motion.h1>
        <motion.p
          className="font-raleway text-xl text-charcoal/70"
          variants={fadeInVariants}
        >
          I'm Andi Mataraja
        </motion.p>
      </div>
    </motion.div>
  );
}
