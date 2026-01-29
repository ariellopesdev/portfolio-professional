// CSS
import "../PagesGroup/PagesGroup.css";
import "../TabsNavigation/TabsNavigation.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";
import TabsNavigation from "../TabsNavigation/TabsNavigation";

// Hooks
import useTabsNavigation from "../../hooks/useTabsNavigation";
import { useNavigate } from "react-router-dom";

// Images
import ImgTest from "../../assets/images/image-test.jpg";

// Icons
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const navigate = useNavigate();

  const blocks = [
    {
      content: (
        <div className="layout-double">
          <div className="layout-left">
            <p className="layout-desc-projects">
              RandPlay é uma plataforma completa para criação e gerenciamento de
              campeonatos de futebol. Com ela, qualquer pessoa pode montar
              torneios personalizados, editar regras, registrar resultados,
              controlar placares e organizar times ou seleções com total
              liberdade.
            </p>

            <h3 className="layout-h3">React.js · Java · MongoDB · APIs</h3>

            <div className="layout-btn-block">
              <a className="btn-projects" onClick={() => navigate("/projects")}>
                Ver mais
              </a>

              <a
                className="btn-projects repo-btn"
                href="https://github.com/seu-repo-aqui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="layout-right">
            <div className="layout-img-block">
              <img src={ImgTest} alt="RandPlay" />
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="layout-double">
          <div className="layout-left">
            <p className="layout-desc-projects">
              Ramon Efísio Arquitetura é um estúdio especializado em projetos
              arquitetônicos contemporâneos, unindo estética, funcionalidade e
              eficiência espacial em soluções sob medida.
            </p>

            <h3 className="layout-h3">React.js · PHP · Firebase · APIs</h3>

            <div className="layout-btn-block">
              <a className="btn-projects" onClick={() => navigate("/projects")}>
                Ver mais
              </a>

              <a
                className="btn-projects repo-btn"
                href="https://github.com/seu-repo-aqui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="layout-right">
            <div className="layout-img-block">
              <img src={ImgTest} alt="RE Arquitetura" />
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="layout-double">
          <div className="layout-left">
            <p className="layout-desc-projects">
              TechTravel é uma plataforma moderna para planejamento e
              gerenciamento de viagens, permitindo criar roteiros
              personalizados, acompanhar despesas e receber sugestões
              inteligentes.
            </p>

            <h3 className="layout-h3">React.js · Java · MySQL · APIs</h3>

            <div className="layout-btn-block">
              <a className="btn-projects" onClick={() => navigate("/projects")}>
                Ver mais
              </a>

              <a
                className="btn-projects repo-btn"
                href="https://github.com/seu-repo-aqui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="layout-right">
            <div className="layout-img-block">
              <img src={ImgTest} alt="TechTravel" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const { index, anim, goTo } = useTabsNavigation(blocks.length);
  const tabs = ["RandPlay", "RE Arquitetura", "TechTravel"];

  return (
    <section id="projects">
      <div className="sections-wrapper">
        <SectionInfo title="Projetos" />

        <SectionContent
          action={{
            text: "Ver todos os projetos",
            link: "/projects",
            external: false,
          }}
        >
          <TabsNavigation tabs={tabs} current={index} goTo={goTo} />
          <div className={`tabs-content-wrapper ${anim}`}>
            {blocks[index].content}
          </div>
        </SectionContent>
      </div>
    </section>
  );
};

export default Projects;
