import { motion } from "framer-motion";
import AboutMeImg from "../../assets/img/aboutme.png";

const containerV = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemsV = {
  hidden: { y: "70%", opacity: 0 },
  visible: { y: 0, transition: { duration: 0.3 }, opacity: 1 },
};

function AboutH() {
  const aboutMeText = "About Me ━ ";

  return (
    <div className="px-[45px] mb-52">
      {/* slider */}
      <div className="overflow-hidden whitespace-nowrap border-y-4 border-hitam mb-10">
        <div className="flex slider-font">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 100,
            }}
          >
            <div>{aboutMeText.repeat(20)}</div>
            <div>{aboutMeText.repeat(20)}</div>
          </motion.div>
        </div>
      </div>
      {/* slider */}

      {/* about me content */}
      <div className="flex justify-end mb-10 gap-10">
        <motion.div
          className="flex flex-col"
          variants={containerV}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px", once: true }}
        >
          <div className="desc-title text-3xl mb-5 max-w-[40rem] text-end">
            <motion.h3 variants={itemsV} className="mb-2">
              Hi 🖐️
            </motion.h3>
            <motion.p
              variants={itemsV}
              className="desc md:text-[1.8vw] lg:text-xl text-justify"
            >
              Hello there, my name is Andi Mataraja. I am currently a
              sixth-semester student at Bina Nusantara University, where I am
              pursuing a degree in Computer Science. My primary focus lies in
              Web Development, with a particular emphasis on Front End
              Development and UI/UX Design.
            </motion.p>
          </div>
          <div className="desc-title text-3xl mb-5 max-w-[40rem] text-end">
            <motion.p
              variants={itemsV}
              className="desc md:text-[1.8vw] lg:text-xl text-justify"
            >
              I am an avid enthusiast of the arts, particularly visual arts and
              music. I see front-end development and UI/UX design as my way of
              channeling my passion for art. Through these disciplines, I can
              blend creativity with technology, creating visually appealing and
              user-friendly digital experiences. This fusion allows me to
              express my artistic sensibilities while solving complex design and
              development challenges.
            </motion.p>
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col justify-center ">
              <motion.p
                className="desc-title md:text-[1.8vw] lg:text-xl text-center mb-2"
                variants={itemsV}
              >
                {" "}
                Here are tools that I'm familiar with 💻
              </motion.p>
              <motion.div
                className="flex justify-evenly mb-1"
                variants={itemsV}
              >
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  HTML
                </p>
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  CSS
                </p>
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  JavaScript
                </p>
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  Tailwind CSS
                </p>
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  Bootstrap
                </p>
              </motion.div>
              <motion.div className="flex justify-between" variants={itemsV}>
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  React Js
                </p>
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  Vue Js
                </p>
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  Laravel
                </p>
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  MySQL
                </p>
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  Figma
                </p>
                <p className="desc md:text-[1.8vw] lg:text-xl text-justify">
                  Git
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, x: 45 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              ease: "easeOut",
              duration: 0.2,
            },
          }}
          viewport={{ margin: "-200px", once: true }}
          src={AboutMeImg}
          alt="AboutMeImg"
          className="md:w-[37vw] lg:w-[21.5vw] filter grayscale brightness-75 transition duration-1000 ease-in-out hover:grayscale-0 hover:brightness-110"
        />
      </div>
      {/* about me content */}
    </div>
  );
}

export default AboutH;
