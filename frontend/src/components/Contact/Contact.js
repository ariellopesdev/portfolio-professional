//CSS
import "./Contact.css";

//Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

//Hooks
import { useState } from "react";
import { useVisibleState } from "../../hooks/useVisibleState";

//Icons
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const { ref, isVisible } = useVisibleState(0.3);
  const [message, setMessage] = useState("");
  const maxChars = 500;
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
            <textarea
              placeholder="Mensagem"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={maxChars}
            ></textarea>
            <small>
              {message.length}/{maxChars} caracteres
            </small>
            <button className="btn-form" type="submit">Enviar</button>
          </form>
          <ul id="ul-contact">
            <li>
              <a
                href="https://github.com/ariellopesdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="nav-icon" />
              </a>
              <p>github.com/ariellopesdev</p>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ariel-lopes-71000821b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="nav-icon" />
              </a>
              <p>ariel-lopes-71000821b/</p>
            </li>
            <li>
              <a
                href="https://wa.me/5532998291774"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="nav-icon" />
                <p>+55 32 99829-1774</p>
              </a>
            </li>
            <li>
              <a href="mailto:ariel_lopescwb2017@hotmail.com">
                <MdEmail className="nav-icon" />
              </a>
              <p>ariel_lopescwb2017@hotmail.com</p>
            </li>
          </ul>
        </SectionContent>
      </div>
    </section>
  );
};

export default Contact;
