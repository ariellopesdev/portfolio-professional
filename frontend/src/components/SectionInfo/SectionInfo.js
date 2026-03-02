//CSS
import "./SectionInfo.css";

//Component
import TwoLines from "../TwoLines/TwoLines";

const SectionInfo = ({ title, color = "#ff5f5f", animate }) => {
  return (
    <div className={`section__info ${animate ? "animate" : ""}`}>
      <h1 className="info__title">{title}</h1>
      <TwoLines color={color} />
    </div>
  );
};

export default SectionInfo;

