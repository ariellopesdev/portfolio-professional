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
      <ul id="header__ul">
        <li
          className={activeSection === 0 ? "header__active-li" : ""}
          onClick={() => scrollToSection(0)}
        >
          Home
        </li>
        <li
          className={activeSection === 1 ? "header__active-li" : ""}
          onClick={() => scrollToSection(1)}
        >
          Projetos
        </li>
        <li
          className={activeSection === 2 ? "header__active-li" : ""}
          onClick={() => scrollToSection(2)}
        >
          Sobre
        </li>
        <li
          className={activeSection === 3 ? "header__active-li" : ""}
          onClick={() => scrollToSection(3)}
        >
          Currículo
        </li>
        <li
          className={activeSection === 4 ? "header__active-li" : ""}
          onClick={() => scrollToSection(4)}
        >
          Contato
        </li>
      </ul>
      <div id="header__menu-btn">
        <button id="menu__btn-toggle" onClick={toggleMenu}>
          {menuOpen ? (
            <FaBars className="header__nav-icon" />
          ) : (
            <FaBars className="header__nav-icon" />
          )}
        </button>
      </div>
      <nav className={`header__fs-menu ${menuOpen ? "active" : ""}`}>
        <button className="header__close-btn" onClick={closeMenu}>
          <FaTimes />
        </button>

        <ul>
          <li
            className={activeSection === 0 ? "header__active-li" : ""}
            onClick={() => {
              closeMenu();
              scrollToSection(0);
            }}
          >
            Home
          </li>

          <li
            className={activeSection === 1 ? "header__active-li" : ""}
            onClick={() => {
              closeMenu();
              scrollToSection(1);
            }}
          >
            Projetos
          </li>

          <li
            className={activeSection === 2 ? "header__active-li" : ""}
            onClick={() => {
              closeMenu();
              scrollToSection(2);
            }}
          >
            Sobre Mim
          </li>

          <li
            className={activeSection === 3 ? "header__active-li" : ""}
            onClick={() => {
              closeMenu();
              scrollToSection(3);
            }}
          >
            Currículo
          </li>

          <li
            className={activeSection === 4 ? "header__active-li" : ""}
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
