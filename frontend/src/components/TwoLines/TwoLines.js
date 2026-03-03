//CSS
import "./TwoLines.css";

import useSectionAnimation from "../../hooks/useSectionAnimation";

const TwoLines = ({ activeSection, index, color = "#ff5f5f", compact = true, variant = "default" }) => {
  const hasAnimated = useSectionAnimation(activeSection, index);

  return (
    <div
      className={`two-lines ${compact ? "compact" : ""} ${variant} ${hasAnimated ? "animate" : ""}`}
      style={{ "--line-color": color }}
    />
  );
};

export default TwoLines;
