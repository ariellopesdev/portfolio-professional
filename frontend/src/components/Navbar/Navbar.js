//CSS
import "./Navbar.css";

//Hooks
import { useState, useEffect } from "react";

//Icons
import { FaBars, FaTimes } from "react-icons/fa";

//Images
import logoImage from "../../assets/images/logo-2.png";

const Navbar = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 769px)");

    const handleMediaChange = (e) => {
      if (e.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

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
      <img
        src={logoImage}
        alt="Logo image"
        className="logo__image"
        onClick={() => {
          closeMenu();
          scrollToSection(0);
        }}
      />
      <ul id="ul-header">
        <li
          className={activeSection === 0 ? "active-header" : ""}
          onClick={() => scrollToSection(0)}
        >
          Home
        </li>
        <li
          className={activeSection === 1 ? "active-header" : ""}
          onClick={() => scrollToSection(1)}
        >
          Projetos
        </li>
        <li
          className={activeSection === 2 ? "active-header" : ""}
          onClick={() => scrollToSection(2)}
        >
          Sobre
        </li>
        <li
          className={activeSection === 3 ? "active-header" : ""}
          onClick={() => scrollToSection(3)}
        >
          Currículo
        </li>
        <li
          className={activeSection === 4 ? "active-header" : ""}
          onClick={() => scrollToSection(4)}
        >
          Contato
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
          <li
            className={activeSection === 0 ? "active-header" : ""}
            onClick={() => {
              closeMenu();
              scrollToSection(0);
            }}
          >
            Home
          </li>

          <li
            className={activeSection === 1 ? "active-header" : ""}
            onClick={() => {
              closeMenu();
              scrollToSection(1);
            }}
          >
            Projetos
          </li>

          <li
            className={activeSection === 2 ? "active-header" : ""}
            onClick={() => {
              closeMenu();
              scrollToSection(2);
            }}
          >
            Sobre Mim
          </li>

          <li
            className={activeSection === 3 ? "active-header" : ""}
            onClick={() => {
              closeMenu();
              scrollToSection(3);
            }}
          >
            Currículo
          </li>

          <li
            className={activeSection === 4 ? "active-header" : ""}
            onClick={() => {
              closeMenu();
              scrollToSection(4);
            }}
          >
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
