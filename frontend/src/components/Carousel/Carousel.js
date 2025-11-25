//CSS
import "./Carousel.css";

//Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ blocks, index, anim, prev, next, goTo, onTouchStart, onTouchEnd }) => {
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

      {/* Slide */}
      <div className={`carousel-slide ${anim}`}>
        <div className="slide-left">
          <h1>{blocks[index].title}</h1>
          <p>{blocks[index].text}</p>
        </div>

        <div className="slide-right">{blocks[index].image}</div>
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
