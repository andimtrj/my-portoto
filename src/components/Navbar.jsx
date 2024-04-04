import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../style/navbar.css";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(".navbar-container", {
      duration: 0.3,
      y: isNavbarOpen ? 0 : 100,
      autoAlpha: isNavbarOpen ? 1 : 0,
      height: isNavbarOpen ? "100vh" : 0,
      ease: "power2.inOut"
    }).reversed(!isNavbarOpen)

    return () => {
      tl.kill()
    }
  }, [isNavbarOpen]);

  useEffect(() => {
    const handleResize = () => {
      if(!isNavbarOpen) return;
      gsap.set(".navbar-container", {height: "100vh"})
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[isNavbarOpen])



  return (
    <>
      <div
        className="navbar-container absolute w-full flex flex-col items-end overflow-hidden"
        style={{
          height: isNavbarOpen ? "100vh" : 0,
          opacity: isNavbarOpen ? 1 : 0
        }}
      >
        <div className="flex flex-col bg-hitam w-full h-full px-10 py-5">
          <a href="" className="title text-putih hover:text-merah">
            HOME
          </a>
          <a href="" className="title text-putih hover:text-merah ">
            ABOUT
          </a>
          <a href="" className="title text-putih hover:text-merah ">
            PORTFOLIO
          </a>
          <a href="" className="title text-putih hover:text-merah ">
            CONTACT
          </a>
        </div>
      </div>

      <nav className="flex px-10 pt-10">
        <div className="flex flex-row justify-between w-full">
          <div className="w-[3rem] h-[3rem] bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white">Logo</span>
          </div>

          <span
            className={`material-icons text-merah text-[3rem] cursor-pointer transition-all duration-300 transform ${
              isNavbarOpen ? "rotate-90" : ""
            }`}
            onClick={toggleMenu}
          >
            {isNavbarOpen ? "close" : "menu"}
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
