import { useState} from "react";

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

  return {
    index,
    anim,
    goTo,
  };
}
