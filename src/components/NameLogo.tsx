import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const transition = {
  duration: 0.8,
  ease: [0, 0.71, 0.2, 1.01],
};

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between animations of each <path>
    },
  },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition,
  },
};

function AnimatedLogo({ startAnimation }: { startAnimation: boolean }) {
  const controls = useAnimation();

  useEffect(() => {
    if (startAnimation) {
      controls.start("visible"); // Start animation when `startAnimation` is true
    }
  }, [startAnimation, controls]);

  return (
    <motion.svg
      width="1560"
      height="143"
      viewBox="0 0 1560 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate={controls} // Use `controls` to manage animation
    >
      <motion.path
        d="M96.8 116.2H44.4L36 141H0.200012L51 0.600006H90.6L141.4 141H105.2L96.8 116.2ZM88 89.8L70.6 38.4L53.4 89.8H88Z"
        fill="#292929"
        variants={pathVariants}
      />
      <motion.path
        d="M272.461 141H238.261L181.061 54.4V141H146.861V0.600006H181.061L238.261 87.6V0.600006H272.461V141Z"
        fill="#292929"
        variants={pathVariants}
      />
      <motion.path
        d="M339.852 0.600006C354.652 0.600006 367.585 3.53334 378.652 9.4C389.718 15.2667 398.252 23.5333 404.252 34.2C410.385 44.7333 413.452 56.9333 413.452 70.8C413.452 84.5333 410.385 96.7333 404.252 107.4C398.252 118.067 389.652 126.333 378.452 132.2C367.385 138.067 354.518 141 339.852 141H287.252V0.600006H339.852ZM337.652 111.4C350.585 111.4 360.652 107.867 367.852 100.8C375.052 93.7333 378.652 83.7333 378.652 70.8C378.652 57.8667 375.052 47.8 367.852 40.6C360.652 33.4 350.585 29.8 337.652 29.8H321.452V111.4H337.652Z"
        fill="#292929"
        variants={pathVariants}
      />
      <motion.path
        d="M456.764 0.600006V141H422.564V0.600006H456.764Z"
        fill="#292929"
        variants={pathVariants}
      />
      <motion.path
        d="M666.4 0.600006V141H632.2V56.8L600.8 141H573.2L541.6 56.6V141H507.4V0.600006H547.8L587.2 97.8L626.2 0.600006H666.4Z"
        fill="#292929"
        variants={pathVariants}
      />
      <motion.path
        d="M768.394 116.2H715.994L707.594 141H671.794L722.594 0.600006H762.194L812.994 141H776.794L768.394 116.2ZM759.594 89.8L742.194 38.4L724.994 89.8H759.594Z"
        fill="#292929"
        variants={pathVariants}
      />
      <motion.path
        d="M919.455 0.600006V28H882.255V141H848.055V28H810.855V0.600006H919.455Z"
        fill="#292929"
        variants={pathVariants}
      />
      <motion.path
        d="M1014.02 116.2H961.619L953.219 141H917.419L968.219 0.600006H1007.82L1058.62 141H1022.42L1014.02 116.2ZM1005.22 89.8L987.819 38.4L970.619 89.8H1005.22Z"
        fill="#292929"
        variants={pathVariants}
      />
      <motion.path
        d="M1135.68 141L1106.48 88H1098.28V141H1064.08V0.600006H1121.48C1132.55 0.600006 1141.95 2.53334 1149.68 6.4C1157.55 10.2667 1163.41 15.6 1167.28 22.4C1171.15 29.0667 1173.08 36.5333 1173.08 44.8C1173.08 54.1333 1170.41 62.4667 1165.08 69.8C1159.88 77.1333 1152.15 82.3333 1141.88 85.4L1174.28 141H1135.68ZM1098.28 63.8H1119.48C1125.75 63.8 1130.41 62.2667 1133.48 59.2C1136.68 56.1333 1138.28 51.8 1138.28 46.2C1138.28 40.8667 1136.68 36.6667 1133.48 33.6C1130.41 30.5333 1125.75 29 1119.48 29H1098.28V63.8Z"
        fill="#292929"
        variants={pathVariants}
      />

      <motion.path
        d="M1271.95 116.2H1219.55L1211.15 141H1175.35L1226.15 0.600006H1265.75L1316.55 141H1280.35L1271.95 116.2ZM1263.15 89.8L1245.75 38.4L1228.55 89.8H1263.15Z"
        fill="#292929"
        variants={pathVariants}
      />

      <motion.path
        d="M1410.01 0.600006V96.2C1410.01 111 1405.81 122.4 1397.41 130.4C1389.14 138.4 1377.94 142.4 1363.81 142.4C1349.01 142.4 1337.14 138.2 1328.21 129.8C1319.28 121.4 1314.81 109.467 1314.81 94H1348.81C1348.81 99.8667 1350.01 104.333 1352.41 107.4C1354.81 110.333 1358.28 111.8 1362.81 111.8C1366.94 111.8 1370.14 110.467 1372.41 107.8C1374.68 105.133 1375.81 101.267 1375.81 96.2V0.600006H1410.01Z"
        fill="#292929"
        variants={pathVariants}
      />
      <motion.path
        d="M1515.03 116.2H1462.63L1454.23 141H1418.43L1469.23 0.600006H1508.83L1559.63 141H1523.43L1515.03 116.2ZM1506.23 89.8L1488.83 38.4L1471.63 89.8H1506.23Z"
        fill="#292929"
        variants={pathVariants}
      />
    </motion.svg>
  );
}

export default AnimatedLogo;
