//CSS
import "./SectionInfo.css";

//Two Lines
import TwoLines from "../TwoLines/TwoLines";

const SectionInfo = ({
  title,
  text,
  isVisible,
  buttonText,
  buttonLink,
  color = "ff5f5f",
}) => {
  const handleClick = () => {
    if (buttonLink) {
      window.location.href = buttonLink;
    }
  };
  return (
    <div className="section-info">
      <h1 className={isVisible ? "visible" : "reset"}>{title}</h1>
      <TwoLines isVisible={isVisible} color={color} />
      <p className={isVisible ? "visible" : "reset"}>{text}</p>
      {buttonText && buttonLink && (
        <button
          className={`btn-navigate ${isVisible ? "visible" : "reset"}`}
          onClick={handleClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default SectionInfo;
