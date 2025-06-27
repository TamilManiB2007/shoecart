// import { FiHeart } from "react-icons/fi";
// import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
// import "./Nav.css";

// const Nav = ({ handleInputChange, query }) => {
//   return (
//     <nav>
//       <div className="nav-container">
//         <input
//           className="search-input"
//           type="text"
//           onChange={handleInputChange}
//           value={query}
//           placeholder="Enter your search shoes."
//         />
//       </div>
//       <div className="profile-container">
//         <a href="#">
//           <FiHeart className="nav-icons" />
//         </a>
//         <a href="">
//           <AiOutlineShoppingCart className="nav-icons" />
//         </a>
//         <a href="">
//           <AiOutlineUserAdd className="nav-icons" />
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="nav-wrapper"
    >
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Nav;
