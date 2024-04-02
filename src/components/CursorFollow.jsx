import "../style/cursorFollow.css";
import { useState, useEffect } from "react";
import { useMotionValue, motion, useAnimation } from "framer-motion";

function Cursor({ isHovered, handleHoverStart, handleHoverEnd }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e) => {
      setTimeout(() => {
        cursorX.set(e.clientX - 8); // Adjust cursor size and position
        cursorY.set(e.clientY - 8); // Adjust cursor size and position
      }, 50);
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  const cursorControls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      cursorControls.start({ scale: 1.5 }); // Scale up custom cursor
    } else {
      cursorControls.start({ scale: 1 }); // Reset custom cursor scale
    }
  }, [isHovered, cursorControls]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        backgroundColor: isHovered ? '#000' : '#FFF'
      }}
      animate={cursorControls}
    />
  );

}

export default Cursor;
