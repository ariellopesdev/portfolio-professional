import { useState, useEffect, useRef } from "react";

export default function useScrollEffect(sections) {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollTextVisible, setScrollTextVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const hasRestored = useRef(false);

  // 🔹 Restaura a seção salva no localStorage (sem animação)
  useEffect(() => {
    if (hasRestored.current) return;

    const savedSection = localStorage.getItem("currentSection");
    let index = 0;

    if (savedSection !== null) {
      const parsed = parseInt(savedSection, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed < sections.length) {
        index = parsed;
      }
    }

    setCurrentSection(index);
    setScrollTextVisible(index === 0);

    // Aguarda a renderização completa antes de posicionar a seção
    requestAnimationFrame(() => {
      const target = document.getElementById(sections[index]);
      if (target) {
        // Usa scroll instantâneo e sem efeito
        target.scrollIntoView({ behavior: "instant", block: "start" });
      }
      setIsReady(true);
    });

    hasRestored.current = true;
  }, [sections]);

  // 🔹 Salva a seção atual no localStorage
  useEffect(() => {
    if (isReady) {
      localStorage.setItem("currentSection", currentSection);
    }
  }, [currentSection, isReady]);

  // 🔹 Controle de rolagem via mouse e toque
  useEffect(() => {
    if (!isReady) return;
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

      if (nextSection !== currentSection) {
        setCurrentSection(nextSection);
        setScrollTextVisible(nextSection === 0);
      }

      setTimeout(() => setIsScrolling(false), 800);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? "down" : "up";
      handleScroll(direction);
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      if (Math.abs(deltaY) < 50) return;
      const direction = deltaY > 0 ? "down" : "up";
      handleScroll(direction);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isReady, isScrolling, currentSection, sections.length]);

  // 🔹 Scroll suave apenas quando o usuário muda de seção, não ao carregar
  useEffect(() => {
    if (!isReady) return;
    if (!hasRestored.current) return; // garante que o primeiro load é instantâneo

    const target = document.getElementById(sections[currentSection]);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentSection, isReady, sections]);

  return { currentSection, isReady };
}
