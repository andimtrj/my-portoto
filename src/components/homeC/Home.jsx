import React, { useRef } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import AboutH from "./AboutH";
import ProjectH from "./ProjectH";
import ContactH from "./ContactH";

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
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToAbout = () => {
    const yOffset = -100; // Adjust this value as needed
    const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="pt-24">
      <motion.div
        id="home"
        ref={homeRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center text-center h-fit md:mb-[10vh] lg:mb-60 sm:mb-[15vh]"
      >
        <motion.div
          variants={childVariants}
          className="absolute w-full sm:h-[48vh] md:h-[68vh] lg:h-[80vh] phone:h-[28vh] z-10"
        >
          <Spline
            scene="https://prod.spline.design/6BLCEgUJY241bIKh/scene.splinecode"
            className="md:w-1"
          />
        </motion.div>
        <motion.h1
          variants={childVariants}
          className="walkyr-stroke sm:text-[15vw] sm:h-[15vh] md:text-[15vw] md:h-[18vh] lg:text-[14vw] lg:h-[26vh] phone:text-[15vw] phone:h-[10vh]"
        >
          MATARAJA
        </motion.h1>
        <motion.h1
          variants={childVariants}
          className="walkyr sm:text-[15vw] sm:h-[15vh] md:text-[15vw] md:h-[18vh] lg:text-[14vw] lg:h-[26vh] phone:text-[15vw] phone:h-[10vh]"
        >
          MATARAJA
        </motion.h1>
        <motion.h1
          variants={childVariants}
          className="walkyr-stroke sm:text-[15vw] sm:h-[15vh] md:text-[15vw] md:h-[18vh] lg:text-[14vw] lg:h-[26vh] phone:text-[15vw] phone:h-[10vh]"
        >
          MATARAJA
        </motion.h1>
      </motion.div>
      <motion.div
        className="lg:hidden sm:h-[30vh] md:h-auto phone:mb-52 px-[45px] flex flex-col justify-center py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="desc-title text-center" variants={childVariants}>
          May i introduce myself?
        </motion.h1>
        <div className="flex justify-center gap-5">
          <motion.button
            className="desc border-2 border-hitam text-hitam px-4 py-1 rounded-3xl hover mt-5"
            onClick={handleScrollToAbout}
            variants={childVariants}
          >
            <span>Yes please</span>
          </motion.button>
          <motion.button
            className="desc border-2 border-hitam text-hitam px-4 py-1 rounded-3xl hover mt-5"
            onClick={handleScrollToAbout}
            variants={childVariants}
          >
            <span>No (Yes)</span>
          </motion.button>
        </div>
      </motion.div>

      <div id="about" ref={aboutRef}>
        <AboutH />
      </div>
      <div id="projects" ref={projectRef}>
        <ProjectH />
      </div>
      <div id="contact" ref={contactRef}>
        <ContactH />
      </div>
    </div>
  );
}

export default Home;
