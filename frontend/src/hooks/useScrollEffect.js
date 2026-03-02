import { useEffect, useState, useCallback, useRef } from "react";

const sectionIds = ["hero", "projects", "about", "curriculum", "contact"];

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

      const direction = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;
      setScrollDirection(direction);

      let currentSection = 0;

      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (currentY >= section.offsetTop - window.innerHeight * 0.6) {
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
