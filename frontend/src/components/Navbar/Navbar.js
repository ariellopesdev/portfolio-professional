//CSS
import "./Navbar.css";

//Router
import { NavLink, useLocation } from "react-router-dom";

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

const Navbar = ({ scrollToSection }) => {
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
      <nav className={`fullscreen-menu ${menuOpen ? "active" : "closing"}`}>
        <button className="close-btn" onClick={closeMenu}>
          <FaTimes />
        </button>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                closeMenu();
                scrollToSection(0);
              }}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                closeMenu();
                scrollToSection(1);
              }}
            >
              PROJETOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                closeMenu();
                scrollToSection(2);
              }}
            >
              SOBRE MIM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                closeMenu();
                scrollToSection(3);
              }}
            >
              CURRÍCULO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                closeMenu();
                scrollToSection(4);
              }}
            >
              CONTATO
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
