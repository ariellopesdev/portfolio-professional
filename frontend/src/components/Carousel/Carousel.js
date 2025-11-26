// Carousel.css
import "./Carousel.css";

// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({
  blocks,
  index,
  anim,
  prev,
  next,
  goTo,
  onTouchStart,
  onTouchEnd,
}) => {
  return (
    <div
      id="carousel-wrapper"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Arrows */}
      <button className="carousel-arrow left" onClick={prev}>
        <FaChevronLeft />
      </button>

      <button className="carousel-arrow right" onClick={next}>
        <FaChevronRight />
      </button>

      {/* Slide animation wrapper */}
      <div className={`carousel-slide ${anim}`}>
        {blocks[index].content}
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {blocks.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
