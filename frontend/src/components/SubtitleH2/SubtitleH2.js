//CSS
import './SubtitleH2.css';

const SectionTitle = ({ children }) => {
  return (
    <div className="subtitle__container">
      <div className="subtitle__decorator">
        <span className="decorator__line"></span>
        <span className="decorator__dot"></span>
      </div>
      <h2 className="subtitle__text">{children}</h2>
    </div>
  );
};

export default SectionTitle;