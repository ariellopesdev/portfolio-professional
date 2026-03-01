//CSS
import "./Hero.css";

//Components
import TwoLines from "../TwoLines/TwoLines";

//Hooks
import { useEffect, useState } from "react";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(()=>{
    setAnimate(true);
  },[]);

  return (
    <section id="hero" className={animate ? "animate" : ""}>
      <div id="hero__container">
        <p className="hero__text--intro">
          Oi, eu sou
        </p>
        <h1 className="hero__text--title">
          Ariel Lopes
        </h1>
        <TwoLines color="#ff5f5f" compact={false} variant="hero" />
        <h2 className="hero__text--subtitle">Full Stack Developer</h2>
        <div id="hero__actions">
          <a
            className="hero__actions--link"
            href="https://www.linkedin.com/in/ariel-lopes-71000821b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hero__actions--link"
            href="https://github.com/ariellopesdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
