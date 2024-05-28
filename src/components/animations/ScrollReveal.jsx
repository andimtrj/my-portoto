import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function ScrollReveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      //fire the animation
      mainControls.start("visible");
      slideControls.start("visible")
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="relative hidden w-fit"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "white",
          zIndex: 20,
        }}
        className="absolute top-1 bottom-1 left-0 right-0 bg-bg z-20"
      />
    </div>
  );
}

export default ScrollReveal;
