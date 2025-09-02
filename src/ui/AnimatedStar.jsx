import { motion } from "motion/react";

const AnimatedStar = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 -960 960 960"
      width="30px"
      className="inline fill-[#009688]"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <path d="M480-200 200-480l280-280 280 280-280 280Zm0-114 166-166-166-166-166 166 166 166Zm0-166Z" />
    </motion.svg>
  );
};

export default AnimatedStar;
