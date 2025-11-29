//CSS
import "./TwoLines.css";

const TwoLines = ({ isVisible = false, color = "ff5f5f" }) => {
  return <div className={`two-lines ${isVisible ? "visible" : "reset"}`}></div>;
};

export default TwoLines;
