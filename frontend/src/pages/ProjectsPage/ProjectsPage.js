//CSS
import "./ProjectsPage.css";

//Images
import testImage from "../../assets/images/image-test.jpg";

//Icons
import { FaGithub } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <div>
      <p>
        Aqui estão alguns dos projetos que desenvolvi ao longo da minha jornada
        como <strong>desenvolvedor fullstack</strong>. Cada um representa
        desafios e aprendizados que me ajudaram a evoluir, explorando diferentes
        tecnologias e abordagens para criar soluções reais, com foco em
        desempenho, usabilidade e boas práticas.
      </p>

      <div className="block-right">
        {[1, 2, 3].map((_, i) => (
          <article className="project-card" key={i}>
            <div className="img-zoom">
              <img src={testImage} alt="Imagem do projeto RandPlay" />
            </div>
            <div className="project-card-main">
              <h2>RandPlay</h2>
              <p className="technologys">React.js e Node.js</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                culpa nesciunt amet tempore consectetur illum asperiores.
              </p>
            </div>

            <div className="cta-group">
              <button className="btn-site">Acessar site</button>
              <button className="btn-page-project">Acessar projeto</button>
              <button className="icon-github"><FaGithub /></button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
