import { motion } from "framer-motion";
import Layout from "../Layout"
import Spline from "@splinetool/react-spline";
import AboutH from "./AboutH";

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

function NewHome() {
  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center text-center h-fit mb-44"
      >
        <motion.div
          variants={childVariants}
          className="absolute w-full h-[80vh] z-10"
        >
          <Spline scene="https://prod.spline.design/6BLCEgUJY241bIKh/scene.splinecode" />
        </motion.div>
        <motion.h1 variants={childVariants} className="walkyr-stroke">
          MATARAJA
        </motion.h1>
        <motion.h1 variants={childVariants} className="walkyr">
          MATARAJA
        </motion.h1>
        <motion.h1 variants={childVariants} className="walkyr-stroke">
          MATARAJA
        </motion.h1>
      </motion.div>

      <Layout>
        <AboutH/>
      </Layout>
      

    </div>
  );
}

export default NewHome;
