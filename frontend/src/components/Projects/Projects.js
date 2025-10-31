//CSS
import "./Projects.css";

//Components
import SectionInfo from "../SectionInfo/SectionInfo";

//Hooks
import { useVisibleState } from "../../hooks/useVisibleState";

const Projects = () => {
  const { ref, isVisible } = useVisibleState(0.3);
  return (
    <section id="projects" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Projetos"
          text="Trabalhos que desenvolvi, unindo desempenho, usabilidade e boas práticas."
          isVisible={isVisible}
          buttonText="Ver todos os projetos"
          buttonLink="/all-projects"
        />
        <div className="section-content">
          <h2>Projetos</h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
