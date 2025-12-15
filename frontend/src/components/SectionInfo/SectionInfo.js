//CSS
import "./SectionInfo.css";

//Two Lines
import TwoLines from "../TwoLines/TwoLines";

//Currículo
import curriculoPdf from "../../assets/curriculo_ariel_lopes.pdf";

//Router
import { useNavigate } from "react-router-dom";

const SectionInfo = ({
  title,
  text,
  isVisible,
  buttonText,
  buttonLink,
  color = "ff5f5f",
  externalLink,
  contacts = [],
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!buttonLink) return;

    // PDF
    if (buttonLink === "pdf") {
      window.open(curriculoPdf, "_blank", "noopener,noreferrer");
      return;
    }
    if (externalLink) {
      window.open(buttonLink, "_blank", "noopener,noreferrer");
    } else {
      navigate(buttonLink);
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