//CSS
import "./Curriculum.css";

//Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

//Hooks
import { useState } from "react";

const academicExperiences = [
  {
    year: "Jun 2026",
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    subtitle: "Pontifícia Universidade Católica do Paraná",
    desc: "Desenvolvimento de software, bancos de dados, APIs, arquitetura e metodologias ágeis.",
  },
  {
    year: "Jan 2025",
    title: "Banco de Dados e Linguagem SQL",
    subtitle: "IA Expert Academy | Udemy",
    desc: "Modelagem relacional, normalização e consultas SQL avançadas com foco em performance.",
  },
  {
    year: "Mai 2025",
    title: "Curso de SEO 2025",
    subtitle: "Rodrigo Bueno | Udemy",
    desc: "SEO técnico, performance web e estruturação semântica para melhor ranqueamento.",
  },
  {
    year: "Mar 2025",
    title: "SASS e SCSS do básico ao avançado",
    subtitle: "Hora de Codar | Udemy",
    desc: "Pré-processamento de CSS com foco em modularização, reutilização e escalabilidade.",
  },
  {
    year: "Fev 2023",
    title: "HTML5 e CSS3 Avançado",
    subtitle: "Hora de Codar | Udemy",
    desc: "HTML semântico, CSS avançado, responsividade e boas práticas de estrutura e manutenção.",
  },
  {
    year: "Dez 2024",
    title: "PHP do Zero à Maestria",
    subtitle: "Hora de Codar | Udemy",
    desc: "Backend com PHP, integração com banco de dados e construção de aplicações web dinâmicas.",
  },
  {
    year: "Jun 2024",
    title: "React do zero à maestria",
    subtitle: "Hora de Codar | Udemy",
    desc: "React, hooks, componentização e integração com APIs.",
  },
];

const professionalExperiences = [
  {
    year: "Out 2025",
    title: "RandPlay",
    subtitle: "Projeto (Acadêmico)",
    desc: "React.js, Java, MongoDB, APIs, hooks, middlewares e alta performance.",
  },
  {
    year: "Jun 2025",
    title: "Kara Arquitetura",
    subtitle: "Projeto (Acadêmico/Cliente)",
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
    const parseDate = (value) => {
      const months = {
        Jan: 0,
        Fev: 1,
        Mar: 2,
        Abr: 3,
        Mai: 4,
        Jun: 5,
        Jul: 6,
        Ago: 7,
        Set: 8,
        Out: 9,
        Nov: 10,
        Dez: 11,
      };

      const parts = value.split(" ");

      if (parts.length === 2) {
        const [month, year] = parts;
        return new Date(parseInt(year), months[month] ?? 0);
      }

      // Caso venha só o ano
      return new Date(parseInt(value), 0);
    };

    return parseDate(b.year) - parseDate(a.year);
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
                        {item.subtitle && (
                          <span className="timeline__subtitle">
                            {item.subtitle}
                          </span>
                        )}
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
