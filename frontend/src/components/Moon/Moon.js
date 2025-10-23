//CSS
import "./Moon.css";

//Hooks
import { useEffect, useRef } from "react";

//Images
import photoPortfolio from "../../assets/images/portfolio-image2.png";

const Moon = ({ isVisible }) => {
  const moonOrbitRef = useRef(null);
  const starsRef = useRef([]);

  //Gera posições das estrelas apenas uma vez
  if (starsRef.current.length === 0) {
    starsRef.current = Array.from({ length: 60 }).map(() => {
      const size = Math.random() * 2 + 1; // 1 - 3px
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 4;
      return { size, top, left, delay };
    });
  }

  useEffect(() => {
    const moonOrbit = moonOrbitRef.current;
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / innerWidth;
      const y = (e.clientY - innerHeight / 2) / innerHeight;

      //Movimento inverso (efeito parallax)
      const moveX = x * -40;
      const moveY = y * -40;

      moonOrbit.style.transform = `translate(${moveX}px, calc(-50% + ${moveY}px))`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="moon-orbit" ref={moonOrbitRef}>
      {/* Lua */}
      <div className={`moon ${!isVisible ? "moon-hidden" : ""}`}>
        <img
          src={photoPortfolio}
          alt="Photo to portfolio"
          className="portfolio-image"
        />
      </div>

      {/* Anéis */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`ring ring-${i + 1}`}></div>
      ))}

      {/* Ring 6 com estrelas */}
      <div className="ring ring-6">
        {starsRef.current.map((star, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Moon;
