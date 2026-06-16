// CSS
import "./Projects.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

// Hooks
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import useSectionAnimation from "../../hooks/useSectionAnimation";

// Images
import FluxoSimplesImg from "../../assets/images/fluxosimplessystem.png";
import RandPlayImg from "../../assets/images/randplay.png";
import ImgTest from "../../assets/images/image-test.jpg";
import Kara_Arquitetura from "../../assets/images/hero_kara_arquitetura.png";

// Video
import FluxoSimplesVideo from "../../assets/video/presentation-fluxo-simples.mp4";

// Icons
import { FaGithub, FaUser, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    name: "Fluxo Simples System",
    image: FluxoSimplesImg,
    video: FluxoSimplesVideo,
    demand: "Projeto acadêmico / Sistema de gestão",
    github: "https://github.com/ariellopesdev/fluxosimplessystem",
    site: "https://fluxosimplessystem.vercel.app",
    desc: "Fluxo Simples System é um sistema web de gestão empresarial desenvolvido para centralizar processos como clientes, produtos, vendas, serviços, financeiro, relatórios e chamados de suporte. O projeto conta com controle de acesso por níveis de usuário, interface administrativa, modais reutilizáveis, dashboards e fluxo de atendimento entre usuários, administradores e super administradores. Dados para teste no site. Login: teste@teste.com Senha: Teste123!",
    tech: "React.js · Node.js · Express · MongoDB · Redux · JWT · API ",
    features: [
      "Controle de acesso por usuário, admin e super admin",
      "Gestão de clientes, produtos, vendas e serviços",
      "Módulo financeiro e relatórios",
      "Sistema de chamados com histórico e atendimento",
      "Interface responsiva com modais reutilizáveis",
      "Autenticação com JWT e rotas protegidas",
      "Geração de relatórios e dashboard",
    ],
  },
  {
    id: 2,
    name: "Kara Arquitetura",
    image: Kara_Arquitetura,
    demand: "Kara Arquitetura",
    github: "#",
    site: "#",
    desc: "Projeto em implementação.",
    tech: "React.js · PHP · Firebase · APIs",
  },
  {
    id: 3,
    name: "RandPlay",
    image: RandPlayImg,
    demand: "Projeto Pessoal",
    github: "#",
    site: "#",
    desc: "Projeto em implementação.",
    tech: "React.js · Java · MySQL · APIs",
  },
];

const Projects = ({ activeSection }) => {
  const hasAnimated = useSectionAnimation(activeSection, 1);

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
        <SectionInfo title="Projetos" animate={hasAnimated} />
        <SectionContent animate={hasAnimated}>
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
                  <span className="modal__tech">{selectedProject.tech}</span>
                  <div className="modal__image">
                    {selectedProject.video ? (
                      <video src={selectedProject.video} controls playsInline />
                    ) : (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.name}
                      />
                    )}
                  </div>

                  <div className="modal__infos">
                    <div className="modal__info--item">
                      <FaUser className="modal__info--icon" />
                      <span>{selectedProject.demand}</span>
                    </div>

                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal__info--item"
                    >
                      <FaGithub className="modal__info--icon" />
                      <span>GitHub</span>
                    </a>
                  </div>

                  <p className="modal__desc">{selectedProject.desc}</p>

                  {selectedProject.features && (
                    <ul className="modal__features">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  <a
                    href={selectedProject.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__site--link"
                  >
                    Acesse o site: {selectedProject.name}
                  </a>

                  <hr className="hrLine" />

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
