import React, { useState } from "react";
import { motion } from "framer-motion";

import "../style/navbar.scss";
import { Cursor } from "react-creative-cursor";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "home",
  },
  {
    id: 1,
    navTitle: "showreel",
  },
  {
    id: 2,
    navTitle: "services",
  },
  {
    id: 3,
    navTitle: "about",
  },
  {
    id: 4,
    navTitle: "contact",
  },
];

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main>
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="items-center justify-between"
      >
        <div className="logo-container">
          <motion.h1 variants={hideNavItemsVariant} className="desc-title">
            Andi Mataraja
          </motion.h1>
        </div>
        <div className="menu-container">
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
            data-cursor-size="100px"
            data-cursor-exclusion
            data-cursor-stick="#stick-item"
          >
            <span className="text-4xl material-symbols-outlined text-hitam">menu</span>
          </motion.div>
        </div>
        <motion.div variants={mobileMenuVariant} className="mobile-menu">
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            <span className="text-4xl material-symbols-outlined text-putih">close</span>
          </motion.button>
          <motion.ul variants={ulVariant} className="text-putih">
            {MOBILE_NAV_ITEMS.map((navItem) => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div variants={liVariant}>{navItem.navTitle}</motion.div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeInVariant} className="contact text-putih">
            <h5>+852 5650 2233</h5>
            <h5>hi@designagency.com</h5>
          </motion.div>
        </motion.div>
      </motion.nav>
    </main>
  );
}

export default Navbar;
