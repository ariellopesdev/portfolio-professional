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
  ].sort((a, b) => {
    const getYear = (value) => {
      const match = value.match(/\d{4}/);
      return match ? parseInt(match[0]) : 0;
    };
    return getYear(b.year) - getYear(a.year);
  });

  return (
    <section id="curriculum">
      <div className="sections-wrapper">
        <SectionInfo title="Currículo" />

        <SectionContent>
          {/* TEXTO SEM SELEÇÃO — SEMPRE NO TOPO */}

          <div className="curriculum__empty">
            <p>
              Selecione uma ou mais categorias para visualizar minha trajetória
              acadêmica e profissional organizada cronologicamente. As
              experiências são exibidas de acordo com o ano de realização,
              independentemente do tipo.
            </p>
          </div>

          {/* FILTROS SOBRE AS COLUNAS */}
          <div className="curriculum__filters">
            <label className="filter-box left">
              <input
                type="checkbox"
                checked={filters.academic}
                onChange={() => toggleFilter("academic")}
              />
              Acadêmica
            </label>

            <label className="filter-box right">
              <input
                type="checkbox"
                checked={filters.professional}
                onChange={() => toggleFilter("professional")}
              />
              Profissional
            </label>
          </div>

          {(filters.academic || filters.professional) && (
            <div className="timeline">
              {items.map((item, index) => {
                const side = index % 2 === 0 ? "left" : "right";

                return (
                  <div
                    key={`${item.year}-${item.title}`}
                    className={`timeline__item ${side}`}
                  >
                    {/* DATA FORA DO BLOCO (DESKTOP) */}
                    {side === "left" && (
                      <span className="timeline__date">{item.year}</span>
                    )}

                    {/* MARKER */}
                    <div className="timeline__marker">
                      <span className="timeline__circle"></span>
                    </div>

                    {side === "right" && (
                      <span className="timeline__date">{item.year}</span>
                    )}

                    {/* CARDS */}
                    <div className="timeline__cards">
                      <div className="timeline__card timeline__card--back"></div>

                      <div className="timeline__card timeline__card--front">
                        {/* DATA DENTRO DO BLOCO (MOBILE) */}
                        <span className="timeline__date--inside">
                          {item.year}
                        </span>

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
