import { useEffect, useState, useCallback, useRef } from "react";

const sectionIds = ["main", "projects", "about", "curriculum", "contact"];

export const useScrollEffect = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  const lastScrollY = useRef(0);

  const scrollToSection = useCallback((index) => {
    const element = document.getElementById(sectionIds[index]);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // 🔥 Detecta direção corretamente
      const direction = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;
      setScrollDirection(direction);

      let currentSection = 0;

      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);
        if (!section) return;

        // 🔥 agora ativa só quando realmente chega no topo
        if (currentY >= section.offsetTop - window.innerHeight * 0.3) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);

      const projects = document.getElementById("projects");
      if (projects) {
        setShowScrollTop(currentY >= projects.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    activeSection,
    scrollToSection,
    showScrollTop,
    scrollDirection,
  };
};
