// CSS
import "./Home.css";

//Hooks
import { useScrollEffect } from "../../hooks/useScrollEffect";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Curriculum from "../../components/Curriculum/Curriculum";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import ScrollTopButton from "../../components/ScrollTopButton/ScrollTopButton";

const Home = () => {
  const { activeSection, scrollToSection, showScrollTop} = useScrollEffect();
  return (
    <div id="home">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero />
      <Projects activeSection={activeSection}/>
      <About activeSection={activeSection} />
      <Curriculum activeSection={activeSection} />
      <Contact activeSection={activeSection} />
      <Footer />

      <ScrollTopButton
        showScrollTop={showScrollTop}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default Home;
