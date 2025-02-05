import { motion, useAnimation } from "framer-motion";

const transition = {
  duration: 0.8,
  ease: [0, 0.71, 0.2, 1.01],
};

const pageTransition = {
  hidden: {
    y: "-100%",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  visible: {
    y: "0%",
    transition: {
      delay: 1.1,
      duration: 2,
      ease: transition,
    },
  },
};

function PageTransition({ onComplete }: { onComplete: () => void }) {
  const controls = useAnimation();

  return (
    <motion.div
      className="w-full h-[100vh] bg-black flex absolute z-30"
      variants={pageTransition}
      initial="visible"
      animate="hidden"
      onAnimationComplete={onComplete} // Trigger callback when animation completes
    ></motion.div>
  );
}

export default PageTransition;