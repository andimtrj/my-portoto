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

function Navbar({setShowHome, setShowMenu, showMenu}) {

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowHome(!showMenu);
  };

  return (
    <nav className={`flex justify-between items-center px-9 pt-9 ${showMenu ? "hidden" : ""}`}>
      <h2 className={`desc-title`}>Andi Mataraja</h2>
      <motion.span
        variants={burgerVariants}
        whileTap="tap"
        className={`material-symbols-outlined text-5xl cursor-pointer`}
        onClick={toggleMenu}
        data-cursor-size="100px"
        data-cursor-exclusion
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
