import React from "react";
import AboutImg from "../../assets/aboutImg.jpg";
import Blink from "../../assets/blink.svg";

export default function AboutSection() {
  return (
    <div className="flex flex-1 h-screen bg-secondary text-main">
      <div className="h-full overflow-hidden mr-[3vw]">
        <img src={AboutImg} alt="" className="h-full w-auto object-cover" />
      </div>
      <div className="flex flex-col raleway-regular justify-center">
        <div className="flex h-fit">
          <img
            src={Blink}
            alt=""
            className="absolute right-[31vw] top-[74vw] -rotate-12"
          />
          <p className="raleway-black text-[7vw] text-main leading-32">Hello</p>
        </div>
        <div className="text-[1.5vw] max-w-2xl">
          <span>
            I’m <span className="ptserif-regular-italic">Andi Mataraja,</span>{" "}
            22 years-old{" "}
            <span className="ptserif-regular-italic">web developer,</span> based
            in Jakarta, Indonesia. My focus is building{" "}
            <span className="ptserif-regular-italic">intuitive</span> and{" "}
            <span className="ptserif-regular-italic">well-structured</span>{" "}
            websites that are both{" "}
            <span className="ptserif-regular-italic">visually appealing</span>{" "}
            and <span className="ptserif-regular-italic">easy to use.</span>
          </span>
        </div>
        
      </div>
    </div>
  );
}
