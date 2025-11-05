import "./Contact.css";

//Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

//Hooks
import { useVisibleState } from "../../hooks/useVisibleState";

const Contact = () => {
  const { ref, isVisible } = useVisibleState(0.3);
  return (
    <section id="contact" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Contato"
          text="Me envie uma mensagem"
          isVisible={isVisible}
        />
        <SectionContent>
          <form className="contact-form">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Assunto" />
            <textarea placeholder="Mensagem" required></textarea>
            <button type="submit">Enviar</button>

            <div className="social-icons">
              <a href="https://linkedin.com/in/seu-link" target="_blank">
                LinkedIn
              </a>
              <a href="https://github.com/seu-usuario" target="_blank">
                GitHub
              </a>
            </div>
          </form>
        </SectionContent>
      </div>
    </section>
  );
};

export default Contact;
