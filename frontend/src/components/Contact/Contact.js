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
          externalLink
          contacts={[
            {
              icon: FaGithub,
              href: "https://github.com/ariellopesdev",
              label: "github.com/ariellopesdev",
            },
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/ariel-lopes-71000821b/",
              label: "linkedin.com/in/ariel-lopes",
            },
            {
              icon: FaWhatsapp,
              href: "https://wa.me/5532998291774",
              label: "+55 32 99829-1774",
            },
            {
              icon: MdEmail,
              href: "mailto:ariel_lopescwb2017@hotmail.com",
              label: "ariel_lopescwb2017@hotmail.com",
            },
          ]}
        />
        <SectionContent>
          <div id="contact-container">
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
        </SectionContent>
      </div>
    </section>
  );
};

export default Contact;
