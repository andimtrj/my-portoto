import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function ProjectL({ img, number, title }) {
  return (
    <div className="flex gap-5 w-full">
      <div className="justify-between flex flex-col sm:text-sm md:text-md lg:text-xl desc-title w-[20vw] h-[20vw]">
        <h5>{number}</h5>
        <h5>{title}</h5>
      </div>
      <div className="overflow-hidden block flex-shrink-0 w-[20vw] h-[20vw]">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover filter grayscale transition duration-1000 ease-in-out hover:grayscale-0"
        />
      </div>
    </div>
  );
}

export default ProjectL;
