//CSS
import "./Curriculum.css";

//Components
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionContent from "../SectionContent/SectionContent";

//Hooks
import { useVisibleState } from "../../hooks/useVisibleState";

const Curriculum = () => {
  const { ref, isVisible } = useVisibleState(0.3);
  return (
    <section id="curriculum" ref={ref}>
      <div className="sections-wrapper">
        <SectionInfo
          title="Currículo"
          text="Em breve."
          isVisible={isVisible}
        />
        <SectionContent />
      </div>
    </section>
  );
};

export default Curriculum;
