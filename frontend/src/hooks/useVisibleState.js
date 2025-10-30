import { useEffect, useRef, useState } from "react";

/* Hook que monitora se um elemento está visível na tela. */

export function useVisibleState(threshold = 1.0) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(()=>{
        const target = ref.current;
        if(!target) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            {threshold}
        );

        observer.observe(target);
        return ()=> observer.disconnect();
    }, [threshold]);

    return {ref, isVisible};
}