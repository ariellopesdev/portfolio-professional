import { useEffect, useState, useRef } from "react";

export function useScrollEffect(sections) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const isScrolling = useRef(false);
  const isManualScroll = useRef(false);

  // -------------------------------------------
  // FUNÇÃO DE SCROLL PELO MENU (NÃO INTERFERE NO HOOK)
  // -------------------------------------------
  const scrollToSection = (index) => {
    isManualScroll.current = true;
    setCurrentSection(index);

    const target = document.getElementById(sections[index]);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // libera o hook depois do scroll suave
    setTimeout(() => {
      isManualScroll.current = false;
    }, 800);
  };

  // -------------------------------------------
  // CONTROLE DO SCROLL NATURAL (RODA DO MOUSE / TOUCH)
  // -------------------------------------------
  const handleScroll = (direction) => {
    if (isScrolling.current || isManualScroll.current) return;

    isScrolling.current = true;

    setCurrentSection((prev) => {
      const nextIndex = direction === "down" ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(nextIndex, sections.length - 1));
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    setIsReady(true);

    const onWheel = (e) => handleScroll(e.deltaY > 0 ? "down" : "up");

    let startY = 0;
    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      const diff = startY - endY;

      if (Math.abs(diff) > 50) {
        handleScroll(diff > 0 ? "down" : "up");
      }
    };

    window.addEventListener("wheel", onWheel);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // -------------------------------------------
  // SCROLL AUTOMÁTICO AO TROCAR currentSection
  // -------------------------------------------
  useEffect(() => {
    if (!isReady || isManualScroll.current) return;

    const target = document.getElementById(sections[currentSection]);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection, isReady]);

  return { currentSection, isReady, scrollToSection };
}
