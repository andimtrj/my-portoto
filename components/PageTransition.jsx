"use client";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";

export default function PageTransition({ onComplete }) {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    // Start exit animation after a brief delay
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (!showTransition) {
      onComplete?.();
    }
  };

  const transitionVariants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.55, 0.085, 0.68, 0.53],
      },
    },
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {showTransition && (
        <motion.div
          className="fixed inset-0 h-screen w-screen bg-charcoal z-50"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      )}
    </AnimatePresence>
  );
}
