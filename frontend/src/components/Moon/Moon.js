//CSS
import "./Moon.css";

//Hooks
import { useEffect, useRef } from "react";

const Moon = () => {
  const moonOrbitRef = useRef(null);

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
      <div className="moon"></div>
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`ring ring-${i + 1}`}></div>
      ))}
    </div>
  );
};

export default Moon;
