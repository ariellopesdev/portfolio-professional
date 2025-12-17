// CSS
import "./Home.css";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Aside from "../../components/Aside/Aside";
import Main from "../../components/Main/Main";
import Moon from "../../components/Moon/Moon";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Curriculum from "../../components/Curriculum/Curriculum";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Aside />

      <section id="main">
        <Main />
        <Moon />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="curriculum">
        <Curriculum />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
