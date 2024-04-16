import { AnimatePresence, motion, stagger } from "framer-motion";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
    transition: {
      ease: "easeOut",
      duration: 0.3,
      when: "afterChildren",  // Ensures the container starts to exit after the children start exiting
      staggerChildren: 0.1,
      staggerDirection: -1,
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.5,
      ease: 'easeIn'  // Defines how the child exits (ease in for exit here)
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'  // Defines how the child enters (ease out for entrance here)
    }
  },
};

function Menu() {
  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex flex-col inset-0 h-full w-full bg-hitam fixed p-20 justify-center"
    >
      <motion.h1 variants={childVariants} className="title text-putih">Home</motion.h1>
      <motion.h1 variants={childVariants} className="title text-putih">About</motion.h1>
      <motion.h1 variants={childVariants} className="title text-putih">Contact</motion.h1>
    </motion.div>
  );
}

export default Menu;
