//CSS
import "./TwoLines.css";

const TwoLines = ({ isVisible = false, color = "ff5f5f", compact = true }) => {
  return (
    <div
      className={`two-lines ${compact ? "compact" : ""} ${
        isVisible ? "visible" : "reset"
      }`}
    ></div>
  );
};

export default TwoLines;
