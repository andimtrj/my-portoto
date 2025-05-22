import dec1 from "../assets/decoration1.svg";
import dec2 from "../assets/decoration2.svg";
import dec3 from "../assets/decoration3.svg";
import arrow from "../assets/arrow.svg";

function Home() {
  return (
    <div className="flex flex-col flex-1 h-screen">
      <div className="flex flex-col uppercase text-[10vw] justify-center items-center grow">
        <div className="flex gap-[5vw] relative">
          <div className="flex relative">
            <img src={dec3} alt="" className="w-[10vw] absolute -left-[4vw]" />
            <h1 className="ptserif-bold">welcome</h1>
          </div>
          <div className="flex relative">
            <img
              src={dec2}
              alt=""
              className="w-[11vw] absolute -left-[8vw] -rotate-12"
            />
            <h1 className="raleway-black">to</h1>
          </div>
        </div>
        <div className="-mt-[4vw] flex gap-[5vw]">
          <h1 className="raleway-black">my</h1>
          <div className="flex relative">
            <img
              src={dec1}
              alt=""
              className="w-[15vw] absolute -left-[11vw] "
            />
            <h1 className="script fake-bold">page</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-[2vw] -mt-[6vw]">
        <img src={arrow} alt="" className="w-[1.5vw] mb-[1vw]" />
        <p className="raleway-black text-[1vw]">SCROLL</p>
      </div>
    </div>
  );
}

export default Home;
