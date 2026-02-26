import "./SectionContent.css";
import { useEffect, useState } from "react";

const SectionContent = ({ children, activeSection, index }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isReload, setIsReload] = useState(false);

  // 🔥 Detecta reload apenas UMA VEZ
  useEffect(() => {
    const navigationEntries = performance.getEntriesByType("navigation");
    if (
      navigationEntries.length > 0 &&
      navigationEntries[0].type === "reload"
    ) {
      setIsReload(true);
    }
  }, []);

  // 🔥 Controla animação
  useEffect(() => {
    if (!hasAnimated && activeSection === index) {
      setHasAnimated(true);
    }
  }, [activeSection, index, hasAnimated]);

  return (
    <div className={`section-content ${hasAnimated ? "animate" : ""}`}>
      <div className="layer layer-deep"></div>
      <div className="layer layer-mid"></div>
      <div className="layer layer-top"></div>

      <div className="section-inner">{children}</div>
    </div>
  );
};

export default SectionContent;