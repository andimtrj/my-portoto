import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "../style/navbar.scss";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "home",
    route: '/'
  },
  {
    id: 1,
    navTitle: "my works",
    route: '/workspage'
  },
  {
    id: 2,
    navTitle: "about me",
  },
  {
    id: 3,
    navTitle: "contact",
  },
];

const linkedInUrl = "https://www.linkedin.com/in/andi-mataraja/"

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleClick = (route) => {
    navigate(route)
  }

  return (
    <main className="fixed w-full bg-bg z-20">
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
        className="items-center justify-between lg:py-[35px] px-[45px] md:py-[20px]"
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
          >
            <span className="text-4xl material-symbols-outlined text-hitam nav-menu-hover">
              menu
            </span>
          </motion.div>
        </div>
        <motion.div variants={mobileMenuVariant} className="mobile-menu z-20">
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            <span className="text-4xl material-symbols-outlined text-putih">
              close
            </span>
          </motion.button>
          <motion.ul variants={ulVariant} className="text-putih">
            {MOBILE_NAV_ITEMS.map((navItem) => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id} onClick={() => handleClick(navItem.route)}>
                <motion.div
                  variants={liVariant}
                  className="nav-menu-hover desc-title hover:italic"
                >
                  {navItem.navTitle}
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            variants={fadeInVariant}
            className="contact text-putih desc gap-10"
          >
            <a className="cursor-default">amataraja@gmail.com</a>
            <a href={linkedInUrl} className="no-underline hover:italic">LinkedIn</a>
          </motion.div>
        </motion.div>
      </motion.nav>
    </main>
  );
}

export default Navbar;
