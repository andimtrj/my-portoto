import { motion } from "framer-motion"

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
      ease: "easeInOut",
    },
  },
};

function PageTransition(){

  return(
    <motion.div
        className={`w-full h-[100vh] bg-black flex absolute z-30`}
        variants={pageTransition}
        initial="visible"
        animate="hidden"
      ></motion.div>
  )
}

export default PageTransition