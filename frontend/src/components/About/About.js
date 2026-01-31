// CSS
import "./About.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

// Hooks
import { useState } from "react";

// Images
import fullStackImg from "../../assets/images/full-stack-developer.png";
import stackPrincipal from "../../assets/images/stack-principal.png";
import portfolioImg from "../../assets/images/portfolio-image.png";

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
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPhp,
  SiPython,
  SiGit,
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
              Sou <span className="highlight">Desenvolvedor Fullstack</span>,
              focado em criar aplicações web que unem clareza, performance e
              boas experiências para quem usa.
            </p>
            <p className="about__paragraph">
              Acredito que desenvolvimento vai além de escrever código. Envolve
              entender problemas, pensar soluções e construir sistemas
              organizados, fáceis de evoluir e manter.
            </p>
            <p className="about__paragraph--quote">
              “Código bem feito resolve problemas hoje e continua fazendo
              sentido amanhã.”
            </p>
            <p className="about__paragraph">
              Tenho curiosidade constante por novas ideias, gosto de pesquisar,
              testar abordagens diferentes e transformar conceitos em soluções
              práticas e bem estruturadas.
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
    {
      content: (
        <div className="about__block--centered">
          <h2 className="about__skills--intro">
            Ao longo da minha formação e experiências práticas, desenvolvi
            habilidades técnicas em diferentes linguagens, tecnologias web e
            ferramentas de apoio ao desenvolvimento.
          </h2>
          <div className="about__skills">
            <h3 className="about__skills--title">Linguagens</h3>
            <ul className="about__skills--list">
              <div className="about__skills--item skills__item--javascript">
                <IoLogoJavascript />
                <span className="about__skills--name">Javascript</span>
              </div>
              <div className="about__skills--item skills__item--java">
                <FaJava />
                <span className="about__skills--name">Java</span>
              </div>
              <div className="about__skills--item skills__item--php">
                <SiPhp />
                <span className="about__skills--name">PHP</span>
              </div>
              <div className="about__skills--item skills__item--python">
                <SiPython />
                <span className="about__skills--name">Python</span>
              </div>
            </ul>
          </div>
          <div className="about__skills">
            <h3 className="about__skills--title">Tecnologias Web</h3>
            <ul className="about__skills--list">
              <div className="about__skills--item skills__item--react">
                <FaReact />{" "}
                <span className="about__skills--name">React.js</span>
              </div>
              <div className="about__skills--item skills__item--node">
                <FaNodeJs />{" "}
                <span className="about__skills--name">Node.js</span>
              </div>
              <div className="about__skills--item skills__item--postman">
                <FaCode /> <span className="about__skills--name">Postman</span>
              </div>
            </ul>
          </div>
          <div className="about__skills">
            <h3 className="about__skills--title">Bancos de Dados</h3>
            <ul className="about__skills--list">
              <div className="about__skills--item skills__item--mysql">
                <SiMysql /> <span className="about__skills--name">MySQL</span>
              </div>
              <div className="about__skills--item skills__item--mongodb">
                <SiMongodb />{" "}
                <span className="about__skills--name">MongoDB</span>
              </div>
              <div className="about__skills--item skills__item--firebase">
                <SiFirebase />{" "}
                <span className="about__skills--name">Firebase</span>
              </div>
            </ul>
          </div>
          <div className="about__skills">
            <h3 className="about__skills--title">DevOps & Ferramentas</h3>
            <ul className="about__skills--list">
              <div className="about__skills--item skills__item--docker">
                <FaDocker /> <span className="about__skills--name">Docker</span>
              </div>
              <div className="about__skills--item skills__item--github">
                <VscGithub />{" "}
                <span className="about__skills--name">GitHub</span>
              </div>
              <div className="about__skills--item skills__item--git">
                <SiGit /> <span className="about__skills--name">Git</span>
              </div>
            </ul>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="about__block--centered">
          <p className="about__accordion--intro">
            Além da parte técnica, valorizo a forma como me comunico, colaboro e
            enfrento desafios. Acredito que bons resultados vêm da combinação
            entre técnica e comportamento profissional.
          </p>
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
