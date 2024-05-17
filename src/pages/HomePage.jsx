import Home from "../components/Home";
import NewHome from "../components/NewHome";
import Navbar from "../components/Navbar";
import Spline from "@splinetool/react-spline";

function HomePage() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <NewHome />
    </div>
  );
}

export default HomePage;
