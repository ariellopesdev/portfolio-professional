//Hooks
import { useEffect, useRef, useState } from "react";

/* 
  Hook that monitors whether an element is visible on the screen using IntersectionObserver.
  It returns a ref to attach to any DOM element and a boolean indicating its visibility.
*/

export function useVisibleState(threshold = 1.0) {
    // Holds whether the element is currently visible in the viewport
    const [isVisible, setIsVisible] = useState(false);
    // Reference to the DOM element we want to observe
    const ref = useRef(null);

    useEffect(()=>{
        const target = ref.current;
        if(!target) return;

        // Create the IntersectionObserver with a given visibility threshold
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Update state based on whether the element is intersecting
                    setIsVisible(entry.isIntersecting);
                });
            },
            {threshold}// Minimum percentage of visibility required to trigger
        );

        // Start observing the target element
        observer.observe(target);
        // Cleanup: disconnect observer when component unmounts or threshold changes
        return ()=> observer.disconnect();
    }, [threshold]);

    // Return the ref for attaching and the visibility state
    return {ref, isVisible};
}