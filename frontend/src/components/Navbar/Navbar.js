//CSS
import "./Navbar.css";

//components
import { NavLink, Link } from "react-router-dom";

import { FaGithub, FaLinkedin, FaWhatsapp, FaBars } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <header>
      <ul id="ul-header">
        <li>
          <FaGithub className="nav-icon" />
        </li>
        <li>
          <FaLinkedin className="nav-icon" />
        </li>
        <li>
          <FaWhatsapp className="nav-icon" />
        </li>
        <li>
          <MdEmail className="nav-icon" />
        </li>
      </ul>
      <div id="menu-btn">
        <button id="menu-btn-toggle">
          <FaBars className="nav-icon"/>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
