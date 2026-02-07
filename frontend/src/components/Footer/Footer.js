//CSS
import "./Footer.css";

//Components
import SectionContent from "../SectionContent/SectionContent";

//Icons
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="footer">
      <div className="sections-wrapper">
        <SectionContent>
          <div className="footer__block--centered">
            <div className="footer__info">
              <h2 className="footer__info--name">Ariel Lopes</h2>
              <h3 className="footer__info--city">Juiz de Fora, MG, Brasil</h3>
              <div className="footer__info--contact">
                <p className="info__contact--tel">+55 32 99829-1774</p>
                <p className="info__contact--email">
                  ariel_lopescwb2017@hotmail.com
                </p>
              </div>
              <ul id="footer__info--social">
                <li>
                  <a
                    href="https://github.com/ariellopesdev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="nav-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ariel-lopes-71000821b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="nav-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5532998291774"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="nav-icon" />
                  </a>
                </li>
                <li>
                  <a href="mailto:ariel_lopescwb2017@hotmail.com">
                    <MdEmail className="nav-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__block--centered">
            <div className="footer__copyright">
              <p className="footer__copyright--content">
                &copy; <a>Link para Home Portfolio de Ariel Lopes</a>. Todos os Direitos Reservados | Developed by <a href="https://github.com/ariellopesdev">Link do GitHub - ariellopesdev</a> 
              </p>
            </div>
          </div>
        </SectionContent>
      </div>
    </div>
  );
};

export default Footer;
