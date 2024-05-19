import Home from "../components/homeC/Home";
import NewHome from "../components/homeC/Home"
import Navbar from "../components/Navbar";

import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <PageTransition/>
      <Navbar />
      <NewHome/>
      <Footer/>
    </div>
  );
}

export default HomePage;
