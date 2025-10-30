//CSS
import "./Navbar.css";

//Router
import { NavLink, Link } from "react-router-dom";

//Hooks
import { useState } from "react";

//Icons
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header>
      <h1>Logo</h1>
      <ul id="ul-header">
        <li>
          <a
            href="https://github.com/ariellopesdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="nav-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ariel-lopes-71000821b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="nav-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/5532998291774"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="nav-icon" />
          </a>
        </li>
        <li>
          <a href="mailto:ariel_lopescwb2017@hotmail.com">
            <MdEmail className="nav-icon" />
          </a>
        </li>
      </ul>
      <div id="menu-btn">
        <button id="menu-btn-toggle" onClick={toggleMenu}>
          {menuOpen ? (
            <FaBars className="nav-icon" />
          ) : (
            <FaBars className="nav-icon" />
          )}
        </button>
      </div>
      <nav className={`fullscreen-menu ${menuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          <FaTimes />
        </button>
        <ul>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              PROJETOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              SOBRE MIM
            </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" onClick={closeMenu}>
              CURRÍCULO
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              CONTATO
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
