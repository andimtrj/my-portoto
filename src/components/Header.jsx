import styles from './header.module.scss';
import { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [location.pathname]); // Replaces usePathname

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div onClick={() => setIsActive(!isActive)} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
}
