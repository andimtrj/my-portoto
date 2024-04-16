// CursorFollow.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

("use client");

function Cursor({ isHovered, navHovered }) {
  const size = isHovered ? 250 : 30;
  const sizeNav = navHovered ? 70 : 30;
  const circle = useRef();

  const mouse = useRef({
    x: 0,
    y: 0
  });

  const delayedMouse = useRef({
    x: 0,
    y: 0
  });

  const manageMouseMove = e => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY
    };
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075)
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  return (
    <>
      <div
        ref={circle}
        className={`fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none ${isHovered ? 'blur-lg' : 'blue-none'} `}
        style={{
          backgroundColor: '#F5F5F5',
          width: size,
          height: size,
          transition: 'height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out'
        }}
      ></div>
    </>
  );
}

export default Cursor;
