// CSS
import "./Moon.css";

// Hooks
import { useEffect, useRef, useState } from "react";

// Images
import photoPortfolio from "../../assets/images/portfolio-image2.png";

const Moon = () => {
  const moonOrbitRef = useRef(null);
  const starsRef = useRef([]);
  const [visible, setVisible] = useState(false);

  // Generate stars once
  if (starsRef.current.length === 0) {
    starsRef.current = Array.from({ length: 60 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
    }));
  }

  // Parallax
  useEffect(() => {
    const moonOrbit = moonOrbitRef.current;

    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      moonOrbit.style.transform = `translate(${x * -60}px, calc(-50% + ${
        y * -60
      }px))`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Trigger animation on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="moon-orbit" ref={moonOrbitRef}>
      {/* Moon */}
      <div className={`moon ${visible ? "moon-visible" : "moon-hidden"}`}>
        <img
          src={photoPortfolio}
          alt="Photo to portfolio"
          className="portfolio-image"
        />
      </div>

      {/* Rings */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`ring ring-${i + 1}`} />
      ))}

      {/* Ring with stars */}
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
          />
        ))}
      </div>
    </div>
  );
};

export default Moon;
