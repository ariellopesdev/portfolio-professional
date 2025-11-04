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
        <div className="section-content">
          <div className="contactcard">
            <i></i>
            <h2>Redes Sociais</h2>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="contactcard">
            <i></i>
            <h2>Email</h2>
            <p>ariel_lopescwb2017@hotmail.com</p>
          </div>
          <div className="contactcard">
            <input type="text" name="" id="" placeholder="Nome" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Assunto" />
            <textarea name="" id="">
              Mensagem
            </textarea>
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
