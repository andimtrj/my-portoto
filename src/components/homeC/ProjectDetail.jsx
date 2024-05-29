import { motion } from "framer-motion";
import React from "react";
import "../../style/projectDetail.css";

function ProjectDetail({ isOpen, onClose, image, title, info, role, desc, link }) {

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0.5 }}
      transition={{ duration: 1.1, ease: [0.74, 0, 0.19, 1.02] }}
      className="fixed inset-0 bg-hitam z-50 w-full flex px-[45px] gap-5"
    >
      <div className="h-full flex items-center">
        <div className="w-[50vw] h-fit overflow-hidden block flex-shrink-0">
          <img src={image} alt={title} className="w-full object-cover" />
        </div>
      </div>

      <div className="py-4 flex items-center">
        <div className="flex flex-col ">
          <h1 className="desc-title text-putih text-[2vw]">{title}</h1>
          <p className="desc text-putih text-justify">{info}</p>
          <p className="desc text-putih text-justify">{role}</p>
          <div className="flex flex-col mt-2">
            <p className="desc text-putih text-justify">{desc}</p>
          </div>
          <div className="w-full">
            <button className="desc border-2 border-putih text-putih px-4 py-1 rounded-3xl hover mt-5">
              <a href={link}>Find out more</a>
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <span
          onClick={onClose}
          className="desc-title text-putih cursor-pointer text-3xl"
        >
          close
        </span>
      </div>
    </motion.div>
  );
}

export default ProjectDetail;
