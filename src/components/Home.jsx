import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Home() {
  return (
    <div className="flex flex-col justify-center">
      <motion.div
        className="flex flex-col justify-center items-center h-[80vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="title inline-flex" variants={childVariants}>
          Hello! I'm
          <span className="text-oren nama-hover">‎ Andi Mataraja</span>
        </motion.h1>
        <motion.p
          className="desc-title text-center max-w-4xl text-hitam"
          variants={childVariants}
        >
          Visitors! Welcome to my little corner of the web! Call me Andi and
          thanks for visiting my website. Sit back, fasten your seatbelt, and
          enjoy your exploration on my website.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Home;
