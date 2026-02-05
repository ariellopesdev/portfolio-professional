// CSS
import "./About.css";

// Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";
import SubtitleH2 from "../SubtitleH2/SubtitleH2";

// Hooks
import { useState, useEffect } from "react";

// Images
import portfolioImg from "../../assets/images/portfolio-image2.png";

// Icons
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaCode,
  FaUsers,
  FaComments,
  FaBrain,
  FaTasks,
  FaLightbulb,
  FaShieldAlt,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaUserTie,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPhp,
  SiPython,
  SiGit,
  SiExpress,
  SiKubernetes,
  SiGithubactions,
  SiPostman,
} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";

const About = () => {
  const IconCarousel = ({ icons, interval = 2000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % icons.length);
      }, interval);

      return () => clearInterval(timer);
    }, [icons.length, interval]);

    return <>{icons[index]}</>;
  };

  const blocks = [
    {
      content: (
        <div className="about__block--split">
          <div className="about__content--text">
            <p className="about__paragraph">
              Sou <span className="highlight">Desenvolvedor Fullstack</span> e
              estou no último período de Análise e Desenvolvimento de Sistemas
              na <strong>PUCPR</strong> (conclusão em Jun/2026). Meu foco é
              criar aplicações que unem clareza, performance e experiências
              centradas no usuário.
            </p>
            <p className="about__paragraph--quote">
              “Código bem escrito resolve problemas hoje e mantém sua relevância
              amanhã.”
            </p>
            <p className="about__paragraph">
              Mantenho uma curiosidade constante por novas tecnologias, sempre
              testando abordagens que transformam conceitos complexos em
              soluções práticas e bem estruturadas.
            </p>
          </div>
          <div className="about__content--media">
            <img
              src={portfolioImg}
              className="about__image--profile"
              alt="My photo for portfolio"
            />
          </div>
        </div>
      ),
    },
    { content: <SubtitleH2>Hard Skills</SubtitleH2> },
    {
      content: (
        <div className="about__block--centered">
          <p className="about__skills--intro">Habilidades Técnicas</p>
          <div className="about__skills--container">
            <div className="about__skills">
              <div className="skills__card--icons">
                <IconCarousel
                  icons={[
                    <IoLogoJavascript className="skills__item--general skills__item--javascript" />,
                    <FaHtml5 className="skills__item--general skills__item--html" />,
                    <FaCss3Alt className="skills__item--general skills__item--css" />,
                    <FaReact className="skills__item--general skills__item--react" />,
                  ]}
                />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Front-End</h3>
                <div className="skillscard__content--name">
                  Javascript, HTML5, CSS3, SASS, React JS
                </div>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <IconCarousel
                  icons={[
                    <FaJava className="skills__item--general skills__item--java" />,
                    <SiPhp className="skills__item--general skills__item--php" />,
                    <SiPython className="skills__item--general skills__item--python" />,
                    <FaNodeJs className="skills__item--general skills__item--node" />,
                    <SiExpress className="skills__item--general skills__item--express" />,
                    <FaServer className="skills__item--general skills__item--rest" />,
                  ]}
                />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Back-End</h3>
                <div className="skillscard__content--name">
                  Java, PHP, Python, Node JS, Express JS, RESTful APIs
                </div>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <IconCarousel
                  icons={[
                    <SiMysql className="skills__item--general skills__item--mysql" />,
                    <SiMongodb className="skills__item--general skills__item--mongodb" />,
                    <SiFirebase className="skills__item--general skills__item--firebase" />,
                  ]}
                />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Banco de Dados</h3>
                <div className="skillscard__content--name">
                  MySQL, MongoDB, Firebase
                </div>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <IconCarousel
                  icons={[
                    <FaDocker className="skills__item--general skills__item--docker" />,
                    <SiKubernetes className="skills__item--general skills__item--kubernetes" />,
                    <SiGithubactions className="skills__item--general skills__item--cicd" />,
                    <SiGit className="skills__item--general skills__item--git" />,
                    <VscGithub className="skills__item--general skills__item--github" />,
                    <SiPostman className="skills__item--general skills__item--postman" />,
                  ]}
                />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">
                  DevOps & Ferramentas
                </h3>
                <div className="skillscard__content--name">
                  Docker, Kubernetes, CI/CD, Git, GitHub, Postman
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    { content: <SubtitleH2>Soft Skills</SubtitleH2> },
    {
      content: (
        <div className="about__block--centered">
          <p className="about__accordion--intro">Habilidades Sociais</p>
          <div className="about__skills--container">
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaComments className="skills__item--general skills_item--simpleicons" />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Comunicação</h3>
                <p className="skillscard__content--text">
                  Comunico de forma clara e objetiva em reuniões, feedbacks e
                  reports de atividades.
                </p>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaUsers className="skills__item--general skills_item--simpleicons" />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">
                  Trabalho em Equipe
                </h3>
                <p className="skillscard__content--text">
                  Atuo de forma colaborativa em projetos acadêmicos e freelas, com pair programming e revisões de código.
                </p>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaBrain className="skills__item--general skills_item--simpleicons" />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">
                  Resolução de Problemas
                </h3>
                <p className="skillscard__content--text">
                  Entender processos e padrões de qualidade facilita a identificação e a resolução de problemas.
                </p>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaLightbulb className="skills__item--general skills_item--simpleicons" />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Proatividade</h3>
                <p className="skillscard__content--text">
                  Identifico pontos de melhoria, assumo novas responsabilidades e proponho ações que aprimoram os processos.
                </p>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaUserTie className="skills__item--general skills_item--simpleicons" />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Liderança</h3>
                <p className="skillscard__content--text">
                  Tenho facilidade em organizar tarefas, distribuir
                  responsabilidades e garantir clareza e boa comunicação para o
                  time.
                </p>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaTasks className="skills__item--general skills_item--simpleicons" />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Organização</h3>
                <p className="skillscard__content--text">
                  Utilizo Git com estrutura modular e commits padronizados para facilitar a manutenção do projeto.
                </p>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaShieldAlt className="skills__item--general skills_item--simpleicons" />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">Resiliência</h3>
                <p className="skillscard__content--text">
                  Demonstro resiliência mantendo consistência nos estudos e entregas, mesmo em períodos de alta demanda e na transição de carreira.
                </p>
              </div>
            </div>
            <div className="about__skills">
              <div className="skills__card--icons">
                <FaProjectDiagram className="skills__item--general skills_item--simpleicons" />
              </div>
              <div className="skills__card--content">
                <h3 className="skillscard__content--title">
                  Pensamento crítico/lógico
                </h3>
                <p className="skillscard__content--text">
                  Sou capaz de raciocinar de forma crítica e encontrar soluções
                  para problemas reais.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about">
      <div className="sections-wrapper">
        <SectionInfo title="Sobre Mim" />
        <SectionContent>{blocks.map((block) => block.content)}</SectionContent>
      </div>
    </section>
  );
};

export default About;
