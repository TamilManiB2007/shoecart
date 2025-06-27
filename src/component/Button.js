

import { motion } from "framer-motion";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <motion.button
      onClick={onClickHandler}
      value={value}
      className="btns bg-white dark:bg-gray-800 text-black dark:text-white transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {title}
    </motion.button>
  );
};

export default Button;
