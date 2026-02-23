// CSS
import "./Home.css";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Curriculum from "../../components/Curriculum/Curriculum";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Main />
      <Projects />
      <About />
      <Curriculum />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
