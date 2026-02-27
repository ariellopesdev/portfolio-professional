//CSS
import "./Main.css";

//Components
import TwoLines from "../TwoLines/TwoLines";

//Hooks
import { useEffect, useState } from "react";

const Main = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(()=>{
    setAnimate(true);
  },[]);

  return (
    <section id="main" className={animate ? "animate" : ""}>
      <div id="main__container">
        <p className="main__text--intro">
          Oi, eu sou
        </p>
        <h1 className="main__text--title">
          Ariel Lopes
        </h1>
        <TwoLines color="#ff5f5f" compact={false} variant="main" />
        <h2 className="main__text--subtitle">Full Stack Developer</h2>
        <div id="main__actions">
          <a
            className="main__actions--link"
            href="https://www.linkedin.com/in/ariel-lopes-71000821b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="main__actions--link"
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

export default Main;
