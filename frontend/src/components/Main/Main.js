import "./Main.css";

// Components
import TwoLines from "../TwoLines/TwoLines";

const Main = () => {
  return (
    <section id="main">
      <div id="block-left-main">
        <h1 className="animate-title">
          Ariel <br /> Lopes
        </h1>

        <TwoLines color="#ff5f5f" compact={false} />

        <h2 className="animate-subtitle">
          desenvolvedor <br /> full stack
        </h2>
      </div>
    </section>
  );
};

export default Main;
