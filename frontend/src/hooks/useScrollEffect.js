import { useEffect, useState, useCallback } from "react";

export const useScrollEffect = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionIds = [
    "main",
    "projects",
    "about",
    "curriculum",
    "contact",
  ];

  // 🔹 Scroll suave compensando navbar
  const scrollToSection = useCallback((index) => {
    const element = document.getElementById(sectionIds[index]);
    if (!element) return;

    const isDesktop = window.innerWidth > 768;
    const headerHeight = isDesktop
      ? window.scrollY > 50
        ? 60
        : 80
      : 60;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(index);
        }
      });

      // Mostrar botão ao chegar em Projects
      const projects = document.getElementById("projects");
      if (projects) {
        setShowScrollTop(window.scrollY >= projects.offsetTop - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    activeSection,
    scrollToSection,
    showScrollTop,
  };
};