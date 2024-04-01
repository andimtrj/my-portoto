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
      <div className="absolute bottom-0 flex justify-center items-center">
        <Image src={HomeUnder} className="w-[85%]" />
      </div>

      <div className="p-10 flex flex-col w-full h-full">
        <nav className="flex flex-row justify-between">
          <div className="w-[60px] h-[60px] bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white"></span>
          </div>
          <span
            className={`material-icons text-[60px] hover:text-blue-400 cursor-pointer transition-all duration-300 transform ${
              isNavbarOpen ? "rotate-90" : ""
            }`}
            onClick={toggleMenu}
          >
            {isNavbarOpen ? "close" : "menu"}
          </span>
          {/* <span class="material-icons text-[60px]">close</span> */}
        </nav>
        <div className={`${isNavbarOpen ? "block" : "hidden"} `}>
            <div className="bg-hitam absolute w-full">
              <h1 className="title text-white">HOME</h1>
              <h1 className="title text-white">ABOUT</h1>
              <h1 className="title text-white">ABOUT</h1>
            </div>
        </div>

        <div className="flex flex-col justify-center align-center text-center px-[250px] pt-[90px] ">
          <div className="flex justify-center items-center">
            <h1 className="title m-0">Hello! It's me Andi</h1>
            <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center overflow-hidden">
              <div className="relative pt-[12px]">
                <Image
                  src={HeyAndi}
                  alt="hey-andi-final-png"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="px-[100px] mb-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              quae itaque in. Quisquam blanditiis excepturi molestias eveniet
              commodi culpa inventore quo.
            </p>
          </div>
          <div>
            <button class="border-2 border-hitam py-2 px-8 rounded-full text-[15px] hover:bg-hitam hover:text-putih transition-color duration-300">
              About Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
