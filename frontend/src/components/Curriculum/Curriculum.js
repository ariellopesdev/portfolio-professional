// CSS
import "../PagesGroup/PagesGroup.css";
import "../TabsNavigation/TabsNavigation.css";

// Components
import SectionBlock from "../SectionBlock/SectionBlock";
import TabsNavigation from "../TabsNavigation/TabsNavigation";

// Hooks
import { useVisibleState } from "../../hooks/useVisibleState";
import useTabsNavigation from "../../hooks/useTabsNavigation";

const blocks = [
  {
    content: (
      <div className="layout-single">
        <div className="layout-block">
          <strong className="layout-strong">Jun 2026</strong>
          <p className="layout-desc">
            Análise e Desenvolvimento de Sistemas (PUCPR)
          </p>
        </div>
        <div className="layout-block">
          <strong className="layout-strong">2025</strong>
          <p className="layout-desc">
            Banco de Dados e Linguagem SQL — IA Expert Academy
          </p>
          <p className="layout-desc">Curso de SEO 2025 — Rodrigo Bueno</p>
          <p className="layout-desc">
            SASS e SCSS do básico ao avançado — Hora de Codar
          </p>
          <br />
          <strong className="layout-strong">2024</strong>
          <p className="layout-desc">HTML5 e CSS3 Avançado — Hora de Codar</p>
          <p className="layout-desc">PHP do Zero à Maestria — Hora de Codar</p>
          <br />
          <strong className="layout-strong">2023</strong>
          <p className="layout-desc">
            React do zero à maestria — Hora de Codar
          </p>
          <p className="layout-desc">
            React JS do zero ao avançado — Matheus Fraga
          </p>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="layout-single">
        <div className="layout-block">
          <strong className="layout-strong">Out 2025</strong>
          <h4 className="layout-h4">RandPlay — Projeto (Acadêmico)</h4>
          <p className="layout-desc">
            React.js, Java, MongoDB, APIs, hooks, middlewares e alta
            performance.
          </p>
        </div>
        <div className="layout-block">
          <strong className="layout-strong">Jun 2025</strong>
          <h4 className="layout-h4">
            Kara Arquitetura — Projeto (Acadêmico/Cliente)
          </h4>
          <p className="layout-desc">
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
  const { index, anim, goTo } = useTabsNavigation(blocks.length);
  const tabs = ["Formação e Cursos", "Experiências"];

  return (
    <section id="curriculum" ref={ref}>
      <SectionBlock
        title="Currículo"
        text="Minha formação, cursos e experiência como dev."
        isVisible={isVisible}
        buttonText="Abrir Currículo (PDF)"
        buttonLink="pdf"
        externalLink={true}
      >
        <TabsNavigation tabs={tabs} current={index} goTo={goTo} />
        <div className={`tabs-content-wrapper ${anim}`}>
          {blocks[index].content}
        </div>
      </SectionBlock>
    </section>
  );
};

export default Curriculum;
