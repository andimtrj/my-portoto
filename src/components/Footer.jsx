import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="flex justify-between w-full px-[45px] pb-10 pt-10">
      <div className="md:text-[1.5vw] lg:text-[1vw] desc-title flex flex-col">
        <h3 className="w-fit pb-1">Andi Mataraja ©</h3>
        <h3 className="">Web Developer</h3>
      </div>

      <div className="md:text-[1.5vw] lg:text-[1vw] desc-title flex flex-col">
        <h5 className="desc-title pb-3">PORTFOLIO</h5>
        <motion.a href="" whileHover={{ scale: 0.95 }} className="pb-1">
          Behance
        </motion.a>
        <motion.a href="" whileHover={{ scale: 0.95 }} className="pb-1">
          LinkedIn
        </motion.a>
        <motion.a href="" whileHover={{ scale: 0.95 }} className="pb-1">
          CV
        </motion.a>
        <motion.a href="" whileHover={{ scale: 0.95 }} className="pb-1">
          GitHub
        </motion.a>
      </div>

      <div className="md:text-[1.5vw] lg:text-[1vw] desc-title flex flex-col">
        <h5 className="desc-title pb-3">CONTACT</h5>
        <motion.a href="" whileHover={{ scale: 0.95 }} className="pb-1">
          Email
        </motion.a>
        <motion.a href="" whileHover={{ scale: 0.95 }} className="pb-1">
          Instagram
        </motion.a>
      </div>

      <div className="md:text-[1.5vw] lg:text-[1vw] desc-title flex flex-col text-right">
        <h3>I play drums too checkout</h3>
        <div className="flex">
          <h3>on my ‎</h3>
          <motion.a href="" whileHover={{ scale: 0.95 }}>
            Youtube ←
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
