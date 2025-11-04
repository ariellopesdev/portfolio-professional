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
import useScrollEffect from "../../hooks/useScrollEffect";

const Home = () => {
  const sections = [
    "main",
    "projects",
    "about",
    "curriculum",
    "contact",
    "footer",
  ];

  const { currentSection, scrollTextVisible } = useScrollEffect(sections);

  return (
    <div id="home">
      <Navbar />
      {/*Para impedir com que o active suma abaixo do último section */}
      <Aside currentSection={Math.min(currentSection, 4)} />
      <Main isVisible={currentSection === 0} />
      <Moon isVisible={currentSection === 0} />
      <Projects isVisible={currentSection === 1} />
      <About isVisible={currentSection === 2} />
      <Curriculum isVisible={currentSection === 3} />
      <Contact isVisible={currentSection === 4} />
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
