import { useState } from "react";
import Navbar from "./components/Navbar";
import NameLogo from "./components/NameLogo";
import "./App.css";
import PageTransition from "./components/animations/PageTransition";

function App() {
  const [startLogoAnimation, setStartLogoAnimation] = useState(false);

  const handlePageTransitionComplete = () => {
    setStartLogoAnimation(true); // Trigger `NameLogo` animation
  };

  return (
    <>
      <PageTransition onComplete={handlePageTransitionComplete} />
      <div className="poppins">
        <div className="mb-3 flex text-gray-400 items-end gap-2">
          <NameLogo startAnimation={startLogoAnimation} />
          <div className="hidden 2xl:flex flex-col">
            <p>Web Developer</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
        <div className="flex justify-between text-gray-400">
          <div className="ml-5">
            <Navbar />
          </div>
          <div className="2xl:hidden flex gap-2">
            <p>Web Developer</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;