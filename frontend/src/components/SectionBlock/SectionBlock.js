// CSS
import "./SectionBlock.css";

// Hooks
import { useVisibleState } from "../../hooks/useVisibleState";

// Components
import TwoLines from "../TwoLines/TwoLines";

// Assets
import curriculoPdf from "../../assets/curriculo_ariel_lopes.pdf";

// Router
import { useNavigate } from "react-router-dom";

const SectionBlock = ({
  title,
  text,
  children,
  buttonText,
  buttonLink,
  color = "ff5f5f",
  externalLink,
  contacts = [],
}) => {
  const { ref, isVisible } = useVisibleState(0.3);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!buttonLink) return;

    // Abrir PDF
    if (buttonLink === "pdf") {
      window.open(curriculoPdf, "_blank", "noopener,noreferrer");
      return;
    }

    // Link externo
    if (externalLink) {
      window.open(buttonLink, "_blank", "noopener,noreferrer");
      return;
    }

    // Navegação interna
    navigate(buttonLink);
  };

  return (
    <div ref={ref} className={`section-content ${isVisible ? "visible" : ""}`}>
      {/* Layers */}
      <div className="layer layer-deep"></div>
      <div className="layer layer-mid"></div>
      <div className="layer layer-top"></div>

      <div className={`section-inner ${isVisible ? "visible" : ""}`}>
        {/* SECTION INFO */}
        {(title || text || buttonText) && (
          <div className="section-info">
            {title && (
              <h1 className={isVisible ? "visible" : "reset"}>{title}</h1>
            )}

            <TwoLines isVisible={isVisible} color={color} />

            {text && <p className={isVisible ? "visible" : "reset"}>{text}</p>}

            {buttonText && buttonLink && (
              <button
                className={`btn-navigate ${isVisible ? "visible" : "reset"}`}
                onClick={handleClick}
              >
                {buttonText}
              </button>
            )}

            {/* CONTACTS (preservado) */}
            {contacts.length > 0 && (
              <div
                className={`section-contacts ${
                  isVisible ? "visible" : "reset"
                }`}
              >
                {contacts.map((contact, index) => (
                  <span key={index}>{contact}</span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CONTEÚDO EXTRA */}
        {children}
      </div>
    </div>
  );
};

export default SectionBlock;
