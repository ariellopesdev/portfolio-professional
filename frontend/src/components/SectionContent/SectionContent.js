//CSS
import "./SectionContent.css";

//Hooks
import { useVisibleState } from "../../hooks/useVisibleState";

const SectionContent = ({children}) => {
  const { ref, isVisible } = useVisibleState(0.3);

  return (
    <div ref={ref} className={`section-content ${isVisible ? "visible" : ""}`}>
      <div className="layer layer-deep"></div>
      <div className="layer layer-mid"></div>
      <div className="layer layer-top"></div>

      <div className={`section-inner ${isVisible ? "visible" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionContent;