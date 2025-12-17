import "./SectionContent.css";

const SectionContent = ({ children }) => {
  return (
    <div className="section-content animate">
      <div className="layer layer-deep"></div>
      <div className="layer layer-mid"></div>
      <div className="layer layer-top"></div>

      <div className="section-inner">
        {children}
      </div>
    </div>
  );
};

export default SectionContent;
