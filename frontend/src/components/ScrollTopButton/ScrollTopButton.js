//CSS
import "./ScrollTopButton.css";

//Icons
import { FaChevronUp } from "react-icons/fa";

//Hooks
import { useScrollEffect } from "../../hooks/useScrollEffect";


const ScrollTopButton = () => {
  const { scrollToSection, showScrollTop } = useScrollEffect();

  if (!showScrollTop) return null;

  return (
    <button
      className="scroll__top--btn"
      onClick={() => scrollToSection(0)}
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollTopButton;