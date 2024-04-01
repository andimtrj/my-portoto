import "../style/home.css";
import Image from "react-bootstrap/Image";
import ImageAndi from "../assets/img-andi.png";
import ImageHere from "../assets/img-here.png";
import ImageTrex from "../assets/img-trex.png";
import ImageShoe from "../assets/img-shoe.png";

function Home(params) {
  return (
    <>
      <div className="grid grid-cols-3 h-screen">

        <div className="flex items-center">
          <div>
            <h1 className="title">Hello There</h1>
            <hr className="flex-grow border-b border-black ml-4" />
            <Image src={ImageAndi} alt="big-image" className="border-black" />
          </div>
        </div>

        <div>
          <h1 className="desc-title">[HELLO]</h1>
        </div>
        <div className="flex">
          <h1 className="desc-title">HOME</h1>
          <h1 className="desc-title">ABOUT</h1>
          <h1 className="desc-title">PORTFOLIO</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
