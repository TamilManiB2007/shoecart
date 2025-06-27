
import React from "react";
import { motion } from "framer-motion";
import "./Product.css";

const Products = ({ result }) => {
  return (
    <motion.section
      className="card-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {result}
    </motion.section>
  );
};

export default Products;
