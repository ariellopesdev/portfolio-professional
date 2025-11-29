import { useState, useRef } from "react";

export default function useCarousel(length) {
  //// State that keeps track of which carousel item is visible
  const [index, setIndex] = useState(0);
  // State responsible for controlling the animation classes (entering/exiting)
  const [anim, setAnim] = useState("entering");

  
// Function to navigate to a specific index of the carousel.
// It triggers the exit animation, changes the slide, and then triggers the entrance animation.
  const goTo = (newIndex) => {
    // First, add exit animation
    setAnim("exiting");

    setTimeout(() => {
      // After 350ms, switch the slide
      setIndex(newIndex);
      // Triggers entry animation
      setAnim("entering");

      // After 600ms of the entrance animation, remove the animation class
      setTimeout(() => setAnim(""), 600);
    }, 350);
  };

  // Goes to the next slide (returns to the start if it's on the last one → loop effect)
  const next = () => goTo((index + 1) % length);
  // Go to the previous slide (goes back to the last one if on the first)
  const prev = () => goTo(index === 0 ? length - 1 : index - 1);

  // Reference to store the initial touch position (for mobile swipe)
  const touchStartX = useRef(0);

  // Stores where the finger touched the screen
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Checks the distance traveled by the finger when released (swipe)
  const onTouchEnd = (e) => {
    const dist = e.changedTouches[0].clientX - touchStartX.current;
    // Swipe right → previous slide
    if (dist > 50) prev();
    // Swipe left → next slide
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
