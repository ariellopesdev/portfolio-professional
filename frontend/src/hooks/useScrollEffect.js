import { useEffect, useState, useRef } from "react";

export function useScrollEffect(sections) {
  // Index of the currently active/visible section
  const [currentSection, setCurrentSection] = useState(0);

  // Indicates when the hook is initialized and ready to run effects
  const [isReady, setIsReady] = useState(false);

  // Prevents multiple scroll triggers at the same time (wheel spam)
  const isScrolling = useRef(false);

  // Tracks whether the scroll originated from clicking the menu (not from mouse/touch)
  const isManualScroll = useRef(false);

  const canChangeSection = (direction) => {
    const currentId = sections[currentSection];
    const el = document.getElementById(currentId);

    if (!el) return true;

    const { scrollTop, scrollHeight, clientHeight } = el;

    if (direction === "down") {
      return scrollTop + clientHeight >= scrollHeight - 2;
    }

    if (direction === "up") {
      return scrollTop <= 2;
    }

    return true;
  };

  // -------------------------------------------
  // SCROLL TRIGGERED BY MENU CLICK (manual scroll)
  // -------------------------------------------
  const scrollToSection = (index) => {
    // Mark that this scroll is manual (menu-driven)
    isManualScroll.current = true;

    // Update the target section index
    setCurrentSection(index);

    // Scroll the selected section smoothly into view
    const target = document.getElementById(sections[index]);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // After the smooth scroll finishes, allow automatic scroll logic again
    setTimeout(() => {
      isManualScroll.current = false;
    }, 800);
  };

  // -------------------------------------------
  // NATURAL SCROLL CONTROL (mouse wheel / touch swipe)
  // -------------------------------------------
  const handleScroll = (direction) => {
    if (isScrolling.current || isManualScroll.current) return;

    isScrolling.current = true;

    setCurrentSection((prev) => {
      const nextIndex = direction === "down" ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(nextIndex, sections.length - 1));
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    // Hook is now fully mounted and ready
    setIsReady(true);

    // Mouse wheel event handler
    const onWheel = (e) => handleScroll(e.deltaY > 0 ? "down" : "up");

    // Touch swipe handling
    let startY = 0;

    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      const diff = startY - endY;

      // Only trigger slide change if swipe distance is significant
      if (Math.abs(diff) > 50) {
        handleScroll(diff > 0 ? "down" : "up");
      }
    };

    // Add event listeners
    window.addEventListener("wheel", onWheel);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // -------------------------------------------
  // AUTOMATIC SCROLL WHEN currentSection CHANGES
  // -------------------------------------------
  useEffect(() => {
    // Avoid auto-scroll before initialization
    // Avoid auto-scroll when the user clicked a menu item
    if (!isReady || isManualScroll.current) return;

    const target = document.getElementById(sections[currentSection]);

    // Smoothly scroll to the updated section
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection, isReady]);

  // Expose the important values and functions
  return { currentSection, isReady, scrollToSection };
}
