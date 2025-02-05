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
        <div className="mb-3">
          <NameLogo startAnimation={startLogoAnimation} />
        </div>
        <div className="flex justify-between text-gray-400">
          <div className="ml-5">
            <Navbar />
          </div>
          <div className="flex gap-2">
            <p>Web Developer</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;