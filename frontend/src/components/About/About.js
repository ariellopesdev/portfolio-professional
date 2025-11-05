//CSS
import "./About.css";

//Component
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

//Hooks
import { useVisibleState } from "../../hooks/useVisibleState";

const About = () => {
  const { ref, isVisible } = useVisibleState(0.3);
  return (
    <section id="about" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Sobre Mim"
          text="Olá, sou o Ariel."
          isVisible={isVisible}
        />
        <SectionContent>
          <p>
            Há 2 anos desenvolvendo sites, sistemas e web apps em projetos
            pessoais e acadêmicos, utilizando a linguagem Javascript e a
            biblioteca React.Js, com ferramentas como: Redux/Redux Toolkit,
            React Router, Fetch API e Styled Components e as boas práticas do
            desenvolvimento frontend: Componentização, Gerenciamento de Estado,
            Responsividade e Acessibilidade, SEO, Integrações a APIs. Para
            Controle de Versionamento o GitHub, e gerenciamento e implementação
            de projetos o Git.
          </p>
        </SectionContent>
      </div>
    </section>
  );
};

export default About;
