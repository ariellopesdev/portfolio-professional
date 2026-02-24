import { useEffect, useState, useCallback } from "react";

export const useScrollEffect = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sectionIds = ["main", "projects", "about", "curriculum", "contact"];

  // 🔹 Scroll simples (SEM cálculo de header)
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
      let currentSection = 0;

      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (window.scrollY >= section.offsetTop - 80) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);

      const projects = document.getElementById("projects");
      if (projects) {
        setShowScrollTop(window.scrollY >= projects.offsetTop - 100);
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
  };
};