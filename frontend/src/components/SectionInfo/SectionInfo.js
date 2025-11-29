//CSS
import "./SectionInfo.css";

//Two Lines
import TwoLines from "../TwoLines/TwoLines";

//Currículo
import curriculoPdf from "../../assets/curriculo_ariel_lopes.pdf";

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
  const handleClick = () => {
    if (!buttonLink) return;

    // Link conditions
    if (buttonLink === "pdf") {
      window.open(curriculoPdf, "_blank", "noopener,noreferrer");
      return;
    }
    if (externalLink) {
      window.open(buttonLink, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = buttonLink;
    }
  };

  return (
    <div className="section-info">
      <h1 className={isVisible ? "visible" : "reset"}>{title}</h1>
      <TwoLines isVisible={isVisible} color={color} />
      <p className={isVisible ? "visible" : "reset"}>{text}</p>
      {contacts.length > 0 && (
        <div className={`contacts-wrapper ${isVisible ? "visible" : "reset"}`}>
          {contacts.map(({ icon: Icon, href, label }, index) => (
            <div key={index} className="contact-item">
              <a
                href={href}
                target={externalLink ? "_blank" : "_self"}
                rel={externalLink ? "noopener noreferrer" : undefined}
                className="contact-icon-link"
              >
                <Icon className="contact-icon" />
              </a>
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
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
