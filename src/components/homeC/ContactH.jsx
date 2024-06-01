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
  const links = [
    {
      id: 1,
      url: "https://www.linkedin.com/in/andi-mataraja/",
    },
    {
      id: 2,
      url: "https://www.instagram.com/andimtrj/",
    },
    {
      id: 3,
      url: "https://www.youtube.com/channel/UCcYXknlMR0ozz74HQOdyG3Q",
    },
    {
      id: 4,
      url: "https://www.behance.net/andimataraja",
    },
    {
      id: 5,
      url: "https://github.com/andimtrj",
    },
    {
      id: 5,
      url: "mailto:amataraja@gmail.com",
    },
  ];

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
    <div className="lg:px-[45px] md:px-[45px] sm:px-[45px] phone:px-5">
      <h1 className="title md:text-[4vw] lg:text-[4vw] sm:text-[10vw] phone:text-[10vw]">
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
        className="border-y border-hitam mt-5 py-7 flex justify-between sm:flex-col lg:flex-row md:flex-row phone:flex-col"
        variants={containerV}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px", once: true }}
      >
        <div className="desc-title lg:text-lg md:text-sm sm:text-sm flex items-center lg:max-w-[30vw] md:max-w-[45vw]">
          <p className="text-justify desc">
            <StaggerText
              staggerType="word"
              staggerDuration={0.1}
              staggerDelay={0.1}
              startDelay={0}
              shouldStart="false"
            >
              Thinking to yourself "I would love to collaborate with him." or
              "Wow, can he build or design me a website like this?" then you're
              at the right place. Just send me a short message about your
              project, reason for a collab or quick hello and I'll reply.
            </StaggerText>
          </p>
        </div>
        <div className="flex justify-end sm:mt-5">
          <div className="border-x border-hitam ">
            <motion.div
              className="flex flex-col desc-title lg:text-xl gap-4 lg:py-5 lg:px-20 md:py-5 md:px-10 sm:py-2 sm:px-5 sm:text-center phone:px-5 phone:py-2 phone:text-center"
              variants={itemsV}
            >
              <h3 className="thicker">Social</h3>
              <motion.a
                href={links[1].url}
                variants={aHover}
                whileHover="hover"
              >
                Instagram
              </motion.a>
              <motion.a
                href={links[2].url}
                variants={aHover}
                whileHover="hover"
              >
                Youtube
              </motion.a>
              <motion.a
                href={links[3].url}
                variants={aHover}
                whileHover="hover"
              >
                Behance
              </motion.a>
              <motion.a
                href={links[4].url}
                variants={aHover}
                whileHover="hover"
              >
                Github
              </motion.a>
            </motion.div>
          </div>
          <div className="border-l sm:border-none border-hitam ">
            <motion.div
              className="flex flex-col desc-title lg:text-xl gap-4 lg:py-5 lg:px-20 md:py-5 md:px-10 sm:py-2 sm:px-5 sm:text-center phone:px-5 phone:py-2 phone:text-center"
              variants={itemsV}
            >
              <h3 className="thicker">Contact</h3>
              <motion.a
                href={links[5].url}
                variants={aHover}
                whileHover="hover"
              >
                Email
              </motion.a>
              <motion.a
                href={links[0].url}
                variants={aHover}
                whileHover="hover"
              >
                LinkedIn
              </motion.a>
            </motion.div>
          </div>
          <div className="border-l sm:border-x border-hitam desc ">
            <motion.div
              className="flex flex-col lg:text-xl gap-4 lg:py-5 lg:px-20 md:py-5 md:px-10 sm:py-2 sm:px-5 sm:text-center phone:px-5 phone:py-2 phone:text-center"
              variants={itemsV}
            >
              <h3 className="thicker">Menu</h3>
              {MOBILE_NAV_ITEMS.map((navItem) => (
                <a key={navItem.id} onClick={() => handleClick(navItem.route)}>
                  <motion.div
                    variants={aHover}
                    whileHover="hover"
                    className="desc-title cursor-pointer"
                  >
                    {navItem.navTitle}
                  </motion.div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactH;
