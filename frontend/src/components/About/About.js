// CSS
import "../PagesGroup/PagesGroup.css";
import "../TabsNavigation/TabsNavigation.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";
import TabsNavigation from "../TabsNavigation/TabsNavigation";

// Hooks
import { useState } from "react";
import useTabsNavigation from "../../hooks/useTabsNavigation";

// Images
import fullStackImg from "../../assets/images/full-stack-developer.png";
import stackPrincipal from "../../assets/images/stack-principal.png";

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
        <div className="layout-double">
          <div className="layout-left">
            <p className="layout-desc-main">
              Sou <span className="highlight">Dev Fullstack</span> e desenvolvo
              sites, sistemas e aplicações web completas usando
              <span className="highlight"> React.js</span> no frontend, e
              <span className="highlight"> Java</span> e
              <span className="highlight"> PHP</span> no backend. Também
              construo e integro APIs com
              <span className="highlight"> Node.js/Express</span>, além de
              trabalhar com <span className="highlight">MySQL</span>,
              <span className="highlight"> MongoDB</span> e
              <span className="highlight"> Firebase</span> para bancos de dados.
            </p>
          </div>
          <div className="layout-right">
            <img
              src={fullStackImg}
              className="layout-img-single"
              alt="Fullstack developer"
            />
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="layout-double">
          <div className="layout-left">
            <p className="layout-desc-main">
              Minha principal stack está focada no ecossistema JavaScript,
              utilizando
              <span className="highlight"> React.js</span> para criar interfaces
              modernas e responsivas. <br />
              <br />
              No backend, desenvolvo e consumo
              <span className="highlight"> APIs</span> construídas em
              <span className="highlight"> Java</span>,
              <span className="highlight"> PHP</span> e
              <span className="highlight"> Node.js</span>. Além disso, utilizo
              práticas de versionamento com
              <span className="highlight"> Git</span> e
              <span className="highlight"> GitHub</span> para garantir
              organização e colaboração nos projetos.
            </p>
          </div>
          <div className="layout-right">
            <img
              src={stackPrincipal}
              className="layout-img-single"
              alt="Stack principal"
            />
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="layout-single">
          <div className="layout-block-horizontal">
            <h3 className="layout-h2">Linguagens</h3>
            <div className="layout-tech-block">
              <div className="layout-tech-block-item javascript">
                <IoLogoJavascript />
                <p className="layout-tech-block">Javascript</p>
              </div>
              <div className="layout-tech-block-item java">
                <FaJava />
                <p className="layout-tech-block">Java</p>
              </div>
              <div className="layout-tech-block-item php">
                <SiPhp />
                <p className="layout-tech-block">PHP</p>
              </div>
              <div className="layout-tech-block-item python">
                <SiPython />
                <p className="layout-tech-block">Python</p>
              </div>
            </div>
          </div>
          <div className="layout-block-horizontal">
            <h3 className="layout-h2">Tecnologias Web</h3>
            <div className="layout-tech-block">
              <div className="layout-tech-block-item react">
                <FaReact /> <p className="layout-tech-block">React.js</p>
              </div>
              <div className="layout-tech-block-item node">
                <FaNodeJs /> <p className="layout-tech-block">Node.js</p>
              </div>
              <div className="layout-tech-block-item postman">
                <FaCode /> <p className="layout-tech-block">Postman</p>
              </div>
            </div>
          </div>
          <div className="layout-block-horizontal">
            <h3 className="layout-h2">Bancos de Dados</h3>
            <div className="layout-tech-block">
              <div className="layout-tech-block-item mysql">
                <SiMysql /> <p className="layout-tech-block">MySQL</p>
              </div>
              <div className="layout-tech-block-item mongodb">
                <SiMongodb /> <p className="layout-tech-block">MongoDB</p>
              </div>
              <div className="layout-tech-block-item firebase">
                <SiFirebase /> <p className="layout-tech-block">Firebase</p>
              </div>
            </div>
          </div>
          <div className="layout-block-horizontal">
            <h3 className="layout-h2">DevOps & Ferramentas</h3>
            <div className="layout-tech-block">
              <div className="layout-tech-block-item docker">
                <FaDocker /> <p className="layout-tech-block">Docker</p>
              </div>
              <div className="layout-tech-block-item github">
                <VscGithub /> <p className="layout-tech-block">GitHub</p>
              </div>
              <div className="layout-tech-block-item git">
                <SiGit /> <p className="layout-tech-block">Git</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="layout-single">
          <div className="accordion">
            {/* ITEM 1 */}
            <div className={`accordion-item ${openAcc === 1 ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleAcc(1)}>
                <FaComments />
                Comunicação
              </button>

              <div className="accordion-body">
                <p>
                  Apresento soluções técnicas de forma clara e objetiva. No
                  projeto Kara Arquitetura, mantive comunicação constante com o
                  time para alinhar requisitos e entregar funcionalidades sem
                  retrabalho.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className={`accordion-item ${openAcc === 2 ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleAcc(2)}>
                <FaUsers />
                Trabalho em equipe
              </button>

              <div className="accordion-body">
                <p>
                  Atuei de forma colaborativa em projetos acadêmicos e freelas,
                  participando de pair programming, revisando PRs e apoiando
                  colegas com dificuldades.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className={`accordion-item ${openAcc === 3 ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleAcc(3)}>
                <FaBrain />
                Resolução de problemas
              </button>

              <div className="accordion-body">
                <p>
                  No Randplay, identifiquei gargalos e implementei soluções que
                  reduziram falhas e melhoraram o desempenho.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className={`accordion-item ${openAcc === 4 ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleAcc(4)}>
                <FaLightbulb />
                Proatividade & Liderança
              </button>

              <div className="accordion-body">
                <p>
                  Proponho melhorias no código e na organização. Em trabalhos
                  acadêmicos, assumi liderança organizando tarefas e garantindo
                  clareza ao time.
                </p>
              </div>
            </div>

            {/* ITEM 5 */}
            <div className={`accordion-item ${openAcc === 5 ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleAcc(5)}>
                <FaTasks />
                Organização
              </button>

              <div className="accordion-body">
                <p>
                  Planejo entregas com versionamento organizado no Git, divisão
                  modular e padronização de commits.
                </p>
              </div>
            </div>

            {/* ITEM 6 */}
            <div className={`accordion-item ${openAcc === 6 ? "open" : ""}`}>
              <button className="accordion-header" onClick={() => toggleAcc(6)}>
                <FaShieldAlt />
                Resiliência
              </button>

              <div className="accordion-body">
                <p>
                  Mantive consistência nos estudos e entregas mesmo com alta
                  carga de trabalho e transição de carreira.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const { index, anim, goTo } = useTabsNavigation(blocks.length);
  const tabs = ["Apresentação", "Stack Principal", "Hard Skills", "Soft Skills"];

  return (
    <section id="about">
      <div className="sections-wrapper">
        <SectionInfo title="Sobre Mim" />

        <SectionContent>
          <TabsNavigation tabs={tabs} current={index} goTo={goTo} />
          <div className={`tabs-content-wrapper ${anim}`}>
            {blocks[index].content}
          </div>
        </SectionContent>
      </div>
    </section>
  );
};

export default About;