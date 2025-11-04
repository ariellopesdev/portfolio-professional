//Css
import "./Home.css";

//components
import Navbar from "../../components/Navbar/Navbar";
import Aside from "../../components/Aside/Aside";
import Main from "../../components/Main/Main";
import Moon from "../../components/Moon/Moon";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Curriculum from "../../components/Curriculum/Curriculum";
import Contact from "../../components/Contact/Contact";

//Hooks
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
      setTimeout(() => setIsScrolling(false), 800);
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
      <Main isVisible={currentSection === 0} />
      <Moon isVisible={currentSection === 0} />
      <Projects isVisible={currentSection === 0} />
      <About isVisible={currentSection === 0} />
      <Curriculum isVisible={currentSection === 0} />
      <Contact isVisible={currentSection === 0}/>
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
