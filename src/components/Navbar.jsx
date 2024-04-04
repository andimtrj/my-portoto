// Navbar.jsx
import { useState, useEffect } from "react";
import gsap from "gsap";
import { Expo } from "gsap";
import "../style/navbar.css";

function Navbar() {
  var tl = gsap.timeline({
    paused: true
  });

  useEffect(() => {
    tl.to(".menu", {
      duration: 1,
      x: "0%",
      ease: Expo.easeInOut
    })
      .fromTo(
        ".li",
        {
          y: "-100%",
          opacity: 0
        },
        {
          duration: 0.5,
          opacity: 1,
          y: "0%",
          stagger: 0.25
        }
      )
      .fromTo(
        ".social-li",
        {
          y: "-50%",
          opacity: 0
        },
        {
          duration: 0.8,
          opacity: 1,
          stagger: 0.25,
          ease: Expo.easeOut
        },
        "-=0.5"
      );
  }, []);

  function toggle() {
    tl.play();
  }

  function togglec() {
    tl.reverse();
  }

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="button" onClick={toggle}>
            menu
          </div>
        </div>
        <div className="menu">
          <div className="button" onClick={togglec}>
            close
          </div>

          <ul className="ul">
            <li className="li1 li">
              <a href="#">Home</a>
            </li>
            <li className="li2 li">
              <a href="#">About</a>
            </li>
            <li className="li3 li">
              <a href="#">Services</a>
            </li>
            <li className="li4 li">
              <a href="#">Contact</a>
            </li>
            <div className="bg1 bg"></div>
            <div className="bg2 bg"></div>
            <div className="bg3 bg"></div>
            <div className="bg4 bg"></div>
          </ul>
          <div className="social">
            <ul>
              <li className="social-li">
                <a href="#">facebook</a>
              </li>
              <li className="social-li">
                <a href="#">instagram</a>
              </li>
              <li className="social-li">
                <a href="#">twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
