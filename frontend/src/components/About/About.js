import "./About.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

// Hooks
import { useVisibleState } from "../../hooks/useVisibleState";
import { useState, useRef } from "react";

// Icons
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

const About = () => {
  const { ref, isVisible } = useVisibleState(0.3);

  const blocks = [
    {
      title: (
        <>
          <FaReact className="icon" /> Sou{" "}
          <span className="highlight">Dev Fullstack</span>
        </>
      ),
      text: (
        <>
          Construo sites, sistemas e web apps com <FaReact className="icon" />{" "}
          <span className="highlight">React.js</span> no frontend e{" "}
          <FaJava className="icon" /> <span className="highlight">Java</span> no
          backend como foco principal. Também trabalho com{" "}
          <FaNodeJs className="icon" />{" "}
          <span className="highlight">Node.js/Express</span> para APIs.
        </>
      ),
      image: <FaReact className="big-icon" />,
    },
    {
      title: <>⚙️ Stack principal</>,
      text: (
        <>
          Ecossistema JavaScript com <SiNextdotjs className="icon" />{" "}
          <span className="highlight">Next.js</span>,{" "}
          <SiRedux className="icon" /> Redux Toolkit, React Router, Styled
          Components e Fetch API. Versionamento com{" "}
          <VscGithub className="icon" />{" "}
          <span className="highlight">Git e GitHub</span>.
        </>
      ),
      image: <SiNextdotjs className="big-icon" />,
    },
    {
      title: <>🧩 Backend e banco de dados</>,
      text: (
        <>
          Desenvolvimento de <span className="highlight">APIs REST</span>,{" "}
          <span className="highlight">autenticação JWT</span>,{" "}
          <span className="highlight">upload de arquivos</span> e integração com
          bancos (
          <SiMysql className="icon" /> MySQL / <SiMongodb className="icon" />{" "}
          MongoDB). Também uso <SiFirebase className="icon" />{" "}
          <span className="highlight">Firebase</span> para autenticação e
          notificações.
        </>
      ),
      image: <FaNodeJs className="big-icon" />,
    },
    {
      title: <>💡 Boas práticas</>,
      text: (
        <>
          Crio aplicações completas, seguras e escaláveis, aplicando{" "}
          <span className="highlight">componentização</span>,{" "}
          <span className="highlight">gerenciamento de estado</span>,{" "}
          <span className="highlight">responsividade</span> e{" "}
          <span className="highlight">acessibilidade</span>.
        </>
      ),
    },
    {
      title: <>🧠 Ferramentas e qualidade</>,
      text: (
        <>
          Experiência com <FaDocker className="icon" />{" "}
          <span className="highlight">Docker</span>, Postman, Sass e{" "}
          <span className="highlight">testes automatizados</span> para garantir
          qualidade.
        </>
      ),
      image: <FaNodeJs className="big-icon" />,
    },
    {
      title: <>📘 Outros conhecimentos</>,
      text: (
        <>
          Também possuo experiência com{" "}
          <span className="highlight">Python</span> e{" "}
          <span className="highlight">PHP</span>, mas meu foco no backend é{" "}
          <FaJava className="icon" /> <span className="highlight">Java</span>.
        </>
      ),
      image: <FaNodeJs className="big-icon" />,
    },
    {
      title: <>🚀 Objetivo</>,
      text: (
        <>
          Busco projetos que unam <span className="highlight">desempenho</span>,{" "}
          <span className="highlight">usabilidade</span> e{" "}
          <span className="highlight">escalabilidade</span>, aplicando práticas
          sólidas de desenvolvimento{" "}
          <span className="highlight">fullstack moderno</span>.
        </>
      ),
      image: <FaNodeJs className="big-icon" />,
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
