import { AnimatePresence, motion } from "framer-motion";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      when: "afterChildren", // Ensures the container starts to exit after the children start exiting
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
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
      duration: 0.2,
      ease: "easeIn", // Defines how the child exits (ease in for exit here)
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", // Defines how the child enters (ease out for entrance here)
    },
  },
};

const closeButton = {
  hidden: {
    x: 50,
    opacity: 0,
    rotate: 360,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 180,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

function Menu({ showMenu, setShowMenu }) {
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={`flex flex-col inset-0 h-full w-full fixed bg-hitam justify-center items-center`}
      >
        <motion.span
          className="absolute material-symbols-outlined text-5xl cursor-pointer text-putih top-9 right-9"
          onClick={toggleMenu}
          variants={closeButton}
        >
          Close
        </motion.span>

        <motion.h1
          variants={childVariants}
          whileHover={{
            scale: 1.05,
            transition: { ease: "easeInOut", type: "tween" },
          }}
          className="title text-putih w-fit"
          data-cursor-size="100px"
        >
          <a href="">Home</a>
        </motion.h1>

        <motion.h1
          variants={childVariants}
          whileHover={{
            scale: 1.05,
            transition: { ease: "easeInOut", type: "tween" },
          }}
          className="title text-putih w-fit"
        >
          <a href="">About</a>
        </motion.h1>

        <motion.h1
          variants={childVariants}
          whileHover={{
            scale: 1.05,
            transition: { ease: "easeInOut", type: "tween" },
          }}
          className="title text-putih w-fit"
        >
          <a href="">Contact</a>
        </motion.h1>
      </motion.div>
      )}
      
    </AnimatePresence>
  );
}

export default Menu;
