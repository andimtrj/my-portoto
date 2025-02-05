import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  // State to track the active menu
  const [activeMenu, setActiveMenu] = useState("Works");

  // Function to handle menu clicks
  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  const transition = {
    duration: 0.8,
    ease: [0, 0.71, 0.2, 1.01],
  };

  // Define inactive and active font sizes
  const inactiveFontSize = "16px";
  const activeFontSize = "48px";

  return (
    <div className="flex gap-2">
      {/* Works */}
      <motion.a
        href="#"
        onClick={() => handleMenuClick("Works")}
        className="relative"
        animate={{
          fontSize: activeMenu === "Works" ? activeFontSize : inactiveFontSize,
          color: activeMenu === "Works" ? "#000000" : "#9CA3AF",
        }}
        transition={ transition }
      >
        Works,
      </motion.a>

      {/* About */}
      <motion.a
        href="#"
        onClick={() => handleMenuClick("About")}
        className="relative"
        animate={{
          fontSize: activeMenu === "About" ? activeFontSize : inactiveFontSize,
          color: activeMenu === "About" ? "#000000" : "#9CA3AF",
        }}
        transition={ transition }
      >
        About,
      </motion.a>

      {/* Contact */}
      <motion.a
        href="#"
        onClick={() => handleMenuClick("Contact")}
        className="relative"
        animate={{
          fontSize:
            activeMenu === "Contact" ? activeFontSize : inactiveFontSize,
          color: activeMenu === "Contact" ? "#000000" : "#9CA3AF",
        }}
        transition={ transition }
      >
        Contact.
      </motion.a>
    </div>
  );
}

export default Navbar;
