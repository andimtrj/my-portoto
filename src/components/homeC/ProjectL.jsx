import { motion } from "framer-motion";

const containerV = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemV = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, transition: { duration: 0.5 }, opacity: 1 },
};

function ProjectL({ img, number, title, onClick }) {
  return (
    <motion.div
      className="flex gap-5 w-full"
      variants={containerV}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="justify-between flex flex-col sm:text-sm md:text-md lg:text-xl desc-title w-[20vw] h-[20vw] text-right">
        <motion.h5 variants={itemV} viewport={{ once: true, margin: "-100px" }}>
          {number}
        </motion.h5>
        <motion.h5 variants={itemV} viewport={{ once: true, margin: "-100px" }}>
          {title}
        </motion.h5>
      </div>
      <div
        className="overflow-hidden block flex-shrink-0 w-[20vw] h-[20vw] hover cursor-pointer"
        onClick={onClick}
      >
        <motion.img
          variants={itemV}
          viewport={{ once: true, margin: "-100px" }}
          src={img}
          alt=""
          className="w-full h-full object-cover filter grayscale transition duration-1000 ease-in-out hover:grayscale-0"
        />
      </div>
    </motion.div>
  );
}

export default ProjectL;
