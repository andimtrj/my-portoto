import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition.jsx";

function WorksPage() {
  return (
    <div>
      <PageTransition/>
      <div>
        <Navbar />
        <h1 className="title text-biru">test</h1>
      </div>
    </div>
  );
}

export default WorksPage;
