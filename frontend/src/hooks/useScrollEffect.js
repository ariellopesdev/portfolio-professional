import { useState, useEffect } from "react";

export default function useScrollEffect(sections) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTextVisible, setScrollTextVisible] = useState(true);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleScroll = (direction) => {
      if (isScrolling) return;
      setIsScrolling(true);

      let nextSection = currentSection;

      if (direction === "down") {
        nextSection = Math.min(currentSection + 1, sections.length - 1);
      } else if (direction === "up") {
        nextSection = Math.max(currentSection - 1, 0);
      }

      setCurrentSection(nextSection);
      setScrollTextVisible(nextSection === 0);

      setTimeout(() => setIsScrolling(false), 800);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      handleScroll(e.deltaY > 0 ? "down" : "up");
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) < 50) return; // ignora toques leves
      handleScroll(deltaY > 0 ? "down" : "up");
    };

    // Eventos desktop e mobile
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isScrolling, currentSection, sections.length]);

  // Scroll para a seção atual
  useEffect(() => {
    const target = document.getElementById(sections[currentSection]);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, [currentSection, sections]);

  return { currentSection, scrollTextVisible };
}
