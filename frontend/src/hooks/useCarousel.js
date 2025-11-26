import { useState, useRef } from "react";

export default function useCarousel(length) {
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState("entering");

  const goTo = (newIndex) => {
    setAnim("exiting");

    setTimeout(() => {
      setIndex(newIndex);
      setAnim("entering");

      setTimeout(() => setAnim(""), 600);
    }, 350);
  };

  const next = () => goTo((index + 1) % length);
  const prev = () => goTo(index === 0 ? length - 1 : index - 1);

  // Swipe mobile
  const touchStartX = useRef(0);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const dist = e.changedTouches[0].clientX - touchStartX.current;
    if (dist > 50) prev();
    if (dist < -50) next();
  };

  return {
    index,
    anim,
    goTo,
    next,
    prev,
    onTouchStart,
    onTouchEnd,
  };
}
