//CSS
import "./Main.css";

//Hooks
import {useVisibleState} from "../../hooks/useVisibleState";

//Components
import TwoLines from "../TwoLines/TwoLines";

const Main = () => {
  const {ref, isVisible} = useVisibleState(0.9);

  return (
    <section id="main" ref={ref}>
      <div id="block-left-main">
        <h1 className={isVisible ? "visible" : "reset"}>
          Ariel <br /> Lopes
        </h1>
        <TwoLines isVisible={isVisible} color="#ff5f5f" />
        <h2 className={isVisible ? "visible" : "reset"}>
          desenvolvedor <br /> full stack
        </h2>
      </div>
    </section>
  );
};

export default Main;
