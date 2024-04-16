// Navbar.jsx
import { useState, useEffect } from "react";
import gsap, { Power1 } from "gsap";
import "../style/navbar.css";
import CursorFollow from "./CursorFollow.jsx"

function Navbar() {
  const [tl, setTl] = useState(null);
  const [navHovered, setNavHovered] = useState(false);


  useEffect(() => {
    const timeline = gsap.timeline({ paused: true });
    timeline
      .to(".menu", { x: "0%", duration: 1, ease: Power1.easeOut }, 0)
      .to(
        ".menu-item",
        { y: "0%", ease: Power1.easeOut, stagger: 0.3, opacity: 1 },
        "-=1"
      );
    setTl(timeline);
  }, []); //

  function toggle() {
    if (tl) {
      tl.play();
    }
  }

  function toggleClose() {
    if (tl) {
      tl.reverse();
    }
  }

  return (
    <>
      <CursorFollow navHovered={navHovered}/>
      <div className="navbar flex justify-end align-end pt-10 pe-10">
        <h1 className="cursor-pointer" onClick={toggle} onMouseEnter={() => {setNavHovered(true)}}>
          Menu
        </h1>
      </div>

      <div className="menu bg-hitam text-putih w-full h-[100vh] absolute top-0 p-10">
        <div className="flex justify-end align-end">
          <h1 className="cursor-pointer" onClick={toggleClose}>
            Close
          </h1>
        </div>

        <div className="flex flex-col gap-3 title px-10">
          <a href="" className="menu-item">
            Home
          </a>
          <a href="" className="menu-item">
            Portfolio
          </a>
          <a href="" className="menu-item">
            About
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
