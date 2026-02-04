// CSS
import "./About.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";
import SubtitleH2 from "../SubtitleH2/SubtitleH2";

// Hooks
import { useState } from "react";

// Images
import portfolioImg from "../../assets/images/portfolio-image2.png";

// Icons
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaCode,
  FaUsers,
  FaComments,
  FaBrain,
  FaTasks,
  FaLightbulb,
  FaShieldAlt,
  FaHtml5,
  FaCss3Alt,
  FaServer,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPhp,
  SiPython,
  SiGit,
  SiExpress,
  SiKubernetes, 
  SiGithubactions,
  SiPostman,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";

const About = () => {
  // Accordion state — ensures only one stays open
  const [openAcc, setOpenAcc] = useState(1);

  // Accordion controller — prevents closing the currently open one
  const toggleAcc = (id) => {
    if (openAcc === id) return;
    setOpenAcc(id);
  };

  const blocks = [
    {
      content: (
        <div className="about__block--split">
          <div className="about__content--text">
            <p className="about__paragraph">
              Sou <span className="highlight">Desenvolvedor Fullstack</span> e
              estou no último período de Análise e Desenvolvimento de Sistemas
              na <strong>PUCPR</strong> (conclusão em Jun/2026). Meu foco é
              criar aplicações web que unem clareza, performance e experiências
              centradas no usuário.
            </p>
            <p className="about__paragraph">
              Acredito que desenvolvimento vai além de escrever código; trata-se
              de arquitetar soluções escaláveis e sistemas organizados, fáceis
              de manter e evoluir.
            </p>
            <p className="about__paragraph--quote">
              “Código bem escrito resolve problemas hoje e mantém sua relevância
              amanhã.”
            </p>
            <p className="about__paragraph">
              Mantenho uma curiosidade constante por novas tecnologias, sempre
              testando abordagens que transformam conceitos complexos em
              soluções práticas e bem estruturadas.
            </p>
          </div>
          <div className="about__content--media">
            <img
              src={portfolioImg}
              className="about__image--profile"
              alt="My photo for portfolio"
            />
          </div>
        </div>
      ),
    },
    { content: <SubtitleH2>Hard Skills</SubtitleH2> },
    {
      content: (
        <div className="about__block--centered">
          <p className="about__skills--intro">Habilidades Técnicas</p>
          <div className="about__skills--container">
            <div className="about__skills">
              <div className="skills__card--icons">
                <IoLogoJavascript className="skills__item--general skills__item--javascript" />
                {/* <FaJava className="skills__item--general skills__item--java" />
                <SiPhp className="skills__item--general skills__item--php" />
                <SiPython className="skills__item--general skills__item--python" /> */}
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Linguagens</h3>
                <div className="skillscard__content--name">
                  Javascript, Java, PHP, Python
                </div>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaHtml5 className="skills__item--general skills__item--html" />
                {/* <FaCss3Alt className="skills__item--general skills__item--css" />
                <FaReact className="skills__item--general skills__item--react" /> */}
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Front-End</h3>
                <div className="skillscard__content--name">
                  HTML5, CSS3, SASS, React JS
                </div>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaNodeJs className="skills__item--general skills__item--node" />
                {/* <SiExpress className="skills__item--general skills__item--express" />
                <FaServer className="skills__item--general skills__item--rest" /> */}
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Back-End</h3>
                <div className="skillscard__content--name">
                  Node JS, Express JS, RESTful APIs
                </div>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <SiMysql className="skills__item--general skills__item--mysql"/>
                {/* <SiMongodb className="skills__item--general skills__item--mongodb"/>
                <SiFirebase className="skills__item--general skills__item--firebase"/> */}
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Banco de Dados</h3>
                <div className="skillscard__content--name">
                  MySQL, MongoDB, Firebase
                </div>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaDocker className="skills__item--general skills__item--docker"/>
                {/* <SiKubernetes className="skills__item--general skills__item--kubernetes" />
                <SiGithubactions className="skills__item--general skills__item--cicd" /> */}
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Cloud & DevOps</h3>
                <div className="skillscard__content--name">
                  Docker, Kubernetes, CI/CD
                </div>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <SiGit className="skills__item--general skills__item--git"/>
                {/* <VscGithub className="skills__item--general skills__item--github"/>
                <SiPostman className="skills__item--general skills__item--postman" /> */}
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Ferramentas</h3>
                <div className="skillscard__content--name">
                  Git, GitHub, Postman
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    { content: <SubtitleH2>Soft Skills</SubtitleH2> },
    {
      content: (
        <div className="about__block--centered">
          <p className="about__accordion--intro">Habilidades Sociais</p>
          <div className="about__accordion">
            {/* ITEM 1 */}
            <div
              className={`about__accordion--item ${openAcc === 1 ? "accordion__item--open" : ""}`}
            >
              <button
                className="about__accordion--header"
                onClick={() => toggleAcc(1)}
              >
                <FaComments />
                Comunicação
              </button>

              <div className="about__accordion--content">
                <p className="about__accordion--paragraph">
                  Comunico soluções técnicas de forma clara e objetiva,
                  facilitando o alinhamento entre requisitos e entregas. No
                  projeto Kara Arquitetura, isso reduziu retrabalho e melhorou o
                  fluxo do desenvolvimento.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div
              className={`about__accordion--item ${openAcc === 2 ? "accordion__item--open" : ""}`}
            >
              <button
                className="about__accordion--header"
                onClick={() => toggleAcc(2)}
              >
                <FaUsers />
                Trabalho em equipe
              </button>

              <div className="about__accordion--content">
                <p className="about__accordion--paragraph">
                  Atuo de forma colaborativa em projetos acadêmicos e freelas,
                  participando de pair programming, revisões de código e
                  apoiando colegas para manter a qualidade e o ritmo do time.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div
              className={`about__accordion--item ${openAcc === 3 ? "accordion__item--open" : ""}`}
            >
              <button
                className="about__accordion--header"
                onClick={() => toggleAcc(3)}
              >
                <FaBrain />
                Resolução de problemas
              </button>

              <div className="about__accordion--content">
                <p className="about__accordion--paragraph">
                  Identifico gargalos e proponho soluções práticas. No projeto
                  Randplay, implementei melhorias que reduziram falhas e
                  aumentaram o desempenho da aplicação.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div
              className={`about__accordion--item ${openAcc === 4 ? "accordion__item--open" : ""}`}
            >
              <button
                className="about__accordion--header"
                onClick={() => toggleAcc(4)}
              >
                <FaLightbulb />
                Proatividade & Liderança
              </button>

              <div className="about__accordion--content">
                <p className="about__accordion--paragraph">
                  Tenho postura proativa na melhoria de código e processos. Em
                  trabalhos acadêmicos, atuei organizando tarefas, distribuindo
                  responsabilidades e garantindo clareza para o time.
                </p>
              </div>
            </div>

            {/* ITEM 5 */}
            <div
              className={`about__accordion--item ${openAcc === 5 ? "accordion__item--open" : ""}`}
            >
              <button
                className="about__accordion--header"
                onClick={() => toggleAcc(5)}
              >
                <FaTasks />
                Organização
              </button>

              <div className="about__accordion--content">
                <p className="about__accordion--paragraph">
                  Planejo entregas com foco em organização, utilizando
                  versionamento no Git, estrutura modular e padronização de
                  commits para facilitar manutenção e evolução do projeto.
                </p>
              </div>
            </div>

            {/* ITEM 6 */}
            <div
              className={`about__accordion--item ${openAcc === 6 ? "accordion__item--open" : ""}`}
            >
              <button
                className="about__accordion--header"
                onClick={() => toggleAcc(6)}
              >
                <FaShieldAlt />
                Resiliência
              </button>

              <div className="about__accordion--content">
                <p className="about__accordion--paragraph">
                  Demonstro resiliência ao manter consistência nos estudos e
                  entregas mesmo em períodos de alta demanda e durante a
                  transição de carreira.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about">
      <div className="sections-wrapper">
        <SectionInfo title="Sobre Mim" />
        <SectionContent>{blocks.map((block) => block.content)}</SectionContent>
      </div>
    </section>
  );
};

export default About;
