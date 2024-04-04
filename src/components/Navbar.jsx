import { useState } from "react";
import "../style/navbar.css";

function Navbar(params) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <div
        className={`transition-all duration-700 transform ${
          isNavbarOpen ? "scale-x-100 translate-x-0" : "opacity-0 scale-x-0 translate-x-full"
        } absolute w-full flex flex-col items-end`}
      >
        <div className="flex flex-col bg-hitam w-[40%] px-10 py-5">
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
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white"></span>
        </div>

        <span
          className={`material-icons text-merah text-[4rem] hover_text cursor-pointer transition-all duration-300 transform ${
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
