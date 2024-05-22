import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import AboutH from "./AboutH";
import ProjectH from "./ProjectH"


const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

function Home() {

  return (
    <div className="pt-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center text-center h-fit md:mb-[40vh] lg:mb-44"
      >
        <motion.div
          variants={childVariants}
          className="absolute w-full sm:h-[48vh] md:h-[68vh] lg:h-[80vh] z-10"
        >
          <Spline scene="https://prod.spline.design/6BLCEgUJY241bIKh/scene.splinecode" className="md:w-1"/>
        </motion.div>
        <motion.h1 variants={childVariants} className="walkyr-stroke sm:text-[15vw] sm:h-[15vh] md:text-[15vw] md:h-[18vh] lg:text-[14vw] lg:h-[26vh]">
          MATARAJA
        </motion.h1>
        <motion.h1 variants={childVariants} className="walkyr sm:text-[15vw] sm:h-[15vh] md:text-[15vw] md:h-[18vh] lg:text-[14vw] lg:h-[26vh]">
          MATARAJA
        </motion.h1>
        <motion.h1 variants={childVariants} className="walkyr-stroke sm:text-[15vw] sm:h-[15vh] md:text-[15vw] md:h-[18vh] lg:text-[14vw] lg:h-[26vh]">
          MATARAJA
        </motion.h1>
      </motion.div>
      <AboutH />

      <ProjectH/>
    </div>
  );
}

export default Home;
