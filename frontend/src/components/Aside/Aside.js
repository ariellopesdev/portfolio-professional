//CSS
import "./Aside.css";

const Aside = ({ currentSection }) => {
  // Total number of site sections
  const numSections = 5;
  // Create an array [0,1,2,3,4] based on the number of sections
  const lines = Array.from({ length: numSections }, (_, i) => i);

  return (
    <aside>
      <div id="aside-block">
        <ul>
          {lines.map((line) => (
            //Each row receives 'active' when its index matches the current section
            <li key={line} className={currentSection === line ? "active" : ""}>
              <span className="line-bar"></span>
            </li>
          ))}
        </ul>
      </div>
      <div id="aside-block-mobile">
        <ul>
          {lines.map((line) => (
            <li key={line} className={currentSection === line ? "active" : ""}>
              <span className="line-bar-mobile"></span>
            </li>
          ))}
        </ul>
      </div>
      <div
        id="scroll-text"
        className={currentSection === 0 ? "visible" : "hidden"}
      >
        <span>SCROLLDOWN</span>
        <p className="scroll-icon-minus"></p>
      </div>
    </aside>
  );
};

export default Aside;
