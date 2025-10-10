//Css
import "./Home.css";

//components
import Navbar from "../../components/Navbar/Navbar";
import Aside from "../../components/Aside/Aside";
import Main from "../../components/Main/Main";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Aside />
      <Main />
      <section id="projects">
        <h1>Projetos</h1>
        <div className="projectcard">
          <h2>RandPlay</h2>
          <img src="" alt="" />
          <h3>Tecnologias: React.Js e Node.Js</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            culpa nesciunt amet tempore consectetur illum asperiores facere!
            Atque facere enim ipsam, praesentium quisquam impedit neque nam
            commodi cupiditate fugiat. Officia.
          </p>
        </div>
        <div className="projectcard">
          <p>Em breve</p>
        </div>
        <div className="projectcard">
          <p>Em breve</p>
        </div>
      </section>
      <section id="about">
        <h1>Sobre mim</h1>
        <p>
          Há 2 anos desenvolvendo sites, sistemas e web apps em projetos
          pessoais e acadêmicos, utilizando a linguagem Javascript e a
          biblioteca React.Js, com ferramentas como: Redux/Redux Toolkit, React
          Router, Fetch API e Styled Components e as boas práticas do
          desenvolvimento frontend: Componentização, Gerenciamento de Estado,
          Responsividade e Acessibilidade, SEO, Integrações a APIs. Para
          Controle de Versionamento o GitHub, e gerenciamento e implementação de
          projetos o Git.
        </p>
        <div id="aboutcard">
          <p>Habilidades desenvolvidas</p>
        </div>
      </section>
      <section id="curriculum">
        <h1>Currículo</h1>
        <p>Em breve</p>
      </section>
      <section id="contact">
        <h1>Contato</h1>
        <p>Me envie uma mensagem</p>
        <div className="contactcard">
          <i></i>
          <h2>Redes Sociais</h2>
          <i></i><i></i><i></i><i></i>
        </div>
        <div className="contactcard">
          <i></i>
          <h2>Email</h2>
          <p>ariel_lopescwb2017@hotmail.com</p>
        </div>
        <div className="contactcard">
          <input type="text" name="" id="" placeholder="Nome" />
          <input type="email" name="" id="" placeholder="Email"/>
          <input type="text" name="" id="" placeholder="Assunto"/>
          <textarea name="" id="">Mensagem</textarea>
          <button>Enviar</button>
        </div>
      </section>
      <footer>
        <h1>Ariel Lopes</h1>
        <p>Frase Motivacional</p>
        <i></i><i></i><i></i><i></i>
        <p>@copy; Copyright Ariel Lopes.</p>
      </footer>
    </div>
  );
};

export default Home;
