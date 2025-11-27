import "./Curriculum.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";
import Carousel from "../Carousel/Carousel";

// Hooks
import { useVisibleState } from "../../hooks/useVisibleState";
import useCarousel from "../../hooks/useCarousel";

// Icons
import { FaReact, FaJava, FaNodeJs, FaDocker, FaCode } from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPhp,
  SiPython,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

const blocks = [
  {
    content: (
      <div className="slide-layout-experiences">
        <h1 className="slide-h1">Experiências</h1>
        <div className="experiences-item">
          <strong className="experiences-item-year">Jun 2026</strong>
          <h4 className="experiences-item-title">Formação — PUCPR</h4>
          <p className="experiences-item-desc">
            Análise e Desenvolvimento de Sistemas (conclusão: junho de 2026)
          </p>
        </div>

        <div className="experiences-item">
          <strong className="experiences-item-year">Jun 2025</strong>
          <h4 className="experiences-item-title">
            Kara Arquitetura — Projeto (Acadêmico/Cliente)
          </h4>
          <p className="experiences-item-desc">
            Site completo com React.js, PHP e Firebase. SEO, responsividade e
            boas práticas.
          </p>
        </div>

        <div className="experiences-item">
          <strong className="experiences-item-year">Out 2025</strong>
          <h4 className="experiences-item-title">
            RandPlay — Projeto (Acadêmico)
          </h4>
          <p className="experiences-item-desc">
            React.js, Java, MongoDB, APIs, hooks, middlewares e alta
            performance.
          </p>
        </div>
      </div>
    ),
  },

  {
    content: (
      <div className="slide-layout-courses">
        <h1 className="slide-h1">Cursos</h1>
        <div className="courses-item">
          <strong className="courses-year">2025</strong>
          <p className="courses-desc">
            Banco de Dados e Linguagem SQL — IA Expert Academy
          </p>
          <p className="courses-desc">Curso de SEO 2025 — Rodrigo Bueno</p>
          <p className="courses-desc">
            SASS e SCSS do básico ao avançado — Hora de Codar
          </p>
        </div>
        <div className="courses-item">
          <strong className="courses-year">2024</strong>
          <p className="courses-desc">HTML5 e CSS3 Avançado — Hora de Codar</p>
          <p className="courses-desc">PHP do Zero à Maestria — Hora de Codar</p>
        </div>
        <div className="courses-item">
          <strong className="courses-year">2023</strong>
          <p className="courses-desc">
            React do zero à maestria — Hora de Codar
          </p>
          <p className="courses-desc">
            React JS do zero ao avançado — Matheus Fraga
          </p>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="slide-layout-tech">
        <h1 className="slide-h1">Hard Skills</h1>
        <div className="tech-grid">
          <div className="tech-card">
            <h3 className="tech-category">Linguagens</h3>
            <div className="container-tech">
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
              <div className="tech-icon c">
                <VscGithub />
                <p className="tech-desc">C</p>
              </div>
              <div className="tech-icon csharp">
                <VscGithub />
                <p className="tech-desc">C#</p>
              </div>
            </div>
          </div>
          <div className="tech-card">
            <h3 className="tech-category">Frameworks & Bibliotecas</h3>
            <div className="container-tech">
              <div className="tech-icon react">
                {" "}
                <FaReact /> <p className="tech-desc">React.js</p>{" "}
              </div>
              <div className="tech-icon node">
                {" "}
                <FaNodeJs /> <p className="tech-desc">Node.js</p>{" "}
              </div>
              <div className="tech-icon postman">
                {" "}
                <FaCode /> <p className="tech-desc">Postman</p>{" "}
              </div>
            </div>
          </div>
          <div className="tech-card">
            <h3 className="tech-category">Bancos de Dados</h3>
            <div className="container-tech">
              <div className="tech-icon mysql">
                {" "}
                <SiMysql /> <p className="tech-desc">MySQL</p>{" "}
              </div>
              <div className="tech-icon mongodb">
                {" "}
                <SiMongodb /> <p className="tech-desc">MongoDB</p>{" "}
              </div>
              <div className="tech-icon firebase">
                {" "}
                <SiFirebase /> <p className="tech-desc">Firebase</p>{" "}
              </div>
            </div>
          </div>
          <div className="tech-card">
            <h3 className="tech-category">DevOps & Ferramentas</h3>
            <div className="container-tech">
              <div className="tech-icon docker">
                {" "}
                <FaDocker /> <p className="tech-desc">Docker</p>{" "}
              </div>
              <div className="tech-icon github">
                {" "}
                <VscGithub /> <p className="tech-desc">GitHub</p>{" "}
              </div>
              <div className="tech-icon git">
                {" "}
                <VscGithub /> <p className="tech-desc">Git</p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const Curriculum = () => {
  const { ref, isVisible } = useVisibleState(0.3);

  const { index, anim, prev, next, goTo, onTouchStart, onTouchEnd } =
    useCarousel(blocks.length);

  return (
    <section id="curriculum" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Currículo"
          text="Minha Formação e Experiência"
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

export default Curriculum;
