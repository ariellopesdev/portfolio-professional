import "./About.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";
import Carousel from "../Carousel/Carousel";

// Hooks
import { useVisibleState } from "../../hooks/useVisibleState";
import { useCarousel } from "../../hooks/useCarousel";

//Images
import fullStackImg from "../../assets/images/full-stack-developer.png";
import backend from "../../assets/images/backend.png";
import goals from "../../assets/images/goals.png";
import bestPractices from "../../assets/images/best-practices.png";
import stackPrincipal from "../../assets/images/stack-principal.png";
import tools from "../../assets/images/tools.png";
import othersKnowledge from "../../assets/images/others-knowledge.png";
import logo from "../../assets/images/logo.png";

const About = () => {
  const blocks = [
    {
      title: (
        <>
          <img src={logo} className="icon" alt="Logo" />
          Sou <span className="highlight">Dev Fullstack</span>
        </>
      ),
      text: (
        <>
          Construo sites, sistemas e web apps com
          <span className="highlight"> React.js</span> no frontend e
          <span className="highlight"> Java</span> e
          <span className="highlight"> PHP</span> no backend. Também trabalho
          com
          <span className="highlight"> Node.js/Express</span> para APIs e MySQL,
          MongoDB e Firebase para banco de dados.
        </>
      ),
      image: (
        <img
          src={fullStackImg}
          className="big-icon"
          alt="Fullstack Developer"
        />
      ),
    },
    {
      title: <>Stack principal</>,
      text: (
        <>
          Trabalho com o ecossistema JavaScript usando
          <span className="highlight"> React.js</span> para criar interfaces
          modernas. Utilizo Redux Toolkit para gerenciamento de estado e realizo
          integrações com <span className="highlight"> APIs REST</span> que
          desenvolvo em <span className="highlight"> Java</span> e
          <span className="highlight"> PHP</span>. Versionamento com
          <span className="highlight"> Git</span> e
          <span className="highlight"> GitHub</span>.
        </>
      ),
      image: (
        <img src={stackPrincipal} className="big-icon" alt="Stack Principal" />
      ),
    },
    {
      title: (
        <>
          Backend e
          <br />
          banco de dados
        </>
      ),
      text: (
        <>
          Desenvolvo <span className="highlight">APIs REST</span> utilizando
          <span className="highlight"> Java</span>,
          <span className="highlight"> PHP</span> e
          <span className="highlight"> Node.js</span>, aplicando boas práticas
          de segurança, escalabilidade e documentação. Trabalho com bancos
          relacionais e não relacionais, como
          <span className="highlight"> MySQL</span>,
          <span className="highlight"> MongoDB</span> e
          <span className="highlight"> Firebase</span>, priorizando
          consistência, desempenho e integração eficiente com o frontend.
        </>
      ),
      image: (
        <img src={backend} className="big-icon" alt="Backend and database" />
      ),
    },
    {
      title: <>Boas práticas</>,
      text: (
        <>
          Estruturo aplicações seguindo padrões de
          <span className="highlight"> arquitetura</span>,
          <span className="highlight"> componentização</span> e
          <span className="highlight"> organização de código</span>. Busco
          entregar interfaces <span className="highlight">responsivas</span>,
          <span className="highlight"> acessíveis</span> e com
          <span className="highlight"> alta performance</span>, sempre
          priorizando código limpo, claro e escalável.
        </>
      ),
      image: (
        <img src={bestPractices} className="big-icon" alt="Best Practices" />
      ),
    },
    {
      title: (
        <>
          Ferramentas
          <br />e qualidade
        </>
      ),
      text: (
        <>
          Utilizo ferramentas que fortalecem o fluxo de desenvolvimento, como
          <span className="highlight"> Docker</span>,
          <span className="highlight"> Postman</span> e metodologias de testes.
          Trabalho com <span className="highlight">Git</span> para
          versionamento, garantindo organização, rastreabilidade e
          confiabilidade durante o desenvolvimento e entrega das aplicações.
        </>
      ),
      image: <img src={tools} className="big-icon" alt="Tools and quality" />,
    },
    {
      title: <>Outros conhecimentos</>,
      text: (
        <>
          Tenho experiência com linguagens como
          <span className="highlight"> Python</span>,
          <span className="highlight"> C</span> e
          <span className="highlight"> C#</span> para automações, scripts e
          desenvolvimento backend. Possuo facilidade em aprender novas
          tecnologias e me adaptar rapidamente a diferentes ambientes e
          demandas.
        </>
      ),
      image: (
        <img
          src={othersKnowledge}
          className="big-icon"
          alt="Others Knowledge"
        />
      ),
    },
    {
      title: <>Objetivos</>,
      text: (
        <>
          Meu foco é atuar em projetos que valorizem
          <span className="highlight"> qualidade</span>,
          <span className="highlight"> boas práticas</span> e
          <span className="highlight"> evolução constante</span>. Busco
          contribuir para equipes e produtos, criando soluções completas que
          unam usabilidade, desempenho e escalabilidade, sempre com foco no
          crescimento como desenvolvedor fullstack.
        </>
      ),
      image: <img src={goals} className="big-icon" alt="Goals" />,
    },
  ];
  const { index, anim, prev, next, goTo, onTouchStart, onTouchEnd } =
    useCarousel(blocks.length);
  const { ref, isVisible } = useVisibleState(0.3);

  return (
    <section id="about" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Sobre Mim"
          text="Olá, sou o Ariel."
          isVisible={isVisible}
        />
        <SectionContent>
          <Carousel
            blocks={blocks}
            index={index}
            anim={anim}
            prev={prev}
            next={next}
            goTo={goTo}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          />
        </SectionContent>
      </div>
    </section>
  );
};

export default About;
