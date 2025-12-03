//CSS
import "./Curriculum.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

// Hooks
import { useVisibleState } from "../../hooks/useVisibleState";
import useTabsNavigation from "../../hooks/useTabsNavigation";

const blocks = [
  {
    content: (
      <div className="slide-layout-courses">
        <h1 className="slide-h1">Formação e Cursos</h1>
        <div className="courses-item">
          <strong className="courses-year">Jun 2026</strong>
          <p className="courses-desc">
            Análise e Desenvolvimento de Sistemas (PUCPR)
          </p>
        </div>
        <div className="courses-item">
          <strong className="courses-year">2025</strong>
          <p className="courses-desc">
            Banco de Dados e Linguagem SQL — IA Expert Academy
          </p>
          <p className="courses-desc">Curso de SEO 2025 — Rodrigo Bueno</p>
          <p className="courses-desc">
            SASS e SCSS do básico ao avançado — Hora de Codar
          </p>
          <strong className="courses-year">2024</strong>
          <p className="courses-desc">HTML5 e CSS3 Avançado — Hora de Codar</p>
          <p className="courses-desc">PHP do Zero à Maestria — Hora de Codar</p>
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
      <div className="slide-layout-experiences">
        <h1 className="slide-h1">Experiências</h1>
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
      </div>
    ),
  },
];

const Curriculum = () => {
  const { ref, isVisible } = useVisibleState(0.3);
  // const { index, anim, prev, next, goTo, onTouchStart, onTouchEnd } =
  //   useTabsNavigation(blocks.length);

  return (
    <section id="curriculum" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Currículo"
          text="Minha formação, cursos e experiência como dev."
          isVisible={isVisible}
          buttonText="Abrir Currículo (PDF)"
          buttonLink="pdf"
          externalLink={true}
        />
        <SectionContent>
          {/* <Carousel
            blocks={blocks}
            index={index}
            anim={anim}
            prev={prev}
            next={next}
            goTo={goTo}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          /> */}
        </SectionContent>
      </div>
    </section>
  );
};

export default Curriculum;
