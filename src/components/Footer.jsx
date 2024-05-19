import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="flex justify-between w-full px-[45px]">
      <div className="flex flex-col">
        <h3 className="desc-title w-fit">Andi Mataraja ©</h3>
        <h3 className="desc-title">Web Developer</h3>
      </div>

      <div className="desc-title flex flex-col">
        <motion.a href="" whileHover={{ scale: 0.95 }}>
          Email
        </motion.a>
        <motion.a href="" whileHover={{ scale: 0.95 }}>
          Instagram
        </motion.a>
        <motion.a href="" whileHover={{ scale: 0.95 }}>
          Behance
        </motion.a>
      </div>

      <div className="desc-title flex flex-col">
        <motion.a href="" whileHover={{ scale: 0.95 }}>
          Behance
        </motion.a>
        <motion.a href="" whileHover={{ scale: 0.95 }}>
          LinkedIn
        </motion.a>
        <motion.a href="" whileHover={{ scale: 0.95 }}>
          CV
        </motion.a>
      </div>

      <div className="desc-title flex flex-col text-right">
        <h3>I play drums too checkout</h3>
        <div className="flex">
          <h3>on my ‎</h3>
          <motion.a href="" whileHover={{ scale: 0.95 }}>
            Youtube
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
