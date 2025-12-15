// CSS
import "../PagesGroup/PagesGroup.css";
import "../TabsNavigation/TabsNavigation.css";

//Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";
import TabsNavigation from "../TabsNavigation/TabsNavigation";

//Hooks
import { useVisibleState } from "../../hooks/useVisibleState";
import useTabsNavigation from "../../hooks/useTabsNavigation";
import { useNavigate } from "react-router-dom";

//Images
import ImgTest from "../../assets/images/image-test.jpg";

//Icons
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useVisibleState(0.3);

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
              liberdade. O usuário ainda pode definir formatos de competição,
              personalizar escudos e ajustar configurações específicas de cada
              campeonato.
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
              <img src={ImgTest} alt="Project image" />
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
              arquitetônicos contemporâneos, oferecendo soluções que unem
              estética, funcionalidade e eficiência espacial. A empresa
              desenvolve projetos residenciais, comerciais e reformas, sempre
              priorizando a identidade do cliente e o uso inteligente dos
              ambientes.
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
              <img src={ImgTest} alt="Project image" />
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
              TechTravel é uma plataforma moderna de viagens que permite
              planejar e gerenciar roteiros de forma prática e inteligente. Com
              ela, o usuário pode explorar destinos, montar itinerários
              personalizados, acompanhar despesas e receber sugestões
              automatizadas com base em preferências e dados atualizados. Tudo
              isso em uma experiência visual e tecnológica que torna cada viagem
              mais simples e personalizada.
            </p>
            <h3 className="layout-h3">React.js · Java · MySql · APIs</h3>
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
              <img src={ImgTest} alt="Project image" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const { index, anim, goTo } = useTabsNavigation(blocks.length);
  const tabs = ["RandPlay", "RE Arquitetura", "TechTravel"];

  return (
    <section id="projects" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Projetos"
          isVisible={isVisible}
          buttonText="Ver todos os projetos"
          buttonLink="projects"
          externalLink={false}
        />
        <SectionContent>
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
