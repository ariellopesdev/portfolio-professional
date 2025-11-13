//CSS
import "./About.css";

//Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

//Hooks
import { useVisibleState } from "../../hooks/useVisibleState";

//React Icons
import { FaReact, FaJava, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiMongodb, SiMysql, SiRedux } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

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
          <div id="about-container">
            <div className="about-block">
              <h1>
                <FaReact className="icon" />{" "}
                Sou <span className="highlight">Desenvolvedor Fullstack</span>
              </h1>
              <p>
                Construo sites, sistemas e web apps com{" "}
                <FaReact className="icon" /> <span className="highlight">React.js</span> no frontend e{" "}
                <FaJava className="icon" /> <span className="highlight">Java</span> no backend como foco principal.
                Também trabalho com <FaNodeJs className="icon" />{" "}
                <span className="highlight">Node.js/Express</span> para APIs.
              </p>
            </div>

            <div className="about-block">
              <h1>💡 Boas práticas</h1>
              <p>
                Crio aplicações completas, seguras e escaláveis, aplicando{" "}
                <span className="highlight">componentização</span>,{" "}
                <span className="highlight">gerenciamento de estado</span>,{" "}
                <span className="highlight">responsividade</span> e{" "}
                <span className="highlight">acessibilidade</span>.
              </p>
            </div>

            <div className="about-block">
              <h1>⚙️ Stack principal</h1>
              <p>
                Ecossistema JavaScript com{" "}
                <SiNextdotjs className="icon" /> <span className="highlight">Next.js</span>,{" "}
                <SiRedux className="icon" /> Redux Toolkit, React Router, Styled Components e Fetch API.
                Versionamento com <VscGithub className="icon" />{" "}
                <span className="highlight">Git e GitHub</span>.
              </p>
            </div>

            <div className="about-block">
              <h1>🧩 Backend e banco de dados</h1>
              <p>
                Desenvolvimento de <span className="highlight">APIs REST</span>,{" "}
                <span className="highlight">autenticação JWT</span>,{" "}
                <span className="highlight">upload de arquivos</span> e{" "}
                <span className="highlight">integração com bancos</span>{" "}
                (<SiMysql className="icon" /> MySQL / <SiMongodb className="icon" /> MongoDB).
                Também uso <SiFirebase className="icon" />{" "}
                <span className="highlight">Firebase</span> para autenticação e notificações em tempo real.
              </p>
            </div>

            <div className="about-block">
              <h1>🧠 Ferramentas e qualidade</h1>
              <p>
                Experiência com <FaDocker className="icon" />{" "}
                <span className="highlight">Docker</span>,{" "}
                <span className="highlight">Postman</span> para testes,{" "}
                <span className="highlight">Sass</span> para estilização e{" "}
                <span className="highlight">testes automatizados</span> para garantir qualidade do código.
              </p>
            </div>

            <div className="about-block">
              <h1>📘 Outros conhecimentos</h1>
              <p>
                Também possuo experiência com{" "}
                <span className="highlight">Python</span> e{" "}
                <span className="highlight">PHP</span>, mas meu foco de backend é{" "}
                <FaJava className="icon" /> <span className="highlight">Java</span>.
              </p>
            </div>

            <div className="about-block">
              <h1>🚀 Objetivo</h1>
              <p>
                Busco projetos que unam{" "}
                <span className="highlight">desempenho</span>,{" "}
                <span className="highlight">usabilidade</span> e{" "}
                <span className="highlight">escalabilidade</span>, aplicando práticas sólidas de
                desenvolvimento <span className="highlight">fullstack moderno</span>.
              </p>
            </div>
          </div>
        </SectionContent>
      </div>
    </section>
  );
};

export default About;
