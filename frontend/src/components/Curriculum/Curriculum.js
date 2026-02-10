import "../PagesGroup/PagesGroup.css";
import "./Curriculum.css";

import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";
import { useState } from "react";

const academicExperiences = [
  {
    year: "Jun 2026",
    title: "Análise e Desenvolvimento de Sistemas (PUCPR)",
    desc: "",
  },
  {
    year: "2025",
    title: "Banco de Dados e Linguagem SQL — IA Expert Academy",
    desc: "Curso de SEO 2025 — Rodrigo Bueno | SASS e SCSS do básico ao avançado — Hora de Codar",
  },
  {
    year: "2024",
    title: "HTML5 e CSS3 Avançado — Hora de Codar",
    desc: "PHP do Zero à Maestria — Hora de Codar",
  },
  {
    year: "2023",
    title: "React do zero à maestria — Hora de Codar",
    desc: "React JS do zero ao avançado — Matheus Fraga",
  },
];

const professionalExperiences = [
  {
    year: "Out 2025",
    title: "RandPlay — Projeto (Acadêmico)",
    desc: "React.js, Java, MongoDB, APIs, hooks, middlewares e alta performance.",
  },
  {
    year: "Jun 2025",
    title: "Kara Arquitetura — Projeto (Acadêmico/Cliente)",
    desc: "Site completo com React.js, PHP e Firebase. SEO, responsividade e boas práticas.",
  },
];

const Curriculum = () => {
  const [filters, setFilters] = useState({
    academic: true,
    professional: false,
  });

  const toggleFilter = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const items = [
    ...(filters.academic ? academicExperiences : []),
    ...(filters.professional ? professionalExperiences : []),
  ];

  return (
    <section id="curriculum">
      <div className="sections-wrapper">
        <SectionInfo title="Currículo" />

        <SectionContent>
          {/* FILTERS */}
          <div className="curriculum__filters">
            <button
              className={`curriculum__filter ${
                filters.professional ? "active" : ""
              }`}
              onClick={() => toggleFilter("professional")}
            >
              Profissional
            </button>

            <button
              className={`curriculum__filter ${
                filters.academic ? "active" : ""
              }`}
              onClick={() => toggleFilter("academic")}
            >
              Acadêmica
            </button>
          </div>

          {!filters.academic && !filters.professional && (
            <p className="curriculum__empty">
              Selecione pelo menos um tipo de experiência para conhecer minha trajetória.
            </p>
          )}

          {(filters.academic || filters.professional) && (
            <div className="timeline">
              {items.map((item, index) => {
                const side = index % 2 === 0 ? "left" : "right";

                return (
                  <div key={index} className={`timeline__item ${side}`}>
                    {/* LINE MARKER */}
                    <div className="timeline__marker">
                      <span className="timeline__circle"></span>
                      <span className="timeline__date">{item.year}</span>
                    </div>

                    {/* CONTENT */}
                    <div className="timeline__cards">
                      <div className="timeline__card timeline__card--back"></div>
                      <div className="timeline__card timeline__card--front">
                        <h4>{item.title}</h4>
                        {item.desc && <p>{item.desc}</p>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </SectionContent>
      </div>
    </section>
  );
};

export default Curriculum;
