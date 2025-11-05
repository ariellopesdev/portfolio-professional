//CSS
import "./Projects.css";

//Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

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
        <SectionContent>
          <div className="projects-grid">
            <div className="project-card">Projeto 1</div>
            <div className="project-card">Projeto 2</div>
            <div className="project-card">Projeto 3</div>
          </div>
        </SectionContent>
      </div>
    </section>
  );
};

export default Projects;
