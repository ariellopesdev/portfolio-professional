//CSS
import "./Projects.css";

//Images
import testImage from "../../assets/images/image-test.jpg";

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <div className="block-left">
          <h1>Projetos</h1>
          <div className="two-lines"></div>
          <p>
            Aqui estão alguns dos projetos que desenvolvi ao longo da minha
            jornada como <strong>desenvolvedor fullstack</strong>. Cada um
            representa desafios e aprendizados que me ajudaram a evoluir,
            explorando diferentes tecnologias e abordagens para criar soluções
            reais, com foco em desempenho, usabilidade e boas práticas.
          </p>
          <button className="btn-navigate">Ver todos os projetos</button>
        </div>
        <div className="block-right">
          <article className="project-card">
            <img src={testImage} alt="Imagem do projeto RandPlay" />
            <div className="project-card-main">
              <h2>RandPlay</h2>
              <p className="technologys">React.js e Node.js</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam culpa nesciunt amet tempore consectetur illum asperiores
                facere! Atque facere enim ipsam, praesentium quisquam impedit
                neque nam commodi cupiditate fugiat.
              </p>
            </div>
            <div className="btn-link">
              <button>ver projeto</button>
            </div>
          </article>
          <article className="project-card">
            <img src={testImage} alt="Imagem do projeto RandPlay" />
            <div className="project-card-main">
              <h2>RandPlay</h2>
              <p className="technologys">React.js e Node.js</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam culpa nesciunt amet tempore consectetur illum asperiores
                facere! Atque facere enim ipsam, praesentium quisquam impedit
                neque nam commodi cupiditate fugiat.
              </p>
            </div>
            <div className="btn-link">
              <button>ver projeto</button>
            </div>
          </article>
          <article className="project-card">
            <img src={testImage} alt="Imagem do projeto RandPlay" />
            <div className="project-card-main">
              <h2>RandPlay</h2>
              <p className="technologys">React.js e Node.js</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam culpa nesciunt amet tempore consectetur illum asperiores
                facere! Atque facere enim ipsam, praesentium quisquam impedit
                neque nam commodi cupiditate fugiat.
              </p>
            </div>
            <div className="btn-link">
              <button>ver projeto</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Projects;
