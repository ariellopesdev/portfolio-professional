import "./About.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

// Hooks
import { useVisibleState } from "../../hooks/useVisibleState";
import { useState, useRef } from "react";

// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//Images
import fullStackImg from "../../assets/images/full-stack-developer.png";
import backend from "../../assets/images/backend.png";
import goals from "../../assets/images/goals.png";
import bestPractices from "../../assets/images/best-practices.png";
import stackPrincipal from "../../assets/images/stack-principal.png";
import tools from "../../assets/images/tools.png";
import othersKnowledge from "../../assets/images/others-knowledge.png";
import logo from "../../assets/images/logo.png";

const About = () => {
  const { ref, isVisible } = useVisibleState(0.3);

  const blocks = [
    {
      title: (
        <>
          <img src={logo} className="icon" alt="Logo" />
          Sou <span className="highlight">Dev Fullstack</span>
        </>
      ),
      text: (
        <>
          Construo sites, sistemas e web apps com
          <span className="highlight"> React.js</span> no frontend e
          <span className="highlight"> Java</span> e
          <span className="highlight"> PHP</span> no backend. Também trabalho
          com
          <span className="highlight"> Node.js/Express</span> para APIs e MySQL,
          MongoDB e Firebase para banco de dados.
        </>
      ),
      image: (
        <img
          src={fullStackImg}
          className="big-icon"
          alt="Fullstack Developer"
        />
      ),
    },
    {
      title: <>Stack principal</>,
      text: (
        <>
          Trabalho com o ecossistema JavaScript usando
          <span className="highlight"> React.js</span> para criar interfaces
          modernas. Utilizo Redux Toolkit para gerenciamento de estado e realizo
          integrações com <span className="highlight"> APIs REST</span> que
          desenvolvo em <span className="highlight"> Java</span> e
          <span className="highlight"> PHP</span>. Versionamento com
          <span className="highlight"> Git</span> e
          <span className="highlight"> GitHub</span>.
        </>
      ),
      image: (
        <img src={stackPrincipal} className="big-icon" alt="Stack Principal" />
      ),
    },
    {
      title: (
        <>
          Backend e
          <br />
          banco de dados
        </>
      ),
      text: (
        <>
          Desenvolvo <span className="highlight">APIs REST</span> utilizando
          <span className="highlight"> Java</span>,
          <span className="highlight"> PHP</span> e
          <span className="highlight"> Node.js</span>, aplicando boas práticas
          de segurança, escalabilidade e documentação. Trabalho com bancos
          relacionais e não relacionais, como
          <span className="highlight"> MySQL</span>,
          <span className="highlight"> MongoDB</span> e
          <span className="highlight"> Firebase</span>, priorizando
          consistência, desempenho e integração eficiente com o frontend.
        </>
      ),
      image: (
        <img src={backend} className="big-icon" alt="Backend and database" />
      ),
    },
    {
      title: <>Boas práticas</>,
      text: (
        <>
          Estruturo aplicações seguindo padrões de
          <span className="highlight"> arquitetura</span>,
          <span className="highlight"> componentização</span> e
          <span className="highlight"> organização de código</span>. Busco
          entregar interfaces <span className="highlight">responsivas</span>,
          <span className="highlight"> acessíveis</span> e com
          <span className="highlight"> alta performance</span>, sempre
          priorizando código limpo, claro e escalável.
        </>
      ),
      image: (
        <img src={bestPractices} className="big-icon" alt="Best Practices" />
      ),
    },
    {
      title: (
        <>
          Ferramentas
          <br />e qualidade
        </>
      ),
      text: (
        <>
          Utilizo ferramentas que fortalecem o fluxo de desenvolvimento, como
          <span className="highlight"> Docker</span>,
          <span className="highlight"> Postman</span> e metodologias de testes.
          Trabalho com <span className="highlight">Git</span> para
          versionamento, garantindo organização, rastreabilidade e
          confiabilidade durante o desenvolvimento e entrega das aplicações.
        </>
      ),
      image: <img src={tools} className="big-icon" alt="Tools and quality" />,
    },
    {
      title: <>Outros conhecimentos</>,
      text: (
        <>
          Tenho experiência com linguagens como
          <span className="highlight"> Python</span>,
          <span className="highlight"> C</span> e
          <span className="highlight"> C#</span> para automações, scripts e
          desenvolvimento backend. Possuo facilidade em aprender novas
          tecnologias e me adaptar rapidamente a diferentes ambientes e
          demandas.
        </>
      ),
      image: (
        <img
          src={othersKnowledge}
          className="big-icon"
          alt="Others Knowledge"
        />
      ),
    },
    {
      title: <>Objetivos</>,
      text: (
        <>
          Meu foco é atuar em projetos que valorizem
          <span className="highlight"> qualidade</span>,
          <span className="highlight"> boas práticas</span> e
          <span className="highlight"> evolução constante</span>. Busco
          contribuir para equipes e produtos, criando soluções completas que
          unam usabilidade, desempenho e escalabilidade, sempre com foco no
          crescimento como desenvolvedor fullstack.
        </>
      ),
      image: <img src={goals} className="big-icon" alt="Goals" />,
    },
  ];

  // INDEX E ANIMAÇÃO
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState("entering");

  const goTo = (newIndex) => {
    setAnim("exiting");

    setTimeout(() => {
      setIndex(newIndex);
      setAnim("entering");

      setTimeout(() => setAnim(""), 600);
    }, 350);
  };

  const prev = () => goTo(index === 0 ? blocks.length - 1 : index - 1);
  const next = () => goTo((index + 1) % blocks.length);

  const wrapperRef = useRef(null);

  // Swipe mobile
  const touchStartX = useRef(0);
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const dist = e.changedTouches[0].clientX - touchStartX.current;
    if (dist > 50) prev();
    if (dist < -50) next();
  };

  return (
    <section id="about" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Sobre Mim"
          text="Olá, sou o Ariel."
          isVisible={isVisible}
        />

        <SectionContent>
          <div
            id="carousel-wrapper"
            ref={wrapperRef}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Arrows */}
            <button className="carousel-arrow left" onClick={prev}>
              <FaChevronLeft />
            </button>

            <button className="carousel-arrow right" onClick={next}>
              <FaChevronRight />
            </button>

            {/* Slide */}
            <div className={`carousel-slide ${anim}`}>
              <div className="slide-left">
                <h1>{blocks[index].title}</h1>
                <p>{blocks[index].text}</p>
              </div>

              <div className="slide-right">{blocks[index].image}</div>
            </div>

            {/* Dots */}
            <div className="carousel-dots">
              {blocks.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        </SectionContent>
      </div>
    </section>
  );
};

export default About;
