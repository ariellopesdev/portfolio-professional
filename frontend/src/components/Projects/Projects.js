// CSS
import "./Projects.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

// Hooks
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// Images
import ImgTest from "../../assets/images/image-test.jpg";

// Icons
import { FaGithub, FaUser, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    name: "RandPlay",
    image: ImgTest,
    demand: "Projeto Pessoal",
    github: "https://github.com/ariellopesdev/RandPlay-official",
    site: "#",
    desc: "RandPlay é uma plataforma completa para criação e gerenciamento de campeonatos de futebol. Com ela, qualquer pessoa pode montar torneios personalizados, editar regras, registrar resultados, controlar placares e organizar times ou seleções com total liberdade.",
    tech: "React.js · Java · MongoDB · APIs",
  },
  {
    id: 2,
    name: "Ramon Efísio Arquitetura",
    image: ImgTest,
    demand: "Ramon Efísio Arquitetura",
    github: "#",
    site: "#",
    desc: "Ramon Efísio Arquitetura é um estúdio especializado em projetos arquitetônicos contemporâneos, unindo estética, funcionalidade e eficiência espacial em soluções sob medida.",
    tech: "React.js · PHP · Firebase · APIs",
  },
  {
    id: 3,
    name: "TechTravel",
    image: ImgTest,
    demand: "Projeto Pessoal",
    github: "#",
    site: "#",
    desc: "TechTravel é uma plataforma moderna para planejamento e gerenciamento de viagens, permitindo criar roteiros personalizados, acompanhar despesas e receber sugestões inteligentes.",
    tech: "React.js · Java · MySQL · APIs",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects">
      <div className="sections-wrapper">
        <SectionInfo title="Projetos" />

        <SectionContent>
          <div className="projects__container">
            {projectsData.map((project) => (
              <div key={project.id} className="projects__card">
                {/* CONTAINER 1 — IMAGEM */}
                <div className="projects__image--container">
                  <img src={project.image} alt={project.name} />
                </div>

                {/* CONTAINER 2 — SOBREPOSTO */}
                <div className="projects__info--container">
                  <h3 className="projects__info--title">{project.name}</h3>
                  <button
                    className="projects__btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <FaExternalLinkAlt className="projects__btn--icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* MODAL */}
          {selectedProject &&
            createPortal(
              <div className="project__modal--overlay">
                <div className="project__modal">
                  {/* HEADER */}
                  <div className="modal__header">
                    <h3>{selectedProject.name}</h3>
                    <FaTimes
                      className="modal__close"
                      onClick={() => setSelectedProject(null)}
                    />
                  </div>
                  <div className="modal__image">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                    />
                  </div>

                  <div className="modal__infos">
                    <div className="modal__info--item">
                      <FaUser className="modal__info--icon"/>
                      <span>{selectedProject.demand}</span>
                    </div>

                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal__info--item"
                    >
                      <FaGithub className="modal__info--icon"/>
                      <span>GitHub</span>
                    </a>
                  </div>

                  <p className="modal__desc">{selectedProject.desc}</p>

                  <a
                    href={selectedProject.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__site--link"
                  >
                    Acesse o site: {selectedProject.name}
                  </a>

                  <hr className="hrLine"/>

                  <button
                    className="modal__back--btn"
                    onClick={() => setSelectedProject(null)}
                  >
                    Voltar
                  </button>
                </div>
              </div>,
              document.getElementById("modal-root"),
            )}
        </SectionContent>
      </div>
    </section>
  );
};

export default Projects;
