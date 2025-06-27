
import { motion } from "framer-motion";
import Button from "../component/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <motion.div
      className="recommended-container"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </motion.div>
  );
};

export default Recommended;

