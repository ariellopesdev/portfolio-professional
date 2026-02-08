// CSS
import "./Contact.css";

// Components
import SectionContent from "../SectionContent/SectionContent";

// ================================
// CONTACT SECTION (CLEAN VERSION)
// ================================
const Contact = () => {
  return (
    <section id="contact">
      <div className="sections-wrapper">
        <SectionContent>
          <div className="contact__block--centered">
            <h1 className="contact__calltoaction">
              Entre em <span>contato</span> comigo.
            </h1>
            <p className="contact__text">Será um grande prazer conversarmos!</p>
            <a
              href="https://wa.me/5532998291774"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__calltoaction--btn"
            >
              Mandar mensagem via WhatsApp
            </a>
            <div id="contact__actions">
              <a
                className="contact__actions--link"
                href="https://www.linkedin.com/in/ariel-lopes-71000821b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="contact__actions--link"
                href="https://github.com/ariellopesdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </SectionContent>
      </div>
    </section>
  );
};

export default Contact;
