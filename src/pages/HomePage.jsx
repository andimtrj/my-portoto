import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Spline from "@splinetool/react-spline";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="absolute w-full h-[80vh] -z-10">
        <Spline scene="https://prod.spline.design/NNeomDgXD-aWwnf5/scene.splinecode" />
      </div>
      <Home />
    </div>
  );
}

export default HomePage;
