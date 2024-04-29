import { useState } from "react";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

function HomePage(){
  const [showHome, setShowHome] = useState(true);
  const [showMenu, setShowMenu] = useState(false); // Tambah state untuk menampilkan menu

  return(
    <div>
      <Navbar setShowHome={setShowHome} setShowMenu={setShowMenu} showMenu={showMenu}/>
      <Home showHome={showHome}/>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default HomePage;