import "./Main.css";

// Components
import TwoLines from "../TwoLines/TwoLines";

const Main = () => {
  return (
    <section id="main">
      <div id="main__container">
        <h1 className="main__text--title">
          Ariel <br /> Lopes
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
