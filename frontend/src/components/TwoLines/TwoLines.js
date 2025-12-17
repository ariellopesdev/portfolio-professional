import "./TwoLines.css";

const TwoLines = ({ color = "#ff5f5f", compact = true }) => {
  return (
    <div
      className={`two-lines ${compact ? "compact" : ""}`}
      style={{ "--line-color": color }}
    />
  );
};

export default TwoLines;
