import Navbar from "../components/Navbar.jsx";
import CursorFollow from "../components/CursorFollow.jsx";
import Image from "react-bootstrap/Image";
import HeyAndi from "../assets/hey-andi.png";
import { useState } from "react";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col justify-center align-center text-center px-64 pt-32">
          <div className="flex justify-center items-center">
            <h1
              className="title mr-2"
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              Andi Mataraja
            </h1>
            <Image
              src={HeyAndi}
              alt="hey-andi-final-png"
              className={`w-[10%] h-[10%] p-2 pb-4`}
            />
          </div>
          <div className="px-28 mb-3">
            <p>
              Visitors! Welcome to my little corner of the web! Call me Andi and
              thanks for visiting. Sit back, fasten your seatbelt, and enjoy
              your exploration on my website.
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <button className="border-2 border-hitam py-2 px-8 rounded-full text-[0.875rem] hover:bg-hitam hover:text-putih transition-color duration-500">
              About Me
            </button>
            <button className="border-2 border-hitam py-2 px-8 rounded-full text-[0.875rem] hover:bg-hitam hover:text-putih transition-color duration-500">
              Contact
            </button>
          </div>
        </div>
        <CursorFollow isHovered={isHovered}/>
      </div>
    </>
  );
}

export default Home;
