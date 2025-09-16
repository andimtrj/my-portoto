"use client";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";

export default function WelcomeAnimation({ onComplete }) {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [exitSecond, setExitSecond] = useState(false);

  useEffect(() => {
    // After 3 seconds, hide first section and show second
    const timer = setTimeout(() => {
      setShowFirst(false);
      setTimeout(() => {
        setShowSecond(true);
      }, 450); // Wait for exit animation to complete (400ms + buffer)
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // After the second animation displays, start exit animation then trigger page transition
    if (showSecond && !exitSecond) {
      const exitTimer = setTimeout(() => {
        setExitSecond(true);
      }, 2000);

      return () => clearTimeout(exitTimer);
    }
  }, [showSecond, exitSecond]);

  useEffect(() => {
    // After second section exits, trigger page transition
    if (exitSecond) {
      const completeTimer = setTimeout(() => {
        onComplete?.();
      }, 800); // Wait longer for exit animation to complete (0.7s duration + buffer)

      return () => clearTimeout(completeTimer);
    }
  }, [exitSecond, onComplete]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: 100,
    },
    visible: {
      y: "0%",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      y: "100%",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="h-screen flex items-end p-28 bg-cream text-charcoal">
      <AnimatePresence mode="wait">
        {showFirst && (
          <motion.div
            key="first-section"
            className="flex gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="overflow-hidden py-4">
              <motion.h2
                className="font-raleway text-7xl font-black"
                variants={wordVariants}
              >
                Hey
              </motion.h2>
            </div>
            <div className="overflow-hidden py-4">
              <motion.h2
                className="font-pt-serif text-7xl font-black"
                variants={wordVariants}
              >
                there!
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showSecond && (
          <motion.div
            key="second-section"
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            animate={exitSecond ? "exit" : "visible"}
            exit="exit"
          >
            <div className="flex gap-3">
              <div className="overflow-hidden py-4">
                <motion.h2
                  className="font-pt-serif text-7xl font-black"
                  variants={wordVariants}
                >
                  My
                </motion.h2>
              </div>
              <div className="overflow-hidden py-4">
                <motion.h2
                  className="font-raleway text-7xl font-black"
                  variants={wordVariants}
                >
                  name
                </motion.h2>
              </div>
              <div className="overflow-hidden py-4">
                <motion.h2
                  className="font-raleway text-7xl font-black"
                  variants={wordVariants}
                >
                  is
                </motion.h2>
              </div>
            </div>

            <div className="flex gap-3 -mt-7">
              <div className="overflow-hidden py-4">
                <motion.h2
                  className="font-pt-serif text-7xl font-black"
                  variants={wordVariants}
                >
                  Andi
                </motion.h2>
              </div>
              <div className="overflow-hidden py-6 px-1">
                <motion.h2
                  className="font-parisienne text-7xl font-black"
                  variants={wordVariants}
                >
                  Mataraja
                </motion.h2>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
