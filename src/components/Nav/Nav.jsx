import React, { useState } from 'react';
import styles from './nav.module.scss';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { menuSlide } from '../animation.js';
import Link from '../Link/Link';
import Curve from '../Curve/Curve';
import Trex from '../../assets/trex.svg'
import Footer from './Footer.jsx';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
];

export default function Nav() {
  const location = useLocation(); 
  const pathname = location.pathname;

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`${styles.menu} raleway-black text-[6vw] leading-[6vw]`}
    >
      <div className={`${styles.body} flex items-end px-[4vw] justify-end pb-10`}>
        <img src={Trex} alt="" className='absolute right-[-0.5vw] top-[3vw] w-[23vw]'/>
        <div onMouseLeave={() => setSelectedIndicator(pathname)} className={styles.nav}>
          {navItems.map((data, index) => (
            <Link
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
