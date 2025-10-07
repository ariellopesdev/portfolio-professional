//CSS
import "./Navbar.css";

//components
import { NavLink, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <header>
      <ul>
        <li><FaGithub /></li>
        <li><FaLinkedin /></li>
        <li><FaWhatsapp /></li>
        <li><MdEmail /></li>
      </ul>
    </header>
  );
};

export default Navbar;
