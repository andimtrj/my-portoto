import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Menu from "./Menu";

const burgerVariants = {
  tap: {
    scale: 0.7,
    transition: {
      ease: "easeOut",
    },
  },
};



function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex justify-between items-center px-9 pt-9">
      <h2 className={`desc-title`}>Andi Mataraja</h2>
      <motion.span
        variants={burgerVariants}
        whileTap="tap"
        className={`material-symbols-outlined text-5xl cursor-pointer`}
        onClick={toggleMenu}
      >
        menu
      </motion.span>
      <AnimatePresence
        onExitComplete={() => {
          setShowMenu(false);
        }}
      >
        {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;