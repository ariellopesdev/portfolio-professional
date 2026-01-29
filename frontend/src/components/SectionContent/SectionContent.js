//CSS
import "./SectionContent.css";

//Component
import SectionActionButton from "../SectionActionButton/SectionActionButton";

const SectionContent = ({ children, action }) => {
  return (
    <div className="section-content animate">
      <div className="layer layer-deep"></div>
      <div className="layer layer-mid"></div>
      <div className="layer layer-top"></div>

      <div className="section-inner">
        {children}

        {action && (
          <SectionActionButton
            text={action.text}
            link={action.link}
            external={action.external}
          />
        )}
      </div>
    </div>
  );
};

export default SectionContent;
