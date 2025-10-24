import "./Main.css";
import { useEffect, useState, useRef } from "react";

const Main = () => {
  const [visibleState, setVisibleState] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const projectsSection = document.getElementById("projects");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Projects ainda não ocupou 100% da tela: Main permanece visível
          if (entry.intersectionRatio < 1) {
            setVisibleState(true);
          } else {
            // Projects ocupa 100% da tela: Main desaparece
            setVisibleState(false);
          }
        });
      },
      {
        threshold: 1.0, // 100% visível
      }
    );

    if (projectsSection) observer.observe(projectsSection);

    return () => {
      if (projectsSection) observer.unobserve(projectsSection);
    };
  }, []);

  return (
    <section id="main" ref={mainRef}>
      <div className="block-left">
        <h1 className={visibleState ? "visible" : "reset"}>
          Ariel <br /> Lopes
        </h1>
        <div className={`two-lines ${visibleState ? "visible" : "reset"}`}></div>
        <h2 className={visibleState ? "visible" : "reset"}>
          desenvolvedor <br /> full stack
        </h2>
      </div>
    </section>
  );
};

export default Main;
