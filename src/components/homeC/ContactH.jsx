import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StaggerText from "react-stagger-text";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Back to top",
    route: "#home",
  },
  {
    id: 1,
    navTitle: "About Me",
    route: "#about",
  },
  {
    id: 2,
    navTitle: "Projects",
    route: "#projects",
  },
];

const aHover = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
};

const containerV = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemsV = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: 0, transition: { duration: 0.7 }, opacity: 1 },
};



function ContactH() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (route) => {
    setMobileNavOpen(false);
    if (route.startsWith("#")) {
      const sectionId = route.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });

        // Adjust scroll position to avoid overscroll
        const yOffset = -100; // Adjust this value according to your navbar height or desired offset
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate(route);
    }
  };

  return (
    <div className="px-[45px]">
      <h1 className="title">
        <StaggerText
          staggerType="letter"
          staggerDuration={0.8}
          staggerDelay={0.1}
          startDelay={0}
          shouldStart="false"
        >
          Say Hello!
        </StaggerText>
      </h1>
      <motion.div
        className="border-y border-hitam mt-5 py-7 flex justify-between sm:flex-col lg:flex-row md:flex-row"
        variants={containerV}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px", once: true }}
      >
        <motion.div
          className="desc-title lg:text-lg md:text-sm sm:text-sm flex items-center lg:max-w-[30vw] md:max-w-[45vw]"
          variants={itemsV}
        >
          <p className="text-justify desc">
            Thinking to yourself "I would love to collaborate with him." or
            "Wow, can he build or design me a website like this?" then you're at
            the right place. Just send me a short message about your project,
            reason for a collab or quick hello and I'll reply.
          </p>
        </motion.div>
        <div className="flex justify-end sm:mt-5">
          <div className="border-l sm:border-x border-hitam desc ">
            <motion.div
              className="flex flex-col text-xl gap-4 lg:py-5 lg:px-32 md:py-5 md:px-10 sm:py-2 sm:px-5 sm:text-center"
              variants={itemsV}
            >
              <h3 className="thicker">Menu</h3>
              {MOBILE_NAV_ITEMS.map((navItem) => (
                <a key={navItem.id} onClick={() => handleClick(navItem.route)}>
                  <motion.div
                    variants={aHover}
                    whileHover="hover"
                    className="nav-menu-hover desc-title cursor-pointer"
                  >
                    {navItem.navTitle}
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </div>
          <div className="border-l sm:border-none border-hitam ">
            <motion.div
              className="flex flex-col desc-title text-xl gap-4 ;g:py-5 lg:px-32 md:py-5 md:px-10 sm:py-2 sm:px-5 sm:text-center"
              variants={itemsV}
            >
              <h3 className="thicker">Contact</h3>
              <motion.a href="" variants={aHover} whileHover="hover">
                Email
              </motion.a>
              <motion.a href="" variants={aHover} whileHover="hover">
                LinkedIn
              </motion.a>
              <motion.a href="" variants={aHover} whileHover="hover">
                My CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactH;
