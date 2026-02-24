import "./SectionInfo.css";

import TwoLines from "../TwoLines/TwoLines";

const SectionInfo = ({ title, text, color = "#ff5f5f" }) => {
  return (
    <div className="section__info">
      <h1 className="info__title">{title}</h1>
      <TwoLines color={color} />
    </div>
  );
};

export default SectionInfo;

