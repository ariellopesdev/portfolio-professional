// CSS
import "./About.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";
import Carousel from "../Carousel/Carousel";

// Hooks
import { useVisibleState } from "../../hooks/useVisibleState";
import useCarousel from "../../hooks/useCarousel";
import { useState } from "react";

//Images
import fullStackImg from "../../assets/images/full-stack-developer.png";
import stackPrincipal from "../../assets/images/stack-principal.png";
import logo from "../../assets/images/logo.png";

// Icons (Hard & Soft Skills)
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

// ================================
// MAIN COMPONENT — About Section
// ================================
const About = () => {
  // Accordion state — ensures only one stays open
  const [openAcc, setOpenAcc] = useState(1);

  // Accordion controller — prevents closing the currently open one
  const toggleAcc = (id) => {
    if (openAcc === id) return;
    setOpenAcc(id);
  };

  // ================================
  // CAROUSEL BLOCKS (Slides Content)
  // ================================
  const blocks = [
    {
      // Slide 1 — Introduction / Fullstack Overview
      content: (
        <div className="slide-layout-about">
          <div className="info">
            <h1>
              <img src={logo} className="icon" alt="" />
              Sou <span className="highlight">Dev Fullstack</span>
            </h1>
            <p>
              Desenvolvo sites, sistemas e aplicações web completas usando
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
          <div className="image">
            <img
              src={fullStackImg}
              className="big-icon"
              alt="Fullstack developer"
            />
          </div>
        </div>
      ),
    },
    {
      // Slide 2 — Main Stack
      content: (
        <div className="slide-layout-about">
          <div className="info">
            <h1>Stack principal</h1>
            <p>
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
          <div className="image">
            <img
              src={stackPrincipal}
              className="big-icon"
              alt="Stack principal"
            />
          </div>
        </div>
      ),
    },
    {
      // Slide 3 — Hard Skills Grid
      content: (
        <div className="slide-layout-tech">
          <h1>Hard Skills</h1>
          <div className="tech-grid">
            <div className="tech-card">
              <h3 className="tech-category">Linguagens</h3>
              <div className="container-tech">
                <div className="tech-icon javascript">
                  <IoLogoJavascript />
                  <p className="tech-desc">Javascript</p>
                </div>
                <div className="tech-icon java">
                  <FaJava />
                  <p className="tech-desc">Java</p>
                </div>
                <div className="tech-icon php">
                  <SiPhp />
                  <p className="tech-desc">PHP</p>
                </div>
                <div className="tech-icon python">
                  <SiPython />
                  <p className="tech-desc">Python</p>
                </div>
              </div>
            </div>
            <div className="tech-card">
              <h3 className="tech-category">Tecnologias Web</h3>
              <div className="container-tech">
                <div className="tech-icon react">
                  <FaReact /> <p className="tech-desc">React.js</p>
                </div>
                <div className="tech-icon node">
                  <FaNodeJs /> <p className="tech-desc">Node.js</p>
                </div>
                <div className="tech-icon postman">
                  <FaCode /> <p className="tech-desc">Postman</p>
                </div>
              </div>
            </div>
            <div className="tech-card">
              <h3 className="tech-category">Bancos de Dados</h3>
              <div className="container-tech">
                <div className="tech-icon mysql">
                  <SiMysql /> <p className="tech-desc">MySQL</p>
                </div>
                <div className="tech-icon mongodb">
                  <SiMongodb /> <p className="tech-desc">MongoDB</p>
                </div>
                <div className="tech-icon firebase">
                  <SiFirebase /> <p className="tech-desc">Firebase</p>
                </div>
              </div>
            </div>
            <div className="tech-card">
              <h3 className="tech-category">DevOps & Ferramentas</h3>
              <div className="container-tech">
                <div className="tech-icon docker">
                  <FaDocker /> <p className="tech-desc">Docker</p>
                </div>
                <div className="tech-icon github">
                  <VscGithub /> <p className="tech-desc">GitHub</p>
                </div>
                <div className="tech-icon git">
                  <SiGit /> <p className="tech-desc">Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      // Slide 4 — Soft Skills Accordion
      content: (
        <div id="slide-layout-softskills">
          <h1>Soft Skills</h1>
          <div className="softskills-accordion">
            <div className={`accordion-item ${openAcc === 1 ? "open" : ""}`}>
              <div className="accordion-header" onClick={() => toggleAcc(1)}>
                <FaComments />
                Comunicação
              </div>
              <div
                className={`accordion-content ${openAcc === 1 ? "open" : ""}`}
              >
                <p>
                  Apresento soluções técnicas de forma clara e objetiva. No
                  projeto Kara Arquitetura, mantive comunicação constante com o
                  time para alinhar requisitos e entregar funcionalidades sem
                  retrabalho.
                </p>
              </div>
            </div>
            <div className={`accordion-item ${openAcc === 2 ? "open" : ""}`}>
              <div className="accordion-header" onClick={() => toggleAcc(2)}>
                <FaUsers />
                Trabalho em equipe
              </div>
              <div
                className={`accordion-content ${openAcc === 2 ? "open" : ""}`}
              >
                <p>
                  Atuei de forma colaborativa em projetos acadêmicos e freelas,
                  participando de pair programming, revisando PRs e apoiando
                  colegas com dificuldades em lógica e estrutura de código.
                </p>
              </div>
            </div>
            <div className={`accordion-item ${openAcc === 3 ? "open" : ""}`}>
              <div className="accordion-header" onClick={() => toggleAcc(3)}>
                <FaBrain />
                Resolução de problemas
              </div>
              <div
                className={`accordion-content ${openAcc === 3 ? "open" : ""}`}
              >
                <p>
                  No projeto Randplay, identifiquei gargalos no fluxo e
                  implementei soluções que reduziram falhas e melhoraram o
                  desempenho do backend.
                </p>
              </div>
            </div>
            <div className={`accordion-item ${openAcc === 4 ? "open" : ""}`}>
              <div className="accordion-header" onClick={() => toggleAcc(4)}>
                <FaLightbulb />
                Proatividade & Liderança
              </div>
              <div
                className={`accordion-content ${openAcc === 4 ? "open" : ""}`}
              >
                <p>
                  Frequentemente proponho melhorias no código e na organização
                  dos projetos. Em trabalhos da faculdade, assumi a liderança
                  para estruturar tarefas e garantir que todos avançassem com
                  clareza.
                </p>
              </div>
            </div>
            <div className={`accordion-item ${openAcc === 5 ? "open" : ""}`}>
              <div className="accordion-header" onClick={() => toggleAcc(5)}>
                <FaTasks />
                Organização
              </div>
              <div
                className={`accordion-content ${openAcc === 5 ? "open" : ""}`}
              >
                <p>
                  Planejo e documento entregas usando boas práticas como
                  versionamento organizado no Git, divisão modular de tarefas e
                  padronização de commits.
                </p>
              </div>
            </div>
            <div className={`accordion-item ${openAcc === 6 ? "open" : ""}`}>
              <div className="accordion-header" onClick={() => toggleAcc(6)}>
                <FaShieldAlt />
                Resiliência
              </div>
              <div
                className={`accordion-content ${openAcc === 6 ? "open" : ""}`}
              >
                <p>
                  Mantive consistência nos estudos e entregas mesmo com alta
                  carga de trabalho e transição de carreira, desenvolvendo
                  capacidade de lidar com pressão e desafios técnicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // ================================
  // CAROUSEL & VISIBILITY HOOKS
  // ================================
  const { index, anim, prev, next, goTo, onTouchStart, onTouchEnd } =
    useCarousel(blocks.length);
  const { ref, isVisible } = useVisibleState(0.3);

  // ================================
  // MAIN RENDER
  // ================================
  return (
    <section id="about" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Sobre Mim"
          text="Olá, sou o Ariel."
          isVisible={isVisible}
        />
        <SectionContent>
          <Carousel
            blocks={blocks}
            index={index}
            anim={anim}
            prev={prev}
            next={next}
            goTo={goTo}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          />
        </SectionContent>
      </div>
    </section>
  );
};

export default About;
