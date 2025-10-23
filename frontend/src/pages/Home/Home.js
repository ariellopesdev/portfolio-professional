//Css
import "./Home.css";

//components
import Navbar from "../../components/Navbar/Navbar";
import Aside from "../../components/Aside/Aside";
import Main from "../../components/Main/Main";
import Moon from "../../components/Moon/Moon";
import Projects from "../../components/Projects/Projects";

import { useEffect, useState } from "react";

const Home = () => {
  const sections = [
    "main",
    "projects",
    "about",
    "curriculum",
    "contact",
    "footer",
  ];
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // trava temporária
  const [scrollTextVisible, setScrollTextVisible] = useState(true);

  // Controle de Scroll entre as Seções
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      // Impede múltiplos disparos seguidos
      if (isScrolling) return;
      setIsScrolling(true);

      let nextSection = currentSection;

      if (e.deltaY > 0) {
        //scroll para baixo
        nextSection = Math.min(currentSection + 1, sections.length - 1);
      } else {
        //scroll para cima
        nextSection = Math.max(currentSection - 1, 0);
      }

      setCurrentSection(nextSection);

      //Controle do scroll text: visível apenas no main(índice 0)
      if (nextSection === 0) setScrollTextVisible(true);
      else setScrollTextVisible(false);

      // Libera o scroll após 1 segundo
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isScrolling, currentSection, sections.length]);

  // scroll para a seção atual
  useEffect(() => {
    const target = document.getElementById(sections[currentSection]);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, [currentSection, sections]);

  return (
    <div id="home">
      <Navbar />
      {/*Para impedir com que o active suma abaixo do último section */}
      <Aside currentSection={Math.min(currentSection, 4)} />
      <Main />
      <Moon isVisible={currentSection === 0} />
      <Projects />
      <section id="about">
        <h1>Sobre mim</h1>
        <p>
          Há 2 anos desenvolvendo sites, sistemas e web apps em projetos
          pessoais e acadêmicos, utilizando a linguagem Javascript e a
          biblioteca React.Js, com ferramentas como: Redux/Redux Toolkit, React
          Router, Fetch API e Styled Components e as boas práticas do
          desenvolvimento frontend: Componentização, Gerenciamento de Estado,
          Responsividade e Acessibilidade, SEO, Integrações a APIs. Para
          Controle de Versionamento o GitHub, e gerenciamento e implementação de
          projetos o Git.
        </p>
        <div id="aboutcard">
          <p>Habilidades desenvolvidas</p>
        </div>
      </section>
      <section id="curriculum">
        <h1>Currículo</h1>
        <p>Em breve</p>
      </section>
      <section id="contact">
        <h1>Contato</h1>
        <p>Me envie uma mensagem</p>
        <div className="contactcard">
          <i></i>
          <h2>Redes Sociais</h2>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="contactcard">
          <i></i>
          <h2>Email</h2>
          <p>ariel_lopescwb2017@hotmail.com</p>
        </div>
        <div className="contactcard">
          <input type="text" name="" id="" placeholder="Nome" />
          <input type="email" name="" id="" placeholder="Email" />
          <input type="text" name="" id="" placeholder="Assunto" />
          <textarea name="" id="">
            Mensagem
          </textarea>
          <button>Enviar</button>
        </div>
      </section>
      {/* <footer id="footer">
        <h1>Ariel Lopes</h1>
        <p>Frase Motivacional</p>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <p>@copy; Copyright Ariel Lopes.</p>
      </footer> */}
    </div>
  );
};

export default Home;
