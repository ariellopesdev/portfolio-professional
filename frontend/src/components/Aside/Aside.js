//CSS
import "./Aside.css";

const Aside = ({ currentSection }) => {
  const numSections = 5; // quantidade de traços
  const lines = Array.from({ length: numSections }, (_, i) => i);

  return (
    <aside>
      <div id="aside-block">
        <ul>
          {lines.map((line) => (
            <li key={line} className={currentSection === line ? "active" : ""}>
              <span className="line-bar"></span>
            </li>
          ))}
        </ul>
      </div>
      <div
        id="block-scroll"
        className={currentSection === 0 ? "visible" : "hidden"}
      >
        <div id="scroll-text">
          <span>SCROLLDOWN</span>
          <span className="scroll-icon-minus"></span>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
