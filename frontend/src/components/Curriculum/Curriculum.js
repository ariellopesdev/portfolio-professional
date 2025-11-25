//CSS
import "./Curriculum.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

// Hooks
import { useVisibleState } from "../../hooks/useVisibleState";

// Icons 
import { FaReact, FaJava, FaNodeJs, FaDocker, FaCode } from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPhp,
  SiPython,
} from "react-icons/si";

import { VscGithub } from "react-icons/vsc";

const timelineItems = [
  {
    year: "2026",
    title: "Formação — PUCPR",
    desc: "Análise e Desenvolvimento de Sistemas (conclusão: junho de 2026)",
  },
  {
    year: "Jun 2025",
    title: "Kara Arquitetura — Projeto (Acadêmico/Cliente)",
    desc: "Site completo com React.js, PHP e Firebase. SEO, responsividade e boas práticas.",
  },
  {
    year: "Out 2025",
    title: "RandPlay — Projeto",
    desc: "Site completo com APIs, React.js, Java e MongoDB. Hooks, middlewares e performance.",
  },
  {
    year: "2024–2025",
    title: "Atuação prática",
    desc: "Desenvolvimento Frontend e Backend em projetos acadêmicos e colaborativos.",
  },
  {
    year: "2023–2024",
    title: "Projetos acadêmicos",
    desc: "Vários projetos integrando frontend e backend para aprendizado prático.",
  },
];

const courses = [
  { year: "2023", title: "React do zero à maestria — Hora de Codar (Udemy)" },
  {
    year: "2023",
    title: "React JS do zero ao avançado — Matheus Fraga (Udemy)",
  },
  {
    year: "2024",
    title: "HTML5 e CSS3: Técnicas Avançadas — Hora de Codar (Udemy)",
  },
  { year: "2025", title: "PHP do zero à maestria — Hora de Codar (Udemy)" },
  {
    year: "2025",
    title: "Sass e SCSS do básico ao avançado — Hora de Codar (Udemy)",
  },
  { year: "2025", title: "SEO — Rodrigo Bueno (Curso)" },
  { year: "2025", title: "Banco de Dados e SQL — IA Expert Academy (Udemy)" },
  { year: "—", title: "Inglês básico" },
];

const techs = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Python", icon: <SiPython /> },
  { name: "C#", icon: <FaCode /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <VscGithub /> },
  { name: "Sass", icon: <span className="tech-text">Sass</span> },
];

const Curriculum = () => {
  const { ref, isVisible } = useVisibleState(0.3);

  return (
    <section id="curriculum" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Currículo"
          text="Linha do tempo — formação, projetos e cursos"
          isVisible={isVisible}
        />

        <SectionContent>
          <div className="cv-container">
            <div className="cv-main">
              <div className="timeline">
                {timelineItems.map((item, i) => (
                  <div
                    key={i}
                    className={`timeline-item ${
                      i % 2 === 0 ? "left" : "right"
                    }`}
                  >
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-card">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="courses-and-download">
                <div className="courses">
                  <h3>Cursos & Certificados</h3>
                  <ul>
                    {courses.map((c, i) => (
                      <li key={i}>
                        <strong>{c.year}</strong> — {c.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cv-actions">
                  <a
                    href="/curriculo.pdf"
                    className="download-btn"
                    aria-disabled="true"
                  >
                    Baixar Currículo (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="tech-bar" role="list">
              {techs.map((t, i) => (
                <div key={i} className="tech-item" role="listitem">
                  <div className="tech-icon">{t.icon}</div>
                  <div className="tech-name">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionContent>
      </div>
    </section>
  );
};

export default Curriculum;
