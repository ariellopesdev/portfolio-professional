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
      <div className="slide-layout-curriculum">
        <div className="slc-block">
          <strong className="slc-block-year">Jun 2026</strong>
          <h4 className="slc-block-title">Formação — PUCPR</h4>
          <p className="slc-block-desc">
            Análise e Desenvolvimento de Sistemas (conclusão: junho de 2026)
          </p>
        </div>

        <div className="slc-block">
          <strong className="slc-block-year">Jun 2025</strong>
          <h4 className="slc-block-title">Kara Arquitetura — Projeto (Acadêmico/Cliente)</h4>
          <p className="slc-block-desc">
            Site completo com React.js, PHP e Firebase. SEO, responsividade e boas práticas.
          </p>
        </div>

        <div className="slc-block">
          <strong className="slc-block-year">Out 2025</strong>
          <h4 className="slc-block-title">RandPlay — Projeto (Acadêmico)</h4>
          <p className="slc-block-desc">
            React.js, Java, MongoDB, APIs, hooks, middlewares e alta performance.
          </p>
        </div>
      </div>
    ),
  },

  {
    content: (
      <div className="slide-layout-courses">
        <div className="slc-block">
          <strong className="slc-block-year">2023</strong>
          <p className="slc-block-desc">React do zero à maestria — Hora de Codar (Udemy)</p>
        </div>

        <div className="slc-block">
          <strong className="slc-block-year">2023</strong>
          <p className="slc-block-desc">React JS do zero ao avançado — Matheus Fraga</p>
        </div>

        <div className="slc-block">
          <strong className="slc-block-year">2024</strong>
          <p className="slc-block-desc">HTML5 e CSS3 Avançado — Hora de Codar</p>
        </div>

        <div className="slc-block">
          <strong className="slc-block-year">2025</strong>
          <p className="slc-block-desc">PHP do Zero à Maestria — Hora de Codar</p>
        </div>

        <div className="slc-block">
          <strong className="slc-block-year">—</strong>
          <p className="slc-block-desc">Inglês básico</p>
        </div>
      </div>
    ),
  },
];

// ======================================================================
// COMPONENTE PRINCIPAL
// ======================================================================
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

          <div className="tech-bar-bottom">
            <div className="tech-icon"><FaReact /></div>
            <div className="tech-icon"><FaJava /></div>
            <div className="tech-icon"><FaNodeJs /></div>
            <div className="tech-icon"><SiPhp /></div>
            <div className="tech-icon"><SiPython /></div>
            <div className="tech-icon"><FaCode /></div>
            <div className="tech-icon"><SiMysql /></div>
            <div className="tech-icon"><SiMongodb /></div>
            <div className="tech-icon"><SiFirebase /></div>
            <div className="tech-icon"><FaDocker /></div>
            <div className="tech-icon"><VscGithub /></div>
          </div>
        </SectionContent>
      </div>
    </section>
  );
};

export default Curriculum;
