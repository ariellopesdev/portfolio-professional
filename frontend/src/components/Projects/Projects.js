//CSS
import "./Projects.css";

//Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

//Hooks
import { useVisibleState } from "../../hooks/useVisibleState";

// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//Images
import ImgTest from "../../assets/images/image-test.jpg";

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
          buttonLink="projects"
          externalLink={false}
        />
        <SectionContent>
          <div id="projects-container">
            <div id="projects-main">
              <div className="projects-main-block">
                <h1>Randplay</h1>
                <h2>React.js - PHP</h2>
                <p>Player musical com playlists dinâmicas, integração com API e suporte offline.</p>
                <img src={ImgTest} alt="Project image" />
                <a id="site">Site</a>
                <a id="repo"><i></i>Repositório</a>
              </div>
              <div className="projects-main-block">
                <h1>Kara Arquitetura</h1>
                <h2>React.js - PHP</h2>
                <p>Player musical com playlists dinâmicas, integração com API e suporte offline.</p>
                <img src={ImgTest} alt="Project image" />
                <a id="site">Site</a>
                <a id="repo"><i></i>Repositório</a>
              </div>
              <div className="projects-main-block">
                <h1>Projeto 3</h1>
                <h2>React.js - PHP</h2>
                <p>Player musical com playlists dinâmicas, integração com API e suporte offline.</p>
                <img src={ImgTest} alt="Project image" />
                <a id="site">Site</a>
                <a id="repo"><i></i>Repositório</a>
              </div>
              <div id="projects-arrow">
                <button id="projects-arrow-left">
                  <FaChevronLeft />
                </button>
                <button id="projects-arrow-right">
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div id="projects-grid">
              <div
                className="project-card"
                style={{ backgroundImage: `url(${ImgTest})` }}
              >
                <h1>RandPlay</h1>
              </div>
              <div
                className="project-card"
                style={{ backgroundImage: `url(${ImgTest})` }}
              >
                <h1>
                  Kara <br /> Arquitetura
                </h1>
              </div>
              <div
                className="project-card"
                style={{ backgroundImage: `url(${ImgTest})` }}
              >
                <h1>Projeto 3</h1>
              </div>
            </div>
          </div>
        </SectionContent>
      </div>
    </section>
  );
};

export default Projects;
