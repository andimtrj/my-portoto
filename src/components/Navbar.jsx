import { motion } from "framer-motion";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between p-9 items-center">
      <h2 className="desc-title">Andi Mataraja</h2>
      <span className="material-symbols-outlined text-5xl text-hitam cursor-pointer">menu</span>
    </nav>
  );
}

export default Navbar;
