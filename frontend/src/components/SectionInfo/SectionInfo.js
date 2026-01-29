import "./SectionInfo.css";

// Two Lines
import TwoLines from "../TwoLines/TwoLines";

const SectionInfo = ({ title, text, color = "#ff5f5f" }) => {
  return (
    <div className="section-info">
      <h1 className="animate-title">{title}</h1>
      <TwoLines color={color} />
      {text && <p className="animate-text">{text}</p>}
    </div>
  );
};

export default SectionInfo;

