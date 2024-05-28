import { motion } from "framer-motion";
import React from "react";

function ProjectDetails({ isOpen, onClose, img, title }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.8, ease:"easeIn" }}
      className="fixed inset-0 bg-hitam justify-between z-50 w-full flex px-[45px]"
    >
      <div className="w-[50vw]">
        <img src={img} alt={title} className="w-full h-auto" />
      </div>
      <div className="py-4">
        <span onClick={onClose} className="desc-title text-putih cursor-pointer text-3xl">close</span>
      </div>
    </motion.div>

  );
}

export default ProjectDetails;
