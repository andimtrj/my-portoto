import '../style/cursorFollow.css'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

function Cursor(params) {
  const [mousePosition, setMousePosition] = useState({
    x: 0, y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition ({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mouseMove", mouseMove);
    }

  }, []); 

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }


  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate="default"
    />
  );

}

export default Cursor;