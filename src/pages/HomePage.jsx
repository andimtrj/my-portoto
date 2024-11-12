import Home from "../components/homeC/Home"
import Navbar from "../components/Navbar";
import PageTransition from "../components/animations/PageTransition";
import Footer from "../components/Footer";


function HomePage() {

  return (
    <div>
      <PageTransition/>
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default HomePage;
