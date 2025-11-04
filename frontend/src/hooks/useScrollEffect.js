import { useState, useEffect } from "react";

export default function useScrollEffect(sections) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // trava temporária
  const [scrollTextVisible, setScrollTextVisible] = useState(true);

  // Controle de Scroll entre as Seções
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      // Impede múltiplos disparos seguidos
      if (isScrolling) return;
      setIsScrolling(true);

      let nextSection = currentSection;

      if (e.deltaY > 0) {
        //scroll para baixo
        nextSection = Math.min(currentSection + 1, sections.length - 1);
      } else {
        //scroll para cima
        nextSection = Math.max(currentSection - 1, 0);
      }

      setCurrentSection(nextSection);

      //Controle do scroll text: visível apenas no main(índice 0)
      if (nextSection === 0) setScrollTextVisible(true);
      else setScrollTextVisible(false);

      // Libera o scroll após 1 segundo
      setTimeout(() => setIsScrolling(false), 800);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isScrolling, currentSection, sections.length]);

  // scroll para a seção atual
  useEffect(() => {
    const target = document.getElementById(sections[currentSection]);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, [currentSection, sections]);

  return {currentSection, scrollTextVisible};
}
