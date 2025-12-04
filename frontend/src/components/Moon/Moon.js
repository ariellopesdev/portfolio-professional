//CSS
import "./Moon.css";

//Hooks
import { useEffect, useRef, useState } from "react";

//Images
import photoPortfolio from "../../assets/images/portfolio-image2.png";

const Moon = ({ isVisible }) => {
  const moonOrbitRef = useRef(null);
  const starsRef = useRef([]);
  const [visibleState, setVisibleState] = useState(false);

  //GENERATES STAR POSITIONS ONLY ONCE
  if (starsRef.current.length === 0) {
    starsRef.current = Array.from({ length: 60 }).map(() => {
      const size = Math.random() * 2 + 1;
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

      //REVERSE MOVEMENTE(PARALLAX EFFECT)
      const moveX = x * -60;
      const moveY = y * -60;

      moonOrbit.style.transform = `translate(${moveX}px, calc(-50% + ${moveY}px))`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(()=>{
    let t;
    if(isVisible){
      t = setTimeout(()=> setVisibleState(true), 100);
    }else {
      setVisibleState(false);
    }
    return ()=> clearTimeout(t);
  },[]);

  useEffect(()=>{
    let t;
    if(isVisible){
      setVisibleState(false);
      t = setTimeout(()=> setVisibleState(true), 40);
    }else{
      setVisibleState(false);
    }
    return ()=> clearTimeout(t);
  },[isVisible]);

  return (
    <div className="moon-orbit" ref={moonOrbitRef}>
      {/* Moon */}
      <div className={`moon ${visibleState ? "moon-visible" : "moon-hidden"}`}>
        <img
          src={photoPortfolio}
          alt="Photo to portfolio"
          className="portfolio-image"
        />
      </div>
      {/* Rings */}
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`ring ring-${i + 1}`}></div>
      ))}
      {/* Ring 6 with stars */}
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
