import "./Curriculum.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";
import Carousel from "../Carousel/Carousel";

// Hooks
import { useVisibleState } from "../../hooks/useVisibleState";
import { useCarousel } from "../../hooks/useCarousel";

// Icons
import backend from "../../assets/images/backend.png";
import bestPractices from "../../assets/images/best-practices.png";

const Curriculum = () => {
  const blocks = [
    {
      title: (
        <>
          <img src={backend} className="icon" alt="Formação" />
          Formação Acadêmica
        </>
      ),
      text: (
        <>
          Cursando{" "}
          <span className="highlight">
            Análise e Desenvolvimento de Sistemas
          </span>{" "}
          — PUCPR. Previsão de conclusão em 2025. Desenvolvimento de projetos
          envolvendo Java, React.js, APIs REST, banco de dados SQL e
          arquiteturas modernas.
        </>
      ),
      image: <img src={bestPractices} className="big-icon" alt="Formação" />,
    },
    {
      title: (
        <>
          <img src={backend} className="icon" alt="Experiência" />
          Experiência
        </>
      ),
      text: (
        <>
          Mais de <span className="highlight">5 anos de experiência</span> em
          ambiente industrial. Atuação como desenvolvedor backend e fullstack em
          projetos com{" "}
          <span className="highlight">
            Java, PHP, JavaScript, React.js, MySQL
          </span>{" "}
          e Docker. Experiência com APIs REST, sistemas internos, automações e
          integrações.
        </>
      ),
      image: <img src={bestPractices} className="big-icon" alt="Experiência" />,
    },
  ];

  const { index, anim, prev, next, goTo, onTouchStart, onTouchEnd } =
    useCarousel(blocks.length);

  const { ref, isVisible } = useVisibleState(0.3);

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
