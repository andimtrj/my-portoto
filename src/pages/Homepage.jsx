import "../style/home.css";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import HeyAndi from "../assets/hey-andi-final.png";
import HomeUnder from "../assets/home-under.png";

function Home(params) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <nav className="flex flex-row justify-between px-10 pt-10">
        {/* Menu icon is placed outside the container */}
        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white"></span>
        </div>

        <span
          className={`material-icons text-[5rem] hover:text-blue-400 cursor-pointer transition-all duration-300 transform z-50 ${
            isNavbarOpen ? "rotate-90" : ""
          }`}
          onClick={toggleMenu}
        >
          {isNavbarOpen ? "close" : "menu"}
        </span>
      </nav>

      {/* Conditional rendering of semi-transparent background */}
      {isNavbarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Menu bar container */}
      <div
        className={`${
          isNavbarOpen ? "block" : "hidden"
        } absolute right-0 top-0 h-full bg-hitam w-1/3 py-10 px-8 z-50`}
      >
        <div className="bg-hitam w-1/2 flex flex-col">
          <h1 className="title text-white">
            <a href="" className="menu-shadow" onClick={toggleMenu}>
              HOME
            </a>
          </h1>
          <h1 className="title text-white">
            <a href="" className="menu-shadow" onClick={toggleMenu}>
              ABOUT
            </a>
          </h1>
          <h1 className="title text-white">
            <a href="" className="menu-shadow" onClick={toggleMenu}>
              PORTFOLIO
            </a>
          </h1>
          <h1 className="title text-white">
            <a href="" className="menu-shadow" onClick={toggleMenu}>
              CONTACT
            </a>
          </h1>
        </div>
      </div>

      <div className="absolute bottom-0 flex justify-center items-center w-full z-0 ">
        <Image src={HomeUnder} className="w-[75%]" />
      </div>

      <div className="p-10 flex flex-col w-full h-full z-50 justify-center align-center text-center px-60 pt-24">
        <div className="flex justify-center items-center">
          <h1 className="title m-0">Hello! It's me Andi</h1>
          <div className="w-28 h-28 rounded-full flex items-center justify-center overflow-hidden">
            <div className="static pt-3">
              <Image
                src={HeyAndi}
                alt="hey-andi-final-png"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="px-28 mb-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae
            itaque in. Quisquam blanditiis excepturi molestias eveniet commodi
            culpa inventore quo.
          </p>
        </div>
        <div>
          {/* Corrected button class names */}
          <button className="border-2 border-hitam py-2 px-8 rounded-full desc-title hover:bg-hitam hover:text-putih transition-color duration-300 cursor-pointer">
            About Me
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
