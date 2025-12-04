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

//Images
import ImgTest from "../../assets/images/image-test.jpg";

const blocks = [
  {
    content: (
      <div className="layout-double">
        <div className="projects-header">
          <h1 className="projects-title">RandPlay</h1>
          <h2 className="projects-tech">React.js · Java · MongoDB · APIs</h2>
        </div>

        <p className="projects-desc">
          RandPlay é uma plataforma completa para criação e gerenciamento de
          campeonatos de futebol. Com ela, qualquer pessoa pode montar torneios
          personalizados, editar regras, registrar resultados, controlar
          placares e organizar times ou seleções com total liberdade. O usuário
          ainda pode definir formatos de competição, personalizar escudos e
          ajustar configurações específicas de cada campeonato.
        </p>

        <div className="projects-image">
          <img src={ImgTest} alt="Project image" />
          <img src={ImgTest} alt="Project image" />
          <img src={ImgTest} alt="Project image" />
        </div>

        <div className="projects-links">
          <a className="btn-projects">Site</a>
          <a className="btn-projects">Repositório</a>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="layout-double">
        <div>
          <h1 className="projects-title">RE Arquitetura</h1>
          <h2 className="projects-tech">React.js · PHP · Firebase · APIs</h2>
        </div>

        <p className="projects-desc">
          Ramon Efísio Arquitetura é um estúdio especializado em projetos
          arquitetônicos contemporâneos, oferecendo soluções que unem estética,
          funcionalidade e eficiência espacial. A empresa desenvolve projetos
          residenciais, comerciais e reformas, sempre priorizando a identidade
          do cliente e o uso inteligente dos ambientes. Cada trabalho recebe
          atenção individual, garantindo qualidade técnica, detalhamento preciso
          e uma experiência arquitetônica personalizada.
        </p>

        <div className="projects-image">
          <img src={ImgTest} alt="Project image" />
          <img src={ImgTest} alt="Project image" />
          <img src={ImgTest} alt="Project image" />
        </div>

        <div className="projects-links">
          <a className="btn-projects">Site</a>
          <a className="btn-projects">Repositório</a>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="layout-double">
        <div>
          <h1 className="projects-title">TecTravel</h1>
          <h2 className="projects-tech">React.js · Java · MySql · APIs</h2>
        </div>

        <p className="projects-desc">
          TechTravel é uma plataforma moderna de viagens que permite planejar e
          gerenciar roteiros de forma prática e inteligente. Com ela, o usuário
          pode explorar destinos, montar itinerários personalizados, acompanhar
          despesas e receber sugestões automatizadas com base em preferências e
          dados atualizados. Tudo isso em uma experiência visual e tecnológica
          que torna cada viagem mais simples e personalizada.
        </p>

        <div className="projects-image">
          <img src={ImgTest} alt="Project image" />
          <img src={ImgTest} alt="Project image" />
          <img src={ImgTest} alt="Project image" />
        </div>

        <div className="projects-links">
          <a className="btn-projects">Site</a>
          <a className="btn-projects">Repositório</a>
        </div>
      </div>
    ),
  },
];

const Projects = () => {
  const { ref, isVisible } = useVisibleState(0.3);
    const { index, anim, goTo} = useTabsNavigation(blocks.length);
    const tabs = ["RandPlay", "RE Arquitetura", "TechTravel"];

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
