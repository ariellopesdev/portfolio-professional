import "./TwoLines.css";

const TwoLines = ({ color = "#ff5f5f", compact = true, variant = "default", }) => {
  return (
    <div
      className={`two-lines ${compact ? "compact" : ""} ${variant}`}
      style={{ "--line-color": color }}
    />
  );
};

export default TwoLines;
