// CSS
import "../PagesGroup/PagesGroup.css";
import "../TabsNavigation/TabsNavigation.css";

//Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

//Hooks
import { useState } from "react";
import { useVisibleState } from "../../hooks/useVisibleState";

//Icons
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// ================================
// MAIN COMPONENT — Contact Section
// ================================
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
          <div className="layout-double">
            <div className="layout-left">
              <h5 className="layout-h5">Oi</h5>
              <ul>
                <li>
                  <a
                    className="btn-projects repo-btn"
                    href="https://github.com/ariellopesdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                  <label>github.com/ariellopesdev</label>
                </li>
                <li>
                  <a
                    className="btn-projects repo-btn"
                    href="https://www.linkedin.com/in/ariel-lopes-71000821b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                  <label>linkedin.com/in/ariel-lopes</label>
                </li>
                <li>
                  <a
                    className="btn-projects repo-btn"
                    href="https://wa.me/5532998291774"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                  <label>+55 32 99829-1774</label>
                </li>
                <li>
                  <a
                    className="btn-projects repo-btn"
                    href="mailto:ariel_lopescwb2017@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                  <label>ariel_lopescwb2017@hotmail.com</label>
                </li>
              </ul>
            </div>
            <div className="layout-right">
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
                <button className="btn-form" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </SectionContent>
      </div>
    </section>
  );
};

export default Contact;
