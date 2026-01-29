// CSS
import "./SectionActionButton.css";

// Currículo
import curriculoPdf from "../../assets/curriculo_ariel_lopes.pdf";

// Router
import { useNavigate } from "react-router-dom";

const SectionActionButton = ({
  text,
  link,
  external,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link === "pdf") {
      window.open(curriculoPdf, "_blank", "noopener,noreferrer");
      return;
    }

    if (external) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate(link);
    }
  };

  return (
    <div className="section-action">
      <button className="btn-navigate" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default SectionActionButton;
