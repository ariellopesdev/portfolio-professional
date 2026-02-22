//CSS
import "./Navbar.css";

//Router
import { NavLink } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <h1>Logo</h1>
      <ul id="ul-header">
        <li onClick={() => scrollToSection(0)}>Home</li>
        <li onClick={() => scrollToSection(1)}>Projetos</li>
        <li onClick={() => scrollToSection(2)}>Sobre</li>
        <li onClick={() => scrollToSection(3)}>Currículo</li>
        <li onClick={() => scrollToSection(4)}>Contato</li>
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
              className={({ isActive }) => (isActive ? "active-header" : "")}
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
