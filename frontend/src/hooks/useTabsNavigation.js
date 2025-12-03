import { useState, useRef } from "react";

export default function useTabsNavigation(length) {
  // Current active tab index
  const [index, setIndex] = useState(0);

  // Animation state for transitions (entering / exiting / "")
  const [anim, setAnim] = useState("entering");

  // Switch to a specific tab
  const goTo = (newIndex) => {
    // Trigger exit animation
    setAnim("exiting");

    setTimeout(() => {
      // Change the visible tab
      setIndex(newIndex);

      // Trigger entering animation
      setAnim("entering");

      // Remove animation class after it finishes
      setTimeout(() => setAnim(""), 600);
    }, 350);
  };

  // Reference to store the starting X position for touch events (mobile swipe)
  const touchStartX = useRef(0);

  // Capture initial touch position
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Detect swipe direction when touch ends
  const onTouchEnd = (e) => {
    const dist = e.changedTouches[0].clientX - touchStartX.current;

    // Swipe right → go to previous tab (if it exists)
    if (dist > 50 && index > 0) goTo(index - 1);

    // Swipe left → go to next tab (if it exists)
    if (dist < -50 && index < length - 1) goTo(index + 1);
  };

  return {
    index,
    anim,
    goTo,
    onTouchStart,
    onTouchEnd,
  };
}
